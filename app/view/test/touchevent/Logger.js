Ext.define(
				'transparence.view.test.touchevent.Logger',
				{
					extend : 'Ext.Container',
					xtype : 'toucheventlogger',

					config : {
						flex : 1,
						margin : 10,
						layout : {
							type : 'vbox',
							pack : 'center',
							align : 'stretch'
						},
						items : [ {
							id : 'logger',
							html : '<span>Try using gestures on the area to the right to see how events are fired.</span>',
							scrollable : true,
							styleHtmlContent : true
						} ]
					}
				});