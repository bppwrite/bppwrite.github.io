"use strict";$(document).ready(function(){var n=function(){var n=$(document.body);var t=$("#menu-icon-open");var o=$("div.overlay-screen");var r=$("#menu-icon-close");var e="open";var i="close";var c="no-scroll";function a(){l()}function l(){t.on("click",function(t){t.preventDefault();s(o,e);n.addClass(c)});r.on("click",function(t){t.preventDefault();u(o,i,e);n.removeClass(c)})}function s(n,t){n.addClass(t)}function u(n,t,o){n.addClass(t);n.removeClass(t);n.removeClass(o)}return{init:a}}();n.init()});"use strict";$(document).ready(function(){var n=function(){var n=$(".slide");var t=$("#slider");var o=$(".holder");var r=$("#control-left");var e=$("#control-right");var i=$("#control-down");var c=void 0;var a=7e3;var l=1e3;var s=void 0;var u=0;var f=$(".slide").length;var v=f-1;function d(){m();w()}function m(){o.css({width:f*100+"%"});n.css({width:100/f+"%"});s=I($(".slide").get(0))}function w(){t.on("scroll",function(n){g(n)});L();r.on("click",function(n){h(n)});i.on("click",function(n){h(n)});e.on("click",function(n){h(n)});$(window).on("resize",function(n){C(n)})}function g(t){n.css({"background-position":$(t.target).scrollLeft()/6-100+"px center"})}function h(n){var o=void 0;n.preventDefault();window.clearInterval(c);if(n.target.id==="control-down"){p()}else{o=y(u,v,n.target.id);t.animate({scrollLeft:o*s},l);u=o}L()}function p(){var n=$(window).scrollTop();$("html, body").animate({scrollTop:n+$(window).height()},l)}function C(n){window.clearInterval(c);s=I($(".slide").get(0));t.animate({scrollLeft:u*s},0);L()}function k(){var n=y(u,v,"control-right");t.animate({scrollLeft:n*s},l);u=n}function y(n,t,o){if(o==="control-right"){if(n===t){return 0}return n+1}else{if(n===0){return t}return n-1}}function I(n){var t=n.offsetWidth;var o=getComputedStyle(n);t+=parseInt(o.marginLeft)+parseInt(o.marginRight);return t}function L(){c=window.setInterval(k,a)}return{init:d}}();n.init()});