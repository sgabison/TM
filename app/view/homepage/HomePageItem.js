Ext.define('transparence.view.homepage.HomePageItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button', 'Ext.Component'],
    xtype: 'homepageitem',

    config: {
        nameButton: true,
        baseCls: 'center-menu-data',
        dataMap: {
            getNameButton: {
//              setText: 'text',
                setTpl: '<img class="center-menu-image" src="{src}" title="{title}" alt="{text}">'
//	            data: [{
//	                title: 'title',
//	                text: 'text',
//	                role: 'role',
//	                src : "src"
//	            }]
            }
        } 
    },

	applyNameButton: function(config) {
    	console.log(config);
	    return Ext.factory(config, Ext.Component, this.getNameButton());
	},
	
	updateNameButton: function(newNameButton, oldNameButton) {
	    if (oldNameButton) {
	        this.remove(oldNameButton);
	    }
	
	    if (newNameButton) {
	        // add an event listeners for the `tap` event onto the new button, and tell it to call the onNameButtonTap method
	        // when it happens
	        newNameButton.on('tap', this.onNameButtonTap, this);
	
	        this.add(newNameButton);
	    }
	},
	
	onNameButtonTap: function(button, e) {
	    var record = this.getRecord();
	
	    Ext.Msg.alert(
	        record.get('text'), // the title of the alert
	        "The role is: " + record.get('role') // the message of the alert
	    );
	}
});
