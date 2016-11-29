import { V } from './jVanilla';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

function Slider() {
	let dollar = V();
	//slider references
	let firstSlide = document.querySelector('.slide');
	let sliderDiv = document.getElementById('slider');
	let holder = document.querySelector('.holder');
	let arrayHolder = [].slice.call(holder.children);
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

			dollar.smoothScroll(dollar.getPageScroll(), dollar.height());
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
			dollar.removeClass(holder.children[activeIndex], 'show');
			dollar.addClass(holder.children[activeNext], 'hide');
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
		arrayHolder.forEach(
			(child, i) => {
				if (i === 0) {
					dollar.addClass(arrayHolder[i], 'show');
				} else {
					dollar.addClass(arrayHolder[i], 'hide');
				}
			}
		);
	}

	function bindUIEvents() {
		// because requestAnimationFrame is used:
		dollar.requestAnimationFramePolyfill();
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
		dollar.removeClass(arrayHolder[activeIndex], 'show');
		dollar.addClass(arrayHolder[activeIndex], 'hide');
		dollar.addClass(arrayHolder[activeNext], 'show');
		dollar.removeClass(arrayHolder[activeNext], 'hide');
		activeIndex = activeNext;
		setTimer();
	}

	// utility functions
	function autoMove() {
		let activeNext = calculateNext(activeIndex, maxIndex, 'control-right');
		dollar.removeClass(arrayHolder[activeIndex], 'show');
		dollar.addClass(arrayHolder[activeIndex], 'hide');
		dollar.addClass(arrayHolder[activeNext], 'show');
		dollar.removeClass(arrayHolder[activeNext], 'hide');
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
