Ext.require([
    'Ext.ux.statusbar.StatusBar',
    'Ext.ux.statusbar.ValidationStatus'
]);

Ext.onReady(function () {

    var socket = io();
    Ext.global.tmnlMgr = '';
    socket.on('tmnlListChange', function (tmnls) {
        Ext.global.tmnlMgr = tmnls;
        Ext.getCmp('link_total').update('设备连接总数：' + tmnls.length || 0);
    }).on('testClick', function () {
        alert('Fuck');
    }).on('tmnl_message', function (A1, A2, date, dir, buffstr) {
        var panel = Ext.getCmp(A1 + '@' + A2);
        if (panel) {
            panel.addFrame(date + dir + buffstr);
        }
        //console.log(date, dir, buffstr);
    });

    Ext.BLANK_IMAGE_URL = 'sdk/ext/build/blank.gif';

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'west', collapsible: false, border: true,
            width: 300, layout: 'fit', items: Ext.create('js.maintree')
        }, {
            region: 'center', xtype: 'tabpanel', activeTab: 0, id: 'main_tabpanel',
            defaults: {layout: 'fit'},
            items: [{
                title: 'Dashboard', closable: false, items: Ext.create('js.dash')
            }]
        }, {
            region: 'south', xtype: 'statusbar', statusAlign: 'right', border: true,
            items: [
                Ext.create('Ext.toolbar.TextItem', {id: 'link_total', text: '设备连接总数：0'}),
                {
                    text: 'Button One',
                    handler: function () {
                        socket.emit('testClick', 123);
                    }
                }
            ],
            listeners: {
                render: function () {
                    socket.emit('getTmnlList');
                }
            }
        }]
    });
});