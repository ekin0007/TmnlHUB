var _ = require('underscore'),
    cError = require('../error').Error,
    tools = require('../tools').tools;

var json_hex = {
        AFN0: {
            Fn1: function () {
                return [];
            },
            Fn2: function () {
                return [];
            }
        },
        AFN1: {},
        AFN2: {},
        AFN3: {},
        AFN4: {},
        AFN5: {},
        AFN6: {},
        AFN8: {},
        AFN9: {},
        AFN10: {},
        AFN11: {},
        AFN12: {
            Fn2: function () {
                return [];
            }
        },
        AFN13: {},
        AFN14: {},
        AFN15: {},
        AFN16: {}
    },
    hex_json = {
        AFN0: {},
        AFN1: {},
        AFN2: {
            //登录帧
            Fn1: function (data) {

            }
        },
        AFN3: {},
        AFN4: {},
        AFN5: {},
        AFN6: {},
        AFN8: {},
        AFN9: {},
        AFN10: {},
        AFN11: {},
        AFN12: {
            Fn2: function (data) {
                //TODO 如何取数组的值？shift？splice？还是自己指定长度，像3.0里面的一样？
                var arr = data.splice(0, 6);
                return {
                    second: tools.bcd2b(arr[0]),
                    minute: tools.bcd2b(arr[1]),
                    hour: tools.bcd2b(arr[2]),
                    day: tools.bcd2b(arr[3]),
                    month: ((arr[4] >> 4) % 2) * 10 + arr[4] % 16,
                    year: tools.bcd2b(arr[5])
                };
            }
        },
        AFN13: {},
        AFN14: {},
        AFN15: {},
        AFN16: {}
    };

exports.json_hex = function (json) {
    var a1 = json.A1, a2 = json.A2, a3 = json.A3 || 0,
        c = tools.set_c(json), addr = tools.set_addr(a1, a2, a3),
        afn = json.AFN, seq = tools.set_seq(json),
        pwd = tools.set_pwd(json.AUX.PW), app = [], hex = [];
    _.each(json.DU, function (item) {
        var pn = item.pn;
        _.each(item.DT, function (dt) {
            var fn = dt.Fn, du = tools.setPn(pn).concat(tools.setFn(fn)),
                data = dt.data, retry = dt.retry;
            app = app.concat(du, json_hex['AFN' + afn]['Fn' + fn](data));
        });
    });
    app = [].concat(c, addr, afn, seq, app, pwd);
    hex = hex.concat(0x68, tools.set_len(app), 0x68, app, tools.set_cs(app), tools.set_end());
    return new Buffer(hex);
};
/**
 *  * var packet = {
 *    A1: 4103,                        //行政区划码
 *    A2: 123,                         //终端地址
 *    A3: 0,                           //主站地址和组地址标志
 *    AFN: 3,                          //AFN
 *    DU: [{                           //数据单元
 *        pn: 0,                       //pn
 *        DT: [{                       //信息类
 *            Fn: 10,                  //Fn
 *            DATA: []                 //数据，具体格式参考协议规定，可赋值为各种数据类型
 *        }]
 *    }],
 *    AUX: {                           //附加信息域
 *        PW: 0,                       //消息认证码字段（下行）
 *        EC: 1,                       //事件计数器（上行）
 *        Tp: '2014-10-10 10:10:10'    //时间标签
 *    },
 *    retry: 1                         //重发次数
 * };
 */
exports.hex_json = function (hex) {
    try {
        var json = {
            L: tools.getL1(hex),
            A1: tools.getA1(hex),
            A2: tools.getA2(hex),
            A3: 0,
            C: {dir: tools.getDIR(hex), prm: tools.getPRM(hex), acd: tools.getACD(hex), cfn: tools.getCFN(hex)},
            AFN: tools.getAFN(hex),
            SEQ: {tpv: tools.getTpV(hex), fir: tools.getFIR(hex), fin: tools.getFIN(hex), con: tools.getCON(hex), seq: tools.getSEQ(hex)},
            AUX: tools.getAUX(hex),
            DU: []
        }, du = tools.getDU(hex);
        while (du.length > 0) {
            var pn = du.splice(0, 2), fn = du.splice(0, 2);
            if (pn.length < 2 || fn.length < 2) break;
            pn = tools.getPn(pn[0], pn[1]);
            fn = tools.getFn(fn[0], fn[1]);
            var data = hex_json['AFN' + json.AFN]['Fn' + fn](du) || null,
                isPn = _.find(json.DU, function (item) {
                    return item.pn == pn;
                });
            if (!isPn) {
                json.DU.push({pn: pn, DT: [{Fn: fn, DATA: data}]});
            } else {
                isPn.DT.push({Fn: fn, DATA: data});
            }
        }
        return json;
    } catch (err) {
        return cError(err);
    }
};