var _ = require('underscore'),
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
            Fn1: function (data) {
                //确认帧
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
            Fn21: function (data) {
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
    },

    set_len = function (data) {
        var len = (data.length << 2) + 2, buff = new Buffer(4);
        buff.writeInt16LE(len, 0);
        buff.writeInt16LE(len, 2);
        return buff.toJSON();
    },


    set_c = function (json) {
        var c = json.C, afn = json.AFN, cfn = 11,
            dir = c.DIR, prm = c.PRM, fcb = c.FCB, fcv = c.FCV;
        if (afn == 1) {
            fcb = 0;
            cfn = 1;
        } else if (_.has([4, 5, 15], afn)) {
            cfn = 10;
        }
        return [(parseInt('' + dir + prm + fcb + fcv, 2) << 4) + cfn];
    },

    set_addr = function (a1, a2, a3) {
        return [tools.b2bcd(a1 % 100), tools.b2bcd(Math.floor(a1 / 100)), a2 % 256, Math.floor(a2 / 256), a3];
    },

    set_seq = function (json) {
        var afn = json.AFN, tpv = 0, fir = 1, fin = 1, con = 0, seq = json.seq || 0;
        if (_.has([4, 5, 15], afn)) con = 1;
        return [(parseInt('' + tpv + fir + fin + con, 2) << 4) + seq];
    },

    set_pwd = function (pwd) {
        if (_.isNumber(pwd)) {
            return [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        } else {
            return [];
        }
    },

    set_cs = function (data) {
        for (var i = 0, CS = 0; i < data.length; i++) CS += parseInt(data[i]);
        return [CS % 256];
    },

    set_end = function () {
        return [0x16];
    },

    getL1 = function (data) {
        return ((data[2] << 8) + data[1]) >> 2;
    },

    getA1 = function (data) {
        return tools.bcd2b(data[8]) * 100 + tools.bcd2b(data[7]);
    },

    getA2 = function (data) {
        return (data[10] << 8) + data[9];
    },

//返回 传输方向位。DIR=0：表示此帧报文是由主站发出的下行报文；	DIR=1：表示此帧报文是由终端发出的上行报文。
    getDIR = function (buff) {
        return buff[6] >> 7;
    },

//返回 启动标志位。PRM =1：表示此帧报文来自启动站；PRM =0：表示此帧报文来自从动站。
    getPRM = function (data) {
        return (data[6] >> 6) % 2;
    },

//返回 请求访问位。ACD=1表示终端有重要事件等待访问，ACD=0表示终端无事件数据等待访问。
    getACD = function (data) {
        return (data[6] >> 5) % 2;
    },

//返回 功能码（控制域）。
    getCFN = function (data) {
        return data[6] % 16;
    },

    getAFN = function (data) {
        return data[12];
    },

//返回 帧时间标签有效。TpV=0：表示在附加信息域中无时间标签Tp；TpV=1：表示在附加信息域中带有时间标签Tp；
    getTpV = function (data) {
        return data[13] >> 7;
    },

//返回 首帧标志。FIR：置“1”，报文的第一帧。
    getFIR = function (data) {
        return (data[13] >> 6) % 2;
    },

//返回 末帧标志。FIN：置“1”，报文的最后一帧。
    getFIN = function (data) {
        return (data[13] >> 5) % 2;
    },

//返回 请求确认标志位。CON位置“1”，表示需要对该帧报文进行确认；置“0”，表示不需要对该帧报文进行确认。
    getCON = function (data) {
        return (data[13] >> 4) % 2;
    },

//返回 帧序号SEQ。
    getSEQ = function (data) {
        return data[13] & 0x0f;
    },

//返回 信息点标识。
    getPn = function (da1, da2) {
        var i = 0;
        if (da1 == 0 && da2 == 0) return 0;
        while (da1 > 1) {
            i++;
            da1 = Math.floor(da1 / 2);
        }
        return (da2 - 1) * 8 + i + 1;
    },

//返回 信息类标识。
    getFn = function (dt1, dt2) {
        var i = 0;
        while (dt1 > 1) {
            i++;
            dt1 = Math.floor(dt1 / 2);
        }
        return dt2 * 8 + i + 1;
    },

//返回 附加信息域。
    getAUX = function (data) {
        var ACD = getACD(data), TpV = getTpV(data), AUX = {};
        if (ACD === 0x01) {
            AUX.EC1 = data[data.length - 10];//重要事件计数器EC1
            AUX.EC2 = data[data.length - 9];//一般事件计数器EC2
        }
        if (TpV === 0x01) {
            AUX.PFC = data[data.length - 8];//启动帧帧序号计数器PFC
            var PST = data.slice(data.length - 7, data.length - 3);//启动帧发送时标PST
            AUX.PST = {
                sec: tools.bcd2b(PST[0]),
                min: tools.bcd2b(PST[1]),
                hour: tools.bcd2b(PST[2]),
                date: tools.bcd2b(PST[3])
            };
            AUX.SD = data[data.length - 3];//允许发送传输延时时间SD
        }
        return AUX;
    },

    getDU = function (data) {
        var acd = getACD(data), tpv = getTpV(data), auxLength = 2//（这个2其实是校验和和结尾0x16）;
        if (acd === 1) {
            auxLength += 2;
        } else if (tpv === 1) {
            auxLength += 6;
        }

        return data.slice(14, data.length - auxLength).toJSON();//du从pn开始到校验码前
    };

exports.json_hex = function (json) {
    var a1 = json.A1, a2 = json.A2, a3 = json.A3 || 0,
        c = set_c(json), addr = set_addr(a1, a2, a3),
        afn = json.AFN, seq = set_seq(json),
        pwd = set_pwd(json.AUX.PW), app = [], hex = [];
    _.each(json.DU, function (item) {
        var pn = item.pn;
        _.each(item.DT, function (dt) {
            var fn = dt.Fn, du = tools.setPn(pn).concat(tools.setFn(fn)),
                data = dt.data, retry = dt.retry;
            app = app.concat(du, json_hex['AFN' + afn]['Fn' + fn](data));
        });
    });
    app = [].concat(c, addr, afn, seq, app, pwd);
    hex = hex.concat(0x68, set_len(app), 0x68, app, set_cs(app), set_end());
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
    var json = {
        L: getL1(hex),
        A1: getA1(hex),
        A2: getA2(hex),
        A3: 0,
        C: {dir: getDIR(hex), prm: getPRM(hex), acd: getACD(hex), cfn: getCFN(hex)},
        AFN: getAFN(hex),
        SEQ: {tpv: getTpV(hex), fir: getFIR(hex), fin: getFIN(hex), con: getCON(hex), seq: getSEQ(hex)},
        AUX: getAUX(hex)
    }, du = getDU(hex);
    while (du.length > 0) {
        var pn = du.splice(0, 2), fn = du.splice(0, 2);
        if (pn.length < 2 || fn.length < 2) break;
        pn = getPn(pn[0], pn[1]);
        fn = getFn(fn[0], fn[1]);
        var data = hex_json['AFN' + json.AFN]['Fn' + fn](du);
        console.log(data, du);
    }
};