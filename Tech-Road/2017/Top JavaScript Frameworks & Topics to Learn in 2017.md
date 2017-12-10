[![返回目录](https://parg.co/U0e)](https://parg.co/U0X) 
﻿
> [2017年值得关注的JavaScript框架与主题](https://zhuanlan.zhihu.com/p/24373050)翻译自[Top JavaScript Frameworks & Topics to Learn in 2017](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711#.7cp7q9q0y)，从属于笔者的[Web 前端入门与最佳实践](https://github.com/wxyyxc1992/Web-Frontend-Introduction-And-Best-Practices)。其他有关于2016年前端开发的总结包括[2016 年前端工具使用度调研报告](https://segmentfault.com/a/1190000007666924)、[2016年里做前端是怎样一种体验](https://segmentfault.com/a/1190000007083024)、[2016前端学习路线图](https://segmentfault.com/a/1190000007730440)。另外推荐[The State of UX in 2017](https://uxdesign.cc/ux-trends-2017-46a63399e3d2#.dtqo7m96b)，作为开发者了解下设计的想法也是必需的。


# 2017 年值得关注的 JavaScript 框架与主题

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2016/12/1/1-U57FQqHw9eCVlS26M2fxmw.jpeg) 


JavaScript的繁荣促生了很多优秀的技术、框架与工具库，这空前的繁荣也给很多人造成了困惑，无所适从。到底何者是值得投入，代表了未来的方向，而何者又是真正适合于当前项目，当前团队的？而本文即时作者基于自身实践的一些思考，与诸君共享。


# JavaScript & DOM Fundamentals
工欲善其事，必先知其器。在我们准备了解使用其他JavaScript框架的时候，我们首先需要去了解JavaScript的语法要点与一些工程实践：
- **内建方法:** 我们需要了解标准数据类型 (特别是 [arrays](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array), [objects](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object), [strings](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String), 以及 [numbers](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)).

- **函数 & **[**纯函数**](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)**:** 或许你觉得自己已经很了解函数了，但是总有些小技巧是你没有接触过的。另外不仅仅是对于基本的函数的用法，我们还要对函数式编程的思想，譬如纯函数高阶函数等有所掌握。

- [**Closures**](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)**:** 在学习闭包的过程中了解JavaScript传统的函数作用域。
- **Callbacks:** 回调是JavaScript异步编程的基本概念，某个回调函数会在某个异步操作结束后被调用，就好比领导对你说：好好干你的工作，做好了跟我汇报下。

- [**Promises**](https://developers.google.com/web/fundamentals/getting-started/primers/promises)**: **Promise是处理将来值的方法之一，当某个函数返回的是Promise对象时，你可以调用该对象的`then`函数来获取异步传入的值。而调用者是通过传入的`resolve`回调来传值，譬如`doSomething().then(value => console.log(value));`

- [**Ajax & 服务端API调用**](https://github.com/mzabriskie/axios)**:** 绝大部分有趣的应用都需要与服务端通过网络进行交互，你应该了解基本的HTTP Client知识。

- [**ES6**](https://medium.com/javascript-scene/how-to-learn-es6-47d9a1ac2620)**: **最新的JavaScript版本为ES7，或者叫ES2016，不过很多人ES6还没用熟练，正在过渡期吧。

- [**Classes**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes) (note: [**避免类继承**](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3). 参考 [How to Use Classes and Sleep at Night](https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4).)

- [**函数式编程基础**](https://ericelliottjs.com/premium-content/webcast-the-two-pillars-of-js-introduction-to-functional-programming/)**: **函数式编程基于数据函数的组合来构建业务逻辑，避免了共享状态与可变数据，这一点会避免很多的问题。 

- [**Generators**](https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710)** & **[**async/await**](https://medium.com/javascript-scene/the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435)**:** 个人观点，最好的异步代码的写法就是用写同步代码的方式去写异步代码。不可否认这些都存在学习曲线，不过磨刀不误砍柴工。
- **Performance: **[**RAIL**](https://developers.google.com/web/fundamentals/performance/rail)** — **参考 [“PageSpeed Insights”](https://developers.google.com/speed/pagespeed/insights/) & [“WebPageTest.org”](https://www.webpagetest.org/)
- **Progressive Web Applications (PWAs):** 参考 [“Native Apps are Doomed”](https://medium.com/javascript-scene/native-apps-are-doomed-ac397148a2c0)& [“Why Native Apps Really Are Doomed”](https://medium.com/javascript-scene/why-native-apps-really-are-doomed-native-apps-are-doomed-pt-2-e035b43170e9)

- [**Node & Express**](https://medium.com/javascript-scene/introduction-to-node-express-90c431f9e6fd#.gl2r6gcnn)**: **Node允许你在服务端运行JavaScript程序，而Express则是目前最为流行的基于NodeJS的Web框架。

- [**Lodash**](https://lodash.com/)**:** 一个非常好用的、模块清晰的JavaScript辅助工具，其也遵循了很多函数式编程的理念，你可以通过 `lodash/fp`导入。








# Tooling



- [**Chrome Dev Tools**](https://developer.chrome.com/devtools)**:** [DOM inspect](https://developer.chrome.com/devtools#dom-and-styles) & [JS debugger](https://developer.chrome.com/devtools#debugging-javascript): Chrome Dev Tools算是最为优秀的调试工具了，Firefox也有很多不错的扩展。

- [**npm**](https://www.npmjs.com/)**:** 官方开源的JavaScript包管理工具。

- [**git**](https://try.github.io/levels/1/challenges/1)** & **[**GitHub**](http://github.com/)**:** 分布式版本管理系统，很适合团队协作。

- [**Babel**](https://babeljs.io/)**:** 能够将ES6代码编译到ES5使之能够兼容老版本浏览器。

- [**Webpack**](https://webpack.github.io/)**:** 最著名的模块打包工具之一，有不少优秀的模板配置奥，譬如[Webpack2-React-Redux-Boilerplate](https://github.com/wxyyxc1992/Webpack2-React-Redux-Boilerplate)。

- [**Atom**](https://atom.io/)**, **[**VSCode**](https://code.visualstudio.com/d?utm_expid=101350005-35.Eg8306GUR6SersZwpBjURQ.3&utm_referrer=https%3A%2F%2Fwww.google.com%2F)**, or **[**WebStorm**](https://www.jetbrains.com/webstorm/)** + **[**vim**](http://vim.rtorr.com/)**:** 你需要为自己选择合适的编辑器来辅助你快速开发。Atom与VSCode都是非常优秀的JavaScript编辑器，WebStorm也不错但是它是收费版本。如果你打算直接在服务端开发的话，Vim是个不错的选择。

- [**ESLint:**](http://eslint.org/) ESLint能够帮助开发者更快地发现语法错误与样式问题，在Code Review与TDD之后这是个不错的减少Bug的方法。

- [**Tern.js:**](https://ternjs.net/) 基于编辑器插件的标准JavaScript类型推导工具，不需要任何编译步骤或者注解支持。

- [**Yarn**](https://yarnpkg.com/)***:** 类似于NPM的工具，不过安装起来更为可靠快速。

- [**TypeScript\*:**](https://www.typescriptlang.org/) JavaScript的静态类型支持，不过需要特别注意的是，除非你在学习Angular 2，不然我觉得你如果要选用Angular 2的话还是要慎重考虑。我个人很喜欢TypeScript，也很钦佩他们团队的优秀工作，不过任然有很多的权衡，可以参阅 [“The Shocking Secret About Static Types”](https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3) & [“You Might Not Need TypeScript”](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b).

- [**Flow\*:**](https://flowtype.org/) JavaScript静态类型检测工具，可以阅读 [“TypeScript vs Flow”](http://djcordhose.github.io/flow-vs-typescript/flow-typescript-2.html#/) 来对于这二者有个大概的了解，如果你打算Flow的话也是推荐我的编辑器 [Nuclide](https://nuclide.io/)。




# React


[**React**](https://facebook.github.io/react/) 是个专注于构建用户视图层的JavaScript库，其基于单向数据流的设计思想，也就意味着：
- React 以Props的形式将参数传入Components，并且在数据发生变化的时候选择性重渲染部分DOM。在重渲染阶段发生的数据变化并不会立刻触发重渲染，而是在下一个绘制阶段的时候才会进行重渲染。
- 渲染完毕之后，就进入了事件处理，React使用特殊的合成事件帮助开发者监听与响应事件，将所有的节点上的事件交托单一事件监听器处理以获得更好的性能体验。你可以在这些事件的监听函数中通过外部传入的回调重新设置Props或者直接修改内部State。
- 对于数据的任何变化都会重复步骤1。


这种单向数据流与当时以Angular 1 / Knockout为代表的双向数据绑定形成对比，双向数据绑定中如果发现绑定的数据发生变化则会立刻触发重渲染，而无论当前是否处于渲染流程中，这一点也就导致了Reflows与Repaints的性能表现非常差。React并没有预置专门的数据管理系统，不过官方推荐基于Flux的解决方案。React 的单向数据流的概念借鉴了很多函数式编程的设计思想，并且对于不可变数据结构的应用也在很大程度上改变了我们对前端框架的认识。如果你希望了解更多关于React与Flux架构的知识，推荐阅读 [“The Best Way to Learn to Code is to Code: Learn App Architecture by Building Apps”](https://medium.com/javascript-scene/the-best-way-to-learn-to-code-is-to-code-learn-app-architecture-by-building-apps-7ec029db6e00)。



- [**create-react-app\*:**](https://github.com/facebookincubator/create-react-app) 官方出品的快速脚手架搭建工具。

- [**react-router\*:**](https://github.com/ReactTraining/react-router) 方便的React路由解决方案。

- [**Next.js\*:**](https://zeit.co/blog/next) 非常简单的通用React应用开发框架。

- [**velocity-react\*:**](https://github.com/twitter-fabric/velocity-react) 非常不错的React动画辅助库。


# Redux


[**Redux**](https://github.com/reactjs/redux) 为应用提供了事务式的，确定性的状态管理支持。在Redux中，我们仅可以通过Action来修改当前的应用状态。如果你希望深入了解为啥这么做，可以参阅 [“10 Tips for Better Redux Architecture.”](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44) 或者跟着 [Dan Abramov](https://medium.com/u/a3a8af6addc1)的官方课程:



- [**“Getting Started with Redux”**](https://egghead.io/courses/getting-started-with-redux)

- [**“Building React Applications with Idiomatic Redux”**](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)


实际上即使你不使用Redux，也很推荐学习Redux的设计思想，它可以给你很多关于状态管理的最佳实践，告诉你纯函数的价值所在，以及告诉你何谓Reducers，何谓General-Purpose函数。在Redux的工程实践中，对于异步Action的处理也是值得讨论的：

- [**redux-saga\*:**](https://github.com/yelouafi/redux-saga) A synchronous-style side-effect library for Redux. Use this to manage I/O (such as handling network requests).


# Angular 2*


[**Angular 2**](https://angular.io/) 脱胎于风靡一时的Angular 1，鉴于当年疯狂的流行度，学会这个会是你简历上浓墨重彩的一笔，不过我还是推荐先学习React。我个人也认为React是优于Angular 2的,[React over Angular 2](https://medium.com/javascript-scene/angular-2-vs-react-the-ultimate-dance-off-60e7dfbc379c) because:


1. 它更简单

2. 社区很强大


# RxJS
[**RxJS**](https://github.com/Reactive-Extensions/RxJS) 是JavaScript中一系列响应式编程工具的集合，就好比流处理领域的Lodash，它把响应式编程带入到了JavaScript的领域。ECMAScript Observables是stage-1阶段的草稿，RxJS 5+则是当前的标准实现。虽然我个人非常喜欢RxJS，但是如果你想在工程中使用RxJS的话还是需要考虑下，因为其内置了很多的Operators，其会增加你的包体尺寸。不过我们可以通过仅引入部分所需要的库来解决这个问题，最后大概只会使得包体增加200KB左右吧。


# 为什么没有提到其他框架？
有不少人问我为啥没有把他们喜欢的框架也列举进来，对于我而言我会先考虑：这个在真实的工作中会所有帮助吗？当然，这一点见仁见智，我也是打算从一些所谓的人气投票中一窥变化。首先，我会去Google Trends中查看各个框架关联关键词的被搜索情况:
![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2016/12/1/1-gmYPusm1EjWu713tmVCd8A.png) 


另一个很有帮助的网站就是Indeed.com，会聚合不同站点上对于不同职位的开发者的需求信息，可以看出目前招聘上对于前端开发者技能需求的情况为:
![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2016/12/1/1-aGINRwIAXUW6dUEKzvbFDw.png) 


在上图中，Angular（Angular 1+Angular 2）还是高于React的，不过我个人还是会推荐React，有如下几个原因吧：

- [More people are interested in learning React than Angular](https://medium.com/@sachagreif/the-state-of-javascript-front-end-frameworks-1a2d8a61510)

- [React significantly leads Angular in user satisfaction](https://medium.com/@sachagreif/the-state-of-javascript-front-end-frameworks-1a2d8a61510)













































