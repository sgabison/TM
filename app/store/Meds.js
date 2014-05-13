Ext.define('transparence.store.Meds', {
			extend : 'Ext.data.Store',
			requires : ['Ext.data.proxy.Rest', 'Ext.data.reader.Json',
					'Ext.data.writer.Json',    'Ext.data.proxy.JsonP'
			],
			config : {
				model : 'transparence.model.Med',
				autoLoad : true,
				sorters : 'name',
				storeId : 'Meds',
				grouper :  {
		            groupFn: function(record) {
	                return record.get('name');
	            },
	            sortProperty: 'name'
	        },
				proxy : {
					type : 'jsonp',
					url : 'http://transparence-medicale.fr/data/medecine/get-data?store=meds',
					reader : {
						type : 'json',
						successProperty: 'success',
						rootProperty: 'data',
						messageProperty: 'message'
					}
				}
			}
		});
