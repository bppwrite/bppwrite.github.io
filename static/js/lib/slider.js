'use strict';

$(document).ready(function () {
	var slider = function () {

		// declare variables
		//slider references
		var allSlides = $('.slide');
		var sliderDiv = $('#slider');
		var holder = $('.holder');
		// nav references
		var sliderNavLeft = $('#control-left');
		var sliderNavRight = $('#control-right');
		var sliderNavDown = $('#control-down');
		// math references
		var autoTimer = void 0;
		var autoTiming = 4000;
		var scrollTiming = 1000;
		var slideWidth = void 0;
		var activeIndex = 0;
		var slideCount = $('.slide').length;
		var maxIndex = slideCount - 1;

		function init() {
			styleWrite();
			bindUIEvents();
		}

		function styleWrite() {
			holder.css({
				'width': slideCount * 100 + '%'
			});
			allSlides.css({
				'width': 100 / slideCount + '%'
			});
			slideWidth = getWidth($('.slide').get(0));
		}

		function bindUIEvents() {
			// user manually scrolls over picture
			sliderDiv.on('scroll', function (event) {
				moveSlidePosition(event);
			});
			// autotimer slides through a scroll
			setTimer();
			// user clicks slider nav
			sliderNavLeft.on('click', function (event) {
				navClickedLeft(event);
			});
			sliderNavDown.on('click', function (event) {
				navClickedDown(event);
			});
			sliderNavRight.on('click', function (event) {
				navClickedRight(event);
			});
		}

		function moveSlidePosition(event) {
			// 6 and 100 are 'magic' numbers
			allSlides.css({
				'background-position': $(event.target).scrollLeft() / 6 - 100 + 'px center'
			});
		}

		function autoMove() {
			var activeNext = calculateNext(activeIndex, maxIndex);
			sliderDiv.animate({
				scrollLeft: activeNext * slideWidth
			}, scrollTiming);
			activeIndex = activeNext;
		}

		function calculateNext(current, max) {

			if (current === max) {
				return 0;
			}

			return current + 1;
		}

		function calculatePrevious(current, max) {

			if (current === 0) {
				return max;
			}

			return current - 1;
		}

		function navClickedRight(event) {
			event.preventDefault();
			window.clearInterval(autoTimer);
			var activeNext = calculateNext(activeIndex, maxIndex);
			sliderDiv.animate({
				scrollLeft: activeNext * slideWidth
			}, scrollTiming);
			activeIndex = activeNext;
			setTimer();
		}

		function navClickedLeft(event) {
			event.preventDefault();
			window.clearInterval(autoTimer);
			var activeNext = calculatePrevious(activeIndex, maxIndex);
			sliderDiv.animate({
				scrollLeft: activeNext * slideWidth
			}, scrollTiming);
			activeIndex = activeNext;
			setTimer();
		}

		function navClickedDown(event) {
			var y = $(window).scrollTop();
			event.preventDefault();
			window.clearInterval(autoTimer);
			$('html, body').animate({
				scrollTop: y + $(window).height()
			}, scrollTiming);
			setTimer();
		}

		function getWidth(el) {
			var width = el.offsetWidth;
			var style = getComputedStyle(el);

			width += parseInt(style.marginLeft) + parseInt(style.marginRight);

			return width;
		}

		function setTimer() {
			autoTimer = window.setInterval(autoMove, autoTiming);
		}

		return {
			init: init
		};
	}();

	slider.init();
});