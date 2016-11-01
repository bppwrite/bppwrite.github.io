import { V } from './jVanilla';
import { Slider } from './slider';

let hero = Slider();
let header = document.querySelector('header');
let dollar = V();

if (dollar.hasClass(header, 'home')) {
	hero.init();
}
