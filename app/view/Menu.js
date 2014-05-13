Ext.define('transparence.view.Menu', {
	extend : 'Ext.dataview.NestedList',
	requires : [ 'Ext.TitleBar' ],

	id : 'menuNestedList',
	alias : 'widget.menunestedlist',

	config : {
		fullscreen : true,
		layout : "card",
		minWidth : '12em',
		baseCls : 'menunestedlist',
		displayField : 'text',
		title : 'Transparence médicale',
		useTitleAsBackText : true,
		store : 'Menus',
		listeners : {
			leafitemtap : function(me, list, index, item, e) {
				var store = list.getStore(), 
				record = store.getAt(index);
				console.log('onleafitemtap item', item);
				this.fireEvent('navTap', list, record);

			}
		}
	}
});