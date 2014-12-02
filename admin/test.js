/**
 * 测试界面
 *
 */
var _ = require('underscore'),
    tmnl_mgr = require('../tmnl/tmnl_manager');


exports.handler = function (req, res) {
    var arr = _.map(tmnl_mgr.list, function (item) {
        return item.sid;
    });
    res.send(arr);
};