// ==UserScript==
// @name         AC Content Manager Installation Buttons
// @namespace    http://tampermonkey.net/
// @homepageURL  https://github.com/gro-ove/actools-cm-download-extension
// @version      0.2.1.1
// @description  Adds Content Manager support to a bunch of AC content websites, such as RaceDepartment, AC Club or Assetto-DB.
// @author       x4fab
// @match        http://assettocorsa.club/*
// @match        http://www.racedepartment.com/*
// @match        http://racedepartment.com/*
// @match        http://www.assetto-db.com/*
// @match        http://assetto-db.com/*
// @grant        none
// @license      MIT License
// @run-at       document-end
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF/wAAzAAAmf8AmQAAZv8AZswAZpkAZmZmZjMzM5kAM2YzM2YAMzMzMzMAAAAAXl5e7+St3wAAABB0Uk5T////////////////////AOAjXRkAAAHSSURBVHjatNfZsoMgDIBhcGkUI7z/2x5Ay2ZiqM7hppNO/89ujqjcy6X+B1gWeAWA1q8A0OoV4PtXQOjfALF/ARz9c+DsHwPf/imQ+odA7p8BRV8B0AmUvRqh97xQZK8xRYseu4Cmz8fXqgIAm0mJfQWAtc2kxL4EfGGbSYl9AYTCNpMS+wzEwjaTSq/j+gQchW0mJR0/AWdhm8kDQn8C38I2UwWQ/QGkwjZTCdB9BHJhm6kAmD4ARWGbKQO+ByD68Lwtk3pKQHjdOMo9B8RejXLPAEcfAaGngbMPwE2/xQVm2/YG+PYeAL7fpyGsyT+sNZB6tdy9/31K61MBuVf67vOzQO6rdfn+OMB19jzQ2fMfobPngc7+F4DsfwDongSQAi49IgdguLSB2J+nzxVARwBE7y7AmvoLQPUO4mm4ZmCOTxg4AC317jNMxBqmE8ByUb0zE72A2icSvYOZ7I0IYLoOUsIGTgAwX4h3rr8ASPQewPZrGFZg9spEH7ZC0Agf4wQAm70ZbGU/oxMAvOztYKV6DkBib2jy/wmdACC5t8S5/APcAcjsTU9hA3cPILu3DUL6AVkAb/bGXkg/IAfc9Q6MAeGmC7tvNf715vuH9SfAAHw2q5zSfJAiAAAAAElFTkSuQmCC
// ==/UserScript==

(function() {
function _$(selector, fn, p){
  var e = (p || document).querySelector(selector);
  return e ? fn(e) : undefined;
}

function _$each(selector, fn, p){ Array.prototype.forEach.call((p || document).querySelectorAll(selector), fn); }
function _$map(selector, fn, p){ return Array.prototype.map.call((p || document).querySelectorAll(selector), fn); }
function _$some(selector, fn, p){ return Array.prototype.some.call((p || document).querySelectorAll(selector), fn); }
function _$every(selector, fn, p){ return Array.prototype.every.call((p || document).querySelectorAll(selector), fn); }
function _$filter(selector, fn, p){ return Array.prototype.filter.call((p || document).querySelectorAll(selector), fn); }

// as a variable, it can be easily redefined later for userscript format
var _$res = function (url){ return browser.extension.getURL(url); };

_$res = function (url){
  if (url == 'img/icon-acclub.png') return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFmZmZZmZmMzMzAAAAgYGBlaSnFAAAAAV0Uk5T/////wD7tg5TAAABkElEQVR42qSXSwLDIAgFBbz/mVvjJ4CgQbN7qTOmVgxN+fJK9t2UrgRABDeCP38lKPyN4OEvBJU/FzT+WND5U8HgDwUvfyZg/JGA8ycCwTMBIHwSSP4V7Ooi2fyYVdcFgExdsOK5AFAkolb3S16sh0jUBWuerQeq1WmCDT+Qhyf5aRHs+I5UfiTqgi3fkMb3RF2QcMdXpPMtkSOw+AcZfE3kCEy+IC//JHIEmJy6YHxJ5AjQqwvO/xM5AsyIYO4rsUwyMcGf1yv03v8gqONg5tXv7AnaPLDlHUF/TtjytmB8zz1vCvQ6rXhLEOInwX+XpQg/C3JofvMJQrwhiPGzAGP8N8GC/yRY8bI20RRoHlGcWTIZglX9lQNDplkw8++Q58CRaRIY/BhSDyyZtMDi+5B2ZstUdiK/wOAb0s98mXSjafH15nhnyKQFZqODnFDJ61TFex05oZISJLPRQk5kwa/WwOv0ZPIFcNbuY7RV9QTHfzgwyDuC77wtCPCmIMJbWznEz0+AMT6nfHldC34CDADQEDTb2F/V3AAAAABJRU5ErkJggg==';
  return '';
};

if (/^http:\/\/assettocorsa\.club\/.*/i.test(location.href)){
if (_$('p.download a', function (x){ return x.textContent; }) == 'DOWNLOAD'){
  _$('.spec > div', function (x) { x.style.width = '60%'; });
  _$('.spec > div:last-child', function (x) { x.style.width = '40%'; });
  _$each('.__cmspecial', function (x){ x.parentNode.removeChild(x); });
  _$('p.download a', function (x) {
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
} else if (/^http:\/\/www\.racedepartment\.com\/.*/i.test(location.href) || /^http:\/\/racedepartment\.com\/.*/i.test(location.href)){
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
} else if (/^http:\/\/www\.assetto-db\.com\/.*/i.test(location.href) || /^http:\/\/assetto-db\.com\/.*/i.test(location.href)){
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
}
})();
