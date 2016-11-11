import Slideout from 'slideout';

function SlideoutMenu() {

	function init() {
		let slideoutConfig = new Slideout({
			'panel': document.getElementById('panel'),
			'menu': document.getElementById('menu'),
			'padding': 256,
			'side': 'right',
			'fx': 'ease-in',
			'duration': 400,
			'tolerance': 70
		});

		document.querySelector('.toggle-button').addEventListener('click', function() {
			slideoutConfig.toggle();
		});
	}

	return {
		init: init
	};
}

export { SlideoutMenu };
