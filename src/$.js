function _$(selector, fn, p){
  var e = (p || document).querySelector(selector);
  return e ? fn(e) : undefined;
}

function _$each(selector, fn, p){ Array.prototype.forEach.call((p || document).querySelectorAll(selector), fn); }
function _$map(selector, fn, p){ return Array.prototype.map.call((p || document).querySelectorAll(selector), fn); }
function _$some(selector, fn, p){ return Array.prototype.some.call((p || document).querySelectorAll(selector), fn); }
function _$every(selector, fn, p){ return Array.prototype.every.call((p || document).querySelectorAll(selector), fn); }
function _$filter(selector, fn, p){ return Array.prototype.filter.call((p || document).querySelectorAll(selector), fn); }