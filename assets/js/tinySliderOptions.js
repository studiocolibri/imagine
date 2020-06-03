var sliderControlsContainer = document.querySelector('.slider__controls');

var slider = tns({
	container: '.slider__list',
	items: 1,
	gutter: 10,
	arrowKeys: true,
	mouseDrag: true,
	controlsContainer: sliderControlsContainer,
	responsive: {
		480: {
			items: 2,
			gutter: 20
		},
		768: {
			items: 3
		},
		1280: {
			gutter: 40
		},
		1600: {
			items: 4
		}
	  }
});

var numeroSliderControlsContainer = document.querySelector('.slider__controls');

var numeroSlider = tns({
	container: '.numero-slider',
	items: 1,
	gutter: 10,
	arrowKeys: true,
	mouseDrag: true,
	controlsContainer: numeroSliderControlsContainer,
	responsive: {
		480: {
			gutter: 20
		},
		768: {
			items:2
		},
		1280: {
			gutter: 40
		},
		1600: {
			items: 3
		}
	  }
});