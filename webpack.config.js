var webpack = require('webpack');


const config = {
	
	mode: 'production',
	entry: {
		cornerPopup: './src/js/jQueryPlugins/corner-popup.min.js',
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
	plugins:[
		// Подключаем jQuery, установленный через npm. Теперь не нужно будет импортировать jQuery в файлы где он будет использоваться. Он уже как бы там будет.
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		  })
	]
};



module.exports = config;
