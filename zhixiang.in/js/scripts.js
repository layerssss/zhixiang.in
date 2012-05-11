
var modal = function (header, callback) {
    $('<div></div>').appendTo('body').load('/piece/bootstrap.modal.htm', function () {
        $(this).find('.modal-header h3').text(header);
        $(this).find('.modal').modal('show').on('hidden', function () {
            $(this).parent().remove();
        });
        var ui = { footer: $(this).find('.modal-footer')[0] };
        $.proxy(callback, $(this).find('.modal-body')[0])(ui);
    });
};
$(function () {
    $('a[href$=".zh"],a[href$=".en"],a[href$=".eo"]').pjax('#main', {
        fragment: '#main',
        timeout: 5000
    })
    .live('click', function () {
        $('.tooltip,#main>.container>:not(.navbar)').fadeOut('fast');
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
                },
                error: function () {
                    $(this).prev().children('i').removeClass('icon-white');
                }
            });
        } else {
            this.audio.jPlayer("play");
        }
        return false;
    });
    $('a[href$=".mp4"]').live('click', function () {
        var url = $(this).attr('href');
        modal('Playing Video', function () {
            $(this).load('/piece/jplayer.video.htm', function () {
                $(this).css('padding', 0).children('div').css('width',560);
                $(this).find('.jp-jplayer').jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            m4v: url
                        }).jPlayer('play');
                    },
                    swfPath: "/js/jPlayer",
                    supplied: "m4v",
                    size: {
                        width: '560px',
                        height: '300px'
                    }
                });
            });
        })
        return false;
    });
    window.onresize = function () {
        if ($('.visible-phone').css('display') == 'none') {
            $('.navmenu').css({
                'position': 'fixed',
                top: 60,
                right: $(document).width() - ($('#main>.container').offset().left + $('#main>.container').width())
            });
        } else {
            $('.navmenu').css({
                'position': 'static'
            });
        }
        $(window).trigger('scroll');
    };
    $(window).scroll(function () {
        if ($('.visible-phone').css('display') == 'none') {
            var lt60px = $('html').scrollTop() < 60;
            $('.navmenu').css({ 'position': lt60px ? 'absolute' : 'fixed', top: lt60px ? 60 : 0, 'zIndex': 10 });
        }
        if ($('html').scrollTop() + $('html')[0].clientHeight - $('html').height() < -5) {
            return;
        }
        if (!$('#disqus_thread').hasClass('loaded')) {
            var disqus_shortname = 'zhixiangyin'; // required: replace example with your forum shortname
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            $('#disqus_thread').addClass('loaded')
        }
    });
    var pgReady = function () {
        window.onresize();
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