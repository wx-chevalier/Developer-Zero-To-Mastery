[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 


 


 


 






# React 工程实践资料索引




# Production: 生产环境



## Test: 测试

- [2017-Testing React Applications【Series】](https://blog.logrocket.com/testing-react-applications-part-1-of-3-ebd8397917f3)：With React and the ecosystem of testing tools that have emerged around it, it’s finally possible to build robust, scalable tests that provide strong guarantees on code correctness.

- [Snapshot Testing React Components with Jest](https://semaphoreci.com/community/tutorials/snapshot-testing-react-components-with-jest)



- [Testing in React: best practices, tips and tricks](https://parg.co/bsP)

- [Testing React components with Jest and Enzyme](https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f#.yfpuy4eip)

- [Testing a React & Redux Codebase](http://silvenon.com/testing-react-and-redux/)


- [Testing in React: Getting Off The Ground](https://medium.com/javascript-inside/testing-in-react-getting-off-the-ground-5f569f3088a#.6ip96uul5)

- [UI Testing in React](http://www.tuicool.com/articles/FBRN322)


- [a-step-by-step-tdd-approach-on-testing-react-components-using-enzyme](http://thereignn.ghost.io/a-step-by-step-tdd-approach-on-testing-react-components-using-enzyme/)

- [enzyme-javascript-testing-utilities-for-react](https://medium.com/airbnb-engineering/enzyme-javascript-testing-utilities-for-react-a417e5e5090f#.huj3rtv24) 


## StaticType: 静态类型检测


- [2017-Typing Higher-order Components in Recompose With Flow](https://parg.co/bDu) 




## Server Side Rendering: 服务端渲染

- [2017-Introducing Rapscallion #Project# ](http://formidable.com/blog/2017/introducing-rapscallion/): a new approach for server-side rendering React applications.


- [2017-Server-Side React Rendering](https://css-tricks.com/server-side-react-rendering/): In this tutorial, we'll take you through a server side rendering example step-by-step. including working around a common roadblock for React apps that talk to APIs. 


- [React 同构技术](https://zhuanlan.zhihu.com/p/21492780)

- [React on the Server for Beginners: Build a Universal React and Node App](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app?ref=mybridge.co)

- [Redux官方文档 ServerSideRendering](http://redux.js.org/docs/recipes/ServerRendering.html)

- [玩转React服务端渲染](https://blog.coding.net/blog/React-server-rendering)

- [isomorphic-redux-app](https://github.com/caljrimmer/isomorphic-redux-app)

- [Client-side vs. server-side rendering: why it’s not all black and white.](https://medium.freecodecamp.com/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d#.n4zils8st): Since the dawn of time, the conventional method for getting your HTML up onto a screen was by using server-side rendering. It was the only way. You loaded up your .html pages on your server, then your server went and turned them into useful documents on your users’ browsers.


- [Introducing Rapscallion](http://formidable.com/blog/2017/introducing-rapscallion/): a new approach for server-side rendering React applications.









## Preact

- [The Inner Workings Of Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf#.or5425hja)


- [Webpack2 boilerplate for building SPA / PWA / offline front-end apps with Preact](https://github.com/lukeed/preact-starter)

- [司徒正美 preact 源码学习系列文章](https://segmentfault.com/a/1190000010336457)


# Architecture: 应用架构




# Reconciliation: 调和与 React 内部原理

- [2017-React Internals](http://www.mattgreer.org/articles/react-internals-part-one-basic-rendering/): In this five part series, we will “recreate” React from the ground up, learning how it works along the way. Once we’ve finished, you should have a good grasp of how React works, and when and why it calls the various lifecycle methods of a component.


## Virtual DOM 



- [2017-react diff 原理](https://cloud.tencent.com/community/article/654179001489391651?fromSource=gwzcw.114428.114428.114428)：React diff 作为 Virtual DOM 的加速器，其算法上的改进优化是 React 整个界面渲染的基础，以及性能提高的保障，同时也是 React 源码中最神秘、最不可思议的部分，本文将剖析 React diff 的不可思议之处。

- [Performance Calendar:React’s diff algorithm](http://calendar.perfplanet.com/2013/diff/)

- [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379?refer=purerender)

- [React 源码剖析系列 － 解密 setState](https://zhuanlan.zhihu.com/p/20328570?refer=purerender)

- [深入浅出React（四）：虚拟DOM Diff算法解析](http://www.infoq.com/cn/articles/react-dom-diff)

- [ReactJS | Learning Virtual DOM and React Diff Algorithm](http://www.oyecode.com/2015/09/reactjs-learning-virtual-dom-and-react.html)


- [react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)









## Stack Reconciler



- [Dive into setState() method in React](https://gist.github.com/ajhsu/e259392f06aa8e3bf5c9)

- [Dive into React codebase: Handling state changes](http://reactkungfu.com/2016/03/dive-into-react-codebase-handling-state-changes/)

- [2017-react-reconciler-demo #Project# ](https://github.com/lukebelliveau/react-reconciler-demo): A simple implementation of React's stack reconciler. This is much different from the real implementation, but demonstrates the concepts.

- [ON THE ASYNC NATURE OF `SETSTATE` IN REACT](http://thereignn.ghost.io/on-the-async-nature-of-setstate-in-react/)

- [2017-Under-the-hood-ReactJS](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS): Entire ReactJS code base explanation by visual block schemes (Stack+Fiber versions)




## Fiber



- [2017-React Fiber resources](https://github.com/koba04/react-fiber-resources): This is for resources for React Fiber.

- [2017-A look inside React Fiber - how work will get done.](http://makersden.io/blog/look-inside-fiber/): This post will go outside-in - starting from calling the render function in client JS and changing state of a component, down to describing the steps taken by Fiber to do all the work.


- [2017-React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture): A description of React's new core algorithm, React Fiber.

- [2017-React 的新引擎— React Fiber 是什么？](https://parg.co/bgb)：稍有经验的前端工程师会知道，页面的 DOM 改变，就会导致页面重新计算 DOM，进行重绘或者重排，DOM 结构复杂或者频繁操作 DOM 通常是性能瓶颈产生的原因。而网站从最开始比较简单，开始变的越来越复杂，用户交互也会越来越多，怎么去减轻 DOM 操作带来的性能损耗就变得重要起来。

- [2017-React Fiber 是什么](https://zhuanlan.zhihu.com/p/26027085)：React Fiber 这个大改变 Facebook 已经折腾两年多了，刚刚结束不久的 React Conf 2017 会议上，Facebook 终于确认，React Fiber 会搭上 React 下一个大版本v16的顺风车发布。

- [2017-React 新引擎 React Fiber 究竟要解决什么问题？](https://parg.co/btw)：Facebook 正在以流行的 JavaScript 框架 React 为基础开发一个全新的架构。这个名为 React Fiber 的全新设计改变了检测变更的方法和时机，借此可改进浏览器端和其他渲染设备的响应速度。 这一 全新架构 最初已于 2016 年 7 月公开发布，其中蕴含着过去多年来 Facebook 不断改进的工作成果。该架构可向后兼容，彻底重写了 React 的协调（Reconciliation）算法。该过程可用于确定出现变更的具体时间，并将变更传递给渲染器。

- [2017-React Conf: A Cartoon Intro to Fiber](https://www.youtube.com/watch?v=ZCuYPiUIONs)



