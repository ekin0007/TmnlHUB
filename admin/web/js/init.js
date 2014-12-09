Ext.onReady(function () {
    Ext.BLANK_IMAGE_URL = 'sdk/ext-5.0.1/welcome/css/blank.gif';
    Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'west',
            collapsible: false,
            title: 'Navigation', border: true,
            width: 300
            // could use a TreePanel or AccordionLayout for navigational items
        }, {
            region: 'center',
            xtype: 'tabpanel', // TabPanel itself has no title
            activeTab: 0,      // First tab active by default
            items: [{
                title: 'Dashboard', closable: false,
                html: 'The first tab\'s content. Others may be added dynamically'
            }]
        }]
    });
});