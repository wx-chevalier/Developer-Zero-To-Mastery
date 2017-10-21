[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 



# JavaScript 引擎资料索引


- **Official V8 blog** [v8project.blogspot.com](http://v8project.blogspot.com/)


- [benediktmeurer.de](https://t.co/CzlzNpYFzx) (V8 compiler and benchmarks)

- <http://ripsawridge.github.io/> (V8 compiler)

- <https://medium.com/@tverwaes> (V8 runtime)

- <http://mrale.ph/> (Not on the V8 team anymore.)


- [demystifying-js-engines](https://github.com/a0viedo/demystifying-js-engines):一系列讲解JavaScript虚拟机构造的资源整合
 
- [v8-perf](https://github.com/thlorenz/v8-perf):  Notes and resources related to v8 and thus Node.js performance

- [Rednaxelafx:Implementing a JavaScript Engine](http://www.slideshare.net/RednaxelaFX/implement-js-krystalmok20131110) 

- [Rednaxelafx:各JavaScript引擎的简介，及相关资料/博客收集帖](http://hllvm.group.iteye.com/group/topic/37596):各JavaScript引擎的简介，及相关资料/博客收集帖 

- [JavaScript中使用object[key]查找属性的过程是怎样的呢（相对于Array查找元素）？](https://www.zhihu.com/question/30848981/answer/51997592) 

- [2017-认识 V8 引擎](https://zhuanlan.zhihu.com/p/27628685)：V8  是如何使得JavaScript性能有大幅提升的呢？通过对一些书籍和文章的学习，梳理了 V8 的相关内容，本文将带你认识 V8。

- [2017-How The Performance Characteristics of V8's Turbofan Will Affect The Way WE Optimize ](https://www.nearform.com/blog/node-js-is-getting-a-new-v8-with-turbofan/): 



## Event Loop



- [2014-阮一峰-JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)

- [2015-Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)



- [2016-理解事件循环](https://github.com/ccforward/cc/issues/47)



- [2017-Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！](https://segmentfault.com/a/1190000008589736): 

- [2017-JavaScript in parallel](http://50linesofco.de/post/2017-02-06-javascript-in-parallel-web-workers-transferables-and-sharedarraybuffer): Workers, transferable objects and SharedArrayBuffer

- [2016-setImmediate.js【Project】](https://github.com/YuzuJS/setImmediate): setImmediate.js is a highly cross-browser implementation of the setImmediate and clearImmediate APIs, proposed by Microsoft to the Web Performance Working Group.

- [2017-setImmediate() vs nextTick() vs setTimeout(fn,0) – in depth explanation](http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/): And going through official documents of Node may not really be feasible for non-advanced developers. Hence I decided to come up with this article.

- [2017-Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more ](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec?source=linkShare-fe48c4221a4c-1503534847) 




# Memory Model



- [A crash course in memory management](https://parg.co/b9p): To understand why ArrayBuffer and SharedArrayBuffer were added to JavaScript, you need to understand a bit about memory management.



- [2017-How JavaScript works: memory management + how to handle 4 common memory leaks](https://parg.co/bnw)


## Object Representation: 对象表示



- [2017-Fast Properties in V8](https://parg.co/b70): In this blog post we would like to explain how V8 handles JavaScript properties internally.


- [V8 Design Elements](https://github.com/v8/v8/wiki/Design%20Elements)

- [A tour of V8: object representation](http://www.jayconrod.com/posts/52/a-tour-of-v8-object-representation)

- [Demystifying v8 and JavaScript Performance](http://thlorenz.com/talks/demystifying-v8/talk.pdf)

- [V8 Docs:Object Class Reference](https://v8docs.nodesource.com/node-7.2/db/d85/classv8_1_1_object.html)

- [How does V8 manage the memory of object instances?](http://stackoverflow.com/questions/7413168/how-does-v8-manage-the-memory-of-object-instances)




# Garbage Collection: 垃圾回收

