$(document).ready(function() {
	let slider = (function() {



		// declare variables
		//slider references
		let allSlides = $('.slide');
		let sliderDiv = $('#slider');
		let holder = $('.holder');
		// nav references
		let sliderNavLeft = $('#control-left');
		let sliderNavRight = $('#control-right');
		let sliderNavDown = $('#control-down');
		// math references
		let autoTimer;
		let autoTiming = 7000;
		let scrollTiming = 1000;
		let slideWidth;
		let activeIndex = 0;
		let slideCount = $('.slide').length;
		let maxIndex = slideCount - 1;


		// called to initialize a slider
		function init() {
			styleWrite();
			bindUIEvents();
		}

		function styleWrite() {
			holder.css({
				'width': `${ slideCount * 100 }%`
			});
			allSlides.css({
				'width': `${ 100 / slideCount }%`
			});
			slideWidth = getWidth($('.slide').get(0));
		}

		function bindUIEvents() {
			// user manually scrolls over picture
			sliderDiv.on('scroll', function(event) {
				moveSlidePosition(event);
			});
			// autotimer slides through a scroll
			setTimer();
			// user clicks slider nav
			sliderNavLeft.on('click', function(event) {
				navClicked(event);
			});
			sliderNavDown.on('click', function(event) {
				navClicked(event);
			});
			sliderNavRight.on('click', function(event) {
				navClicked(event);
			});
			// set window resize handler
			$(window).on('resize', function(event) {
				resized(event);
			});
		}



		// event functions

		function moveSlidePosition(event) {
			// 6 and 100 are 'magic' numbers
			allSlides.css({
				'background-position': $(event.target).scrollLeft()/6-100 + 'px center'
			});
		}

		function navClicked(event) {
			let activeNext;
			event.preventDefault();
			window.clearInterval(autoTimer);
			if (event.target.id === 'control-down') {
				navClickedDown();
			} else {
				activeNext = calculateNext(activeIndex, maxIndex, event.target.id);
				sliderDiv.animate({
					scrollLeft: activeNext * slideWidth
				}, scrollTiming);
				activeIndex = activeNext;
			}
			setTimer();
		}

		function navClickedDown() {
			let y = $(window).scrollTop();
			$('html, body').animate({
				scrollTop: y + $(window).height()
			}, scrollTiming);
		}

		function resized(event) {
			window.clearInterval(autoTimer);
			slideWidth = getWidth($('.slide').get(0));
			sliderDiv.animate({
				scrollLeft: activeIndex * slideWidth
			}, 0);
			setTimer();
		}



		// utility functions

		function autoMove() {
			let activeNext = calculateNext(activeIndex, maxIndex, 'control-right');
			sliderDiv.animate({
				scrollLeft: activeNext * slideWidth
			}, scrollTiming);
			activeIndex = activeNext;
		}

		function calculateNext(current, max, id) {
			if (id === 'control-right') {
				if (current === max) {
					return 0;
				}
				return current + 1;
			} else {
				if (current === 0) {
					return max;
				}
				return current - 1;
			}
		}

		function getWidth(el) {
			let width = el.offsetWidth;
			let style = getComputedStyle(el);
			width += parseInt(style.marginLeft) + parseInt(style.marginRight);
			return width;
		}

		function setTimer() {
			autoTimer = window.setInterval(autoMove, autoTiming);
		}



		return {
			init: init
		};

	})();

	slider.init();

});
