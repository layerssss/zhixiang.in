
$('.langnan').css('opacity', '0.5');
$(function () {
    $('[title]').tooltip({ placement: 'bottom' });
    $('a.fancybox').fancybox({
        helpers: {
            thumbs: {
                width: 75,
                height: 50
            }
        }
    });
    //$('body').heavyScroll();
});