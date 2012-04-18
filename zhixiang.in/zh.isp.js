/// <reference path="/ISPReferences/zh.isp.js" />
/*<!--*/
$load('master/zh.master.js')({
    title: title,
    langs: langs,
    body2:function(){
    $($subPage);
    },
    body: function () {

        /*-->
        <div class="row">
        <div class="span7">
        {$content$}</div>
        <div class="span5">
        <div id="disqus_thread">
        </div>
        <noscript>
        Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments
        powered by Disqus.</a></noscript>
</div>
</div><!--*/

    } 
});

//-->