import { V } from './jVanilla';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

function Slider() {
	let dollar = V();
	//slider references
	let firstSlide = document.querySelector('.slide');
	let sliderDiv = document.getElementById('slider');
	let arrayHolder = [].slice.call(sliderDiv.children);
	// nav references
	let left = document.getElementById('control-left');
	let right = document.getElementById('control-right');
	let down = document.getElementById('control-down');
	// math references
	let autoTimer;
	let autoTiming = 9000;
	let activeIndex = 0;
	let slideCount = sliderDiv.querySelectorAll('.slide').length;
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

	let lrEnterObserver = {
		next: (event) => { window.clearInterval(autoTimer); },
		error: (e) => { console.log(e); },
		complete: () => {}
	}

	let lrLeaveObserver = {
		next: (event) => { setTimer(); },
		error: (e) => { console.log(e); },
		complete: () => {}
	}

	let windowObserver = {
		next: (event) => {
			resetTimer();
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
		let leftEnter$ = Observable.fromEvent(left, 'mouseenter');
		let rightEnter$ = Observable.fromEvent(right, 'mouseenter');
		let leftLeave$ = Observable.fromEvent(left, 'mouseleave');
		let rightLeave$ = Observable.fromEvent(right, 'mouseleave');
		let down$ = Observable.fromEvent(down, 'click')
			.subscribe(downObserver);
		let lr$ = Observable.merge(left$, right$)
			.subscribe(lrObserver);
		let lrEnter$ = Observable.merge(leftEnter$, rightEnter$)
			.subscribe(lrEnterObserver);
		let lrLeave$ = Observable.merge(leftLeave$, rightLeave$)
			.subscribe(lrLeaveObserver);
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
		activeNext = calculateNext(activeIndex, maxIndex, event.target.id);
		dollar.removeClass(arrayHolder[activeIndex], 'show');
		dollar.addClass(arrayHolder[activeIndex], 'hide');
		dollar.addClass(arrayHolder[activeNext], 'show');
		dollar.removeClass(arrayHolder[activeNext], 'hide');
		activeIndex = activeNext;
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

	function resetTimer() {
		window.clearInterval(autoTimer);
		setTimer();
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
