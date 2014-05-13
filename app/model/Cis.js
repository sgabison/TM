Ext.define('transparence.model.Cis', {
			extend : 'Ext.data.Model',

			config : {

				fields : ['cis', 'name', 'libelle', 'forme_galenique', 'voie_administration', 'statut_AMM', 'procedure_autorisation', 'commercialisation', 'code_document_RPC_notice'],
				idProperty : 'cis'

			}
		});
