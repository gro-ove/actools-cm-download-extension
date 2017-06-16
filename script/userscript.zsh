//____ 2>/dev/null;cd ${0:h}/..;node script/${0:t} $@>dist/userscript.js;exit

var fs = require('fs');
var pkg = JSON.parse('' + fs.readFileSync('manifest.json'));

function regex(m){
  return `/^${m.replace(/(?=[./\\$^])/g, '\\').replace(/\*/g, '.*')}/i`
}

console.log(`// ==UserScript==
// @name         ${pkg.name}
// @namespace    http://tampermonkey.net/
// @homepageURL  https://github.com/gro-ove/actools-cm-download-extension
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       x4fab
${pkg.permissions.map(x => '// @match        ' + x).join('\n')}
// @grant        none
// @license      MIT License
// @run-at       document-end
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF/wAAzAAAmf8AmQAAZv8AZswAZpkAZmZmZjMzM5kAM2YzM2YAMzMzMzMAAAAAXl5e7+St3wAAABB0Uk5T////////////////////AOAjXRkAAAHSSURBVHjatNfZsoMgDIBhcGkUI7z/2x5Ay2ZiqM7hppNO/89ujqjcy6X+B1gWeAWA1q8A0OoV4PtXQOjfALF/ARz9c+DsHwPf/imQ+odA7p8BRV8B0AmUvRqh97xQZK8xRYseu4Cmz8fXqgIAm0mJfQWAtc2kxL4EfGGbSYl9AYTCNpMS+wzEwjaTSq/j+gQchW0mJR0/AWdhm8kDQn8C38I2UwWQ/QGkwjZTCdB9BHJhm6kAmD4ARWGbKQO+ByD68Lwtk3pKQHjdOMo9B8RejXLPAEcfAaGngbMPwE2/xQVm2/YG+PYeAL7fpyGsyT+sNZB6tdy9/31K61MBuVf67vOzQO6rdfn+OMB19jzQ2fMfobPngc7+F4DsfwDongSQAi49IgdguLSB2J+nzxVARwBE7y7AmvoLQPUO4mm4ZmCOTxg4AC317jNMxBqmE8ByUb0zE72A2icSvYOZ7I0IYLoOUsIGTgAwX4h3rr8ASPQewPZrGFZg9spEH7ZC0Agf4wQAm70ZbGU/oxMAvOztYKV6DkBib2jy/wmdACC5t8S5/APcAcjsTU9hA3cPILu3DUL6AVkAb/bGXkg/IAfc9Q6MAeGmC7tvNf715vuH9SfAAHw2q5zSfJAiAAAAAElFTkSuQmCC
// ==/UserScript==

(function() {
${fs.readFileSync('src/$.js')}

_$res = function (url){
  if (url == 'img/icon-acclub.png') return 'http://i.imgur.com/OZO6Cn0.png';
  return '';
};

${pkg.content_scripts.map(x => `if (${x.matches.map(x => regex(x) + '.test(location.href)').join(' || ')}){
${x.js.filter(f => f != 'src/$.js').map(f => ('' + fs.readFileSync(f)).trim()).join('\n')}
}`).join(' else ')}
})();`);
