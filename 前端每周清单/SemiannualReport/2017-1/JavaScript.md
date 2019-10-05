# 前端每周清单半年盘点之 JavaScript 篇

[前端每周清单](http://www.infoq.com/cn/FE-Weekly)专注前端领域内容，以对外文资料的搜集为主，帮助开发者了解一周前端热点；分为新闻热点、开发教程、工程实践、深度阅读、开源项目、巅峰人生等栏目。欢迎关注【前端之巅】微信公众号(ID：frontshow)，及时获取前端每周清单；本文则是对于半年来发布的前端每周清单中的 JavaScript 相关的教程实践与开源项目的盘点，可以查看[这里](https://parg.co/bh1)获得往期清单或者其他盘点篇。

#  教程实践

- [《2017 前端开发手册》](https://frontendmasters.gitbooks.io/front-end-handbook-2017/content/)：[Front-End Developer Handbook 2017](https://frontendmasters.gitbooks.io/front-end-handbook-2017/content/) 由 [Cody Lindley](http://codylindley.com/) 编写，面向每一个希望学习前端的开发者。该手册概括地讨论了前端工程化的相关实践：在 2017 年中我们应该使用哪些前端工具以及如何学习去使用这些数据。该手册的内容包含了 Web 技术的基础：HTML、CSS、DOM 以及 JavaScript，以及基于这些技术构建的优秀开源项目。

- [《现代 JavaScript 概念纵览》](https://auth0.com/blog/glossary-of-modern-javascript-concepts/)：现代 JavaScript 开发在过去几年中经历了迅猛的变迁，并且这种变化的势头毫无停滞的预兆。对于很多前端开发者而言可能还不是很熟悉那些 JS 博客或者文档中提及的时兴的概念。此文讨论了很多起到媒介作用以及高级的概念，和这些概念是如何被适用于现代 JavaScript 开发中的。本文我们会讨论 Statefulness 与 Statelessness、Immutability 与 Mutability、Imperative 与 Declarative Programming、Higher-order Functions、Observables、以及 FP、RP、FPR 编程范式。

- [《JavaScript 启动性能瓶颈分析与解决方案》](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484987&idx=1&sn=7f20da20bc6baed62ca8ff115209942b)：随着现代 Web 技术的发展与用户交互复杂度的增加，我们的网站变得日益臃肿，也要求着我们不断地优化网站性能以保证友好的用户体验。本文作者则着眼于 JavaScript 启动阶段优化，首先以大量的数据分析阐述了语法分析、编译等步骤耗时占比过多是很多网站的性能瓶颈之一。然后作者提供了一系列用于在现代浏览器中进行性能评测的工具，还分别从开发者工程实践与 JavaScript 引擎内部实现的角度阐述了应当如何提高解析与编译速度。

- [《GraphicsJS:轻量级绘图库》](https://www.sitepoint.com/introducing-graphicsjs-a-powerful-lightweight-graphics-library/)：目前 Web 开发中最常用的创建交互式图片的技术选型当属 SVG 与 Canvas，传统的 Flash 与 Silverlight 已经慢慢淡出历史的舞台。而对于 [SVG 与 Canvas](https://www.sitepoint.com/canvas-vs-svg-choosing-the-right-tool-for-the-job/) 的对比也显示，如果是想创建与操作简单的交互性图片，那么 SVG 当属首选。SVG 本身是基于 XML 的向量图，任何通过`svg`标签载入的图片都会成为 SVG DOM 中可操作的对象。而 GraphicsJS 正是基于 SVG 的简单易用的 JavaScript 绘图库。

- [《理解 JavaScript 中的作用域》](https://scotch.io/tutorials/understanding-scope-in-javascript)：JavaScript 中的作用域、闭包以及上下文绑定一直是令人凌乱的知识，此文作者详细地从函数作用域、块作用域、词法作用域、闭包等进行详细阐述，值得一读做个梳理。

- [《ECMAScript 4 背后的故事》](https://auth0.com/blog/the-real-story-behind-es4/):  本文是对于 1999 ~ 2008 年之间 JavaScript 世界发生的大事件的详细介绍，阐述了 ECMAScript 4 从提出到角力到流产的前世今生。 ( http://suo.im/phBiE  )

- [《深入了解 JavaScript 中错误对象与堆栈跟踪》](http://lucasfcosta.com/2017/02/17/JavaScript-Errors-and-Stack-Traces.html)：JavaScript 中 Error 对象的堆栈跟踪信息包含了从异常抛出点到构造函数的所有栈帧信息，而手动地去捕获与操作堆栈跟踪信息有助于我们在开发测试或者异常处理相关的框架时有更好地实践。( http://suo.im/MiMWd )

- [《对比探秘 WebAssembly 性能优越之谜》](https://hacks.mozilla.org/2017/02/what-makes-webassembly-fast/): 本系列文章通过有趣的漫画介绍了 WebAssembly 的前世今生，并且与 JavaScript 就加载、解析、编译、执行等浏览进行了详细对比，从而介绍 WebAssembly 的性能缘何相较于 JavaScript 会好上很多。同时作者也强调，WebAssembly 与 JavaScript 各有所长，未来并不会存在太多的竞争，更多的是相辅相成，各司其职。( http://suo.im/3jsTUH )

- [《槽糕的 JavaScript 框架们》](https://medium.com/@mattburgess/all-javascript-frameworks-are-terrible-e68d8865183e#.bl9akwprg)：此文作者  Matt Burgess  严肃地吐槽批评了几乎所有的现今流行的 JavaScript 框架，与他上一篇文章[伟大的 JavaScript 框架](https://medium.com/@mattburgess/javascript-frameworks-are-great-2df4a3f0b24d#.qw54bvng0)一起阅读效果更佳。当然，作者并不是想让大家回到茹毛饮血的岁月，而是希望能以辩证地态度去认识与使用框架。( http://6me.us/e9R )

- [《JavaScript 图片处理库盘点》](http://6me.us/ylUyM)：图片处理一直是客户端开发中的常见问题，本文则是对基于 JavaScript 的常见的进行图片滤镜、裁剪等操作的库进行了盘点；本文横向比较了 CamanJS、glfx.js、grafi.js、Jimp 以及 Filtr2 这几个常用的图片处理库，并且给出了不同业务场景下的选用建议。( http://6me.us/ylUyM  )

- [《Slack 是如何减少其客户端内存占用的》](http://6me.us/z0XSh3)：本文是 Slack 在其桌面应用的开发过程中探索出的如何减少应用内存开销的经验介绍。Slack 最初为用户的每个登录团队都启动了相同的处理进程，而后根据调研发现仅有部分用户会同时使用多个团队；因此 Slack 从卸载后台团队的 DOM 树、分拆 JavaScript 代码进行优雅降级、重构 JavaScript 代码库等多个方式来优化桌面应用的内存占用。( http://6me.us/z0XSh3  )

- [《流行网站上陈旧的 JavaScript 库留存调研》](http://6me.us/csu2da)：本文是  Tobias Laudinger 及其合作者对于客户端 JavaScript 库的使用现状的调研报告；基于对于超过 133K 个网站的调查结果，它们发现大约 37% 的站点仍然使用了某些存在已知漏洞的 JavaScript 客户端脚本，它们建议我们一定要慎重思量网站中引入的外部依赖，特别是对于那些已经运行了很久的站点。( http://6me.us/csu2da )

- [《编写 JavaScript 框架：客户端路由》](https://parg.co/bOL)：本文是编写 JavaScript 框架系列的最后一篇，主要着眼于讨论如何实现 JavaScript 客户端路由及其与服务端路由的区别。( https://parg.co/bOL )

- [《面向“远古” Web 开发者的现代 JavaScript 教程》](https://parg.co/bsF)：本文主要是面向那些从 PHP、JSP、Rails 占据统治地位时开始进行 Web 技术的开发者进行常见的现代 JavaScript 基础概念的介绍。( https://parg.co/bsF )

- [《解密 JavaScript 异步编程》](https://parg.co/bsz)：JavaScript 中异步编程历经了多个大的迭代，从回调到 Promise 到生成器以及现在的 Async/Await；本文作者则是高屋建瓴地介绍了 JavaScript 异步编程的变迁历史以及简要的内部实现原理。( https://parg.co/bsz )

- [《ES7 Async/Await 常见误区》](https://parg.co/bsW)：ECMAScript 6 引入的 Promise 大大简化了 JavaScript 中异步编程语法，而 ES7 引入的 Async 则使其更为优雅；本文作者对于实践中常见的对于 Async/Await 的语法误用案例进行了解析。( https://parg.co/bsW )

- [《Composing Software》](https://parg.co/bQY)：本系列文章由 Eric Elliott 大神发布，着眼于介绍 JavaScript 函数式编程与大型软件项目中的可组织性技术的介绍，包括了函数式编程导论、高阶函数、Reduce、Functors & Categories 等几个部分，还在持续更新中。( https://parg.co/bQY )

- [《12 个精妙的 JavaScript 代码片》](https://parg.co/bhH)：本文作者分享了十二个非常不错的 JavaScript 代码片，这些代码片能够帮你优化现有代码，让代码更加地赏心悦目。( https://parg.co/bhH )

- [《JavaScript 中构建响应式引擎》](https://parg.co/bhR)：本系列文章介绍了如何在  JavaScript 中构建高性能的响应式引擎，对于有兴趣了解 MobX 底层原理的同学来说也是个不错的教程，目前包含了对于可观测对象的构造解释、属性推导与依赖追踪等内容( https://parg.co/bhR )

- [《深入浅出构建简单的 Chess AI》](https://parg.co/bCw)：本文作者介绍了如何基于 JavaScript 构建一个国际象棋的 AI，虽然不属于前端开发范畴，不过还是蛮有意思的一篇文章。本文主要包括移动生成、棋盘可视化、位置评估、基于 Minimax 算法的搜索树、Alpha-beta 修剪等等。( https://parg.co/bCw )

- [《使用 JavaScript 打造智能咖啡机》](https://parg.co/bhT)：这几年智能家居与 IOT 的概念非常火热，作者也发挥极客精神改造了一下办公室的咖啡机。文中作者借助了 Tessel 与 Johnny-Five 智能硬件平台，自定义了超文本咖啡机控制协议 HTCPCP，将咖啡机改造为了能够提供类 REST 服务的终端，能够远程控制与实时监控。

- [《使用 Chrome devtools 检视代码覆盖》](https://parg.co/b4p)：近日 Chrome Canary 版本中新增了执行代码覆盖率检查的特性，其能够反映你的 Web 应用中的每个 JavaScript/CSS 文件中的代码覆盖率以及所有的未被执行的行。

- [《JavaScript 模块演化史》](https://parg.co/bhn)：当初 Brendan Eich 草创 JavaScript 之际估计想不到它会在之后的二十年内起到如此重要的作用，本文则是深度回顾了缺乏模块化带来的困难以及这二十年间从命名空间、依赖注入、CommonJS、AMD、UMD 到 ES2015 Modules 等等十余种不同的模块解决方案。( https://parg.co/bhn  )

- [《使用 Inline Cache 优化动态 JavaScript 代码》](https://parg.co/b4a)：本文是作者在开发 JSIL 开源库时使用的一系列优化手段的总结，主要关于如何使用多态在线缓存(Polymorphic Inline Cache)来优化代码执行速度，不过这种方式也有可能造成意外的变化。作者介绍了何谓 Inline Cache 及其优化原理和带来的性能提升评测等内容。( https://parg.co/b4a )

- [《基于 JavaScript 构建数据表达式分词器》](https://parg.co/bRO)：本文是一篇挺有意思的文章，介绍如何利用 JavaScript 解构常见数学表达式并且从中提取出相关实体。本文涉及到的内容包括对于分词器的简单介绍、对于抽象语法树 AST 的介绍以及最终如何使用代码来实现分词算法。( https://parg.co/bRO )

- [《TypeScript 在 Slack 的实践分享》](https://parg.co/bRR)：维护大型的跨平台的 JavaScript 代码库是一件非常具有挑战性的工作，无论是从 Chrome 的 JavaScript 中传递对象给 Objective-C 或者单纯的接受来自 Node.js 中的回调结果，你都需要保证不同的代码对于通讯对象的期望之间的一致性。而本文即是在开发跨平台多终端的应用中，Slack 使用 TypeScript 来约束类型，从而避免意外的类型不一致导致的崩溃的实践经验分享。( https://parg.co/bRR )

- [《2017 里 JavaScript 带给我的感动》](https://parg.co/bRh)：本文作者纵览了在 2017 年中 JavaScript 生态圈可能迎来的一系列巨大变革。他首先对比了 JavaScript 与 Reason，浅述了二者的优劣对比。然后介绍了 WebAssembly 以及另一个新兴语言 Rust 未来可能在 JavaScript 生态圈中占据的一席之地。最后，作者还介绍了 Docker、Now.sh 以及 Github Pages 等一系列优秀的辅助开发工具，并且畅想了去中心化浪潮下 Web 的未来发展。( https://parg.co/bRh )

- [《JavaScript 中处理 undefined 的 7 个技巧》](https://rainsoft.io/7-tips-to-handle-undefined-in-javascript/)：不同于 Python 或者 Java 中仅有 null 或 nil 来表示空值，JavaScript 为我们提供了 undefined 与 null。本文则是深度分析了 undefined 与 null 的区别，讨论了实际工程开发中 undefined 的使用场景，譬如未初始化对象、不存在的对象属性或者方法、越界访问、无返回值的函数等；作者最后还给出了一些对于 undefined 的注意点，譬如提高内聚性降低耦合性等。( https://rainsoft.io/7-tips-to-handle-undefined-in-javascript/ )

- [《2017 年 JavaScript 测试技术概述》](https://parg.co/bf3)：本文涵盖了 2017 年中 JavaScript 领域流行的测试理念、名词与概念、工具以及测试的方法论。本文介绍了基本的测试类型的划分、常用测试工具的划分、以及 Jest、Mocha、Nightwatch 这样的常用测试工具的选项与实践技巧。( https://parg.co/bf3 )

- [《Microsoft Edge 中的 JavaScript 性能、WebAssembly 以及 Shared Memory》](https://parg.co/bfk)：JavaScript 的性能表现是 Web 开发中永恒的话题，而 Microsoft Edge 团队也在实时接收用户反馈以提升 Chakra JavaScript 引擎的性能表现。本文首先介绍了 Chakra 中的新特性，包括了一系列提升 JavaScript 性能表现的技巧；然后还讨论了 WebAssembly、Shared Memory 与 Atomics 等新特性在 Edge 中的具体实现。( https://parg.co/bfk )

- [《8 小时内学习 Node.js》](https://parg.co/bNy)：Node.js 是基于 Google Chrome V8 引擎的 JavaScript 框架，其能够用于开发类似于视频直播、单页应用等 IO 密集型的 Web 项目。而本文则是提供了完整的从零到一的 Node.js 学习路线图，包含了基础的环境构建、Console 使用、核心模块使用、基本的 Web 服务器搭建等等内容。( https://parg.co/bNy )

- [《CSS-in-JavaScript：基于组件的样式组织》](https://parg.co/bNe)：通过使用内联样式，我们能够利用 JavaScript 带来的可编程性的便利来组织样式代码。它能够为我们提供类似于 CSS 预处理器、命名空间等多方面的辅助。本文则是介绍了几个常见的适用于 CSS-in-JS   技术的场景，譬如排版、空格等。( https://parg.co/bNe )

- [《从零开始基于 JavaScript 构建简单神经网络》](https://parg.co/bNa)：本文不是纯粹的前端开发文章，对于听说过人工智能与神经网络并且有兴趣的开发者不妨一读。而本文则是渐进地介绍神经网络与深度学习理论基础、如何使用 JavaScript 实现简单的数学公式、如何实现简单的神经网络等内容。( https://parg.co/bNa )

- [《在 Web 开发中谨慎使用 CSS in JavaScript》](https://parg.co/bNR)：CSS 是有缺陷的，不过很多项目在选择使用 CSS-in-JavaScript 来组织样式的时候，却是对于 CSS 与 CSS-in-JS 很多的误解。本文以 Styled-Component 为例，列举出了常见的 9 个误解，譬如使用 CSS-in-JS 才能解决命名空间冲突、保证样式的可扩展性、带来了性能提升与样式文件的可组织性等等。( https://parg.co/bNR )

- [《d3.express：集成交互式编码环境》](https://parg.co/bNi)：本文介绍了尚在开发中的 d3.express，一个类似于 Python Juypter Notebook 的交互式编码环境。d3.express 允许开发者使用大量 d3 内置的功能函数，譬如加载远程的 CSV 文件；并且允许开发者交互地实时预览 SVG、Canvas 等绘制结果，有人认为 d3.express 会是一种基于 JavaScript 的更好的数据可视化解决方案。( https://parg.co/bNi )

- [《V8 不再使用基准测试引擎 Octane》](https://parg.co/bN9)：JavaScript 基准测试引擎是一段不断进化的历史。随着网页从原始静态页面到现在富客户端应用，都需要基准测试引擎能够与时俱进。SunSpider 是其中比较早的基准测试引擎，它为快速优化 JavaScript 提供了基础。但是，随着虚拟机开发者意识到微基准测试的局限性，基准测试引擎随之更新，针对 SunSpider 的短板进行优化，同时浏览器社区也将 SunSpider 从推荐基准测试引擎中剔除。Octane 基准测试套件最早发布于 2012 年，旨在减轻早期微基准测试引擎的一些缺陷。它源于 V8 的早期简单测试用例，最终成为通用网页性能的基准测试。Octane 包含 17 个不同的测试集，以覆盖各种不同的工作场景。Octane 的内容代表它创建时度量 JavaScript 性能的主流方式。( https://parg.co/bN9 )

- [《JavaScript 代码风格要素》](https://parg.co/bMn)：本文是 Eric Elliott 编写的 JavaScript 代码风格要素指南与建议，其借鉴了 1920 年的面向英文语言的 “The Elements of Style” 一文。本文介绍的关键要素包括：使用函数最为组合的原子单元并且保证函数的单一职责性、移除不需要的代码、使用更直观具有自解释性的变量命名、根据特性进行代码划分等等。( https://parg.co/bMn )

- [《简短的 WebAssembly 卡通指南》](https://parg.co/bVa)：现在有很多关于 WebAssembly 与 JavaScript 生态圈的讨论，人们往往关注于 WebAssembly 带来的巨大的性能提升以及它会如何颠覆现代 Web 开发。不过很多的介绍中并没有详细阐述隐藏在速度提升之后的具体细节，本文则是从整个 JavaScript 的演化史来介绍 WebAssembly 巨大性能提升的原因。( https://parg.co/bVa )

- [《基于 JavaScript 的异步依赖加载》](https://parg.co/bkG)：在 Web 应用开发中我们经常会将一些首屏不需要的脚本或者样式文件以异步方式加载；而本文则是介绍了多种异步加载网页中依赖资源的方式，作者还将常用的方法整合为了 fetchInject 这个开源库，方便使用者快速进行脚本地异步加载。( https://parg.co/bkG )

- [《基于 Electron 构建 Github Desktop Beta》](https://parg.co/bkK)：Electron 是著名的利用 HTML、CSS、JavaScript 等 Web 技术构建桌面应用的辅助工具；本文则是介绍了四个仅有原生应用开发背景的工程师如何利用 Electron 逐步构建  Github Desktop Beta 的经验。( https://parg.co/bkK )

- [《编写现代 JavaScript 代码》](https://dev.to/scastiel/writing-modern-javascript-code)：JavaScript 被仅用来更新页面元素状态的日子一去不返，我们也需要编写更加现代的 JavaScript 代码。本文则是介绍了如何利用 Linter 来格式化代码、如何使用 ES2015+ 特性、如何使用函数式编程等建议来提升 JavaScript 的代码质量。( https://dev.to/scastiel/writing-modern-javascript-code )

- [《重构 Airbnb 前端架构》](https://parg.co/bkA)：本文是近日 Airbnb 开发团队在思索重构代码库中 JavaScript 部分的经验总结，主要着眼于产品驱动开发以及技术沉淀、从传统的 Rails 架构中积攒的经验以及新的技术栈的某些特性等方面。本文首先介绍了从 Rails 迁移过程中的一些经验，譬如将原本完全的服务端渲染界面所需要的数据切分为了 API 与 Non-API 两大类，并且使用 Hypernova 来进行 React 服务端渲染。然后介绍了如何在应用前端通过引入懒加载与异步加载等方式提升前端性能与用户体验。( https://parg.co/bkA )

- [《最终，JavaScript 成为了一流语言》](http://www.infoq.com/cn/news/2017/05/JavaScript-become-language)：2003 年，保罗·格雷厄姆(Paul Graham)在文中提到，他的公司决定使用 Lisp(一门编程语言)，并且指出自己公司相比竞争对手的优势在于 Lisp。如果 Lisp 像法语，那么现如今的 JavaScript 就像英语一般。尽管二者的语法不一致，但英语是世界上最广泛使用的语言，JavaScript 是最广泛应用的计算语言。然而，JavaScript 仍未得到与其他语言同等的尊重。尽管它的使用率在创业公司和大型公司中持续增长，但若非必要，人们不会认为它是一门有用的语言。大公司的高级工程师声称它不是一门“真正的”编程语言，许多人并不知道除了操作像素外它还能被用于何处。。( https://parg.co/bkb )

- [《理解 WebAssembly 的文件格式》](https://parg.co/bk6)：为了保证 WebAssembly 能够被人们阅读与理解，需要提供对于 wasm 二进制格式的文本表示。该特性着眼于能够在文本编辑器、浏览器开发者工具等开发工具中浏览 WebAssembly 文件，而本文则介绍了这种文件格式的规范与工作原理，以及底层的字节码与上层的 JavaScript 对象之间的关联关系。( https://parg.co/bk6 )

- [《JavaScript 单元测试框架大乱斗：Jasmine、Mocha、AVA、Tape 以及 Jest》](https://parg.co/bJ5)：在开始新的前端项目时，我们常常会考虑应该使用哪一个单元测试框架，或者考虑应该为哪些代码添加单元测试。而本文则对于常用的 Web 开发中的单元测试框架 Jasmie、Mocha、AVA、Tape 以及 Jest 进行了横向对比，并且基于自己的经验给出了不同应用场景与需求下不同的单元测试框架选项建议。( https://parg.co/bJ5 )

- [《Web 前端开发的未来》](https://parg.co/bJr)：本文作者从自己的实践出发畅想了未来 Web 前端开发的可能方向；主要包括 JavaScript 新特性的增强以及对于状态管理的深入、从简单界面逐渐过渡到完整系统、原生与 Web 之间的边界逐步消失、CSS 会逐步模块化并且预处理器会逐步退出历史舞台、性能仍然是关键瓶颈以及 URL 会变得愈发重要等多个方面。( https://parg.co/bJr )

- [《面向 Web 设计师与开发者的免费电子书合集》](https://parg.co/bis)：本文介绍了十数本优秀的面向 Web 设计师与开发者的免费的电子书，涵盖了 CSS&HTML 基础、现代 JavaScript 开发、Git、PHP 等多个领域。( https://parg.co/bis )

- [《hyperapp》](https://github.com/hyperapp/hyperapp)：hyperapp 是仅 1KB 大小的用于构建前端应用的 JavaScript 库，它基于 Elm 架构，支持声明式界面编程与函数式编程，允许使用 JSX 声明界面并且灵活地分割与合并自定义的标签。hyperapp 实现的简洁明了，是不错的可以阅读源码的轻量级框架。( https://github.com/hyperapp/hyperapp )

- [《这 WebAssembly，是 Mozilla 赢了》](http://robert.ocallahan.org/2017/06/webassembly-mozilla-won.html)：Mozilla 提出 1 asm.js 与 Google Chrome 提出的 PNaCI 是都是致力于在浏览器中运行原生代码的技术方案。不过 PNaCI 却存在着自绝于 JavaScript 以及 HTML 等问题，并且其他的浏览器厂商很难去支持 PNaCI 标准。而 asm.js 则以轻量级的对于标准 Web 平台扩展的方式实现了这一目标，也就导致了最终 WebAssembly 决定靠近 asm.js 而不是 PNaCI。( http://robert.ocallahan.org/2017/06/webassembly-mozilla-won.html )

- [《JavaScript 模块现状》](https://parg.co/bi0)：近日随着各大浏览器纷纷开始支持 ESM(ECMAScript Moduls)，Node.js 中也计划引入 `*.mjs` 作为 ESM 的文件扩展名，关于 JavaScript 模块化的未来发展也在社区引发了热切讨论。本文则是首先介绍了 ESM 在浏览器、Webpack 等构件工具以及 Node.js 中未来的实现，然后讨论了个人对于 ESM 未来发展以及对于程序开发本身的潜在影响。( https://parg.co/bi0 )

- [《WebAssembly 初体验：重构简单游戏引擎》](http://blog.openbloc.fr/webassembly-first-steps/)：WebAssembly 为我们提供了构建高性能的前端应用的途径，而本文则从零开始介绍如何使用 C 来覆写简单的 JavaScript 游戏引擎并且将其编译为 WebAssembly。本文依次介绍了如何搭建基础的 Emscription 工具链、使用 JavaScript 引入 wasm 模块、覆写并且优化某个小型游戏引擎、两个引擎的性能评测等等部分。( http://blog.openbloc.fr/webassembly-first-steps/ )

- [《CSS 局部作用域变量详解》](https://parg.co/bLS)：CSS 自定义属性或者所谓的 CSS 变量，为我们带来了真正的、不同于 SASS 等预处理框架中使用的类占位符的动态变量。本文介绍了 CSS 变量的基本定义语法与使用，以及如何使用 JavaScript 来动态修改 CSS 变量值从而动态地进行界面重渲染，最后阐述了目前浏览器对于 CSS 变量的支持情况以及可以使用的兼容方式。( https://parg.co/bLS )

- [《Flow 与 TypeScript》](http://thejameskyle.com/adopting-flow-and-typescript.html)：本文主要对比了 Flow 与 TypeScript 这两个常用的 JavaScript 静态类型检测工具，首先介绍了在简单项目中如何使用 TypeScript 与 Flow。然后对比了二者在类型覆盖率上的渐进对比，会发现使用 Flow 之后因为其较为严格的类型要求会相对较快地实现高覆盖，而 TypeScript 则相对较为松弛。( http://thejameskyle.com/adopting-flow-and-typescript.html )

- [《JavaScript 中类的私有域定义》](http://thejameskyle.com/javascripts-new-private-class-fields.html)：目前对于类中的私有域定义已经达到了 Stage 2，本文即是详细介绍 #private 语法的使用以及设计理念。顾名思义，我们可以使用 #privateFieldName 方式来定义类中的私有域，该私有域仅允许该类的方法访问(包括静态方法)。本文还介绍了使用这种 HashTag 方式而不是其他语言中常见的 private 关键字来定义的考量。( http://thejameskyle.com/javascripts-new-private-class-fields.html )

- [《CSS 的现状》](https://parg.co/bLZ)：毫无疑问我们正在见证着 JavaScript 社区与生态的极速变化，而与此同时可能很多人没有关注到 CSS 社区的进展，本文作者则是对于 CSS 的现状进行了综述并且提出了个人的观点。本文作者主要提出了五个论点：我们可以使用 CSS Module 来替代原有的 BEM 等命名方案、使用 Flexbox 来替代 float、使用 CSS Grid 来替代第三方网格库、使用 CSS 内置的变量、计算函数等特性来替代 SASS 等预处理库，乃至于最终我们完全可以使用 CSS-in-JS 来替代 CSS。本文具有极强的主观色彩，请批判性阅读。( https://parg.co/bLZ )

- [《billboard.js》](https://github.com/naver/billboard.js)：基于 D3 v4+ 的轻量级可重用的 JavaScript 图表库，支持 IE 9 以上浏览器。billboard.js 为我们提供了常见的柱状图、时序图、饼图等等多种图表类型。( https://github.com/naver/billboard.js )

- [《如何用好 JavaScript console》](https://parg.co/b9o)：JavaScript 中最主要的的调试工具之一即是 `console.log`，而 console 对象还包含着其他几个常用的调试方法。本文则是介绍了 console 对象，以及如何使用它进行简单的时间消耗评测、优化数组或者对象输出格式、通过 CSS 优化输入等等。( https://parg.co/b9o )

- [《现代 Web 开发魔法书》](https://parg.co/bv9)：本书是对现代 JavaScript Web 开发中涉及知识的分类与介绍，来源于作者日常工作中发送给全栈 Web 团队新人的资源；目前已经纳入了超过两千的涵盖了项目、工具、插件、服务、文章、数据、站点等多方面的链接。本书包含了 Web 平台概述、HTML5，CSS，JS 特性介绍、常用的 GUI 框架与架构介绍、应用开发流程中使用的工具介绍等等栏目。( https://parg.co/bv9 )

- [《基于 JavaScript 的机器学习》](https://parg.co/b9K)：人工智能与机器学习的浪潮汹涌而来，JavaScript 也并非旁观者；可能有很多人认为 JavaScript 过于缓慢、缺乏大量的科学计算库、仅适用于 Web 开发，而本文以及系列文章则深入浅出地介绍了如何利用 JavaScript 进行常见的深度学习操作。本文即以简单的回归拟合为例，从最基础的库安装、数据导入、数据预处理到模型训练、模型预测 介绍了如何使用 JavaScript 进行简单的机器学习任务。( https://parg.co/b9K  )

- [《JavaScript 内存管理速成》](https://parg.co/b9p)：本系列文章以漫画的方式生动有趣地介绍了 JavaScript 中内存管理的相关知识，首先介绍了 JavaScript 与 C 这两个风格迥异的语言是如何进行内存管理的，然后讨论了  ArrayBuffers 与  ShardArrayBuffurs 存在的意义以及可能引起的临界情况，最后讨论了在未来 WebAssembly 开发中应该如何使用 Atomics 来处理并发情况下的临界情况。( https://parg.co/b9p  )

- [Rust、WebAssembly 与 Webpack](https://parg.co/byh)：WebAssembly 是新的运行于 Web 平台的二进制格式，我们能够将 C、C++、Rust 这些语言编译到 .wasm 文件格式中然后在浏览器环境下运行他们；通常这些编译后的代码在包体体积与运行速度上都会比 JavaScript 有明显提升。而本文则着眼于介绍如何在浏览器中执行底层的 Rust 代码，也可以参考[这篇文章](https://parg.co/by4)( https://parg.co/by4 )来了解更多的关于 WebAssembly 快速实践的知识。( https://parg.co/byh )

- [JavaScript 在嵌入式设备与物联网中的应用现状](https://parg.co/byr)：随着近年来 Web 的发展与 JavaScript 的崛起，JavaScript 被应用到了许多原本不曾想象到的场景中，从服务端、工作站、数据库、桌面环境到物联网设备中，都可以见到 JavaScript 的身影。而本文则概括了 JavaScript 在不同的嵌入式微型设备中的应用现状，并且选择了具有代表性的设备介绍了具体的使用场景与实践方法。( https://parg.co/byr )

- [基于 JavaScript 的机器学习：深入监督学习算法](https://parg.co/byR)：本文是基于 JavaScript 的机器学习系列的第二部分，主要介绍监督学习算法 kNN。kNN 算法通常被用于分类或者回归问题，本文首先介绍了 kNN 算法的基础原理，然后介绍了如何利用 ml-knn、csvyojson、prompt 等库对 Iris 数据集中的数据进行训练与预测。( https://parg.co/byR )

- [JavaScript 中存在纯函数吗？](https://parg.co/by6)：随着函数式编程在前端界面开发中的流行，纯函数的概念相信很多人都很熟悉，不过文本作者认为 JavaScript 中是否存在真正意义上的纯函数还值得商榷。本文首先介绍了纯函数的基本定义，然后给出了我们熟知的 JavaScript 中常见的纯函数定义范式。不过作者认为函数是 JavaScript 中的一等公民，函数变量或者某个 Object 的属性方法都有可能被重新赋值，因此 JavaScript 中无法构建真正严格的纯函数。( https://parg.co/by6 )

- [基于 Headless Chrome 的自动化测试](https://parg.co/beo)：本文介绍了如何在 Headless Chrome 环境中使用 Karma 作为测试驱动运行基于 Mocha 与 Chai 的自动化测试用例。Headless Chrome 允许我们在无界面环境下，使用特性完备的 Chrome 来执行 JavaScript 脚本并且渲染网页。本文首先介绍了使用 karma-chrome-launcher 来搭建本地启动 Chrome 环境，然后介绍了使用 Mocha 与 Chai 来编写基础测试用例，最后还讨论了如何自定义 Headless Chrome 启动器并且集成到 Travis CI 环境下。( https://parg.co/beo )

- [Webpack 中的作用域提升简介](https://parg.co/beE)：近日发布的 Webpack 3 中引入了所谓的 Scope Hoisting 新特性，从社区的反馈来看该特性已经在很多项目中成功地帮助开发者减少包体大小，提高首屏加载效率；本文则是简要地介绍了 Webpack 3 中作用域提升的基础原理。本文假设你对于 JavaScript 中闭包与模块语法有所了解，首先介绍了在老版本 Webpack 中采用的作用域分割机制及其存在的额外的性能损耗，然后对比呈现了在引入作用域提升机制之后，打包而成的文件的形式，与其带来的性能提升原理。( https://parg.co/beE )

- [为什么我们选择 TypeScript](https://parg.co/beb)：本文是 Reddit 工程师  Niranjan Ramadas 记述在前端技术选型时选用 TypeScript 的考虑过程。作者认为任何语言都有其优缺点，不过合适的语言应该具备如下特点：强类型、完备的工具链支持、能够用于生产环境等。作者还特地比较了 TypeScript 与 Flow，TypeScript 是能够编译到 JavaScript 的超集语言，而 Flow 则是提供了一系列额外的注解来实现类型系统。Flow 能够保证较好的类型覆盖，但是其对于多态性的支持并不是很好，并且 TypeScript 的社区也相对活跃。( https://parg.co/beb  )

- [TC39，ECMAScript 与 JavaScript 的未来](https://parg.co/bXD)：本文是 Nicolás Bevacqua 在腾讯前端大会上发表的同名演讲的总结，介绍了 TC39 与  ECMAScript  的含义，概述了 ECMAScript 中提案的步骤以及部分代表性提案，同时还畅谈了 JavaScript 的未来发展方向。作者介绍了 Stage 0、Stage 1、Stage 2、Stage 3 这四个提案处理进度的具体含义与要求，并且列举了 Array#includes、Named Captures 等具体的例子来阐述 JavaScript 不断衍化的语法特性；作者还介绍了未来社区会持续关注的代码转译与适配、代码质量保证、代码打包与发布等多个领域。( https://parg.co/bXD )

- [JavaScript 中的函数式编程就是反模式(\*本文仅代表原作者个人意见)](https://parg.co/beH)：作者在本文中对比讨论了 JavaScript 与 Clojure，并且介绍了 ClojureScript 的基础用法与优势所在。作者首先讨论了他认为的函数式脚本语言应该包含的特性，包括充分的 API、内建的不可变数据结构等；然后阐述了 lodash、fp、Rambda 这样的单个库存在的不足，譬如  ImmutableJS 虽然能较好地解决部分问题，但是却会割裂使用者的开发体验。最后笔者介绍了 ClojureScripe 的特性与优点，包括能够在编辑器中单行运行、内建的大量转化函数、较好地性能与代码可读性保证等等。( https://parg.co/beH  )

- [JavaScript 项目开发样式指南](https://github.com/wearehive/project-guidelines)：开启新的项目就好像在绿地上肆意撒欢，此时的开发者拥有极大的自由；不过如果缺乏良好的基石，未来的项目维护可能会成为你的梦魇。本文即搜集了来自 [Hive](http://wearehive.co.uk/) 研发团队的 JavaScript 项目开发指南，涵盖了 Git、文档规范、环境变量控制、依赖管理、测试、文件结构与命名、代码样式、日志、API 设计等多个方面；更多 JavaScript 工程实践资料参考[ https://parg.co/bIO  ](https://parg.co/bIO)。( https://github.com/wearehive/project-guidelines  )

- [前端 JavaScript 面试问题总结](https://parg.co/bIL)：本文作者发现目前并没有太多令人满意的前端 JavaScript 面试问题列表，因此他基于自己的面试经历与实践总结出了本文。本文主要包含以下部分，首先是基础概念的认知，譬如对于闭包、EventLoop、REST 等概念的介绍；然后是对于编码能力的考量，譬如对于常见的数据结构与算法的实现、代码调试能力与错误定位的评测等等；最后是对于整体系统设计能力的考量，譬如如何设计全栈的 Twitter 实现架构等等。( https://parg.co/bIL )

- [JavaScript 开发中常用的十大数据结构详解](https://parg.co/bIC)：数据结构是软件开发的重要组成部分之一，也是求职面试中常见的主题之一；本文将回顾介绍 JavaScript 中常用的十大数据结构，并且给出详细的教程与在线实践链接。本文涉及到的数据结构包括链表、栈、队列、集合、映射、哈希表、二叉搜索树、Trie 树、二叉堆、图等；更多数据结构与算法相关资料参考 [ https://parg.co/bIt  ](https://parg.co/bIt)。( https://parg.co/bIC  )

- [代码风格约定与标准](https://github.com/Kristories/awesome-guidelines)：本仓库提供了一系列的各个语言的常用代码风格约定与标准，与 JavaScript 相关的包含了来自 Google、Airbnb 等多个公司或者社区的样式规范，还有包括 HTML、CSS、SCSS 等一系列 Web 相关的规范。

- [ES6 中的 JavaScript 工厂函数实现](https://parg.co/bay)：本文归属于  Eric Elliott 发布的 Composing Software 系列，介绍在 JavaScript ES6 语法背景下如何实现工厂函数。所谓工厂函数即是非类或者构造函数的，能干会某个新创建对象的函数；工厂函数能够简化我们创建新对象的过程，本文即是详细地介绍了如何实现工厂函数，也是一篇不错的 ES6 函数语法讲解；更多 JavaScript 相关资料参考[ https://parg.co/bMI  ](https://parg.co/bMI)。

- [基于 JavaScript 的 Web 应用的端到端测试工具对比](https://mo.github.io/2017/07/20/javascript-e2e-integration-testing.html)：本文回顾了常见的基于  JavaScript 的，用于对 Web 应用进行端到端测试的工具，并且对它们进行了简单对比。本文首先探讨了项目中应用端到端测试的意义，然后列举了当前可用的基于 JavaScript 的界面自动化测试框架，然后比较了不同的端到端测试框架的流行程度与基本的代码片风格；更多 Web 测试相关资料参考[ https://parg.co/bWd  ](https://parg.co/bWd)。

- [JavaScript Binary AST 提案](https://github.com/syg/ecmascript-binary-ast/)：随着  Web 应用体积的不断增加，页面启动时间逐渐成为了应用性能的主要瓶颈之一；我们可以通过多种方式来缓存代码，但是对于大型代码库的解析却难以直观解决。譬如在现代的笔记本上，Chrome 在加载 Facebook.com 的时候需要花费 10% 到 15% 的时间来解析 JavaScript 代码。本文介绍了由多位工程师提出的旨在提升 JavaScript 解析速度的 Binary AST 方案，本文介绍了当前解析中的瓶颈所在，并且给出了相应的解决建议。

- [自定义基于 JavaScript 的 16 位虚拟机](https://francisstokes.wordpress.com/2017/07/20/16-bit-vm-in-javascript/)：本文介绍了如何利用  JavaScript 自定义 16 位虚拟机，主要包括如何设计某个简单的汇编语言、如何构建某个编译器能够将 `*.asm` 文件编译为可执行格式、如何构建某个能够模拟内存、CPU 以及部分 IO 操作的虚拟机。文章内容依次介绍了虚拟硬件的基础、限制、汇编语言、编译器、调试器、编码与解码等内容；更多 JavaScript 相关资料参考[ https://parg.co/bMI  ](https://parg.co/bMI)。

- [JavaScript 设计模式学习](https://parg.co/bgG)：本书是  Addy Osmani 著作的开源书籍，主要介绍面向 JavaScript 语言的经典与现代的常用设计模式。所谓设计模式即是软件设计中常见问题的可复用解决方案，对于任何一门编程语言都是非常值得探索的话题。本文首先概述了设计模式的基础理论，然后介绍了 JavaScript 中常见的十余种类与对象的设计模式，接下来介绍了 JavaScript 界面设计相关的 `MV*`   设计模式，然后还介绍了 JavaScript 模块化设计以及 jQuery 中的设计模式等内容；更多 JavaScript 设计模式相关参考[ https://parg.co/bIO ](https://parg.co/bIO)。

- [V8 新的 Turbofan JIT 编译器带来的性能特性概述](https://www.nearform.com/blog/node-js-is-getting-a-new-v8-with-turbofan/)：V8 JavaScript 引擎最早是 Google 为 Chrome 浏览器开发的 JavaScript 虚拟机，其设计的初衷就是为了让 JavaScript 能够高速运行；而这种性能优化的保障就是所谓 JIT 编译器。本文着眼于介绍 V8 新的 Turbofan JIT 编译器提供的新的性能特性能够为应用带来的优化；本文依次介绍了使用 delete 操作符与设置为 undefined 这两种不同的去除对象属性的方式在新的编译器下的表现差异、对于 Arguments 参数不同操作的对比、柯里函数与 bind 操作符的优化，以及对象遍历、对象创建和对于新旧引擎中对于常见的 Winston 等日志框架的性能对比等内容。更多 JavaScript 引擎相关知识参考[ https://parg.co/bgp  ](https://parg.co/bgp)

- [JavaScript 之路](https://github.com/bpesquet/thejsway)：本书希望为任何对  JavaScript 有兴趣的开发者提供 JavaScript 的多领域知识，其兼具了入门简单、对初学者友好、使用 ES2015 语法以及规范的样式指南等特点。本书主要包含以下章节：JavaScript 语法基础、利用 DOM 接口创建交互性的网页、构建完整的 Web   应用等内容；更多 JavaScript 相关资料参考[ https://parg.co/bMI ](https://parg.co/bMI)。

- [2017 Web 开发趋势](https://hackernoon.com/web-development-trends-2017-387421cf9c23)：Web 开发在 2016 年里得到了长足的发展与进步，而本文则高屋建瓴地分析了 2017 年中 Web 开发可能面临的机遇与挑战。作者首先讨论了人工智能的前景以及 Web 与之相结合的案例，然后讨论了物联网行业中 Web 相关的开发案例；接下来作者分析了崛起的 JavaScript 以及目前流行的项目，然后又从静态网站生成器、虚拟现实、GIFs、Bots 等角度讨论其他的发展方向。

- [JavaScript 中有趣而又无语的例子](https://github.com/denysdovhan/wtfjs)：JavaScript  是一门有趣的语言，它有着简单的语法、庞大的生态系统与社区，不过 JavaScript 中也有着很多令人无语的地方。本文即是对 JavaScript 中一些有趣的、出乎意料的用法收集，对于初学者是个不错的深入教程，而对于资深开发者也可以拿来作为面试题目。本文中包含的例子譬如 `[] == ![]`、NaN 的用法注意、try-finally 等等；更多 JavaScript 相关资料参考[ https://parg.co/bMI ](https://parg.co/bMI)。

- [基于 Proxy 的 PopUnder 库反混淆](https://www.youtube.com/watch?v=8UqHCrGdxOM)：本视频通过对某个商用的 Chrome 59 中 PopUnder 库，的执行过程解析，来介绍如何利用 ES6 的 Proxy 进行，简单的 JavaScript 混淆代码逆向破解。视频还是挺有意思的，作者首先分析了经过混淆的源代码，发现无法下手；然后利用 Proxy 监听常见的 Windows 中 createElement 等函数的调用来了解该库的执行流程，最后再根据 API 的调用顺序复现出该库。更多 JavaScript 设计模式相关参考[ https://parg.co/bIO ](https://parg.co/bIO)。

- [三周时间打造全栈 JavaScript Web 应用](https://parg.co/bjw)：本文记录了某个编程初学者如何用三周时间，循序渐进地从零构建出，基于 JavaScript 的全栈电子商务应用。本文从最初的产品设计与原型图构建开始，然后介绍了如何选择合适的数据结构与数据库。接下来介绍了如何创建 Github 仓库并且使用敏捷开发流程，最后介绍了如何利用 Express 与 Firebase 搭建服务端、使用 React 以及 Victory.js 构建前端应用等内容；更多 JavaScript 相关学习参考[现代 JavaScript 开发：语法基础与实践技巧](https://parg.co/bWW)。

- [基于 CSS 与 JavaScript 的帧动画教程](https://parg.co/b29)

#开源项目

- [《开源在线代码演示网站 Dwitter 发布 》](https://www.dwitter.net/)：Dwitter 是类似于 CodePen 这样的，不过专注于 JavaScript 代码片演示的网站，已经有很多开发者在上面贡献了奇妙的基于 JavaScript 的动画或者小程序。

- [《开源在线代码演示网站 Dwitter 发布 》](https://www.dwitter.net/)：Dwitter 是类似于 CodePen 这样的，不过专注于 JavaScript 代码片演示的网站，已经有很多开发者在上面贡献了奇妙的基于 JavaScript 的动画或者小程序。

- [《notie》](https://github.com/jaredreich/notie)：这是一个轻量级的、零依赖的面向 JavaScript 的通知、输入以及选择套件库。它允许弹出警示信息、确认输入框、允许用户输入信息、允许用户进行选择以及进行日期选择等。( https://github.com/jaredreich/notie  )

- [《在浏览器中实现自动驾驶汽车》](http://janhuenermann.com/projects/learning-to-drive)：人工智能与深度学习的浪潮滚滚而来，也给我们带来了很多有趣的应用。该项目利用 JavaScript 创建了一个完整的自我学习的代理，能够在一个  2D 环境下控制某个车辆自动规避各种障碍  。用户还可以通过鼠标绘制出新的障碍，而小车可以通过强化学习不断进行自我更新，值得一试。( http://suo.im/4egERz )

- [《UnCSS》](https://github.com/giakki/uncss)：UnCSS 能够帮助你从样式表中移除 HTML 中未被用到的样式，它支持多文件以及 JavaScript 样式定义，并且提供了接口、命令行、构建插件、POSTCSS 插件等多种使用方式。( https://github.com/giakki/uncss )

- [《wasm-loader》](https://github.com/ballercat/wasm-loader)：wasm-loader  是能够用于 Webpack 的 WASM 二进制模块导入工具，其能够允许你在 JavaScript 代码中导入 wasm 格式文件并且将二进制文件打包成为 JS Bundle 的一部分  。( https://github.com/ballercat/wasm -loader )

- [《marky》](https://github.com/nolanlawson/marky)：marky 是基于 performance.mark/measure 封装的高性能 JavaScript 计时器，其相较于`console.time()`以及`console.timeEnd()`具有更好地性能表现，相较于简单的`Date.now()`具有更好地准确度。( https://github.com/nolanlawson/marky )

- [《Planck.js》](http://piqnt.com/planck.js/)：Planck.js 是基于 JavaScript 的 2D 物理引擎，能够用于创建跨平台的 HTML 游戏。( http://piqnt.com/planck.js/ )

- [《Tippy.js》](https://atomiks.github.io/tippyjs/)：Tippy.js 是基于纯粹的 JavaScript 的轻量级无添加的 ToolTip 库。( https://atomiks.github.io/tippyjs/)

- [《Fathom》](https://github.com/mozilla/fathom)：Fathom 是 Firefox 开源的用于提取网页中有意义内容的 JavaScript 框架，其能够有效识别页面中的前进/后退按钮、地址表单以及主文本内容等等。( https://github.com/mozilla/fathom )

- [《k6》](https://github.com/loadimpact/k6)：k6 是基于 Go 与 JavaScript 开发的现代压测工具，它提供了非常清晰简单的 JavaScript 接口；同时它基于 Go 提供了分布式的部署方案，支持云端部署与 REST 接口控制。( https://github.com/loadimpact/k6 )

- [《Mavo》](https://parg.co/b8n)：Mavo 是纯粹的基于 HTML 标记的用来创建富客户端 Web 应用的框架，它允许开发者在没有服务端或者 JavaScript 脚本的情况下快速创建动态应用。( https://parg.co/b8n )

- [《Workbox》](https://workboxjs.org/)：Workbox 是来自 Google Chrome 团队的快速将现有应用转化为 Progressive Web Apps 的 JavaScript 库；Workbox 允许我们通过 Webpack 插件、Gulp 插件以及 npm 脚本的方式快速地为当前应用的资源创建对应加载 ServiceWorker。( https://workboxjs.org/ )

- [《Birdview.js》](http://achrafkassioui.com/birdview/)：Birdview.js 是个非常有趣的 JavaScript 插件，它能将整个页面以鸟瞰图的方式呈现给用户，并且允许用户直接进入选中的点。( http://achrafkassioui.com/birdview/ )

- [decaffeinate](https://github.com/decaffeinate/decaffeinate)：CoffeeScript 在很长一段时间内帮我们解决了传统 JavaScript 中存在的痛点，不过随着 ES6&ES7 的逐步流行，我们还是要从 CoffeeScript 中回归到 JavaScript；decaffeinate 正是能够方便地将 CoffeeScript 代码转化为现代的 JavaScript 代码。( https://github.com/decaffeinate/decaffeinate )

- [golden-layout](http://golden-layout.com/)：golden-layout 是非常强大的基于 JavaScript 的 Web 布局工具，它支持窗口的拖拽、缩放以及原生式的弹窗，同时  golden-layout  还提供了丰富的接口以方便动态增删元素、修改布局或者自定义主题。golden-layout 官网还提供了与 RequireJS、React、Angular 等多种其他流行框架协同使用的示例。( http://golden-layout.com/  )

- [icaro](https://github.com/GianlucaGuarini/icaro)：icaro 是轻量、高效地 JavaScript 对象观察者实现，能够自动监测 JavaScript 中对象的变化并且进行相应地譬如 DOM 更新等操作。icaro 使用了大量的 ES6 的特性，譬如 Proxies、WeakMaps、Maps 以及 Symbols，是非常不错的可以用来学习利用最新的语言特性实现 JavaScript 响应式框架的开源库。( https://github.com/GianlucaGuarini/icaro )

- [Bundle Buddy](https://github.com/samccone/bundle-buddy)：Bundle Buddy 能够通过分析编译生成的 SourceMap 来寻找 JavaScript 代码块之间的源代码冗余情况。该工具能够帮助开发者寻找合适的代码分割点以降低最终发布应用的不稳定性，同时还能提升页面加载性能。

- [gpu.js](https://github.com/gpujs/gpu.js)：在[上周的前端每周清单](https://zhuanlan.zhihu.com/p/27815800)中我们介绍过 GPGPU(General Purpose Computing on GPUs)的概念与基于 WebGL 的实现方式，而 gpu.js 就是提供了浏览器中快速实现 GPGPU 的单文件 JavaScript 库。gpu.js 能够自动地将某些特定的 JavaScript 函数编译为中间语言，然后利用 WebGLS API 使其运行在 GPU 中；而在某些无法使用 GPU 的环境下，仍然会将这些函数以正常的 JavaScript 执行流运行。

- [Wade](https://github.com/KingPixil/wade)：Wade  是轻量级、高性能的 JavaScript 搜索库，Wade 会在构建阶段自动地为输入数组中的每个字符串的字符构建反向索引，然后在搜索时候快速返回用户输入关键字对应地下标；Wade 优势在于对于相同的数据集进行多次搜索时能够避免冗余的遍历。

- [swagger-decorator](https://parg.co/bWb)：swagger-decorator  是旨在一处注解多处使用的 JavaScript & Node.js 应用中实体类与方法注解库，其能够用于实体类生成与校验、Sequelize ORM 实体类生成、面向 Koa 的路由注解与 Swagger 文档自动生成的场景。

- [Nano ID](https://github.com/ai/nanoid): Nano ID 是轻量级的、支持 URL 的 JavaScript 唯一 ID 生成器，它使用了强力密码加密的随机 API，能够保证生成符号分布的平均性。
