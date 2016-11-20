import { Facebook } from './app/facebook';
import { V } from './app/jVanilla';
import { Slider } from './app/slider';
import { SlideoutMenu } from './app/slideout-menu';

let slideoutMenu = SlideoutMenu();
let header = document.querySelector('header');
let dollar = V();

slideoutMenu.init();
slideoutMenu.hashFix();

if (dollar.hasClass(header, 'home')) {
	let hero = Slider();
	hero.init();
}

Facebook();
