import { Facebook } from './app/facebook';
import { V } from './app/jVanilla';
import { Slider } from './app/slider';
import { SlideoutMenu } from './app/slideout-menu';

const header = document.querySelector('header');
const dollar = V();
const fbShare = document.getElementById('fb_share_button');

SlideoutMenu(dollar);

if (dollar.hasClass(header, 'home')) {
  Slider(dollar);
}

if (fbShare) {
  Facebook(fbShare);
}
