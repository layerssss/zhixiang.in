/*<!--*/
var lang = 'eo'; 
var $subPage = "About";
$load('master/eo.master.js')({
    body: function () {
        /*-->
<!-- Main hero unit for a primary marketing message or call to action -->
<div class="hero-unit">
    <div class="well" style="float:right;position:relative;top:-20px;">
        <a href="img/photo_big.jpg" title="My self-portrait" class="fancybox">
            <img alt="Zhixiang Yin" src="img/photo.jpg" style="width: 100%; max-width: 150px;" /></a>
    </div>
    <h1>
        Saluton, mondo!</h1>
    <p>
        Ĉi tio estas mia persona retpaĝo.</p>
    <p>
        <a class="btn btn-primary btn-large" onclick="$('.span4 .btn').hide().addClass('btn-info').fadeIn(function(){ $(this).removeClass('btn-info');});">scii detalon &raquo;</a></p>
</div>
<!-- Example row of columns -->
<div class="row">
    <div class="span4">
        <h2>
            programisto</h2>
        <p>
La fraŭlino ne amos min.
Adiaŭ, mia amantino.
Fortiĝu, catuluso.
La poeto ne amos la fraŭlinon.
Li ne laŭdos ĝian aperaĉon.
Li ne donos al ĝi la rozojn.
Li ne kisos ĝin.
Mi estas grande furioza.
Mia fraŭlino, nun, mi esta bona.
Sed, sen vi mi ne povas fortiĝi.
        </p>
        <p>
            <a class="btn" href="Programming.{$lang$}">detalo &raquo;</a></p>
    </div>
    <div class="span4">
        <h2>
            esperantisto</h2>
        <p>
La fraŭlino ne amos min.
Adiaŭ, mia amantino.
Fortiĝu, catuluso.
La poeto ne amos la fraŭlinon.
Li ne laŭdos ĝian aperaĉon.
Li ne donos al ĝi la rozojn.
Li ne kisos ĝin.
Mi estas grande furioza.
Mia fraŭlino, nun, mi esta bona.
Sed, sen vi mi ne povas fortiĝi.
        </p>
        <p>
            <a class="btn" href="Esperanto.{$lang$}">detalo &raquo;</a></p>
    </div>
    <div class="span4">
        <h2>
            ...</h2>
        <p>
La fraŭlino ne amos min.
Adiaŭ, mia amantino.
Fortiĝu, catuluso.
La poeto ne amos la fraŭlinon.
Li ne laŭdos ĝian aperaĉon.
Li ne donos al ĝi la rozojn.
Li ne kisos ĝin.
Mi estas grande furioza.
Mia fraŭlino, nun, mi esta bona.
Sed, sen vi mi ne povas fortiĝi.
        <p>
            <a class="btn disabled" href="#" onclick="return false;">nenio &raquo;</a></p>
    </div>
</div>
<!--*/
    }
});

//-->
