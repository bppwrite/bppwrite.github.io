'use strict';

var _jVanilla = require('./jVanilla');

var _slider = require('./slider');

var hero = (0, _slider.Slider)();
var header = document.querySelector('header');
var dollar = (0, _jVanilla.V)();

if (dollar.hasClass(header, 'home')) {
	hero.init();
}