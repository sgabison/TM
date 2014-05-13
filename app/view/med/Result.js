Ext.define('transparence.view.med.Result', {
    extend: 'Ext.Container',
    xtype: 'med-result',

    config: {
        title: 'Information',
        baseCls: 'x-result-med',
        layout: 'vbox',

        items: [
            {
                id: 'content-result',
                tpl: [
                    '<div class="top">',
                        '<div class="headshot" style="background-image:url(resources/images/headshots/3.jpeg);"></div>',
                        '<div class="name">{libelle} <span>{name}</span></div>',
                    '</div>'
                ].join('')
            },
            {
                id: 'detail-result',
                tpl: [
                    '<div class="top">',
                        '<div class="headshot" style="background-image:url(resources/images/headshots/5.jpeg);"></div>',
                    '</div>'
                ].join('')

            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
            this.down('#detail').setData(newRecord.data);
        }
    }
});
