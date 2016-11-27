import PhotoSwipe from '../jspm_packages/npm/photoswipe@4.1.1/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from '../jspm_packages/npm/photoswipe@4.1.1/dist/photoswipe-ui-default.min.js';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

export var PhotoGallery = function(psEl) {
	let items = scrapeImageElements();
	let imageEls = document.querySelectorAll('div.gallery img');
	let imgObserver = {
		next: (event) => {
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
		},
		error: (e) => { console.log(e); },
		complete: () => {}
	};
	let img$ = Observable.fromEvent(items, 'click')
		.subscribe(imgObserver);
	let options = {
		index: 0
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
