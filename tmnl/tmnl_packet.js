/**
 * 终端通讯数据包
 * 负责接收和发送数据
 *
 */
var util = require('util'),
    events = require('events'),
    _ = require('underscore'),
    moment = require('moment'),
    config = require('../config').config,
    tools = require('../tools').tools,
    _698 = require('../protocol/698');

var json_hex = function (json) {
    try {
        return _698.json_hex(json);
    } catch (err) {
        throw '无法找到对应的协议';
    }
};

/**
 * 构造函数
 *
 *
 *
 *
 */
var packet = function (opts) {
    events.EventEmitter.call(this);
    this.timer = null;//计时器
    this.retry_times = 0;//重发次数
    this.log = {
        REQ: null,
        RES: null,
        DEBUG: {
            REQ: {buff: null, json: null, date: null},
            RES: {buff: null, json: null, date: null}
        }
    };
    var _self = this, SEQ = undefined;
    _.each(opts, function (item, index) {
        _self[index] = item;
    });
    if (this.hex) {
        this.log.REQ = tools.hex_str(this.hex);
    } else {
        this.log.DEBUG.REQ.json = this.json;
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
        this.emit('end', null, '通讯超时，共重发' + (this.retry_times - 1) + '次');
    }
});

packet.prototype.on('recv', function (hex) {
    this.emit('end', null, tools.hex_str(hex));
});

packet.prototype.on('send', function (buff) {
});

packet.prototype.on('end', function (err, data) {
    if (err) {
    } else if (this.cb) {
        this.cb.call(null, err, data);
    }
    console.log(util.format('%j', this.log));
    clearTimeout(this.timer);
});

packet.prototype.timeout = function () {
    this.timer = setTimeout(function (packet) {
        packet.emit('timeout');
    }, config.tmnl_recv_timeout, this);
};

packet.prototype.recv = function (hex) {
    var json = _698.hex_json(hex);
    //this.log.DEBUG.REQ.json = json;
    //this.log.DEBUG.REQ.date = moment().format('YYYY-MM-DD HH:mm:ss');
    this.emit('recv', hex);
};

packet.prototype.send = function (cb) {
    var _self = this, buff;
    if (this.dir && this.prm) {
        var json = tools.confirm(this.hex);
        buff = json_hex(json);
        this.log.REQ = tools.hex_str(this.hex);
        this.log.RES = tools.hex_str(buff);
        this.log.DEBUG.REQ.buff = this.log.REQ;
        this.log.DEBUG.RES = {buff: tools.hex_str(buff), json: json, date: moment().format('YYYY-MM-DD HH:mm:ss')};
    } else {
        this.json.seq = this.get_seq();
        buff = json_hex(this.json);
        this.log.REQ = tools.hex_str(buff);
        this.log.DEBUG.REQ = {buff: this.log.REQ, json: this.json, date: moment().format('YYYY-MM-DD HH:mm:ss')};
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
};

exports.packet = packet;