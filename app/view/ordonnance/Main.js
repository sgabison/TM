Ext.define('transparence.view.ordonnance.Main', {
    extend: 'Ext.navigation.View',
    alias: 'widget.ordonnancesview',

    requires: [
        'transparence.view.ordonnance.Ordonnances',
        'transparence.view.ordonnance.Meds',
        'transparence.view.ordonnance.Show',
        'transparence.view.ordonnance.Edit'    ],

    config: {
        autoDestroy: false,
        navigationBar: {
            splitNavigation:  false,
            docked: 'bottom',
	        cls: 'removeBorder',
	        showAnimation: {
	            type: 'slide',
	            easing: 'ease-out',
	            direction: 'up',
	            duration: 300
	        },
	        hideAnimation: {
	            type: 'slideOut',
	            easing: 'ease-out',
	            direction: 'down',
	            duration: 400
	        },
            items: [
                {
                    xtype: 'button',
                    id: 'ordonnanceEditButton',
                    text: 'Voir le détail',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    id: 'ordonnanceDeleteButton',
                    text: 'Supprimer',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    id: 'ordonnanceAddButton',
                    text: 'Nouvelle',
                    align: 'right',
                    hidden: false
                },
                {
                    xtype: 'button',
                    id: 'ordonnanceSaveButton',
                    text: 'Save',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true
                }
            ]
        },

        items: [
            {  	xtype: 'ordonnanceslist' }
        ]
    }
});
