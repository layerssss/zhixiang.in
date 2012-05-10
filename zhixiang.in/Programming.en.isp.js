/*<!--*/
var lang = 'en'; 
var $subPage = "Programming";
$load('master/en.master.js')({
    title: 'Programming',
    body: function () {

        /*-->
<div class="row">
    <div class="span10">
        <div class="well" id="projects">
            <h2>
                Projects</h2>
            <hr />
            <div class="" id="ispJs">
                <h3>
                    InactiveServerPage.js (ISP.js)</h3>
                <p>
                    ISP.js is an MVC web framework written by C#. It's trying to:
                    <ul>
                    <li>Cache rendering results for mutiple request.</li>
                    <li>Let front-end developers write viewer in MVC with Javascript.</li>
                    </ul>
                </p>
                <p>
                    Keywords:<em>C# Javascript MVC .NET FerryModel</em></p>
                <p>
                    Links:<a href="http://ispjs.org/" target="_blank">Homepage</a> <a href="https://github.com/layerssss/ispJs"
                        target="_blank">Source</a> <a href="https://github.com/layerssss/ispJs/issues" target="_blank">
                            Issues</a>
                </p>
            </div>
            <hr />
            <div id="goclassing">
                <h3>
                    Goclassing.com</h3>
                <p>
                    Goclassing is a service which can help you easily create an online-course.
                </p>
                <p>
                    I've published most of its source code on Github. It's a good example of using ISP.js to create dynamic webpages.</p>
                <p>
                    Keywords:<em>C# Javascript ISP.js OnlineCourse FacebookAPI</em></p>
                <p>
                    Links:<a href="http://goclassing.com/" target="_blank">Visit website</a> <a href="https://github.com/layerssss/goclassing.com"
                        target="_blank">Source</a>
                </p>
            </div>
            <hr />
            <div id="zhixiangyin">
                <h3>
                    zhixiang.in</h3>
                <p>
                    Right, you can submit changes to all these pages.
                </p>
                <p>
                    As same as Goclassing.com, it's implemented by ISP.js.
                <p>
                    Keywords:<em>C# Javascript ISP.js</em></p>
                <p>
                    Lins: <a href="https://github.com/layerssss/zhixiang.in" target="_blank">Source</a>
                    <a href="https://github.com/layerssss/zhixiang.in/issues" target="_blank">Issues</a>
                </p>
            </div>
        </div>
    </div>
    <div class="span2">
        <div class="well">
            <a href="img/photo_big.jpg" title="My self-portrait" class="fancybox"><img alt="Zhixiang Yin" src="img/photo.jpg" style="width: 100%; max-width: 150px;" /></a>
        </div>
        <!--<div class="well">
            <p>
                I'm looking for a job as <em>a .NET engineer</em> or <em>a front-side developer</em>. Learn more about me in <a class="btn" href="CV.{$lang$}">My CV</a></p>
        </div>-->
    </div>
</div>
<!--*/
    }
});

//-->
