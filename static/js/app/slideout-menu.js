import Slideout from 'slideout';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

function SlideoutMenu(dollar) {
  // initialize slideout menu
  const slideoutConfig = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'side': 'right',
    'fx': 'ease-in',
    'duration': 400,
    'tolerance': 70
  });

  dollar.removeClass(document.querySelector('nav#menu'), 'init-hide-menu');

  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideoutConfig.toggle();
  });

  // force close on window scroll
  const panel = document.getElementById('panel');
  const scroll$ = Observable.fromEvent(window, 'scroll')
		.filter((event) => { return slideoutConfig.isOpen(); })
    .subscribe(() => {
      slideoutConfig.close();
    });

}

export { SlideoutMenu };
