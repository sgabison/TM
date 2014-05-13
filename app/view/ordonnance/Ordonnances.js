Ext.define('transparence.view.ordonnance.Ordonnances', {
	extend : 'Ext.dataview.List',
	requires:'transparence.store.Ordonnances' ,
	xtype : 'ordonnanceslist',
	scrollable : true,

	config : {
		title : 'Ordonnances',
//		plugins : [ {
//			xclass : 'Ext.plugin.PullRefresh',
//			pullText : 'Tirer pour remonter...'
//		}, {
//			xclass : 'Ext.plugin.ListPaging',
//			autoPaging : true,
//			loadMoreText: 'voir la suite...',
//			noMoreRecordsText: 'fin'
//		} ],
		cls : 'x-Ordonnances',
		ui:'Ordonnances',
		grouped : true,
		variableHeights : true,
		store : 'Ordonnances',
		itemTpl : [ '<div class="name">{medecin} <span class="symptome">, {symptome}</span> </div>' ].join('')
	},
	
	refreshed : false,

	onLoad : function() {
		var me = this, store = me.getStore();

		me.callParent(arguments);

		if (store.getCount() === 0 && store.isLoaded()) {
			me.setMasked({
				xtype : 'loadmask',
				indicator : false,
				message : 'Désolé, Transparence medicale rencontre un problème.'
			});

			me.getScrollable().getScroller().setDisabled(true);
		}
	}
});
