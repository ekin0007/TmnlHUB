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
        return [0x00, 0x00, 0x00, 0x00];
    },

    set_c = function () {
        return [0x00];
    },

    set_addr = function (A1, A2, A3) {
        return [0x00, 0x00, 0x00, 0x00, 0x00];
    },

    set_seq = function (seq) {
        if (!seq && seq != 0) {
            seq = 0;
        } else {
            seq = seq >= 15 ? 0 : seq++;
        }
        return [seq];
    },

    set_pwd = function (pwd) {
        return [0x00];
    },

    set_cs = function (data) {
        return [0x00];
    },

    set_end = function () {
        return [0x16];
    };

exports.json_hex = function (json) {
    var a1 = json.A1, a2 = json.A2, a3 = json.A3,
        c = set_c(), addr = set_addr(a1, a2, a3),
        afn = json.AFN, seq = set_seq(json.seq),
        pwd = set_pwd(json.AUX.PW), app = [], hex = [];
    _.each(json.DU, function (item) {
        var pn = item.pn;
        _.each(item.DT, function (dt) {
            var fn = dt.Fn, du = tools.setPn(pn).concat(tools.setFn(fn)),
                data = dt.data, retry = dt.retry;
            app = app.concat(du, json_hex['AFN' + afn]['Fn' + fn](data));
        });
    });
    app = app.concat(c, addr, afn, seq, app, pwd);
    hex = hex.concat(0x68, set_len(app), 0x68, app, set_cs(app), set_end());
    return hex;
};
exports.hex_json = hex_json;