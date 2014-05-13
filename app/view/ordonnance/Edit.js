Ext.define('transparence.view.ordonnance.Edit', {
    extend: 'Ext.Container',
    xtype: 'ordonnanceedit',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Hidden',
        'Ext.data.JsonP'
    ],

    config: {
        title: 'Edit',
        layout: 'fit',

        items: [
            {
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'fieldset',
                        defaults: {
                            labelWidth: '35%'
                        },
                        title: 'Information',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'libelle',
                                name: 'libelle'
                            },
                            {
                                xtype: 'textfield',
                                label: 'name',
                                name: 'name'
                            },
                            {
                                xtype: 'textfield',
                                label: 'indication',
                                name: 'indication'
                            },
                            {
                                xtype: 'hiddenfield',
                                label: 'o_id',
                                name: 'o_id'  
                            }                       
                        ]
                    }
                ]
            }
        ],

        listeners: {
            delegate: 'textfield',
            keyup: 'onKeyUp'
        },

        record: null
    },

    updateRecord: function(newRecord) {
        this.down('formpanel').setRecord(newRecord);
    },

    saveRecord: function() {
        var formPanel = this.down('formpanel'),
       		record = formPanel.getRecord();
        formPanel.updateRecord(record);
        return record;
    },

    onKeyUp: function() {
        this.fireEvent('change', this);
    }
});
