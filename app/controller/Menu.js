Ext.define('transparence.controller.Menu', {
	extend : 'Ext.app.Controller',
	config : {
    	viewCache: [],
		routes: {
		    'demo/:id': 'showViewById',
		    'menu/:id': 'showMenuById',
		    '': 'showMenuById'
		},
		currentDemo: undefined,
		consultViewId : 'btn-notices',

		refs : {
			main : '#app_viewport',
			toolbar:'apptitlebar',
			userpanel : '#theUserPanel',
			navigation : 'rightmenu',
			navBtn : 'button[name="rightmenu_btn"]',
			profileBtn : '#rightmenu-profile',
			avisBtn :'#rightmenu-avis',
			logoutBtn : '#rightmenu-logout',
			myLoginPanel : '#theLoginPanel',
			QPanel :'#theQuestionPanel',
			homepage : 'homepage',
			nav:'#menuNestedList'
		},

		control : {
			homepage : {
				itemtap : 'onItemtap'
			},
			nav :{
				navTap : 'onNavItemTap'
			},			
			navBtn : {
				tap : 'toggleMenu'
			}

		}
	},
	/**
	 * Toggle the slide navigation view
	 */
	toggleMenu : function(button, e, eOpts) {
		Ext.Viewport.toggleMenu('right');
		this.getNav().setHidden(false);
		this.getNav().show();
		
	},
	onItemtap : function ( Me , index, target, record, e, eOpts ){
		this.redirectTo(record);
	},

	onNavItemTap: function(nestedList, record) {
        console.log('menu onnavtap',record);
        Ext.Viewport.hideMenu( 'right' );
        if (record.isLeaf()) {
            this.redirectTo(record);
        } else {
            this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                url: 'menu/' + record.get('id')
            }));
        }
    },
    redirectTo: function(record){
    	console.log("redirect to", record.isAction(), record);
    	var me=this;
    	if(record.isAction()){
    		record.doAction()
    	} else { 	
    		this.showView(record);
    	}
    	
        this.hideSheets();
    },
    showViewById: function (id) {
    	console.log("showViewById",id);
        var nav = this.getNav(),
            view = nav.getStore().getNodeById(id);
        this.redirectTo(view);
    },
    showMenuById: function(id) {
        var nav  = this.getNav(),
            store = nav.getStore(),
            item = (!id || id == 'root') ? store.getRoot() : store.getNodeById(id);

        if (item) {
            nav.goToNode(item);
           if(this.getToolbar()) { this.getToolbar().setTitle(item.get('text')); }
//            this.getSourceButton().setHidden(true);
//            this.getSourceOverlay().setHidden(true);
            this.hideSheets();
        }
    },
    createView: function (item) {
    	console.log("createview", item);
        var name = item.getViewName(),
        	config=item.get('params'),
            cache = this.getViewCache(),
            ln = cache.length,
            limit = item.get('limit') || 20,
            view, i = 0, j, oldView;
            console.log("view before cache", name, config);
        for (; i < ln; i++) {
            if (cache[i].viewName === name) {
            	if (cache[i].parameters === config) {
            		console.log("view in cache", name, config);
            		return cache[i];}
            }
        }

        if (ln >= limit) {
            for (i = 0, j = 0; i < ln; i++) {
                oldView = cache[i];
                if (!oldView.isPainted()) {
                    oldView.destroy();
                } else {
                    cache[j++] = oldView;
                }
            }
            cache.length = j;
        }
        view = Ext.create(name,config);
        view.viewName = name;
        view.parameters = config;
        if(! item.get('preventCache') ) 
        cache.push(view);
        this.setViewCache(cache);

        return view;
    },
    hideSheets: function () {
//        Ext.each(Ext.ComponentQuery.query('sheet, #app_viewport'), function (sheet) {
//            if(sheet instanceof Ext.Menu) {
//                Ext.Viewport.hideMenu(sheet);
//            }else {
//                sheet.setHidden(true);
//            }
//        });
    },
    showView: function(item) {
    	console.log('showview', item);
        var nav    = this.getNav(),
            title  = item.get('text'),
            view = this.createView(item);
           
        this.setCurrentDemo(view);
        console.log('current view', this.getCurrentDemo());
        main=this.createMain();
		var anim = item.get('animation'),
        layout  = main.getLayout(),
        initialAnim = layout.getAnimation(),
        newAnim;

        if (anim) {
            layout.setAnimation(anim);
            newAnim = layout.getAnimation();
        }

        nav.setDetailContainer(main);
        nav.setDetailCard(view);

        if(! item.get('navAsync')){
        nav.goToNode(item.parentNode);
        nav.goToLeaf(item);
        nav.getActiveItem().select(item);
        }
        if (newAnim) {
            newAnim.on('animationend', function() {
                layout.setAnimation(initialAnim);
            }, this, { single: true });
        }

        this.getToolbar().setTitle(title);
//        this.getSourceButton().setHidden(false);

    },
    createMain: function(){
    	var  main = this.getMain();
    	if (!main) {
			console.log('Main NavigationView n existait pas');
			this.loadConsultations();
			main = Ext
					.create('transparence.view.Viewport');
			Ext.Viewport.add(main);
			main.show();
		}
    	return main;
    
    },
    loadConsultations : function(){
    	var nav = this.getNav(),
        parentNode = nav.getStore().getNodeById(this.getConsultViewId()),     	
        consultations = Ext.getStore('Consultations');
        consultations.load();
    	console.log('consultations', consultations);
   	    consultations.each(function (item, index, length) {
   	    	console.log(item.get('text'), index);
   	    	parentNode.insertChild(0,item);
   	    });
    },
    resetConsultations: function(){
    	var nav = this.getNav(),
        parentNode = nav.getStore().getNodeById(this.getConsultViewId()),     	
       	consultations = Ext.getStore('Consultations');
    	consultations.removeAll();
    	consultations.sync();
	    parentNode.removeAll();
    
    }

});