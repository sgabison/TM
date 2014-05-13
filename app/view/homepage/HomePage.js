Ext.define('transparence.view.homepage.HomePage', {
	extend : 'Ext.dataview.DataView',
	alias : "widget.homepage",
	requires : ['Ext.Img'],
	fullscreen : true,
	config : {
		title : 'Bienvenue ',
        store: 'Menuhome', // data
        itemTpl: '<img class="center-menu-image" src="{icon}" title="{title}" alt="{text}">',
        baseCls: 'center-menu'
            	 
	}

});
