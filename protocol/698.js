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
            },
            Fn5: function () {
                return [];
            },
            Fn6: function () {
                return [];
            },
            Fn17: function () {
                return [];
            },
            Fn18: function () {
                return [];
            },
            Fn19: function () {
                return [];
            },
            Fn20: function () {
                return [];
            },
            Fn21: function () {
                return [];
            },
            Fn22: function () {
                return [];
            },
            Fn23: function () {
                return [];
            },
            Fn24: function () {
                return [];
            },
            Fn25: function () {
                return [];
            },
            Fn31: function () {
                return [];
            },
            Fn32: function () {
                return [];
            },
            Fn33: function () {
                return [];
            },
            Fn34: function () {
                return [];
            },
            Fn41: function () {
                return [];
            },
            Fn42: function () {
                return [];
            },
            Fn43: function () {
                return [];
            },
            Fn44: function () {
                return [];
            },
            Fn49: function () {
                return [];
            },
            Fn129: function () {
                return [];
            },
            Fn130: function () {
                return [];
            },
            Fn131: function () {
                return [];
            },
            Fn132: function () {
                return [];
            },
            Fn145: function () {
                return [];
            },
            Fn146: function () {
                return [];
            },
            Fn147: function () {
                return [];
            },
            Fn148: function () {
                return [];
            }
        },
        AFN13: {
            //日冻结正向有功电能量
            Fn5: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结正向无功电能量
            Fn6: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            }, //日冻结反向有功电能量

            Fn7: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            }, //日冻结反向无功电能量

            Fn8: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结正向有功电能量（总、费率1～M）
            Fn21: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结正向无功电能量（总、费率1～M）
            Fn22: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结反向有功电能量（总、费率1～M）
            Fn23: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结反向无功电能量（总、费率1～M）
            Fn24: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结总加组日最大、最小有功功率及其发生时间，有功功率为零日累计时间
            Fn57: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结总加组日累计有功电能量（总、费率1～M）
            Fn58: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结总加组日累计无功电能量（总、费率1～M）
            Fn59: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结总加组日最大、最小有功功率及其发生时间，有功功率为零日累计时间
            Fn60: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结总加组日累计有功电能量（总、费率1～M）
            Fn61: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结总加组日累计无功电能量（总、费率1～M）
            Fn62: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结总加组超功率定值的月累计时间及月累计电能量月冻结总加组超功率定值的月累计时间及月累计电能量
            Fn65: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结总加组超月电能量定值的月累计时间及月累计电能量
            Fn66: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //总加组有功功率曲线
            Fn73: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //总加组无功功率曲线
            Fn74: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //总加组有功电能量曲线
            Fn75: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //总加组无功电能量曲线
            Fn76: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点有功功率曲线
            Fn81: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点A相有功功率曲线
            Fn82: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点B相有功功率曲线
            Fn83: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点C相有功功率曲线
            Fn84: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点无功功率曲线
            Fn85: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点A相无功功率曲线
            Fn86: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点B相无功功率曲线
            Fn87: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点C相无功功率曲线
            Fn88: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点A相电压曲线
            Fn89: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点B相电压曲线
            Fn90: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点C相电压曲线
            Fn91: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点A相电流曲线
            Fn92: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点B相电流曲线
            Fn93: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点C相电流曲线
            Fn94: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点零序电流曲线
            Fn95: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点正向有功总电能量曲线
            Fn97: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点正向无功总电能量曲线
            Fn98: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点反向有功总电能量曲线
            Fn99: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点反向无功总电能量曲线
            Fn100: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点正向有功总电能示值曲线
            Fn101: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点正向无功总电能示值曲线
            Fn102: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点反向有功总电能示值曲线
            Fn103: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点反向无功总电能示值曲线
            Fn104: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点功率因数曲线
            Fn105: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点A相功率因数曲线
            Fn106: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点B相功率因数曲线
            Fn107: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点C相功率因数曲线
            Fn108: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点电压相位角曲线
            Fn109: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //测量点电流相位角曲线
            Fn110: function (data) {
                var tdArr = data.td_c.split('-');
                return [tools.b2bcd(tdArr[4]), tools.b2bcd(tdArr[3]), tools.b2bcd(tdArr[2]),
                    tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0]), data.m, data.n]
            },

            //日冻结正向有功电能示值（总、费率1～M）
            Fn161: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结正向无功（组合无功1）电能示值（总、费率1～M）
            Fn162: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结反向有功电能示值（总、费率1～M）
            Fn163: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结反向无功（组合无功1）电能示值（总、费率1～M）
            Fn164: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结正向有功电能示值（总、费率1～M）
            Fn177: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结正向无功（组合无功1）电能示值（总、费率1～M）
            Fn178: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结反向有功电能示值（总、费率1～M）
            Fn179: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //月冻结反向无功（组合无功1）电能示值（总、费率1～M）
            Fn180: function (data) {
                var tdArr = data.td_m.split('-');
                return [tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结正向有功最大需量及发生时间（总、费率1～M）
            Fn185: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结正向无功最大需量及发生时间（总、费率1～M）
            Fn186: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结反向有功最大需量及发生时间（总、费率1～M）
            Fn187: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            },

            //日冻结反向无功最大需量及发生时间（总、费率1～M）
            Fn188: function (data) {
                var tdArr = data.td_d.split('-');
                return [tools.b2bcd(tdArr[2]), tools.b2bcd(tdArr[1]), tools.b2bcd(tdArr[0])]
            }
        },
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
            },


            //终端控制设置状态
            Fn5: function (data) {
                var controlStatus = {},
                    tgAPar = [],
                    totalArr = [],
                    basicStatus = data.splice(0, 1)[0],
                    totalCtrlFlag = data.splice(0, 1)[0];
                controlStatus.isAssure = basicStatus % 2;
                controlStatus.isElim = (basicStatus >> 1) % 2;
                controlStatus.isFee = (basicStatus >> 2) % 2;
                controlStatus.totalCtrlFlag = (_.toArray(totalCtrlFlag.toString(2))).reverse();
                for (var i = 0; i < controlStatus.totalCtrlFlag.length; i++) {
                    if (controlStatus.totalCtrlFlag[i] == 1) {
                        totalArr.push(i + 1)
                    }
                }
                for (var k = 0; k < totalArr.length; k++) {
                    var tgArr = data.splice(0, 6);
                    tgAPar.push({
                        pn: totalArr[k],
                        pcSchema: tgArr[0],
                        ctrlSchemaTimesec: (_.toArray(tgArr[1].toString(2))).reverse(),
                        timesec: tgArr[2] % 2,
                        facoff: (tgArr[2] >> 1) % 2,
                        buzStop: (tgArr[2] >> 2) % 2,
                        powerDown: (tgArr[2] >> 3) % 2,
                        monthFixed: tgArr[3] % 2,
                        purchase: (tgArr[3] >> 1) % 2,
                        pcflag: (_.toArray(tgArr[4].toString(2))).reverse(),
                        ecflag: (_.toArray(tgArr[5].toString(2))).reverse()
                    })
                }
                controlStatus.tgAPar = tgAPar;
                return controlStatus;
            },

            //终端当前控制状态
            //TODO what the fuck?
            Fn6: function (data) {
                var arr = data.splice(0, 67);
                var round = _.toArray(arr.toString(2)),
                    json = {
                        round: round.reverse()
                    };
                /*
                 00 00 20 00
                 00 00 1F
                 EE 2E 00 00 00 01 00 00
                 EE 2E 00 00 00 00 00 00
                 EE 2E 00 00 00 00 00 00
                 EE 2E 00 00 00 00 00 00
                 EE 2E 00 00 00 00 00 00
                 */
                return {json: json, key: 71};
            },
            //当前总加有功功率
            Fn17: function (data) {
                var arr = data.splice(0, 2);
                var json = {
                    p: (tools.bcd2b(arr[0]) + (arr[1] % 16) * 100) * Math.pow(10, 4 - (arr[1] >> 5))
                };
                return json;
            },
            //当前总加无功功率
            Fn18: function (data) {
                var arr = data.splice(0, 2);
                var json = {
                    q: (tools.bcd2b(arr[0]) + (arr[1] % 16) * 100) * Math.pow(10, 4 - (arr[1] >> 5))
                };
                return json;
            },

            //当日总加有功电能量（总、费率1～M）
            Fn19: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var papArr = data.splice(0, 4);
                json.d_e = tools.getDFA3(papArr[0], papArr[1], papArr[2], papArr[3]);
                for (var k = 1; k <= json.m; k++) {
                    var arr = data.splice(0, 4);
                    json['d_e' + k] = tools.getDFA3(arr[0], arr[1], arr[2], arr[3]);
                }
                return json;
            },

            //当日总加无功电能量（总、费率1～M）
            Fn20: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var prpArr = data.splice(0, 4);
                json.d_r = tools.getDFA3(prpArr[0], prpArr[1], prpArr[2], prpArr[3]);
                for (var k = 1; k <= json.m; k++) {
                    var arr = data.splice(0, 4);
                    json['d_r' + k] = tools.getDFA3(arr[0], arr[1], arr[2], arr[3]);
                }
                return json;
            },

            //当月总加有功电能量（总、费率1～M）
            Fn21: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var papArr = data.splice(0, 4);
                json.m_e = tools.getDFA3(papArr[0], papArr[1], papArr[2], papArr[3]);
                for (var k = 1; k <= json.m; k++) {
                    var arr = data.splice(0, 4);
                    json['m_e' + k] = tools.getDFA3(arr[0], arr[1], arr[2], arr[3]);
                }
                return json;
            },

            //当月总加无功电能量（总、费率1～M）
            Fn22: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var prpArr = data.splice(0, 4);
                json.m_r = tools.getDFA3(prpArr[0], prpArr[1], prpArr[2], prpArr[3]);
                for (var k = 1; k <= json.m; k++) {
                    var arr = data.splice(0, 4);
                    json['m_r' + k] = tools.getDFA3(arr[0], arr[1], arr[2], arr[3]);
                }
                return json;
            },

            //终端当前剩余电量（费）
            Fn23: function (data) {
                var arr = data.splice(0, 4);
                var remainEne = tools.getDFA3(arr[0], arr[1], arr[2], arr[3]);
                return {rem_e: remainEne};
            },

            //当前功率下浮控控后总加有功功率冻结值
            Fn24: function (data) {
                var arr = data.splice(0, 2);
                var freezeValue = tools.getDFA2(arr[0], arr[1]);
                return {power_down_r: freezeValue};
            },

            //当前三相及总有/无功功率、功率因数，三相电压、电流、零序电流、视在功率
            Fn25: function (data) {
                var arr = data.splice(0, 67),
                    json = {
                        date: tools.getDFA15(arr[0], arr[1], arr[2], arr[3], arr[4]),
                        p: tools.getDFA9(arr[5], arr[6], arr[7]),
                        p_a: tools.getDFA9(arr[8], arr[9], arr[10]),
                        p_b: tools.getDFA9(arr[11], arr[12], arr[13]),
                        p_c: tools.getDFA9(arr[14], arr[15], arr[16]),
                        q: tools.getDFA9(arr[17], arr[18], arr[19]),
                        q_a: tools.getDFA9(arr[20], arr[21], arr[22]),
                        q_b: tools.getDFA9(arr[23], arr[24], arr[25]),
                        q_c: tools.getDFA9(arr[26], arr[27], arr[28]),
                        f: tools.getDFA5(arr[29], arr[30]),
                        f_a: tools.getDFA5(arr[31], arr[32]),
                        f_b: tools.getDFA5(arr[33], arr[34]),
                        f_c: tools.getDFA5(arr[35], arr[36]),
                        u_a: tools.getDFA7(arr[37], arr[38]),
                        u_b: tools.getDFA7(arr[39], arr[40]),
                        u_c: tools.getDFA7(arr[41], arr[42]),
                        i_a: tools.getDFA25(arr[43], arr[44], arr[45]),
                        i_b: tools.getDFA25(arr[46], arr[47], arr[48]),
                        i_c: tools.getDFA25(arr[49], arr[50], arr[51]),
                        i_z: tools.getDFA25(arr[52], arr[53], arr[54]),
                        ap_t: tools.getDFA9(arr[55], arr[56], arr[57]),
                        ap_a: tools.getDFA9(arr[58], arr[59], arr[60]),
                        ap_b: tools.getDFA9(arr[61], arr[62], arr[63]),
                        ap_c: tools.getDFA9(arr[64], arr[65], arr[66])
                    };
                return json;
            },

            //当前A、B、C三相正/反向有功电能示值、组合无功1/2电能示值
            Fn31: function (data) {
                var arr = data.splice(0, 59),
                    json = {
                        date: tools.getDFA15(arr[0], arr[1], arr[2], arr[3], arr[4]),
                        pap_r_a: tools.getDFA14(arr[5], arr[6], arr[7], arr[8], arr[9]),
                        rap_r_a: tools.getDFA14(arr[10], arr[11], arr[12], arr[13], arr[14]),
                        rp_a_1: tools.getDFA11(arr[15], arr[16], arr[17], arr[18]),
                        rp_a_2: tools.getDFA11(arr[19], arr[20], arr[21], arr[22]),
                        pap_r_b: tools.getDFA14(arr[23], arr[24], arr[25], arr[26], arr[27]),
                        rap_r_b: tools.getDFA14(arr[28], arr[29], arr[30], arr[31], arr[32]),
                        rp_b_1: tools.getDFA11(arr[33], arr[34], arr[35], arr[36]),
                        rp_b_2: tools.getDFA11(arr[37], arr[38], arr[39], arr[40]),
                        pap_r_c: tools.getDFA14(arr[41], arr[42], arr[43], arr[44], arr[45]),
                        rap_r_c: tools.getDFA14(arr[46], arr[47], arr[48], arr[49], arr[50]),
                        rp_c_1: tools.getDFA11(arr[51], arr[52], arr[53], arr[54]),
                        rp_c_2: tools.getDFA11(arr[55], arr[56], arr[57], arr[58])
                    };
                return json;
            },

            //上一结算日A、B、C三相正/反向有功电能示值、组合无功1/2电能示值
            Fn32: function (data) {
                var arr = data.splice(0, 59),
                    json = {
                        date: tools.getDFA15(arr[0], arr[1], arr[2], arr[3], arr[4]),
                        pap_r_a: tools.getDFA14(arr[5], arr[6], arr[7], arr[8], arr[9]),
                        rap_r_a: tools.getDFA14(arr[10], arr[11], arr[12], arr[13], arr[14]),
                        rp_a_1: tools.getDFA11(arr[15], arr[16], arr[17], arr[18]),
                        rp_a_2: tools.getDFA11(arr[19], arr[20], arr[21], arr[22]),
                        pap_r_b: tools.getDFA14(arr[23], arr[24], arr[25], arr[26], arr[27]),
                        rap_r_b: tools.getDFA14(arr[28], arr[29], arr[30], arr[31], arr[32]),
                        rp_b_1: tools.getDFA11(arr[33], arr[34], arr[35], arr[36]),
                        rp_b_2: tools.getDFA11(arr[37], arr[38], arr[39], arr[40]),
                        pap_r_c: tools.getDFA14(arr[41], arr[42], arr[43], arr[44], arr[45]),
                        rap_r_c: tools.getDFA14(arr[46], arr[47], arr[48], arr[49], arr[50]),
                        rp_c_1: tools.getDFA11(arr[51], arr[52], arr[53], arr[54]),
                        rp_c_2: tools.getDFA11(arr[55], arr[56], arr[57], arr[58])
                    };
                return json;
            },

            //当前正向有/无功电能示值、一/四象限无功电能示值（总、费率1～M，1≤M≤12）
            Fn33: function (data) {
                var json = {},
                    dataKey = ['pap_r', 'prp_r', 'rp_r1 ', 'rp_r4'],
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                _.forEach(dataKey, function (item) {
                    if (item === 'pap_r') {
                        var valueArr = data.splice(0, 5);
                        json[item] = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                        for (var i = 1; i <= json.m; i++) {
                            var mValueArr = data.splice(0, 5);
                            json[item + '_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], mValueArr[4]);
                        }
                    } else {
                        var valueArr = data.splice(0, 4);
                        json[item] = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                        for (var i = 1; i <= json.m; i++) {
                            var mValueArr = data.splice(0, 4);
                            json[item + '_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                        }
                    }
                });
                return json
            },

            //当前反向有/无功电能示值、二/三象限无功电能示值（总、费率1～M，1≤M≤12）
            Fn34: function (data) {
                var json = {},
                    dataKey = ['rap_r', 'rrp_r', 'rp_r2', 'rp_r3'],
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                _.forEach(dataKey, function (item) {
                    if (item === 'rap_r') {
                        var valueArr = data.splice(0, 5);
                        json[item] = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                        for (var i = 1; i <= json.m; i++) {
                            var mValueArr = data.splice(0, 5);
                            json[item + '_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], mValueArr[4]);
                        }
                    } else {
                        var valueArr = data.splice(0, 4);
                        json[item] = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                        for (var i = 1; i <= json.m; i++) {
                            var mValueArr = data.splice(0, 4);
                            json[item + '_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                        }
                    }
                });
                return json
            },

            //当日正向有功电能量（总、费率1～M）
            Fn41: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.pap_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['pap_e_m' + i] = tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //当日正向无功电能量（总、费率1～M）
            Fn42: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.prp_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['prp_e_m' + i] = tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //当日反向有功电能量（总、费率1～M）
            Fn43: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.rap_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rap_e_m' + i] = tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //当日反向无功电能量（总、费率1～M）
            Fn44: function (data) {
                var json = {};
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.rrp_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rrp_e_m' + i] = tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //当前电压、电流相位角
            Fn49: function (data) {
                var arr = data.splice(0, 12),
                    json = {
                        ua_angle: tools.getDFA5(arr[0], arr[1]),
                        ub_angle: tools.getDFA5(arr[2], arr[3]),
                        uc_angle: tools.getDFA5(arr[4], arr[5]),
                        ia_angle: tools.getDFA5(arr[6], arr[7]),
                        ib_angle: tools.getDFA5(arr[8], arr[9]),
                        ic_angle: tools.getDFA5(arr[10], arr[11])
                    };
                return {json: json, key: 16};
            },

            //当前正向有功电能示值（总、费率1～M）
            Fn129: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 5);
                json.pap_r = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 5);
                    json['pap_r_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], valueArr[4]);
                }
                return json;
            },

            //当前正向无功（组合无功1）电能示值（总、费率1～M）
            Fn130: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.prp_r = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['prp_r_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //当前反向有功电能示值（总、费率1～M）
            Fn131: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 5);
                json.pap_r = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 5);
                    json['rap_r_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], valueArr[4]);
                }
                return json;
            },

            //当前反向无功（组合无功1）电能示值（总、费率1～M）
            Fn132: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.prp_r = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rrp_r_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //当月正向有功最大需量及发生时间（总、费率1～M）
            Fn145: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 7);
                json.pap_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.pap_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);

                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['pap_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['pap_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json;
            },

            // 当月正向无功最大需量及发生时间（总、费率1～M）
            Fn146: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 7);
                json.prp_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.prp_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);

                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['prp_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['prp_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json;
            },

            //当月反向无功最大需量及发生时间（总、费率1～M）
            Fn147: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 7);
                json.rap_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.rap_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);

                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['rap_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['rap_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json;
            },

            //当月反向无功最大需量及发生时间（总、费率1～M）
            Fn148: function (data) {
                var json = {},
                    dateArr = data.splice(0, 5);
                json.date = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 7);
                json.rrp_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.rrp_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);

                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['rrp_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['rrp_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json;
            }
        },
        AFN13: {
            //日冻结正向有功电能量
            Fn5: function (data) {
                var json = {},
                    dateArr = data.splice(0, 3);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.pap_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['pap_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //日冻结正向无功电能量
            Fn6: function (data) {
                var json = {},
                    dateArr = data.splice(0, 3);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.prp_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['prp_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //日冻结反向有功电能量
            Fn7: function (data) {
                var json = {},
                    dateArr = data.splice(0, 3);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.rap_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rap_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            }, //日冻结反向无功电能量

            Fn8: function (data) {
                var json = {},
                    dateArr = data.splice(0, 3);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.rrp_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rrp_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //月冻结正向有功电能量（总、费率1～M）
            Fn21: function (data) {
                var json = {},
                    dateArr = data.splice(0, 2);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.pap_e = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['pap_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //月冻结正向无功电能量（总、费率1～M）
            Fn22: function (data) {
                var json = {},
                    dateArr = data.splice(0, 2);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.prp_r = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['prp_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //月冻结反向有功电能量（总、费率1～M）
            Fn23: function (data) {
                var json = {},
                    dateArr = data.splice(0, 2);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.rap_r = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rap_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //月冻结反向无功电能量（总、费率1～M）
            Fn24: function (data) {
                var json = {},
                    dateArr = data.splice(0, 2);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.rrp_r = tools.getDFA13(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rrp_e_m' + i] =
                        tools.getDFA13(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //日冻结总加组日最大、最小有功功率及其发生时间，有功功率为零日累计时间
            Fn57: function (data) {
                var json = {},
                    Arr = data.splice(0, 15);
                json.td = tools.getDFA20(Arr[0], Arr[1], Arr[2]);
                json.max_p = tools.getDFA2(Arr[3], Arr[4]);
                json.max_p_t = tools.getDFA18(Arr[5], Arr[6], Arr[7]);
                json.min_p = tools.getDFA2(Arr[8], Arr[9]);
                json.min_p_t = tools.getDFA18(Arr[10], Arr[11], Arr[12]);
                json.p_0_t = Arr[14] << 8 + Arr[13];
                return json
            },

            //日冻结总加组日累计有功电能量（总、费率1～M）
            Fn58: function (data) {
                var json = {},
                    dateArr = data.splice(0, 3);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.total_ap_e = tools.getDFA3(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['total_ap_e' + i] =
                        tools.getDFA3(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //日冻结总加组日累计无功电能量（总、费率1～M）
            Fn59: function (data) {
                var json = {},
                    dateArr = data.splice(0, 3);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.total_rp_e = tools.getDFA3(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['total_rp_e' + i] =
                        tools.getDFA3(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //月冻结总加组日最大、最小有功功率及其发生时间，有功功率为零日累计时间
            Fn60: function (data) {
                var json = {},
                    Arr = data.splice(0, 14);
                json.td = tools.getDFA21(Arr[0], Arr[1]);
                json.max_p = tools.getDFA2(Arr[2], Arr[3]);
                json.max_p_t = tools.getDFA18(Arr[4], Arr[5], Arr[6]);
                json.min_p = tools.getDFA2(Arr[7], Arr[8]);
                json.min_p_t = tools.getDFA18(Arr[9], Arr[10], Arr[11]);
                json.p_0_t = Arr[13] << 8 + Arr[12];
                return json
            },

            //月冻结总加组日累计有功电能量（总、费率1～M）
            Fn61: function (data) {
                var json = {},
                    dateArr = data.splice(0, 2);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.total_ap_e = tools.getDFA3(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['total_ap_e' + i] =
                        tools.getDFA3(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //月冻结总加组日累计无功电能量（总、费率1～M）
            Fn62: function (data) {
                var json = {},
                    dateArr = data.splice(0, 2);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.m = json.m = data.splice(0, 1)[0];
                var valueArr = data.splice(0, 4);
                json.total_rp_e = tools.getDFA3(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['total_rp_e' + i] =
                        tools.getDFA3(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json;
            },

            //月冻结总加组超功率定值的月累计时间及月累计电能量月冻结总加组超功率定值的月累计时间及月累计电能量
            Fn65: function (data) {
                var json = {},
                    Arr = data.splice(0, 8);
                json.td = tools.getDFA21(Arr[0], Arr[1]);
                json.ept = Arr[2] + (Arr[3] << 8);
                json.epe = tools.getDFA3(Arr[4], Arr[5], Arr[6], Arr[7]);
                return json
            },

            //月冻结总加组超月电能量定值的月累计时间及月累计电能量
            Fn66: function (data) {
                var json = {},
                    Arr = data.splice(0, 8);
                json.td = tools.getDFA21(Arr[0], Arr[1]);
                json.eet = Arr[2] + (Arr[3] << 8);
                json.eee = tools.getDFA3(Arr[4], Arr[5], Arr[6], Arr[7]);
                return json
            },

            //总加组有功功率曲线
            Fn73: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json.Data['p' + i] = tools.getDFA2(arr[0], arr[1]);
                }
                return json
            },

            //总加组无功功率曲线
            Fn74: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json.Data['q' + i] = tools.getDFA2(arr[0], arr[1]);
                }
                return json
            },

            //总加组有功电能量曲线
            Fn75: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json.Data['r' + i] = tools.getDFA3(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //总加组无功电能量曲线
            Fn76: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json.Data['r' + i] = tools.getDFA3(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点有功功率曲线
            Fn81: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['p' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点A相有功功率曲线
            Fn82: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['pa' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点B相有功功率曲线
            Fn83: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA21(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['pb' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点C相有功功率曲线
            Fn84: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['pc' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点无功功率曲线
            Fn85: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['q' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点A相无功功率曲线
            Fn86: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['qa' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点B相无功功率曲线
            Fn87: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['qb' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点C相无功功率曲线
            Fn88: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['qc' + i] = tools.getDFA9(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点A相电压曲线
            Fn89: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json['ua' + i] = tools.getDFA7(arr[0], arr[1]);
                }
                return json
            },

            //测量点B相电压曲线
            Fn90: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json['ub' + i] = tools.getDFA7(arr[0], arr[1]);
                }
                return json
            },

            //测量点C相电压曲线
            Fn91: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json['uc' + i] = tools.getDFA7(arr[0], arr[1]);
                }
                return json
            },

            //测量点A相电流曲线
            Fn92: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['ia' + i] = tools.getDFA25(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点B相电流曲线
            Fn93: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['ib' + i] = tools.getDFA25(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点C相电流曲线
            Fn94: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['ic' + i] = tools.getDFA25(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点零序电流曲线
            Fn95: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 3);
                    json['iz' + i] = tools.getDFA25(arr[0], arr[1], arr[2]);
                }
                return json
            },

            //测量点正向有功总电能量曲线
            Fn97: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['pap_e' + i] = tools.getDFA13(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点正向无功总电能量曲线
            Fn98: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['prp_e' + i] = tools.getDFA13(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点反向有功总电能量曲线
            Fn99: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['rap_e' + i] = tools.getDFA13(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点反向无功总电能量曲线
            Fn100: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['rrp_e' + i] = tools.getDFA13(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点正向有功总电能示值曲线
            Fn101: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['pap_r' + i] = tools.getDFA11(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点正向无功总电能示值曲线
            Fn102: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['prp_r' + i] = tools.getDFA11(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点反向有功总电能示值曲线
            Fn103: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['rap_r' + i] = tools.getDFA11(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点反向无功总电能示值曲线
            Fn104: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 4);
                    json['rrp_r' + i] = tools.getDFA11(arr[0], arr[1], arr[2], arr[3]);
                }
                return json
            },

            //测量点功率因数曲线
            Fn105: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json['f' + i] = tools.getDFA5(arr[0], arr[1]);
                }
                return json
            },

            //测量点A相功率因数曲线
            Fn106: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json['fa' + i] = tools.getDFA5(arr[0], arr[1]);
                }
                return json
            },

            //测量点B相功率因数曲线
            Fn107: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json['fb' + i] = tools.getDFA5(arr[0], arr[1]);
                }
                return json
            },

            //测量点C相功率因数曲线
            Fn108: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 2);
                    json['fc' + i] = tools.getDFA5(arr[0], arr[1]);
                }
                return json
            },

            //测量点电压相位角曲线
            Fn109: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 6);
                    json['ua_pap' + i] = tools.getDFA5(arr[0], arr[1]);
                    json['ub_pap' + i] = tools.getDFA5(arr[2], arr[3]);
                    json['uc_pap' + i] = tools.getDFA5(arr[4], arr[5])
                }
                return json
            },

            //测量点电流相位角曲线
            Fn110: function (data) {
                var json = {},
                    dateArr = data.splice(0, 7);
                json.td = tools.getDFA15(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4]);
                json.m = dateArr[5];
                json.n = dateArr[6];
                for (var i = 1; i <= json.n; i++) {
                    var arr = data.splice(0, 6);
                    json['ia_pap' + i] = tools.getDFA5(arr[0], arr[1]);
                    json['ib_pap' + i] = tools.getDFA5(arr[2], arr[3]);
                    json['ic_pap' + i] = tools.getDFA5(arr[4], arr[5])
                }
                return json
            },

            //日冻结正向无功（组合无功1）电能示值（总、费率1～M）
            Fn161: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr=data.splice(0, 5);
                json.pap_r=tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 5);
                    json['pap_r_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], mValueArr[4]);
                }
                return json
            },

            //日冻结正向无功（组合无功1）电能示值（总、费率1～M）
            Fn162: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[12],
                        td: tools.getDFA20(du[4], du[5], du[6]),
                        date: tools.getDFA15(du[7], du[8], du[9], du[10], du[11]),
                        prp_r: tools.getDFA11(du[13], du[14], du[15], du[16])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 4;
                    json.Data['prp_r_m' + k] = tools.getDFA11(du[17 + m], du[18 + m], du[19 + m], du[20 + m])
                }
                return {json: json, key: 20 + m + 1};
            },

            //日冻结反向有功电能示值（总、费率1～M）
            Fn163: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[12],
                        td: tools.getDFA20(du[4], du[5], du[6]),
                        date: tools.getDFA15(du[7], du[8], du[9], du[10], du[11]),
                        rap_r: tools.getDFA14(du[13], du[14], du[15], du[16], du[17])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 5;
                    json.Data['rap_r_m' + k] = tools.getDFA14(du[18 + m], du[19 + m], du[20 + m], du[21 + m], du[22 + m])
                }
                return {json: json, key: 22 + m + 1};
            },

            //日冻结反向无功（组合无功1）电能示值（总、费率1～M）
            Fn164: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[12],
                        td: tools.getDFA20(du[4], du[5], du[6]),
                        date: tools.getDFA15(du[7], du[8], du[9], du[10], du[11]),
                        rrp_r: tools.getDFA11(du[13], du[14], du[15], du[16])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 4;
                    json.Data['rrp_r_m' + k] = tools.getDFA11(du[17 + m], du[18 + m], du[19 + m], du[20 + m])
                }
                return {json: json, key: 20 + m + 1};
            },

            //月冻结正向有功电能示值（总、费率1～M）
            Fn177: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[11],
                        td: 2000 + tools.bcd2b(du[i + 5]) + '/' + tools.bcd2b(du[i + 4]) + '/1',
                        date: tools.getDFA15(du[6], du[7], du[8], du[9], du[10]),
                        pap_r: tools.getDFA14(du[12], du[13], du[14], du[15], du[16])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 5;
                    json.Data['pap_r' + k] = tools.getDFA14(du[17 + m], du[18 + m], du[19 + m], du[20 + m], du[21 + m])
                }
                return {json: json, key: 21 + m + 1};
            },

            //月冻结正向无功（组合无功1）电能示值（总、费率1～M）
            Fn178: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[11],
                        td: 2000 + tools.bcd2b(du[i + 5]) + '/' + tools.bcd2b(du[i + 4]) + '/1',
                        date: tools.getDFA15(du[6], du[7], du[8], du[9], du[10]),
                        prp_r: tools.getDFA11(du[12], du[13], du[14], du[15])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 4;
                    json.Data['prp_r' + k] = tools.getDFA11(du[16 + m], du[17 + m], du[18 + m], du[19 + m])
                }
                return {json: json, key: 19 + m + 1};
            },

            //月冻结反向有功电能示值（总、费率1～M）
            Fn179: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[11],
                        td: 2000 + tools.bcd2b(du[i + 5]) + '/' + tools.bcd2b(du[i + 4]) + '/1',
                        date: tools.getDFA15(du[6], du[7], du[8], du[9], du[10]),
                        rap_r: tools.getDFA14(du[12], du[13], du[14], du[15], du[16])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 5;
                    json.Data['rap_r' + k] = tools.getDFA14(du[17 + m], du[18 + m], du[19 + m], du[20 + m], du[21 + m])
                }
                return {json: json, key: 21 + m + 1};
            },

            //月冻结反向无功（组合无功1）电能示值（总、费率1～M）
            Fn180: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[11],
                        td: 2000 + tools.bcd2b(du[i + 5]) + '/' + tools.bcd2b(du[i + 4]) + '/1',
                        date: tools.getDFA15(du[6], du[7], du[8], du[9], du[10]),
                        rrp_r: tools.getDFA11(du[12], du[13], du[14], du[15])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 4;
                    json.Data['rrp_r' + k] = tools.getDFA11(du[16 + m], du[17 + m], du[18 + m], du[19 + m])
                }
                return {json: json, key: 19 + m + 1};
            },

            //日冻结正向有功最大需量及发生时间（总、费率1～M）
            Fn185: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[12],
                        td: 2000 + tools.bcd2b(du[6]) + '/' + tools.bcd2b(du[5]) + '/' + tools.bcd2b(du[4]),
                        date: tools.getDFA15(du[7], du[8], du[9], du[10], du[11]),
                        pap_demand: tools.getDFA23(du[13], du[14], du[15]),
                        pap_demand_time: tools.getDFA17(du[16], du[17], du[18], du[19])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 7;
                    json.Data['pap_d' + k] = tools.getDFA23(du[20 + m], du[21 + m], du[22 + m]);
                    json.Data['pap_d' + k + '_time'] = tools.getDFA17(du[23 + m], du[24 + m], du[25 + m], du[26])
                }
                return {json: json, key: 26 + m + 1};
            },

            //日冻结正向无功最大需量及发生时间（总、费率1～M）
            Fn186: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[12],
                        td: 2000 + tools.bcd2b(du[6]) + '/' + tools.bcd2b(du[5]) + '/' + tools.bcd2b(du[4]),
                        date: tools.getDFA15(du[7], du[8], du[9], du[10], du[11]),
                        prp_demand: tools.getDFA23(du[13], du[14], du[15]),
                        prp_demand_time: tools.getDFA17(du[16], du[17], du[18], du[19])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 7;
                    json.Data['prp_d' + k] = tools.getDFA23(du[20 + m], du[21 + m], du[22 + m]);
                    json.Data['prp_d' + k + '_time'] = tools.getDFA17(du[23 + m], du[24 + m], du[25 + m], du[26])
                }
                return {json: json, key: 26 + m + 1};
            },

            //日冻结反向有功最大需量及发生时间（总、费率1～M）
            Fn187: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[12],
                        td: 2000 + tools.bcd2b(du[6]) + '/' + tools.bcd2b(du[5]) + '/' + tools.bcd2b(du[4]),
                        date: tools.getDFA15(du[7], du[8], du[9], du[10], du[11]),
                        rap_demand: tools.getDFA23(du[13], du[14], du[15]),
                        rap_demand_time: tools.getDFA17(du[16], du[17], du[18], du[19])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 7;
                    json.Data['rap_d' + k] = tools.getDFA23(du[20 + m], du[21 + m], du[22 + m]);
                    json.Data['rap_d' + k + '_time'] = tools.getDFA17(du[23 + m], du[24 + m], du[25 + m], du[26])
                }
                return {json: json, key: 26 + m + 1};
            },

            //日冻结反向无功最大需量及发生时间（总、费率1～M）
            Fn188: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    Fn: tools.getFn(du[2], du[3]),
                    Data: {
                        m: du[12],
                        td: 2000 + tools.bcd2b(du[6]) + '/' + tools.bcd2b(du[5]) + '/' + tools.bcd2b(du[4]),
                        date: tools.getDFA15(du[7], du[8], du[9], du[10], du[11]),
                        rrp_demand: tools.getDFA23(du[13], du[14], du[15]),
                        rrp_demand_time: tools.getDFA17(du[16], du[17], du[18], du[19])
                    }
                };
                for (var k = 1; k <= json.Data.m; k++) {
                    var m = (k - 1) * 7;
                    json.Data['rrp_d' + k] = tools.getDFA23(du[20 + m], du[21 + m], du[22 + m]);
                    json.Data['rrp_d' + k + '_time'] = tools.getDFA17(du[23 + m], du[24 + m], du[25 + m], du[26])
                }
                return {json: json, key: 26 + m + 1};
            }
        },
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
                data = dt.DATA, retry = dt.retry;
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
            SEQ: {
                tpv: tools.getTpV(hex),
                fir: tools.getFIR(hex),
                fin: tools.getFIN(hex),
                con: tools.getCON(hex),
                seq: tools.getSEQ(hex)
            },
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