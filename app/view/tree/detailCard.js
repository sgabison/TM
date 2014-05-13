Ext.define('transparence.view.tree.detailCard', {
	extend : 'Ext.Container',
	alias : 'widget.detailCardview',
	config : {
		scrollable : true,
		flex: 1,
		// baseCls: Ext.baseCSSPrefix + 'sheet', // css class .x-sheet-detail
		baseCls : 'x-meds',
		defaults : {
			styleHtmlContent : true
		},
		tpl : [ '<div class="htmlPage">{description}</div>' ].join(''),
		items : [  ]
	}
});