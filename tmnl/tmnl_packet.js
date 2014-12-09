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


var get_seq = function (seq) {
        return seq >= 15 ? 0 : seq++;
    },

    dateStr = 'YYYY-MM-DD HH:mm:ss',

    json_hex = function (json) {
        try {
            return _698.json_hex(json);
        } catch (err) {
            throw '无法找到对应的协议';
        }
    },

    packet = function (opts) {
        events.EventEmitter.call(this);
        this.timer = undefined;
        var _self = this;
        _.each(opts, function (item, index) {
            _self[index] = item;
        });
    };

util.inherits(packet, events.EventEmitter);

packet.prototype.get_seq = function () {
    return this.socket.seq;
};

packet.prototype.set_seq = function (seq) {
    this.seq = seq;
};

packet.prototype.timeout = function () {
    var _self = this;
    _self.timer = setTimeout(function () {
        _self.emit('timeout');
    }, config.tmnl_recv_timeout);
};

packet.prototype.recv = function (hex) {
    var json = _698.hex_json(hex);
    if (this.cb) this.cb.call(null, json);
    clearTimeout(this.timer);
    this.emit('recv', hex);
};

packet.prototype.send = function () {
    var _self = this, buff, seq = 0;
    if (this.dir && this.prm) {
        //TODO 如果是终端请求帧，发送确认或否认帧
        seq = tools.getSEQ(this.hex);
        var json = tools.format_json({
            A1: tools.getA1(this.hex),
            A2: tools.getA2(this.hex),
            AFN: 0x00, seq: seq,
            C: {DIR: 0, PRM: 0, FCB: 0, FCV: 0},
            DU: [{pn: 0, DT: [{Fn: 1}]}]
        });
        buff = json_hex(json);
    } else {
        seq = get_seq(this.socket.seq);
        this.json.seq = seq;
        buff = json_hex(this.json);
    }
    this.socket.seq = seq;
    this.socket.write(buff, function () {
        _self.timeout();
    });
    //TODO 发送前再转hex，主要是为了保证SEQ的唯一性
    this.emit('send');
};

exports.packet = packet;