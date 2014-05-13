Ext.define('transparence.view.tree.Main', {
	extend : 'Ext.Container',
	alias : 'widget.treeview',

	requires : [ 'transparence.view.tree.List', 'transparence.view.tree.Menu','transparence.view.tree.detailCard' ],
	initialize : function() {
		console.log('Main tree view initialize');
		var me = this;
		me.callParent();
	},
	   config: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        cis:'',
        items: [ ] //init de main puis chargement des lists dyn.
    }

});