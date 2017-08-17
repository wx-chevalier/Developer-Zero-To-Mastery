# JavaScript 学习与实践资料索引

参考笔者在[泛编程语言学习知识结构](https://parg.co/bt0)一文中介绍的知识图谱。

# Overview

- [Glossary of Modern JavaScript](https://auth0.com/blog/glossary-of-modern-javascript-concepts/): In this article, we'll address concepts that are crucial to understanding functional programming, reactive programming, and functional reactive programming and their use with JavaScript.
- [2017-Writing modern JavaScript code](https://dev.to/scastiel/writing-modern-javascript-code): I'll try here to list some good practices to make your JavaScript code easier to write, read and maintain.
- [Everything I learned from #Javascript30](https://medium.com/craft-academy/everything-i-learned-from-javascript30-d8d2db246b7?source=userActivityShare-fe48c4221a4c-1488448383).

## 崛起的 JavaScript
- [2017-JavaScript — A First-Class Language At Last](https://hackernoon.com/javascript-a-first-class-language-at-last-209376f69731): As a JavaScript engineer, I wanted to dig deeper into the public perception of the language and how rooted in reality it is. What I found is that some criticisms hold water, but many do not.

# ECMAScript
- [TC39, ECMAScript, and the Future of JavaScript](https://parg.co/bXD)
- [简明 ES6 Features 列表](https://codetower.github.io/es6-features/)
- [The Real Story Behind ECMAScript 4](https://auth0.com/blog/the-real-story-behind-es4/): Our JavaScript history article sparked interesting comments regarding what really happened during the ECMAScript 4 era. Below you will find a more detailed perspective of what really went down between 1999 and 2008 in the world of JavaScript. Read on!
- [ES8 Feature Set: JavaScript is Getting Asynchronous](https://medium.com/@Eugeniya/es8-feature-set-javascript-is-getting-asynchronous-2a8a43dd0cbc#.brnqngo2n)
- [ECMAScript 2017 and beyond](https://speakerdeck.com/rauschma/ecmascript-2017-and-beyond): In this talk, we’ll go into the latest JavaScript features and how they are designed.
- [Mastering Async Await in Node.js](https://blog.risingstack.com/mastering-async-await-in-nodejs/): In this article, you will learn how you can simplify your callback or Promise based Node.js application with async functions (async/await).

# Collection: 资料集锦
- [Master JavaScript Programming With 18 OpenSource Books【Collection】](http://6me.us/snwXG): This compilation focuses on the JavaScript language with 18 solid recommendations. There are books here for beginner, intermediate, and advanced programmers alike. All of the texts are released under an open source license.

# Interview
- [3 JavaScript questions to watch out for during coding interviews](http://6me.us/JAZ4): This article isn’t about the newest JavaScript libraries, common development practices, or any of the new ES6 functions. Rather, it’s about 3 things that usually come up in interviews when discussing JavaScript.
- [Interview Algorithm Questions in Javascript() {...}](https://github.com/kennymkchan/interview-questions-in-javascript)
- [2017-The Best Frontend JavaScript Interview Questions (written by a Frontend Engineer)](https://parg.co/bIL)

# Mechanism


## Event Loop

- [2014-阮一峰-JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [2015-Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [2016-Understanding the Node.js Event Loop](https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/): This article helps you to understand how the Node.js event loop works, and how you can leverage it to build fast applications. We’ll also discuss the most common problems you might encounter, and the solutions for them.
- [2016-理解事件循环](https://github.com/ccforward/cc/issues/47)
- [2016-The Node.js Event Loop, Timers, and process.nextTick()](https://parg.co/b1l): The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
- [2017-Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！](https://segmentfault.com/a/1190000008589736): 
- [2017-JavaScript in parallel](http://50linesofco.de/post/2017-02-06-javascript-in-parallel-web-workers-transferables-and-sharedarraybuffer): Workers, transferable objects and SharedArrayBuffer
- [2016-setImmediate.js【Project】](https://github.com/YuzuJS/setImmediate): setImmediate.js is a highly cross-browser implementation of the setImmediate and clearImmediate APIs, proposed by Microsoft to the Web Performance Working Group.

## AST
- JavaScript Parser: [Acorn](https://github.com/ternjs/acorn), [babylon](https://github.com/babel/babylon)
- JavaScript Generator: [ECMAScript code generator on steroids](https://github.com/inikulin/esotope), [ECMAScript code generator](https://github.com/estools/escodegen)
- [2017-Understanding ASTs by Building Your Own Babel Plugin](https://www.sitepoint.com/understanding-asts-building-babel-plugin/)
- [2017-Babel Handbook](https://github.com/thejameskyle/babel-handbook): A guided handbook on how to use Babel and how to create plugins for Babel.
