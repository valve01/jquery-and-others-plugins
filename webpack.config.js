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
		// Этот код более приоритетен чем <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
		// Поэтому он перебивает его.
		// И плагины, которые подключатся не через npm не будут работать. Для таких плагинов обязательно подключени jQuery через <script> и отсутсвие (ProvidePlugin) кода ниже.

		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery',
		//   })

		// А вот те, что устанавливаются через npm (любой менеджер пакетов) прекрасно работают и там не нужен импорт jQuery.
	]
};



module.exports = config;
