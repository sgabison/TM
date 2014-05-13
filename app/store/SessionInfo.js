Ext.define('transparence.store.SessionInfo', {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage', 
    config: {
        model: 'transparence.model.SessionInfo',
        autoLoad: true,
          
        proxy: {
         type: 'localstorage',
         id  : 'myApplicationKey'
        }
    }
});