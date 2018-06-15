import './app/fontawesome-all.js';
import '../scss/main.scss';
import { Facebook } from './app/facebook';
import { V } from './app/jVanilla';
import { Slider } from './app/slider';
import { SlideoutMenu } from './app/slideout-menu';
import { photoGallery } from './app/photo-gallery';
import { sponsorGrid } from './app/sponsors';

const header = document.querySelector('header');
const dollar = V();
const fbShare = document.getElementById('fb_share_button');
const grid = document.querySelector('.photo-grid');
const localGrid = document.querySelector('.local-grid');

SlideoutMenu(dollar);

if (dollar.hasClass(header, 'home')) {
  Slider(dollar);
}

if (fbShare) {
  Facebook(fbShare);
}

if (grid) {
  photoGallery(grid);
}

if (localGrid) {
  sponsorGrid(localGrid, '.local-grid-item', '.local-grid-sizer');
}
