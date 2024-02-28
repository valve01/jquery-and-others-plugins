const config = {
	mode: 'production',
	entry: {
		zeu: './src/js/jQueryPlugins/zeu.min.js',
		cornerPopup: './src/js/jQueryPlugins/corner-popup.min.js',
		// uPlot: './src/js/jQueryPlugins/uPlot.iife.min.js',
		
		index: './src/js/index.js',
		notIndex: './src/js/notIndex.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
