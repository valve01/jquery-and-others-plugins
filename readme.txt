- Не забыть конвертацию шрифтов включить обратно в gulp 

для деплоя выполнить команды:

что собрать билд для деплоя
npx gulp docs

задеплоить на GitHub Pages
npx gulp deployGhP


======================================================= Как подключать плагины ============================================================
Самое главное, что код jQuery должен быть самый первый, потому что он используется в дальнейшем. Далее должен быть код самого плагина, потому что он используется при попытке нами сделать что-то в дальнейшем в наших файлах. Потом только должен идти наш код.
1. Через npm. (На примере плагина vizzu)


- jQuery если нужен - тоже должен быть установлен через npm

npm i jquery

- Пишем команду

 npm install vizzu

- так файлы плагина скачаются в node_modules. Надо определить название папки в node_modules в которую скачался плагин (он может отличаться от того что мы писали в команде npm install vizzu). В нашем случае папка называется vizzu.
- Если в плагине есть css файлы - кладем их в папку src/scss/libs. (В общем их нужно тоже подключить к проекту в самом начале css файла)
- Но иногда в документации плагина просят импортировать стили прямо в JS. ПРЯМО В JS КАРЛ! в ТОТ ЖЕ ФАЙЛ ГДЕ БУДЕМ инициализировать плагин.

import '@toast-ui/chart/dist/toastui-chart.min.css';

- Создаем в (HTML) разметке элемент, который будет содержать то, что мы хотим отобразить с помощью плагина:

<html>
	<body>
  		<div id="myVizzu" style="width:800px; height:480px;"></div>
	</body>
</html>

- Наш элемент имеет id="myVizzu"
- В (JS) JS файле (у нас это vizzu.js), в котором мы будем инициализировать/настраивать/использовать плагин  сначала нужно добавить код jQuery.

import $ from 'jquery';


- Далее добавить код самого плагина. 

 import Vizzu from 'vizzu';

- Или по-старинке - через require. (как у tui)

const Chart = require('@toast-ui/chart');

 - Иногда приходится делать такой импорт 

 import * as zeu from 'zeu'
-или так
import ApexCharts from 'apexcharts'

 - Чтобы воспользоваться всем кодом плагина как классом


 (
// Create a Zeu TextMeter.
var textMeter = new zeu.TextMeter('text-meter');
// Update display and percentage value.
textMeter.displayValue = 'ZEU';
textMeter.value = 80;
)

 -Не забываем подключить этот файл в основной JS файл (в index.js например. Вот так import './modules/jQueryModules/vizzu';)
 - Мы записываем его в переменную Vizzu, т.к. будем вызывать этот код с ее помощью. Но может быть что код нужно просто добавить, не записывая его в переменные. Наример как slick-slider.
 
 import 'slick-slider'

  -В любом случае мы указываем ту самую папку в которую скачался плагин в node_modules. В нашем случае это 'vizzu' Причем указываем относительно содержимого папки node_modules (т.е. будто в ней находимся)

  - Дальше мы просто используем плагин в этом JS файле как указано в документации

  let data = {
    series: [{
        name: 'Foo',
        values: ['Alice', 'Bob', 'Ted']
    }, {
        name: 'Bar',
        values: [15, 32, 12]
    }, {
        name: 'Baz',
        values: [5, 3, 2]
    }]
};

let chart = new Vizzu('myVizzu', {
    data
});

chart.animate({
    x: 'Foo',
    y: 'Bar'
});

chart.animate({
    color: 'Foo',
    x: 'Baz',
    geometry: 'circle'
});


ПРИМЕЧАНИЯ:

Настроика вебпака (ProvidePlugin) для автоматического подключение плагинов.
Она просто избавляет вас от необходимости делать 

import $ from 'jQuery'

в каждом файле, где jQuery используется.

	plugins:[
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery',
		//   })
	]


Но. Если плагин подключается через <script> то и библиотеки, которые он использует нужно подключить через <script>. Пока не нашел способ подключить плагин через <script>, а библиотеку, нужную для него через npm.
====================================================================================================================

2. Через <script> </script> и скачанный дистрибутив. На примере zeu.

- Скачиваем файл плагина zeu.min.js и помещаем его в наш проект. У нас он лежит src/js/jQueryPlugins/zeu.min.js

- Настраиваем gulp (пример для dev.js) так, чтобы он просто брал файлы плагинов и копировал их в buil/js, а не пропускал их через webpack


function jsDev() {
	return (
		src('./src/js/*.js')
			.pipe(changed('./build/js'))
			.pipe(plumber(plumberConfig('JS')))
			// .pipe(babel())//выключен в dev режиме
			.pipe(webpack(require('./../webpack.config.js')))
			.pipe(dest('./build/js/'))

			.pipe(src('./src/js/**/*.min.js'))
			.pipe(changed('./build/js'))
			.pipe(plumber(plumberConfig('JS')))
			.pipe(dest('./build/js/'))
	);
}

- И просто подключаем их в HTML как обычно перед </body>

<script src="js/jQueryPlugins/zeu.min.js"></script>

- Дальше создаем в разметке (HTML) элемент куда поместим содержимое плагина

<canvas id="text-meter" width="200" height="100"></canvas>

- Используем плагин в JS согласно документации

  // Create a Zeu TextMeter.
  var textMeter = new zeu.TextMeter('text-meter');
  // Update display and percentage value.
  textMeter.displayValue = 'ZEU';
  textMeter.value = 50;

  ==================================================================================================
3. Через CDN 
- Просто подключаем файлы плагина в HTML как обычно перед </body>, (можно иногда и внутри <head>) указав путь к CDN серверу. 

<script src="https://cdn.jsdelivr.net/npm/zeu"></script>


- Дальше создаем в разметке (HTML) элемент куда поместим содержимое плагина

<canvas id="text-meter" width="200" height="100"></canvas>

-Иногда может понадобится Чтобы получить доступ к функции конструктора, импортировать модуль, 

/* namespace */
const Chart = toastui.Chart;

как для 
/* CommonJS in Node.js */ 
(const Chart = require('@toast-ui/chart');)
 или 
 /* ES6 in Node.js */ 
 (
import Chart from '@toast-ui/chart';
import { BarChart } from '@toast-ui/chart';
)

/* namespace */
const Chart = toastui.Chart;

- Далее Используем плагин в JS согласно документации

  // Create a Zeu TextMeter.
  var textMeter = new zeu.TextMeter('text-meter');
  // Update display and percentage value.
  textMeter.displayValue = 'ZEU';
  textMeter.value = 50;