'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Slider = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _jVanilla = require('./jVanilla');

var _Observable = require('rxjs/Observable');

require('./rxjs-operators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Slider() {
	var dollar = (0, _jVanilla.V)();
	// declare variables
	//slider references
	// let allSlides = $('.slide');
	var sliderDiv = (0, _jquery2.default)('#slider');
	var holder = document.querySelector('.holder');
	// nav references
	var left = document.getElementById('control-left');
	var right = document.getElementById('control-right');
	var down = document.getElementById('control-down');
	// math references
	var autoTimer = void 0;
	var autoTiming = 9000;
	var scrollTiming = 1000;
	var slideWidth = void 0;
	var activeIndex = 0;
	var slideCount = holder.querySelectorAll('.slide').length;
	var maxIndex = slideCount - 1;

	var downObserver = {
		next: function next() {
			(0, _jquery2.default)('html, body').animate({
				scrollTop: (0, _jquery2.default)(window).height()
			}, scrollTiming);
		},
		error: function error(e) {
			console.log(e);
		},
		complete: function complete() {}
	};

	var lrObserver = {
		next: function next(event) {
			navClicked(event);
		},
		error: function error(e) {
			console.log(e);
		},
		complete: function complete() {}
	};

	var windowObserver = {
		next: function next(event) {
			window.clearInterval(autoTimer);
			slideWidth = dollar.outerWidth(holder.firstChild);
			sliderDiv.animate({
				scrollLeft: activeIndex * slideWidth
			}, 0);
			setTimer();
		},
		error: function error(e) {
			console.log(e);
		},
		complete: function complete() {}
	};

	// called to initialize a slider
	function init() {
		styleWrite();
		bindUIEvents();
	}

	function styleWrite() {
		holder.style.width = slideCount * 100 + '%';
		slideWidth = dollar.outerWidth(holder.firstChild);
	}

	function bindUIEvents() {
		var left$ = _Observable.Observable.fromEvent(left, 'click');
		var right$ = _Observable.Observable.fromEvent(right, 'click');

		var down$ = _Observable.Observable.fromEvent(down, 'click').subscribe(downObserver);
		var lr$ = _Observable.Observable.merge(left$, right$).subscribe(lrObserver);
		// autotimer slides through a scroll
		setTimer();
		// set window resize handler
		var window$ = _Observable.Observable.fromEvent(window, 'resize').subscribe(windowObserver);
	}

	// event functions
	function navClicked(event) {
		var activeNext = void 0;
		event.preventDefault();
		window.clearInterval(autoTimer);
		activeNext = calculateNext(activeIndex, maxIndex, event.target.id);
		sliderDiv.animate({
			scrollLeft: activeNext * slideWidth
		}, scrollTiming);
		activeIndex = activeNext;
		setTimer();
	}

	// utility functions
	function autoMove() {
		var activeNext = calculateNext(activeIndex, maxIndex, 'control-right');
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

	function setTimer() {
		autoTimer = window.setInterval(autoMove, autoTiming);
	}

	return {
		init: init
	};
}

exports.Slider = Slider;