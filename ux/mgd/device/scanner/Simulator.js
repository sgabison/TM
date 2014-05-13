/**
 * @private
 */
Ext.define('Ext.ux.mgd.device.scanner.Simulator', {
	extend: 'Ext.ux.mgd.device.scanner.Abstract',

	config: {
		samples: [
			{
				text: '3400931585756', // Buch
				format: 'CODE_128',
				cancelled: false,
				success: '200'
			},
			{
				text: '2343012600087300', // Buch
				format: 'CODE_128',
				cancelled: false,
				success: '200'
			},{
				text: '4323315300019500', // Buch
				format: 'CODE_128',
				cancelled: false,
				success: '200'
			},
//			
//			{
//				text: 'http://transparence-medicale.fr/forms/view.php?id=12015', // Buch
//				format: 'QR_CODE',
//				cancelled: false,
//				success: '200'
//			},
//			{error: '400'}
		]
	},

	constructor: function (config) {
		this.initConfig(config);
	},

	getScan: function (onSuccess, onError) {
		var samples = this.getSamples(),
			samplesCount = samples.length,
			sample = samples[Math.floor((Math.random() * samplesCount - 1) + 1)];

		if ('success' in sample) {
			onSuccess(sample);
		}
		else {
			onError(sample);
		}
	},

	scan: function (args) {
		var onSuccess = args.success,
			onError = args.failure,
			scope = args.scope;

		if (onSuccess == Ext.emptyFn)
			onSuccess = this.callback.onSuccess;
		if (onError == Ext.emptyFn)
			onError = this.callback.onError;

		if (scope) {
			onSuccess = Ext.Function.bind(onSuccess, scope);
			onError = Ext.Function.bind(onError, scope);
		}

		this.getScan(onSuccess, onError);
	}
});