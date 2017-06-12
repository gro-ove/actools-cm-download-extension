if ($('p.download a').text() == 'DOWNLOAD'){
    $('.spec > div').css('width', '60%');
    $('.spec > div:last-child').css('width', '40%');
    $('.__cmspecial').remove();
    $('p.download a').clone().text('INSTALL').css({
        color: '#64a670',
        padding: '0 0 6px 40px',
        lineHeight: '33px',
        margin: '2px 0 2px 12px',
        background: 'url(http://i.imgur.com/OZO6Cn0.png) no-repeat left center',
        backgroundSize: 'contain',
        display: 'inline-block'
    }).addClass('__cmspecial').each(function(){ 
        this.href = 'acmanager://install?url=' + encodeURIComponent(this.href);
    }).removeAttr('target').insertAfter($('p.download a'));
} 
