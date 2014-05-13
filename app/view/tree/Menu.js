Ext.define('transparence.view.tree.Menu', {
	extend : 'Ext.Container',
	alias : 'widget.treemenu',

	requires : [],
	config : {
	layout: 'fit',
	maxWidth : '12em',
	width : '50%',
	height : '100%',
	baseCls : 'rightmenu',
//	itemId : 'treemenu',
//	id : 'treemenu',	
	title : '',

		items : [] // dynamic  { xtype : 'treelist'	}

	}

});