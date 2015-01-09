var net = require('net');

var socket = new net.Socket();

socket.on('data', function (data) {
    console.log(data.toString());
});

socket.connect(2356);