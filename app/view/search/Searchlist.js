Ext.define('transparence.view.search.Searchlist', {
	extend : 'Ext.dataview.List',
	alias: 'widget.searchlist',


	scrollable : true,
				
	config : {
		title : 'Liste des réponses',
		cls : 'x-meds',
		store : 'Scans',	
		itemTpl : ['<div class="medecine contact">{libelle}</div>'].join(),
		grouped : true,
		striped: false,
		minHeight: '100px',
		flex:3,
		emptyText : '<div style="margin-top: 20px; text-align: center">Aucun résultats</div>'
	}

});
