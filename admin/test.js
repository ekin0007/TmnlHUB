/**
 * 测试界面
 *
 */
var _ = require('underscore'),
    tmnl_mgr = require('../tmnl/tmnl_manager');


exports.handler = function (req, res) {
    //res.set('Content-Type', 'log/plain');
    res.attachment('abc.log');
    res.send('{a:231231231231}');
};