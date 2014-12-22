/**
 * 主站连接服务端
 *
 */
var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    config = require('../config').config;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multer());

app.use('/html', express.static(path.join(__dirname, '/web/html')));
app.use('/sdk', express.static(path.join(__dirname, '/web/sdk')));
app.use('/Ext', express.static(path.join(__dirname, '/web/sdk/ext-5.0.1/build/examples')));
app.use('/js', express.static(path.join(__dirname, '/web/js')));
app.use('/css', express.static(path.join(__dirname, '/web/css')));

app.all(['/'], function (req, res) {
    res.sendFile(__dirname + '/web/html/index.html');
});

app.all(['/help'], function (req, res) {
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

    io.on('connection', function(socket){
        console.log('websocket connection');
        socket.on('testClick', function (a, b, c, d, e) {
            console.log(arguments);
            socket.emit('testClick', 1,2,3,[4,5,6],{a:1,b:2});
        });
    });

    server.listen(config.admin_port, function (err) {
        if (err) throw err;
        console.log('adminServer is listening on', config.admin_port);
    });
};

exports.start = start;
exports.io = io;