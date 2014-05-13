Ext
		.define(
				'transparence.view.scanit.Menu',
				{
					extend : 'Ext.Container',
					xtype : 'scanitmenu',

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
						items : [{
									items : [ {
										ui : 'round',
										text : 'Chercher un médicament',
										id : 'searchitButton',
										cls   : 'modus-button info'
									} ]
								},
								{
									items : [ {
										ui : 'round',
										text : 'Scannez le code-barre',
										id : 'scanitButton',
										cls   : 'modus-button primary'
									} ]
								},
								{
									items : [ {
										ui : 'round',
										text : 'Laisser un message',
										cls   : 'modus-button default',
										
										handler : function() {
											Ext.device.Notification
													.show({
														title : 'One Button',
														message : 'This is a simple notification with one button.'
													});
										}
									}

									]
								} ]
					}
				});
