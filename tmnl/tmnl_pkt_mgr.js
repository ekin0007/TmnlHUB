/**
 * 终端通讯数据管理
 *
 *
 */
var util = require('util'),
    events = require('events'),
    tools = require('../tools').tools,
    Packet = require('./tmnl_packet').packet;

//报文验证
var check = function (data) {
    return true;
};

var pkt_manager = function (socket) {
    events.EventEmitter.call(this);
    this.socket = socket;
    this.buffer = new Buffer(0);//缓冲区

    var lock = false, recv_list = [], send_list = [], list = [];

    this.lock = function () {
        lock = true;
        return this;
    };

    this.unlock = function () {
        lock = false;
        var packet = send_list[0];
        if (packet) packet.send();
        return this;
    };

    this.lock_state = function () {
        return lock;
    };

    this.get_send = function () {
        return send_list;
    };

    this.set_send = function (packet) {
        send_list.push(packet);
        if (this.lock_state() === false) packet.send();
        return this;
    };

    this.send_shift = function () {
        send_list.shift();
        return this;
    }
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
        if (tools.getDIR(data) == 1 && tools.getPRM(data) == 1) {
            //终端请求帧
            /**
             * this.req() without callback
             */
        } else {
            //终端响应帧
            var seq = tools.getSEQ(data),
                packet = _.find(this.get_send(), function (item) {
                    return item.seq == seq;
                });
            if (packet) {
                /**
                 * TODO
                 * 触发end事件或者recv事件，unlock，发送下一个
                 */
                packet.recv(data);
            } else {
                /**
                 * TODO
                 * unlock,发送下一个数据包
                 */
                throw '无法找到请求帧';
            }
        }
    } else {
        //TODO 否认帧
    }
};

pkt_manager.prototype.req = function (json, cb) {
    var _self = this,
        packet = new Packet(json, this.socket);
    packet.on('send', function (err) {
        if (err) throw err;
        _self.lock();
    }).on('end', function (err, obj) {
        _self.send_shift().unlock();
        if (cb) cb.call(null, err, obj);
    });
    this.set_send(packet);
};

exports.pkt_mgr = pkt_manager;