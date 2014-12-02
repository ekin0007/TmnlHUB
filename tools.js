var _ = require('underscore');

exports.tools = {
    zerofill: function (str, len) {
        str = str.toString();
        len = len || 12;
        _.times(len - str.length, function () {
            str = '0' + str;
        });
        return str;
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
    }
};