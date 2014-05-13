Ext.define('transparence.controller.Medtree', {
	extend : 'Ext.app.Controller',
	config : {
		currentNode : null,
		myList:'',
		myContainer:'',
		historiqueViewId:'btn-historique',
		refs : {
			main : '#app_viewport',
			toolbar : 'apptitlebar',
			nav : '#menuNestedList',
			list : 'treelist',
			container : 'detailCardview',
			medview : 'treeview',
			avisbtn:'button[name=avisBtn]'
		},
		
		control : {
			medview : {
				initialize : 'onInitView'
			},
			list : {
				itemtap : 'onItemtap',
				leafitemtap : 'onLeafItemTap',
				initialize : 'onInitList'
			},
			container : {
				initialize : 'onInitContainer',
				scroll : 'onScroll'
			},
			avisbtn:{
				tap: 'onAvisBtnTap'
			}
		}
	},
	onAvisBtnTap : function( me, e, eOpts ){
		

		console.log("showViewByMed search", me.cis);
		
		var avis = Ext.create('transparence.model.Menu',{
			text : me.getText(),
			source : 'form',
			view : 'MedDyn',
			id : 'btn-avis-'+ me.cis,
			leaf : true,
			icon:'resources/images/logo/doc.png',
			cis:  me.cis,
			params: {medCis : me.cis, url:'http://transparence-medicale.fr/data/mobile/sencha-form'}
		});
		
		var nav = this.getNav(),
		parentNode = nav.getStore().getNodeById(this.getHistoriqueViewId());
		parentNode.insertChild(0,avis);
		
		nav.fireEvent('navTap', nav, avis);
			
	
	},
	
	onInitView : function(me, eOpts) {
		console.log('Medtree controler OnInitView');

        var control = this;	
		console.log('load storecis :', me.get('cis') );
		Ext.Viewport.setMasked(true);
    	if(me.get('cis')>0){
    	var   	params= { cis : me.get('cis') },    	
		store= Ext.create('transparence.store.Medstree', {storeId:'store-'+me.get('cis')} ).load( {
		
			params : params,
			callback : function(records, operation, success) {
			
				console.log('load store cis done' );

				var detailCard= Ext.create('transparence.view.tree.detailCard',{store: store,itemId:'detailcard-'+me.get('cis'),id:'detailcard-'+me.get('cis')});

				var buttonAvis = Ext.create(Ext.Button, {
						name : 'avisBtn',
						docked : 'bottom',
						ui : 'secondary',
						title : 'Social Bar',
						id : 'button'+ me.get('cis'),
						cis : me.get('cis'),
						text : 'Partager votre expérience',
						iconCls : 'reply',
						margin : 20
					});

				detailCard.insert(0,{id:'description-'+me.get('cis'),html:'Voici le detail du medicament'})	;				
				detailCard.insert(1,buttonAvis);

				var menu=Ext.create('transparence.view.tree.Menu',{id:'menu-'+me.get('cis')});				
				var list= Ext.create('transparence.view.tree.List',{store: store,itemId:'list-'+me.get('cis'),id:'list-'+me.get('cis'),detailContainer:detailCard});
				menu.insert(0,list);
				
				me.insert(0,menu);
				me.insert(1,detailCard);
				
				control.loadFirstNode(list);
				Ext.Viewport.setMasked(false);
			},
			scope: me
		});


    	} else {
    		console.log('cis is not set' );
    		Ext.Viewport.setMasked(false);
    	}
		
	},
	
	loadFirstNode: function(list){
	
				var    store = list.getStore() ; 
				var		root = store.getRoot(),  items = [], docs = [];
				var 	notice="notice_17";
				var 	info ="info_9";
				var 	rcp = "rcp_24";
				console.log("medtree store loadFirstNode");

				node = store.getById(notice);
				if( ! node ) node = store.getById(info);
				if( ! node ) node = store.getById(rcp);
								
				this.showItem(list, node);
		},
	
	
	onInitList : function(me, eOpts) {
		console.log('Medtree controler OnInitList');
	},
	onInitContainer : function(me, eOpts) {
		console.log('Medtree controler OnInitContainer');
	},

	onItemtap : function(me, list, index, target, record, e, eOpts) {
		console.log('tap record', record);

	},
	onLeafItemTap : function(me, list, index, target, record, e, eOpts) {
		console.log('tap leaf record', record);
 		this.showItem(me, record);
	},
	showItem : function(list , node) {
		var detailCard = list.getDetailContainer();
		var descriptionField = detailCard.getComponent(0);
		list.detailCardVisible = true;
		if (node) {
			this.setCurrentNode(node);
			list.goToNode(node.parentNode);
			list.goToLeaf(node);
			list.getActiveItem().select(node);
			html = node.getData();
		} else {
			html = "ce chapitre est vide";
		}
		
		var htmlData = detailCard.getTpl().apply(html);
		descriptionField.setHtml(htmlData);
	},

	showViewById : function(id) {
		console.log("showViewById", id);
		var nav = this.getNav(), 
		view = nav.getStore().getNodeById(id);
		nav.fireEvent('navTap', nav, view);
	}

});