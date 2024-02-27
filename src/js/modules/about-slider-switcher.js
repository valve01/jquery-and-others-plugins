function sliderSwitcher() {
	const insideBtnEl = document.querySelector('.aboutUs__inside-btn');
	const outsideBtnEl = document.querySelector('.aboutUs__outside-btn');

	const insideSlider = document.querySelector('.aboutUs__slider-inside-container');
	const outsideSlider = document.querySelector('.aboutUs__slider-outside-container');



	insideBtnEl.addEventListener('click', () => {
// включает вибрацию как в звездных войнах при нажатии на кнопку "внутри"
		navigator.vibrate([
			500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500,
		]);
		// Конец вибрации
		outsideSlider.classList.add('aboutUs-slider-hidden');
		insideSlider.classList.remove('aboutUs-slider-hidden');
		outsideBtnEl.classList.remove('aboutUs__switcher-btn--active');
		insideBtnEl.classList.add('aboutUs__switcher-btn--active');
	});

	outsideBtnEl.addEventListener('click', () => {
		insideSlider.classList.add('aboutUs-slider-hidden');
		outsideSlider.classList.remove('aboutUs-slider-hidden');
		insideBtnEl.classList.remove('aboutUs__switcher-btn--active');
		outsideBtnEl.classList.add('aboutUs__switcher-btn--active');
	});
}
export default sliderSwitcher;
