/**
 * 终端通讯数据包
 *
 *
 */
var util = require('util'),
    events = require('events'),
    moment = require('moment'),
    tools = require('../tools').tools,
    _698 = require('../protocol/698');

var dateStr = 'YYYY-MM-DD HH:mm:ss',

    json_hex = function (json) {
        try {
            return _698.json_hex(json);
        } catch (err) {
            throw '无法找到对应的协议';
        }
    },

    packet = function (data, socket) {
        var json = _698.json_hex(data);
        if (_.has([0x02], json.AFN)) {
            //回确认或否认
        } else {

        }


        var recv = data, res = undefined;
        this.socket = socket;
        events.EventEmitter.call(this);

        if (tools.getDIR(data) == 1 && tools.getPRM(data) == 1) {
            //启动站是终端
        } else {
            //启动站是前置机
        }
    };

util.inherits(packet, events.EventEmitter);

packet.prototype.recv = function (data) {
    this.emit('end', data);
};

packet.prototype.send = function () {
    this.socket.write();
};

exports.packet = packet;