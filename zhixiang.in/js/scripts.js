
$(function () {
    var t = null;
    $('a[href$=".zh"],a[href$=".en"],a[href$=".eo"]').pjax('#main', {
        fragment: '#main',
        timeout: 5000
    })
    .live('click', function () {
        if (t == null) {
            clearTimeout(t);
        }
        $('.tooltip,#main>.container>:not(.navbar)').fadeOut('fast');
        //$('#main').fadeOut();
        $('.loading').fadeIn('fast');
    })
    $('a[href$=".mp3"]').live('click', function () {
        $(this).children('i').addClass('icon-white');
        if (!this.audio) {
            this.audio = $('<span></span>').insertAfter(this);
            var url = $(this).attr('href');
            $(this.audio).jPlayer({
                ready: function () {
                    $(this).jPlayer("setMedia", {
                        mp3: url
                    }).jPlayer("play");
                },
                swfPath: "/js/jPlayer",
                ended: function () {
                    $(this).prev().children('i').removeClass('icon-white');
                }
            });
        } else {
            this.audio.jPlayer("play");
        }
        return false;
    });

    var pgReady = function () {
        //        if ($('#disqus_thread')[0]) {
        //            t = setTimeout(function () {
        //                t = null;
        //                var disqus_shortname = 'zhixiangyin'; // required: replace example with your forum shortname
        //                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        //                dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        //                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        //            }, 1000);
        //        }
        $('.langnan').css('opacity', '0.5');
        $('[title]').tooltip({ placement: 'bottom' });
        $('a[href$=".mp3"]').append($('<i class="icon icon-volume-up"></i>'));
    };
    $(document).on('pjax:end', function () {
    }).on('pjax:end', function () {
        pgReady();
    }).on('pjax:success', function () {
        $('#main>.container>:not(.navbar)').hide().fadeIn('fast');
    });
    pgReady();
    $('a.fancybox').fancybox({
        helpers: {
            thumbs: {
                width: 75,
                height: 50
            }
        }
    });
});