if (_$('p.download a', function (x){ return x.textContent; }) == 'DOWNLOAD'){
  _$('.spec > div', function (x) { x.style.width = '60%'; });
  _$('.spec > div:last-child', function (x) { x.style.width = '40%'; });
  _$each('.__cmspecial', function (x){ x.parentNode.removeChild(x); });
  _$('p.download a', function (x) {
    if (x.href.indexOf('racedepartment.com') !== -1) return;
    var c = x.cloneNode();
    c.classList.add('__cmspecial');
    c.removeAttribute('target');
    c.setAttribute('href', 'acmanager://install?url=' + encodeURIComponent(x.href));
    c.textContent = 'INSTALL';
    c.setAttribute('style',
        'color: rgb(100, 166, 112); padding: 0px 0px 6px 40px; line-height: 33px; margin: 2px 0px 2px 12px;' +
        'background: url(' + JSON.stringify(_$res('img/icon-acclub.png')) + ') left center / contain no-repeat;' +
        'display: inline-block;');
    x.parentNode.insertBefore(c, x.nextSibling);
  });
} 
