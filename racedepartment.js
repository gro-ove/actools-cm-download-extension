if ($('.crust [itemprop="title"]').filter(function(){ return this.textContent == 'Assetto Corsa' }).length > 0){
  $('.__cmspecial').remove();
  $('.resourceInfo .downloadButton').parent().clone()
      .addClass('__cmspecial').insertAfter($('.resourceInfo .downloadButton').parent())
      .css({ filter: 'hue-rotate(-90deg)', marginTop: '15px' }).find('a')
      .html('Install Using Content Manager' + $('.resourceInfo .downloadButton .minorText')[0].outerHTML)
      .css({ WebkitFilter: 'hue-rotate(-30deg)' })
      .attr('href', 'acmanager://install?url=' + encodeURIComponent(location.href));
}