$(document).ready(function() {
	let hamburger = (function() {

		let openButton = $('#menu-icon-open');
		let overlay = $('div.overlay-screen');
		let closeButton = $('#menu-icon-close');
		let openClass = 'open';
		let closeClass = 'close';

		function init() {
			bindUIEvents();
		}

		function bindUIEvents() {
			openButton.on('click', function(event) {
				openOverlay(overlay, openClass);
			});
			closeButton.on('click', function(event) {
				closeOverlay(overlay, closeClass, openClass);
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
