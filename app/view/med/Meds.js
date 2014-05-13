Ext.define('transparence.view.med.Meds', {
	extend : 'Ext.dataview.List',
	xtype : 'meds',
	scrollable : true,
	config : {
		title : 'Medecine Book',
		plugins : [ {
			xclass : 'Ext.plugin.PullRefresh',
			pullText : 'Tirer pour remonter...'
		}, {
			xclass : 'Ext.plugin.ListPaging',
			autoPaging : true,
			loadMoreText: 'voir la suite...',
			noMoreRecordsText: 'fin'
		} ],
		cls : 'x-meds',
		ui:'meds',
		grouped : true,
		variableHeights : true,
		store : 'Meds',
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
