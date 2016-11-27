function V() {

	function hasClass(el, className) {
		if (el.classList) {
			return el.classList.contains(className);
		}
		else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}

	function outerWidth(el) {
		let width = el.offsetWidth;
		let style = getComputedStyle(el);
		width += parseInt(style.marginLeft) + parseInt(style.marginRight);
		return width;
	}

	function getPageScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	function width() {
		return document.documentElement.clientWidth;
	}

	function height() {
		return document.documentElement.clientHeight;
	}

	return {
		getPageScroll: getPageScroll,
		hasClass: hasClass,
		height: height,
		outerWidth: outerWidth,
		width: width
	};
}

export { V };
