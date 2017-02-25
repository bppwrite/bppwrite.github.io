function V() {

  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className =
        el.className.replace(new RegExp('(^|\\b)' +
          className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }

  function outerWidth(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);
    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    return width;
  }

  function getPageScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  function width() {
    return document.documentElement.clientWidth;
  }

  function height() {
    return document.documentElement.clientHeight;
  }

  function requestAnimationFramePolyfill() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
        window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }

  function smoothScroll(startPos, endPos) {
    let requestID;
    let currentPos = startPos;
    requestID = requestAnimationFrame(animate);

    function animate() {
      requestID = requestAnimationFrame(animate);

      if (currentPos < endPos) {
        window.scrollTo(0, currentPos);
        currentPos += 15;
      } else {
        cancelAnimationFrame(requestID);
      }
    }
  }

  return {
    addClass: addClass,
    getPageScroll: getPageScroll,
    hasClass: hasClass,
    height: height,
    removeClass: removeClass,
    requestAnimationFramePolyfill: requestAnimationFramePolyfill,
    smoothScroll: smoothScroll,
    outerWidth: outerWidth,
    width: width
  };
}

export { V };
