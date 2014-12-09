/**
 * 终端通讯数据管理
 *
 *
 */
var util = require('util'),
    events = require('events'),
    _ = require('underscore'),
    tools = require('../tools').tools,
    Packet = require('./tmnl_packet').packet;

var pkt_manager = function (socket) {
    events.EventEmitter.call(this);
    this.lock = false;
    this.packets = [];
    this.socket = socket;
    this.socket.seq = 0;
};

util.inherits(pkt_manager, events.EventEmitter);

//socket接收到数据
pkt_manager.prototype.recv = function (hex) {
    var _self = this, packet = null, seq = tools.getSEQ(hex), dir = tools.getDIR(hex), prm = tools.getPRM(hex);
    if (dir == 1 && prm == 1) {
        //判断为终端发起的请求数据
        //TODO 直接创建数据包
        packet = new Packet({dir: 1, prm: 1, hex: hex, socket: this.socket});
        packet.on('send', function () {
            _self.packets.shift();
            _self.lock = false;
        });
        this.packets.push(packet);
        this.send();
    } else {
        //判断为终端发送的响应数据
        //TODO 根据SEQ查找现有的数据包
        packet = _.find(this.packets, function (item) {
            return item.get_seq() == seq;
        });
        if (packet) {
            packet.recv(hex);
        } else {
            //TODO 收到终端响应数据，但是没找到对应SEQ的数据包
            console.log('收到终端响应数据，但是没找到对应SEQ的数据包');
        }
    }
};

//tmnl接收到的请求数据
pkt_manager.prototype.req = function (json, cb) {
    var _self = this, packet = new Packet({json: json, cb: cb, socket: this.socket});
    packet.on('timeout', function (data) {
        _self.lock = false;
        //TODO shift
    });
    this.packets.push(packet);
    this.send();
};

pkt_manager.prototype.send = function () {
    if (this.lock == false) {
        this.lock = true;
        var packet = this.packets[0];
        if (packet) {
            var _self = this;
            packet.on('recv', function (data) {
                _self.packets.shift();
                _self.lock = false;
            });
            packet.send();
        }
    }
};

exports.pkt_mgr = pkt_manager;