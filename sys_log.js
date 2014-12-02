/**
 * 记录系统日志和系统错误
 */

var fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    moment = require('moment'),
    config = require('./config').config;

var mk_dirs = function (dirpath, cb) {
        fs.exists(dirpath, function (exists) {
            if (exists) {
                cb.call(null);
            } else {
                //尝试创建父目录，然后再创建当前目录
                mk_dirs(path.dirname(dirpath), function () {
                    fs.mkdir(dirpath, cb);
                });
            }
        });
    },

    write_log = function (text) {
        if (!fs.exists(config.sys_log)) {
            mk_dirs(config.sys_log, function (err) {
                if (err) throw err;
                var time = moment().format('YYYY-MM-DD HH:mm:ss');
                text = time + '\r\n' + text + '\r\n\r\n';
                fs.appendFile(config.sys_log + '/sys_log', text, function (err) {
                    if (err) throw err;
                });
            });
        }
    },

    write_alert = function (text) {
        if (!fs.exists(config.sys_alert)) {
            mk_dirs(config.sys_alert, function (err) {
                if (err) throw err;
                var time = moment().format('YYYY-MM-DD HH:mm:ss');
                text = time + '\r\n' + text + '\r\n\r\n';
                fs.appendFile(config.sys_alert + '/sys_alert', text, function (err) {
                    if (err) throw err;
                });
            });
        }
    },

    write_error = function (text) {
        if (!fs.exists(config.sys_err)) {
            mk_dirs(config.sys_err, function (err) {
                if (err) throw err;
                var time = moment().format('YYYY-MM-DD HH:mm:ss');
                text = time + '\r\n' + text + '\r\n\r\n';
                fs.appendFile(config.sys_err + '/sys_error', text, function (err) {
                    if (err) throw err;
                });
            });
        }
    },

    write_packets = function (text, A1, A2) {
        var date = moment().format('YYYY-MM-DD'),
            dir = path.join(config.sys_packets, date),
            file = path.join(dir, A1 + '@' + A2);
        if (!fs.exists(dir)) {
            mk_dirs(dir, function (err) {
                if (err) throw err;
                var time = moment().format('YYYY-MM-DD HH:mm:ss');
                text = time + '\r\n' + text + '\r\n\r\n';
                fs.appendFile(file, text, function (err) {
                    if (err) throw err;
                });
            });
        }
    };

exports.log = write_log;
exports.alert = write_alert;
exports.err = write_error;
exports.pkt = write_packets;