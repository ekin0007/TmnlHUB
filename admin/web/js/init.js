Ext.onReady(function () {
    Ext.BLANK_IMAGE_URL = 'sdk/ext-5.0.1/welcome/css/blank.gif';
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
        }]
    });
});