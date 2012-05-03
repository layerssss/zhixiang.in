/*<!--*/
var lang = 'eo';
var langs = typeof (arguments[0].langs) == 'undefined' ? null : arguments[0].langs;
var misc = $load('inc/misc.inc.js')();
/*--><!DOCTYPE html>
<html lang="eo">
<head>
    <meta charset="utf-8">
    <title>
        <!--*/
if (typeof (arguments[0].title) != 'undefined') { $((arguments[0].title ? arguments[0].title : 'ne tilola') + '-'); } /*-->
        ĝieŝo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Le styles -->
    <style type="text/css">
        #main>.container
        {
            margin-top:-4px;
        }
    </style>
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/css/responsive.min.css" rel="stylesheet" type="text/css" />
    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
    <script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
    <script src="/js/fancyBox/jquery.fancybox.pack.js" type="text/javascript"></script>
    <link href="/js/fancyBox/helpers/jquery.fancybox-thumbs.css" rel="stylesheet" type="text/css" />
    <script src="/js/fancyBox/helpers/jquery.fancybox-thumbs.js" type="text/javascript"></script>
    <script src="/js/fancyBox/jquery.mousewheel-3.0.6.pack.js" type="text/javascript"></script>
    <script src="/js/jquery.pjax.min.js" type="text/javascript"></script>
    <script src="/js/jPlayer/jquery.jplayer.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="/js/scripts.js">
    </script>
    <script src="/js/bootstrap.min.js" type="text/javascript"></script>
    <link href="/js/fancyBox/jquery.fancybox.css" rel="stylesheet" type="text/css" />
    <link href="/css/stylesheet.css" rel="stylesheet" type="text/css" />
    <!--*/
if (typeof (arguments[0].head) == 'function') { arguments[0].head(); } /*-->
</head>
<body data-spy="scroll" data-target=".toc">
    <div class="loader" style="display: none">
        <!--<img src="spin.gif">-->
        dddd</div>
    <div id="main">
        <div class="container">
        <div class="navbar">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span
                        class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                    </a><a class="brand" href="/About.{$lang$}">ĝieŝo</a>
                    <div class="nav-collapse">
                        <ul class="nav">
                            <li class="{$misc.getClassNav('Programming')$}{$misc.getClassNav('CV')$}"><a href="/Programming.{$lang$}">programisto</a></li>
                            <li class="divider-vertical"></li>
                            <li class="{$misc.getClassNav('Esperanto')$}"><a href="/Esperanto.{$lang$}">esperantisto</a></li>
                            <li class="divider-vertical"></li>
                            <li><a href="#" onclick="return false;">Mi estas en:</a></li>
                            <li><a href="https://github.com/layerssss/" target="_blank">Githubo</a></li>
                            <li><a href="https://www.facebook.com/zhixiang.yin" target="_blank">Facebuko</a></li>
                            <li><a href="https://plus.google.com/u/0/photos/108058134179218385830/albums" target="_blank">
                                Pikaso</a></li>
                        </ul>
                        <div style="float: right;">
                            <img src="/img/loading.gif" class="loading" style="display:none;float:left;margin-top:15px;" />
                            <ul class="nav" style="">
                                <li class="{$misc.getClassLang(lang,'eo',langs)$}"><a title="Esperanta" href="{$$subPage$}.eo">
                                    <img src="/img/eo.jpg" /></a></li>
                                <li class="{$misc.getClassLang(lang,'en',langs)$}"><a title="angla" href="{$$subPage$}.en">
                                    <img src="/img/en.jpg" /></a></li>
                                <li class="{$misc.getClassLang(lang,'zh',langs)$}"><a title="Ĉinia" href="{$$subPage$}.zh">
                                    <img src="/img/zh.jpg" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
            <!--*/
arguments[0].body(); /*-->
            <hr>
            <footer>
        <p><span class="visible-phone"></span>&copy; Mikelo 2012 dankas tiu, kiu helpis mi, 
        <a href="http://twitter.github.com/bootstrap/" target="_blank">Bootstrap</a>,
        <a href="https://github.com/layerssss/ispJs" target="_blank">ISP.js</a>
        <a href="http://pjax.heroku.com/" target="_blank">pjax</a>
        
        </p>
      </footer>
        </div>
    </div>
    <!-- /container -->
</body>
</html>
<!--*/
//-->
