/**
 * 终端通讯数据包
 * 负责接收和发送数据
 *
 */
var util = require('util'),
    path = require('path'),
    events = require('events'),
    _ = require('underscore'),
    moment = require('moment'),
    config = require('../config').config,
    tools = require('../tools').tools,
    cError = require('../error').Error,
    _698 = require('../protocol/698'),
    sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database(path.join(__dirname, '../db')),
    admin_server = require('../admin/admin_server').io;

var json_hex = function (json) {
        try {
            return _698.json_hex(json);
        } catch (err) {
            throw '无法找到对应的协议';
        }
    },

    is_heartbeat = function (json) {
        if (json.AFN == undefined) return true;
        return (json.AFN == 0x02 && json.DU[0].DT[0].Fn == 3);
    };

/**
 * 构造函数
 */
var packet = function (opts) {
    events.EventEmitter.call(this);
    this.timer = null;//计时器
    this.retry_times = 0;//重发次数
    this.output = {
        REQ: {buff: 1, json: 2, date: 3},
        RES: {buff: 1, json: 2, date: 3}
    };
    var _self = this, SEQ = undefined;
    _.each(opts, function (item, index) {
        _self[index] = item;
    });
    if (this.hex) {
        this.output.REQ.buff = tools.hex_str(this.hex);
    } else {
        this.output.REQ.json = this.json;
    }

    this.set_seq = function (seq) {
        SEQ = seq;
    };

    this.get_seq = function () {
        return SEQ;
    }
};

util.inherits(packet, events.EventEmitter);

/**
 * 重发
 */
packet.prototype.on('timeout', function () {
    this.retry_times++;
    if (this.json.retry > 0 && this.retry_times <= this.json.retry) {
        console.log('第' + this.retry_times + '/' + this.json.retry + '次重发');
        this.send();
    } else {
        this.emit('end', cError('通讯超时，共重发' + (this.retry_times - 1) + '次'));
    }
});

packet.prototype.on('recv', function (err, data) {
    this.emit('end', err, data);
});

packet.prototype.on('send', function (hex) {
    admin_server.emit('tmnl_message', tools.now(), ' <<<<< ', tools.hex_str(hex));
});

packet.prototype.on('end', function (err) {
    clearTimeout(this.timer);
    if (this.cb) this.cb.call(null, err, this.output);
    if (!err && !is_heartbeat(this.output.REQ.json)) {
        db.run('insert into frames (A1, A2, req_buff, res_buff, req_json, res_json, req_date, res_date) ' +
        'values ($A1, $A2, $req_buff, $res_buff, $req_json, $res_json, $req_date, $res_date)', {
            $A1: this.socket.A1, $A2: this.socket.A2,
            $req_buff: this.output.REQ.buff,
            $res_buff: this.output.RES.buff,
            $req_json: util.format('%j', this.output.REQ.json),
            $res_json: util.format('%j', this.output.RES.json),
            $req_date: this.output.REQ.date,
            $res_date: this.output.RES.date
        }, function (err) {
            //console.log(cError(err));
        });
    }
});

packet.prototype.timeout = function () {
    this.timer = setTimeout(function (packet) {
        packet.emit('timeout');
    }, config.tmnl_recv_timeout, this);
};

packet.prototype.recv = function (hex) {
    var err = null;
    try {
        this.output.RES = {buff: tools.hex_str(hex), json: _698.hex_json(hex), date: tools.now()};
    } catch (e) {
        err = e;
    }
    this.emit('recv', cError(err), this.output);
};

packet.prototype.send = function (cb) {
    try {
        var _self = this, buff;
        if (this.dir && this.prm) {
            var json = tools.confirm(this.hex);
            buff = json_hex(json);
            this.output.REQ = {buff: tools.hex_str(this.hex), json: _698.hex_json(this.hex), date: tools.now()};
            this.output.RES = {buff: tools.hex_str(buff), json: json, date: tools.now()};
        } else {
            this.json.seq = this.get_seq();
            buff = json_hex(this.json);
            this.output.REQ = {buff: tools.hex_str(buff), json: this.json, date: tools.now()};
        }
        this.socket.write(buff, function () {
            if (_self.dir && _self.prm) {
                _self.emit('end', null);
            } else {
                _self.timeout();
            }
        });
        if (cb) cb.call(null, null, this);
        this.emit('send', buff);
    } catch (err) {
        this.emit('end', cError(err));
    }
};

exports.packet = packet;
/**
 * TODO 使用socket.io将通讯的报文以广播的形式发送到前台（包括心跳帧），包括错误信息，前台通过CSS来排版这些内容，显示报文的panel可以加入缓存属性
 * this.output只用来存库（不包括心跳帧）
 */