import $ from 'jquery';
import 'slick-slider';

$('.aboutUs__slider-inside').slick({
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

$('.aboutUs__slider-inside-mini').slick({
	// infinite: true,
	slidesToShow: 3,
	slidesToScroll: 2,
	asNavFor: '.aboutUs__slider-inside',
	focusOnSelect: true,
	arrows: false,
	mobileFirst: true,
	responsive: [

		{
			breakpoint: 599,
			settings: {
				arrows: false,
				slidesToShow: 4,
			},
		},

	],
});
