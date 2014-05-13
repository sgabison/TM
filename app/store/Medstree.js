Ext.define('transparence.store.Medstree', {
			extend : 'Ext.data.TreeStore',

			requires : ['Ext.data.reader.Json',  'Ext.data.proxy.JsonP'],

			config : {
				model : 'transparence.model.MedTree',
// 				storeId : 'Medstree',
				defaultRootProperty : 'items',
				autoLoad:false,
 				data: '',
				proxy : {
					type : 'jsonp',
					url : 'http://transparence-medicale.fr/data/medecine/get-tree-by-cis?store=Medstree',
					reader : {
						type : 'json'
					}
				}
			}

		});

