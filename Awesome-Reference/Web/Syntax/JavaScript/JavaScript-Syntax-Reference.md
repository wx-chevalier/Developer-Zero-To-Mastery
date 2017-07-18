# JavaScript 语法基础资料索引


- [2016-A Javascript journey with only six characters](http://jazcash.com/a-javascript-journey-with-only-six-characters/): [JSFuck【Project】](https://github.com/aemkei/jsfuck)

# Expression: 表达式
- [What does const stand for in ES6?](https://medium.com/the-node-js-collection/what-does-const-stand-for-in-es6-f7ab3d9e06fc)

- [JavaScript Errors and Stack Traces in Depth](http://lucasfcosta.com/2017/02/17/JavaScript-Errors-and-Stack-Traces.html)
- [Even with async/await, raw promises are still key to writing optimal concurrent javascript](https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161#.w1k2udirb)

## Variable: 变量
- [2017-A guide to JavaScript variable hoisting 🚩 with let and const](https://medium.freecodecamp.com/what-is-variable-hoisting-differentiating-between-var-let-and-const-in-es6-f1a70bb43d)

# ControlFlow: 流程控制
## Asynchronous: 异步编程
- [2017-The 80/20 Guide to Async/Await in Node.js](http://6me.us/jIIzOs)
- [2017-ES7 Async/Await pitfalls](https://medium.com/@matansokolovsky/es7-async-await-pitfalls-d24331388a70#.xkeyncsca)
- [2017-Asyncing Feeling about JavaScript Generators](https://www.bignerdranch.com/blog/asyncing-feeling-about-javascript-generators/)
- [2017-How to make the fastest Promise library](https://parg.co/bhz): I have developed Aigle which is a fast Promise library. It is inspired byBluebird. The library is not only a benchmark exercise but a production-ready library that implements the Promise A+ standard, and does so faster than Bluebird.
- [2017-理解Promise简单实现的背后原理](http://bupt-hjm.github.io/2017/03/23/study-promise/)
- [2016-JavaScript之异步编程简述](http://blog.codingplayboy.com/2016/01/20/js_async_intro/)、[2017-JavaScript异步编程](http://blog.codingplayboy.com/2017/04/25/js_async/)

## ErrorHandling: 异常处理
- [2017-36个代码块，带你读懂异常处理的优雅演进](http://mp.weixin.qq.com/s/9_Gxn5eAr8XKYyRxh8e8EA)：本文讲解了从函数回调，到 ES7 规范的异常处理方式。异常处理随着规范的进步变得越来越优雅，作为程序员，我们不要害怕使用 try catch，也不能回避异常处理。

# Function: 函数
- [2017-What the heck is an Immediately-Invoked Function Expression?](https://parg.co/bLr): Maybe you’ve seen the syntax before, but why in the heck does an Immediately-Invoked Function Expression (IIFE — pronounced ‘iffy’) look like it does? Why is it useful?

## Closure: 闭包
- [2017-深入贯彻闭包思想，全面理解JS闭包形成过程](https://segmentfault.com/a/1190000009886713)

## Decorator: 装饰器
- [2015-Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.itxdgmcv4): Yehuda’s decorators proposal seeks to enable annotating and modifying JavaScript classes, properties and object literals at design time while keeping a syntax that’s declarative.
- [2015-javascript-decorators](https://github.com/wycats/javascript-decorators): Decorators make it possible to annotate and modify classes and properties at design time.
- [2016-core-decorators](https://github.com/jayphelps/core-decorators.js): Library of stage-0 JavaScript decorators (aka ES2016/ES7 decorators but not accurate) inspired by languages that come with built-ins like @override, @deprecate, @autobind, @mixin and more. Popular with React/Angular, but is framework agnostic.
- [2017-How I Fell in Love with JS Decorators](https://cabbageapps.com/fell-love-js-decorators): One of the recent addiction for our team was the usage of Decorators which are proposed in the new ES7. In this article, I am going to strip Decorators for you so that you can see the beauty of it!

## Iterator & Generator: 迭代器与生成器

# Modularity: 模块化
- [2016-the-cost-of-small-modules](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/): In this post, I’d like to demonstrate that small modules can have a surprisingly high performance cost depending on your choice of bundler and module system.
- [2017-Native ECMAScript modules - the first overview](https://blog.hospodarets.com/native-ecmascript-modules-the-first-overview)
- [2017-Native ECMAScript modules: the new features and differences from Webpack modules](https://blog.hospodarets.com/native-ecmascript-modules-new-features)
- [Relation between CommonJS, AMD and RequireJS?](http://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs)
- [JavaScript模块化编程简史](http://mp.weixin.qq.com/s/Z8bG125LvKJFIpF8w3efRg)
- [【译】从发展历史理解 ES6 Module](https://segmentfault.com/a/1190000006043377)
- [Polyfill for the ES Module Loader](https://github.com/ModuleLoader/es-module-loader)
- [Misunderstanding ES6 Modules, Upgrading Babel, Tears, and a Solution](https://medium.com/@kentcdodds/misunderstanding-es6-modules-upgrading-babel-tears-and-a-solution-ad2d5ab93ce0#.hembphjjm)
- [2017-Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
- [2017-ES6 modules support lands in browsers: is it time to rethink bundling?](https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/): Writing performant JavaScript applications is a complex matter these days. Years ago, everything started with script concatenation to save HTTP requests, and then it continued with minification and wrangling of variable names to squeeze out even the last tiny bit of the code we ship.
- [2017-The state of JavaScript modules](https://parg.co/bi0): Recently, there was a lot of fuss on Twitter regarding the current state of ES modules, especially in Node.js, which decided to introduce *.mjs as file extension. The fear and uncertainty is understandable since the topic is complex and following the discussions takes a high degree of effort and dedication.

# Class: 类与对象

- [2017-JavaScript's new #private class fields](http://thejameskyle.com/javascripts-new-private-class-fields.html): What they are, how they work, and why they are the way they are
- [2017-Classes, Complexity, and Functional Programming](https://parg.co/bvD): When I use classes, when I don’t, what I do instead, and why.

## this
- [this 的值到底是什么？一次说清楚](https://zhuanlan.zhihu.com/p/23804247)
- [2017-The state of JavaScript modules](https://parg.co/bi0): Recently, there was a lot of fuss on Twitter regarding the current state of ES modules, especially in Node.js, which decided to introduce *.mjs as file extension. The fear and uncertainty is understandable since the topic is complex and following the discussions takes a high degree of effort and dedication.

## Prototype: 原型
- [2015-ES6 classes and JavaScript prototypes](https://reinteractive.com/posts/235-es6-classes-and-javascript-prototypes)
- [2016-JavaScript ES2015 Classes and Prototype Inheritance](https://parg.co/bvJ)
- [2017-JavaScript For Beginners: the ‘new’ operator](https://hackernoon.com/javascript-for-beginners-the-new-operator-cee35beb669e)
- [再谈 JavaScript 原型与继承](http://www.jb51.net/article/57287.htm)
- [网易某个前端校招笔试题目](http://segmentfault.com/q/1010000003758203)
- [Understanding Javascript inheritance __proto__ and prototype](https://medium.com/@peterchang_82818/understand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29#.p6jjnkmxu)

## 属性监听
- [icaro【Project】](https://github.com/GianlucaGuarini/icaro): icaro 是轻量、高效地 JavaScript 对象观察者实现，能够自动监测 JavaScript 中对象的变化并且进行相应地譬如 DOM 更新等操作。icaro 使用了大量的 ES6 的特性，譬如 Proxies、WeakMaps、Maps 以及 Symbols，是非常不错的可以用来学习利用最新的语言特性实现 JavaScript 响应式框架的开源库。
- [2016-JavaScript 实现 MVVM 之我就是想监测一个普通对象的变化](http://hcysun.me/2016/04/28/JavaScript%E5%AE%9E%E7%8E%B0MVVM%E4%B9%8B%E6%88%91%E5%B0%B1%E6%98%AF%E6%83%B3%E7%9B%91%E6%B5%8B%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%98%E5%8C%96/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [2015-Watch.JS【Project】](https://github.com/melanke/Watch.JS): watch the changes of any object or attribute. [watch-object](https://github.com/FrontendMatter/watch-object)


