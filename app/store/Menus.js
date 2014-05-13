(function() {

	var root = {
		id : 'root',
		text : 'Accueil',
		items : [
				{
					source : 'homepage',
					text : 'Accueil',
					leaf : true,
					id : 'btn-accueil',
					view : 'HomePage'
				},
				{
					text : 'Recherche',
					id : 'btn-recherche',
					cls : 'launchscreen',
					items : [ {
						source : 'onInitScan',
						text : 'Avec un code barre',
						leaf : true,
						id : 'btn-recherche-codebarre',
						view : '',
						controller: 'Search', 
						icon:'resources/images/logo/scanner.png'
					}, {

						text : 'Par médicament',
						leaf : true,
						source : 'search',
						view : 'Main',
						id : 'btn-recherche-medicament'
					}, {
						text : 'Par symptôme',
						leaf : true,
						source : 'search',
						view : 'Main',
						id : 'btn-recherche-symptome'
					}, {
						text : 'Par substance',
						leaf : true,
						source : 'search',
						view : 'Main',
						id : 'btn-recherche-substance'

					} ]
				},
				{
					text : 'Vos données',
					leaf : false,
					id : 'btn-user',
					items : [
							{
								text : 'Votre profil',
								leaf : true,
								source : 'form',
								view : 'Dyn',
								id : 'btn-profil'
							},
							{
								text : 'Historique',
								leaf : false,
								source : 'form',
								view : 'Html',
								id : 'btn-historique',
								params : {
									url : 'http://transparence-medicale.fr/data/mobile/get-html/',
									docId : '626'
								}
							}, {
								text : 'Déconnexion',
								leaf : true,
								source : 'login',
								view : 'Login',
								id : 'btn-login',
								params : {}
							} ]
				}, {
					text : 'Ma pharmacie',
					leaf : false,
					id : 'btn-pharmacie',
					items : [ {
						text : 'Les médicaments',
						leaf : true,
						source : 'grid',
						view : 'Main',
						id : 'btn-pharmacie-medicaments'
					}, {
						text : 'Ajouter',
						leaf : true,
						source : 'grid',
						view : 'Main',
						id : 'btn-pharmacie-ajouter'
					} ]
				} ]
	};
	var notices = {
		text : 'Notices consultées',
		source : 'tree',
		view : 'Main',
		leaf : false,
		id : 'btn-notices'
	};
	var clearnotices = {
	       		text : 'Réinitialiser',
	       		controller :'Menu',
	       		source : 'resetConsultations',
	       		view : '',
	       		leaf : true,
	       		id : 'btn-clear-notices'
	 };
	var ordonnance = {
		text : 'Mes ordonnances',
		leaf : false,
		id : 'btn-ordonnance',
		items : [ {
			text : 'Les ordonnances',
			leaf : true,
			source : 'ordonnance',
			view : 'Main',
			id : 'btn-ordonnance-liste'
		}, {
			text : 'Ajouter',
			leaf : true,
			controller : 'Ordonnance',
			view : '',
			source : 'onOrdonnanceAdd',
			id : 'btn-ordonnance-ajouter'
		} ]
	} ;
	root.items.push(notices,clearnotices, ordonnance);

	Ext.define('transparence.store.Menus', {
		alias : 'store.Menus',
		extend : 'Ext.data.TreeStore',
		requires : [ 'transparence.model.Menu' ],
//		autoSync: true,
//		autoLoad: true,
//    
//		proxy: {
//		 type: 'localstorage',
//		 id  : 'myApplicationKey'
//		},
		config : {
			model : 'transparence.model.Menu',
			root : root,
			defaultRootProperty : 'items'
		}
	});
})();
