var _ = require('underscore'),
    cError = require('../error').Error,
    _645 = require('./645'),
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
        AFN9: {
            Fn1: function () {
                return [];
            },

            Fn2: function () {
                return [];
            },

            Fn3: function () {
                return [];
            },
            Fn4: function () {
                return [];
            },
            Fn5: function () {
                return [];
            },
            Fn6: function () {
                return [];
            },

            Fn7: function () {
                return [];
            },

            Fn8: function () {
                return [];
            }
        },
        AFN10: {
            Fn1: function () {
                return [];
            },

            Fn2: function () {
                return [];
            },

            Fn3: function () {
                return [];
            },
            Fn4: function () {
                return [];
            },
            Fn5: function () {
                return [];
            },
            Fn6: function () {
                return [];
            },

            Fn7: function () {
                return [];
            },

            Fn8: function () {
                return [];
            },

            Fn9: function () {
                return [];
            },

            Fn10: function (data) {
                var arr = [data.pnArr.length % 256, data.pnArr.length >> 8];
                data.pnArr.forEach(function (objectID) {
                    arr.push(objectID % 256, objectID >> 8);
                });
                return arr;
            },

            Fn11: function (data) {
                var arr = [data.configArr.length];
                data.configArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                console.log(arr)
                return arr;
            },

            Fn13: function (data) {
                var arr = [data.ACAnalogArr.length];
                data.ACAnalogArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                return arr;
            },

            Fn14: function (data) {
                var arr = [data.tgArr.length];
                data.tgArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                return arr;
            },

            Fn15: function (data) {
                var arr = [data.dataArr.length];
                data.dataArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                return arr;
            },

            Fn16: function (data) {
                return []
            },

            Fn17: function (data) {
                return []
            },

            Fn18: function (data) {
                return []
            },

            Fn19: function (data) {
                return []
            },

            Fn20: function (data) {
                return []
            },

            Fn21: function (data) {
                return []
            },

            Fn22: function (data) {
                return []
            },

            Fn23: function (data) {
                return []
            },

            Fn24: function (data) {
                return []
            },

            Fn25: function (data) {
                return []
            },

            Fn26: function (data) {
                return []
            },

            Fn27: function (data) {
                return []
            },

            Fn28: function (data) {
                return []
            },

            Fn29: function (data) {
                return []
            },

            Fn30: function (data) {
                return []
            },


            Fn33: function (data) {
                var arr = [data.dataArr.length];
                data.dataArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                return arr;
            },

            Fn34: function (data) {
                var arr = [data.dataArr.length];
                data.dataArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                return arr;
            },

            Fn35: function (data) {
                return []
            },

            Fn36: function (data) {
                return []
            },
            Fn37: function (data) {
                return []
            },
            Fn38: function (data) {
                var arr = [data.bigNum].concat(data.smallArr.length)
                data.smallArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                return arr;
            },

            Fn39: function (data) {
                var arr = [data.bigNum].concat(data.smallArr.length)
                data.smallArr.forEach(function (objectID) {
                    arr.push(objectID);
                });
                return arr;
            },

            Fn41: function (data) {
                return [];
            },

            Fn42: function (data) {
                return [];
            },

            Fn43: function (data) {
                return [];
            },

            Fn44: function (data) {
                return [];
            },

            Fn45: function (data) {
                return [];
            },

            Fn46: function (data) {
                return [];
            },

            Fn47: function (data) {
                return [];
            },

            Fn48: function (data) {
                return [];
            },

            Fn49: function (data) {
                return [];
            },

            Fn57: function (data) {
                return [];
            },

            Fn58: function (data) {
                return [];
            },

            Fn59: function (data) {
                return [];
            },

            Fn60: function (data) {
                return [];
            },

            Fn61: function (data) {
                return [];
            },

            Fn65: function (data) {
                return [];
            },

            Fn66: function (data) {
                return [];
            },

            Fn67: function (data) {
                return [];
            },

            Fn68: function (data) {
                return [];
            }

        },
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
        AFN9: {
            //终端版本信息
            Fn1: function (data) {
                var json = {},
                    dataArr = data.splice(0, 41);
                json.mcn = tools.getDFASC(dataArr.slice(0, 4));
                json.dn = tools.getDFASC(dataArr.slice(4, 12));
                json.tsvn = tools.getDFASC(dataArr.slice(12, 16));
                json.sdoidate = tools.getDFA20(dataArr[16], dataArr[17], dataArr[18]);
                json.tcvmn = tools.getDFASC(dataArr.slice(19, 30));
                json.tcpvn = tools.getDFASC(dataArr.slice(30, 34));
                json.thvn = tools.getDFASC(dataArr.slice(34, 38));
                json.hdoidate = tools.getDFA20(dataArr[38], dataArr[39], dataArr[40]);
                return json
            },

            //终端支持的输入、输出及通信端口配置
            Fn2: function (data) {
                var comType = [
                        '直接RS485接口',
                        '直接RS232接口',
                        '串行接口连接窄带低压载波通信模块'
                    ],
                    use = [
                        '专变、公变抄表',
                        '变电站抄表',
                        '台区低压集抄',
                        '当地用户侧数据共享'
                    ],
                    dataArr = data.splice(0, 17);
                json = {
                    pulseInputNum: dataArr[0],
                    switchInputNum: dataArr[1],
                    analogNum: dataArr[2],
                    switchOutputNum: dataArr[3],
                    maxDeviceNum: dataArr[4] + (dataArr[5] << 8),
                    maxReByteNum: dataArr[6] + (dataArr[7] << 8),
                    maxSeByteNum: dataArr[8] + (dataArr[9] << 8),
                    add1: dataArr[10],
                    add2: dataArr[11],
                    add3: dataArr[12],
                    add4: dataArr[13],
                    add5: dataArr[14],
                    add6: dataArr[15],
                    n: dataArr[16]
                };

                for (var i = 0; i < json.n; i++) {
                    var portArr = data.splice(0, 12);
                    json['port' + (i + 1)] = {
                        portNo: portArr[0] % 16,
                        comType: comType[(portArr[0] >> 5) % 4],
                        serialPort: portArr[0] >> 7 == 0 ? '标准异步串行口' : '非标准异步串行口',
                        use: use[portArr[1]],
                        baudRate: portArr[2] + (portArr[3] << 8) + (portArr[4] << 16) + (portArr[5] << 24),
                        deviceNum: portArr[6] + (portArr[7] << 8),
                        maxReByteNum: portArr[8] + (portArr[9] << 8),
                        maxSeByteNum: portArr[10] + (portArr[11] << 8)
                    }
                }
                return json;
            },

            //终端支持的其他配置
            Fn3: function (data) {
                var dataArr = data.splice(0, 19),
                    json = {
                        mpNum: dataArr[0] + (dataArr[1] << 8),
                        totalNum: dataArr[2],
                        assiNum: dataArr[3],
                        guardNum: dataArr[4],
                        m: dataArr[5],
                        mpDensity: dataArr[6],
                        pDensity: dataArr[7],
                        qDensity: dataArr[8],
                        d_eDensity: dataArr[9],
                        d_rDensity: dataArr[10],
                        day: dataArr[11],
                        month: dataArr[12],
                        schemeNum: dataArr[13],
                        harmonicWave: dataArr[14],
                        CapNum: dataArr[15],
                        impConsNum: dataArr[16]
                    };

                for (var i = 0; i < 16; i++) {
                    json['no' + i] = data.splice(0, 1)
                }
                return json
            },

            //终端支持的参数配置
            Fn4: function (data) {
                var json = {
                    n: data.splice(0, 1)
                };
                for (var i = 0; i < json.n; i++) {
                    var value = data.splice(0, 1);
                    var j = i * 8;
                    json['group' + (i + 1)] = {};
                    for (var k = 0; k < 8; k++) {
                        if ((value >> k) % 2 == 1)json['group' + (i + 1)]['f' + (j + 1 + k)] = '支持';
                    }
                }
                return json;
            },

            //终端支持的控制配置
            Fn5: function (data) {
                var json = {
                    n: data.splice(0, 1)
                };
                for (var i = 0; i < json.n; i++) {
                    var value = data.splice(0, 1);
                    var j = i * 8;
                    json['group' + (i + 1)] = {};
                    for (var k = 0; k < 8; k++) {
                        if ((value >> k) % 2 == 1)json['group' + (i + 1)]['f' + (j + 1 + k)] = '支持';
                    }
                }
                return json;
            },

            //终端支持的1类数据配置
            Fn6: function (data) {
                var flag = [], flagArr = data.splice(0, 2);
                for (var i = 0; i < 8; i++) {
                    if ((flagArr[1] >> i) % 2 == 1) {
                        flag.push(i);
                    }
                    if ((flagArr[0] >> i) % 2 == 1) {
                        flag.push(i + 8);
                    }
                }
                function sortNumber(a, b) {
                    return a - b;
                }

                var json = {flag: flag.sort(sortNumber)}, j = 0,
                    dataConfig = [],
                    getConfig = function () {
                        if (data.length !== 0) {
                            var dataObj = {
                                n: data.splice(0, 1)
                            };
                            for (var i = 1; i <= dataObj.n; i++) {
                                var o = (i - 1) * 8,
                                    group = data.splice(0, 1);
                                dataObj['group' + i] = {};
                                for (var k = 0; k < 8; k++) {
                                    if ((group >> k) % 2 == 1) dataObj['group' + i]['f' + (o + 1 + k)] = '支持';
                                }
                            }
                            dataConfig.push(dataObj);
                            getConfig();
                        }
                    };
                getConfig();
                json.dataConfig = dataConfig;
                return json;
            },

            //终端支持的2类数据配置
            Fn7: function (data) {
                var flag = [], flagArr = data.splice(0, 2);
                for (var i = 0; i < 8; i++) {
                    if ((flagArr[1] >> i) % 2 == 1) {
                        flag.push(i);
                    }
                    if ((flagArr[0] >> i) % 2 == 1) {
                        flag.push(i + 8);
                    }
                }
                function sortNumber(a, b) {
                    return a - b;
                }

                var json = {flag: flag.sort(sortNumber)}, j = 0,
                    dataConfig = [],
                    getConfig = function () {
                        if (data.length !== 0) {
                            var dataObj = {
                                n: data.splice(0, 1)
                            };
                            for (var i = 1; i <= dataObj.n; i++) {
                                var o = (i - 1) * 8,
                                    group = data.splice(0, 1);
                                dataObj['group' + i] = {};
                                for (var k = 0; k < 8; k++) {
                                    if ((group >> k) % 2 == 1) dataObj['group' + i]['f' + (o + 1 + k)] = '支持';
                                }
                            }
                            dataConfig.push(dataObj);
                            getConfig();
                        }
                    };
                getConfig();
                json.dataConfig = dataConfig;
                return json;
            },

            //终端支持的事件记录配置
            Fn8: function (data) {
                var arr = [],
                    dataArr = data.splice(0, 8);

                for (var i = 0; i < 8; i++) {
                    for (var j = 0; j < 8; j++) {
                        if ((dataArr[0 + i] >> j) % 2 == 1) arr.push('ERC' + (j + i * 8 + 1));
                    }
                }
                return arr;
            }
        },
        AFN10: {
            //终端上行通信口通信参数设置
            Fn1: function (data) {
                var dataArr = data.splice(0, 6), json = {
                    rts: dataArr[0],
                    delay_time: dataArr[1],
                    timeouts: dataArr[2] + ((dataArr[3] % 16) << 8),
                    repeat: (dataArr[3] >> 4) % 4,
                    data_con1: dataArr[4] % 2,
                    data_con2: (dataArr[4] >> 1) % 2,
                    data_con3: (dataArr[4] >> 2) % 2,
                    heart_beat: dataArr[5]
                };
                return json
            },

            //终端上行通信口无线中继转发设置
            Fn2: function (data) {
                var dataArr = data.splice(0, 2),
                    json = {
                        isWlTrans: dataArr[0] >> 7 == 0 ? '禁止' : '允许',
                        WlTransNum: dataArr[0] % 128
                    };
                for (var i = 1; i <= json.WlTransNum; i++) {
                    var addrArr = data.splice(0, 2);
                    json['tmnlAdd' + i] = tools.bcd2b(addrArr[0]) + tools.bcd2b(addrArr[1]) * 100
                }
                return json;
            },

            //站IP地址和端口
            Fn3: function (data) {
                var dataArr = data.splice(0, 28), json = {
                    master_ip: dataArr[0] + '.' + dataArr[1] + '.' + dataArr[2] + '.' + dataArr[3],
                    master_port: (dataArr[5] << 8) + dataArr[4],
                    back_ip: dataArr[6] + '.' + dataArr[7] + '.' + dataArr[8] + '.' + dataArr[9],
                    back_port: (dataArr[11] << 8) + dataArr[10],
                    apn: tools.getDFASC(dataArr.slice(12, 27))
                };
                return json;
            },

            //主站电话号码和短信中心号码
            Fn4: function (data) {
                var dataArr = data.splice(0, 16),
                    apn = "", asms = "";
                for (var i = 0; i < 7; i++) {
                    apn += tools.bcd2b(dataArr[i]);
                }

                for (var i = 8; i < 16; i++) {
                    asms += tools.bcd2b(dataArr[i]);
                }
                return {apn: apn.substr(0, 11), asms: asms.substr(0, 11)};
            },

            //终端上行通信消息认证参数设置
            Fn5: function (data) {
                var dataArr = data.splice(0, 3),
                    json = {
                        masn: dataArr[0], masp: (dataArr[2] << 8) + dataArr[1]
                    };
                return json;
            },

            //终端组地址设置
            Fn6: function (data) {
                var dataArr = data.splice(0, 16),
                    json = {
                        tgadd1: (dataArr[1] << 8) + dataArr[0],
                        tgadd2: (dataArr[3] << 8) + dataArr[2],
                        tgadd3: (dataArr[5] << 8) + dataArr[4],
                        tgadd4: (dataArr[7] << 8) + dataArr[6],
                        tgadd5: (dataArr[9] << 8) + dataArr[8],
                        tgadd6: (dataArr[11] << 8) + dataArr[10],
                        tgadd7: (dataArr[13] << 8) + dataArr[12],
                        tgadd8: (dataArr[15] << 8) + dataArr[14]
                    };
                return json;
            },

            //终端IP地址和端口
            //TODO 用户名长度m\用户名\密码长度n\密码 好像有问题
            //TODO 有待优化
            /*
             fn7: function () {
             var json = {
             tip1: buff[18], tip2: buff[19], tip3: buff[20], tip4: buff[21],
             mask1: buff[22], mask2: buff[23], mask3: buff[24], mask4: buff[25],
             gw1: buff[26], gw2: buff[27], gw3: buff[28], gw4: buff[29],
             psk: buff[30], psip1: buff[31], psip2: buff[32], psip3: buff[33], psip4: buff[34],
             psport: (buff[36] << 8) + buff[35], pscm: buff[37],
             unl: buff[38],
             uname: buff.toString('utf8', 39, 39 + buff[38]),
             pswl: buff[38 + buff[38] + 1],
             psw: buff.toString('utf8', 38 + buff[38] + 2, 38 + buff[38] + 2 + buff[38 + buff[38] + 1]),
             tlport: (buff[buff.length - 3] << 8) + buff[buff.length - 4]
             };
             return {json: json, key:16};
             },
             */

            //终端上行通信工作方式（以太专网或虚拟专网）
            Fn8: function (data) {
                var dataArr = data.splice(0, 8), json = {
                    khjms: dataArr[0] % 4,
                    zdgzms: (dataArr[0] >> 4) % 4,
                    txms: dataArr[0] >> 7,
                    rdi: (dataArr[2] >> 8) + (dataArr[1] % 256),
                    rdf: dataArr[3],
                    vdt: dataArr[4],
                    con1: dataArr[5],
                    con2: dataArr[6],
                    con3: dataArr[7]
                };
                return json
            },

            //终端事件记录配置设置
            Fn9: function (data) {
                var dataArr = data.splice(0, 16),
                    json = {};
                for (var j = 0; j < 8; j++) {
                    json['eff' + (j + 1)] = [];
                    for (var i = 0; i < 8; i++) {
                        if ((dataArr[0 + j] >> i) % 2 === 1) {
                            json['eff' + (j + 1)].push(i);
                        }
                    }
                }
                for (j = 0; j < 8; j++) {
                    json['imp' + (j + 1)] = [];
                    for (var i = 0; i < 8; i++) {
                        if ((dataArr[8 + j] >> i) % 2 === 1) {
                            json['imp' + (j + 1)].push(i);
                        }
                    }
                }
                return json;
            },

            //终端电能表/交流采样装置配置参数
            Fn10: function (data) {
                var numArr = data.splice(0, 2),
                    json = {len: (numArr[1] << 8) + numArr[0]},
                    arr = [];
                for (var i = 0, j; i < json.len; i++) {
                    var dataArr = data.splice(0, 27);
                    arr.push({
                        index: (dataArr[1] << 8) + dataArr[0],
                        pIndex: (dataArr[3] << 8) + dataArr[2],
                        speed: dataArr[4] >> 5,
                        port: dataArr[4] & 0x1f,
                        pType: dataArr[5],
                        signalAddress: tools.getDFA12(dataArr[6], dataArr[7], dataArr[8], dataArr[9], dataArr[10], dataArr[11]),
                        signalCode: dataArr[17] * Math.pow(10, 10) + dataArr[16] * Math.pow(10, 8) + dataArr[15] * Math.pow(10, 6) +
                        dataArr[14] * Math.pow(10, 4) + dataArr[13] * Math.pow(10, 2) + dataArr[12],
                        rate: dataArr[18] & 0x3f,
                        Integer: (dataArr[19] & 0xf) >> 2,
                        decimal: dataArr[19] & 0x3,
                        collector: tools.getDFA12(dataArr[20], dataArr[21], dataArr[22], dataArr[23], dataArr[24], dataArr[25]),
                        bigClass: dataArr[26] >> 4,
                        smallClass: dataArr[26] & 0xf
                    });
                }
                json.arr = arr;
                return json;
            },

            //终端脉冲配置参数
            Fn11: function (data) {
                var type = ['正向有功', '正向无功', '反向有功', '反向无功'],
                    json = {
                        pulseNum: data.splice(0, 1)
                    },
                    arr = [];
                for (var i = 1; i <= json.pulseNum; i++) {
                    var pulseArr = data.splice(0, 5);
                    arr.push({
                            port: pulseArr[0],
                            mpNo: pulseArr[1],
                            type: type[pulseArr[2]],
                            constant: (pulseArr[4] << 8) + pulseArr[3]
                        }
                    );
                }
                json.arr = arr;
                return json;
            },

            /*          //终端状态量输入参数
             fn12: function () {
             var property = [];
             var insert = [];
             for (var i = 0; i < 8; i++) {
             property.push((buff[19] >> i) % 2);
             }
             for (var i = 0; i < 8; i++) {
             insert.push((buff[18] >> i) % 2);
             }
             return {json: {property: property, insert: insert}, key: 6};
             },*/

            //终端电压/电流模拟量配置参数
            Fn13: function (data) {
                var type = ['A相电压', 'B相电压', 'C相电压', 'A相电流', 'B相电流', 'C相电流'],
                    json = {
                        ACNum: data.splice(0, 1)
                    },
                    arr = [];
                for (var i = 1; i <= json.ACNum; i++) {
                    var ACArr = data.splice(0, 3);
                    arr.push({
                            portNum: ACArr[0],
                            mpNum: ACArr[1],
                            mcsx: type[ACArr[2] % 8]
                        }
                    );
                }
                json.arr = arr;
                return json;
            },

            //终端总加组配置参数
            Fn14: function (data) {
                var json = {
                        tgNum: data.splice(0, 1)[0]
                    },
                    arr = [];
                for (var i = 1; i <= json.tgNum; i++) {
                    var tgArr = data.splice(0, 2);
                    var tgObj = {
                        serialNum: tgArr[0],
                        mpAmount: tgArr[1]
                    };
                    var dataJson = [];
                    for (var j = 1; j <= tgObj.mpAmount; j++) {
                        var mpArr = data.splice(0, 1);
                        dataJson.push({
                            mped_index: (mpArr[0] % 64) + 1,
                            dir_flag: (mpArr[0] >> 6) % 2,
                            calc_flag: (mpArr[0] >> 7) % 2
                        });
                    }
                    tgObj['data'] = dataJson;
                    arr.push(tgObj);
                }
                json['arr'] = arr;
                return json
            },

            //有功总电能量差动越限事件参数设置
            Fn15: function (data) {
                var json = {
                        configNum: data.splice(0, 1)[0]
                    },
                    arr = [],
                    time = ['60分钟', '30分钟', '15分钟'];
                for (var i = 1; i <= json.configNum; i++) {
                    var dataArr = data.splice(0, 9),
                        obj = {
                            serialNum: dataArr[0],
                            contrastNum: dataArr[1],
                            consultNum: dataArr[2],
                            timeCb: time[dataArr[3] % 4],
                            methodSign: (dataArr[3] >> 7) == 0 ? '相对对比' : '绝对对比',
                            relativeVal: dataArr[4],
                            absoluteVal: tools.getDFA3(dataArr[5], dataArr[6], dataArr[7], dataArr[8])
                        };
                    arr.push(obj)
                }
                json['arr'] = arr;
                return json
            },

            //虚拟专网用户名、密码
            Fn16: function (data) {
                var dataArr = data.splice(0, 64);
                var json = {
                    un: tools.getDFASC(dataArr.slice(0, 31)),
                    psw: tools.getDFASC(dataArr.slice(32, 63))
                };
                return json;
            },

            //终端保安定值
            Fn17: function (data) {
                var dataArr = data.splice(0, 2);
                var json = {
                    sfv: tools.getDFA2(dataArr[0], dataArr[1])
                };
                return json;
            },

            //终端功控时段
            Fn18: function (data) {
                var dataArr = data.splice(0, 12);
                var json = [];
                var mode = ['不控制', '控制1', '控制2', '保留'];
                for (var i = 0; i < 12; i++) {
                    for (var j = 0; j < 8; j += 2) {
                        json.push(mode[(dataArr[i] >> j) % 4])
                    }
                }
                return json;
            },

            //终端时段功控定值浮动系数
            Fn19: function (data) {
                var json = {
                    timesecCoe: tools.getDFA4(data.splice(0, 1)[0])
                };
                return json;
            },

            //终端月电能量控定值浮动系数
            Fn20: function (data) {
                var json = {
                    timesecCoe: tools.getDFA4(data.splice(0, 1)[0])
                };
                return json;
            },

            //终端电能量费率时段和费率数
            Fn21: function (data) {
                var dataArr = data.splice(0, 49),
                    json = {m: dataArr[48]},
                    mNO = [];
                for (var i = 0; i < 48; i++) {
                    mNO.push(dataArr[i])
                }
                json.mNO = mNO;
                return json;
            },

            //终端电能量费率
            Fn22: function (data) {
                var json = {m: data.splice(0, 1)[0]};

                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['tariff' + i] = tools.getDFA3(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3])
                }
                return json;
            },

            //终端催费告警参数
            Fn23: function (data) {
                var dataArr = data.splice(0, 3);
                var t = dataArr[0] + (dataArr[1] << 8) + (dataArr[2] << 16);
                var json = {};
                for (var i = 0; i < 24; i++) {
                    json[i + ':00~' + (i + 1) + ':00'] = (t >> i) % 2 == 0 ? '不警告' : '警告'
                }
                return json;
            },

            //测量点基本参数
            Fn25: function (data) {
                var lineArr = ['备用', '三相三线', '三相四线', '单相表'],
                    singlePh = ['不确定', 'A相', 'B相', 'C相'];
                var dataArr = data.splice(0, 11);
                var json = {
                    mp_pt: dataArr[0] + (dataArr[1] << 8),
                    mp_ct: dataArr[2] + (dataArr[3] << 8),
                    RatedataArr: tools.getDFA7(dataArr[4], dataArr[5]),
                    Rated_I: tools.getDFA22(dataArr[6]),
                    Rted_Cp: tools.getDFA23(dataArr[7], dataArr[8], dataArr[9]),
                    lineStyle: lineArr[dataArr[10] % 4], singlePh: singlePh[(dataArr[10
                        ] >> 2) % 4]
                };
                return json;
            },

            //测量点限值参数
            Fn26: function (data) {
                var dataArr = data.splice(0, 57),
                    json = {
                        uUp: tools.getDFA7(dataArr[0], dataArr[1]),
                        uLow: tools.getDFA7(dataArr[2], dataArr[3]),
                        uBreak: tools.getDFA7(dataArr[4], dataArr[5]),
                        uOver: tools.getDFA7(dataArr[6], dataArr[7]),
                        uOverdataArrra: dataArr[8],
                        uOverCoe: tools.getDFA5(dataArr[9], dataArr[10]),
                        uOwe: tools.getDFA7(dataArr[11], dataArr[12]),
                        uOwedataArrra: dataArr[13],
                        uOweCoe: tools.getDFA5(dataArr[14], dataArr[15]),
                        iOver: tools.getDFA25(dataArr[16], dataArr[17], dataArr[18]),
                        iOverdataArrra: dataArr[19],
                        iOverCoe: tools.getDFA5(dataArr[20], dataArr[21]),
                        iUp: tools.getDFA25(dataArr[22], dataArr[23], dataArr[24]),
                        iUpdataArrra: dataArr[25],
                        iUpCoe: tools.getDFA5(dataArr[26], dataArr[27]),
                        ioUp: tools.getDFA25(dataArr[28], dataArr[29], dataArr[30]),
                        ioUpdataArrra: dataArr[31],
                        ioUpCoe: tools.getDFA5(dataArr[32], dataArr[33]),
                        viewOver: tools.getDFA23(dataArr[34], dataArr[35], dataArr[36]),
                        viewOverdataArrra: dataArr[37],
                        viewOverCoe: tools.getDFA5(dataArr[38], dataArr[39]),
                        viewUp: tools.getDFA23(dataArr[40], dataArr[41], dataArr[42]),
                        viewUpdataArrra: dataArr[43],
                        viewUpCoe: tools.getDFA5(dataArr[44], dataArr[45]),
                        uUnba: tools.getDFA5(dataArr[6], dataArr[47]),
                        uUnbadataArrra: dataArr[48],
                        uUnbaCoe: tools.getDFA5(dataArr[49], dataArr[50]),
                        iUnba: tools.getDFA5(dataArr[51], dataArr[52]),
                        iUnbadataArrra: dataArr[53],
                        iUnbaCoe: tools.getDFA5(dataArr[54], dataArr[55]),
                        lostUTime: dataArr[56]
                    };
                return json;
            },

            //测量点铜损、铁损参数
            Fn27: function (data) {
                var dataArr = data.splice(0, 24),
                    json = {
                        rA: tools.getDFA26(dataArr[0], dataArr[1]),
                        xA: tools.getDFA26(dataArr[2], dataArr[3]),
                        gA: tools.getDFA26(dataArr[4], dataArr[5]),
                        bA: tools.getDFA26(dataArr[6], dataArr[7]),
                        rB: tools.getDFA26(dataArr[8], dataArr[9]),
                        xB: tools.getDFA26(dataArr[10], dataArr[11]),
                        gB: tools.getDFA26(dataArr[12], dataArr[13]),
                        bB: tools.getDFA26(dataArr[14], dataArr[15]),
                        rC: tools.getDFA26(dataArr[16], dataArr[17]),
                        xC: tools.getDFA26(dataArr[18], dataArr[19]),
                        gC: tools.getDFA26(dataArr[20], dataArr[21]),
                        bC: tools.getDFA26(dataArr[22], dataArr[23])
                    };
                return json;
            },

            //测量点功率因数分段限值
            Fn28: function (data) {
                var dataArr = data.splice(0, 4),
                    json = {
                        PfactorLimit1: tools.getDFA5(dataArr[0], dataArr[1]),
                        PfactorLimit2: tools.getDFA5(dataArr[2], dataArr[3])
                    }
                return json
            },

            //终端当地电能表显示号
            Fn29: function (data) {
                var dataArr = data.splice(0, 12),
                    json = {meterNO: tools.getDFASC(dataArr.slice(0, 12))};
                return json;
            },

            //台区集中抄表停抄/投抄设置
            Fn30: function (data) {
                var dataArr = data.splice(0, 1),
                    json = {IsConcInuse: dataArr[0]};
                return json;
            },

            //终端抄表运行参数设置
            Fn33: function (data) {
                var json = {amount: data.splice(0, 1)[0], arr: []};
                for (var i = 1; i <= json.amount; i++) {
                    var dataArr = data.splice(0, 14);
                    var m_r_date = [],
                        temp = dataArr[3] + (dataArr[4] << 8) + (dataArr[5] << 16) + (dataArr[6] << 24);
                    for (var l = 0; l < 32; l++) {
                        if ((temp >> l) % 2 != 0) {
                            m_r_date.push(l + 1);
                        }
                    }
                    var dataObj = {
                        port: dataArr[0],
                        auto_m_r: dataArr[1] % 2,
                        im: (dataArr[1] >> 1) % 2,
                        fm: (dataArr[1] >> 2) % 2,
                        bpr: (dataArr[1] >> 3) % 2,
                        sm: (dataArr[1] >> 4) % 2,
                        t_code: (dataArr[1] >> 5) % 2,
                        date: m_r_date,
                        readTime: tools.getDFA19(dataArr[7], dataArr[8]),
                        interval: dataArr[9],
                        airingTime: tools.getDFA18(dataArr[10], dataArr[11], dataArr[12]),
                        interval_count: dataArr[13]
                    };
                    for (var j = 1; j <= dataObj.interval_count; j++) {
                        var timeArr = data.splice(0, 4);
                        dataObj['b_time' + j] = tools.getDFA19(timeArr[0], timeArr[1]);
                        dataObj['e_time' + j] = tools.getDFA19(timeArr[2], timeArr[3]);
                    }
                    json.arr.push(dataObj);
                }
                return json
            },

            //集中器下行通信模块的参数设置
            Fn34: function (data) {
                var json = {amount: data.splice(0, 1)[0], arr: []};
                var bit = ['5', '6', '7', '8'],
                    baud = ['300', '600', '1200', '2400', '4800', '7200', '9600', '19200']

                for (var i = 1; i <= json.amount; i++) {
                    var dataArr = data.splice(0, 6);
                    var dataObj = {
                        port: dataArr[0],
                        dataBit: bit[dataArr[1] % 4],
                        check: (dataArr[1] >> 2) % 2 == 0 ? '偶' : '奇',
                        exist: (dataArr[1] >> 3) % 2 == 0 ? '无' : '有',
                        stop: (dataArr[1] >> 4) % 2 == 0 ? '1' : '2',
                        baud: baud[dataArr[1] >> 5],
                        bps: dataArr[2] + (dataArr[3] << 8) + (dataArr[4] << 16) + (dataArr[5] << 24)
                    };
                    json.arr.push(dataObj);
                }
                return json
            },

            //台区集中抄表重点户设置
            Fn35: function (data) {
                var json = {amount: data.splice(0, 1)[0], arr: []};
                for (var i = 1; i <= json.amount; i++) {
                    var dataArr = data.splice(0, 2);
                    var dataObj = {
                        ds: dataArr[0] + (dataArr[1] << 8)
                    };
                    json.arr.push(dataObj);
                }
                return json
            },

            //终端上行通信流量门限设置

            Fn36: function (data) {
                var dataArr = data.splice(0, 4);
                var json = {
                    MonthCommLimit: (dataArr[0]) + ((dataArr[1] * 256) ) +
                    ((dataArr[2] * 65536)) + ((dataArr[3] * 16777216))
                };
                return json;
            },

            //终端上行通信流量门限设置
            Fn37: function (data) {
                var dataArr = data.splice(0, 7);
                var json = {};
                return json;
            },

            //1类数据配置设置 （在终端支持的1类数据配置内）

            Fn38: function (data) {
                var json = {
                    bigNum: data.splice(0, 1)[0],
                    amount: data.splice(0, 1)[0],
                    arr: []
                };
                for (var i = 1; i <= json.amount; i++) {
                    var dataObj = {
                        smallNum: data.splice(0, 1)[0],
                        mesBlockAm: data.splice(0, 1)[0],
                        groupArr: []
                    };
                    for (var j = 1; j <= dataObj.mesBlockAm; j++) {
                        var dataArr = data.splice(0, 1)[0],
                            arr = [];
                        for (var k = 0; k < 8; k++) {
                            if ((dataArr >> k) % 2 == 1) {
                                arr.push((j - 1) * 8 + (k + 1));
                            }
                        }
                        dataObj['group' + j] = arr
                    }
                    json.arr.push(dataObj)
                }
                return json
            },

            //2类数据配置设置（在终端支持的2类数据配置内）

            Fn39: function (data) {
                var json = {
                    bigNum: data.splice(0, 1)[0],
                    amount: data.splice(0, 1)[0],
                    arr: []
                };
                for (var i = 1; i <= json.amount; i++) {
                    var dataObj = {
                        smallNum: data.splice(0, 1)[0],
                        mesBlockAm: data.splice(0, 1)[0],
                        groupArr: []
                    };
                    for (var j = 1; j <= dataObj.mesBlockAm; j++) {
                        var dataArr = data.splice(0, 1)[0],
                            arr = [];
                        for (var k = 0; k < 8; k++) {
                            if ((dataArr >> k) % 2 == 1) {
                                arr.push((j - 1) * 8 + (k + 1));
                            }
                        }
                        dataObj['group' + j] = arr
                    }
                    json.arr.push(dataObj)
                }
                return json
            },

            //时段功控定值
            //TODO 有问题，待优化
            Fn41: function (data) {
                var signData = data.splice(0, 1)[0],
                    json = {sinaArr: []};
                for (var i = 0; i < 3; i++) {
                    if (signData >> 2 === 1) {
                        var timesecNum = i + 1
                        json.sinaArr.push(i + 1)
                    }
                }
                ;

                arr['pc'] = [];
                for (var i = 0, j = 0, l = 0; i < du.length - 21; i++, j++) {
                    arr['pc'].push({});
                    arr['pc'][j]['timesecNum'] = _.toArray(du[5 + i].toString(2)).reverse();
                    var vNum = arr['pc'][j]['timesecNum'];
                    arr['pc'][j]['pcSchema'] = [];
                    for (var k = 0; k < 8; k++) {
                        if (vNum[k] == 1) {
                            arr['pc'][j]['pcSchema'].push(tools.getDFA2(du[6 + i + l], du[7 + i + l]));
                            l += 2
                        }
                    }
                    i += l
                }
                return {json: arr, key: 7 + i + l + 1};
            },

            //厂休功控参数
            Fn42: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    value: {
                        facoff_fixed_value: tools.getDFA2(du[4], du[5]),
                        facoff_hour: tools.bcd2b(du[7]),
                        facoff_min: tools.bcd2b(du[6]),
                        facoff_span: du[8],
                        facoff_week0: du[9] % 2,
                        facoff_week1: (du[9] >> 1) % 2,
                        facoff_week2: (du[9] >> 2) % 2,
                        facoff_week3: (du[9] >> 3) % 2,
                        facoff_week4: (du[9] >> 4) % 2,
                        facoff_week5: (du[9] >> 5) % 2,
                        facoff_week6: (du[9] >> 6) % 2,
                        facoff_week7: (du[9] >> 7) % 2
                    }
                };
                return {json: json, key: 10};
            },

            //营业报停控参数
            Fn44: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    value: {
                        buzstop_start_time: tools.getDFA20(du[4], du[5], du[6]),
                        buzstop_end_time: tools.getDFA20(du[7], du[8], du[9]),
                        buzstop_fixed_value: tools.getDFA2(du[10], du[11])
                    }
                };
                return {json: json, key: 12};
            },

            //功控轮次设定
            Fn45: function (data) {
                var round = _.toArray(du[4].toString(2)),
                    json = {
                        round: round.reverse()
                    };
                return {json: json, key: 5};
            },

            //月电量控定值
            Fn46: function (data) {
                var json = {
                    pn: tools.getPn(du[0], du[1]),
                    value: tools.getDFA3(du[4], du[5], du[6], du[7])
                };
                return {json: json, key: 8};
            },

            //购电量（费）控参数
            Fn47: function (data) {
                var json = {
                    pn: tools.getPn(du[0 + j], du[1 + j]),
                    buyId: du[j + 4] + (du[j + 5] << 8) + (du[j + 6] << 16) + (du[j + 7] << 24),
                    addFlag: du[j + 8] == 85 ? '追加' : '刷新',
                    buyValue: tools.getDFA3(du[j + 9], du[j + 10], du[j + 11], du[j + 12]),
                    alarmValue: tools.getDFA3(du[j + 13], du[j + 14], du[j + 15], du[j + 16]),
                    jumpValue: tools.getDFA3(du[j + 17], du[j + 18], du[j + 19], du[j + 20])
                };
                return {json: json, key: 21};
            },

            //电控轮次设定
            Fn48: function (data) {
                var round = _.toArray(du[4].toString(2)),
                    json = {
                        round: round.reverse()
                    };
                return {json: json, key: 5};
            },

            //功控告警时间
            Fn49: function (data) {
                var m = du.length / 5;
                var arr = [];
                for (var i = 0; i < m; i++) {
                    var j = 5 * i;
                    arr.push({
                        pn: tools.getPn(du[0 + j], du[1 + j]),
                        AlarmTime: du[j + 4]
                    })
                }
                return {json: arr, key: 5};
            },

            //终端声音告警允许∕禁止设置
            Fn57: function (data) {
                var t = du[4] + (du[5] << 8) + (du[6] << 16);
                var arr = [];
                for (var i = 0; i < 24; i++) {
                    if ((t >> i) % 2 === 1)
                        arr.push(i + ':00~' + (i + 1) + ':00允许警告');
                }
                return {json: arr, key: 7};
            },

            //终端自动保电参数
            Fn58: function (data) {
                return {json: du[4], key: 5};
            },

            //电能表异常判别阈值设定
            Fn59: function (data) {
                var json = {
                    DiffoverLimit: tools.getDFA22(du[4]),
                    fastLimit: tools.getDFA22(du[5]),
                    stopLimit: du[6],
                    adjLimit: du[7]
                };
                return {json: json, key: 8};
            },

            //谐波限值
            Fn60: function (data) {
                var arr = {
                    totalAbovlUplmt: tools.getDFA5(du[4], du[5]),
                    oddAbovlUplmt: tools.getDFA5(du[6], du[7]),
                    evenAbovlUplmt: tools.getDFA5(du[8], du[9])
                };
                for (var i = 2; i < 20; i += 2) {
                    arr['exp' + i + 'AbvolUplmt'] = tools.getDFA5(du[9 + (i - 1)], du[9 + i]);
                }
                for (var i = 3; i < 20; i += 2) {
                    arr['exp' + i + 'AbvolUplmt'] = tools.getDFA5(du[26 + (i - 1)], du[26 + i]);
                }
                arr['totalAbcurUplmt'] = tools.getDFA6(du[46], du[47]);

                for (var i = 2; i < 20; i += 2) {
                    arr['exp' + i + 'AbcurUplmt'] = tools.getDFA6(du[47 + (i - 1)], du[47 + i]);
                }
                for (var i = 3; i < 20; i += 2) {
                    arr['exp' + i + 'AbcurUplmt'] = tools.getDFA6(du[64 + (i - 1)], du[64 + i]);
                }
                return {json: arr, key: 64 + i + 1};
            },

            //直流模拟量接入参数
            Fn61: function (data) {
                var round = _.toArray(du[4].toString(2));
                return {json: {round: round.reverse()}, key: 5};
            },

            //直流模拟量接入参数
            Fn67: function (data) {
                return {json: du[4], key: 5};
            },

            //定时上报2类数据任务启动/停止设置
            Fn68: function (data) {
                return {json: du[4], key: 5};
            }
        },
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

            //日冻结正向有功（组合无功1）电能示值（总、费率1～M）
            Fn161: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 5);
                json.pap_r = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 5);
                    json['pap_r_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], mValueArr[4]);
                }
                return json
            },

            //日冻结正向无功（组合无功1）电能示值（总、费率1～M）
            Fn162: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 4);
                json.prp_r = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['prp_r_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json
            },

            //日冻结反向有功电能示值（总、费率1～M）
            Fn163: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 5);
                json.rap_r = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 5);
                    json['rap_r_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], mValueArr[4]);
                }
                return json
            },

            //日冻结反向无功（组合无功1）电能示值（总、费率1～M）
            Fn164: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 4);
                json.rap_r = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rap_r_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json
            },

            //月冻结正向有功电能示值（总、费率1～M）
            Fn177: function (data) {
                var json = {},
                    dateArr = data.splice(0, 8);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.date = tools.getDFA15(dateArr[2], dateArr[3], dateArr[4], dateArr[5], dateArr[6]);
                json.m = dateArr[7];
                var valueArr = data.splice(0, 5);
                json.pap_r = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 5);
                    json['pap_r_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], mValueArr[4]);
                }
                return json
            },

            //月冻结正向无功（组合无功1）电能示值（总、费率1～M）
            Fn178: function (data) {
                var json = {},
                    dateArr = data.splice(0, 8);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.date = tools.getDFA15(dateArr[2], dateArr[3], dateArr[4], dateArr[5], dateArr[6]);
                json.m = dateArr[7];
                var valueArr = data.splice(0, 4);
                json.prp_r = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['prp_r_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json
            },

            //月冻结反向有功电能示值（总、费率1～M）
            Fn179: function (data) {
                var json = {},
                    dateArr = data.splice(0, 8);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.date = tools.getDFA15(dateArr[2], dateArr[3], dateArr[4], dateArr[5], dateArr[6]);
                json.m = dateArr[7];
                var valueArr = data.splice(0, 5);
                json.rap_r = tools.getDFA14(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 5);
                    json['rap_r_m' + i] = tools.getDFA14(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3], mValueArr[4]);
                }
                return json
            },

            //月冻结反向无功（组合无功1）电能示值（总、费率1～M）
            Fn180: function (data) {
                var json = {},
                    dateArr = data.splice(0, 8);
                json.td = tools.getDFA21(dateArr[0], dateArr[1]);
                json.date = tools.getDFA15(dateArr[2], dateArr[3], dateArr[4], dateArr[5], dateArr[6]);
                json.m = dateArr[7];
                var valueArr = data.splice(0, 4);
                json.rrp_r = tools.getDFA11(valueArr[0], valueArr[1], valueArr[2], valueArr[3], valueArr[4]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 4);
                    json['rrp_r_m' + i] = tools.getDFA11(mValueArr[0], mValueArr[1], mValueArr[2], mValueArr[3]);
                }
                return json
            },

            //日冻结正向有功最大需量及发生时间（总、费率1～M）
            Fn185: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 7);
                json.pap_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.pap_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['pap_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['pap_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json
            },

            //日冻结正向无功最大需量及发生时间（总、费率1～M）
            Fn186: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 7);
                json.prp_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.prp_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['prp_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['prp_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json
            },

            //日冻结反向有功最大需量及发生时间（总、费率1～M）
            Fn187: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 7);
                json.rap_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.rap_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['rap_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['rap_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json
            },

            //日冻结反向无功最大需量及发生时间（总、费率1～M）
            Fn188: function (data) {
                var json = {},
                    dateArr = data.splice(0, 9);
                json.td = tools.getDFA20(dateArr[0], dateArr[1], dateArr[2]);
                json.date = tools.getDFA15(dateArr[3], dateArr[4], dateArr[5], dateArr[6], dateArr[7]);
                json.m = dateArr[8];
                var valueArr = data.splice(0, 7);
                json.rrp_m_demand = tools.getDFA23(valueArr[0], valueArr[1], valueArr[2]);
                json.rrp_m_demand_time = tools.getDFA17(valueArr[3], valueArr[4], valueArr[5], valueArr[6]);
                for (var i = 1; i <= json.m; i++) {
                    var mValueArr = data.splice(0, 7);
                    json['rrp_m_d' + i] = tools.getDFA23(mValueArr[0], mValueArr[1], mValueArr[2]);
                    json['rrp_m_d' + i + '_time'] = tools.getDFA17(mValueArr[3], mValueArr[4], mValueArr[5], mValueArr[6]);
                }
                return json
            }
        },

        /**
         * AFN14 请求3类数据（AFN=0EH）
         */
        AFN14: {
            /**
             * Fn1 请求重要事件
             * @param data
             * @constructor
             */
            Fn1: function (data) {
                //4c 79 4b 4c 17 10 00 16 31 12 14 01 00 02 00 00 00 00 00 00 00 40
                var json = {}, arr = data.splice(0, 4), eventLength = 0;
                json.EC1 = arr[0];
                json.EC2 = arr[1];
                json.Pm = arr[2];
                json.Pn = arr[3];
                json.ERC = [];
                if (json.Pm < json.Pn) {
                    eventLength = json.Pn - json.Pm;
                } else {
                    eventLength = 256 + json.Pn - json.Pm;
                }
                _.times(eventLength, function (i) {
                    json.ERC.push({
                        ERC: data.shift(),
                        Le: data.shift(),
                        events: hex_json_event['ERC' + this.ERC](data.splice(0, this.Le))
                    });
                });
                return json;
            },

            /**
             * Fn2 请求一般事件
             * @param data
             * @return {{}}
             * @constructor
             */
            Fn2: function (data) {
                return {};
            }
        },

        /**
         * AFN15
         */
        AFN15: {},

        /**
         * AFN16 数据转发（AFN=10H）
         */
        AFN16: {
            /**
             * Fn1 透明转发
             * @param data
             * @functiona Fn1
             */
            Fn1: function (data) {
                var json = {}, arr = data.splice(0, 3);
                json.tmnl_comm_port = arr.shift();
                json.trans_length = arr.shift() + (arr.shift() >> 8);
                json.trans = _645._07.hex_json(data);
                /*
                            00 00 01 00 1F 12 00 68 85 03 00 62 64 12 68 81 06 43 C3 35 33 33 33 8B 16
                            var b = a.splice(7, parseInt(a[5], 16))
                    var errFrame = false, arr = du.slice(7, du.length), tFrame;

                    if (arr[0] === 0xfe) {
                        tFrame = arr.slice(3, arr.length);
                    } else {
                    tFrame = arr;
                    }
                    var headIndex = tFrame.indexOf(0x68);
                    if (tFrame[tFrame.length - 2] != tools.setCS(tFrame.slice(headIndex, tFrame.length - 2))) {
                        errFrame = true;
                    }

                    var json = {comm_port: du[4], count: du[5] + (du[6] >> 8), tFrame: tFrame, errFrame: errFrame};
                    return {json: json, key: 7 + json.count};
                */
            }
        }
    },

    /**
     * 3类数据
     * @type {{ERC1: Function, ERC2: Function, ERC3: Function, ERC4: Function, ERC5: Function, ERC6: Function, ERC7: Function, ERC8: Function, ERC9: Function, ERC10: Function, ERC11: Function, ERC12: Function, ERC13: Function, ERC14: Function, ERC15: Function, ERC16: Function, ERC17: Function, ERC18: Function, ERC19: Function, ERC20: Function, ERC21: Function, ERC22: Function, ERC23: Function, ERC24: Function, ERC25: Function, ERC26: Function, ERC27: Function, ERC28: Function, ERC29: Function, ERC30: Function, ERC31: Function, ERC32: Function, ERC33: Function, ERC34: Function, ERC35: Function}}
     */
    hex_json_event = {
        ERC1: function (data) {
        },

        ERC2: function (data) {
        },

        /**
         * ERC3：参数变更记录
         * @param {Array} data
         * @return {{event_time: Date 参数更新时间, addr: (*|T), alter_params_du: Array}}
         * @constructor
         */
        ERC3: function (data) {
            var len = data.length,
                json = {
                    event_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift(), data.shift()),
                    addr: data.shift(),
                    alter_params_du: []
                };
            _.times(len, function () {
                json.alter_params_du.push({
                    pn: tools.getPn(data.shift(), data.shift()),
                    Fn: tools.getFn(data.shift(), data.shift())
                });
            });
            return json;
        },

        ERC4: function (data) {
        },

        ERC5: function (data) {
            return {
                event_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift(), data.shift()),
                jump_round: _.toArray(data.shift().toString(2)).reverse(),
                trip_power: tools.getDFA2(data.shift(), data.shift()),
                jump_after2_power: tools.getDFA2(data.shift(), data.shift())
            };
        },

        ERC6: function (data) {
        },

        ERC7: function (data) {
            return {
                event_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift(), data.shift()),
                group_total: data.shift(),
                trip_round: _.toArray(data.shift().toString(2)).reverse(),
                trip_class: _.toArray(data.shift().toString(2)).reverse(),
                trip_power: tools.getDFA3(data.shift(), data.shift(), data.shift(), data.shift()),
                trip_power_2min: tools.getDFA3(data.shift(), data.shift(), data.shift(), data.shift())
            };
        },

        ERC8: function (data) {
        },

        ERC9: function (data) {
        },

        ERC10: function (data) {
        },

        ERC11: function (data) {
        },

        ERC12: function (data) {
        },

        ERC13: function (data) {
        },

        ERC14: function (data) {
            return {
                power_cut_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift(), data.shift()),
                power_on_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift(), data.shift())
            };
        },

        ERC15: function (data) {
        },

        ERC16: function (data) {
        },

        ERC17: function (data) {
        },

        ERC18: function (data) {
        },

        ERC19: function (data) {
            return {
                event_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift(), data.shift()),
                group_total: data.shift(),
                odd_num: data.shift() + (data.shift() << 8) + (data.shift() << 16) + (data.shift() << 24),
                add_flag: data.shift() == 85 ? '追加' : '刷新',
                power_purchase_value: tools.getDFA3(data.shift(), data.shift(), data.shift(), data.shift()),
                alert_threshold: tools.getDFA3(data.shift(), data.shift(), data.shift(), data.shift()),
                jump_threshold: tools.getDFA3(data.shift(), data.shift(), data.shift(), data.shift()),
                before_purchase: tools.getDFA3(data.shift(), data.shift(), data.shift(), data.shift()),
                after_purchase: tools.getDFA3(data.shift(), data.shift(), data.shift(), data.shift())
            };
        },

        ERC20: function (data) {
        },

        ERC21: function (data) {
            return {
                event_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift()),
                fail_code: data.shift()
            };
        },

        ERC22: function (data) {
        },

        ERC23: function (data) {
            return {
                event_time: tools.getDFA15(data.shift(), data.shift(), data.shift(), data.shift()),
                group_total: data.shift(),
                trip_round: _.toArray(data.shift().toString(2)).reverse(),
                trip_class: _.toArray(data.shift().toString(2)).reverse(),
                alert_ene: tools.getDFA3(data.shift(), data.shift(), data.shift()),
                alert_pc: tools.getDFA3(data.shift(), data.shift(), data.shift())
            }
        },

        ERC24: function (data) {
        },

        ERC25: function (data) {
        },

        ERC26: function (data) {
        },

        ERC27: function (data) {
        },

        ERC28: function (data) {
        },

        ERC29: function (data) {
        },

        ERC30: function (data) {
        },

        ERC31: function (data) {
        },

        ERC32: function (data) {
        },

        ERC33: function (data) {
        },

        ERC34: function (data) {
        },

        ERC35: function (data) {
        }
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