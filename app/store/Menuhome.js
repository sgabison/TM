(function() {

	var root = [];
	var ordonnance= {
			text : 'Les ordonnances',
			leaf : true,
			source : 'ordonnance',
			view : 'Main',
			id : 'btn-ordonnance-liste',
			icon:'resources/images/logo/ordonnance.png'
	};
	var recherche = {
		text : 'Par médicament',
		leaf : true,
		source : 'search',
		view : 'Main',
		id : 'btn-recherche-medicament',
		icon:'resources/images/logo/doc.png'
	};
	var scanner = {
		source : 'onInitScan',
		text : 'Avec un code barre',
		leaf : true,
		id : 'btn-recherche-codebarre',
		view : '',
		controller: 'Search', 
		icon:'resources/images/logo/scanner.png'
	};
	var pharmacie = {
			text : 'Les médicaments',
			leaf : true,
			source : 'grid',
			view : 'Main',
			id : 'btn-pharmacie-medicaments',
			icon:"resources/images/logo/pharmacie.png"
		};

	root.push(ordonnance, recherche, scanner, pharmacie);

	Ext.define('transparence.store.Menuhome', {
		alias : 'store.Menuhome',
		extend : 'Ext.data.Store',
		requires : [ 'transparence.model.Menu' ],

		config : {
			model : 'transparence.model.Menu',
			data : root
		}
	});
})();
