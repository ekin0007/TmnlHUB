/**
 * 终端服务端
 * //packets
 */
var net = require('net'),
    config = require('../config').config,
    tmnl_mgr = require('./tmnl_manager');

var server = net.createServer(function (socket) {
        tmnl_mgr.push(socket);
    }),

    start = function () {
        server.listen(config.tmnl_port, function (err) {
            if (err) throw err;
            console.log('tmnlServer is listening on', config.tmnl_port);
        });
    },

    stop = function (cb) {
        server.close(cb);
    },

    restart = function () {
        stop(start);
    };

exports.start = start;
exports.stop = stop;
exports.restart = restart;