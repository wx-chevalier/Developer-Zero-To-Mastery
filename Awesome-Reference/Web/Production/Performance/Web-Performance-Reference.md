[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 
 


# Web 性能优化实践资料索引

前端优化的根本目的是为了有一个更好地用户体验的同时尽可能减少后端负载压力。即保证更少的加载时间、更快的首屏渲染、更流畅的用户交互。鉴于本文篇幅较长，因此拆分为了[第一部分](.Web-Performance-Reference.md)与[第二部分](./Web-Performance-Reference.2.md)。

# Overview: 性能优化概述

* [2017-Production Web Apps Performance Study Q4/16 - Q1/17](https://github.com/GoogleChrome/discovery/issues/1)

* [小胡子哥的性能专栏](https://github.com/barretlee√/performance-column/issues)

* [2016-Front-End Performance Checklist 2017 (PDF, Apple Pages)](http://6me.us/d1xGe): we created an overview of all the things we have to keep in mind when improving performance.

* [2017-Frontend Performance Check-list For Production](https://parg.co/bLP): In this article I will share with you my chick-list that I use to optimize my web pages after development. So feel free to leave a comment if you think I miss something.

- [2017-The State of the Web](https://medium.com/@fox/talk-the-state-of-the-web-3e12f8e413b3): A guide to impactful performance improvements.

* [Web 优化训练营 , 网页提速 50 倍](http://www.tuicool.com/articles/Ub6bMrR): 通过一个完整的实例 , 一步步的优化加载 , 渲染等各方面的体验

* [400% 飞跃：Web 页面加载速度优化实战 ](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484307&idx=1&sn=e795ef72f62cec564d263b495efc7a54&chksm=97236151a054e847afa5b35388f7bfdca6b2707e92c2a97b36e86aed7cb8acd50e9307912ee8&mpshare=1&scene=1&srcid=10049m9VtGjECpa1kK5qVIlU#rd)

# Benchmark: 性能评测与监控

* [Lighthouse #Project# ](https://github.com/GoogleChrome/lighthouse): Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

* [stats.js #Project# ](https://github.com/mrdoob/stats.js): JavaScript Performance Monitor.

* [SiteSpeed](https://www.sitespeed.io/): itespeed.io is a set of Open Source tools that helps make your web pages faster.

- [stacks-cli #Project#](https://github.com/WeiChiaChang/stacks-cli): Check website stack from the terminal.

- [WebPagetest #Project#](https://github.com/WPO-Foundation/webpagetest)

## Page Metric: 页面评测

* [Leveraging the Performance Metrics that Most Affect User Experience](https://parg.co/b96): But as you try to answer the question: how fast is my app?, you'll realize that fast is a vague term. What exactly do we mean when we say fast? In what context? And fast for whom?

* [2014-FEX-7 天打造前端性能监控系统](http://6me.us/3EO4ch)

* [2015- 使用 HMTL5 API 监控前端性能](http://www.infoq.com/cn/articles/html5-performance-api-monitoring): 用户计时 API 可以在网页应用中测量两个预定义标记之间的性能。开发者仅仅需要分别定义测量的开始和结束标记。

* [前端性能 —— 监控起步](http://www.07net01.com/2016/09/1653517.html)

## API Metric: 接口性能评测

* [Locust](https://locust.io/): Define user behaviour with Python code, and swarm your system with millions of simultaneous users.

* [wrk](https://github.com/wg/wrk): wrk is a modern HTTP benchmarking tool capable of generating significant load when run on a single multi-core CPU.

* [Apache JMeter](https://jmeter.apache.org/): The Apache JMeter™ application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance.

# 资源请求与缓存

* [A Comprehensive Guide to Font Loading Strategies](https://www.zachleat.com/web/comprehensive-webfonts/#abstain)

* [前端渲染加速之 - Big Pipe](http://tech.dianwoda.com/2016/10/26/big-pipe-web-page-rendering-acceleration/)

* [Preload, Prefetch And Priorities in Chrome](https://parg.co/bhM): Today we’ll dive into insights from Chrome’s networking stack to provide clarity on how web loading primitives (like <link rel=“preload”> & <link rel=“prefetch”>) work behind the scenes so you can be more effective with them.

* [2017- 多 “ 维 ” 优化 —— 前端高并发策略的更深层思考](https://parg.co/bIv)：一项指标的变好，总少不了相应优化策略的实施。优化并不是简单的一蹴而就，而是个不断迭代与推翻的过程。更深层的优化方案，往往是在某种思维策略之下，对问题场景和基本策略优缺的深刻理解后做出的当下最优的权衡结果。本文笔者从前端高并发优化这一具体点出发，逐步向大家阐述笔者在优化的 “ 术 ” 之上思维层面的一些思考。希望能给各位带来共鸣和感悟。

* [The Best Request Is No Request, Revisited](https://alistapart.com/article/the-best-request-is-no-request-revisited)

## Compression: 压缩

## HTTP/2 Push: HTTP/2 推送

# Critical Path: 关键渲染路径

## Code Coverage: 代码覆盖率

* [Using the Chrome devtools new code coverage feature](https://blog.logrocket.com/using-the-chrome-devtools-new-code-coverage-feature-ca96c3dddcaf): This is an exciting feature that is useful both when working with JavaScript and CSS, so I thought I’d do a quick demo and explore how it can be helpful.

## Critical CSS: 关键 CSS

* [critical](https://github.com/addyosmani/critical):Extract & Inline Critical-path CSS in HTML pages

* [critical-path-css-tools](https://github.com/addyosmani/critical-path-css-tools):Tools to help prioritize above-the-fold CSS

* [2017-Remove Unused CSS Rules](https://parg.co/bDk): Removing unused styles can help make the situation more manageable.

* [UnCSS #Project# ](https://github.com/giakki/uncss): UnCSS is a tool that removes unused CSS from your stylesheets. It works across multiple files and supports Javascript-injected CSS.

- [2017-Critical CSS and Webpack: Automatically Minimize Render-Blocking CSS](https://parg.co/bwo)

## Lazy Loading: 懒加载

* [2017-Lozad.js #Project# ](https://github.com/ApoorvSaxena/lozad.js): Highly performant, light ~0.5kb and configurable lazy loader in pure JS with no dependencies for images, iframes and more, using IntersectionObserver API

## Code Spliting: 代码分割

* [Bundle Buddy #Project#](https://github.com/samccone/bundle-buddy): Bundle Buddy is a tool to help you find source code duplication across your javascript chunks/splits. This enables you to fine tune code splitting parameters to reduce bundle invalidation rates as well as improve repeat page load performance \o/.
