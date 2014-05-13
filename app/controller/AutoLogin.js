Ext.define(
				'transparence.controller.AutoLogin',
				{
					extend : 'Ext.app.Controller', // 'transparence.controller.Menu',
					requires : [ 'transparence.view.login.Login',
							'transparence.view.Viewport',
							'transparence.view.Rightmenu',
							'transparence.view.Titlebar' ],
					sessionId : null,
					

					config : {
						profile : Ext.os.deviceType.toLowerCase(),
						homeViewId : 'btn-accueil',
						loginViewId : 'btn-login',
						stores : [ 'SessionInfo' ],
						models : [ 'SessionInfo' ],

						refs : {
							myNavigationView : '#app_viewport',
							myLoginPanel : '#theLoginPanel',
							menu : 'rightmenu',
							logoutBtn : '#rightmenu-logout',
							loginBtn : 'login button[id=loginButton]',
							feedback : '#signInFailedLabel',
							loginFieldset : '#loginFieldset',
							nav:'#menuNestedList'
						},

						control : {
							loginBtn : {
								tap : 'onUserAuthentication'
							},
							logoutBtn : {
								logout : 'onUserLogout'
							}
						},
						textLogin : '',
						textLogout : ''
					},

					launch : function() {
						console.log('Launch for controller');
						var sessionInfo = Ext
								.create('transparence.store.SessionInfo');
						if (sessionInfo.getAt(0)) {
							if (null != sessionInfo.getAt(0).get('sessionId')) {
								// login auto sur le serveur avec le numero
								// sessionId-- test si session à renouveler.
								Ext.data.JsonP
										.request({
											url : 'http://transparence-medicale.fr/data/mobile/login',
											method : 'POST',
											params : {
												sessionId : sessionInfo
														.getAt(0).get(
																'sessionId')
											},
											reader : {
												type : 'json',
												successProperty : 'success',
												rootProperty : 'data',
												messageProperty : 'message'
											},
											scope : this,
											// method to call when the request
											// is successful
											success : this.onLoginSuccess,
											// method to call when the request
											// is a failure
											failure : this.showLoginForm
										});
							} else {
								this.showLoginForm();
							}
						} else {
							this.showLoginForm();
						}

					},

					onUserAuthentication : function(button) {
						var fieldset = this.getLoginFieldset();
						var username = fieldset.getComponent('username');
						var password = fieldset.getComponent('password');
						this.hideSignInFailedMessage();
						if (username.getValue() && password.getValue()) {

							button.setText('Veuillez patienter ...');
							button.setDisabled(true);

							Ext.data.JsonP
									.request({
										url : 'http://transparence-medicale.fr/data/mobile/login',
										params : {
											username : username.getValue(),
											password : password.getValue()
										},
										reader : {
											type : 'json',
											successProperty : 'success',
											rootProperty : 'data',
											messageProperty : 'message'
										},
										scope : this,
										// method to call when the request is
										// successful
										success : this.onLoginSuccess,
										// method to call when the request is a
										// failure
										failure : this.onLoginFailure
									});

							password.setValue('');

						} else {
							this.showSignInFailedMessage('Veuillez entrer un identifiant et/ou un mot de passe');
						}
					},

					onUserLogout : function() {
						var me = this;
						console.log('logout fired');
						this.sessionId = null;
						var sessionInfo = Ext.getStore('SessionInfo');
						sessionInfo.removeAt(0);
						sessionInfo.sync();
						this.showLoginForm();
					},

					onLoginFailure : function(err) {

						this.getLoginBtn().setText(this.textLogin);
						this.getLoginBtn().setDisabled(false);

						this.showSignInFailedMessage('Erreur de connexion au serveur \n'
										+ 'merci de réessayer ultérieurement');
					},

					onLoginSuccess : function(response, opts) {

						if (response.success) {
							this.successfulLogin(response.data.sessionId);
						} else {
 							this.showLoginForm();
 							this.getLoginBtn().setText(this.textLogin);
 							this.getLoginBtn().setDisabled(false);
							this.showSignInFailedMessage('L identification a échoué :'
											+ response.message);
						}
					},

					successfulLogin : function(sessionId) {

						this.sessionId = sessionId;
						console.log('successfulLogin');
						var sessionInfo = Ext.getStore('SessionInfo');
						sessionInfo.removeAll();
						sessionInfo.sync();
						var newRecord = new transparence.model.SessionInfo({
							sessionId : this.sessionId
						});
						sessionInfo.add(newRecord);
						sessionInfo.sync();

						this.showMainNav();
					},

					showLoginForm : function() {
						console.log('showLoginForm');

						Ext.Viewport.setMasked(false);
						this.showViewById(this.getLoginViewId());
//						if (this.getMyNavigationView()) {
//							console.log("le Navigationpanel existait");
//							Ext.Viewport.remove(this.getMyNavigationView());
//						}
//
//						if (!this.getMyLoginPanel()) {
//							loginPanel = Ext
//									.create('transparence.view.login.Login');
//							Ext.Viewport.add(loginPanel);
//							loginPanel.show();
//							this.textLogin = this.getLoginBtn().getText();
//						} else {
//							this.getMyLoginPanel().show();
//						}
					},

					showMainNav : function() {

						console.log('showMainNav');
						Ext.Viewport.setMasked(false);
						this.showViewById(this.getHomeViewId());
//						this.getMyMask().setHidden(true);
//						if (this.getMyLoginPanel()) {
//							Ext.Viewport.remove(this.getMyLoginPanel());
//							console.log("le loginpanel existait");
//							// Ext.Viewport.hide( this.getMyLoginPanel() );
//						}
//
//						if (!this.getMyNavigationView()) {
//							console.log('getMyNavigationView n existait pas');
//							maininitial = Ext
//									.create('transparence.view.Viewport');
//
//							Ext.Viewport.add(maininitial);
//							maininitial.show();
//
//						} else {
//							this.getMyNavigationView().show();
//
//						}

					},

					init : function() {
						console.log('Controller login initialized');
					},
					showSignInFailedMessage : function(message) {
						var label = this.getFeedback();
						label.setHtml(message);
						label.show();
					},
					hideSignInFailedMessage : function() {

						var label = this.getFeedback();
						label.setHtml('');
						label.hide();
					},
				    showViewById: function (id) {
				    	console.log("showViewById Autologin",id);
				        var nav = this.getNav(),
				            view = nav.getStore().getNodeById(id);
				        	nav.fireEvent('navTap', nav, view);
				    }

				});