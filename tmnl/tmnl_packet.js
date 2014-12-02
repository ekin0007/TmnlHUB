/**
 * 终端通讯数据包
 *
 *
 */
var util = require('util'),
    events = require('events');

var packet = function (data) {
    this.raw_data = data;
    events.EventEmitter.call(this);
};

util.inherits(packet, events.EventEmitter);

exports.packet = packet;