Ext.require([
    'Ext.ux.statusbar.StatusBar',
    'Ext.ux.statusbar.ValidationStatus'
]);

Ext.onReady(function () {

    var socket = io();
    socket.on('tmnlLogin', function (n) {
        Ext.getCmp('link_total').update('设备连接总数：' + n || 0);
    }).on('testClick', function () {
        alert('Fuck');
    });

    Ext.BLANK_IMAGE_URL = 'sdk/ext-5.0.1/build/blank.gif';

    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'west', collapsible: false, border: true,
            width: 300, layout: 'fit', items: Ext.create('js.maintree')
        }, {
            region: 'center', xtype: 'tabpanel', activeTab: 0, id: 'main_tabpanel',
            items: [{
                title: 'Dashboard', closable: false, items: Ext.create('js.dash')
            }]
        }, {
            region: 'south', xtype: 'statusbar', statusAlign: 'right', border: true,
            items: [
                Ext.create('Ext.toolbar.TextItem', {id: 'link_total', text: '设备连接总数：0'}),
                {
                    text: 'Fuck',
                    handler: function () {
                        socket.emit('testClick', 123);
                    }
                }
            ],
            listeners: {
                render: function () {

                }
            }
        }]
    });
});