Ext.define('transparence.view.login.Login', {
	extend : 'Ext.form.Panel',
	alias : 'widget.login',
	xtype : 'login',
	requires : ['Ext.field.Password'],
	config : {
		title : 'Login',
		ui:'login',
		id:"theLoginPanel",
		fullscreen: true,
		items : [ {
			xtype : 'image',
			src : 'resources/images/logo/logo-transparence-medicale.png',
			ui : 'logo'
		}, {
			xtype : 'label',
			ui:'innerlogin',
			html : 'Login failed. Please enter the correct credentials.',
			
			itemId : 'signInFailedLabel',
			id : 'signInFailedLabel',
			hidden : true,
			hideAnimation : 'fadeOut',
			showAnimation : 'fadeIn'
		}, {
			xtype : 'fieldset',
			ui:'innerlogin',
			id:'loginFieldset',
			title : 'Veuillez-vous identifier :',
			items : [ {
				xtype : 'textfield',
				label : 'Nom/Identifiant',
				itemId : 'username',
				name : 'username',
				allowBlank : false,
				autoCapitalize : false,
				placeHolder : 'Nom ou identifiant',
				required : true
			}, {
				xtype : 'passwordfield',
				label : 'Mot de passe',
				itemId : 'password',
				name : 'password',
				allowBlank : false,
				placeHolder : 'Mot de passe',
				required : true
			},  {
				xtype : 'button',
				itemId : 'loginButton',
				id : 'loginButton',
				text : 'Envoyer',
				ui : 'action',
				cls : 'modus-button default'
			}  ]
		} ]
	}

});