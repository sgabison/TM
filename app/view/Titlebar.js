Ext
		.define(
				'transparence.view.Titlebar',
				{
					extend : 'Ext.TitleBar',
					requires : [ 'Ext.Img' , 'Ext.Button'],
					alias : 'widget.apptitlebar',
					xtype : 'apptitlebar',
					config : {
						// Dock it to the top
						docked : 'top',
						title : 'Transparence médicale',
						itemId : 'appTitlebar',
						id : 'appTitlebar',
						// Center all items horizontally and vertically
						layout : {
							pack : 'center',
							align : 'center'
						},

						// Make the toolbar scrollable
						scrollable : {
							direction : 'horizontal',
							indicators : false
						},

						// Add some default configurations to all items added to
						// this toolbar
						defaults : {
							ui : 'dark'
						},

						// Add a bunch of buttons into the toolbar
						items : [
								{
									xtype : 'image',
									src : 'http://transparence-medicale.fr/static/img/logo/transparencemedicalesurfond-200.png',
									cls : 'logo',
									align : 'left',
									zIndex : 10,
									listeners : {
										tap : function() {
											url = 'http://transparence-medicale.fr';
											Ext.device.Browser.open({
												url : url,
												showToolbar : false,
												options : "location=no"
											});
										}
									}

								}, {
									align : 'right',
									xtype:'button',
									name : 'rightmenu_btn',
									id: 'rightmenu_btn',
									itemId: 'rightmenu_btn',
									iconCls : 'list',
									zIndex : 10
								} ]
					}
				});