Ext.define('transparence.view.search.Main', {
	extend : 'Ext.Container',
	alias : 'widget.searchview',

	requires : [ 'transparence.view.search.Searchform',
	             'transparence.view.search.Pad',
	             'transparence.view.search.Searchlist' ],

	initialize : function() {
 		this.callParent(arguments);
	},

	config : {
		fullscreen : true,
		layout : {
			type : 'vbox',
			align : 'stretch',
			pack: 'center'
		},
		defaults : {
			flex : 1
		},

		items : [ {
			xtype : 'searchform',
			height: '100px'
			
		},  {
			xtype : 'searchpad',
			flex:4

		} ]
	},

	showConsole : function() {
		this.setActiveItem(1);
	}
});