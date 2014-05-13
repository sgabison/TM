Ext
		.define(
				'transparence.view.Maininitial',
				{
					extend : 'Ext.tab.Panel',
					xtype : 'maininitial',
					requires : [],
					config : {
						tabBar : {
							// Dock it to the bottom
							docked : 'bottom',

							// Change the layout so each of the tabs are
							// centered vertically and horizontally
							layout : {
								pack : 'center',
								align : 'center'
							},

							// Make the tabbar scrollable horizontally, and
							// disabled the indicators
							scrollable : {
								direction : 'horizontal',
								indicators : false
							}
						},

						// here we specify the ui of the tabbar to light
						ui : 'light',
						width : '100%',
						defaults : {
							layout : 'card'
						// styleHtmlContent : true
						},
						layout : {
							animation : true
						},
						items : [
								{
									id : 'welcome-tab',
									title : 'Transparence',
									iconCls : 'home',
									layout : 'card',
									items : [
											
											{
												xtype : 'formhtml',
												url : 'http://transparence-medicale.fr/data/mobile/get-html/',
												docId : '626'
											} ]

								},
								{
									id : 'theUserPanel',
									title : 'Votre Profil',
									iconCls : 'user',
									layout : 'card',
									scrollable : true,
									items : [
											{
												xtype : 'formdyn'
											// url :
											// 'http://transparence-medicale.fr/data/medecine/get-html'
											} ]
								},
								{
									iconCls : 'locate',
									title : 'Scan it!',
									layout : 'card',
									items : [  {
										xtype : 'scanitmenu'
									} ]
								},
								{
									id : 'theScanPanel',
									iconCls : 'search',
									title : 'Search',
									hidden : false,
									layout : 'card',
									items : [ {
										xtype : 'scansearch'
									} ]
								},
								{
									id : 'theTreePanel',
									iconCls : 'favorites',
									title : 'Favorites',
									hidden : true,
									layout : 'card',
									items : [ {
										xtype : 'treeview'
									} ]
								},
								{
									id : 'theMedecinesPanel',
									title : 'Medecines',
									iconCls : 'bookmarks',
									items : [ {
										xtype : 'mainview'
									} ]
								},
								{
									id : 'thePersonalPanel',
									iconCls : 'team',
									title : 'Ma Pharmacie',
									hidden : false,
									layout : 'card',
									items : [ {
										xtype : 'gridview'
									} ]
								},
								{
									id : 'theQuestionPanel',
									iconCls : 'team',
									title : 'Votre avis compte',
									hidden : true,
									layout : 'card',
									items : [ ]
								},
								{
									title : 'Voir Video',
									iconCls : 'action',
									hidden : false,
									items : [
											{
												xtype : 'video',
												url : 'http://transparence-medicale.fr/website/var/assets/video/bigbuck.m4v',
												posterUrl : 'http://src.sencha.io/200/http://transparence-medicale.fr/static/img/logo/logosurfond-200.png'
											} ]
								}

						]
					}
				});
