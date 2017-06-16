_$each('.__cmspecial', function (x){ x.parentNode.removeChild(x); });
_$('.carDetails a[href^="/"][href$="/download"]', function (x) {
  var c = x.cloneNode();
  c.classList.add('__cmspecial');
  c.removeAttribute('target');
  c.setAttribute('href', 'acmanager://install?url=' + encodeURIComponent(location.href));
  c.textContent = 'Install using Content Manager';

  // with hue filter, hover/active colors are already there, and also it won’t look weird
  // in case of sudden redesign
  c.setAttribute('style', 'filter:hue-rotate(-120deg);-webkit-filter:hue-rotate(-120deg)');
  c.classList.remove('btn-default');
  c.classList.add('btn-primary');
  x.parentNode.insertBefore(c, x.nextSibling);
});
