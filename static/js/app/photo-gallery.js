import PhotoSwipe from '../jspm_packages/npm/photoswipe@4.1.1/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from '../jspm_packages/npm/photoswipe@4.1.1/dist/photoswipe-ui-default.min.js';

function PhotoGallery(psEl, items) {

	// define options (if needed)
	let options = {
		// optionName: 'option value'
		// for example:
		index: 0 // start at first slide
	};

	// Initializes and opens PhotoSwipe
	let gallery = new PhotoSwipe(psEl, PhotoSwipeUI_Default, items, options);
	gallery.init();
}

function ScrapeImageElements() {
	let items;
	let divGallery = document.querySelector('div.gallery');
	items = [].slice.call(document.images)
		.filter((item) => {
			return item.parentElement === divGallery;
		})
		.filter((item) => {
			return item.alt !== '.DS_Store';
		})
		.map((item) => {
			return {
				src: item.currentSrc,
				w: item.width,
				h: item.height
			};
		});
	return items;
}

export { PhotoGallery, ScrapeImageElements };
