/*<!--*/
var lang = 'zh'; 
var $subPage = "About";
$load('master/zh.master.js')({
    body: function () {
        /*-->
<!-- Main hero unit for a primary marketing message or call to action -->
<div class="hero-unit">
    <div class="well" style="float:right;position:relative;top:-20px;">
        <a href="img/photo_big.jpg" title="My self-portrait" class="fancybox">
            <img alt="Zhixiang Yin" src="img/photo.jpg" style="width: 100%; max-width: 150px;" /></a>
    </div>
    <h1>
        Hello, world!</h1>
    <p>
        你好,这是右边那货的个人页面.</p>
    <p>
        <a class="btn btn-primary btn-large" onclick="$('.span4 .btn').hide().addClass('btn-info').fadeIn(function(){ $(this).removeClass('btn-info');});">了解详情 &raquo;</a></p>
</div>
<!-- Example row of columns -->
<div class="row">
    <div class="span4">
        <h2>
            程序猿</h2>
        <p>
我已不在妞心上。
再见，不把妞儿看。
卡塔卢斯还能扛：
湿人他不爱这女郎，
不会夸她相貌赞，
玫瑰花儿不献上，
甚至还不亲一趟！
无名大火烧胸上！
妞儿啊，如今我还能扛
——但没有了你，我心暗伤。
        </p>
        <p>
            <a class="btn" href="Programming.{$lang$}">详情 &raquo;</a></p>
    </div>
    <div class="span4">
        <h2>
            世界语</h2>
        <p>
我已不在妞心上。
再见，不把妞儿看。
卡塔卢斯还能扛：
湿人他不爱这女郎，
不会夸她相貌赞，
玫瑰花儿不献上，
甚至还不亲一趟！
无名大火烧胸上！
妞儿啊，如今我还能扛
——但没有了你，我心暗伤。
        </p>
        <p>
            <a class="btn" href="Esperanto.{$lang$}">详情 &raquo;</a></p>
    </div>
    <div class="span4">
        <h2>
            ...</h2>
        <p><br/><br/><br/><br/>
        &laquo;这个中文翻译是不是很酷,可惜不是我的原创哦,</p>
        <p>
            <a class="btn btn-warning" href="http://www.keith.deathwinter.com/archives/540" target="_blank">去看看原创 &raquo;</a></p>
    </div>
</div>
<!--*/
    }
});

//-->
