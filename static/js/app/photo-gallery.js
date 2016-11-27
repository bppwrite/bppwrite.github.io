import PhotoSwipe from '../jspm_packages/npm/photoswipe@4.1.1/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from '../jspm_packages/npm/photoswipe@4.1.1/dist/photoswipe-ui-default.min.js';
import { Observable } from 'rxjs/Observable';
import { V } from './jVanilla';
import './rxjs-operators';

export var PhotoGallery = function(psEl) {
	let dollar = V();
	// photoswipe settings
	let items = scrapeImageElements();
	let options = {
		index: 0
	};
	// dom references
	let imageEls = document.querySelectorAll('div.gallery img');
	let topBar = document.querySelector('.pswp__top-bar');
	let arrowLeft = document.querySelector('.pswp__button--arrow--left');
	let arrowRight = document.querySelector('.pswp__button--arrow--right');
	// rxjs
	let img$ = Observable.fromEvent(items, 'click')
		.subscribe(imgObserver);
	let imgObserver = {
		next: (event) => {
			topBar.style.top = `${dollar.getPageScroll()}px`;
			arrowLeft.style.top = `${dollar.getPageScroll() + dollar.height()/2}px`;
			arrowRight.style.top = `${dollar.getPageScroll() + dollar.height()/2}px`;
			options.index = [].slice.call(imageEls).findIndex(
				(el) => {
					return event.srcElement.alt === el.alt;
				}
			);
			if (options.index === -1) {
				options.index = 0;
			}
			// Initializes and opens PhotoSwipe
			let gallery = new PhotoSwipe(psEl, PhotoSwipeUI_Default, items, options);
			gallery.init();
			gallery.listen('resize', () => {
				topBar.style.top = dollar.getPageScroll();
				arrowLeft.style.top = `${dollar.getPageScroll() + dollar.height()/2}px`;
				arrowRight.style.top = `${dollar.getPageScroll() + dollar.height()/2}px`;
			});
		},
		error: (e) => { console.log(e); },
		complete: () => {}
	};

	imageEls.forEach((i) => {
		Observable.fromEvent(i, 'click')
			.subscribe(imgObserver);
	});

	function scrapeImageElements() {
		let items;
		let divGallery = document.querySelector('div.gallery');
		items = [].slice.call(document.images)
			.filter((item) => {
				return item.parentElement === divGallery;
			})
			.filter((item) => {
				return item.alt !== '.DS_Store';
			})
			.map(
				(item) => {
					return {
						src: item.getAttribute('src'),
						w: parseInt(item.width),
						h: parseInt(item.height)
					};
				});
		return items;
	}

};
