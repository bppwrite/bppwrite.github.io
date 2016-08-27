$(document).ready(function() {
	let slider = (function() {

		let sliderDiv = $('#slider');
		let allSlides = $(".slide");
		let sliderNav = document.getElementById('slider-nav');
		let sliderNavLinks = [
			sliderNav.querySelector('a[href="#slide-0"]'),
			sliderNav.querySelector('a[href="#slide-1"]'),
			sliderNav.querySelector('a[href="#slide-2"]')
		];
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
			autoTimer = window.setInterval(autoMove, autoTiming);
			// user clicks slider nav
			sliderNavLinks.forEach(function(link, i) {
				link.addEventListener('click', function(event) {
					handleNavClick(event, this, i);
				});
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
			changeActiveNavAuto(activeIndex);
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

		function handleNavClick(event, el, i) {
			event.preventDefault();
			changeActiveNavClick(el);
			sliderDiv.animate({
				scrollLeft: i * slideWidth
			}, scrollTiming);
		}

		function changeActiveNavClick(el) {
			sliderNavLinks.forEach(function(link) {
				link.removeAttribute('class');
			});
			el.setAttribute('class', 'active');
		}

		function changeActiveNavAuto(index) {
			sliderNavLinks.forEach(function(link) {
				link.removeAttribute('class');
			});
			sliderNavLinks[index].setAttribute('class', 'active');
		}

		function getWidth(el) {
			let width = el.offsetWidth;
			let style = getComputedStyle(el);

			width += parseInt(style.marginLeft) + parseInt(style.marginRight);

			return width;
		}

		return {
			init: init
		};
	})();

	slider.init();
});
