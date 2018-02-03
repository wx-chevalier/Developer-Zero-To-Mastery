[![返回目录](https://parg.co/UGo)](https://github.com/wxyyxc1992/Awesome-Reference) 


# Web 性能优化实践资料索引

前端优化的根本目的是为了有一个更好地用户体验的同时尽可能减少后端负载压力。即保证更少的加载时间、更快的首屏渲染、更流畅的用户交互。鉴于本文篇幅较长，因此拆分为了[第一部分](.Web-Performance-Reference.md)与[第二部分](./Web-Performance-Reference.2.md)。

# Scripting: 脚本解析与执行

* [2017-The Cost Of JavaScript](https://parg.co/UEm): In this post, I’ll cover why a little discipline can help if you’d like your site to load & be interactive quickly on mobile devices.

* [Planning for Performance](https://www.youtube.com/watch?v=RWLzUnESylc)

* [Solving the Web Performance Crisis by Nolan Lawson](https://twitter.com/MSEdgeDev/status/819985530775404544)

* [JS Parse and Execution Time](https://timkadlec.com/2014/09/js-parse-and-execution-time/)

* [Measuring Javascript Parse and Load](http://carlos.bueno.org/2010/02/measuring-javascript-parse-and-load.html)

* [Unpacking the Black Box: Benchmarking JS Parsing and Execution on Mobile Devices](https://www.safaribooksonline.com/library/view/velocity-conference-new/9781491900406/part78.html)

- [slides](https://speakerdeck.com/desp/unpacking-the-black-box-benchmarking-js-parsing-and-execution-on-mobile-devices))

* [When everything’s important, nothing is!](https://aerotwist.com/blog/when-everything-is-important-nothing-is/)

* [The truth about traditional JavaScript benchmarks](http://benediktmeurer.de/2016/12/16/the-truth-about-traditional-javascript-benchmarks/)

* [Do Browsers Parse JavaScript On Every Page Load](http://stackoverflow.com/questions/1096907/do-browsers-parse-javascript-on-every-page-load/)

* [optimize-js](https://github.com/nolanlawson/optimize-js)

* [lazy-parsing-in-javascript-engines](https://ariya.io/2012/07/lazy-parsing-in-javascript-engines)

* [Turn off negate_iife by default as it hurts V8 performance.](https://github.com/mishoo/UglifyJS2/issues/886)

- [Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers): This document will contain advice to avoid writing code that will perform significantly worse than expected. Specifically those patterns that cause V8 (relevant to Node.JS, Opera, Chromium...) to refuse to optimize the affected function.

- [2017-Optimizing dynamic JavaScript with inline caches](https://parg.co/b4a)： This is an overview of an optimization technique I've been using in JSIL for a while, where you create and update polymorphic inline caches in your JavaScript code at runtime so that it can stay fast while adapting to unexpected changes.。( https://parg.co/b4a )

- [2017-Improved JavaScript performance, WebAssembly, and Shared Memory in Microsoft Edge](https://parg.co/bfk)

* [2012:writing-fast-memory-efficient-javascript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/)

* [2016:efficient-javascript](https://medium.com/@xilefmai/efficient-javascript-14a11651d563#.i6494k3bl)

* [2014-Refactoring your JavaScript code with Grasp](http://www.graspjs.com/blog/2014/01/07/refactoring-javascript-with-grasp): Grasp 这个小小的 JavaScript 的命令行重构工具让我们所有人印象深刻。它为抽象语法树提供了丰富的选择器和操作，比摆弄 sed 和 grep 要先进多了。这给我们正在进行的将 JavaScript 做为一等编程语言的运动添加了一个有用的新工具。

* [2016-Butternut #Project# ](https://github.com/Rich-Harris/butternut): The fast, future-friendly minifier.

* [2017-Prepack #Project# ](https://prepack.io/): Prepack is a tool that optimizes JavaScript source code: Computations that can be done at compile-time instead of run-time get eliminated. Prepack replaces the global code of a JavaScript bundle with equivalent code that is a simple sequence of assignments. This gets rid of most intermediate computations and object allocations.

# Layout & Rendering: 界面布局与渲染策略

* [高性能 JavaScript 重排与重绘](http://www.cnblogs.com/zichi/p/4720000.html)

* [improving-your-css-with-parker](http://csswizardry.com/2016/06/improving-your-css-with-parker/)

* [避免大规模、复杂的布局](https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn)

- [一篇文章说清浏览器解析和 CSS（GPU ）动画优化](https://segmentfault.com/a/1190000008015671)

- [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a): All of the below properties or methods, when requested/called in JavaScript, will trigger the browser to synchronously calculate the style and layout\*.

# Interaction & Animation: 交互与动画
