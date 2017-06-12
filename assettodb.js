$('.__cmspecial').remove();
$('.carDetails a[href^="/"][href$="/download"]').clone()
    .addClass('__cmspecial').insertAfter('.carDetails a[href^="/"][href$="/download"]')
    .html('Install using Content Manager').removeAttr('target')
    .css({ filter: 'hue-rotate(-120deg)', WebkitFilter: 'hue-rotate(-120deg)' })
    .attr('href', 'acmanager://install?url=' + encodeURIComponent(location.href));