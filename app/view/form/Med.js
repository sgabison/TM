Ext.define('transparence.view.form.Med', {
	extend : 'Ext.Panel',
	alias : 'widget.formmed',
	requires : [ 'Ext.field.DatePicker', 'Ext.field.FileInput',
			'transparence.model.User' ],
	initialize : function() {

		this.getAjaxItems();
		this.getToolbar();
		this.callParent();
	},
	config : {
		title : 'Informations personnelles',
		fullscreen : true,
		form : '',
		url:'http://transparence-medicale.fr/data/mobile/med',
		srollable : {
			direction : 'vertical',
			directionLock : false
		}
	},

	createUser : function(configuration, value) {
		fields = configuration.fields;
		validations = configuration.validations;
		user = Ext.create('transparence.model.dynamicmed', value);
		user.setFields(fields);
		user.setValidations(validations);
		user.setData(value);
		console.log("le modele", user);
		return user;
	},

	getToolbar : function() {
		var me = this;
		var toolbar = Ext.factory({
			xtype : 'toolbar',
			docked : 'bottom',

			items : [
					{
						text : 'Précédent',
						docked : "left",
						// Ensure the scope is 'this' so
						// we have access to the global
						// 'form' instance
						scope : this,
						handler : function() {
							this.form.reset();
						}
					},
					{
						text : 'Reload',
						docked : "left",
						scope : this,
						handler : function() {
							this.getAjaxItems();
							//this.form.reset();
						}
					},
					{
						text : 'Suivant',
						ui : 'confirm',
						docked : "right",
						scope : this,
						handler : function() {
							Ext.data.JsonP.request({
								// we should use the getter for our new
								// `url` config
								url : 'http://transparence-medicale.fr'
										+ this.form.action,
								params : { values:  Ext.JSON.encode(this.form.getValues(true) ) },
								async : false,
								success : function(response){ this.loadForm(response);},
								failure : function(response, request) {
									this.setHtml("Erreur du server: "
											+ response.responseText);
									return [];
								},
								scope : this
							});
						}
					} ]
		}, Ext.toolbar);
		me.insert(1, toolbar);

	},

	getAjaxItems : function() {
		var me = this;
		Ext.data.JsonP.request({
			url : this.url,
			reader : {
				type : 'json',
				root : 'data'
			},
			async : false,
			success : function(response){ this.loadForm(response); },
			failure : function(response, request) {
				this.setHtml("Erreur du server: " + response.responseText);
				return [];
			},
			scope : this
		});
	},
	loadForm :  function(response) {
		
		// recharger un formulaire
		this.setHtml("");
		if (this.form) {
			this.form.destroy();
		}
		this.form = Ext.factory(
				response.data.layout,
				'Ext.form.Panel');
		this.insert(0, this.form);
		this.form.setScrollable({
			direction : 'vertical',
			directionLock : true
		});
		this.user = this.createUser(
				response.data.model,
				response.data.data);
		this.form.setRecord(this.user);
		this.setForm(this.form);

	}

});
