Ext.define('transparence.view.med.Main', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',

    requires: [
        'transparence.view.med.Meds',
        'transparence.view.med.Show',
        'transparence.view.med.Edit',
        'transparence.view.med.Result'
    ],

    config: {
        autoDestroy: false,
        navigationBar: {
            splitNavigation:  false,
            docked: 'bottom',
            ui:  'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'editButton',
                    text: 'Edit',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },
                {
                    xtype: 'button',
                    id: 'addMedButton',
                    text: 'Ajouter',
                    align: 'right',
                    hidden: false,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'Save',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        },

        items: [
            {  	xtype: 'meds' }
        ]
    }
});
