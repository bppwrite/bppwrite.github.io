$(document).ready(function() {
	let slider = (function() {

		let sliderDiv = $('#slider');
		let allSlides = $('.slide');
		let sliderNavLeft = $('#control-left');
		let sliderNavRight = $('#control-right');
		let sliderNavDown = $('#control-down');
		let autoTimer;
		let autoTiming = 4000;
		let scrollTiming = 1000;
		let slideWidth = getWidth(document.getElementById('slide-0'));
		let activeIndex = 0;

		function init() {
			bindUIEvents();
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
				navClickedLeft(event);
			});
			sliderNavDown.on('click', function(event) {
				navClickedDown(event);
			});
			sliderNavRight.on('click', function(event) {
				navClickedRight(event);
			});
		}

		function moveSlidePosition(event) {
			// 6 and 100 are 'magic' numbers
			allSlides.css({
				'background-position': $(event.target).scrollLeft()/6-100 + 'px 0'
			});
		}

		function autoMove() {
			let activeNext = calculateNext(activeIndex);
			sliderDiv.animate({
				scrollLeft: activeNext * slideWidth
			}, scrollTiming);
			activeIndex = activeNext;
		}

		function calculateNext(current) {
			let next = 0;
			if (current === 0) {
				next = 1;
			} else if (current === 1) {
				next = 2;
			} else {
				next = 0;
			}
			return next;
		}

		function calculatePrevious(current) {
			let next = 0;
			if (current === 0) {
				next = 2;
			} else if (current === 1) {
				next = 0;
			} else {
				next = 1;
			}
			return next;
		}

		function navClickedRight(event) {
			event.preventDefault();
			window.clearInterval(autoTimer);
			let activeNext = calculateNext(activeIndex);
			sliderDiv.animate({
				scrollLeft: activeNext * slideWidth
			}, scrollTiming);
			activeIndex = activeNext;
			setTimer();
		}

		function navClickedLeft(event) {
			event.preventDefault();
			window.clearInterval(autoTimer);
			let activeNext = calculatePrevious(activeIndex);
			sliderDiv.animate({
				scrollLeft: activeNext * slideWidth
			}, scrollTiming);
			activeIndex = activeNext;
			setTimer();
		}

		function navClickedDown(event) {
			let y = $(window).scrollTop();
			event.preventDefault();
			window.clearInterval(autoTimer);
			$('html, body').animate({
				scrollTop: y + $(window).height()
			}, scrollTiming);
			setTimer();
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
