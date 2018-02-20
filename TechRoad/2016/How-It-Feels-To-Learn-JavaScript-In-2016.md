[![返回目录](https://parg.co/U0e)](https://parg.co/U0X) 
﻿
> [2016年里做前端是怎样一种体验](https://segmentfault.com/a/1190000007083024)翻译自[how-it-feels-to-learn-javascript-in-2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.5zzf9ydlm)，从属于笔者的[Web Frontend Introduction And Best Practices:前端入门与最佳实践](https://github.com/wxyyxc1992/Web-Frontend-Introduction-And-Best-Practices)系列文章。
> 最近我女朋友也打算开始学习前端的一些知识，不过她目前的认知水平还停留在DOM+jQuery盛行的阶段，正好借翻译这篇文章之机，跟她讲讲2016年的前端是个什么状态。


问：最近我接手了一个新的Web项目，不过老实说我已经好久没碰过这方面的代码了。听说前端的技术栈已经发生了极大的变革，不知道你现在是不是仍然处于最前沿的开发者阵列？
答：准确来说，过去俗称的写网页的，现在应该叫做Front End Engineer，我确实属于这所谓的前端工程师。并且我才从JSConf与ReactConf面基回来，因此我觉得我觉得我还是了解目前Web前端领域最新的面貌的。
问：不错不错，我的需求其实也不复杂，就是从后端提供的REST风格的EndPoint来获取用户活动数据并且将其展示在前端界面上。并且需要以列表形式展示，同时，列表要支持筛选排序等操作，对了，还要保证前端数据和服务端保持一致。按照我现在的理解，我打算用jQuery来抓取与展现数据，你觉得咋样？
答：不不不，现在估计已经没多少人使用jQuery了吧。你可以试试React，毕竟这是2016年了啊。
问：额，好吧，那啥是React啊？
答：这是个非常不错的源自Facebook的前端库，它能够帮你便捷地响应界面事件，同时保证项目层级的可控性与还说得过去的性能。
问：不错不错，那我是不是就可以用React来展示数据了呢？
答：话是这么说没错，不过你需要添加React与React DOM依赖项到你的页面中去。
问：等等，React不是一个库吗？为啥要添加两个依赖呢？
答：不要急，前者是React的核心库，后面呢算是DOM操作的辅助库，这样就能让你用JSX来描述你的界面布局了。
问：JSX？啥是JSX？
答：JSX是一个类似于XML的JavaScript语法扩展，它是另一种描述DOM的方式，可以认为是HTML的替代品。
问：等等，HTML咋啦？
答：都2016了，直接用HTML早就过时了。
问：好吧，那是不是我把两个库添加到项目中我就可以使用React了？
答：额，还要一些小的工具，你需要添加Babel到你的项目中，这样你就能用了。
问：又是一个库？Babel又是什么鬼？
答：你可以把Babel认为是一个转译工具，可以将某个特定版本的JavaScript转译为任意版本的JavaScript。你可以选择不使用Babel，不过那也就意味着你只能用烦人的ES5来编写你的项目了。不过既然都是2016了，我建议你还是使用最新的ES2016+语法吧。
问：ES5？ES2016+？我已经迷茫了，ES5，ES2016+又是啥？
答：ES5是ECMAScript 2015的缩写，也是现在被绝大部分浏览器所支持的JavaScript语法。
问：ECMAScript？
答：是的，你应该知道JavaScript最早于1995年提出，而后在1999年第一个正式版本定稿。之后的十数年里JavaScript的发展一直很凌乱，不过经过七个版本之后已经逐步清晰了。
问：7个版本？那么ES5与ES2016+又是第几个版本呢？
答：是的，分别指第五个版本与第七个版本。
问：等等，那第六个版本呢？
答：你说ES6？估计我刚才没有讲明白，ECMAScript的每个版本都是向前兼容的，当你使用ES2016+的时候也就意味着你在使用之前所有版本的所有特性啦。
问：原来是这样啊，那为啥一定要用ES2016+而不是ES6呢？
答：是的，你可以使用ES6，不过如果你要使用async与await这些特性，你就要去用ES2016+了。否则你就还不得不去使用ES6的Generator来编写异步代码了。
问：我现在彻底迷糊了，我只是想简单地从服务端加载些数据而已，之前只需要从CDN加载下jQuery的依赖库，然后用Ajax方法来获取数据即可，为啥我现在不能这么做呢？
答：别傻了，每个人都知道一味使用jQuery的后果就是让你的代码变得一团乱麻，这都2016了，没人再想去面对这种头疼的代码了。
问：你说的是有道理，那现在我是不是就把这三个库加载进来，然后用HTML的Table来展示这些数据？
答：嗯，你可以选择一个模块打包工具将这三个依赖库打包到一个文件中。
问：额，啥是模块打包工具啊？
答：这个名词在不同的环境下指代也不同，不过在Web开发中我们一般将支持AMD与CommonJS的工具称为模块打包工具。
问：AMD与CommonJS又是？
答：它们是用于描述JavaScript库与类之间交互的接口标准，你有听过exports与requires吗？你可以根据AMD或者CommonJS的规范来定义多个JavaScript文件，然后用类似于Browserify的工具来打包它们。
问：原来是这样，那Browserify是啥呢？
答：Browserify最早是为了避免人们把自己的依赖一股脑放到NPM Registry中构建的，它最主要的功能就是允许人们将遵循CommonJS规范的模块打包到一个文件中。
问：NPM Registry？
答：这是一个很大的在线仓库，允许人们将代码与依赖以模块方式打包发布。
问：就像CDN一样？
答：还是有很大差异的，它更像一个允许人们发布与下载依赖库的中心仓库。
问：哦，我懂了，就像Bower一样啊。
答：对哒，不过2016年了，同样没啥人用Bower了。
问：嗯嗯，那我这时候应该从npm库中下载依赖了是吧？
答：是的，譬如如果你要用React的话，你可以直接用Npm命令来安装React，然后导入到你的项目中，现在绝大部分主流的JavaScript库都支持这种方式了。
问：嗯嗯，就像Angular一样啊。
答：不过Angular也是2015年的流行了，现在像VueJS或者RxJS这样的才是小鲜肉，你想去学习它们吗？
问：不急不急，我们还是先多聊聊React吧，贪多嚼不烂。我还想确定下，是不是我从npm下载了React然后用Browserify打包就可以了？
答：是的。
问：好的，不过每次都要下载一大堆依赖然后打包，看起来好麻烦啊。
答：是的，不过你可以使用像Grunt或者Gulp或者Broccoli这样的任务管理工具来自动运行Browserify。对了，你还可以用Mimosa。
问：Grunt？Gulp？Broccoli？Mimosa？我们到底在讨论啥？
答：不方，我们在讨论任务管理工具，不过同样的，这些工具也是属于2015年的弄潮儿。现在我们流行使用Webpack咯。
问：Makefiles?听起来有点像是一个C或者C++项目啊。
答：没错，不过很明显Web的演变之路就是把所有事情弄复杂，然后再回归到最基础的方式。估计不出你点你就要在Web中写汇编代码了。
问：额，你刚才好像提到了Webpack？
答：是的，这是一个兼顾了模块打包工具与任务运行器的打包工具，有点像Browserify的升级版本。
问：嗷嗷，这样啊，那你觉得哪个更好点呢？
答：这个因人而异了，不过我个人是更加偏好于Webpack，毕竟它不仅仅支持CommonJS规范，还支持ES6的模块规范。
问：好吧，我已经被CommonJS/ES6这些东西彻底搞乱了。
答：很多人都是这样，多了，你可能还要去了解下SystemJS。
问：天哪，又是一个新名词，啥是SystemJS呢？
答：不同于Browserify与Webpack 1.x，SystemJS是一个允许你将多个模块分封于多个文件的动态模块打包工具，而不是全部打包到一个大的文件中。
问：等等，不过我觉得按照网络优化规范我们应该将所有的库打包到一个文件中。
答：是的，不过HTTP/2快要来了，并发的HTTP请求已经不是梦。
问：额，那时候是不是就不需要添加React的依赖库了？
答：不一定，你可以将这些依赖库从CDN中加载进来，不过你还是需要引入Babel的吧。
问：额，我刚才好像说错了话。
答：是的，如果按照你所说的，你需要在生产环境下将所有的babel-core引入，这样会无端端增加很多额外的性能消耗。
问：好吧，那我到底应该怎么做呢？
答：我个人建议是用TypeScript+Webpack+SystemJS+Babel这一个组合。
问：TypeScript？我一直以为我们在说的是JavaScript！
答：是的，TypeScript是JavaScript的超集，基于ES6版本的一些封装。你应该还没忘记ES6吧？
问：我以为我们刚才说到的ES2016+就是ES6的超集了。为啥我们还需要TypeScript呢？
答：因为TypeScript允许我们以静态类型语言的方式编写JavaScript，从而减少运行时错误。都2016了，添加些强类型不是坏事。
问：原来TypeScript是做这个的啊！
答：是的，还有一个就是Facebook出品的Flow。
问：Flow又是啥？
答：Flow是Facebook出品的静态类型检测工具，基于函数式编程的OCaml构建。
问：OCamel？函数式编程？
答：你没听过吗？函数式编程？高阶函数？Currying?纯函数？
问：我一无所知。
答：好吧，那你只需要记得函数式编程在某些方面是优于OOP的，并且我们在2016年应该多多使用呦。
问：等等，我在大学就学过了OOP，我觉得挺好的啊。
答：是的，OOP确实还有很多可圈可点的地方，不过大家已经认识到了可变的状态太容易引发未知问题了，因此慢慢的所有人都在转向不可变数据与函数式编程。在前端领域我们可以用Rambda这样的库来在JavaScript中使用函数式编程了。
问：你是不是专门一字排开名词来了？Ramda又是啥？
答：当然不是啦，Rambda是类似于Lambda的库，源自David Chambers。
问：David Chambers？
答：David Chambers是个很优秀的程序员，他是Rambda的核心贡献者之一。如果你要学习函数式编程的话，你还应该关注下Erik Meijer。
问：Erik Meijer？
答：另一个函数式编程领域的大神与布道者。
问：好吧，还会让我们回到React的话题吧，我应该怎么使用React来抓取数据呢？
答：额，React只是用于展示数据的，它并不能够帮你抓取数据。
问：我的天啊，那我怎么来抓取数据呢？
答：你应该使用Fetch来从服务端获取数据。
问：Fetch？
答：是的，Fetch是浏览器原生基于XMLHttpRequests的封装。
问：那就是Ajax咯？
答：AJAX一般指仅仅使用XMLHttpRequests，而Fetch允许你基于Promise来使用Ajax，这样就能够避免Callback hell了。
问：Callback Hell?
答：是的，每次你向服务器发起某个异步请求的时候，你必须要添加一个异步回调函数来处理其响应，这样一层又一层地回调的嵌套就是所谓的Callback Hell了。
问：好吧，那Promise就是专门处理这个哩？
答：没错，你可以用Promise来替换传统的基于回调的异步函数调用方式，从而编写出更容易理解与测试的代码。
问：那我现在是不是直接使用Fetch就好了啊？
答：是啊，不过如果你想要在较老版本的浏览器中使用Fetch，你需要引入Fetch Polyfill，或者使用Request、Bluebird或者Axios。
问：来啊，互相伤害吧，你还是直接告诉我我还需要了解多少个库吧！
答：这可是JavaScript啊，可是有成千上万个库的。而且不少库还很大呢，譬如那个嵌了一张Guy Fieri图片的库。
问：你是说Guy Fieri?我听说过，那Bluebird、Request、Axios又是啥呢？
答：它们可以帮你执行XMLHttpRequests然后返回Promises对象。
问：难道jQuery的AJAX方法不是返回Promise吗？
答：请忘掉jQuery吧，用Fetch配合上Promise，或者async/await能够帮你构造合适的控制流。
问：这是你第三次提到Await了，这到底是个啥啊？
答：Await是ES7提供的关键字，能够帮你阻塞某个异步调用直到其返回，这样能够让你的控制流更加清晰，代码的可读性也能更上一层楼。你可以在Babel中添加stage-3 preset，或者添加syntax-async-functions以及transform-async-to-generator这两个插件。
问：好麻烦啊。
答：是啊，不过更麻烦的是你必须先预编译TypeScript代码，然后用Babel来转译await。
问：为啥？难道TypeScript中没有内置？
答：估计在下一个版本中会添加该支持，不过目前的1.7版本的TypeScript目标是ES6，因此如果你还想在浏览器中使用await，你必须要先把TypeScript编译为ES6，然后使用Babel转译为ES5。
问：我已经无话可说了。
答：好吧，其实你也不用想太多，首先你基于TypeScript进行编码，然后将所有使用Fetch的模块转译为ES6，然后再使用Babel的stage-3 preset来对await等进行Polyfill，最后使用SystemJS来完成加载。如果你打算使用Fetch的话，还可以使用Bluebird、Request或者Axios。
问：好，这样说就清晰多了，是不是这样我就达到我的目标了？
答：额，你的应用需要处理任何的状态变更吗？
问：我觉得不要把，我只是想展示数据。
答：那还行，否则的话你还需要了解Flux、Redux等等一系列的东西。
问：我不想再纠结于这些名词了，再强调一遍，我只是想展示数据罢了。
答：好吧，其实如果你只是想展示数据的话，你并不需要React，你只需要一个比较好的模板引擎罢了。
问：你在开玩笑？
答：不要着急，我只是告诉你你可以用到的东西。
问：停！
答：我的意思是，即使你仅仅打算用个模板引擎，还是建议使用下TypeScript+SystemJS+Babel。
问：好吧，那你还是推荐一个模板引擎吧！
答：有很多啊，你有对哪种比较熟悉吗？
问：唔，好久之前用了，记不得了。
答：jTemplates?jQote?PURE?
问：没听过，还有吗？
答：Transparency？JSRender？MarkupJS?KnockoutJS?
问：还有吗？
答：PlatesJS?jQuery-tmpl?Handlebars?
问：好像最后一个有点印象。
答：Mustache?underscore？
问：好像更晚一点的。
答：Jade?DustJS?
问：不。
答：DotJS?EJS?
问：不。
答：Nunjucks?ECT?
问：不。
答：Mah?Jade?
问：额，还不是。
答？难道是ES6原生的字符串模板引擎。
问：我估计，这货也需要ES6吧。
答：是啊。
问：需要Babel？
答：是啊。
问：是不是还要从npm下载核心模块？
答：是啊。
问：是不是还需要Browserify、Webpack或者类似于SystemJS这样的模块打包工具？
答：是啊。
问：除了Webpack，还需要引入任务管理器。
答：是啊。
问：我是不是还需要某个函数式编程语言，或者强类型语言？
答：是啊。
问：然后如果用到await的话，还需要引入Babel？
答：是啊。
问：然后就可以使用Fetch、Promise了吧？
答：别忘了Polyfill Fetch，Safari目前还不能原生支持Fetch。
问：是不是，学完这些，就OK了？
答：额，目前来看是的，不过估计过几年我们就需要用Elm或者WebAssembly咯~
问：我觉得，我还是乖乖去写后端的代码吧。
答：Python大法好！















































































