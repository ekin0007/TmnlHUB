Ext.define('js.rtFrames', {
    constructor: function () {
        return {
            tbar: [{
                text: '+ 添加窗口',
                handler: this.addnew
            }],
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            id: 'reFrame',
            listeners: {
                beforeadd: function (panel, component, index) {
                    if (index >= 5) {
                        Ext.Msg.alert('提示', '报文查看窗口最多同时打开5个');
                        return false;
                    }
                },
                remove: function (panel, framePanel) {
                    framePanel.getHeader().hide();
                }
            }
        }
    },
    addnew: function () {
        Ext.create('Ext.window.Window', {
            title: 'Hello',
            height: 500,
            width: 800,
            //layout: 'fit',
            scrollable: true,
            buttons: [{
                text: '确定',
                handler: function () {
                    var checkboxgroup = this.up('panel').down('checkboxgroup'),
                        reFrame = Ext.getCmp('reFrame');
                    Ext.each(Ext.Object.getValues(checkboxgroup.getValue()), function (item, index) {
                        if (!Ext.getCmp(item)) {
                            reFrame.add(Ext.create('js.frameBoard', {id: item, index: index}));
                        }
                    });
                    this.up('window').close();
                }
            }, {
                text: '取消',
                handler: function () {
                    this.up('window').close();
                }
            }],
            items: {
                xtype: 'checkboxgroup',
                // Arrange checkboxes into two columns, distributed vertically
                //columns: 2,
                //vertical: true,
                layout: 'column',
                listeners: {
                    render: function () {
                        var me = this;
                        Ext.each(Ext.global.tmnlMgr, function (item) {
                            me.add({boxLabel: item.sid, name: item.sid, inputValue: item.sid, width: 100});
                        });
                    }
                }
            }
        }).show();
    }
});

/*
* */