Ext.define(
				'transparence.view.search.Scan',
				{
					extend : 'Ext.Container',
					xtype : 'searchscan',

					requires : ['Ext.device.Notification','Ext.layout.VBox'],

					config : {
						layout : {
							type : 'vbox',
							pack : 'center',
							align : 'stretch'
						},
						defaults : {
							xtype : 'container',
							flex : 1,
							layout : {
								type : 'hbox',
								align : 'middle'
							},
							defaults : {
								xtype : 'button',
								flex : 1,
								minWidth:'50%',
								margin:'auto'
							}
						},
						items : []
					}
				});
