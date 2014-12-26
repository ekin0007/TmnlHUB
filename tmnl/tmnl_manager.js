/**
 * 终端管理器
 */
var _ = require('underscore'),
    log = require('../sys_log'),
    config = require('../config').config,
    tmnl_pkt_mgr = require('./tmnl_pkt_mgr').pkt_mgr,
    tools = require('../tools').tools,
    admin_server = require('../admin/admin_server').io;

//已连接的终端列表
var tmnl_list = {},

//返回socket sid，列表中的唯一标示
    get_sid = function (data) {
        return tools.getA1(data) + '@' + tools.getA2(data);
    },

//返回列表长度（总数）
    get_size = function () {
        return _.size(tmnl_list);
    },

//返回指定的sid是否已经存在
    is_exist = function (sid) {
        return _.has(tmnl_list, sid);
    },

//返回指定的socket
    getSocket = function (sid) {
        return tmnl_list[sid];
    },

//删除指定的socket
    remove = function (sid) {
        delete tmnl_list[sid];
    },

//新增socket
    push = function (socket) {
        //配置超时时间
        socket.setTimeout(config.tmnl_delay_timeout);

        //配置socket事件
        socket.on('connect', on_connect);
        socket.on('data', on_data);
        socket.on('end', on_end);
        socket.on('timeout', on_timeout);
        socket.on('drain', on_drain);
        socket.on('error', on_error);
        socket.on('close', on_close);
    },

    on_connect = function () {
        //do sth when socket connected
    },

    on_data = function (data) {
        //TODO 先检查报文合法性，非法报文并且未登录，回否认帧
        if (tools.data_invalid(data)) {
            admin_server.emit('tmnl_message', tools.now(), ' >>>>> ', tools.hex_str(data));
            if (this.pkt_mgr) {
                //TODO 传入对象，包括data和callback
                this.pkt_mgr.recv(data);
            } else {
                var sid = get_sid(data), old = undefined;
                if (is_exist(sid) == true) {
                    old = getSocket(sid);
                    old.destroy();
                }
                this.A1 = tools.getA1(data);
                this.A2 = tools.getA2(data);
                this.sid = sid;
                this.pkt_mgr = new tmnl_pkt_mgr(this);
                tmnl_list[sid] = this;
                this.pkt_mgr.recv(data);
                admin_server.emit('tmnlLogin', get_size());
            }
        } else {
            //TODO 如果有A1和A2，错误的报文也写入日志
            this.destroy();
        }
    },

    on_end = function () {
        log.pkt('设备断开链接', this.A1, this.A2);
    },

    on_timeout = function () {
        log.alert('on_timeout');
    },

    on_drain = function () {
        console.log('on_drain');
    },

    on_error = function () {
        console.log('on_error');
    },

//关闭事件
    on_close = function (trans_error) {
        //TODO 停止执行一切正在执行的任务
        //传输错误导致的关闭
        if (trans_error == true) {
            log.alert(trans_error);
            //TODO sth
        }
        //判断被关闭的socket和tmnl_list中的socket是否相同
        // 如果相同则删除，不相同则不删除
        // 不相同说明这个socket已经被相同sid的socket给覆盖了，所以只关闭不从列表中删除
        if (getSocket(this.sid) === this) {
            remove(this.sid);
        } else {
            delete this;
        }
        admin_server.emit('tmnlLogin', get_size());
    };

exports.push = push;
exports.len = get_size;
exports.get = getSocket;
exports.list = tmnl_list;