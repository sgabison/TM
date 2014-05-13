Ext.define('transparence.view.form.OrdonnanceDyn', {
	extend : 'Ext.Container',
	alias : 'widget.formordonnanceDyn',
	requires : [ 'transparence.model.dynamicmed' ],
	initialize : function() {
		this.getContent();
		this.getToolbar();
		this.callParent();
	},
	config : {
		title : '',
		fullscreen : true,
		layout : 'vbox',
		form : '',
		model : '',
		defaults : {
			ui : "med"
		},

		srollable : {
			direction : 'vertical',
			directionLock : false
		},
		url :'http://transparence-medicale.fr/data/mobile/sencha-form', //appel initial
		formId : 10446
	},

	createModel : function(configuration, value) {
		model = Ext.create('transparence.model.dynamicmed', value);

		if (configuration) {
			fields = configuration.fields;
			validations = configuration.validations;
			model.setFields(fields);
			model.setValidations(validations);
		}
		model.setData(value);
		console.log("le modele", model);
		return model;
	},

	getToolbar : function() {
		var me = this;
		var toolbar = Ext.factory({
			xtype : 'toolbar',
			docked : 'bottom',
			flex : 1,
			items : [ {
				text : 'Reset',
				docked : "left",
				// Ensure the scope is 'this' so
				// we have access to the global
				// 'form' instance
				scope : this,
				handler : function() {
					this.form.reset();
				}
			}, {
				text : 'Reload',
				docked : "left",
				scope : this,
				handler : function() {
					this.getContent();
				}
			}, {
				text : 'Envoyer',
				ui : 'confirm',
				docked : "right",
				scope : this,
				handler : function() {
					this.ValidateForm(this);
				}
			} ]
		}, Ext.toolbar);
		me.insert(1, toolbar);

	},

	getContent : function() {
		var me = this;
		Ext.data.JsonP.request({
			url : me.getUrl(),
			params : {
				key: me.getFormId() //type formulaire
			},
			reader : {
				type : 'json',
				root : 'data'
			},
			async : false,
			success : function(response) {
				this.loadForm(response);
			},
			failure : function(response, request) {
				this.setHtml("Erreur du server: " + response.responseText);
				return [];
			},
			scope : this
		});
	},
	loadHtml : function(response) {
		this.insert(0, {
			ui : 'html',
			scrollable : true,
			cls : 'htmlpage',
			html : "<h3>merci d'avoir répondu au questionnaire" + response.message+"</h3>",
			minHeight:"200px",
			flex: 1
		});
	},
	
	loadForm : function(response) {
		// recharger un formulaire
		this.setHtml("");
		if (this.form) {
			this.form.reset();
			this.form.destroy();
			this.model.destroy();
		}
		this.form = Ext.factory(response.data.layout, 'Ext.form.Panel');
		this.form.setFlex(3);
		this.form.setDefaults({
			ui : "med"
		});
		this.form.setScrollable({
			direction : 'vertical',
			directionLock : true
		});
		console.log("form", this.form);
		this.model = this.createModel(response.data.model, response.data.data);
		this.form.setRecord(this.model);
		this.form.setValues(response.data.data);
		this.form.setUrl(this.form.action);
		this.insert(0, this.form);
	},
	submitFormJsonP : function() {
		var me=this;
		Ext.data.JsonP.request({
			url : 'http://transparence-medicale.fr' + this.form.action,
			params : {
				values : Ext.JSON.encode(this.form.getValues(true)),
				formId : this.form.formId,
				METHOD : 'POST'
			},
			async : false,
			success : function(response) {
				console.log("afficher la reponse html");
//				this.removeAll();
				me.up('navigationview').fireEvent('formOK', me, response);
			},
			failure : function(response, request) {
				this.setHtml("Erreur du server: " + response.responseText);
				return [];
			},
			scope : this
		});
	},

	ValidateForm : function(button, e, options) {

		rec = this.form.getRecord();
		rec.set(this.form.getValues());
		console.log("records to valid", rec);
		var errs = rec.validate();
		console.log("erreurs", errs);
		var msg = '';

		if (!errs.isValid()) {
			errs.each(function(err) {
				msg += err.getField() + ' : ' + err.getMessage() + '';
			});

			Ext.Msg.alert('Formulaire incomplet', msg);

		} else {
			this.submitFormJsonP();
		}
	}
});
