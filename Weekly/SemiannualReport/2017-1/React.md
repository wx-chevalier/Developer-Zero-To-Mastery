# 前端每周清单半年盘点之 React 与 ReactNative 篇

[前端每周清单](http://www.infoq.com/cn/FE-Weekly)专注前端领域内容，以对外文资料的搜集为主，帮助开发者了解一周前端热点；分为新闻热点、开发教程、工程实践、深度阅读、开源项目、巅峰人生等栏目。欢迎关注【前端之巅】微信公众号（ID：frontshow），及时获取前端每周清单；本文则是对于半年来发布的前端每周清单中的 React 相关的教程实践与开源项目的盘点，可以查看[这里](https://parg.co/bh1)获得往期清单或者其他盘点篇。

# 教程实践

- [Twitter 宣布移动 Web 技术栈迁移到 Node.js，Express，React PWA](https://twitter.com/necolas/status/829128165314306048)：近日，Twitter 工程师 Nicolas 宣布 Twitter 几乎所有的移动流量迁移到了以 Node.js 为基础的服务中（Today we moved all of Twitter's mobile web traffic (that's like, a lot) to our new web stack – Node.js, Express, React PWA.）。在过去的两年中，Twitter 移动 Web 技术栈主要是基于 Scala，Google Closure Templates 以及少量的 JavaScript。后来 CharlieCroom 开始尝试将登出服务迁移到 JavaScript 技术栈中，并且进行了约 9 个月的线上测试，效果尚可，因此 Twitter 决定全部迁移到 JavaScript 技术栈中。同时，Twitter Web APP 还支持所谓的 PRPL 范式：主动推送首屏关键资源、仅渲染初始路由、预存其他路由、按需懒加载与创建剩余路由。

- [来自 MuseFinder 的 React 组件编写实践](https://medium.com/code-life/our-best-practices-for-writing-react-components-dec3eb5c3fc8#.mh12fzmoi)：该指南来源于 MuseFind 在多年的产品开发中总结而来的 React 实践经验，其包含了对于组件声明方式、样式类的使用、初始状态声明、Props 声明、方法声明、Props 结构、装饰器的使用、函数式组件的声明等等多个方面。

- [基于 React 与 Redux Sagas 的权限验证应用开发教程](http://start.jcolemorrison.com/react-and-redux-sagas-authentication-app-tutorial/)：此文中作者深入地介绍了如何利用 Redux、Redux Saga、Redux Form、React Router 这些工具开发常见的权限验证应用。单独地使用某个工具似乎没啥难度，但是在工程应用中将它们较好地组合在一起却不是件容易事。而本文则是作者从自身工程实践的角度进行了介绍。

- [基于 ReactNative 与 MobX 的 Imgur 应用开发教程](http://school.shoutem.com/lectures/build-simple-imgur-client-react-native/)：此文中作者结合 ReactNative 与 MobX 开发一个展示 Imgur 中图片的应用，涉及到了如何使用 MobX 进行状态管理、如何与 RESTful API 进行交互、如何在 ListView 中渲染全屏图片以及如何监听设备状态等。

- [在 React 中构建微交互动画](https://medium.freecodecamp.com/how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8#.4jnphlp3r)：微交互能够更好地引导用户，提升用户体验，而文本则是基于 CSS Transitions、react-motion、react-animations 构建可交互的搜索框。 

- [2017 年 React 与 Redux 学习建议](https://www.robinwieruch.de/tips-to-learn-react-redux/?from=timeline&isappinstalled=0#flatState): 此文是作者数年来学习与使用 React 以及 Redux 的感悟，不一定适合纯初学者，不过对于有一定基础概念的很推荐一看。

- [Twitter Redux Store 探秘](https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1#.wu5trgupx)：复杂应用的 Store 设计一直是开发中的难点，而作为大型内容社交软件 Twitter 之前宣布 Web 移动端逐步迁移到 Node.js、Express、React PWA 架构，本文就是对于 Twitter 的 Redux Store 设计分析与探秘。

- [React Native 与 Swift 性能对比](https://medium.com/the-react-native-log/comparing-the-performance-between-native-ios-swift-and-react-native-7b5490d363e2#.azcqq063o)：作为混合式开发框架，React Native 在运行时仍然会实际调用 Objective-C 或者 Java。此文作者同时用 Swift 与 React Native 构建了相同的应用，并且从 CPU、GPU、内存使用、电池耗费等多个角度对这二者进行性能分析。结果表明二者性能相差无几，Swift 在 CPU 占用略占优势，二者的 GPU 占用不相伯仲，而 React Native 在内存上则有一定长处。( http://suo.im/2MWZnA  )

- [React 与 MobX 开发中的测试驱动开发](http://engineering.pivotal.io/post/tdd-mobx/): 本文对于 React 与 MobX 的基本使用进行了介绍，阐述了为何作者认为 MobX 是个不错的 Redux 的替代以及如何对 MobX 进行单元测试。( http://suo.im/2PE2A6 )

- [基于 React 与 GraphQL 的全栈开发指南](http://6me.us/O6p)：GraphQL 最早由 Facebook 提出以解决复杂多变的查询问题，弥补 REST 中的不足。它允许界面组件以声明式获取数据而忽略后端实现细节。本系列文章是由 Apollo 团队提供，讲解如何基于 React 与 GraphQL 开发应用。( http://6me.us/O6p  )

- [React 开发中的 10 个微模式](https://hackernoon.com/10-react-mini-patterns-c1da92f068c5#.5v2hpgurn)：此文是 Gilbertson 在工作中总结而来的 React 开发中常见的设计模式总结，譬如输入域的唯一标识分配、CSS 控制等等 。 ( http://suo.im/42S8Kb )

- [Airbnb 使用 React 重构搜索功能的实践](http://6me.us/2mS)：早在 2015 年，Airbnb 的工程团队就决定将 React 作为主要的前端开发栈，不过因为其搜索页面过于复杂因此直到 2016 年初才开始迁移工作。本文就是 Airbnb 进行代码重构的经验介绍。( http://6me.us/2mS )

- [React Native 中的 FlatList 组件](http://6me.us/dqiO1)：3 月 1 日开始 ReactNative 中的 FlatList 正式从测试包中移动至正式包中；我们在项目开发中可以使用 FlatList、SectionList、VirtualizedList 来替代传统的即将被移除的 ListView。( http://6me.us/dqiO1 )

- [ReactNative 性能优化实践](http://6me.us/qX63f)：日前有人表示 React Native 在 Android 上表现不佳，本文则是作者对于潜在的性能问题提出的优化方案。作者首先分析了常见的 Overdraw 问题以及可能的问题源与解决方案，然后介绍了列表中常见的 GPU 渲染瓶颈以及解决方案。( http://6me.us/qX63f )

- [React 中 setState 的函数式用法](http://6me.us/wiLi5)：React 生态圈中一直崇尚所谓函数式编程理念，而本文作者介绍了如何利用 setState 函数的回调来实现 setState 的函数式用法；就像 Redux 中的 reducer 一样，能够独立声明于组件外，然后声明式的使用，从而保证组件更新逻辑的清晰与可测试性。

- [我理解的“大前端”或“大无线”](http://6me.us/Md2)：本文主要是介绍作者所在团队最近的一些变化和思考，包括前言、NodeJS职能变化、ReactNative的大规模应用、专门的架构组职能、总结五部分。。( http://6me.us/Md2  )

- [ReactRouter-V4 构建之道与源码分析](https://zhuanlan.zhihu.com/p/25696969)：本文介绍了 React Router V4 的设计思想，一步一步由浅入深地介绍如何从零开始构建一个类似于 React Router V4 这样的秉持路由即组件的思想的路由框架。( http://6me.us/jfUwEw )

- [来自 Formidable 的 2017 React Naive 技术栈](http://6me.us/yH2yE)：本文是来自 Formidable 的工程师 Jani Eväkallio 介绍的他们在 2017 选定的 React Native 开发技术栈，包括构建工具、组件库、状态管理等等方面。( http://6me.us/yH2yE )

- [Sketch：React Native 的 Playground ](http://6me.us/aGFX)：随着 Create React Native App 的发布，Expo 发布了能够在线编辑 React Native 应用的工具 Sketch。开发者可以在 Web 上直接编辑 React Native 应用代码，或者拖拽方式加入组件，然后通过 Expo 客户端完成本地预览。( http://6me.us/aGFX )

- [以组件为中心的 React 懒加载](http://6me.us/mNHi)：React Loadable 是以组件为中心的懒加载框架，其基于 Webpack 2 提供的 `import` 提供的异步代码分割与加载功能进行了一系列的封装。( http://6me.us/mNHi )

- [来自 Vixlet 的 React 优化策略](http://6me.us/dx5)：在过去的数年中，来自 Vixlet 的前端开发团队一直使用 React 与 Redux 的开发架构，本文即是该团队分享其在开发过程中发现的 React 优化策略的介绍。( http://6me.us/dx5 )

- [Preact 内部原理探秘](https://parg.co/bOj)：Preact 是提供了类似于 React API 不过速度更快、包体更小的 React 替代包，本系列文章是 Preact 的开发者介绍其内部工作原理 。( https://parg.co/bOj )

- [CSS Grid 典型案例](https://sii.im/playground/css-grid/)：该网站提供了一系列基于 React 编写的 CSS Grid 布局的测试样例，是个不错的从实例中学习 CSS Grid 语法与使用的教程。( https://sii.im/playground/css-grid/#/ )

- [开发 React Native 与 Redux 应用一年来的错误总结](https://parg.co/bQS)：本文作者总结了他在过去一年中 React Native 与 Redux 开发中遇到的错误的复盘与总结，譬如布局文件分割、Redux Store 设计、项目目录结构、表单验证等多个方面。( https://parg.co/bQS )

- [React Conf 2017 盘点](https://parg.co/bsg)：本文作者对于近日举办的 React Conf 2017 中的精彩演讲进行了盘点，包括 Redux 与 MobX 在状态管理领域的对比、ReactVR 等一系列优秀的基于 React 的扩展项目、代码格式化与样式组件、服务端渲染等等。( https://parg.co/bsg )

- [Redux 实践大讨论](https://github.com/reactjs/redux/issues/2295)：此篇是 Markerikson 在 Redux Issue 中发起的讨论，主要涉及 Redux 模板冗余、过度抽象、学习曲线过于曲折、太多的 Opinioned 最佳实践等问题。( https://github.com/reactjs/redux/issues/2295 )

- [2017 简明 React 入门指南](https://parg.co/bCx)：本文是针对那些熟悉 jQuery 与传统 JavaScript 开发的前端工程师准备的现代 React 开发入门指南，其包括了环境配置、create-react-app 使用、学习资料、应用编写与发布等等章节。( https://parg.co/bCx )

- [React Bits](https://github.com/vasanthk/react-bits)：一本关于 React 设计模式、技术与技巧的书，涵盖了常见的 React 应用开发中的设计模式、需要规避的反模式、处理 UX 变种、性能调试与样式处理等等。（ https://github.com/vasanthk/react-bits ）

- [基于 ReactNaive 与 Uber 工程基础构建 UberEATS](https://eng.uber.com/ubereats-react-native/)：本文是 UberEATS 的工程师团队介绍的他们基于 Uber 原工程架构与 ReactNative 实现应用的工程实践；包括了构建迁移路径、应用架构定义、自动更新、测试与静态类型检测等等。（ https://eng.uber.com/ubereats-react-native/ )

- [微软开源跨平台开发框架 ReactXP](https://microsoft.github.io/reactxp/)：ReactXP 是来自于微软的用于开发跨平台（iOS，Android，Web，Windows）应用的开源框架，其基于 React.js 与 React Native 项目，提供了类似的接口与语法规则；能够帮助开发者快速创建优美、响应式的 Web 界面以及原生体验的移动应用。( https://microsoft.github.io/reactxp/ )

- [基于 React，Redux，React-Router-V4 以及 Firebase 创建实时足球投票应用](https://parg.co/bhD)：本系列教程基于 React，Redux，Redux-Saga，React-Router V4 以及 Firebase 创建足球投票应用，在第一篇教程中主要介绍如何使用 create-react-app 脚手架来初始化项目结构并且添加必须的库。( https://parg.co/bhD )

- [Webpack 与 Rollup：求同存异](https://parg.co/b4y)：近日，Facebook 宣布将 React 的构建工具由 Webpack 迁移到 Rollup，引发了很多开发者的讨论。本文则是深度介绍 Webpack 与 Rollup 的异同，最后总结而言，Webpack 适合于构建应用，而 Rollup 适用于构建库或框架。( https://parg.co/b4y )

- [React 中的状态管理架构模式](https://parg.co/b4J)：本系列文章着眼于对于现代复杂 Web 应用，譬如 React 或类似框架，的开发中常见的状态管理的架构模式。文章中会依次介绍 Naive Hierarchical Architectural Pattern、Top-Heavy Architecture、Flux 等等内容。( https://parg.co/b4J )

- [基于 JavaScript 构建数据表达式分词器](https://parg.co/bRO)：本文是一篇挺有意思的文章，介绍如何利用 JavaScript 解构常见数学表达式并且从中提取出相关实体。本文涉及到的内容包括对于分词器的简单介绍、对于抽象语法树 AST 的介绍以及最终如何使用代码来实现分词算法。( https://parg.co/bRO )

- [Twitter Lite 与高性能可扩展 React PWA 实践](https://parg.co/bRV)：本文是 Twitter 工程师团队介绍其在开发世界上最大的 PWA 应用之一， Twitter Lite 过程中克服各种各样的性能瓶颈的实践经验。其核心思想包括基于路由的代码切分、避免可能导致掉帧的函数、使用压缩比更好的图片资源、以及优化 React 更新过程、避免频繁修正 Redux Store、延迟注册 ServiceWorker 等部分。( https://parg.co/bRV )

- [React Native 性能优化](https://parg.co/bRk)：本文作者承接 [React Native 性能瓶颈与解决方案](https://parg.co/bRJ)，以新的实际开发中的例子讨论如何优化 React Native 应用性能。作者以类似于 Android 中 Toolbar 的列表为例，介绍了如何对性能进行测试、使用原生的滚动监听、使用声明式接口等多个方面的内容。( https://parg.co/bRk )

- [后 MVC 时代](https://realm.io/news/the-post-mvc-age/)：在很长一段时间里，MVC（Model-View-Controller）架构是构建应用的黄金法则，而近几年随着 React，Vue.js，Angular 等以组件为中心的库的流行，MVC 架构在前端却趋于平寂。开发者往往将模型、视图与控制器耦合在单个实体内，而打破了传统的 MVC 架构中的约束。类似于 Flux 或者响应式编程的设计思想也改变了应用状态的处理方式，不同于 MVC 中的双向绑定，而是数据在实体之间单向流动。本文即是讨论在所谓后 MVC 时代的 GUI 应用架构的思考。( https://realm.io/news/the-post-mvc-age/ )

- [CodeSandbox](https://parg.co/bR8)：CodeSandbox 是一个在线的 React 编辑器，其能够帮助开发者更快更方便地展示与分享基于 React 的项目。CodeSandbox 会自动化执行类似于编译、打包、依赖管理等多种项目构建中的常见任务，同时 CodeSandbox 还允许开发者添加自定义的 node_modules 中的依赖。( https://parg.co/bR8 )

- [Slate](https://docs.slatejs.org/)：Slate 是类似于 Draft.js 的灵活可自定义的富文本编辑器构建框架，Slate 允许你构建功能丰富的类似于 Medium、Dropbox Paper、Canvas 这样的编辑器。Slate 提供了各式各样的插件，你可以基于 React 与 Immutable 来构建自定义的插件，并且指定哪些插件属于核心插件。( https://docs.slatejs.org/ )

- [Facebook 发布 React VR 来简化 Web 中虚拟现实应用的开发](https://parg.co/bfR)：近年来，虚拟现实技术迅猛发展，有望成为下一个主流计算平台。而 Facebook 近日正式发布 React VR，其能够帮助开发者快速构建 VR 应用。React VR 同样基于 React 与 React Native 提供了声明式的代码风格，能够允许有 React 开发经验的开发者快速上手。( https://parg.co/bfR )

- [大型高性能React PWA如何消除各类性能瓶颈？](https://parg.co/bfM)：想要构建一款性能出色的 Web 应用程序，我们需要投入大量技术周期以检测时间浪费点、了解其发生原因并尝试各类解决方案。遗憾的是，这种做法往往无法快速解决问题。性能无疑是一项永恒的命题，技术人员永远徘徊在观察与测量当中，却几乎永远找不到最优解。不过利用 Twitter Lite，我们已经在众多层面内取得了细小但却极具价值的改进：从初始加载时间到React组件渲染（防止二次渲染），再到图像加载以及更多层面。尽管大多数变更本身并不显著，但其相加所带来的最终结果是，我们得以构建起一款规模极大且速度极快的渐进式 Web 应用程序。( https://parg.co/bfM )

- [Airbnb 设计团队发布 React SketchAPP](http://airbnb.design/painting-with-code/)：Airbnb 设计团队近日发布能够将 React 组件渲染到 Sketch 文档中的开源工具，它为开发工程师与设计师之间提供了便捷的沟通桥梁。( http://airbnb.design/painting-with-code/ )

- [一系列优秀的 React 界面框架](https://parg.co/bNh)：本文列举了多个优秀的 React 界面框架，分析了其特性、适用场景以及潜在的缺陷。本文涉及的框架包括 Material UI、React Desktop、Semantic-UI-React、Ant-Design、Blueprint、React Bootstrap、React Toolbox、Grommet、Fabric 等等。( https://parg.co/bNh )

- [来自 Vixlet 的 React 优化建议](https://parg.co/bNF)：近年来 Vixlet 的 Web 团队逐步将其 Web 框架迁移到了 React + Redux 技术架构，本文是来自于 Vixlet 的 React 优化实践总结与建议。( https://parg.co/bNF )

- [从实用主义视角来看现代前端应用开发](http://dimafeng.com/2017/04/23/modern-frontend/)：现代 Web  开发技术变革迅速，而我也经历了从纯 JS 、jQuery、Vaadin、Angular JS、React 等等一系列的变迁。本文则首先思考何谓现代 Web 应用，然后考虑现代 Web 应用常用的项目架构与构建方式，譬如 TypeScript、Webpack、Linting 等内容，然后讨论现代常用的技术架构，譬如 React.j、MobX、依赖注入等相关知识。( http://dimafeng.com/2017/04/23/modern-frontend/ )

- [React 动画系列教程](https://parg.co/bMF)：本系列教程着眼于介绍 React 动画开发相关知识，而本文则是从 CSS transitions 基础入手，介绍了 CSS transitions 的基础语法与进度条、导航栏等经典案例。( https://parg.co/bMF )

- [使用 React、Redux 以及 Webpack 创建 TODO 应用](https://parg.co/bMT)：本文是面向新手的教学文章，介绍了如何利用 React、Redux 以及 Webpack 创建简单的 TODO 应用，包括利用 Webpack 搭建构建环境、编写基本的 React 组件以及使用 Redux 管理应用状态等内容。( https://parg.co/bMT )

- [函数式组件的函数式调用](https://parg.co/bMa)：本文是来自 Missive 的工程师分享了他们在基于 React 进行应用开发时的技巧，即如果直接以函数调用而非组件的方式来使用函数式组件，可以避免对于 React.createElement 的调用，最终相同组件的渲染耗时可以节约近 45%。( https://parg.co/bMa )

- [拥抱 React Router 4，改变旧的思维习惯](https://parg.co/bVv)：在今年的 React 大会上，Michael Jackson 以及 Ryan Florence 发布了所谓“Learn Once，Route Anywhere”的演讲。同时也代表了 React Router 4 中的核心思想：路由即声明式组件；本文则介绍了 React Router V3 到 React Router V4 的变化。( https://parg.co/bVv )

- [高性能动态 CSS 样式](https://parg.co/btW)：本文是对 [JSS](http://cssinjs.org/) 新近提供的[函数式值的介绍](http://cssinjs.org/json-api?v=v7.1.1#function-values)，其与 React 内联样式以及其他 CSS 解决方案相比有数倍的性能提升。在 Web 开发中动态设置样式往往会触发页面的重渲染，而本文则是介绍了如何使用 CSSOM 的 API 来在元素渲染之前即完成样式的设置。( https://parg.co/btW )

- [React 新引擎 React Fiber 究竟要解决什么问题？](https://parg.co/btw)：Facebook 正在以流行的 JavaScript 框架 React 为基础开发一个全新的架构。这个名为 React Fiber 的全新设计改变了检测变更的方法和时机，借此可改进浏览器端和其他渲染设备的响应速度。 这一 全新架构 最初已于 2016 年 7 月公开发布，其中蕴含着过去多年来 Facebook 不断改进的工作成果。该架构可向后兼容，彻底重写了 React 的协调（Reconciliation）算法。该过程可用于确定出现变更的具体时间，并将变更传递给渲染器。( https://parg.co/btw )

- [GUI 应用程序架构的十年变迁：MVC、MVP、MVVM、Unidirectional、Clean](https://zhuanlan.zhihu.com/p/26799645)：随着现代浏览器的日渐流行，Web 以及混合开发技术的发展，大前端的概念日渐成为某种共识；而无论 iOS、Android、Web 这样的端开发还是 React Native、Weex 这样的跨端开发，其术不同而道相似纵览这十年内的架构模式变迁，大概可以分为 MV* 与 Unidirectional 两大类，而 Clean Architecture 则是以严格的层次划分独辟蹊径。从笔者的认知来看，从 MVC 到 MVP 的变迁完成了对于 View 与 Model 的解耦合，改进了职责分配与可测试性。而从 MVP 到 MVVM，添加了 View 与 ViewModel 之间的数据绑定，使得 View 完全的无状态化。最后，整个从 MV* 到 Unidirectional 的变迁即是采用了消息队列式的数据流驱动的架构，并且以 Redux 为代表的方案将原本 MV* 中碎片化的状态管理变为了统一的状态管理，保证了状态的有序性与可回溯性。( https://zhuanlan.zhihu.com/p/26799645 )

- [新版本 Create React App 特性概述](https://parg.co/bkY)：不到一年前，React 官方发布了 Create React App 这个零配置的快速创建 React 应用的脚手架工具；而本文则介绍了近几个月来 Create React App 中加入的新特性。新版的 Create React App 中切换到了 Webpack 2，并且优化了运行时错误提示，同时还默认启用了 Progressive Web Apps 支持，并且引入了 Jest 20、动态导入等等一系列的新特性。( https://parg.co/bkY )

- [React Native 开发中的 80/20 定律](https://parg.co/bko)：在构建 React Native 应用时，我们常常发现某些 20% 的投入会带来 80% 的产出。本文则是作者在构建了自己首个 React Native 应用之后的感悟，作者发现引入静态类型、通用组件以及精益部署之后，整个想法的开发速度与项目质量得到了较大地提升。( https://parg.co/bko )

- [从零开始构建 WhatsApp 应用](https://parg.co/bk0)：本系列文章深入浅出地介绍了如何利用 GraphQL 与 React Native 构建类似于 WhatsApp 的应用 Chatty。前几部分主要介绍了如何搭建基础环境、设计 GraphQL Schemas、进行数据查询与交互等内容，而本文则着重于介绍如何为 Chatty 添加权限验证特性。( https://parg.co/bk0 )

- [如何快速地为 React 站点设置 A/B 测试](https://parg.co/bkE)：A/B 测试，或者称为分割测试，是用来随机地为用户展示网页以测试不同产品设计的反馈效果。A/B 测试对提升真实应用的用户接受度非常有帮助，而本文则是介绍了如何利用 react-ab-test 这个工具快速地针对 React 站点设置 A/B 测试收集用户反馈信息。( https://parg.co/bkE )

- [重构 Airbnb 前端架构](https://parg.co/bkA)：本文是近日 Airbnb 开发团队在思索重构代码库中 JavaScript 部分的经验总结，主要着眼于产品驱动开发以及技术沉淀、从传统的 Rails 架构中积攒的经验以及新的技术栈的某些特性等方面。本文首先介绍了从 Rails 迁移过程中的一些经验，譬如将原本完全的服务端渲染界面所需要的数据切分为了 API 与 Non-API 两大类，并且使用 Hypernova 来进行 React 服务端渲染。然后介绍了如何在应用前端通过引入懒加载与异步加载等方式提升前端性能与用户体验。( https://parg.co/bkA ) 

- [React Europe 2017 见闻实录](https://parg.co/bJt)：本文记录了作者在第三届 React Europe 大会上的见闻，也是不错的窥见 React 生态圈现状与未来发展方向的方式。本文首先介绍了即将到来的 React 16 以及新的调和算法 Fiber，然后介绍了一些辅助构建高质量 JavaScript 代码的工具，最后还讨论了基于流的按帧渲染方式。( https://parg.co/bJt )

- [理解高阶组件](https://parg.co/biZ)：即使 React 新手都应该听过所谓高阶组件或者容器组件的概念，而本文则是深入浅出地介绍了 React 中高阶组件的概念与意义，并且以实例介绍具体的使用方式与适用场景。作者首先介绍了无状态组件与全局状态的概念，然后对比了所谓容器与展示型组件的使用场景，最后介绍了常见的高阶组件。( https://parg.co/biZ )

- [我们为什么选择使用 React 生态](https://parg.co/biP)：本文是京东金融移动研发部工程师分享的它们对于前端框架、工具与方法的选择过程中的考虑。( https://parg.co/biP )

- [hacker-news-pwas](https://parg.co/biQ)：基于不同的前端框架实现的符合 PWA 应用特性的 Hacker News APP 的合集，包括了常见的 React、Angular、Vue、Preact 等多个版本，并且均在 Lighthouse 评测中达到 90 以上的评分。( https://parg.co/biQ )

- [使用 Vue 与 NativeScript 开发跨端应用](https://www.nativescript.org/blog/a-new-vue-for-nativescript)：目前标准的开发 NativeScript 应用的方式是使用朴素的 JavaScript 或者 Angular，而本文介绍了如何结合使用 Vue 与 NativeScript 来开发跨终端应用。本文首先阐述了 Vue.js 相较于 React 或者 Angular 的优势，然后阐述了使用 Vue 语法来开发基础 NativeScript 应用的步骤。( https://www.nativescript.org/blog/a-new-vue-for-nativescript )

- [利用 React Apollo 减少 Redux 代码量](https://parg.co/bLA)：Redux 为人诟病的一点就是需要大量的模板代码，而更多的代码往往也意味着更多的潜在错误与更高的维护代价。本文则介绍了如何利用 Apollo 来接管应用中的数据加载与呈现逻辑，从而减少 Redux 实现方案中加载数据生命周期中所需要的代码。( https://parg.co/bLA  )

- [九个 React Native 动画指南](https://parg.co/b9d)：本文通过介绍九个 React Native 动画地实现从零到一的介绍了 React Native 中的动画机制。包含了通过 Animated.timing 来添加样式动画、创建可伸缩的按钮、创建可拖拽的卡片、动态地变换元素的颜色、角度、序列位置等等实例。( https://parg.co/b9d )

- [构建 React 组件库](https://parg.co/b9u)：本系列文章循序渐进地介绍如何设计编写自己的小型组件库并且将其发布到 NPM 仓库中；第一篇文章着眼于如何从零开始搭建开发环境，第二篇文章则介绍如何利用 styled-components 来为组件添加样式、添加调色板、构建高效开发流程以及如何实践 Atomic Design 原则。( https://parg.co/b9u )

- [5 个提升 React Native 应用性能的方法](https://parg.co/b93)：本文作者分享了自己在过去一段时间内尝试提升公司 React Native 应用性能的实践经验，包括如何设置有效的性能测试、强制启动 no-bind 规则、使用函数式组件、重制 TabMap 的逻辑等等。( https://parg.co/b93 )

- [京东 618：如何配合业务打造 JDReact 三端融合开发平台？](https://parg.co/b9U)：良好解决多终端开发问题是提升团队开发效率的有效方法，本文全面解析了京东 JDReact 三端融合平台。本文首先回顾了传统无线开发的痛点，然后讨论了 React Native 的优势与局限，最后介绍了 JDReact 三端融合平台的整体架构、在功能、加载性能、内存方面的改进与优化以及发布到生产环境中的流程等内容。( https://parg.co/b9U  )

- [React 服务端渲染](https://css-tricks.com/server-side-react-rendering/)：本文循序渐进地介绍了 React 中服务端渲染的相关知识，首先讨论了服务端渲染相较于客户端渲染带来的优势、然后介绍了如何在 React 中添加服务端渲染的支持，最后还讨论了如何通过同构的高阶函数在服务端抓取数据然后显示在客户端。( https://css-tricks.com/server-side-react-rendering/  )

- [大前端公共知识梳理：这些知识你都掌握了吗？](https://parg.co/byS)：近年来，随着移动化联网浪潮的汹涌而来与浏览器性能的提升，iOS、Android、Web 等前端开发技术各领风骚，大前端的概念也日渐成为某种共识。 其中特别是 Web 开发的领域，以单页应用为代表的富客户端应用迅速流行，各种框架理念争妍斗艳，百花竞放。Web 技术的蓬勃发展也催生了一系列跨端混合开发技术，希望能够结合 Web 的开发便捷性与原生应用的高性能性；其中以 Cordova、PWA 为代表的方向致力于为 Web 应用尽可能添加原生体验，而以 NativeScript、ReactNative、Weex 为代表的利用 Web 技术或者理念开发原生应用。 平心而论，无论哪一种开发领域或者技术，他们本质上都是进行图形用户界面（GUI）应用程序的开发，面对的问题、思考的方式、架构的设计很大程度上仍然可以回溯到当年以 MFC、Swing、WPF 为主导的桌面应用程序开发时代，其术不同而道相似。( https://parg.co/byS )

- [React Express](https://github.com/dabbott/react-express)：针对目前 React 及其生态圈学习曲线过于陡峭的囧境，作者希望创建一个多合一的面向初学者的 React 技术栈学习教程，从最简单的 create-react-app、npm、webpack、babel 等工具的使用，到 ES2015、ES2016、JSX 等基础语法，最后还包括 React、Redux、CSS-in-JS 等工程实践。( https://github.com/dabbott/react-express )

- [Airbnb React VR 实践](https://parg.co/bFC)：Airbnb 自 2014 年以来一直使用 React 构建用户交互界面，并且为社区贡献了很多优秀的开源项目；而随着 React VR 的发布，Airbnb 也利用其来快速原型化与测试 VR 相关的创意。本文即是介绍 Airbnb 在 React VR 实践方面的一些经验总结，本文首先阐述了 React、React Native 与 React VR 三者之间的关系与差异，然后介绍了 React VR 在布局、基础组件方面的语法，最后还讨论了 React VR、WebVR 以及 VR 技术本身的发展可能性。更多 WebVR 相关资料参考 [https://parg.co/bFR](https://parg.co/bFR)。

- [深入 React 动画实践](https://parg.co/bFh)：本文介绍了在 React 开发中多种创建动画效果的途径，包括了基于 React 组件状态的 CSS 动画、基于 React 组件状态的 JavaScript 样式动画以及第三方依赖的 React Motion、Animated、Velocity-React 等库。本文最后还讨论了如何用 GreenSock 等经典强大的动画库来辅助 React 组件动画开发；更多 React 相关资料参考[ https://parg.co/bM1 ](https://parg.co/bM1)。

#开源项目

- [metro-bundler](https://github.com/facebook/metro-bundler)：为了更好地社区支持，原 react-native-packager 被独立为 Metro Bundler；其致力于打造具有亚秒级别的重载以及较好可扩展性的模块系统，同时它仍然是 React Naive 内置的开箱即用的工具。( https://github.com/facebook/metro-bundler )

- [React Flight](https://github.com/jondot/react-flight): React Flight 能够帮我们轻松地构建组件之间的过渡动画，它允许开发者定义初始状态的组件与结束状态的组件，React Flight 会自动地完成组件之间的切换并且添加动画效果。 

- [React Native Node](https://github.com/staltz/react-native-node): React Native Node 能够在基于 React Native 开发的 Android 应用中启动后台 Node.js 进程，从而可以利用 Node.js 中的流、文件系统接口等特性来进行功能操作；React Native Node 主要依靠 Node.js 7.1.0 版本能够被独立编译为 bin_node_v710 可执行文件。另一方面，尽管 iOS 并不支持直接运行 V8，但是[该项目](http://www.janeasystems.com/blog/node-js-meets-ios/)正在致力于为 ChakraCore 打造类 V8 特性支持。

- [react-simple-maps](https://www.react-simple-maps.io): react-simple-maps 是基于 d3-geo 与 topojson 的 React 地图组件库，允许开发者快捷方便地构建自定义的 SVG 地图；目前的特性包括了缩放、标记、自定义 SVG 标记、自定义着色、气泡图、动画支持等等。

- [redux-query:React/Redux 中查询与管理网络状态的库](https://amplitude.engineering/introducing-redux-query-7734e7215b3b#.9v8pi8jok)：对于很多开发者而言，同步本地状态与网络状态会是一件很麻烦的事情。其中需要太多的妥协与考量，甚至于面对不同的问题需要使用不同的技术栈。而 redux-query 即是 AmplitudeEng 的工程师在实践中的总结与应用，它可以被当做基于 React/Redux 以及 RESTful API 的应用的很好的辅助工具。它允许将网络状态链入到当前的 Redux Store 中，并且提供了删除、乐观更新、响应缓存、删除重复等等优秀的功能。

- [react-native-offline-utils](https://github.com/rauliyohmc/react-native-offline-utils)：react-native-offline-utils 允许我们在 React Native 应用中优雅地处理离线情况，能够根据连接情况动态判断需要使用的组件渲染或者数据抓取逻辑。同时 react-native-offline-utils 还能够平滑地集成 Redux，能够自动转发特殊的离线 Action。( https://github.com/rauliyohmc/react-native-offline-utils )

- [react-pdf](https://github.com/diegomura/react-pdf)：在浏览器、移动端与服务端皆可适用的基于 React 语法的 PDF 文件创建工具。( https://github.com/diegomura/react-pdf )

- [Rapscallion](http://formidable.com/blog/2017/introducing-rapscallion/)：React 服务端渲染的性能一直是广为诟病，相较于其他前端框架会满上很多，笔者在[此文](https://zhuanlan.zhihu.com/p/25098455)中也进行过简要探讨。而 Rapscallion 则是新的支持 React 服务端渲染的开源包体，它支持异步非阻塞渲染，相较于`renderToString`其能达到将近 50% 的性能提升。同时 Rapscallion 官方还为我们准备了基于 Redis 的缓存实例。( http://suo.im/3YS6pz  )

- [react-native-interactable](https://github.com/wix/react-native-interactable)：react-native-interactable 是由 wix 发布的用于创建高性能用户交互效果的声明式接口。典型的用户场景包括滑动式卡片、抽屉菜单、伸缩式应用头、聊天头等。( https://github.com/wix/react-native-interactable )

- [react-overdrive](https://github.com/berzniz/react-overdrive)：非常简单易用的 React 应用转场动画实现库，能够在不同的页面间指定相同 ID 的元素，Overdrive 会自动为这两个元素之间添加转场动画。( https://github.com/berzniz/react-overdrive )

- [react-perimeter](https://github.com/aweary/react-perimeter)：react-perimeter 能够为目标元素创建隐藏的栅栏，当用户的鼠标移动到目标元素的指定范围内时会触发预设时间，譬如可以执行组件预加载等操作。( https://github.com/aweary/react-perimeter )

- [glamorous](https://parg.co/b4Q)：来自 PayPal 的 React 组件的 CSS-in-JS 解决方案，其支持 JSX 语法、自定义样式组件等多种灵活的功能。( https://parg.co/b4Q )

- [React Data Grid](https://github.com/adazzle/react-data-grid)：基于 React 构建的类似于 Excel 的网格组件，其提供了编辑、键盘导航、复制粘贴等多种功能。( https://github.com/adazzle/react-data-grid )

- [create-next-app](https://open.segment.com/create-next-app)：基于 Next.js 的类似于 create-react-app 的快速创建支持服务端渲染的 React 应用的命令行辅助工具。( https://open.segment.com/create-next-app )

- [Create XP App](https://parg.co/bMg): 近日，微软的 Skype 团队发布了基于 React Native 的跨平台开发框架 ReactXP，而 create-xp-app 则是快速创建 ReactXP 应用的脚手架。本文则是对于 create-xp-app 的安装与基本使用的介绍，包括了如何运行在 Web 与 iOS/Android 等原生环境中，以及如何进行打包等内容。

- [haul](https://github.com/callstack-io/haul)：Haul 是基于 Webpack 这样开源框架构建的 react-native 命令行工具的替代品，它支持从运行于开发时服务器到打包发布至生产环境等全生命周期的功能。Haul 的最大特性在于允许开发者使用 Webpack 生态系统中各种合影的加载器与插件，并且不需要 watchman 等外部工具的辅助，还优化了错误提示信息。( https://github.com/callstack-io/haul )

- [react-move](https://github.com/tannerlinsley/react-move)：方便快捷地 React 组件动画库，支持 React、React Native 以及 React VR。React Move 允许开发者忽略具体的动画属性控制而完全托管于框架，同时它还提供了多个生命周期中的回调函数方便开发者进行控制。( https://github.com/tannerlinsley/react-move )

# 延伸阅读
- [ React 学习与实践资料索引](https://parg.co/bM1)
- [ React 与前端工程化实践](https://parg.co/bWg)
- [前端每周清单半年盘点之 Vue.js 篇](https://parg.co/b2N)
