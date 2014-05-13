Ext.define('transparence.view.form.Html', {

	extend : 'Ext.Panel',
	alias : 'widget.formhtml',

	// We are using Ext.Ajax, so we should require it
	requires : [ 'Ext.data.JsonP' ],

	config : {
		listeners : {
			activate : 'onActivate'
		},
		id : 'formhtml',
		itemId : 'formhtml',
		// Create a new configuration called `url` so we can specify the
		// URL
		url : null,
		docId : null,
		ui: 'html',
        scrollable : true,
        cls:'htmlpage',
		defaults : {
			styleHtmlContent : true
		}
	},

	onActivate : function(me, container) {
		Ext.data.JsonP.request({
			// we should use the getter for our new `url` config
			url : this.getUrl(),
			callbackKey : 'callback',
			params : {
				key : this.getDocId(),
				format : 'html'
			},
			method : "GET",
			useDefaultXhrHeader : false,
			success : function(response, request) {
				// We should use the setter for the HTML config
				// for this
				this.setHtml(response.data);
			},
			failure : function(response, request) {
				this.setHtml("<div class='alert'>Le service ne semble pas disponible.<br> Vérifier votre connexion': " + response.data +"</div>");
			},
			scope:me
		});
	}

});
