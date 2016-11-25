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
		.map((item) => {
			return {
				src: item.baseURI,
				w: item.width,
				h: item.height
			};
		});
		console.log(items);
	return items;
}

export { PhotoGallery, ScrapeImageElements };

/*
// build items array
let items = [
	{
		src: 'https://placekitten.com/600/400',
		w: 600,
		h: 400
	},
	{
		src: 'https://placekitten.com/1200/900',
		w: 1200,
		h: 900
	}
];
*/
