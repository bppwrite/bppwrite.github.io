import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

function sponsorGrid(grid, itemSelector, columnWidth) {
  const msnry = new Masonry(grid, {
    itemSelector: '.local-grid-item',
    columnWidth: '.local-grid-sizer',
    percentPosition: true,
    gutter: 25
  });

  imagesLoaded(grid).on('progress', function(instance, image) {
    // layout Masonry after each image loads
    msnry.layout();
  });
}

export { sponsorGrid };
