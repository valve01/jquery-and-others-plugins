// Для gulp

// Чтобы slick-slider работал нужно установить (npm i slick-slider jquery) и потом импортировать тут их из node_modules
// В $ мы засунули jquery и далее мы запускаем jquery с нашим классом слайдера в качестве аргумента
// Также нужно импотрировать/добавить в css все стили из библиотеки slick-slider. Они там в less/scss/css форматах.
// Мы их импортировали из node_modules, но можно и вручную в код добавить
// @import '../../../node_modules/slick-slider/slick/slick.scss';

// В html при этом никакие стили и js подключать вообще не надо

// prevArrow:'<button type="button" class="slick-prev"><img src="../img/sprite.svg#icons--prev-btn" alt="prev arrow"></button>',

import $ from 'jquery';
import 'slick-slider';

$('.header__slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button type="button" class="header__slider-prev header__slider-arrows"></button>',
	nextArrow: '<button type="button" class="header__slider-next header__slider-arrows"></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {},
		},
		{
			breakpoint: 600,
			settings: {
				arrows: false,
			},
		},
		{
			breakpoint: 360,
			settings: {
				arrows: false,
			},
		},
	],
});
