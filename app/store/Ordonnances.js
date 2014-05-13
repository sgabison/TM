Ext.define('transparence.store.Ordonnances', {
			extend : 'Ext.data.Store',
			requires : [ 'Ext.data.proxy.JsonP'	],
			config : {
				model : 'transparence.model.Ordonnance',
				autoLoad : true,
				sorters : 'medecin',
				storeId : 'Ordonnances',
				grouper :  {
		            groupFn: function(record) {
	                return record.get('medecin');
	            },
	            sortProperty: 'medecin'
	        },
				proxy : {
					type : 'jsonp',
					url : 'http://transparence-medicale.fr/data/ordonnance/get-data?store=ordonnances',
					reader : {
						type : 'json',
						successProperty: 'success',
						rootProperty: 'data',
						messageProperty: 'message'
					}
				}
			}
		});
