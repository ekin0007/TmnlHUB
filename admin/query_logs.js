var path = require('path'),
    _ = require('underscore'),
    moment = require('moment'),
    sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database(path.join(__dirname, '../db')),
    cError = require('../error').Error;

/**
 * action = [Y, M, D];
 */
exports.handler = function (req, res) {
    try {
        var action = req.body.action || req.query.action, value = new Date(req.body.value),
            a1 = req.body.A1, a2 = req.body.A2;
        switch (action.toLowerCase()) {
            case 'all':
                db.all('select strftime("%Y年", dts) as name, "y" as mark, strftime("%Y", dts) as value ' +
                'from frames group by value;', function (err, rec) {
                    res.send(cError(err) || rec);
                });
                break;
            case 'y':
                db.all('select strftime("%Y年%m月", dts) as name, "m" as mark, strftime("%Y-%m", dts) as value from frames ' +
                    'where strftime("%Y", dts) = "' + moment(value).format('YYYY') + '" group by value;',
                    function (err, rec) {
                        res.send(cError(err) || rec);
                    });
                break;
            case 'm':
                db.all('select strftime("%Y年%m月%d日", dts) as name, "d" as mark, strftime("%Y-%m-%d", dts) as value from frames ' +
                    'where strftime("%Y-%m", dts) = "' + moment(value).format('YYYY-MM') + '" group by value;',
                    function (err, rec) {
                        res.send(cError(err) || rec);
                    });
                break;
            case 'd':
                db.all('select A1, A2, A1||"@"||A2 as name, "f" as mark from frames ' +
                    'where strftime("%Y-%m-%d", dts) = "' + moment(value).format('YYYY-MM-DD') + '" ' +
                    'group by name order by A1, A2;',
                    function (err, rec) {
                        res.send(cError(err) || rec);
                    });
                break;
            case 'f':
                db.all('select * from frames where A1 = ' + a1 + ' and A2 = ' + a2 + ' and ' +
                    'strftime("%Y-%m-%d", dts) = "' + moment(value).format('YYYY-MM-DD') + '" order by id;',
                    function (err, rec) {
                        res.send(cError(err) || rec);
                    });
                break;
            case 'download':
                value = new Date(req.query.value), a1 = req.query.A1, a2 = req.query.A2;
                db.all('select * from frames where A1 = ' + a1 + ' and A2 = ' + a2 + ' and ' +
                    'strftime("%Y-%m-%d", dts) = "' + moment(value).format('YYYY-MM-DD') + '" order by id;',
                    function (err, rec) {
                        if (err) {
                            res.send(cError(err))
                        } else {
                            var str = '', name = moment(value).format('YYYY-MM-DD') + ' ' + a1 + '@' + a2;
                            _.each(rec, function (item) {
                                str += item.req_date + '  REQ: ' + item.req_buff + '\r\n' +
                                item.res_date + '  RES: ' + item.res_buff + '\r\n\r\n';
                            });
                            res.attachment(name + '.log');
                            res.send(str);
                        }
                    });
                break;
        }
    } catch (err) {
        res.send(cError(err));
    }
};