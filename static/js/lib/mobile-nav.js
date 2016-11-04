'use strict';

$(document).ready(function () {
	var hamburger = function () {

		var openButton = $('#menu-icon-open');
		var overlay = $('div.overlay-screen');
		var closeButton = $('#menu-icon-close');
		var openClass = 'open';
		var closeClass = 'close';

		function init() {
			bindUIEvents();
		}

		function bindUIEvents() {
			openButton.on('click', function (event) {
				openOverlay(overlay, openClass);
			});
			closeButton.on('click', function (event) {
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
	}();

	hamburger.init();
});