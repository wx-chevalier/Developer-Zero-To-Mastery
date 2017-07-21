<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [React 学习与实践资料索引](#react-%E5%AD%A6%E4%B9%A0%E4%B8%8E%E5%AE%9E%E8%B7%B5%E8%B5%84%E6%96%99%E7%B4%A2%E5%BC%95)
- [Overview: 概览](#overview-%E6%A6%82%E8%A7%88)
  - [Principle: 设计理念](#principle-%E8%AE%BE%E8%AE%A1%E7%90%86%E5%BF%B5)
  - [Case Study: 案例](#case-study-%E6%A1%88%E4%BE%8B)
  - [Book: 书籍](#book-%E4%B9%A6%E7%B1%8D)
  - [Course & Conf: 视频教程与会议](#course-&-conf-%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B%E4%B8%8E%E4%BC%9A%E8%AE%AE)
  - [Resource: 其他资源集锦](#resource-%E5%85%B6%E4%BB%96%E8%B5%84%E6%BA%90%E9%9B%86%E9%94%A6)
- [Tutorial: 入门教程](#tutorial-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B)
  - [Concept: 概念](#concept-%E6%A6%82%E5%BF%B5)
  - [Coding: 基础编码](#coding-%E5%9F%BA%E7%A1%80%E7%BC%96%E7%A0%81)
- [Component: 组件开发](#component-%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91)
  - [Syntax: 语法](#syntax-%E8%AF%AD%E6%B3%95)
    - [Props](#props)
    - [State](#state)
    - [Context](#context)
    - [DOM](#dom)
  - [LifeCycle](#lifecycle)
  - [Style: 样式](#style-%E6%A0%B7%E5%BC%8F)
    - [CSS-in-JS](#css-in-js)
  - [Animation](#animation)
  - [React Router](#react-router)
- [StyleGuide & Design Pattern: 样式指南与设计模式](#styleguide-&-design-pattern-%E6%A0%B7%E5%BC%8F%E6%8C%87%E5%8D%97%E4%B8%8E%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)
  - [Functional React](#functional-react)
  - [HOCs: 高阶组件](#hocs-%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6)
  - [Code Splitting: 代码分割](#code-splitting-%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2)
- [Performance: 性能优化](#performance-%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96)
  - [Tool: 工具](#tool-%E5%B7%A5%E5%85%B7)
- [Production: 生产环境](#production-%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83)
  - [Test: 测试](#test-%E6%B5%8B%E8%AF%95)
  - [Preact](#preact)
- [Reconciliation: 调和](#reconciliation-%E8%B0%83%E5%92%8C)
  - [Virtual DOM](#virtual-dom)
  - [Stack Reconciler](#stack-reconciler)
  - [Fiber](#fiber)
- [Pattern Library: 模式库](#pattern-library-%E6%A8%A1%E5%BC%8F%E5%BA%93)
  - [List](#list)
  - [Table](#table)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


> [React 学习与实践资料索引](https://parg.co/bM1)从属于笔者的[ Web 开发基础与工程实践](https://parg.co/bMe)中的[阅读学习资料工具集锦](https://parg.co/b4T)系列，本文内容是笔者在学习与实践 React 以及准备每周的[前端清单系列](https://parg.co/bh1)时候阅读的文章或者接触到的工具积累。注意，部分英文文章需要翻墙，请自备梯子。

# React 学习与实践资料索引
鉴于 React 技术栈一直也在迅速发展，本文目前以 React v15.5.4 、React Router V4 版本为准，笔者会随时更新本文内容，移除过时的链接并且添加新的链接。另外本文相关的部分友链列举如下：
- [Web 学习与实践资料索引](https://parg.co/b4T)
- [JavaScript 学习与实践资料索引](https://parg.co/bMI)
- [Webpack 学习与实践资料索引](https://parg.co/bVs)
- [Redux 学习与实践资料索引](https://parg.co/bVQ)
- [MobX 学习与实践资料索引](https://parg.co/bVC)
- [PWA 学习与实践资料索引](https://parg.co/bOT)
- [React Native 学习与实践资料索引](https://parg.co/bV4)

如果想及时了解前端技术发展，掌握一手资讯，建议阅读[前端每周清单系列](https://parg.co/bh1)。

# Overview: 概览
- [2014-Removing-User-Interface-Complexity,-or-Why-React-is-Awesome](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)
- [2016-React Howto](https://github.com/petehunt/react-howto): Throughout this document, I’ll assume you’ve built a web page with HTML, CSS and JavaScript.
- [2017-React 常用面试题目与分析](https://zhuanlan.zhihu.com/p/24856035)

## Principle: 设计理念

- [2016-Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html): One of the many great parts of React is how it makes you think about apps as you build them. In this document, we'll walk you through the thought process of building a searchable product data table using React. 
- [2017-Things nobody will tell you about React.js](https://parg.co/bNg)
- [2017-react-aha-moments](https://tylermcginnis.com/react-aha-moments/): One of my main goals whenever I’m teaching or writing technical content is to maximize “aha” moments. An “aha” moment is a moment of sudden insight or clarity; when the subject matter suddenly makes sense. We’ve all experienced them and the best teachers I know are able to understand their audience and adapt the lesson in order to maximize these moments.

## Case Study: 案例
- [2016-Moving Airbnb Search to React](http://6me.us/2mS): Using experiments to tackle a large refactor with confidence


## Book: 书籍

- [2016-React In-depth: An exploration of UI development【Book】](https://www.gitbook.com/book/developmentarc/react-indepth/details):Our goal with this GitBook is to document our process, share our research and try to organize our experiences into a single living document. Too be honest, this is a pretty lofty goal. We may not achieve this goal, but hopefully we can get some helpful thoughts down.
- [2016-SurviveJS - React【Book】](https://github.com/survivejs/react-book): This book shows you how to build a little Kanban application using React. During the process you will learn the basics and will be able to take the skills to your own projects.
- [2017-React Bits【Book】](https://github.com/vasanthk/react-bits): A compilation of React Patterns, techniques, tips and tricks.
- [2017-Learning React, 1st Edition【Book】](https://www.safaribooksonline.com/library/view/learning-react-1st/9781491954614/): If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features.
- [2017-Mastering Full-Stack React Web Development【Book】](https://www.safaribooksonline.com/library/view/mastering-full-stack-react/9781786461766/): Learn how to create dynamic full-stack applications with ReactJS and other leading JavaScript tools – smarter web development starts here.
- [2017-React Design Patterns and Best Practices【Book】](https://www.safaribooksonline.com/library/view/react-design-patterns/9781786464538/): Build modular applications that are easy to scale using the most powerful components and design patterns that React can offer you right now About This Book.

## Course & Conf: 视频教程与会议

- [2017 React 大会](http://conf.reactjs.org/livestream)：2017 年 React Conf 于 3 月 13 日、14 日成功举办，会上来自世界各地的开发者就 React Fiber、Flow、Performance、React Native 等多个主题发表了演说与讨论，推荐选择自己喜欢的演讲视频观看。

## Resource: 其他资源集锦
- [Awesome-React](https://github.com/enaqx/awesome-react): A collection of awesome things regarding React ecosystem. 
- [React/Redux Links](https://github.com/markerikson/react-redux-links): Curated tutorial and resource links I've collected on React, Redux, ES6, and more

# Tutorial: 入门教程
## Concept: 概念

- [Master the JavaScript Interview What is a Pure Function](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
- [So-You-Want-To-Be-A-Functional-Programmer](http://62f7d6c2.fromwiz.com/share/s/1yZZr21Yv4w42GorJm0oBXEi3AKTQa3rcARz2nKoQ71RpX_Z)
- [React’s diff algorithm](http://calendar.perfplanet.com/2013/diff/)
- [The Secrets of React’s virtual DOM](http://fluentconf.com/fluent2014/public/schedule/detail/32395)
- [Why is React’s concept of virtual DOM said to be moreperformant than dirty model checking?](http://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode)
- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## Coding: 基础编码

- [2016-Learning React with Create-React-App【Series】](https://parg.co/bhf)
- [2016-A Primer on the React Ecosystem Serials](http://patternhatch.com/2016/07/06/a-primer-on-the-react-ecosystem-part-1-of-3/): I thought I’d share what I’ve learned so far through a primer. Over three parts, I’m going to show you how to set up an environment for React app development, create React components and have them respond to data changes, manage app state with Redux.
- [2017-Simple React Development in 2017](https://parg.co/bCx): The goal of this guide is to showcase how easy it can be to start modern React development.
- [2017-Create a realtime football voting app using React, Redux, React-Router-v4 and Firebase](https://parg.co/bhD): In this series of tutorials, we’ll be creating a football voting app using React, Redux, Redux-Saga, React-Router v4, and Firebase. In this first part, we will setup the project. We’re going to use create-react-app to scaffold the initial project structure, tweak it a bit, and then add the necessary libraries that we’ll be using.
- [2017-How to Build a ToDo App Using React, Redux, and Webpack](https://parg.co/bMT): In this tutorial I’m going to show you how to create a simple “ToDo” app using React, Redux, a little bit of Node, and Cosmic JS.

# Component: 组件开发

## Syntax: 语法
- [2017-React Lifecycle Methods- how and when to use them](https://parg.co/bCT): The above is the life of a React component, from birth (pre-mounting) and death (unmounting).
- [React 组件间通讯](http://www.tuicool.com/articles/6fayIbq)
- [react-aha-moments](https://tylermcginnis.com/react-aha-moments/)
- [React Elements and React Components](https://medium.freecodecamp.com/react-elements-vs-react-components-fdc776705880#.nlfh4ingc)
- [React Components, Elements, and Instances](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)

### Props


- [function-as-child-components](https://medium.com/@iammerrick/function-as-child-components-5f3920a9ace9#.4dpp6haq9)
- [React Patterns：Children相关](http://reactpatterns.com/#stateless-function)
- [A deep dive into children in React](https://mxstbr.blog/2017/02/react-children-deepdive/)
- [Function as Child Components](http://merrickchristensen.com/articles/function-as-child-components.html)

### State

### Context

- [How to safely use React context](https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076#.pnc15zji9)
- [React Docs:Context](https://facebook.github.io/react/docs/context.html)

### DOM

- [Refs and the DOM](https://facebook.github.io/react/docs/refs-and-the-dom.html)



## LifeCycle

- [React’s Component Lifecycles](https://medium.com/mofed/reacts-component-lifecycles-adf0ebc89d23#.79hd0xcxd)
- [浅析 React 生命周期](http://www.tuicool.com/articles/ANNVveE)

## Style: 样式

- [SurviveJS:Styling React](http://survivejs.com/react/advanced-techniques/styling-react/)
- [A 5 Minute Intro To Styled Components](https://medium.freecodecamp.com/a-5-minute-intro-to-styled-components-41f40eb7cd55) 

### CSS-in-JS

- [2017-CSS in JavaScript: The future of component-based styling](https://parg.co/bNe)
- [2017-Stop using CSS in JavaScript for web development](https://hackernoon.com/stop-using-css-in-javascript-for-web-development-fa32fb873dcc): This article lists common misconceptions (myths) and the existing CSS solutions to those problems.

## Animation
- [2017-react-move【Project】](https://github.com/tannerlinsley/react-move): Beautifully and deterministically animate anything in React.
- [2017-React Animations 101【Series】](https://parg.co/bMF): In this post on react animations 101, we will explore a few examples and why CSS transition are a good fit for the navigation bar.
- [Animations with ReactTransitionGroup](https://medium.com/@cheapsteak/animations-with-reacttransitiongroup-4972ad7da286#.no6xhxooq)
- [React Official Docs:React动画文档](https://facebook.github.io/react/docs/animation.html)
- [Animations with ReactTransitionGroup](https://medium.com/@cheapsteak/animations-with-reacttransitiongroup-4972ad7da286#.d1082uczx)
- [React源码剖析系列 － 玩转 React Transition](https://segmentfault.com/a/1190000004150178)
- [How to build animated microinteractions in React](https://medium.freecodecamp.com/how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8#.4jnphlp3r): Every function in JavaScript has a closure. And this is one of the coolest features of the JavaScript language. Because without closures, it would be hard to implement common structures like callbacks or event handlers.

## React Router
- [2017-A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
- [2017-Redux and React-Router v4: a Tale of Two Datastores](https://hackernoon.com/redux-and-react-router-v4-a-tale-of-two-datastores-8dd91f47d14e)
- [2017-Build your own React Router v4](http://6me.us/jfUwEw): this has helped you create a better mental model of what’s happening in React Router while also helping you to gain an appreciation for React Router’s elegance and “Just Components” API.
- [2017-Universal JavaScript Apps with React Router 4](https://ebaytech.berlin/universal-web-apps-with-react-router-4-15002bb30ccb): How to use the latest version of React Router both on the server side and the client side

# StyleGuide & Design Pattern: 样式指南与设计模式

- [2016-来自 AlloyTeam 的 React.js 2016最佳实践](http://www.alloyteam.com/2016/01/reactjs-best-practices-for-2016/)
- [2016-React Patterns](http://reactpatterns.com/):  Patterns for React Developers
- [2017-10 React mini-patterns](https://hackernoon.com/10-react-mini-patterns-c1da92f068c5#.5v2hpgurn): Over the last few years, I’ve worked on a handful of decent-sized React projects, and many, many pint-sized ones. Throughout this magical journey, a number of patterns have come up that I find myself repeating again and again.
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.uz8irdipq)
- [React Higher Order Components in depth](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.52i6nt3at)
- [Understanding Component-Based Architecture](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238#.smfo6yyhj)
- [Share Code between React and React Apps using Higher Order Components](https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665#.4z4q9o6k2)
- [Higher Order React Components](http://natpryce.com/articles/000814.html)
- [Renderless Components or How Logic Doesn't Always Need a UI](http://kyleshevlin.com/renderless-components/)
- [Higher-Order Components in React](http://6me.us/MUHBdp)
- [jsinspect](https://github.com/danielstjules/jsinspect)
- [Our Best Practices for Writing React Components](https://medium.com/code-life/our-best-practices-for-writing-react-components-dec3eb5c3fc8#.mh12fzmoi)

## Functional React

- [2017-Functional setState is the future of React](https://parg.co/bMW): Declare state changes separately from the component classes.
- [non-functional-react-js](https://medium.com/@arqex/non-functional-react-js-6e020ce27ee2#.cj3dcxl4j)

## HOCs: 高阶组件
- [2017-Why you should keep your react components pure by using HOCs](https://hackernoon.com/why-you-should-keep-your-react-components-pure-by-using-hocs-67e5c7f80c81): In this article I show how decomposing state from the presentational layer can both reduce complexity and promote code re-use with some React examples— a win-win situation helping to tame the challenges of developing SPAs. Although I’m using React, the lessons are universal and can apply to any framework.
- [redux-without-profanity-components](https://tonyhb.gitbooks.io/redux-without-profanity/content/components.html)
- [Functional React Series — Part 1: Get your App outta my Component](https://medium.com/@adamterlson/functional-react-series-part-1-get-your-app-outta-my-component-92656ae13e25#.q47pt8fga)
- [Mixins Are Dead. Long Live Composition](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.ldkxkz8na)
- [react-higher-order-components-in-depth](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.wn52tt10t)
- [container-components](https://medium.com/@learnreact/container-components-c0e67432e005#.h775w7ifn)

## Code Splitting: 代码分割
- [2017-Introducing React Loadable](http://6me.us/mNHi): Component-centric code splitting and loading in React


# Performance: 性能优化
- [React Office Site —— Optimizing Performance](https://facebook.github.io/react/docs/optimizing-performance.html): For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.
- [2017-Keep Your React Redux Healthy, Performance Optimization Story](https://parg.co/bCn): I am here to be honest about React optimization.
- [2017-React at Light Speed](https://blog.vixlet.com/react-at-light-speed-78cd172a6411): Lessons in optimizing performance at Vixlet
- [2017-45% Faster React Functional Components, Now](https://parg.co/bMa)
- [2017-Our Best Practices for Writing React Components](https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8#.3kin14vrf): When I first started writing React, I remember seeing many different approaches to writing components, varying greatly from tutorial to tutorial. Though the framework has matured considerably since then, there doesn’t seem to yet be a firm ‘right’ way of doing things.
- [2017-Memoize React components](https://github.com/planttheidea/moize)
- [2017-React at Light Speed](http://6me.us/dx5)
- [Should I use shouldComponentUpdate?](http://jamesknelson.com/should-i-use-shouldcomponentupdate/)
- [React移动web极致优化](https://github.com/lcxfs1991/blog/issues/8?f=tt&hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [ProReact中关于性能的章节]()
- [component-rendering-performance-in-react](https://medium.com/modus-create-front-end-development/component-rendering-performance-in-react-df859b474adc#.rjjvtwgs8)
- [React应用优化：避免不必要的render](http://www.broadview.com.cn/article/77?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [React Rally: Animated — React Performance Toolbox](http://blog.vjeux.com/2015/javascript/react-rally-animated-react-performance-toolbox.html)
- [How to Benchmark React Components: The Quick and Dirty Guide](https://medium.com/code-life/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c#.w1t22c86k)
- [React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.b9vwbt1jy)
- [A DEEP DIVE INTO REACT PERF DEBUGGING](http://benchling.engineering/deep-dive-react-perf-debugging/)
- [React at 60fps](https://medium.com/@okonetchnikov/react-at-60fps-4e36b8189a4c#.enqkaabwg)
- [React Performance Optimization](https://medium.com/@nesbtesh/react-performance-optimization-28ec5b61fff3#.lx9g6ewdg)
- [React Performance Optimization](http://6me.us/t73W9): Performance optimization can be a big pain with any language. Especially when you are optimizing your app and you have no idea what to optimize. React has some really nice tools to do this, I will be talking about one specifically that will make your life a lot better.

## Tool: 工具
- [why-did-you-update【Project】](https://github.com/garbles/why-did-you-update): Puts your console on blast when React is making unnecessary updates.

# Production: 生产环境
## Test: 测试
- [2017-Testing React Applications【Series】](https://blog.logrocket.com/testing-react-applications-part-1-of-3-ebd8397917f3)：With React and the ecosystem of testing tools that have emerged around it, it’s finally possible to build robust, scalable tests that provide strong guarantees on code correctness.
## Server Side Rendering: 服务端渲染
- [2017-Introducing Rapscallion【Project】](http://formidable.com/blog/2017/introducing-rapscallion/): a new approach for server-side rendering React applications.


## Preact
- [The Inner Workings Of Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf#.or5425hja)
- [Webpack2 boilerplate for building SPA / PWA / offline front-end apps with Preact](https://github.com/lukeed/preact-starter)

# Reconciliation: 调和

## Virtual DOM 

- [2017-react diff 原理](https://cloud.tencent.com/community/article/654179001489391651?fromSource=gwzcw.114428.114428.114428)：React diff 作为 Virtual DOM 的加速器，其算法上的改进优化是 React 整个界面渲染的基础，以及性能提高的保障，同时也是 React 源码中最神秘、最不可思议的部分，本文将剖析 React diff 的不可思议之处。
- [Performance Calendar:React’s diff algorithm](http://calendar.perfplanet.com/2013/diff/)
- [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379?refer=purerender)
- [React 源码剖析系列 － 解密 setState](https://zhuanlan.zhihu.com/p/20328570?refer=purerender)
- [深入浅出React（四）：虚拟DOM Diff算法解析](http://www.infoq.com/cn/articles/react-dom-diff)
- [ReactJS | Learning Virtual DOM and React Diff Algorithm](http://www.oyecode.com/2015/09/reactjs-learning-virtual-dom-and-react.html)



## Stack Reconciler

- [Dive into setState() method in React](https://gist.github.com/ajhsu/e259392f06aa8e3bf5c9)
- [Dive into React codebase: Handling state changes](http://reactkungfu.com/2016/03/dive-into-react-codebase-handling-state-changes/)
- [2017-react-reconciler-demo【Project】](https://github.com/lukebelliveau/react-reconciler-demo): A simple implementation of React's stack reconciler. This is much different from the real implementation, but demonstrates the concepts.
- [ON THE ASYNC NATURE OF `SETSTATE` IN REACT](http://thereignn.ghost.io/on-the-async-nature-of-setstate-in-react/)


## Fiber
- [2017-React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture): A description of React's new core algorithm, React Fiber.
- [2017-React Fiber 是什么](https://zhuanlan.zhihu.com/p/26027085)：React Fiber 这个大改变 Facebook 已经折腾两年多了，刚刚结束不久的 React Conf 2017 会议上，Facebook 终于确认，React Fiber 会搭上 React 下一个大版本v16的顺风车发布。
- [2017-React 新引擎 React Fiber 究竟要解决什么问题？](https://parg.co/btw)：Facebook 正在以流行的 JavaScript 框架 React 为基础开发一个全新的架构。这个名为 React Fiber 的全新设计改变了检测变更的方法和时机，借此可改进浏览器端和其他渲染设备的响应速度。 这一 全新架构 最初已于 2016 年 7 月公开发布，其中蕴含着过去多年来 Facebook 不断改进的工作成果。该架构可向后兼容，彻底重写了 React 的协调（Reconciliation）算法。该过程可用于确定出现变更的具体时间，并将变更传递给渲染器。( https://parg.co/btw )
- [2017-React 新引擎 React Fiber 究竟要解决什么问题？](https://parg.co/btw)：Facebook 正在以流行的 JavaScript 框架 React 为基础开发一个全新的架构。这个名为 React Fiber 的全新设计改变了检测变更的方法和时机，借此可改进浏览器端和其他渲染设备的响应速度。 这一 全新架构 最初已于 2016 年 7 月公开发布，其中蕴含着过去多年来 Facebook 不断改进的工作成果。该架构可向后兼容，彻底重写了 React 的协调（Reconciliation）算法。该过程可用于确定出现变更的具体时间，并将变更传递给渲染器。
- [2017-React Conf: A Cartoon Intro to Fiber](https://www.youtube.com/watch?v=ZCuYPiUIONs)

# Pattern Library: 模式库
- [Material-UI](http://www.material-ui.com/#/): A Set of React Components that Implement Google's Material Design.
- [Ant Design](https://ant.design/): An enterprise-class UI design language and React-based implementation.

## List

- [React Canvas](https://github.com/Flipboard/react-canvas)
- [React JSX: Iterating through a hash and returning JSX elements for each key](http://stackoverflow.com/questions/29534224/react-jsx-iterating-through-a-hash-and-returning-jsx-elements-for-each-key)
- [Understanding unique keys for array children in React.js](http://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js)
- [Rendering List of Elements in React With JSX](http://jasonjl.me/blog/2015/04/18/rendering-list-of-elements-in-react-with-jsx/)

## Table

- Table：[react-datasheet](https://nadbm.github.io/react-datasheet/)
