静态服务器页(ISP)页面引擎的实现及其应用实例
======================================
##摘要



##引言

WEB服务器端页面引擎技术(下文也简称"服务器端技术")是指在浏览器/服务器架构上构建网站的通用编程基础技术,现代服务器端技术通常由:编程语言及运行环境,互操作库,WEB服务器扩展和相应的WEB程序设计理念这四个元素中的一些或者全部构成.

WEB服务器端页面引擎技术的在近几年更新换代很快,并且通常服务器端技术都是排他的,所以各技术团队纷纷给自己打上某服务器端技术的标签.[1993年][1],一些WWW开发者共同确定了[RFC3875][2],该文档制定了一个命令行可执行服务器扩展的标准,该标准名称为通用网关接口(CGI),这便是一门很早的通用服务器端技术,该技术旨在使得WEB服务器端程序更好移植,包括在不同操作系统和不同WEB服务器间移植,这项技术一直流行了8年之久,现在我们在身边依然能找到部分地使用该技术的网站.

由于服务器端技术和操作系统与WEB服务器程序联系相当紧密,而后两者是很大的收入来源,于是各大厂商纷纷在服务器端技术上狠下文章.试图在服务器端技术上占有抢先地位.另外由于软件服务化的进程在这几年突飞猛进,社会对于WEB服务器端开发人才的需求也很大,这也促使了服务器端技术种类和数量越来越多.

本文首先从现代服务器页面引擎技术的背景,前端页面渲染技术,和创业团队的开发模式三个方面进行研究并发现现存技术的不足,然后提出了新的页面引擎所应实现的特性,之后记录了在实现这些功能过程中用到的一些方法.

##问题背景

现在流行的服务器端页面引擎技术多采用脚本语言作为编程环境.随着互联网的扩张,开发人员很快意识到了进行万维网开发需要经常更改页面内容和形式,于是大部分引擎技术采用了使用一门独特的脚本语言来作为编程环境,对于其编程单位的不同,现在流行的服务器端技术可分为脚本引擎,页面引擎和服务引擎三类.

####脚本引擎

脚本引擎指的是以文件为单位存储程序,每个文件中的程序处理来自一个URL的请求的服务器端页面引擎技术.这种服务器端技术的特点是部署,转移方便,其中大部分脚本引擎允许在脚本文件中嵌入HTML代码,这样就方便将静态的HTML文件修改成动态运行的"服务器端页面".该类服务器端技术是本章介绍的三类技术中开始流行最早的一种.并且拥有大量实现.

1. PHP

PHP是"超文本预处理语言"的英文简写简写,它是一个开源的脚本语言实现,它最初在1993年由加拿大程序员RasmusLerdorf开始用C语言开发,当时是一个简单的CGI扩展二进制可执行程序.最初其名字是"Personal Home Page Tools",被作者用于开发维护自己的个人主页,显示自己的简历等一些用途.[3]

* 编程语言

PHP语言的语法十分近似于Perl脚本语言,整个以".php"为扩展名的文件内放置HTML标签,而脚本嵌入在"<?php"和"?>"之间.如

    <html>
     <head>
      <title>PHP Test</title>
     </head>
     <body>
     <?php echo '<p>Hello World</p>'; ?> 
     </body>
    </html>

由于Perl的限制,PHP语言本身在几年里没有太大的改变.

* 运行环境

PHP的运行环境为一个脚本解释宿主,包含自动垃圾回收机制,采用引用计数方法实现[4],函数和值皆作为变量且为弱类型安全语言[5],PHP的运行时本身没有包括多线程机制,但是简单包装了xNIX/Linux的fork函数[6],在Windows下PHP的子进程映射为系统的线程[7].所以在语言中并没有提供太多的多线程相关API,不能进行现代的高级异步编程.

* 互操作库

由于PHP的设计初衷为服务于网页制作,所以其互操作库满足了大量的网络功能,并且由于其历史悠久,其第三方的扩展也相当完善.

* WEB应用程序设计理念

PHP的设计理念是目前现存的WEB技术中最经典的一种,即客户端内容和服务器端内容相互嵌套,可以理解为字符串拼接.

2. Ruby on Rails

Rails(一下简称RoR)是由其创始人大卫.海纳梅尔.韩森于2004年7月从37signals公司的项目管理工具Basecamp里面分离出来,并且以开源方式发布的一个WEB框架[8].Rails框架中包括:一个ORM,一个URL路由系统,简单的模版(嵌入式Ruby)

* 编程语言

Rails框架采用Ruby作为编程语言,Ruby是一个动态脚本语言,Ruby在采用类似Perl语法的同时,更加加强了面向对象编程的理念,Ruby的作者认为,Ruby=(Smaltalk+Perl)/2.[9]

Ruby中包含的一些流行语言糖:向量赋值[10],迭代器函数.

Rails框架中的查看器使用嵌入式Ruby来进行书写,其形式十分类似于与PHP.[11]

* 运行环境

Ruby支持多线程[12],其高度面向对象的语言特征也方便进行多线程编程

* 互操作库

RoR的互操作除了访问数据库需要的ORM之外,几乎全部由Ruby运行时提供,由于Ruby的编程风格比较偏重于面向对象,所以其API也基本上都是以类的形式封装.整体结构比较清晰.[13]

* WEB应用程序设计理念

Rails有两条重要设计理念,其中第一条是"约定大于配置",即鼓励用户尽量使用Ruby内默认的一些约定组件,而不要去手动编程.

其第二条设计理念是尽量去遵守REST规约,REST目前被大量应用在WEB应用程序的API设计上,REST规约要求首先尝试全部HTTP1.1的动作:GET,PUT,POST,DELETE,在实际情况不允许使用正确HTTP动作的情况下(比如WEB编程),则使用URL后缀标出正确动作.[14].[15]

3. Python/web.py/Tornado

Python同样是一门来自二十世纪九十年代初的动态脚本语言[16],其目前在WEB开发上比较流行的三个框架当属:web.py,Tornado和django,其中Tornado基本上是web.py的另一个实现,这两者的风格都偏向PHP的简洁,框架中只包含:URL路由系统,简单的模版系统,数据库访问.

* 编程语言

Python与Ruby和Perl等动态脚本语言一样属于无括号风格的语言,但是Python的命名规范却十分遵循C语言编程的风格,并且与用C代码编写的程序进行互操作也十分方便.[17]

Python中含有许多流行的语法糖,包括:Lambda表达式[18],向量赋值[19],迭代器函数[19],基于触发器的特性(装饰器)[32],表达式声明[19].

* 运行环境

Python以面向对象的方式包装了系统的线程[20],而在运行平台无线程支持或者不允许包装线程的情况下使用阻塞模型兼容异步程序[21].

* 互操作库

Python的C语言亲和性使其几乎拥有和C语言同样的互操作能力,基本上可以访问操作系统的所有资源,并且很容易使用C语言编写互操作扩展.

* WEB应用程序设计理念

在Tornado/web.py下的WEB应用程序设计风格和PHP相似.

####页面引擎

1. Python/django

django是Python编程界目前使用最多的WEB框架[22],其包含:一个路由系统,一个ORM,自动化的管理界面生成,一个模版系统,内存高速缓存接口,国际化[23].

* WEB应用程序设计理念

在django下的WEB应用程序设计风格和RoR相似,MVC三个部件被高度抽象,并严格分割.

2. ASP.NET

ASP.NET是微软在2000年推出的.NET Framework中的一项重要技术.仅能够在Windows服务器环境上运行.但是在Linux/xNIX上可以借助公共语言运行时(CLR)的第三方开源实现Mono来运行.

* 编程语言

任何基于CLR和DLR指定的语言(静态语言或者动态脚本语言)都可以编写ASP.NET程序的逻辑端.不过最流行的方式是使用C#进行编程,C#是一门类型安全的静态语言,属C语言族,最接近Java,语法中大量使用括号,包含了大量的语言糖:Lambda表达式[24],Lambda函数[25],匿名方法[26],LINQ查询表达式[27],迭代器方法[28],属性[29],事件订阅[30],模板类型/泛型[31].

ASP.NET的页面编程部分使用了ASP.NET标记,这种标记语言在对HTML语法友好的同时又映射着各.NET服务器端控件,不过因为.NET服务器端控件和HTML便签有很多不统一之处,让很多开发者遇到了困难.并且,由于HTML的限制,编写服务类应用时会有些麻烦.

* 运行环境

CLR包装了操作系统的线程.并且CLR和DLR皆包含自动垃圾回收机制.

* 互操作库

由于.NET Framework目标领域的广泛,使用ASP.NET编写的程序通常能够访问系统的几乎全部资源,并且还可以利用Silverlight,WPF,WCF等技术和本地其他类型的程序进行互动.

* WEB应用程序设计理念

ASP.NET服务于传统B/S结构的HTML程序,其WEB程序设计风格与Windows程序开发的风格比较相近,ASP.NET强调使用事件驱动,有状态的服务器端控件.

####服务引擎

1. Node.js

Node.js是基于Chrome浏览器的JavaScript运行时搭建的一个网络应用程序平台.[33]

* 编程语言

Node.js应用程序使用JavaScript编写,JavaScript是动态脚本语言,语法简洁.属C语言族.

* 运行环境

Node.js的运行时同其他位于浏览器端的JavaScript运行时一样,只让JavaScript代码在一个线程上运行,在这种环境下想要进行异步编程必须使用非阻塞的编程模型.

* 互操作库

Node.js的互操作库比较集中于WEB程序所需要使用的部分,另外由于JavaScript不是一门面向对象编程语言,其互操作库也只基本上是基于包封装.

* WEB应用程序设计理念

Node.js平台上最流行的一个WEB开发框架当属Express.js,所以大部分应用程序的主体皆采用它和它的衍生品开发.Express.js包括:一个URL路由,内容协商模块,模版接口,会话模块.[34]

##设计理念

现代WEB应用程序的渲染逻辑更加复杂,且动态脚本的运行性能开销较大.所以WEB服务器端的渲染性能问题日益关键,为了针对该问题,我们的WEB引擎采用了一种特殊的约定,即页面渲染一次之后,将渲染结果进行储存,并且在之后受到对该内容的请求时不再重新进行渲染而是直接返回以前的渲染结果.

###渡轮模型

由于服务器端页面渲染过程本身需要耗费时间,而用户的大量并发访问可能同时发生,所以我们提出了一种模型用以描述我们在这种情况下处理大量并发处理的同步的方法.我们约定称该模型为渡轮模型.

在该模型中,假设WEB处理中的URL为一个河道.

其逻辑流程如下图1.

    如果已经
    

###JSML页k
###goclassing.com
###项目网站ispjs.org
##缺陷及其解决方案的提出
###Web服务器不及时清除缓存
###Web服务器对文件读写的冲突
###对CSRF攻击的防范困难
##结论
##参考文献
[1]: http://en.wikipedia.org/wiki/Common_Gateway_Interface (wikipedia-common gateway interface)
[2]: http://tools.ietf.org/html/rfc3875 (The Common Gateway Interface - CGI Version 1.1)
[3]: http://www.php.net/manual/en/history.php.php (PHP: History of PHP - Manual)
[4]: http://www.php.net/manual/en/features.gc.collecting-cycles.php (PHP: Collecting Cycles - Manual)
[5]: http://www.php.net/manual/en/language.types.type-juggling.php (PHP: Type Juggling - Manual)
[6]: http://php.net/manual/en/function.pcntl-fork.php (PHP: pcntl_fork - Manual)
[7]: http://www.php.net/manual/en/faq.obtaining.php#faq.obtaining.threadsafety (PHP: Obtaining PHP - Manual)
[8]: http://dev.mysql.com/tech-resources/interviews/david-heinemeier-hansson-rails.html (MySQL ::  Interview with David Heinemeier Hansson from Ruby on Rails)
[9]: http://zh.wikipedia.org/wiki/Ruby (Ruby - 维基百科，自由的百科全书)
[10]: http://www.ruby-doc.org/docs/ProgrammingRuby/html/tut_expressions.html (Programming Ruby: The Pragmatic Programmer's Guide)
[11]: http://www.tutorialspoint.com/ruby/eruby.htm (eRuby - Embeded Ruby)
[12]: http://www.ruby-doc.org/docs/ProgrammingRuby/ (Programming Ruby:Threads and Processes)
[13]: http://www.ruby-doc.org/stdlib-1.9.3/ (Ruby 1.9.3 Standard Library Documentation)
[14]: http://guides.rubyonrails.org/getting_started.html#what-is-rails (Ruby on Rails Guides: Getting Started with Rails) 
[15]: http://www.infoq.com/articles/rest-introduction (InfoQ: A Brief Introduction to REST)
[16]: http://python-history.blogspot.jp/2009/01/brief-timeline-of-python.html (The History of Python: A Brief Timeline of Python)
[17]: http://docs.python.org/tutorial/index.html (The Python Tutorial - Python v2.7.3 documentation)
[18]: http://docs.python.org/reference/expressions.html (Expressions - Python v2.7.3 documentation)
[19]: http://docs.python.org/reference/simple_stmts.html (Simple statements - Python v2.7.3 documentation)
[20]: http://docs.python.org/library/threading.html (threading — Higher-level threading interface - Python v2.7.3 documentation)
[21]: http://docs.python.org/library/dummy_threading.html (16.4. dummy_threading — Drop-in replacement for the threading module - Python v2.7.3 documentation)
[22]: http://wiki.python.org/moin/WebFrameworks (WebFrameworks - PythonInfo Wiki)
[23]: https://www.djangoproject.com/ (Django | The Web framework for perfectionists with deadlines)
[24]: http://msdn.microsoft.com/zh-cn/library/ms173144 (表达式（C# 编程指南）)
[25]: http://msdn.microsoft.com/zh-cn/library/bb882516 (匿名函数（C# 编程指南）)
[26]: http://msdn.microsoft.com/zh-cn/library/0yw3tz5k (匿名方法（C# 编程指南）)
[27]: http://msdn.microsoft.com/zh-cn/library/bb397676 (LINQ 查询表达式（C# 编程指南）)
[28]: http://msdn.microsoft.com/zh-cn/library/dscyy5s0 (迭代器（C# 编程指南）)
[29]: http://msdn.microsoft.com/zh-cn/library/x9fsa0sw (属性（C# 编程指南）)
[30]: http://msdn.microsoft.com/zh-cn/library/awbftdfh (事件（C# 编程指南）)
[31]: http://msdn.microsoft.com/zh-cn/library/512aeb7t (泛型（C# 编程指南）)
[32]: http://www.91python.com/archives/309 (小试python语法糖 python装饰器)
[33]: http://nodejs.org/ (node.js)
[34]: http://expressjs.com/ (Express - node web framework)