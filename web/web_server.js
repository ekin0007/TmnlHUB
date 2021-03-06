/**
 * 主站连接服务端
 *
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    app = express(),
    config = require('../config').config;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multer());

app.all(['/', '/help'], function (req, res) {
    res.send('返回帮助信息');
});

app.use(function (req, res, next) {
    try {
        var url = req._parsedUrl.pathname,
            action = require('.' + url);
        app.all(url, action.handler);
        next();
    } catch (e) {
        res.status(404).send('404, 无法找到请求的页面！');
    }
});

var start = function () {
    app.listen(config.web_port, function (err) {
        if (err) throw err;
        console.log('webServer is listening on', config.web_port);
    });
};

exports.start = start;