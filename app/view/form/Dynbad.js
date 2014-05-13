Ext.define('transparence.view.form.Dynbad', {

			extend : 'Ext.form.Panel',
			alias : 'widget.formdynbad',

			// We are using Ext.Ajax, so we should require it
			requires : ['Ext.Ajax'],
			fullscreen: true,
			 items: [
		        {
		            xtype: 'fieldset',
		            title: 'About You',
		            instructions: 'Tell us all about yourself',
		            items: [
		                {
		                    xtype: 'textfield',
		                    name : 'firstName',
		                    label: 'First Name'
		                },
		                {
		                    xtype: 'textfield',
		                    name : 'lastName',
		                    label: 'Last Name'
		                }
		            ]
		        }
		    ] ,

			 constructor: function() {
				var me = this;
				Ext.Ajax.request({
							// we should use the getter for our new `url` config
							url : 'http://transparence-medicale.com',
							method : "GET",
							reader: {
					            type: 'json'
					        },
					        async  : false,
							success : function(response)  {
								
							var json = Ext.decode(response.responseText, true);
								console.log(json);
//								 Ext.Object.merge({}, me.config.items, json);
								this.setItems(json[0]);
 								 console.log(json[0]);
							},
							failure : function(response, request) {
								this.setHtml("failed -- response: "
										+ response.responseText);
							},
							scope:this
						});
				me.callParent(arguments);
			}

		});
