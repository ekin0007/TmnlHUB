/**
 * 系统配置文件
 */

//1秒，1分钟，1小时
var sec = 1000, min = 60 * sec, hr = 60 * min,
    sys_config = {
        tmnl_port: 5805,
        tmnl_delay_timeout: 0,
        tmnl_recv_timeout: 3 * sec,

        web_port: 2355,


        admin_port: 13887,

        sys_log: 'logs/sys',
        sys_alert: 'logs/sys',
        sys_err: 'logs/sys',
        sys_packets: 'logs/packets'
    };

exports.config = sys_config;