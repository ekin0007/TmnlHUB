/**
 * 终端通讯数据包
 *
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
    var SEQ = undefined;
    events.EventEmitter.call(this);
    this.timer = null;//计时器
    this.retry_times = 0;//重发次数
    var _self = this;
    _.each(opts, function (item, index) {
        _self[index] = item;
    });
    //if (this.hex) console.log(tools.hex_str(this.hex));

    this.set_seq = function (seq) {
        SEQ = seq;
    };

    this.get_seq = function () {
        return SEQ;
    }
};

util.inherits(packet, events.EventEmitter);

/**
 * 自动重发
 */
packet.prototype.on('timeout', function () {
    console.log('onTimeout');
    this.retry_times++;
    if (this.json.retry > 0 && this.retry_times <= this.json.retry) {
        console.log('第' + this.retry_times + '/' + this.json.retry + '次重发');
        this.send(function (err, packet) {
            if (err) {
                packet.emit('end', err);
            }
        });
    } else {
        this.emit('end', null, '通讯超时，共重发' + (this.retry_times - 1) + '次');
    }
});

packet.prototype.on('recv', function (hex) {
    console.log('recv', hex);
    this.emit('end', null, tools.hex_str(hex));
});

packet.prototype.on('send', function (buff) {
    console.log('send', buff);
});

packet.prototype.on('end', function (err, data) {
    if (err) {
        console.log('Packet Error', err);
    } else if (this.cb) {
        this.cb.call(null, err, data);
    }
    clearTimeout(this.timer);
});

packet.prototype.timeout = function () {
    this.timer = setTimeout(function (packet) {
        packet.emit('timeout');
    }, config.tmnl_recv_timeout, this);
};

packet.prototype.recv = function (hex) {
    var json = _698.hex_json(hex);
    this.emit('recv', hex);
};

packet.prototype.send = function (cb) {
    var _self = this, buff;
    if (this.dir && this.prm) {
        var json = tools.confirm(this.hex);
        buff = json_hex(json);
    } else {
        this.json.seq = this.get_seq();
        buff = json_hex(this.json);
    }
    this.socket.write(buff, function () {
        if (_self.dir && _self.prm) {
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            _self.emit('end', null);
        } else {
            _self.timeout();
            console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBB');
        }
    });
    if (cb) cb.call(null, null, this);
    this.emit('send', buff);
};

exports.packet = packet;