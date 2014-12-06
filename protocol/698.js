var _ = require('underscore'),
    tools = require('../tools').tools;

var json_hex = {
        AFN0: {},
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
        AFN2: {},
        AFN3: {},
        AFN4: {},
        AFN5: {},
        AFN6: {},
        AFN8: {},
        AFN9: {},
        AFN10: {},
        AFN11: {},
        AFN12: {},
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
        if (_.has([4, 5, 15], afn)) {
            con = 1;
        }
        seq = seq >= 15 ? 0 : seq++;
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
    return hex;
};
exports.hex_json = hex_json;