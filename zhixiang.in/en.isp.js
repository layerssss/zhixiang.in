/// <reference path="/ISPReferences/en.isp.js" />
/*<!--*/
$load('master/en.master.js')({
    title: title, 
    langs: langs,
    body: function () {

        /*-->
<div class="row">
    <div class="span4 navmenu">
        <div class="well">
            <!--*/
        if (breadcrumb) {
            /*-->
            <ul class="breadcrumb">
            <!--*/
            for (var btitle in breadcrumb) {/*-->
                <li><a href="{$breadcrumb[btitle]$}.en">{$btitle$}</a> <span class="divider">/</span>
                </li>
                <!--*/
            } /*-->
                <li class="active">{$title$}</li>
            </ul>
            <!--*/
        }
        /*-->
        <ul class="nav nav-list">
        <li class="nav-header">Table of Contents</li>
        <!--*/
        for (var i = 0; i < chapters.length; i++) {
            var t = chapters[i]; /*-->
                <li><a href="#chapter{$i$}">{$t$}</a> </li>
                <!--*/
        } /*-->
            </ul>
        </div>
    </div>
    <div class="span8">
        <h1>
            {$title$}</h1>
        <hr />
        {$content$}</div>
    <div class="span12">
        <div id="disqus_thread">
        </div>
        <noscript>
            Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments
                powered by Disqus.</a></noscript>
    </div>
</div>
</div>
<!--*/

    } 
});

//-->
