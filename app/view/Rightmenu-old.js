Ext.define('transparence.view.Rightmenu2', {
	extend : 'Ext.Menu',
	xtype : 'rightmenu2',
	width : 300,
	config : {
		items : [ {
			text : 'Configuration',
			iconCls : 'settings',
			id : 'rightmenu-settings',
			name : 'rightmenu-settings',
			cls : 'modus-button primary'
		}, {
			text : 'Votre avis compte',
			iconCls : 'compose',
			id : 'rightmenu-avis',
			name : 'rightmenu-avis',
			cls : 'modus-button default'
		}, {
			text : 'Vos données',
			iconCls : 'tm_icon_menu_user',
			id : 'rightmenu-profile',
			name : 'rightmenu-profile',
			cls : 'modus-button info'
		},
		{
			id : 'rightmenu-logout',
			iconCls : 'tm_icon_menu_logout',
			cls : 'modus-button info',
			text : 'Déconnexion'		
		},
		{
			id : 'rightmenu-welcome-tab',
			text : 'Accueil',
			iconCls : 'home' 

		},
		{
			id : 'rightmenu-theUserPanel',
			text : 'Votre Profil',
			iconCls : 'user'
		},
		{
			id : 'rightmenu-locate',
			text : 'Scan it!',
			iconCls :''

		},
		{
			id : 'rightmenu-theScanPanel',
			iconCls : 'search',
			text : 'Recherche'
		},
		{
			id : 'rightmenu-theMedecinesPanel',
			text : 'Medicaments',
			iconCls : 'bookmarks' 
		},
		{
			id : 'rightmenu-thePersonalPanel',
			iconCls : 'team',
			title : 'Ma Pharmacie'
		},
		{
			id:'rightmenu-video',
			text : 'Voir Video',
			iconCls : 'action'

		}

		]
	}
});