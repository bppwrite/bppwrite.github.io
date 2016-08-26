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
		let autoTiming = 3000;
		let scrollTiming = 1000;
		let slideWidth = getWidth(document.getElementById('slide-0'));

		function init() {
			bindUIEvents();
		}

		function bindUIEvents() {
			// user manually scrolls over picture
			sliderDiv.on('scroll', function(event) {
				moveSlidePosition(event);
			});
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

		function handleNavClick(event, el, i) {
			event.preventDefault();
			changeActiveNav(el);
			sliderDiv.animate({
				scrollLeft: i * slideWidth
			}, scrollTiming);
		}

		function changeActiveNav(el) {
			sliderNavLinks.forEach(function(link) {
				link.removeAttribute('class');
			});
			el.setAttribute('class', 'active');
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
