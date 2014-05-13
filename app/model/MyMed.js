Ext.define('transparence.model.MyMed', {
	extend : 'Ext.data.Model',

	config : {

		fields : [ "cis", "date_expire", "lot", "prise", "duree_traitement",
				"name", "libelle","ordonnance_id" ],
		idProperty : 'cis',
		belongsTo: 'Ordonnance'
		

	}
});
