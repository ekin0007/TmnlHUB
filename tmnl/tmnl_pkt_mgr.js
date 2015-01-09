/**
 * 终端通讯数据管理
 * 主要负责为每一个socket（设备通道）创建一个通讯包管理器
 * 用来管理当前通道所产生的全部通讯数据包，包括接受和发送
 * 并统一按顺序安排数据包的发送、等待接收
 *
 */
var util = require('util'),
    events = require('events'),
    _ = require('underscore'),
    tools = require('../tools').tools,
    Packet = require('./tmnl_packet').packet,
    broadcast = require('../web/broadcast');

/**
 * 构造函数
 * @param socket {object}
 */
var pkt_manager = function (socket) {
    events.EventEmitter.call(this);
    //锁，如果lock=true，则不能进行send操作
    this.lock = false;
    //所有创建的数据包都在这里面按创建的时间排列
    this.packets = [];
    //原始通道socket
    this.socket = socket;
    //数据包序列号
    this.seq = 0;
};

//继承事件
util.inherits(pkt_manager, events.EventEmitter);

/**
 * 接收数据
 * @param hex {Object|Buffer}
 * 接收到数据后，先判断数据时请求帧还是响应帧
 * 如果是请求帧，直接创建数据包，终端设备发送的请求数据一般包括登录帧，心跳帧，事件上报等数据
 * 如果是响应帧，在packets中，通过比对seq来查找对应的请求帧
 * 如果找到对应的请求包，执行数据包的recv方法
 * 如果没有找到，触发解锁事件
 */
pkt_manager.prototype.recv = function (hex) {
    var seq = tools.getSEQ(hex), dir = tools.getDIR(hex), prm = tools.getPRM(hex);
    if (dir == 1 && prm == 1) {
        //广播发送事件
        var cb = function (err, json) {
            if (!err) {
                if (json.REQ.json.AFN == 0x0e) {
                    broadcast.broadcast(err || json);
                }
            }
        };
        this.emit('push', {dir: 1, prm: 1, hex: hex, socket: this.socket, cb: cb}, seq);
    } else {
        var packet = _.find(this.packets, function (item) {
            return item.get_seq() == seq;
        });
        if (packet) {
            packet.recv(hex);
        } else {
            console.log('收到终端响应数据，但是没找到对应SEQ的数据包');
            this.emit('unlock');
        }
    }
};

/**
 * 创建主动请求数据
 * @param json {Object|JSON}
 * @param cb {Function}
 * 这个方法一般是由第三方使用的
 *
 */
pkt_manager.prototype.req = function (json, cb) {
    this.emit('push', {json: json, cb: cb, socket: this.socket});
};

/**
 * 发送数据
 * 发送之前先判断锁的状态，如果lock=true，直接退出函数
 * 如果lock=false，先把lock设置为true，然后取packets的第一个数据包
 * 如果取出的数据包为空，则解锁并退出
 * 否则设置数据包的SEQ，加上end事件监听，执行数据包的send方法
 */
pkt_manager.prototype.send = function () {
    if (this.lock == false) {
        this.lock = true;
        var packet = this.packets[0];
        if (packet) {
            var _self = this, seq = packet.get_seq();
            packet.set_seq(_.isNumber(seq) ? seq : tools.seq(this.seq));
            packet.once('end', function (err) {
                //TODO 加onlock事件
                _self.emit('unlock');
            }).send();
            this.emit('seq', packet.get_seq());
        } else {
            this.lock = false;
        }
    }
};

pkt_manager.prototype.on('push', function (data, seq) {
    var packet = new Packet(data);
    if (_.isNumber(seq)) packet.set_seq(seq);
    this.packets.push(packet);
    this.send();
});

/**
 * 触发解锁事件
 * 解锁，删除packets第一个元素
 * 执行发送
 */
pkt_manager.prototype.on('unlock', function () {
    this.lock = false;
    this.packets.shift();
    this.send();
});

/**
 * 更改SEQ时触发
 */
pkt_manager.prototype.on('seq', function (seq) {
    this.seq = seq;
});

exports.pkt_mgr = pkt_manager;