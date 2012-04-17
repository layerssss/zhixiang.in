/// <reference path="/ISPReferences/About.en.isp.js" />
/*<!--*/
var lang = 'en'; 
var $subPage = "About";
$load('master/en.master.js')({
    body: function () {
        /*-->
<div class="row">
    <div class="span10">
        <div class="well" id="about">
            <h2>
                About</h2>
            <hr />
            <blockquote>
                Hi, this is a personal webpage of that guy on the right.</blockquote>
            <div class="row-fluid">
                <div class="span4">
                    <dl class="dl-horizontal">
                        <dt>Name:</dt>
                        <dd>
                            Zhixiang Yin ( Michael Yin )</dd>
                        <dt>Profession:</dt>
                        <dd>
                            Programmer</dd>
                        <dt>E-mail:</dt>
                        <dd>
                            layerssss<!---->(at)gmail.com</dd>
                    </dl>
                </div>
                <div class="span4">
                    <dl class="dl-horizontal">
                        <dt>
                        Favourite drink:</dt>
                        <dd>
                            Coffee</dd>
                        <dt>Nationality:</dt>
                        <dd>
                            Mainland China</dd>
                    </dl>
                </div>
                <div class="span4">
                    <dl class="dl-horizontal">
                        <dt>Year of birth:</dt>
                        <dd>
                            1990</dd>
                        <dt>Lives in:</dt>
                        <dd>
                            Zhuhai, Guangdong Province, China</dd>
                    </dl>
                </div>
            </div>
        </div>
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
        <div class="well">
            <p>
                I'm looking for a job as <em>a .NET engineer</em> or <em>a front-side developer</em>. Learn more about me in <a class="btn" href="CV.{$lang$}">My CV</a></p>
        </div>
        <div class="well">
            <img title="I speak Esperanto!" alt="I speak Esperanto!" src="img/i_speak_esperanto.jpg" style="width: 100%;
                max-width: 150px;" /></div>
    </div>
</div>
<!--*/
    }
});

//-->
