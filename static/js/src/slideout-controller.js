$(document).ready(function() {
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'side': 'right',
		'fx': 'ease-in',
		'duration': 400,
		'tolerance': 70
	});

	// Toggle button
	document.querySelector('.toggle-button').addEventListener('click', function() {
		slideout.toggle();
	});

	slideout.on('beforeopen', function() {
		document.querySelector('.abs').classList.add('abs-open');
	});

	slideout.on('beforeclose', function() {
		document.querySelector('.abs').classList.remove('abs-open');
	});

});
