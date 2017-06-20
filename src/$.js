function _$(selector, fn, p){
  var e = (p || document).querySelector(selector);
  return fn ? e ? fn(e) : undefined : e;
}

function _$each(selector, fn, p){ Array.prototype.forEach.call((p || document).querySelectorAll(selector), fn); }
function _$map(selector, fn, p){ return Array.prototype.map.call((p || document).querySelectorAll(selector), fn); }
function _$some(selector, fn, p){ return Array.prototype.some.call((p || document).querySelectorAll(selector), fn); }
function _$every(selector, fn, p){ return Array.prototype.every.call((p || document).querySelectorAll(selector), fn); }
function _$filter(selector, fn, p){ return Array.prototype.filter.call((p || document).querySelectorAll(selector), fn); }

// custom CSS
function _$css(data, id){
  if (!id){ id = '__cm_extention_style'; }
  var s = document.getElementById('__cm_extention_style');
  if (s){ s.parentNode.removeChild(s); }
  s = document.body.appendChild(document.createElement('style'));
  s.id = '__cm_extention_style';
  if (s.styleSheet) {
    s.styleSheet.cssText = css;
  } else {
    s.appendChild(document.createTextNode(typeof data === 'function' ? ''.slice.call(data, 14, -3) : data));
  }
}

// as a variable, it can be easily redefined later for userscript format
var _$res = function (url){ return (typeof browser !== 'undefined' ? browser : chrome).extension.getURL(url); };