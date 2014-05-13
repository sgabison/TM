Ext.define(
				'transparence.view.tree.List',
				{
					extend : 'Ext.NestedList',
					alias : 'widget.treelist',
					config : {
						fullscreen : true,
						layout : "card",
						minWidth : '12em',
						baseCls : 'menunestedlist',
						displayField : 'text',

						title : 'Médicaments',
						detailCard : true,
						detailContainer : '',

// load dynamically		store : 'Medstree',
						listeners : {
							leafitemtap : function(me, list, index, item, e) {

							},
							back : function(me, node, lastActiveList,
									detailCardActive, eOpts) {
//								console.log('onback', detailCardActive);
//								if (!detailCardActive) {
//									var detailCard = (Ext.os.deviceType === 'Phone') ? me
//											.getDetailCard()
//											: me.getDetailContainer();
//									detailCard.hide();
//								}
							}
						}
					},
					initialize : function() {
						console.log("initialize treelist");
//						var detailContainer = Ext.create('Ext.Container', {
//							layout : 'card'
//						});
//
//						this.setDetailContainer(detailContainer);
						this.callParent();
					},

					getTitleTextTpl : function() {
						return '{' + this.getDisplayField()
								+ '}<tpl if="leaf !== true"></tpl>';
					},
					getItemTextTpl : function() {
						return '{' + this.getDisplayField()
								+ '}<tpl if="leaf !== true"></tpl>';
					}

				});