var _ = require('underscore');

exports.tools = {
    format_json: function (str) {
        try {
            str = _.isObject(str) ? str : JSON.parse(str);
            var json = {
                A1: str.A1, A2: str.A2, A3: str.A3 || 0, AFN: str.AFN,
                C: str.C || {DIR: 0, PRM: 1, FCB: 0, FCV: 0}
            };
            json.DU = _.map(str.DU, function (item) {
                return {
                    pn: item.pn,
                    DT: _.map(item.DT, function (dt) {
                        return {
                            Fn: dt.Fn,
                            DATA: dt.DATA || [],
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

    zerofill: function (str, len) {
        str = str.toString();
        len = len || 12;
        _.times(len - str.length, function () {
            str = '0' + str;
        });
        return str;
    },

    hex_str: function (data) {
        if (Buffer.isBuffer(data)) {
            data = data.toJSON();
        }
        if (_.isArray(data)) {
            var tools = this, str = _.map(data, function (item) {
                return tools.zerofill(item.toString(16).toUpperCase(), 2);
            });
            return str.join(' ');
        } else {
            throw 'data不是Buffer或者Array';
        }
    },

    bcd2b: function (bcd) {
        //hex to dec
        return Math.floor((bcd / 16)) * 10 + bcd % 16;
    },

    b2bcd: function (b) {
        //dec to hex
        return Math.floor((b / 10)) * 16 + b % 10;
    },

    getA1: function (data) {
        return this.bcd2b(data[8]) * 100 + this.bcd2b(data[7]);
    },

    getA2: function (data) {
        return (data[10] << 8) + data[9];
    },

    getAddr: function (data) {
        return {A1: this.getA1(data), A2: this.getA2(data)};
    },

    //返回 报文长度
    getL1: function (data) {
        return ((data[2] << 8) + data[1]) >> 2;
    },

    //检验报文长度，并返回结果
    checkL1: function (data) {
        return this.getL1(data) === data.length - 8;
    },

    //检验校验和，并返回结果
    checkCS: function (data) {
        for (var i = 6, CS = 0; i < data.length - 2; i++) CS += data[i];
        return (CS % 256) === data[data.length - 2];
    },

    data_invalid: function (data) {
        if (data[0] === 0x68 && data [5] === 0x68 && data[data.length - 1] === 0x16) {
            if (data[1] === data[3] && data[2] === data[4]) {
                if (this.checkL1(data) === true) {
                    if (this.checkCS(data) === true) {
                        return true;
                    }
                }
            }
        }
        return false;
    },

    //返回 信息点标识。
    getPn: function (data, h) {
        var i = 0, da1 = (h !== undefined ? data : data[14]), da2 = (h !== undefined ? h : data[15]);
        if (da1 == 0 && da2 == 0) return 0;
        while (da1 > 1) {
            i++;
            da1 = Math.floor(da1 / 2);
        }
        return (da2 - 1) * 8 + i + 1;
    },

    //返回 信息类标识。
    getFn: function (data, h) {
        var i = 0, dt1 = (h !== undefined ? data : data[16]), dt2 = (h !== undefined ? h : data[17]);
        while (dt1 > 1) {
            i++;
            dt1 = Math.floor(dt1 / 2);
        }
        return dt2 * 8 + i + 1;
    },

    setPn: function (pn) {
        var da1 = 0, da2 = 0;
        if (pn != 0) {
            da1 = 1;
            for (var j = 0; j < (pn - 1) % 8; j++)
                da1 *= 2;
            da2 = Math.floor((pn - 1) / 8) + 1;
        }
        return [da1, da2];
    },

    setFn: function (fn) {
        var dt1, dt2;
        if (0 == fn) {
            dt1 = dt2 = 0;
        } else {
            dt1 = 1;
            for (var i = 0; i < (fn - 1) % 8; i++)
                dt1 *= 2;
            dt2 = Math.floor((fn - 1) / 8);
        }
        return [dt1, dt2];
    },

    getSEQ: function (data) {
        return data[13] & 0x0f;
    },

    //返回 传输方向位。DIR=0：表示此帧报文是由主站发出的下行报文；	DIR=1：表示此帧报文是由终端发出的上行报文。
    getDIR: function (data) {
        return data[6] >> 7;
    },

    //返回 启动标志位。PRM =1：表示此帧报文来自启动站；PRM =0：表示此帧报文来自从动站。
    getPRM: function (data) {
        return (data[6] >> 6) % 2;
    },

    //返回 请求确认标志位。CON位置“1”，表示需要对该帧报文进行确认；置“0”，表示不需要对该帧报文进行确认。
    getCON: function (data) {
        return (data[13] >> 4) % 2;
    }
};