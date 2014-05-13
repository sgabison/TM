Ext.define('transparence.view.ordonnance.Meds', {
	extend : 'Ext.dataview.List',
	xtype : 'ordonnancemeds',
	scrollable : true,
	config : {
		title : 'Liste des médicaments prescrits',
		plugins : [ {
			xclass : 'Ext.plugin.PullRefresh',
			pullText : 'Tirer pour remonter...'
		}, {
			xclass : 'Ext.plugin.ListPaging',
			autoPaging : true,
			loadMoreText: 'voir la suite...',
			noMoreRecordsText: 'fin'
		} ],

		grouped : true,
		variableHeights : true,
		store : 'OrdonnanceMeds',
		itemTpl : [ '<div class="name">{name} <span class="libelle">, {libelle}</span> </div>' ].join('')
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
