Ext.define('js.frameLog', {
    constructor: function () {
        ImageModel = Ext.define('ImageModel', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'name'},
                {name: 'url'},
                {name: 'size', type: 'float'},
                {name: 'lastmod', type: 'date', dateFormat: 'timestamp'}
            ]
        });

        var store = Ext.create('Ext.data.Store', {
            model: 'ImageModel',
            proxy: {
                type: 'ajax',
                url: 'test',
                reader: {
                    type: 'json',
                    rootProperty: 'images'
                }
            }
        });
        store.load();

        return {
            id: 'images-view',
            frame: true,scrollable:true,
            collapsible: true,
            width: 535,
            title: 'Simple DataView (0 items selected)',
            items: Ext.create('Ext.view.View', {
                store: store,
                tpl: [
                    '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                    '<div class="thumb"><img src="{url}" title="{name:htmlEncode}"></div>',
                    '<span class="x-editable">{shortName:htmlEncode}</span>',
                    '</div>',
                    '</tpl>',
                    '<div class="x-clear"></div>'
                ],
                multiSelect: true,
                height: 310,
                trackOver: true,
                overItemCls: 'x-item-over',
                itemSelector: 'div.thumb-wrap',
                emptyText: 'No images to display',
                    plugins: [
                        Ext.create('Ext.ux.DataView.DragSelector', {}),
                        Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'name'})
                    ],
                prepareData: function (data) {
                    Ext.apply(data, {
                        shortName: Ext.util.Format.ellipsis(data.name, 15),
                        sizeString: Ext.util.Format.fileSize(data.size),
                        dateString: Ext.util.Format.date(data.lastmod, "m/d/Y g:i a")
                    });
                    return data;
                },
                listeners: {
                    selectionchange: function (dv, nodes) {
                        var l = nodes.length,
                            s = l !== 1 ? 's' : '';
                        this.up('panel').setTitle('Simple DataView (' + l + ' item' + s + ' selected)');
                    }
                }
            })
        };
    }
});