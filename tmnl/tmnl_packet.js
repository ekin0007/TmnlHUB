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
    },

    now = function () {
        return moment().format('YYYY-MM-DD HH:mm:ss');
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
    this.output = {
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
        this.output.REQ = tools.hex_str(this.hex);
    } else {
        this.output.DEBUG.REQ.json = this.json;
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
        this.emit('end', '通讯超时，共重发' + (this.retry_times - 1) + '次');
    }
});

packet.prototype.on('recv', function (err, data) {
    this.emit('end', err, data);
});

packet.prototype.on('send', function (buff) {
});

packet.prototype.on('end', function (err, data) {
    clearTimeout(this.timer);
    if (this.cb) this.cb.call(null, err, this.output);
    //if (err) {
    //} else if (this.cb) {
    //    this.cb.call(null, err, data);
    //}
    console.log(util.format('%j', this.output));
});

packet.prototype.timeout = function () {
    this.timer = setTimeout(function (packet) {
        packet.emit('timeout');
    }, config.tmnl_recv_timeout, this);
};

packet.prototype.recv = function (hex) {
    var err = null;
    try {
        this.output.RES = tools.hex_str(hex);
        this.output.DEBUG.RES = {buff: this.output.RES, json: _698.hex_json(hex), data: now()};
    } catch (e) {
        err = e;
    }
    this.emit('recv', err, this.output);
};

packet.prototype.send = function (cb) {
    try {
        var _self = this, buff;
        if (this.dir && this.prm) {
            var json = tools.confirm(this.hex);
            buff = json_hex(json);
            this.output.REQ = tools.hex_str(this.hex);
            this.output.RES = tools.hex_str(buff);
            this.output.DEBUG.REQ = {buff: this.output.REQ, json: _698.hex_json(this.hex), date: now()};
            this.output.DEBUG.RES = {buff: tools.hex_str(buff), json: json, date: now()};
        } else {
            this.json.seq = this.get_seq();
            buff = json_hex(this.json);
            this.output.REQ = tools.hex_str(buff);
            this.output.DEBUG.REQ = {buff: this.output.REQ, json: this.json, date: now()};
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
        this.emit('end', err);
    }
};

exports.packet = packet;