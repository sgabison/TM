Ext.define('transparence.store.Consultations', {
			extend : 'Ext.data.Store',

			config : {
				model : 'transparence.model.Menu',
				autoLoad : true,
				autoSync : true,
				storeId : 'Consultations',
				proxy : {
				     type: 'localstorage',
				     id  : 'myConsultationsKey'
	        	}
			
			}
});

