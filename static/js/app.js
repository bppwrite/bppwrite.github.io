import { Facebook } from './app/facebook';
import { PhotoGallery, ScrapeImageElements }	from './app/photo-gallery';
import { V } from './app/jVanilla';
import { Slider } from './app/slider';
import { SlideoutMenu } from './app/slideout-menu';

let slideoutMenu = SlideoutMenu();
let header = document.querySelector('header');
let dollar = V();
let fbShare = document.getElementById('fb_share_button');
let pswpElement = document.querySelectorAll('.pswp')[0];

slideoutMenu.init();
slideoutMenu.hashFix();

if (dollar.hasClass(header, 'home')) {
	let hero = Slider();
	hero.init();
}

if (fbShare) {
	Facebook(fbShare);
}

if (pswpElement) {
	let images = ScrapeImageElements();
	PhotoGallery(pswpElement, images);
}
