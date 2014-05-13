Ext.define('transparence.controller.Med', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			main : 'mainview',
			editButton : '#editButton',
			saveButton : '#saveButton',
			meds : 'meds',
			showMed : 'med-show',
			resultMed : 'med-result',
			editMed : 'med-edit'
		},

		control : {
			main : {
				push : 'onMainPush',
				pop : 'onMainPop'
			},
			editButton : {
				tap : 'onMedEdit'
			},
			meds : {
				itemtap : 'onMedSelect',
				show : 'onMedShow'
			},
			saveButton : {
				tap : 'onMedSave'
			},
			editMed : {
				change : 'onMedChange'
			}
		}
	},

	
	onMainPush : function(view, item) {
		var editButton = this.getEditButton();

		if (item.xtype == "med-show") {
			this.getMeds().deselectAll();

			this.showEditButton();
		} else {
			this.hideEditButton();
		}
	},

	onMainPop : function(view, item) {
		if (item.xtype == "med-edit") {
			this.showEditButton();
		} else {
			this.hideEditButton();
		}
	},
	onMedShow:	function( view, eOpts ){
		this.store = Ext.getStore('Meds');
		this.store.load({
				    callback: function(records, operation, success) {
				        // the operation object contains all of the details of the load operation
				        console.log(records);
				    },
				    scope: this
					});
		view.setStore(this.store);
		console.log('onMedShow');
	},
	onMedSelect : function(list, index, node, record) {
		console.log("onMedSelect push",record);
		var editButton = this.getEditButton();

		if (!this.showMed) {
			this.showMed = Ext.create('transparence.view.med.Show');
		}

		// Bind the record onto the show med view
		this.showMed.setRecord(record);

		// Push the show med view into the navigation view
		this.getMain().push(this.showMed);
	},
 
	onMedEdit : function() {
		if (!this.editMed) {
			this.editMed = Ext.create('transparence.view.med.Edit');
		}
		this.editMed.setRecord(this.showMed.getRecord());
		this.getMain().push(this.editMed);
		if (Ext.theme.name == "Blackberry") {
			this.showSaveButton();
		}
	},

	onMedChange : function() {
		this.showSaveButton();
	},

	onMedSave : function() {
		var record = this.getEditMed().saveRecord();

		this.getShowMed().updateRecord(record);

		console.log('med: ', record);

		// record.save();

		this.makeJSONPRequest(record);
		// this.getMain().push(this.resultMed);

	},

	showEditButton : function() {
		var editButton = this.getEditButton();

		if (!editButton.isHidden()) {
			return;
		}

		this.hideSaveButton();

		editButton.show();
	},

	hideEditButton : function() {
		var editButton = this.getEditButton();

		if (editButton.isHidden()) {
			return;
		}

		editButton.hide();
	},

	showSaveButton : function() {
		var saveButton = this.getSaveButton();

		if (!saveButton.isHidden()) {
			return;
		}

		saveButton.show();
	},

	hideSaveButton : function() {
		var saveButton = this.getSaveButton();

		if (saveButton.isHidden()) {
			return;
		}

		saveButton.hide();
	},
	makeJSONPRequest : function(record) {
		var me = this;
		if (!this.resultMed) {
			this.resultMed = Ext.create('transparence.view.med.Result');
		}
		var tpl = this.getTemplate(), 
			contentView = this.resultMed, 
			statusView = this.resultMed, 
			mainView = this.getMain();
		contentView.setMasked({
					xtype : 'loadmask',
					message : 'Loading...'
				});
		Ext.data.JsonP.request({
			url : 'http://transparence-medicale.fr/data/medecine/get-data',
			callbackKey : 'callback',
			params : {
				// key: 'qfj4gk3t4u5u3bqc8atf69fn',
				METHOD : 'PUT',
				data : Ext.JSON.encode(record.data),
				format : 'json'
			},
			success : function(result) {
				var data = result.data;
				console.log('result:', result);
				if (data) {		
					mainView.pop();	
				} else {
					Ext.Msg.alert('Erreur : ', result.message);
				}
				contentView.unmask();
			},
			failure : function() {
				Ext.Msg.alert('Erreur',
						'Un problème est survenu lors de la consultation');
				contentView.unmask();
			}
		});
	},
	getTemplate : function() {
		return new Ext.XTemplate([
				'<tpl for=".">',
				'<div class="day">',
				'<div class="date">{o_modificationDate:date("M d, Y")}</div>',
				'<div class="icon">',
				'<tpl for="image">',
				'<img src="http://transparence-medicale.fr/data/medecine/get-thumbnail?id={image.id}" />',
				'</tpl>', '</div>', '<div class="temp">{o_id} coucou</div>',
				'</div>', '</tpl>'].join(''));
	}
});
