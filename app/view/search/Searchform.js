Ext
		.define(
				'transparence.view.search.Searchform',
				{
					extend : 'Ext.Panel',
					alias : 'widget.searchform',
					requires : [ 'Ext.field.Search',
							'transparence.view.search.SearchFormField' ],
					config : {
						ui : 'dark',
						layout : {
							type : 'vbox',
							animation : {
								type : 'slide',
								direction : 'down',
								duration : 250
							}
						},
						defaults : {
							flex : 1,
							minHeight : '100px'
						},
						items : [ {
							xtype : 'formpanel',
							itemId : 'searchPanelChild',
							items : [ {
								docked : 'top',
								xtype : 'fieldset',
								
								items : [
										{
											xtype : 'searchformfield',
											name : 'searchBox',
											label : 'Nom',
											placeHolder : 'Entrer le nom du médicament recherché',
											autoCapitalize : false
										},
										{
											xtype : 'searchformfield',
											name : 'codebarreBox',
											label : 'code barre',
											placeHolder : 'Entrer le code barre du médicament recherché',
											autoCapitalize : false,
											vtype: 'num', // applies custom time validation rules to this field
		                                  
											regex:  new RegExp('^\\d{1,}\.[5]*$'),
											regexText: 'Invalid number in field'
										} ]
							} ]
						} ],

						record : null

					},

					updateRecord : function(newRecord) {
						if (newRecord) {
							this.down(searchfield).setValue('');
						}
					}
				});
