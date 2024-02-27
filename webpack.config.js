const config = {
	mode: 'production',
	entry: {
		cornerPopup: './src/js/corner-popup.min.js',
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
