/*<!--*/
var lang = 'en'; 
var $subPage = "About";
$load('master/en.master.js')({
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
        Hi, this is a personal webpage of that guy on the right.</p>
    <p>
        <a class="btn btn-large" onclick="$('.span4 .btn').hide().addClass('btn-info').fadeIn(function(){ $(this).removeClass('btn-info');});">Learn more &raquo;</a></p>
</div>
<!-- Example row of columns -->
<div class="row">
    <div class="span4">
        <h2>
            Programmer</h2>
        <p>
            Puella mea me non amat. Vale, puella! Catullus obdurat: Poeta puellam non amat, 
            formam puella non laudat, puellae rosas non dat, et puellam non basiat! 
            Ira mea est magna! Obduro, mea puella–sed sine te non valeo.
        </p>
        <p>
            <a class="btn" href="Programming.{$lang$}">View details &raquo;</a></p>
    </div>
    <div class="span4">
        <h2>
            Esperanto</h2>
        <p>
            Puella mea me non amat. Vale, puella! Catullus obdurat: Poeta puellam non amat, 
            formam puella non laudat, puellae rosas non dat, et puellam non basiat! 
            Ira mea est magna! Obduro, mea puella–sed sine te non valeo.
        </p>
        <p>
            <a class="btn" href="Esperanto.{$lang$}">View details &raquo;</a></p>
    </div>
    <div class="span4">
        <h2>
            ...</h2>
        <p>
            Puella mea me non amat. Vale, puella! Catullus obdurat: Poeta puellam non amat, 
            formam puella non laudat, puellae rosas non dat, et puellam non basiat! 
            Ira mea est magna! Obduro, mea puella–sed sine te non valeo.</p>
        <p>
            <a class="btn disabled" href="#" onclick="return false;">No details &raquo;</a></p>
    </div>
</div>
<!--*/
    }
});

//-->
