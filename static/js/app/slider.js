import { Observable } from 'rxjs/Observable';
import './rxjs-operators';
import { createStore } from 'redux';

function Slider(dollar) {
  // VANILLA JAVASCRIPT
  //slider references
  const sliderDiv = document.getElementById('slider');
  const arrayHolder = [].slice.call(sliderDiv.children);
  // nav references
  const left = document.getElementById('control-left');
  const right = document.getElementById('control-right');
  const down = document.getElementById('control-down');
  // math references
  const autoTiming = 9000;
  let autoTimer = window.setInterval(() => { store.dispatch({ type: 'INCREMENT' }); }, autoTiming);
  const maxIndex = arrayHolder.length - 1;

  // REDUX
  // redux: reducer function
  const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        if (state < maxIndex) {
          return state + 1;
        } else {
          return 0;
        }
      case 'DECREMENT':
        if (state > 0) {
          return state - 1;
        } else {
          return maxIndex;
        }
      default:
        return state;
    }
  };

  // redux: create the store
  const store = createStore(counter);

  // redux: subscribe callback
  const render = () => {
    arrayHolder.forEach((child, i) => {
      if (i === store.getState()) {
        dollar.addClass(arrayHolder[i], 'show');
        dollar.removeClass(arrayHolder[i], 'hide');
      } else {
        dollar.addClass(arrayHolder[i], 'hide');
        dollar.removeClass(arrayHolder[i], 'show');
      }
    });
  };

  // RXJS
  // rxjs: standard button clicks
  const l$ = Observable.fromEvent(left, 'click')
    .subscribe(() => {
      store.dispatch({ type: 'DECREMENT' });
    });
  const r$ = Observable.fromEvent(right, 'click')
    .subscribe(() => {
      store.dispatch({ type: 'INCREMENT' });
    });
  const d$ = Observable.fromEvent(down, 'click')
    .subscribe(() => {
      dollar.smoothScroll(dollar.getPageScroll(), dollar.height());
    });
  // rxjs: mouse hovering over left/right buttons
  const lMouseEnter$ = Observable.fromEvent(left, 'mouseenter');
  const rMouseEnter$ = Observable.fromEvent(right, 'mouseenter');
  const lMouseLeave$ = Observable.fromEvent(left, 'mouseleave');
  const rMouseLeave$ = Observable.fromEvent(right, 'mouseleave');
  // rxjs: handle mouse hovering
  const lrMouseEnter$ = Observable.merge(lMouseEnter$, rMouseEnter$)
    .subscribe(() => {
      window.clearInterval(autoTimer);
    });
  const lrMouseLeave$ = Observable.merge(lMouseLeave$, rMouseLeave$)
    .subscribe(() => {
      autoTimer = window.setInterval(() => { store.dispatch({ type: 'INCREMENT' }); }, autoTiming);
    });
  // rxjs: handle window resize - reset timer every time window resized
  const window$ = Observable.fromEvent(window, 'resize')
    .subscribe(() => {
      window.clearInterval(autoTimer);
      autoTimer = window.setInterval(() => { store.dispatch({ type: 'INCREMENT' }); }, autoTiming);
    });

  // local helper functions
  const getRandomReference = (slide) => {
    const paths = JSON.parse(slide.dataset.heros);
    const randomNumber = getRandomInt(0, paths.length - 1);
    return paths[randomNumber];
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // init actions
  dollar.requestAnimationFramePolyfill();
  arrayHolder[0].style.backgroundImage = `url('${getRandomReference(arrayHolder[0])}')`;
  store.subscribe(render);
  render();

}

export { Slider };
