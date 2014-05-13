Ext.define('transparence.view.Toolbar', {
	extend : 'Ext.Toolbar',
	xtype : 'app-toolbar',
	config : {
		// Dock it to the top
		docked : 'top',
		xtype: 'toolbar',
		title : 'Transparence médicale',
		itemId : 'appToolbar',
		// Center all items horizontally and vertically
		layout : {
			pack : 'center',
			align : 'center'
		},

		// Make the toolbar scrollable
		scrollable : {
			direction : 'horizontal',
			indicators : false
		},

		// Add some default configurations to all items added to
		// this toolbar
		defaults : {
			ui : 'dark'
		},

		// Add a bunch of buttons into the toolbar
		items : [ {
			iconCls : 'action'
		}, {
			iconCls : 'add'
		}, {
			iconCls : 'arrow_up'
		}, {
			iconCls : 'arrow_right'
		}, {
			iconCls : 'arrow_down'
		}, {
			iconCls : 'arrow_left'
		}, {
			iconCls : 'compose'
		}, {
			iconCls : 'delete'
		}, {
			iconCls : 'refresh'
		}, {
			iconCls : 'reply'
		}, {
			iconCls : 'search'
		}, {
			iconCls : 'star'
		}, {
			iconCls : 'trash'
		} ]
	}
});