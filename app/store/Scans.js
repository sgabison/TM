Ext.define('transparence.store.Scans', {
			extend : 'Ext.data.Store',
			requires : ['transparence.model.Cis', 'Ext.data.proxy.Rest', 'Ext.data.reader.Json',
					'Ext.data.writer.Json',    'Ext.data.proxy.JsonP'
			],
			config : {
				model : 'transparence.model.Cis',
				autoLoad : true,
				sorters : 'name',
				grouper : 'name',
				proxy : {
					type : 'jsonp',
					url : 'http://transparence-medicale.fr/data/bdp/recherche?store=Scans',
					reader : {
						type : 'json',
						successProperty: 'success',
						rootProperty: 'data',
						messageProperty: 'message'
					}		
				}
			}
		});
