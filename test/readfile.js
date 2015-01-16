var fs = require('fs');

fs.open('./MAING-malin.UPG','r', function (err, fd) {
    fs.read(fd, new Buffer([]), 0, 100);
});