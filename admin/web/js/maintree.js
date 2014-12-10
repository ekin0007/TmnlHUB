Ext.define('js.maintree', {
    constructor: function (opts) {
        return {
            xtype: 'treepanel',
            store: {
                root: {
                    text: 'Dashboard',
                    expanded: true,
                    children: [{
                        text: 'Child 1',
                        leaf: true
                    }, {
                        text: 'Child 2',
                        leaf: true
                    }, {
                        text: 'Child 3',
                        leaf: true
                    }, {
                        text: 'Child 4',
                        leaf: true
                    }]
                }
            },
            listeners: {
                itemclick: this.openTab
            }
        }
    },
    openTab: function (view, record, item, index, e, eOpts) {
        var tabpanel = Ext.getCmp('main_tabpanel'), tabId = 'tabpanel' + record.get('id'), tabTitle = record.get('text');
        if (record.isRoot()) {
            tabpanel.setActiveTab(0);
        } else if (Ext.getCmp(tabId)) {
            Ext.getCmp(tabId).show();
        } else {
            tabpanel.add({
                id: tabId, title: tabTitle, closable: true
            }).show();
        }
    }
});