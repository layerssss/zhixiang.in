
$(function () {

    $('a[href$=".zh"],a[href$=".en"],a[href$=".eo"]').pjax('#main', {
        fragment: '#main',
        timeout: 1500
    })
    .live('click', function () {
        $('.tooltip').fadeOut('fast');
        $('.loading').fadeIn('fast');
    })
    $(document).on('pjax:end', function () {
    }).on('pjax:end', function () {
        if ($('#disqus_thread')[0]) {
            setTimeout(function () {
                var disqus_shortname = 'zhixiangyin'; // required: replace example with your forum shortname
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            }, 1000);
        }
        $('.langnan').css('opacity', '0.5');
        $('[title]').tooltip({ placement: 'bottom' });
    });

    $('a.fancybox').fancybox({
        helpers: {
            thumbs: {
                width: 75,
                height: 50
            }
        }
    });
});