Ext.define('transparence.view.search.Pad', {
    extend: 'Ext.Container',
    xtype: 'searchpad',
    id: 'searchpad',
    
    config: {
        margin: 10,
        
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'stretch'
        },
        
        items: [
            {
               xtype:'searchlist'
            }
        ]
    }
});