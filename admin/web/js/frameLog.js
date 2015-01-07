Ext.define('js.frameLog', {

    ImageModel: Ext.define('ImageModel', {
        extend: 'Ext.data.Model',
        fields: [{
            name: 'name'
        }]
    }),

    store: Ext.create('Ext.data.Store', {
        storeId: 'framelog', model: 'ImageModel', pageSize: 0,
        proxy: {
            type: 'ajax', url: 'query_logs',
            actionMethods: {read: 'POST'},
            reader: {
                type: 'json',
                rootProperty: 'images'
            }
        },
        listeners: {
            load: function (store, records, successful) {
                var arr = Ext.query('.thumb', false);
                if (records[0].get('mark') == 'f') {
                    Ext.each(arr, function (item) {
                        item.addCls('log');
                    })
                } else {
                    Ext.each(arr, function (item) {
                        item.removeCls('log');
                    })
                }
            }
        }
    }),

    tpl: [
        '<tpl for=".">',
        '<div class="thumb-wrap" id="{name:stripTags}">',
        '<div class="thumb" title="{name:htmlEncode}"></div>',
        '<span class="x-editable">{name}</span>',
        '</div>',
        '</tpl>',
        '<div class="x-clear"></div>'
    ],

    logwin: Ext.create('Ext.window.Window', {
        id: 'framewin',
        scrollable: true,
        closeAction: 'hide',
        maximized: true,
        buttons: [{
            text: '下载',
            handler: function () {
                var form = Ext.getCmp('framelogDownload').getForm(),
                    params = this.up('window').downloadParams;
                //form.submit({
                //    params: params,
                //    target: '_blank'
                //});
                window.open('query_logs?' + Ext.Object.toQueryString(params));
            }
        }, {
            text: '关闭',
            handler: function () {
                this.up('window').close();
            }
        }],
        items: {
            id: 'framelogDownload', xtype: 'form', url: 'query_logs'
        }
    }),

    constructor: function () {

        var dataview = Ext.create('Ext.view.View', {
            store: this.store, tpl: this.tpl, multiSelect: false, trackOver: true, focusable: false,
            overItemCls: 'x-item-over', itemSelector: 'div.thumb-wrap', emptyText: '无数据',
            prepareData: function (data, recordIndex, record) {
                return data;
            },
            listeners: {
                itemdblclick: this.itemdblclick
            }
        });

        this.store.load({params: {action: 'all'}});

        return {
            id: 'framelogview', scrollable: 'y', layout: 'fit',
            tbar: [{
                text: '<-后退',
                handler: function () {
                    var store = Ext.getStore('framelog');
                    if (store.mark == 'y') {
                        store.mark = 'all';
                    } else if (store.mark == 'm') {
                        store.mark = 'y';
                    } else if (store.mark == 'd') {
                        store.mark = 'm';
                    } else if (store.mark == 'f') {
                        store.mark = 'd';
                    }
                    store.load({params: {action: store.mark, value: store.value}});
                }
            }, {
                text: '刷新',
                handler: function () {
                    Ext.getStore('framelog').reload();
                }
            }, '-', '<span style="color: dodgerblue">说明：历史日志不记录心跳帧。</span>'],
            items: dataview
        };
    },

    itemdblclick: function (view, record, item, index, e) {
        var win = Ext.getCmp('framewin'), store = Ext.getStore('framelog'),
            mark = record.get('mark'), value = record.get('value') || store.value;
        if (mark == 'f') {
            win.setTitle('历史日志:: ' + record.get('name'));
            win.show(item, function () {
                Ext.Ajax.request({
                    url: 'query_logs', params: {action: 'f', value: value, A1: record.get('A1'), A2: record.get('A2')},
                    success: function (response, opts) {
                        win.unmask();
                        win.downloadParams = {
                            action: 'download',
                            value: value,
                            A1: record.get('A1'),
                            A2: record.get('A2')
                        };
                        var obj = Ext.decode(response.responseText), html = '';
                        Ext.each(obj, function (item) {
                            html += '<div class="frameLog-frame">' +
                                //'<div class="frameLog-frame-sid">' + record.get('name') + '</div>' +
                            '<div>' +
                            '<span class="frameLog-frame-date">' + item.req_date + '</span>' +
                            '<span class="frameLog-frame-buff">REQ: ' + item.req_buff + '</span>' +
                            '</div>' +
                            '<div>' +
                            '<span class="frameLog-frame-date">' + item.res_date + '</span>' +
                            '<span class="frameLog-frame-buff">RES: ' + item.res_buff + '</span></div>' +
                            '</div>';
                        });
                        win.update(html);
                    },
                    failure: function (response, opts) {
                        win.unmask();
                        win.update('<h1>错误。</h1>');
                    }
                });
            }).mask('正在加载数据...');
        } else {
            store.mark = record.get('mark');
            store.value = value;
            store.load({params: {action: mark, value: value}});
        }
    }
});