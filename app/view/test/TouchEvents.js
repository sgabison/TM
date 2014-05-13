Ext.define('transparence.view.test.TouchEvents', {
	extend : 'Ext.Container',
	alias : 'widget.touchevents',

	requires : [ 'transparence.view.test.touchevent.Info',
			'transparence.view.test.touchevent.Logger',
			'transparence.view.test.touchevent.Pad' ],

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
			xtype : 'scansearch',
			style : 'background-color: red;'
			
		}, {
			style : "background-color: #FF9900; color:white;",
			html : "<center>Item 2</center>",
			docked : 'bottom',
			flex:1
		}, {
			xtype : 'searchpad',
			style : 'background-color: yellow;',
			flex:3

		} ]
	},

	showConsole : function() {
		this.setActiveItem(1);
	}
});