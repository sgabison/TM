Ext.define('transparence.view.scanit.Main', {
    extend: 'Ext.navigation.View',
    alias: 'widget.scanitview',

    config: {
        autoDestroy: false,
        navigationBar: {
            splitNavigation: false,
            title: 'Lecture des Codes Barres et affichage des infos',
            ui: (Ext.theme.name == "Blackberry") ? 'light' : 'sencha',
            items: [
               {
                    xtype: 'button',
                    id: 'clearitButton',
                    text: 'Clear',
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
                },
                {
                    xtype: 'button',
                    id: 'searchitButton',
                    text: 'Rechercher',
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
              	 {
                    xtype: 'button',
                    id: 'scanitButton',
  			//		layout: 'fit',
                    text: 'Scan it',
                    align: 'center',
                    hidden: false,
                    ui: 'confirm'
                }
               ]
        
    }
});
