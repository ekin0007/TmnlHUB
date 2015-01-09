var tmnl_server = require('./tmnl/tmnl_server'),
    web_server = require('./web/web_server'),
    broadcast = require('./web/broadcast'),
    admin_server = require('./admin/admin_server');

tmnl_server.start();
web_server.start();
broadcast.start();
admin_server.start();