import $ from 'jquery';
import { V } from './jVanilla';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

function Slider() {
	let dollar = V();
	//slider references
	let firstSlide = document.querySelector('.slide');
	let sliderDiv = $('#slider');
	let holder = document.querySelector('.holder');
	// nav references
	let left = document.getElementById('control-left');
	let right = document.getElementById('control-right');
	let down = document.getElementById('control-down');
	// math references
	let autoTimer;
	let autoTiming = 9000;
	let scrollTiming = 555;
	let slideWidth;
	let activeIndex = 0;
	let slideCount = holder.querySelectorAll('.slide').length;
	let maxIndex = slideCount - 1;

	let downObserver = {
		next: () => {
			$('html, body').animate({
				scrollTop: $(window).height()
			}, scrollTiming);
		},
		error: (e) => { console.log(e); },
		complete: () => {}
	};

	let lrObserver = {
		next: (event) => {
			navClicked(event);
		},
		error: (e) => { console.log(e); },
		complete: () => {}
	};

	let windowObserver = {
		next: (event) => {
			window.clearInterval(autoTimer);
			slideWidth = dollar.outerWidth(holder.firstChild);
			sliderDiv.animate({
				scrollLeft: activeIndex * slideWidth
			}, 0);
			setTimer();
		},
		error: (e) => { console.log(e); },
		complete: () => {}
	};

	// called to initialize a slider
	function init() {
		randomize();
		styleWrite();
		bindUIEvents();
	}

	function randomize() {
		firstSlide.style.backgroundImage = `url('${getRandomReference(firstSlide)}')`;
	}

	function styleWrite() {
		holder.style.width = `${ slideCount * 100 }%`;
		slideWidth = dollar.outerWidth(holder.firstChild);
	}

	function bindUIEvents() {
		let left$ = Observable.fromEvent(left, 'click');
		let right$ = Observable.fromEvent(right, 'click');

		let down$ = Observable.fromEvent(down, 'click')
			.subscribe(downObserver);
		let lr$ = Observable.merge(left$, right$)
			.subscribe(lrObserver);
		// autotimer slides through a scroll
		setTimer();
		// set window resize handler
		let window$ = Observable.fromEvent(window, 'resize')
			.subscribe(windowObserver);
	}

	// event functions
	function navClicked(event) {
		let activeNext;
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

	function setTimer() {
		autoTimer = window.setInterval(autoMove, autoTiming);
	}

	function getRandomReference(slide) {
		let paths = JSON.parse(slide.dataset.heros);
		let randomNumber = getRandomInt(0, paths.length - 1);
		return paths[randomNumber];
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return {
		init: init
	};

}

export { Slider };
