Ext.define('transparence.view.test.touchevent.Pad', {
    extend: 'Ext.Container',
    xtype: 'toucheventpad',
    id: 'touchpad',
    
    config: {
        margin: 10,
        
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'stretch'
        },
        
        items: [
            {
               xtype:'scan-searchlist'
            }
        ]
    }
});