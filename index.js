var tmnl_server = require('./tmnl/tmnl_server'),
    web_server = require('./web/web_server'),
    admin_server = require('./admin/admin_server');

tmnl_server.start();
web_server.start();
admin_server.start();