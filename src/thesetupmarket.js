if (!_$('#__cm_stop')){
  // if you would need to stop CM, just add empty element with ID=__cm_stop somewhere

  var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver, 
      eventListenerSupported = window.addEventListener;
    return function(obj, callback){
      if (MutationObserver){
        var obs = new MutationObserver(function(mutations, observer){
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length){
            callback();
          }
        });

        obs.observe(obj, { childList: true, subtree: true });
      } else if (eventListenerSupported){
        obj.addEventListener('DOMNodeInserted', callback, false);
      }
    };
  })();

  observeDOM(document.body, function(){ 
    _$each('.icon-details.icon-link[href^="#/setups/Assetto Corsa/"]:not(.__cmspecial)', function (x){ 
      x.classList.add('__cmspecial');
      var c = x.cloneNode(true);
      x.parentNode.appendChild(c);
      c.setAttribute('href', 'acmanager://thesetupmarket/setup?id=' + (x.href.match(/\/([\w-]+)\/?$/) || {})[1]);
      c.setAttribute('style', 'color:transparent;background:url(' + JSON.stringify(_$res('img/icon-thesetupmarket-16.png')) + 
          ');background-repeat:no-repeat;background-position:center;');
    });

    _$each('.link.icon-download.fixed-download-link:not(.__cmspecial)', function (x){ 
      var i = setInterval(function (){
        var id = (x.href.match(/\/([\w-]+)\/?$/) || {})[1];
        if (id == null) return;
        clearInterval(i);

        x.classList.add('__cmspecial');
        var c = x.cloneNode(true);
        x.parentNode.appendChild(c);
        c.classList.remove('icon-download');
        c.textContent = 'install using CM';
        c.setAttribute('href', 'acmanager://thesetupmarket/setup?id=' + id);
        c.setAttribute('style', 'right:220px;filter:hue-rotate(-60deg);-webkit-filter:hue-rotate(-60deg)')
      }, 100);
    });
  });
}