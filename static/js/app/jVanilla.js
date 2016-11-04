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

	return {
		hasClass: hasClass,
		outerWidth: outerWidth
	};
}

export { V };