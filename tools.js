var _ = require('underscore'),
    moment = require('moment');

exports.tools = {

    now: function (format) {
        return moment().format(format || 'YYYY-MM-DD HH:mm:ss');
    },

    //通用确认帧
    confirm: function (data) {
        return this.format_json({
            A1: this.getA1(data),
            A2: this.getA2(data),
            AFN: 0x00, seq: this.getSEQ(data),
            C: {DIR: 0, PRM: 0, FCB: 0, FCV: 0},
            DU: [{pn: 0, DT: [{Fn: 1}]}]
        });
    },

    //通用否认帧
    negate: function (data) {
        return this.format_json({
            A1: this.getA1(data),
            A2: this.getA2(data),
            AFN: 0x00, seq: this.getSEQ(data),
            C: {DIR: 0, PRM: 0, FCB: 0, FCV: 0},
            DU: [{pn: 0, DT: [{Fn: 2}]}]
        });
    },

    seq: function (seq) {
        return seq >= 15 ? 0 : seq++;
    },

    format_json: function (str) {
        try {
            str = _.isObject(str) ? str : JSON.parse(str);
            var json = {
                A1: str.A1, A2: str.A2, A3: str.A3 || 0, AFN: str.AFN,
                C: str.C || {DIR: 0, PRM: 1, FCB: 0, FCV: 0}, seq: str.seq || 0
            };
            json.DU = _.map(str.DU, function (item) {
                return {
                    pn: item.pn,
                    DT: _.map(item.DT, function (dt) {
                        return {
                            Fn: dt.Fn,
                            DATA: dt.DATA || []
                        }
                    })
                };
            });
            json.AUX = str.AUX || {};
            json.retry = str.retry || 0;
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

    getAddr: function (data) {
        return {A1: this.getA1(data), A2: this.getA2(data)};
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

    set_len: function (data) {
        var len = (data.length << 2) + 2, buff = new Buffer(4);
        buff.writeInt16LE(len, 0);
        buff.writeInt16LE(len, 2);
        return buff.toJSON();
    },

    set_c: function (json) {
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

    set_addr: function (a1, a2, a3) {
        return [this.b2bcd(a1 % 100), this.b2bcd(Math.floor(a1 / 100)), a2 % 256, Math.floor(a2 / 256), a3];
    },

    set_seq: function (json) {
        var afn = json.AFN, tpv = 0, fir = 1, fin = 1, con = 0, seq = json.seq || 0;
        if (_.has([4, 5, 15], afn)) con = 1;
        return [(parseInt('' + tpv + fir + fin + con, 2) << 4) + seq];
    },

    set_pwd: function (pwd) {
        if (_.isNumber(pwd)) {
            return [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        } else {
            return [];
        }
    },

    set_cs: function (data) {
        for (var i = 0, CS = 0; i < data.length; i++) CS += parseInt(data[i]);
        return [CS % 256];
    },

    set_end: function () {
        return [0x16];
    },

    getL1: function (data) {
        return ((data[2] << 8) + data[1]) >> 2;
    },

    getA1: function (data) {
        return this.bcd2b(data[8]) * 100 + this.bcd2b(data[7]);
    },

    getA2: function (data) {
        return (data[10] << 8) + data[9];
    },

//返回 传输方向位。DIR=0：表示此帧报文是由主站发出的下行报文；	DIR=1：表示此帧报文是由终端发出的上行报文。
    getDIR: function (buff) {
        return buff[6] >> 7;
    },

//返回 启动标志位。PRM =1：表示此帧报文来自启动站；PRM =0：表示此帧报文来自从动站。
    getPRM: function (data) {
        return (data[6] >> 6) % 2;
    },

//返回 请求访问位。ACD=1表示终端有重要事件等待访问，ACD=0表示终端无事件数据等待访问。
    getACD: function (data) {
        return (data[6] >> 5) % 2;
    },

//返回 功能码（控制域）。
    getCFN: function (data) {
        return data[6] % 16;
    },

    getAFN: function (data) {
        return data[12];
    },

//返回 帧时间标签有效。TpV=0：表示在附加信息域中无时间标签Tp；TpV=1：表示在附加信息域中带有时间标签Tp；
    getTpV: function (data) {
        return data[13] >> 7;
    },

//返回 首帧标志。FIR：置“1”，报文的第一帧。
    getFIR: function (data) {
        return (data[13] >> 6) % 2;
    },

//返回 末帧标志。FIN：置“1”，报文的最后一帧。
    getFIN: function (data) {
        return (data[13] >> 5) % 2;
    },

//返回 请求确认标志位。CON位置“1”，表示需要对该帧报文进行确认；置“0”，表示不需要对该帧报文进行确认。
    getCON: function (data) {
        return (data[13] >> 4) % 2;
    },

//返回 帧序号SEQ。
    getSEQ: function (data) {
        return data[13] & 0x0f;
    },

//返回 信息点标识。
    getPn: function (da1, da2) {
        var i = 0;
        if (da1 == 0 && da2 == 0) return 0;
        while (da1 > 1) {
            i++;
            da1 = Math.floor(da1 / 2);
        }
        return (da2 - 1) * 8 + i + 1;
    },

//返回 信息类标识。
    getFn: function (dt1, dt2) {
        var i = 0;
        while (dt1 > 1) {
            i++;
            dt1 = Math.floor(dt1 / 2);
        }
        return dt2 * 8 + i + 1;
    },

//返回 附加信息域。
    getAUX: function (data) {
        var ACD = this.getACD(data), TpV = this.getTpV(data), AUX = {};
        if (ACD === 0x01) {
            AUX.EC1 = data[data.length - 10];//重要事件计数器EC1
            AUX.EC2 = data[data.length - 9];//一般事件计数器EC2
        }
        if (TpV === 0x01) {
            AUX.PFC = data[data.length - 8];//启动帧帧序号计数器PFC
            var PST = data.slice(data.length - 7, data.length - 3);//启动帧发送时标PST
            AUX.PST = {
                sec: this.bcd2b(PST[0]),
                min: this.bcd2b(PST[1]),
                hour: this.bcd2b(PST[2]),
                date: this.bcd2b(PST[3])
            };
            AUX.SD = data[data.length - 3];//允许发送传输延时时间SD
        }
        return AUX;
    },

    getDU: function (data) {
        var acd = this.getACD(data), tpv = this.getTpV(data), auxLength = 2;//（这个2其实是校验和和结尾0x16）
        if (acd === 1) {
            auxLength += 2;
        } else if (tpv === 1) {
            auxLength += 6;
        }

        return data.slice(14, data.length - auxLength).toJSON();//du从pn开始到校验码前
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

    //数据格式
    getDFASC: function (buff) {
        var arr = new Buffer(_.without(buff, 0x00));
        return arr.toString('utf8')
    },

    getDFA2: function (parameter1, parameter2) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee) return null;
        var sfv = parseFloat(((this.bcd2b(parameter1) + (parameter2 % 16) * 100) * Math.pow(10, 4 - (parameter2 >> 5))).toFixed(3));
        return sfv;
    },

    getDFA3: function (parameter1, parameter2, parameter3, parameter4) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee || parameter3 == 0xee || parameter4 == 0xee) return null;
        return {
            ene_value: (parameter4 >> 4) % 2 === 0 ? (this.bcd2b(parameter1) +
            this.bcd2b(parameter2) * 100 + this.bcd2b(parameter3) * 10000 + (parameter4 % 16) * 1000000) :
            0 - ((this.bcd2b(parameter1) +
            this.bcd2b(parameter2) * 100 + this.bcd2b(parameter3) * 10000 + (parameter4 % 16) * 1000000)),
            ene_unit: (parameter4 >> 6) % 2
        };
    },

    getDFA4: function (parameter) {
        if (parameter == 0xee || parameter == 0xff) return null;
        return [this.bcd2b(parameter % 128), parameter >> 7 == 0 ? '上浮' : '下浮']
    },

    getDFA5: function (p1, p2) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee) return null;
        var s = p2 >> 7,
            r = this.bcd2b(p2 % 128 >> 4) * 100 + this.bcd2b(p2 % 16) * 10 + this.bcd2b(p1 >> 4) + this.bcd2b(p1 % 16) * 0.1;
        if (s) r = 0 - r;
        return parseFloat(r.toFixed(1));
    },

    getDFA6: function (parameter1, parameter2) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee) return null;
        return (this.bcd2b(parameter1) * 0.01 + this.bcd2b(parameter2 % 128)).toFixed(2)
    },

    getDFA7: function (parameter1, parameter2) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee) return null;
        return parseFloat((this.bcd2b(parameter1) * 0.1 + this.bcd2b(parameter2) * 10).toFixed(1));
    },

    getDFA9: function (p1, p2, p3) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee) return null;
        //s===0 正数 s===1 负数
        var s = p3 >> 7,
            r = this.bcd2b(p3 % 128 >> 4) * 10 + this.bcd2b(p3 % 16) + this.bcd2b(p2 >> 4) * .1 + this.bcd2b(p2 % 16) * .01 + this.bcd2b(p1 >> 4) * .001 + this.bcd2b(p1 % 16) * .0001;
        if (s) r = 0 - r;
        return parseFloat(r.toFixed(4));
    },

    getDFA10: function (p1, p2, p3) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee) return null;
        return (this.bcd2b(p3 >> 4) * 100000 +
        this.bcd2b(p3 % 16) * 10000 +
        this.bcd2b(p2 >> 4) * 1000 +
        this.bcd2b(p2 % 16) * 100 +
        this.bcd2b(p1 >> 4) * 10 +
        this.bcd2b(p1 % 16));
    },

    getDFA11: function (p1, p2, p3, p4) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee || p4 == 0xee) return null;
        var r = this.bcd2b(p4 >> 4) * 100000 +
            this.bcd2b(p4 % 16) * 10000 +
            this.bcd2b(p3 >> 4) * 1000 +
            this.bcd2b(p3 % 16) * 100 +
            this.bcd2b(p2 >> 4) * 10 +
            this.bcd2b(p2 % 16) +
            this.bcd2b(p1 >> 4) * .1 +
            this.bcd2b(p1 % 16) * .01;
        return parseFloat(r.toFixed(2));
    },

    getDFA12: function (p1, p2, p3, p4, p5, p6) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee || p4 == 0xee || p5 == 0xee) return null;
        return (this.bcd2b(p6 >> 4) * 100000000000 +
        this.bcd2b(p6 % 16) * 10000000000 +
        this.bcd2b(p5 >> 4) * 1000000000 +
        this.bcd2b(p5 % 16) * 100000000 +
        this.bcd2b(p4 >> 4) * 10000000 +
        this.bcd2b(p4 % 16) * 1000000 +
        this.bcd2b(p3 >> 4) * 100000 +
        this.bcd2b(p3 % 16) * 10000 +
        this.bcd2b(p2 >> 4) * 1000 +
        this.bcd2b(p2 % 16) * 100 +
        this.bcd2b(p1 >> 4) * 10 +
        this.bcd2b(p1 % 16));
    },

    getDFA13: function (p1, p2, p3, p4) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee || p4 == 0xee) return null;
        var r = this.bcd2b(p4 >> 4) * 1000 +
            this.bcd2b(p4 % 16) * 100 +
            this.bcd2b(p3 >> 4) * 10 +
            this.bcd2b(p3 % 16) +
            this.bcd2b(p2 >> 4) * .1 +
            this.bcd2b(p2 % 16) * .01 +
            this.bcd2b(p1 >> 4) * .001 +
            this.bcd2b(p1 % 16) * .0001;
        return parseFloat(r.toFixed(4));
    },

    getDFA14: function (p1, p2, p3, p4, p5) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee || p4 == 0xee || p5 == 0xee) return null;
        var r = this.bcd2b(p5 >> 4) * 100000 +
            this.bcd2b(p5 % 16) * 10000 +
            this.bcd2b(p4 >> 4) * 1000 +
            this.bcd2b(p4 % 16) * 100 +
            this.bcd2b(p3 >> 4) * 10 +
            this.bcd2b(p3 % 16) +
            this.bcd2b(p2 >> 4) * .1 +
            this.bcd2b(p2 % 16) * .01 +
            this.bcd2b(p1 >> 4) * .001 +
            this.bcd2b(p1 % 16) * .0001;
        return parseFloat(r.toFixed(4));
    },

    getDFA15: function (parameter1, parameter2, parameter3, parameter4, parameter5) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee || parameter3 == 0xee || parameter4 == 0xee || parameter5 == 0xee) return null;
        return '20' + this.bcd2b(parameter5) + '/' + this.bcd2b(parameter4) + '/' +
            this.bcd2b(parameter3) + ' ' + this.bcd2b(parameter2) + ':' +
            this.bcd2b(parameter1);
    },

    getDFA16: function (p1, p2, p3, p4) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee || p4 == 0xee) return null;
        return this.bcd2b(p4) + ' ' + this.bcd2b(p3) + ':' + this.bcd2b(p2) + ':' + this.bcd2b(p1);
    },

    getDFA17: function (p1, p2, p3, p4) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee || p4 == 0xee) return null;
        return new Date().getFullYear() + '/' + this.bcd2b(p4) + '/' + this.bcd2b(p3) + ' ' + this.bcd2b(p2) + ':' + this.bcd2b(p1);
    },

    getDFA18: function (p1, p2, p3) {
        if (p1 == 0xee || p1 == 0xff || p2 == 0xee || p3 == 0xee) return null;
        return this.bcd2b(p3) + ' ' + this.bcd2b(p2) + ':' + this.bcd2b(p1);
    },

    getDFA19: function (parameter1, parameter2) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee) return null;
        return {hour: this.bcd2b(parameter2), min: this.bcd2b(parameter1)}
    },

    getDFA20: function (parameter1, parameter2, parameter3) {
        if (parameter1 == 0xee || parameter2 == 0xff || parameter2 == 0xee || parameter3 == 0xee) return null;
        return (2000 + this.bcd2b(parameter3)) + '/' + this.bcd2b(parameter2) + '/' + this.bcd2b(parameter1)
    },
    getDFA21: function (parameter1, parameter2) {
        if (parameter1 == 0xee || parameter2 == 0xff || parameter2 == 0xee) return null;
        return (2000 + this.bcd2b(parameter2)) + '/' + this.bcd2b(parameter1)
    },
    getDFA22: function (parameter) {
        if (parameter == 0xee || parameter == 0xff) return null;
        return (this.bcd2b(parameter) * 0.1).toFixed(1)
    },

    getDFA23: function (parameter1, parameter2, parameter3) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee || parameter3 == 0xee) return null;
        return parseFloat((this.bcd2b(parameter1) * 0.0001 + this.bcd2b(parameter2) * 0.01 + this.bcd2b(parameter3)).toFixed(4));
    },

    getDFA25: function (parameter1, parameter2, parameter3) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee || parameter3 == 0xee) return null;
        return parseFloat((this.bcd2b(parameter1) * 0.001 + this.bcd2b(parameter2) * 0.1 + this.bcd2b(parameter3 % 128) * 10).toFixed(3));
    },

    getDFA26: function (parameter1, parameter2) {
        if (parameter1 == 0xee || parameter1 == 0xff || parameter2 == 0xee) return null;
        return (this.bcd2b(parameter1) * 0.001 + this.bcd2b(parameter2) * 0.1).toFixed(3)
    },

    //********************************set**********************************

    setDFA2: function (data) {
        var arr = data.toString().split('.'), num, gnum, g,
            decLen = (arr[1] || []).length;
        if (decLen != 0) {
            num = Math.floor(data * Math.pow(10, decLen));
            gnum = Math.pow(10, 0 - decLen)
        } else {
            var tempNum = arr[0];
            num = tempNum.substr(0, 3);
            gnum = Math.pow(10, data.toString().length - num.length)
        }
        for (var i = 0; i < 8; i++) {
            if (10000 * Math.pow(10, 0 - i) === gnum) {
                g = i;
                break;
            }
        }
        return [this.b2bcd(num % 100), this.b2bcd(Math.floor(num / 100) % 100) + (g << 5)]
    },

    setDFA3: function (data) {
        return [
            this.b2bcd(data.ene_value[0] % 100),
            this.b2bcd(Math.floor(data.ene_value[0] / 100) % 100),
            this.b2bcd(Math.floor(data.ene_value[0] / 10000) % 100),
            this.b2bcd(Math.floor(data.ene_value[0] / 1000000) % 100) + (data.ene_value[1] << 6)]

    },

    setDFA20: function (date) {
        var dateArr = date.split('/');
        return [
            this.b2bcd(dateArr[1]),
            this.b2bcd(dateArr[0]),
            this.b2bcd(dateArr[2] - 2000)
        ]
    }
};