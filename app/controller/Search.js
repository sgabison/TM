Ext
		.define(
				'transparence.controller.Search',
				{
					extend : 'Ext.app.Controller',// extend :
													// 'transparence.controller.Menu',
					requires : [ 'transparence.view.search.Searchlist',
								'Ext.ux.mgd.device.Scanner', 'Ext.device.Browser' ],
					config : {
						homeViewId : 'btn-accueil',
						searchViewId : 'btn-search',
						consultViewId : 'btn-notices',
						refs : {
							scancontrolview : 'searchscan',
							searchForm : 'searchform',

							searchBox : {
								selector : 'searchformfield[name=searchBox]',
								xtype : 'searchformfield'
							},
							codebarreBox : {
								selector : 'searchformfield[name=codebarreBox]',
								xtype : 'searchformfield'
							},
							searchList : 'searchlist',
							nav : '#menuNestedList'
						},
						store : 'Scans',
						control : {
							scanButton : {
								tap : 'onScanScan'
							},
							searchscan : {
								initialize : 'onInitScan'
							},
							searchBox : {
								// clear the input text box
								clearicontap : 'onSearchClearIconTap',
								// on every key stroke
								keyup : 'onSearchKeyUp'
							},
							codebarreBox :{
								action : 'onSelectCodeBarre'
							},
							
							searchList : {
								itemtap : 'onSelectRow'
							}
						}
					},
					onInitScan : function(me, eOpts) {
						console.log("onInitScan");
						Ext.device.Scanner.scan({
							success : function(result) {
								console.log('Result', result);
								if (result.format === 'QR_CODE') {
									var url = result.text;
									

									var containsHttp = new RegExp('http\\b');
									console
											.log('test:', containsHttp
													.test(url));
									// if href value begins with 'http'
									var prefix = (containsHttp.test(url)) ? ''
											: 'http://';
									url = prefix + url;
									// var browser = new Ext.device.Browser();
									Ext.device.Browser.open({
										url : url,
										showToolbar : false,
										options : "location=no"
									});
									var nav = this.getNav(), node = nav.getStore()
									.getNodeById(this.getHomeViewId());
									nav.fireEvent('navTap', nav, node);
								} else {
									this.getRecord(result);
								}
							},
							failure : function(error) {

								console.log("erreur de scan:",error);
								var nav = this.getNav(), node = nav.getStore()
										.getNodeById(this.getHomeViewId());
								nav.fireEvent('navTap', nav, node);

							},
							scope : transparence.app.getController('Search')
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
								if(success){
								var record = records[0];
								console.log("callback getrecord", record.data);
								this.showViewByMed(record);
								} else {
									Ext.Msg.alert("Codebarre inconnu !");
								}
								
							},
							scope : me
						});
					},

					launch : function() {
						this.onSearchClearIconTap();
						this.callParent();
					},
					onSearchKeyUp : function(field) {
						// get the store and the value of the field
						var value = field.getValue(), me = this;

						this.getStore('Scans').load({
							params : {
								'term' : value
							},
							callback : function(records, operation, success) {
								console.log('store loaded', success);
								this.initializeSearchView(value);
							},
							scope : me
						});
					},

					/**
					 * Called when the user taps on the clear icon in the search
					 * field. It simply removes the filter form the store
					 */
					onSearchClearIconTap : function() {
						this.getStore('Scans').clearFilter();
						this.getStore('Scans').removeAll();
					},
					initializeSearchView : function(value) {
						console.log('initializeSearchView');
						this.getStore('Scans').clearFilter(!!value);

						if (value) {
							var searches = value.split(','), regexps = [], i, regex;
							for (i = 0; i < searches.length; i++) {
								if (!searches[i])
									continue;
								regex = searches[i].trim();
								regex = regex.replace(
										/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
										"\\$&");
								regexps.push(new RegExp(regex.trim(), 'i'));
							}
							this.store
									.filter(function(record) {
										var matched = [];
										for (i = 0; i < regexps.length; i++) {
											var search = regexps[i], didMatch = search
													.test(record.get('libelle')
															+ ' '
															+ record
																	.get('name'));
											matched.push(didMatch);
										}
										return (regexps.length && matched
												.indexOf(true) !== -1);
									});
						}
						this.getSearchList().setHidden(false);
						this.getSearchList().getStore().sync();
						console.log('initialize SearchList');

					},
					getStore : function(name) {
						this.store = Ext.data.StoreManager.lookup(name);
						return this.store;
					},
					onSelectCodeBarre : function ( me, e, eOpts ) {
						var value = me.getValue(),
						codebarre ={ text :value , format :"UNKNOWN", cancelled :false, success :"200"};
						if (/[0-9]{7,16}/.test(value) ) {
							this.getRecord(codebarre);
						
						} else {
							Ext.Msg.alert("Entrer 7 à 16 chiffres");
							me.setFocus(true);
							
						}
					},
					onSelectRow : function(element, index, target, record, e, eOpts) {
						var me = this;
						this.getSearchBox().setValue(record.get('name'));
						this.showViewByMed(record);
					},
					showViewByMed : function(record) {
						var med = record.data;

						console.log("showViewByMed search", med.name);

						var recherche = Ext.create('transparence.model.Menu', {
							text : med.name,
							source : 'tree',
							view : 'Main',
							id : 'btn-' + med.cis,
							leaf : true,
							icon : 'resources/images/logo/doc.png',
							cis : med.cis,
							params : {
								cis : med.cis
							}
						});

						var nav = this.getNav(), 
						parentNode = nav.getStore().getNodeById(this.getConsultViewId());
						parentNode.insertChild(0, recherche);

						nav.fireEvent('navTap', nav, recherche);
						this.saveConsultations(recherche);
					},
					saveConsultations : function(record) {
						consultations = Ext.getStore('Consultations');
						// reset consultations.removeAll();
						consultations.load();
						consultations.add(record);
						consultations.sync();
						console.log('consultations', consultations);

					}
					

				});
