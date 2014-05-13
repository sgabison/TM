Ext.define('transparence.view.Rightmenu', {
	extend : 'Ext.Menu',
	requires : [ 'transparence.view.Menu', 'transparence.store.Menus' ],
	xtype : 'rightmenu',

	config : {
		layout: 'fit',
		maxWidth : '12em',
		width : '50%',
		height : '100%',
		baseCls : 'rightmenu',
		items : [ {
			xtype : 'menunestedlist'
		} ]
	}
});