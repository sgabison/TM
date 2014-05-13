/**
 * Here we define a User model. An instance of this model will be used to load
 * data into our form panel. We will also update this form panel when you press
 * the submit button.
 */
Ext.define('transparence.model.User', {
	extend : 'Ext.data.Model',

	config : {
		fields : [ {
			name : 'name',
			type : 'string'
		}, {
			name : 'password',
			type : 'string'
		}, {
			name : 'disabled',
			type : 'string'
		}, {
			name : 'email',
			type : 'string'
		}, {
			name : 'bio',
			type : 'string'
		}, {
			name : 'url',
			type : 'string'
		}, {
			name : 'date',
			type : 'date'
		}, {
			name : 'number',
			type : 'integer'
		}, {
			name : 'height',
			type : 'integer'
		}, {
			name : 'enable',
			type : 'integer'
		}, {
			name : 'spinner',
			type : 'integer'
		}, {
			name : 'rank',
			type : 'string'
		}, {
			name : 'enable',
			type : 'boolean'
		}, {
			name : 'cool',
			type : 'boolean'
		}, {
			name : 'color',
			type : 'string'
		}, {
			name : 'team',
			type : 'string'
		}, {
			name : 'secret',
			type : 'boolean'
		}, {
			name : 'single_slider'
		}, {
			name : 'multiple_slider'
		} ]
	}
});