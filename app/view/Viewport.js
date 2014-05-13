Ext.define('transparence.view.Viewport', {
	extend : 'Ext.Container',
	alias : 'widget.app_viewport',
	requires:['transparence.view.homepage.HomePage', 'transparence.view.Titlebar'],
	initialize : function() {
		if (!this.titlebar) {
			this.titlebar = Ext.create(
					'transparence.view.Titlebar', {
						title : 'Transparence Médicale'
					});
		}
		this.insert(0,this.titlebar);
		this.callParent(arguments);
		
	},

	config : {
		titlebar:'',
		fullscreen : true,
		id:'app_viewport',
		layout: {
		    type: 'card',
		    animation: {
		        type: 'slide',
		        direction: 'left',
		        duration: 250
		    }
		},
		defaults: {
		flex: 1
		}
	}
});
