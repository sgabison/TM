Ext.define('transparence.view.ordonnance.Show', {
    extend: 'Ext.Container',
    xtype: 'ordonnanceshow',

    requires: [   ],

    config: {
        title: 'Information ordonnance',
        baseCls: 'x-show-ordonnance',
        layout: 'vbox',
        styleHtmlContent :true,
        scrollable:true,
        items: [
            {
                id: 'content',
                tpl: [
                    '<div class="top htmlPage">',

                        '<h2 class="name">{medecin}</h2>',
                        '<p class="name">{symptome}</p>',
                    '</div>'
                ].join('')

            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
         }
    }
});
