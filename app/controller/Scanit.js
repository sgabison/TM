Ext
		.define(
				'transparence.controller.Scanit',
				{
					extend : 'Ext.app.Controller',
					requires : [
					// Scanner
					'Ext.ux.mgd.device.Scanner' ,
					'Ext.device.Browser'],
					config : {
						refs : {
							main : 'scanitmenu',
							scanButton : '#scanitButton',
							searchButton : '#searchitButton',
							displayView : 'treeview'
						},

						control : {
							scanButton : {
								tap : 'onScan'
							}
						}
					},

					onScan : function() {
						var me = this;
						console.log("ontap");
						Ext.device.Scanner.scan({
							success : function(result) {
								if (result.format === 'QR_CODE') {
									var url = result.text;
									console.log('Result', result);
									
									var containsHttp = new RegExp('http\\b');
									console.log('test:', containsHttp.test(url));
									// if href value begins with 'http'
									var prefix= (containsHttp.test(url)) ? '' : 'http://' ;
									url=prefix+url;	
								//	var browser =	new Ext.device.Browser(); 						
									Ext.device.Browser.open ( {url: url, showToolbar: false, options: "location=no" }); 
								} else {
									me.getRecord(result);
								}
							},
							failure : function(error) {
								console.log(error);
							}
						});
					},
					getRecord : function(codeBarre) {
						var me = this;
						this
								.getStore('Meds')
								.setProxy(
										{
											type : 'jsonp',
											url : 'http://transparence-medicale.fr/data/medecine/get-data-by-code-barre/',
											callbackKey : 'callback',
											reader : {
												type : 'json',
												successProperty : 'success',
												rootProperty : 'data',
												messageProperty : 'message'
											}
										});
						this.getStore('Meds').load({
							params : {
								key : codeBarre.text,
								data : Ext.JSON.encode(codeBarre),
								METHOD : 'GET',
								format : 'json'
							},
							callback : function(records, operation, success) {
								console.log("records", records);
								var record = records[0].data;
								console.log("record", record);
								me.showResult(record);
							},
							scope : me
						});
					},
					showResult : function(record) {
						console.log('showResult ', record);
						var DisplayView = this.getDisplayView();
						var me = this;

						Ext.Viewport
								.setMasked({
									xtype : 'loadmask',
									message : 'Patientez...\nChargement des informations\n '
											+ record.libelle,
									transparent : false,
									style : 'background-color : white; with:100%;',
									showAnimation : 'fadeIn',
									indicator : false
								});

						this
								.getStore('Medstree')
								.load(
										{
											params : {
												cis : record.cis,
												METHOD : 'GET',
												format : 'json'
											},
											callback : function(records,
													operation, success) {

												Ext.Viewport.setMasked(false);

												console.log('store loaded',
														success);
												this.MainPanel = this.getMain();
												this.ScanitPanel = this.MainPanel
														.up('container'); // TheScanPanel

												this.MainPanelInitial = this.ScanitPanel
														.up('tabpanel'); // TheMainInitial

												this.TreePanel = this.MainPanelInitial
														.down('#theTreePanel');// TheTreePanel
												this.MainPanelInitial
														.setActiveItem(this.TreePanel);
												this.TreePanel.removeAll(true,
														true);
												this.TreeView = Ext
														.create('transparence.view.tree.Main');

												this.TreePanel
														.add(this.TreeView);

												this.NestedList = this.TreePanel
														.down('nestedlist')
												this.NestedList.getToolbar()
														.setTitle(record.name);

												this.TreePanel.show();
												this.TreePanel.setHidden(false);
											},
											scope : me
										});
					},
					getStore : function(name) {
						this.store = Ext.data.StoreManager.lookup(name);
						return this.store;
					}
				});
