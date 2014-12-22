Ext.define('js.maintree', {
    constructor: function (opts) {
        return {
            xtype: 'treepanel',
            store: {
                root: {
                    text: 'Dashboard',
                    expanded: true,
                    children: [{
                        text: '历史日志',
                        leaf: true
                    }, {
                        text: '实时监控',
                        leaf: true
                    }, {
                        text: '报文解析',
                        leaf: true
                    }, {
                        text: '操作记录',
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