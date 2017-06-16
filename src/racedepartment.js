if (_$some('.crust [itemprop="title"]', function (x){ return x.textContent == 'Assetto Corsa'; })){
  _$each('.__cmspecial', function (x){ x.parentNode.removeChild(x); });
  _$('.resourceInfo .downloadButton', function (x){
    var p = x.parentNode;
    var c = p.cloneNode(true);
    c.classList.add('__cmspecial');
    c.setAttribute('style', 'filter:hue-rotate(-120deg);-webkit-filter:hue-rotate(-120deg)');

    _$('a', function (a){
      a.textContent = 'Install Using Content Manager';
      _$('.resourceInfo .downloadButton .minorText', function (x){ a.appendChild(x.cloneNode(true)); });
      a.setAttribute('href', 'acmanager://install?url=' + encodeURIComponent(location.href));
      a.removeAttribute('target');
    }, c);
    _$('.downloadDisabled', function (b) { b.classList.remove('downloadDisabled'); }, c);
    p.parentNode.insertBefore(c, p.nextSibling);
  });
}
