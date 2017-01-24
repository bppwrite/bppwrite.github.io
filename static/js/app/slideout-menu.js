import Slideout from 'slideout';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';
import { V } from './jVanilla';

function SlideoutMenu() {
  let slideoutConfig;
  let dollar = V();

  function init() {
    slideoutConfig = new Slideout({
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
  }

  function hashFix() {
    let panel = document.getElementById('panel');
    let scroll$ = Observable.fromEvent(window, 'scroll')
			.filter((event) => { return slideoutConfig.isOpen(); });
    let scrollObserver = {
      next: (x) => {
        slideoutConfig.close();
      },
      error: (e) => { console.log(e); },
      complete: () => {}
    };

    scroll$.subscribe(scrollObserver);
  }

  return {
    init: init,
    hashFix: hashFix
  };
}

export { SlideoutMenu };
