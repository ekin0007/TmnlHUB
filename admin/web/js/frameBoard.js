Ext.define('js.frameBoard', {
    extend: 'Ext.panel.Panel',
    autoScroll: true,//默认开启自动滚屏
    scrollable: true,
    padding: 3,
    flex: 1,
    border: true,
    buff: 1000,//缓冲区，子节点长度
    nodeTag: 'p',//子节点查询关键字
    onlineState: false,
    closable: true,
    bbar: [
        {
            xtype: 'checkbox',
            checked: true,
            boxLabel: '自动滚动',
            handler: function (checkbox, checked) {
                this.up('panel').setAutoScroll(checked);
            }
        },
        {
            text: '清空',
            handler: function () {
                this.up('panel').clear();
            }
        }
    ],
    //返回内容框
    getDiv: function () {
        return this.this.body.query('.x-autocontainer-innerCt', false)[0];
    },
    //配置自定滚屏
    setAutoScroll: function (b) {
        this.autoScroll = b || false;
    },
    //清屏
    clear: function () {
        this.update();
    },
    //返回子节点长度
    getChildLength: function () {
        return this.div.query(this.nodeTag).length;
    },
    //添加子节点
    addFrame: function (json) {
        this.div.createChild('<p>' + json + '</p>');
        this.fireEvent('addframe', this.getChildLength());
    },
    offline: function () {
        this.onlineState = false;
        this.setTitle(this.rawTitle + ' - ' + '<span style="color:red;">离线</span>');
    },
    listeners: [
        {
            beforeclose: function () {
                var me = this;
                Ext.Msg.confirm('关闭窗口', '是否要关闭当前报文窗口？',
                    function (isClose) {
                        if (isClose === 'yes') {
                            me.clearListeners();
                            me.close();
                        }
                    }
                );
                return false;
            },
            addframe: function (length) {
                if (this.onlineState == false) this.fireEvent('online');
                if (length > this.buff) {
                    while (this.getChildLength() > this.buff) {
                        this.div.getFirstChild().destroy();
                    }
                }
                if (this.autoScroll) this.setScrollY(-1, false);
            },
            online: function () {
                this.onlineState = true;
                this.setTitle(this.rawTitle + ' - ' + '<span style="color:green;">在线</span>');
            },
            render: function () {
                this.div = this.body.query('.x-autocontainer-innerCt', false)[0];
            },
            afterrender: function () {
                this.rawTitle = this.id;
                this.fireEvent('online');
            }
        }
    ]
});