/**
 * 主站相对前置机来说是客户端，主站应主动和web_server建立socket连接
 * 当前置机收到终端设备主动上报的报文时（不包括登录和心跳帧）
 * 前置机会自动将解码后的JSON以广播的形式发送给每个已连接的主站
 */
var net = require('net'),
    _ = require('underscore'),
    config = require('../config').config,
    cError = require('../error').Error;

var webList = {};

var server = net.createServer(function (socket) {
        var ip = socket.remoteAddress, port = socket.remotePort;
        socket.sid = ip + port;
        socket.on('close', function (a) {
            try {
                if (_.has(webList, this.sid)) {
                    //webList[this.sid] = null;
                    delete webList[this.sid];
                }
            } catch (err) {
                console.log(cError(err));
            }
        }).on('error', function (err) {
            console.log(cError(err));
        });
        webList[socket.sid] = socket;
    }),

    start = function () {
        server.listen(config.broadcast, function (err) {
            if (err) throw err;
            console.log('broadcast is listening on', config.broadcast);
        });
    },

    stop = function (cb) {
        server.close(cb);
    },

    restart = function () {
        stop(start);
    },

    broadcast = function (data) {
        try {
            if (_.isObject(data)) {
                data = JSON.stringify(data);
            }
            _.each(webList, function (item) {
                item.write(data);
            })
        } catch (err) {
            console.log(cError(err));
        }
    };

exports.start = start;
exports.stop = stop;
exports.restart = restart;
exports.broadcast = broadcast;