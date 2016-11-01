'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function V() {

	function hasClass(el, className) {
		if (el.classList) {
			return el.classList.contains(className);
		} else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}

	function outerWidth(el) {
		var width = el.offsetWidth;
		var style = getComputedStyle(el);
		width += parseInt(style.marginLeft) + parseInt(style.marginRight);
		return width;
	}

	return {
		hasClass: hasClass,
		outerWidth: outerWidth
	};
}

exports.V = V;