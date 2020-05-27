var sliderControlsContainer = document.querySelector('.slider__controls');

var slider = tns({
	container: '.slider__list',
	items: 1,
	gutter: 10,
	arrowKeys: true,
	mouseDrag: false,
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
		1680: {
			items: 4
		}
	  }
});