var path = require('path'),
    _ = require('underscore'),
    moment = require('moment'),
    sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database(path.join(__dirname, '../db')),
    cError = require('../error').Error,
    tools = require('../tools').tools;

exports.handler = function (req, res) {
    try {
        var a1 = req.body.A1, a2 = req.body.A2, date = req.body.date;

        db.all('select * from frames where A1 = ' + a1 + ' and A2 = ' + a2 + ' and ' +
            'strftime("%Y-%m-%d", dts) = "' + moment(date).format('YYYY-MM-DD') + '" order by id;',
            function (err, rec) {
                res.send(cError(err) || rec);
            });
    } catch (err) {
        res.send(cError(err));
    }
};