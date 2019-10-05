# 前端每周清单半年盘点之 CSS 篇

[前端每周清单](http://www.infoq.com/cn/FE-Weekly)专注前端领域内容，以对外文资料的搜集为主，帮助开发者了解一周前端热点；分为新闻热点、开发教程、工程实践、深度阅读、开源项目、巅峰人生等栏目。欢迎关注【前端之巅】微信公众号(ID：frontshow)，及时获取前端每周清单；本文则是对于半年来发布的前端每周清单中的 CSS  相关的教程实践与开源项目的盘点，可以查看[这里](https://parg.co/bh1)获得往期清单或者其他盘点篇。

# 教程实践

- [《2017 前端开发手册》](https://frontendmasters.gitbooks.io/front-end-handbook-2017/content/)：[Front-End Developer Handbook 2017](https://frontendmasters.gitbooks.io/front-end-handbook-2017/content/) 由 [Cody Lindley](http://codylindley.com/) 编写，面向每一个希望学习前端的开发者。该手册概括地讨论了前端工程化的相关实践：在 2017 年中我们应该使用哪些前端工具以及如何学习去使用这些数据。该手册的内容包含了 Web 技术的基础：HTML、CSS、DOM 以及 JavaScript，以及基于这些技术构建的优秀开源项目。

- [《Web APP 实现水平滑页翻页交互效果的要点解析》](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484994&idx=1&sn=879c49723b9cf48972d35618229bbf3a)：本文是张鑫旭老师分享的起点中文网支持水平滑页阅读效果的实践，其核心是利用 CSS3 column 分栏布局。CSS3 column 多栏布局是支持比较早的 CSS3 布局方式，目前 IE10+以及其他所有现代浏览器都支持，IE 浏览器不需要私有前缀，FireFox 和 Chrome 虽然现在也不需要，但是，考虑到移动端以及可能一些用户浏览器升级不及时的现状，因此，-webkit-以及-moz-前缀目前还不能省略。

- [《掌握 CSS Animation》](https://stories.jotform.com/how-to-use-css-animations-like-a-pro-dfacc1e97338#.2myk0rrar): 利用 Keyframes 以及各种各样的动画属性：timing、delay、play state、animation-count、iteration count、direction、fill mode、will change 来构建交互动画。

- [《CSS Grid 指南》](https://tympanus.net/codrops/css_reference/grid/):  网格系统是布局设计的核心之一，在 Web 开发中我们经常需要借助第三方库来创建合适的网格系统。而 CSS Grid 则是一个二维布局系统，能够辅助开发者创建基于网格的用户界面，此文则是详细地介绍 CSS Grid 的语法细节以及调试实例。( https://tympanus.net/codrops/css_reference/grid/ )

- [《Flexbox 语法清单》](http://yoksel.github.io/flex-cheatsheet/)：该网页提供了交互式的 CSS Flexbox 教程，详细介绍了 Flexbox 的使用语法与经典案例。( http://yoksel.github.io/flex-cheatsheet/ )

- [《另一种 CSS 压缩思路》](https://luisant.ca/remynifier)：本文作者提出了一种新的 CSS 压缩思路，有可能会损坏原有的 CSS 文件，不过其压缩比率相较于现有的通用 CSS 压缩策略会更为优秀。( https://luisant.ca/remynifier )

- [《Animista》](http://animista.net/)：Animista 是开箱即用的 CSS 动画库，其作者还发布了非常易用的在线预览与选择站点，适合于设计人员选择合适的动画效果。( http://animista.net/ )

- [《CSS Grid 典型案例》](https://sii.im/playground/css-grid/)：该网站提供了一系列基于 React 编写的 CSS Grid 布局的测试样例，是个不错的从实例中学习 CSS Grid 语法与使用的教程。( https://sii.im/playground/css-grid/#/ )

- [《8 个可能你没考虑过关于 CSS 的知识》](https://parg.co/bhl)：不同的技术学习曲线可能相差甚远，而 CSS 的初学者则会觉得相当容易入手，但是深入之后可能发现连居中都不甚容易。本文作者是个深度 CSS 热爱者，他从自己多年的经验介绍了 CSS 中的垂直居中、100% 属性、float、z-index 等等多个细节知识点。( https://parg.co/bhl )

- [《实例讲解 CSS 盒模型》](https://parg.co/bhN)：有经验的前端开发者都知道 HTML 中的布局就是盒套盒，而本文则是以某个街区的例子深入浅出地讲解 CSS 中的盒模型。( https://parg.co/bhN )

- [《构建高性能扩展与折叠动画》](https://parg.co/bCz)：本文以菜单伸缩动画为例，介绍如何构建高性能扩展与折叠动画。较简单但是性能有缺陷的方式譬如修改元素宽高或者使用 clip 变换属性；而本文主要是由 CSS3 的 scale 变换来实现菜单的扩展与折叠，其为了保证菜单按钮的视觉效果与整体的平滑缩放还使用了所谓的对冲缩放技巧。( https://parg.co/bCz )

- [《使用 CSS Grid 打造私家花园》](http://cssgridgarden.com/)：本网站是个非常不错的互动式学习 CSS Grid 的站点，其以 28 个互动的花园小游戏来带你一步一步学习 CSS Grid 的语法与实践。( http://cssgridgarden.com/ )

- [《隐藏幕后的 CSS 知识点》](https://madebymike.com.au/writing/the-invisible-parts-of-CSS/)：在我们日常的开发中，往往关注于让界面看上去符合预期，而往往不会去关注那些隐藏的属性知识点以及 CSS 的幕后原理。本文则是对于 CSS 的渲染过程、级联规则、Visual Formatting Model、展示类型、位置布局等等。( https://madebymike.com.au/writing/the-invisible-parts-of-CSS/ )

- [《CSS-in-JavaScript：基于组件的样式组织》](https://parg.co/bNe)：通过使用内联样式，我们能够利用 JavaScript 带来的可编程性的便利来组织样式代码。它能够为我们提供类似于 CSS 预处理器、命名空间等多方面的辅助。本文则是介绍了几个常见的适用于 CSS-in-JS   技术的场景，譬如排版、空格等。( https://parg.co/bNe )

- [《CSS Grid 布局初体验》](https://parg.co/bNW)：最近 CSS Grid 布局大红大紫，吸引了很多开发者的目光。而最新版的 Firefox、Chrome、Opera、Safari 都添加了对于 CSS Grid 的支持。本文则是聚焦于何谓 CSS Grid 布局、它可以做些什么以及如何投放到生产环境等内容。( https://parg.co/bNW )

- [《在 Web 开发中谨慎使用 CSS in JavaScript》](https://parg.co/bNR)：CSS 是有缺陷的，不过很多项目在选择使用 CSS-in-JavaScript 来组织样式的时候，却是对于 CSS 与 CSS-in-JS 很多的误解。本文以 Styled-Component 为例，列举出了常见的 9 个误解，譬如使用 CSS-in-JS 才能解决命名空间冲突、保证样式的可扩展性、带来了性能提升与样式文件的可组织性等等。( https://parg.co/bNR )

- [《sakura》](https://github.com/oxalorg/sakura)：Sakura 是轻量级的 CSS 预置样式库，我们只需要简单地引入 Sakura 样式文件到网页中就能将朴素的网页转化为较为美观的、可读性较好的页面。( https://github.com/oxalorg/sakura )

- [《在案例分析中学习 CSS Animation 与 Web Animation API》](https://parg.co/btn)：本文由作者实现的某个[ Logo 动画入手](https://bitsofco.de/how-i-animated-the-bitsofcode-logo/)，首先介绍了如何利用 Web Animations API 创建简单的 KeyFrame 动画，包括创建动画对象以及将其应用到具体的元素中；接下来作者介绍了该动画的 CSS 实现版本，还对比分析了二者在性能上的差异。( https://parg.co/btn )

- [《高性能动态 CSS 样式》](https://parg.co/btW)：本文是对 [JSS](http://cssinjs.org/) 新近提供的[函数式值的介绍](http://cssinjs.org/json-api?v=v7.1.1#function-values)，其与 React 内联样式以及其他 CSS 解决方案相比有数倍的性能提升。在 Web 开发中动态设置样式往往会触发页面的重渲染，而本文则是介绍了如何使用 CSSOM 的 API 来在元素渲染之前即完成样式的设置。( https://parg.co/btW )

- [《Web 前端开发的未来》](https://parg.co/bJr)：本文作者从自己的实践出发畅想了未来 Web 前端开发的可能方向；主要包括 JavaScript 新特性的增强以及对于状态管理的深入、从简单界面逐渐过渡到完整系统、原生与 Web 之间的边界逐步消失、CSS 会逐步模块化并且预处理器会逐步退出历史舞台、性能仍然是关键瓶颈以及 URL 会变得愈发重要等多个方面。( https://parg.co/bJr )

- [《统一样式语言》](https://parg.co/bJi)：近几年 CSS-in-JS 迅猛发展，各种实现库也是层出不穷。而本文作者，也是 CSS Modules 的作者之一，则是高屋建瓴地介绍了 CSS-in-JS 的特点与解决的问题，梳理了人们之前对于 CSS-in-JS 存在的误解。并且横向比较了多个 CSS-in-JS 的优缺点与适用场景，最后还畅想了下 CSS-in-JS 的未来。( https://parg.co/bJi )

- [《面向 Web 设计师与开发者的免费电子书合集》](https://parg.co/bis)：本文介绍了十数本优秀的面向 Web 设计师与开发者的免费的电子书，涵盖了 CSS&HTML 基础、现代 JavaScript 开发、Git、PHP 等多个领域。( https://parg.co/bis )

- [《写给 CSS 的情书》](https://parg.co/biC)：世人诟病 CSS 久矣，而本文作者则对于 CSS 一见钟情且矢志不渝。本文是一篇不错的了解不同端开发中样式设置方式的文章，作者介绍了从 Java Applets 开始到 Android、iOS 应用开发中界面样式与主题设置的方式与技术，论证了 CSS 相较于这些方式具有更好的灵活性与便捷性。( https://parg.co/biC )

- [《CSS 局部作用域变量详解》](https://parg.co/bLS)：CSS 自定义属性或者所谓的 CSS 变量，为我们带来了真正的、不同于 SASS 等预处理框架中使用的类占位符的动态变量。本文介绍了 CSS 变量的基本定义语法与使用，以及如何使用 JavaScript 来动态修改 CSS 变量值从而动态地进行界面重渲染，最后阐述了目前浏览器对于 CSS 变量的支持情况以及可以使用的兼容方式。( https://parg.co/bLS )

- [《面向生产环境的前端性能优化清单》](https://parg.co/bLP)：在 Web 前端开发中，产品经理更多的会关注于寻找优秀的设计与内容，而开发者同样需要关注于如何进行前端性能优化。作者在本文中则分享了多年经验累积的性能优化清单，包括常见的资源优化、CSS 优化中常用的工具、常用的性能检测工具等等。( https://parg.co/bLP )

- [《不会做动画的前端不是好开发》](https://parg.co/bL0)：自从有了前端开发这个概念以来，这个岗位所做的事情都是围绕着人机交互来开展的，主要包括展示信息给用户看，然后获取用户的意图并做出响应。随着终端设备以及业务的快速发展，前端工程也越来越复杂，所以分工也进一步精细化，有侧重做工具化与模块化架构的，有侧重无线体验或者 Web 与 Native 融合方面的，也有侧重复杂的商家后台或者数据可视化的，甚至有部分公司把 HTML+CSS 与 JS 的工作也分开的，所以出现了不同前端工程师会有不一样的侧重点。而目前越来越多的业务线有越来越高的动画类需求，而在动画方面能紧跟技术趋势的优秀前端实在是比较难找，本文则希望让那些想在动画方面有些提升的朋友有所帮助。( https://parg.co/bL0 )

- [《CSS 的现状》](https://parg.co/bLZ)：毫无疑问我们正在见证着 JavaScript 社区与生态的极速变化，而与此同时可能很多人没有关注到 CSS 社区的进展，本文作者则是对于 CSS 的现状进行了综述并且提出了个人的观点。本文作者主要提出了五个论点：我们可以使用 CSS Module 来替代原有的 BEM 等命名方案、使用 Flexbox 来替代 float、使用 CSS Grid 来替代第三方网格库、使用 CSS 内置的变量、计算函数等特性来替代 SASS 等预处理库，乃至于最终我们完全可以使用 CSS-in-JS 来替代 CSS。本文具有极强的主观色彩，请批判性阅读。( https://parg.co/bLZ )

- [《现代 Web 开发魔法书》](https://parg.co/bv9)：本书是对现代 JavaScript Web 开发中涉及知识的分类与介绍，来源于作者日常工作中发送给全栈 Web 团队新人的资源；目前已经纳入了超过两千的涵盖了项目、工具、插件、服务、文章、数据、站点等多方面的链接。本书包含了 Web 平台概述、HTML5，CSS，JS 特性介绍、常用的 GUI 框架与架构介绍、应用开发流程中使用的工具介绍等等栏目。( https://parg.co/bv9 )

- [构建生产环境下的 CSS Grid 布局](https://parg.co/byc)：CSS Grid 为我们带来了真正的网格布局解决方案，会为现有的 Web 布局方式注入新的活力。本文则介绍了 CSS Grid 的基础概念和它带来的机会与挑战，应该如何在实践中利用 CSS Grid 进行应用布局；作者还以 WordPress 主题为例，介绍了真实应用开发中存在的问题、对比了老的解决方法与基于 CSS Grid 的布局方式。本文首先介绍了 CSS Grid 的基础语法与设计模式，然后讨论了在生产环境中应该如何一步步地引入 CSS Grid，包括如何从草稿设计开始进行语义化布局以及对于浏览器兼容性的保证等。( https://parg.co/byc )

- [你可能并不知道的 16 个 SCSS 特性](https://gist.github.com/jareware/4738651)：作者自 2009 年以来一直使用 SCSS/SASS 来进行大部分的样式工作，而本文即是对于某些有用但是并不一定为人所知的 SCSS 特性进行介绍。本文介绍的特性包括了父选择器的灵活用法、控制流指令、默认函数参数、扩展操作符等等；更多 CSS/SCSS 相关资料参考[ https://parg.co/baH  ](https://parg.co/baH)。

- [大幅度减少 CSS 包体大小](https://parg.co/b19)：本文作者介绍了自己在构建某个在线售票的网站过程中，如何利用样式类名分割与作用域隔离来大幅度减少 CSS 打包文件体积的实践技巧。作者主要使用 CSS Modules，然后自定义了其样式类名生成规则来保证生成较短的样式类名并且使用作用域隔离来保证样式隔离。

- [渐进式 CSS 布局：从 Floats 到 Flexbox 到 Grid](https://parg.co/bgZ)：随着各大现代浏览器逐步支持 CSS Grid 布局，越来越多的开发者在尝试使用这种新型的布局方式。不过鉴于目前还存在着大量的老版本浏览器，作者在本文中重点讨论了如何利用渐进式 CSS 布局增强的方式来应对不同浏览器环境下的布局解决方案，并且根据运行环境来渐进增强；更多 CSS/SCSS 相关资料参考[ https://parg.co/baH ](https://parg.co/baH)。

- [突破 CSS 前端面试](https://parg.co/bFO)：不同于传统的软件工程师面试比较注重算法，前端面试可能更多的注重综合能力以及领域语言的掌握；本文即着眼于对于面试中常见的  CSS 问题的总结与介绍。本文列举的问题譬如  Resetting 与  Normalizing 区别、floats 工作机制阐述、z-index 与  stacking context 比较、BFC 描述等等；更多 CSS/SCSS 相关资料参考[ https://parg.co/baH ](https://parg.co/baH)。

- [基于 Shadow DOM 的样式封装](https://meowni.ca/posts/shadow-dom/)：Shadow DOM 是 Web Components 标准的重要组成部分，它能够将 DOM 树进行隔离封装，而本文则是介绍如何利用 Shadow DOM 实现对于样式类的隔离封装。由于 CSS 并没有提供内置的模块化或者作用域机制，而在大型项目中不同组件间的样式又极易引发冲突，因此我们需要选择合适的 CSS 样式隔离方案。目前常用的隔离方案有 BEM 命名策略、IFrame、CSS Modules、CSS-in-JS 等，本文首先盘点了这些方案的优势与不足；然后介绍了 Shadow DOM 的基本原理以及如何应用到样式封装上。更多 CSS/SCSS 相关资料参考[这里](https://parg.co/baH)。

- [Chrome DevTools 进阶指南](https://parg.co/bzC)：Chrome DevTools 是非常强大的开发工具，而本文则是以数十张动图的方式细致生动地介绍了如何使用 Chrome DevTools 进行常见的开发调试。本文涉及的内容包括了如何进行 CSS 覆盖率分析、如何进行 CPU 使用率分析、如何不使用扩展而进行浏览器截屏、如何进行 Profiling、如何进行时间轴回溯等内容；更多  Web 调试相关资料参考[这里](https://parg.co/bzN)

- [探索 ReactJS 中的 CSS 架构](https://parg.co/bzq)：本文着眼于讨论  React 开发中常用的 CSS 架构，从 BEM 命名开始谈起，介绍其对于 CSS 模块分割的意义以及实际场景下增强型的 BEM 用法；然后介绍了 React 中 BEM 的实践。接下来本文讨论了 CSS Modules，如何配置与使用 CSS Modules，以及如何进行组件分层的解决方案。该结构背后的理念是通过以一种可伸缩的方式保持 CSS 架构创建更好的 ReactJS 项目，可以支持成千上万的组件和开发人员协同工作；然而本文的真正关键点在于打开你的思维，去适应新事物。更多 React 相关资料参考[这里](https://parg.co/bM1)。

#开源项目

- [《基于 div 与 纯 CSS 实现的加载动画》](http://www.raphaelfabeni.com.br/css-loader/)：Web 开发中，当我们需要用户等待某个异步操作完成，譬如网路请求或者表单提交时，我们应当给予用户友好的提示。而 CSS Loader 就是仅基于 div 与 CSS3 动画的加载提示库，其并不像 GIF 这样需要额外的图片请求，并且具有相当好的可维护性与自定义性。

- [《Gutenberg》](https://github.com/BafS/Gutenberg)：网页打印时的格式错乱一直是个头痛的问题，而  Gutenberg,css 提供了一系列基本的仅在打印时才会加载的样式，优化专用于打印的格式显示。( https://github.com/BafS/Gutenberg )

- [《UnCSS》](https://github.com/giakki/uncss)：UnCSS 能够帮助你从样式表中移除 HTML 中未被用到的样式，它支持多文件以及 JavaScript 样式定义，并且提供了接口、命令行、构建插件、POSTCSS 插件等多种使用方式。( https://github.com/giakki/uncss )

- [《glamorous》](https://parg.co/b4Q)：来自 PayPal 的 React 组件的 CSS-in-JS 解决方案，其支持 JSX 语法、自定义样式组件等多种灵活的功能。( https://parg.co/b4Q )

- [《iotaCSS》](https://www.iotacss.com/)：iotaCSS 是基于 SASS 的 OOCSS 框架，其具备了完全轻量可扩展的特性，并且提供了高性能的、可读性较好的以及完全响应式的接口配置。( https://www.iotacss.com/ )

- [Pell](https://github.com/jaredreich/pell)：Pell 是仅有 1KB 的所谓所见即所得的富文本编辑器，其不需要依赖于 jQuery、BootStrap 等第三方库。Pell 主要以 ES6 语法开发，并且支持自定义的 SCSS 文件或者复写 CSS 样式来自定义风格，也是非常不错的值得借鉴的编辑器开发示例。
