Ext.define('transparence.model.Menu', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id',          type: 'string'},
            {name: 'text',        type: 'string'},
            {name: 'source',      type: 'string'},
            {name: 'animation',   type: 'auto'},
            {name: 'limit',       type: 'auto'},
            {name: 'preventCache', type: 'boolean'},
            {name: 'view',        type: 'string'},
            {name: 'controller',  type: 'string'},
            {name: 'icon',        type: 'string'},
            {name: 'params',      type: 'auto'},
            {name: 'cis',    	  type: 'string'},
            {name:'leaf',		  type:'boolean'}
        ]
    },
    getModule: function(){
    	return this.get('source') ;
    },
    getViewName: function () {
        var name = this.get('view') || this.get('text'),
            ns = 'transparence.view.',
            module = ( this.getModule() )? this.getModule()+'.':'';
            return ns + module + name;
//        if (name == 'TouchEvents') {
//            if (this.getApplication().getCurrentProfile().getName() === 'Tablet') {
//                return ns + 'tablet.' + name;
//            } else {
//                return ns + 'phone.' + name;
//            }
//        } else {
//            return ns + name;
//        }

    },
    doAction : function () {
    	if(this.isAction()){
         var name = this.get('controller') ,
            controller = transparence.app.getController(name),
            actionName = this.getModule(); 

    		function action(){
    			 console.log("call action", controller, actionName)
    			 return controller[actionName]();
    		}
    		return action();
    	} else return false;
    },
    isMed:function(){
    	if(this.get('cis')>0) {return true;}else{return false;}
    },
    isAction:function(){
    	if( this.get('controller') ) {return true;}else{return false;}
    }
    
    
});
