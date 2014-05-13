Ext.define('transparence.controller.Ordonnance', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			main : 'ordonnancesview',
			ordonnances : 'ordonnanceslist',
			ordonnanceDetail : 'ordonnanceshow',
			editButton : '#ordonnanceEditButton',
			saveButton : '#ordonnanceSaveButton',
			addButton : '#ordonnanceAddButton',
			deleteButton : '#ordonnanceDeleteButton'
		},

		control : {
			main : {
				push : 'onMainPush',
				pop : 'onMainPop',
				formOK:'onFormOK'
			},
			editButton : {
				tap : 'onOrdonnanceEdit'
			},
			ordonnances : {
				itemtap : 'onOrdonnanceSelect',
 				show : 'onOrdonnancesShow'
			},
			saveButton : {
				tap : 'onOrdonnanceSave'
			},
			addButton : {
				tap : 'onOrdonnanceAdd'
			},
			deleteButton : {
				tap : 'onOrdonnanceDelete'
			}

		}
	},
	onMainPush : function(view, item) {
		if (item.xtype == "ordonnancedshow") {
			this.getEditButton().show();
		}
		this.getAddButton().hide();
		
	},

	onMainPop : function(view, item) {
		console.log('onMainPop');

	},
	onFormOK : function( me, response){
		console.log('onformOK', response.data);
		var record =  Ext.create('transparence.model.Ordonnance',response.data);

		if (!this.ordonnanceDetail) {
			this.ordonnanceDetail = Ext.create('transparence.view.ordonnance.Show');
		}
		Ext.getStore('Ordonnances').add(record);
		this.ordonnanceDetail.setRecord(record);

		this.getMain().push(this.ordonnanceDetail);
		
	},
	toggleBar: function(){
		var navigationBar=this.getMain().getNavigationBar();
		if(navigationBar.isHidden()){
			navigationBar.show();
		} else {
			navigationBar.hide();
		}		
		
	},
	
	
	onOrdonnancesShow : function() {
		console.log('onOrdonnanceShow');
		this.getAddButton().show();

	},
	onOrdonnanceSelect : function(element, index, target, record, e, eOpts) {
		var me = this;
		console.log("onOrdonnanceSelect push", record);

		if (!this.getOrdonnanceDetail()) {
			ordonnanceDetail = Ext.create('transparence.view.ordonnance.Show');
		} else {
			ordonnanceDetail = this.getOrdonnanceDetail();
		}
		ordonnanceDetail.setRecord(record);
		this.getMain().push(ordonnanceDetail);
		
	},
	onOrdonnanceAdd : function() {
		console.log('onOrdonnanceAdd');
		if (!this.getMain()) {
			main = Ext.create('transparence.view.ordonnance.Main');  //accessible directement par le menu
		} else {
			main = this.getMain();
		}
		var params={	url :'http://transparence-medicale.fr/data/mobile/sencha-form', //appel initial
						formId : 10446 
					};
		var form = Ext.create('transparence.view.form.OrdonnanceDyn',params);
		main.push(form);

	}
});
