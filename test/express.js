var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send({a: 1, b: '我勒个去'})
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

});