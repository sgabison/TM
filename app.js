/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by Sencha
 * Cmd when it performs code generation tasks such as generating new models,
 * controllers or views and when running "sencha app upgrade".
 * 
 * Ideally changes to this file would be limited and most work would be done in
 * other places (such as Controllers). If Sencha Cmd cannot merge your changes
 * and its generated code, it will produce a "merge conflict" that you will need
 * to resolve manually.
 */
// <debug>
Ext.Loader.setPath({
			'Ext' : 'touch/src',
			'Ext.ux': 'ux'
		});
// </debug>

Ext.application({
	name : 'transparence',

// Require the components we will be using in this example
requires: ['Ext.MessageBox', 'Ext.device.Device',
    'Ext.form.*',
    'Ext.field.*','Ext.ux.RatingField',
    'Ext.Button',
    'Ext.Toolbar',
    'Ext.Label',
    'Ext.data.Store','Ext.TitleBar', 'Ext.Video',
	'transparence.view.med.Main',
	'transparence.view.search.Main',
	'transparence.view.ordonnance.Main',
	'transparence.view.form.*',
	'transparence.view.tree.Main',
	'transparence.view.grid.Main',
	'transparence.view.scanit.Menu',
	'transparence.view.Toolbar',
	'transparence.view.Titlebar',
	'transparence.view.form.Html', 
	'transparence.view.form.Dyn',
	'transparence.view.form.OrdonnanceDyn',
	'transparence.view.form.MedDyn',
	'transparence.view.login.Login',
	'transparence.view.homepage.HomePage',
	'Ext.plugin.PullRefresh', 'Ext.plugin.ListPaging' ,
	'transparence.view.test.TouchEvents'
],


	models : ['Med','MedTree','Ordonnance'],
	stores : ['Meds','Scans','Medstree','Menus','Menuhome','Consultations','Ordonnances'],
	controllers : ['Med','Search','Grid','Menu','AutoLogin','Medtree','Ordonnance'],
	views : [  'Viewport' ],

	icon : {
		'57' : 'resources/icons/Icon.png',
		'72' : 'resources/icons/Icon~ipad.png',
		'114' : 'resources/icons/Icon@2x.png',
		'144' : 'resources/icons/Icon~ipad@2x.png'
	},

	isIconPrecomposed : true,

	startupImage : {
		'320x460' : 'resources/startup/320x460.jpg',
		'640x920' : 'resources/startup/640x920.png',
		'768x1004' : 'resources/startup/768x1004.png',
		'748x1024' : 'resources/startup/748x1024.png',
		'1536x2008' : 'resources/startup/1536x2008.png',
		'1496x2048' : 'resources/startup/1496x2048.png'
	},

	launch : function() {
		// Destroy the #appLoadingIndicator element
		Ext.fly('appLoadingIndicator').destroy();

		Ext.Viewport.setMasked({
				xtype : "loadmask",
				fullscreen: true,
				message:'consultation...',
				html:'<div><img src="resources/images/logo/logo-200.png" alt="Transparence medicale">  <p style="color:black;">Votre avis sur les médicaments que vous consommez</p></div>',
				indicator : false,
				config : {
					cls : 'appLoadingIndicator'
				}
		});


		if(!this.menu){
			this.menu=Ext.create('transparence.view.Rightmenu');
			Ext.Viewport.setMenu(this.menu, { side:"right", cover:true} );
		}

		Ext.override(Ext.MessageBox, {
            buttonText: { yes: "Oui", no: "Non", cancel: "Annuler" }
        });
		
		// navigation links in app a tester
		Ext.Viewport.element.dom.addEventListener('click', function (e) {
		    if (e.target.tagName !== 'A') {
		        return;
		    };
		    var url = e.target.getAttribute('href');
		    var containsHttp = new RegExp('http\\b'); 

		    //if href value begins with 'http'
		    if(containsHttp.test(url)) { 
		        e.preventDefault();
		        Ext.device.Browser.open({
					url : url,
					showToolbar : false,
					options : "location=no"
				});
		    }
		    else {
		        return;
		    }
		}, false);
		var ownerproperties = 'Device Model: '    + Ext.device.Device.model    + '<br />' +
         'Device Cordova: '  + Ext.device.Device.cordova  + '<br />' +
         'Device Platform: ' + Ext.device.Device.platform + '<br />' +
         'Device UUID: '     + Ext.device.Device.uuid     + '<br />' +
         'Device Version: '  + Ext.device.Device.version  + '<br />';
         console.log('ownerproperties', ownerproperties);
	},

	onUpdated : function() {
		Ext.Msg
				.confirm(
						"Application Update",
						"This application has just successfully been updated to the latest version. Reload now?",
						function(buttonId) {
							if (buttonId === 'yes') {
								window.location.reload();
							}
						});
	}
});
