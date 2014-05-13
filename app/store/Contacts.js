Ext.define('transparence.store.Contacts', {
			extend : 'Ext.data.Store',
			requires : ['Ext.data.proxy.Rest', 'Ext.data.reader.Json',
					'Ext.data.writer.Json',    'Ext.data.proxy.JsonP'
			],
			config : {
		
        //give the store some fields
        fields: [
            {name: 'id'},
            {name: 'guid', type: 'string'},
            {name: 'picture', type: 'string'},
            {name: 'name', type: 'string'},
            {name: 'gender', type: 'string'},
            {name: 'age', type: 'integer'},
            {name: 'company', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'address', type: 'string'},
            {name: 'about', type: 'string'},
            {name: 'registered', type: 'date'}
        ],

        //autoload the data from the server
        autoLoad: true,

        //setup the proxy for the store to use an ajax proxy and give it a url to load
        //the local contacts.json file
        proxy: {
            type: 'ajax',
            url: 'packages/sencha-touch-grid/examples/grid/contacts.json',
            reader: {
                rootProperty: 'results'
            }
        }
 
		}
});
