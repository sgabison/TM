Ext.define('transparence.model.Med', {
	extend : 'Ext.data.Model',

	config : {

		fields : [ 
		          				'o_id',
								'cis',
								'name',
								'libelle',
								'o_path',
								'o_index',
								'laboratoire_exploitant',
								'o_creationDate',
								'o_modificationDate',
								'dosage',
								'nombre_dunites_de_prise',
								'descriptionTherapeutique',
								'indicationTherapeutique',
								'contreIndicationTherapeutique',
								'posologieTherapeutique',
								'effetIndesirableTherapeutique',
								{
									name : "image",
									type : "string",
									mapping : "image.id",
									convert : function(value, record) {
										return "http://transparence-medicale.fr/data/medecine/get-thumbnail/"
												+ value;
									}
								} ],
		idProperty : 'cis'

	}
});
