$(document).ready(function() {
	let hamburger = (function() {

		let body = $(document.body);
		let openButton = $('#menu-icon-open');
		let overlay = $('div.overlay-screen');
		let closeButton = $('#menu-icon-close');
		let openClass = 'open';
		let closeClass = 'close';
		let noScroll = 'no-scroll';

		function init() {
			bindUIEvents();
		}

		function bindUIEvents() {
			openButton.on('click', function(event) {
				openOverlay(overlay, openClass);
				body.addClass(noScroll);
			});
			closeButton.on('click', function(event) {
				closeOverlay(overlay, closeClass, openClass);
				body.removeClass(noScroll);
			});
		}

		function openOverlay(element, style) {
			element.addClass(style);
		}

		function closeOverlay(element, transient, stable) {
			element.addClass(transient);
			element.removeClass(transient);
			element.removeClass(stable);
		}

		return {
			init: init
		};

	})();

	hamburger.init();

});
