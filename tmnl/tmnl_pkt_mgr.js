/**
 * 终端通讯数据管理
 *
 *
 */
var util = require('util'),
    events = require('events'),
    Packet = require('./tmnl_packet').packet;

//报文验证
var check = function (data) {
    return true;
};

var pkt_manager = function (socket) {
    events.EventEmitter.call(this);
    this.lock = false;
    this.seq = 0;
    this.socket = socket;
    this.recv_list = [];
    this.send_list = [];
    this.buffer = new Buffer(0);//缓冲区
};

util.inherits(pkt_manager, events.EventEmitter);

pkt_manager.prototype.recv = function (data) {
    /**
     * TODO
     * 检查收到的报文（data）的格式、长度、校验等
     * 如果长度不正确，按照报文中的长度截取后再判断
     * 报文正确添加到recv_list中
     */
    if (check(data)) {
        this.recv_list.push({data: data});
    } else {
        //TODO 否认帧
    }
};

pkt_manager.prototype.req = function (obj) {
    var packet = new Packet(obj);
};

exports.pkt_mgr = pkt_manager;