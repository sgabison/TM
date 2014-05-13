Ext.define('transparence.controller.Grid', {
			extend : 'Ext.app.Controller',

			config : {
				refs : {
					main : 'gridview'
				},

				control : {
					main : {
						push : 'onMainPush',
						pop : 'onMainPop'
					}
				}
			},
			onMainPush : function(view, item) {
			},

			onMainPop : function(view, item) {
			}
		});
