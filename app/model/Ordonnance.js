Ext.define('transparence.model.Ordonnance', {
	extend : 'Ext.data.Model',

	config : {

		fields : [			
		          		      "o_id",
		          		      "medecin",
		          		      "symptome",
		          		      "date_debut",
		          		      "traitement_en_cours",
		          		      "person_id"
		          		      ],
		idProperty : 'o_id',
		hasMany: {model: 'transparence.model.MyMed', name: 'medecines'}

	}
});
