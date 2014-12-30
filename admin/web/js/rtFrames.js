Ext.define('js.rtFrames', {
    constructor: function () {
        return {
            tbar: [{
                text: '+ 添加窗口',
                handler: function () {
                    var me = this, arr = [tmnlMgr[0].sid, tmnlMgr[1].sid, tmnlMgr[2].sid, tmnlMgr[3].sid, tmnlMgr[4].sid],
                        A1 = 4103, A2 = 12345, sid = '4103@12345';

                    Ext.each(arr, function (item) {
                        if (!Ext.getCmp(item)) {
                            me.up('panel').add(Ext.create('js.frameBoard', {id: item}));
                        }
                    });
                }
            }],
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            }, id: 'haha',
            listeners: {
                beforeadd: function (panel, component, index) {
                    if (index >= 5) {
                        Ext.Msg.alert('提示', '报文查看窗口最多同时打开5个');
                        return false;
                    }
                }
            }
        }
    }
});