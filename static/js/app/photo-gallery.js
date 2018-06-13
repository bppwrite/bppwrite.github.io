import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

function photoGallery(grid) {
  const msnry = new Masonry(grid, {
    itemSelector: '.photo-grid-item',
    columnWidth: '.photo-grid-sizer',
    percentPosition: true,
    gutter: 5
  });

  imagesLoaded(grid).on('progress', function(instance, image) {
    // layout Masonry after each image loads
    msnry.layout();
  });
}

export { photoGallery };
