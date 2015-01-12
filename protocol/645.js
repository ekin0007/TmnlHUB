var _ = require('underscore'),
    cError = require('../error').Error,
    tools = require('../tools').tools;

var _07 = {
        json_hex: function (data) {

        },

        hex_json: function (data) {
            var json = {},
            //由于在电表返回的报文中，0xfe的数量不固定，所以需要先判断出报文中第一个0x68的位置
                first_0x68_position = data.index(0x68),
                arr = data.splice(first_0x68_position),
            //=======================================
                meter_comm_addr = 12,//电表地址
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
                }
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
                //68 ce 00 ce 00 68 4b 01 41 41 9c 02 10 6f 00 00 01 00 01 4b 8a 0a 11 00
                //fe fe fe 68 87 11 00 00 00 00 68 01 02 43 c3 71 16 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 cf 16
                //减0x33处理
                var data_subtract_0x33 = _.map(data_field, function (item) {
                        return item - 0x33;
                    }),
                    SDID = '' + data_subtract_0x33[1] + data_subtract_0x33[0];
                json = _07decode[SDID](data_subtract_0x33.splice(2));
            }

            return json;
        }
    },

    _07decode = {
        9010: function (data) {
            return 'Fuck u';
        }
    };

exports._07 = _07;