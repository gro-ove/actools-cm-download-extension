if (_$('#__cmext_style', function (x){ x.parentNode.removeChild(x); return true; })){
  // cleaning up after RSR Live Timing Content Manager Support extension
  _$('#__cmext_start_btn', function (x){ x.parentNode.removeChild(x); return true; });

  _$each('th:last-child', function (x){
    if (x.textContent === 'Install'){
      x.textContent = 'Download';
    }
  });

  _$each('a', function (x){
    var m = x.href.match(/^acmanager:\/\/rsr\/setup\?id=(\d+)/);
    if (m){
      x.href = 'http://www.radiators-champ.com/RSRLiveTiming/ajax.php?action=download_setup&id=' + m[1];
    }
  });
}

// start button if needed or possible
var eventId = (location.href.match(/\beventId?=(\d+)\b/i) || {})[1];
var carId = (location.href.match(/\bcar(?:Id)?=(\d+)\b/i) || {})[1];
var trackId = (location.href.match(/\btrack(?:Id)?=(\d+)\b/i) || {})[1];

if (eventId != null || carId != null && trackId != null){
  _$css(function(){/*
#__cmext_start_btn {
  display: block !important;
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;
  width: 72px !important;
  height: 72px !important;
  border-radius: 2px !important;
  background: #A20025 !important;
  color: white !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
  font-size: 13px !important;
  font-weight: bold !important;
  line-height: 27px !important;
  padding: 8px !important;
  text-align: center !important;
  color: #FFF !important;
}

#__cmext_start_btn:hover, #__cmext_start_btn:active {
  color: #FFF !important;
  background: #990024 !important;
  text-decoration: none !important;
} */});

  var c = eventId || trackId + '/' + carId;
  var b = document.createElement('a');
  b.id = '__cmext_start_btn';
  b.appendChild(document.createElement('img')).src = _$res('img/icon-radiatorschamp-48.png');
  b.appendChild(document.createElement('br'));
  b.appendChild(document.createTextNode('Start'));
  b.href = 'acmanager://rsr?id=' + encodeURIComponent(c);
  document.body.appendChild(b);
}

// setups table: new column with quick install buttons
_$each('th:last-child', function (x){
  if (x.textContent === 'Download'){
    x.textContent = 'Download​';
    x.parentNode.appendChild(x.cloneNode()).textContent = 'Install';
  }
});

_$each('a', function (x){
  var m = x.href.match(/=download_setup&id=(\d+)/);
  if (m){
    var c = x.parentNode.parentNode.appendChild(x.parentNode.cloneNode(true)).querySelector('a');
    c.href = 'acmanager://rsr/setup?id=' + m[1];
    c.querySelector('img').src = _$res('img/icon-radiatorschamp-30.png');
    x.href = x.href.replace(/&id/, '&proc=1&id');
  }
});