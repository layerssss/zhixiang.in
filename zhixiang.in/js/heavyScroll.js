if (typeof ($) == 'function' && typeof ($.fn.heavyScroll) == 'undefined') {
    $.fn.heavyScroll = function () {
        if (typeof (this[0].hs) == 'undefined') {
            this[0].hs = $.extend($.heavyScroll.defaultOptions, arguments[0]);
            $.heavyScroll._init(this[0]);
            return;
        }
        if(typeof($.heavyScroll[arguments[0]])!='function'){
            throw(new Error('"'+arguments[0]+'" is not a heavyScroll method.'));
        }
        return $.heavyScroll[arguments[0]](this[0],$.makeArray(arguments).slice(1));
    };
    $.heavyScroll = {
        _init: function (obj) {
            console.log(obj);
            if ($(obj).parent().css('position') != 'absolute') {
                $(obj).parent().css('position', 'relative');
            }
            $(obj).css('position', 'relative');
            var tick = function () {
                var top = $(obj)[0].scrollTop;
                $(obj).css('top', top);
                obj._timer = setTimeout(tick, obj.hs.interval);
            }
            tick();

        },
        destroy: function (obj) {
            clearInterval(obj._timer);
            obj.hs = undefined;
            return $(obj);
        },
        option: function (obj, name, value) {
            if (typeof (value) == 'undefined') {
                return obj.hs[name];
            }
            obj.hs[name] = value;
            return $(obj);
        },
        options: function (obj, options) {
            if (typeof (options) == 'undefined') {
                return obj.hs;
            }
            obj.hs = $.extend(obj.hs, options);
            return $(obj);
        },
        defaultOptions: {
            scrolling: function () {
            },
            interval: 10
        }
    };
}