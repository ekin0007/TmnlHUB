var _ = require('underscore'),
    cError = require('../error').Error,
    tools = require('../tools').tools;

var format_data = function (data) {
    var json = {},
    //由于在电表返回的报文中，0xfe的数量不固定，所以需要先判断出报文中第一个0x68的位置
        first_0x68_position = data.index(0x68),
        arr = data.splice(first_0x68_position),
    //=======================================z
        meter_comm_addr = tools.get_meter_comm_addr(!@#),//电表地址
        control_code = arr[8],//控制码
        data_field_length = arr[9],//数据域长度
        data_field = arr.slice(10, arr.length - 2),//数据域
        cs = arr[arr.length - 2],//校验和
    //=======================================
        data_without_cs = arr.slice(0, arr.length - 2);

    if (data_field_length == 0) {
        json = {
            error: true,
            message: 'DATA FILED IS EMPTY.'
        };
    } else if (data_field_length != data_field.length) {
        json = {
            error: true,
            message: 'DATA FIELD LENGTH ERROR'
        };
    } else if (cs != tools.set_cs(data_without_cs)) {
        json = {
            error: true,
            message: 'CHECKSUM ERROR'
        };
    } else {
        //减0x33处理
        json = _.map(data_field, function (item) {
            return item - 0x33;
        });
    }

    return json;
};

var _07 = {
        json_hex: function (data) {

        },

        hex_json: function (data) {
            var arr = format_data(data), SDID = '';
            if (arr.error == true) return arr;
            //FE FE FE FE 68 00 90 78 56 34 12 68 11 04 【33 36 34 33】 59 16
            _.each(arr.splice(0, 4).reverse(), function (item) {
                SDID += tools.zerofill(item, 2);
            });
            return _07decode[SDID](arr);
        }
    },

    _97 = {
        json_hex: function (data) {

        },

        hex_json: function (data) {
            var arr = format_data(data), SDID = '';
            if (arr.error == true) return arr;
            //FE FE FE FE 68 00 90 78 56 34 12 68 01 02 【46 C3】 80 16
            _.each(arr.splice(0, 2).reverse(), function (item) {
                SDID += tools.zerofill(item, 2);
            });
            return _97decode[SDID](arr);
        }
    },

    _07encode = {},

    _07decode = {
        '00010000': function (data) {
            return tools.getDFA11(data.shift(), data.shift(), data.shift(), data.shift());
        }
    },

    _97encode = {},

    _97decode = {
        '9010': function (data) {
            return tools.getDFA11(data.shift(), data.shift(), data.shift(), data.shift());
        }
    };

exports._07 = _07;