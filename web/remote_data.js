/**
 * 采集，下发
 * ----------------------------------------------------------------------------------------
 * var packet = {
 *    A1: 4103,                        //行政区划码
 *    A2: 123,                         //终端地址
 *    A3: 0,                           //主站地址和组地址标志
 *    AFN: 3,                          //AFN
 *    DU: [{                           //数据单元
 *        pn: 0,                       //pn
 *        DT: [{                        //信息类
 *            Fn: 10,                  //Fn
 *            DATA: [],                //数据，具体格式参考协议规定，可赋值为各种数据类型
 *            retry: 1                 //重发次数
 *        }]
 *    }],
 *    AUX: {                           //附加信息域
 *        PW: 0,                       //消息认证码字段（下行）
 *        EC: 1,                       //事件计数器（上行）
 *        Tp: '2014-10-10 10:10:10'    //时间标签
 *    }
 * };
 * ----------------------------------------------------------------------------------------
 */
var _ = require('underscore'),
    tmnl_mgr = require('../tmnl/tmnl_manager'),
    _698 = require('../protocol/698'),
    tools = require('../tools').tools;

var format_json = function (str) {
        try {
            str = JSON.parse(str);
            var json = {A1: str.A1, A2: str.A2, A3: 0, AFN: str.AFN, C: {DIR: 0, PRM: 1, FCB: 0, FCV: 0}};
            json.DU = _.map(str.DU, function (item) {
                return {
                    pn: item.pn,
                    DT: _.map(item.DT, function (dt) {
                        return {
                            Fn: dt.Fn,
                            DATA: dt.DATA,
                            retry: dt.retry || 0
                        }
                    })
                };
            });
            json.AUX = str.AUX || {};
            return json;
        } catch (err) {
            throw 'JSON格式错误';
        }
    },

    json_hex = function (json, seq) {
        try {
            json.seq = seq;
            return _698.json_hex(json);
        } catch (err) {
            throw '无法找到对应的协议';
        }
    };

exports.handler = function (req, res) {
    try {
        var json = format_json(req.body.json),
            A1 = json.A1, A2 = json.A2, sid = A1 + '@' + A2, tmnl = tmnl_mgr.get(sid);
        if (!tmnl) {
            throw '无法找到对应的设备';
        } else {
            var hex = json_hex(json, tmnl.seq);
            console.log(tools.hex_str(hex));
        }
    } catch (err) {
        res.send(err);
    }

    /** TODO
     * JSON转成HEX
     * 发送，等待回调结果
     * 返回结果
     * 错误信息必须自定义成一套完善的结构
     */
};