Ext.define('transparence.view.med.Show', {
    extend: 'Ext.Container',
    xtype: 'med-show',

    requires: [
        'Ext.Map'
    ],

    config: {
        title: 'Information',
        baseCls: 'x-show-med',
        layout: 'vbox',
        styleHtmlContent :true,
        scrollable:true,
        items: [
            {
                id: 'content',
                tpl: [
                    '<div class="top htmlPage">',
                        '<img class="center-menu-image right" src="{image}" title="{name}" alt="{libelle}">',
                        '<h2 class="name">{libelle}</h2>',
                        '{descriptionTherapeutique}',
						'{indicationTherapeutique}',
						'{contreIndicationTherapeutique}',
						'{posologieTherapeutique}',
						'{effetIndesirableTherapeutique}',
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
