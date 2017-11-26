[![返回目录](https://parg.co/UGo)](https://parg.co/b4z)

# Web 性能优化实践资料索引

前端优化的根本目的是为了有一个更好地用户体验的同时尽可能减少后端负载压力。即保证
更少的加载时间、更快的首屏渲染、更流畅的用户交互。

# Overview: 性能优化概述

* [2017-Production Web Apps Performance Study Q4/16 - Q1/17](https://github.com/GoogleChrome/discovery/issues/1)

* [小胡子哥的性能专栏](https://github.com/barretlee√/performance-column/issues)

* [2016-Front-End Performance Checklist 2017 (PDF, Apple Pages)](http://6me.us/d1xGe):
  we created an overview of all the things we have to keep in mind when
  improving performance.

* [2017-Frontend Performance Check-list For Production](https://parg.co/bLP): In
  this article I will share with you my chick-list that I use to optimize my web
  pages after development. So feel free to leave a comment if you think I miss
  something.

- [2017-The State of the Web](https://medium.com/@fox/talk-the-state-of-the-web-3e12f8e413b3):
  A guide to impactful performance improvements.

* [Web 优化训练营 , 网页提速 50 倍](http://www.tuicool.com/articles/Ub6bMrR): 通
  过一个完整的实例 , 一步步的优化加载 , 渲染等各方面的体验

* [400% 飞跃：Web 页面加载速度优化实战 ](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484307&idx=1&sn=e795ef72f62cec564d263b495efc7a54&chksm=97236151a054e847afa5b35388f7bfdca6b2707e92c2a97b36e86aed7cb8acd50e9307912ee8&mpshare=1&scene=1&srcid=10049m9VtGjECpa1kK5qVIlU#rd)

# Benchmark: 性能评测与监控

* [Lighthouse #Project# ](https://github.com/GoogleChrome/lighthouse):
  Lighthouse analyzes web apps and web pages, collecting modern performance
  metrics and insights on developer best practices.

* [stats.js #Project# ](https://github.com/mrdoob/stats.js): JavaScript
  Performance Monitor.

* [SiteSpeed](https://www.sitespeed.io/): itespeed.io is a set of Open Source
  tools that helps make your web pages faster.

## Page Metric: 页面评测

* [Leveraging the Performance Metrics that Most Affect User Experience](https://parg.co/b96):
  But as you try to answer the question: how fast is my app?, you'll realize
  that fast is a vague term. What exactly do we mean when we say fast? In what
  context? And fast for whom?

* [2014-FEX-7 天打造前端性能监控系统](http://6me.us/3EO4ch)

* [2015- 使用 HMTL5 API 监控前端性能](http://www.infoq.com/cn/articles/html5-performance-api-monitoring):
  用户计时 API 可以在网页应用中测量两个预定义标记之间的性能。开发者仅仅需要分别
  定义测量的开始和结束标记。

* [前端性能 —— 监控起步](http://www.07net01.com/2016/09/1653517.html)

## API Metric: 接口性能评测

* [Locust](https://locust.io/): Define user behaviour with Python code, and
  swarm your system with millions of simultaneous users.

* [wrk](https://github.com/wg/wrk): wrk is a modern HTTP benchmarking tool
  capable of generating significant load when run on a single multi-core CPU.

* [Apache JMeter](https://jmeter.apache.org/): The Apache JMeter™ application is
  open source software, a 100% pure Java application designed to load test
  functional behavior and measure performance.

# 资源请求与缓存

* [A Comprehensive Guide to Font Loading Strategies](https://www.zachleat.com/web/comprehensive-webfonts/#abstain)

* [前端渲染加速之 - Big Pipe](http://tech.dianwoda.com/2016/10/26/big-pipe-web-page-rendering-acceleration/)

* [Preload, Prefetch And Priorities in Chrome](https://parg.co/bhM): Today we’ll
  dive into insights from Chrome’s networking stack to provide clarity on how
  web loading primitives (like <link rel=“preload”> & <link rel=“prefetch”>)
  work behind the scenes so you can be more effective with them.

* [2017- 多 “ 维 ” 优化 —— 前端高并发策略的更深层思考](https://parg.co/bIv)：一
  项指标的变好，总少不了相应优化策略的实施。优化并不是简单的一蹴而就，而是个不断
  迭代与推翻的过程。更深层的优化方案，往往是在某种思维策略之下，对问题场景和基本
  策略优缺的深刻理解后做出的当下最优的权衡结果。本文笔者从前端高并发优化这一具体
  点出发，逐步向大家阐述笔者在优化的 “ 术 ” 之上思维层面的一些思考。希望能给各位
  带来共鸣和感悟。

## Compression: 压缩

## HTTP/2 Push: HTTP/2 推送

# Critical Path: 关键渲染路径

## Code Coverage: 代码覆盖率

* [Using the Chrome devtools new code coverage feature](https://blog.logrocket.com/using-the-chrome-devtools-new-code-coverage-feature-ca96c3dddcaf):
  This is an exciting feature that is useful both when working with JavaScript
  and CSS, so I thought I’d do a quick demo and explore how it can be helpful.

## Critical CSS: 关键 CSS

* [critical](https://github.com/addyosmani/critical):Extract & Inline
  Critical-path CSS in HTML pages

* [critical-path-css-tools](https://github.com/addyosmani/critical-path-css-tools):Tools
  to help prioritize above-the-fold CSS

* [2017-Remove Unused CSS Rules](https://parg.co/bDk): Removing unused styles
  can help make the situation more manageable.

* [UnCSS #Project# ](https://github.com/giakki/uncss): UnCSS is a tool that
  removes unused CSS from your stylesheets. It works across multiple files and
  supports Javascript-injected CSS.

- [2017-Critical CSS and Webpack: Automatically Minimize Render-Blocking CSS](https://parg.co/bwo)

## Lazy Loading: 懒加载

* [2017-Lozad.js #Project# ](https://github.com/ApoorvSaxena/lozad.js): Highly
  performant, light ~0.5kb and configurable lazy loader in pure JS with no
  dependencies for images, iframes and more, using IntersectionObserver API

## Code Spliting: 代码分割

# Image Optimization: 图片优化

* [2017-Essential Image Optimization](https://images.guide/): In 2017, image
  optimization should be automated. It's easy to forget, best practices change,
  and content that doesn't go through a build pipeline can easily slip.

* [2017-An Introduction to Progressive Image Rendering](https://parg.co/bLp): In
  this article, we’ll look at how you can save your users bandwidth and time by
  loading and rendering well-optimized images lazily and progressively.

* [2017-Reducing Image File Size at Etsy](https://parg.co/bvn): Serving images
  is a critical part of Etsy’s infrastructure.

- [Save time by transforming images in the command line](http://6me.us/WYOP1)

- [2017-Essential Image Optimization](https://images.guide/): In 2017, image
  optimization should be automated. It's easy to forget, best practices change,
  and content that doesn't go through a build pipeline can easily slip.

- [2017-An Introduction to Progressive Image Rendering](https://parg.co/bLp): In
  this article, we’ll look at how you can save your users bandwidth and time by
  loading and rendering well-optimized images lazily and progressively.

- [2017-Reducing Image File Size at Etsy](https://parg.co/bvn): Serving images
  is a critical part of Etsy’s infrastructure.

- [Save time by transforming images in the command line](http://6me.us/WYOP1)

- [2017-Network based image loading using the Network Information API in Service Worker](https://parg.co/U5N):
  Recently, Chromium improved their implementation of navigator.connection by
  adding three new attributes: effectiveType, downlink and rtt.

## JPEG

* [Jpegio #Project# ](https://www.jpeg.io/): Convert any major image format into
  a highly optimized JPEG.

* [reducing-jpg-file-size](https://medium.com/@duhroach/reducing-jpg-file-size-e5b27df3257c#.jdegycys9)

* [reducing-png-file-size](https://medium.com/@duhroach/reducing-png-file-size-8473480d0476#.pxfmpayr1)

- [Jpegio #Project# ](https://www.jpeg.io/): Convert any major image format into
  a highly optimized JPEG.

* [reducing-jpg-file-size](https://medium.com/@duhroach/reducing-jpg-file-size-e5b27df3257c#.jdegycys9)

* [reducing-png-file-size](https://medium.com/@duhroach/reducing-png-file-size-8473480d0476#.pxfmpayr1)

## WebP

* [使用 webP 减少图片的大小](http://www.tuicool.com/articles/euAJv2Z)

* [探究 WebP 一些事儿](https://aotu.io/notes/2016/06/23/explore-something-of-webp/)

* [使用 webP 减少图片的大小](http://www.tuicool.com/articles/euAJv2Z)

* [探究 WebP 一些事儿](https://aotu.io/notes/2016/06/23/explore-something-of-webp/)

* [Front End Optimization – 9 Tips to Improve Web Performance](https://www.keycdn.com/blog/front-end-optimization/)

* [Optimising the front end for the browser](https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572?source=reading_list---------1-1---------)

* [渲染性能](https://github.com/sundway/blog/issues/2)

* [Web App 性能优化之亮剑](http://insights.thoughtworkers.org/web-apps-performance-optimization/)

* [web-performance-secrets-from-the-bbc](https://medium.com/net-magazine/web-performance-secrets-from-the-bbc-d4b01f869752#.hwhq6jcbn)

* [2017-Developer's Guide to E-Commerce Sites Speed Optimization](https://parg.co/U6q):
  You need to optimize your e-commerce website for speed at a time when search
  engines themselves rank faster websites above slower ones. At that same time,
  audience's attention span is getting shorter by the day.

# Scripting: 脚本解析与执行

* [2017-The Cost Of JavaScript](https://parg.co/UEm): In this post, I’ll cover
  why a little discipline can help if you’d like your site to load & be
  interactive quickly on mobile devices.

* [Planning for Performance](https://www.youtube.com/watch?v=RWLzUnESylc)
* [Solving the Web Performance Crisis by Nolan Lawson](https://twitter.com/MSEdgeDev/status/819985530775404544)
* [JS Parse and Execution Time](https://timkadlec.com/2014/09/js-parse-and-execution-time/)
* [Measuring Javascript Parse and Load](http://carlos.bueno.org/2010/02/measuring-javascript-parse-and-load.html)
* [Unpacking the Black Box: Benchmarking JS Parsing and Execution on Mobile Devices](https://www.safaribooksonline.com/library/view/velocity-conference-new/9781491900406/part78.html)
  ([slides](https://speakerdeck.com/desp/unpacking-the-black-box-benchmarking-js-parsing-and-execution-on-mobile-devices))
* [When everything’s important, nothing is!](https://aerotwist.com/blog/when-everything-is-important-nothing-is/)
* [The truth about traditional JavaScript benchmarks](http://benediktmeurer.de/2016/12/16/the-truth-about-traditional-javascript-benchmarks/)
* [Do Browsers Parse JavaScript On Every Page Load](http://stackoverflow.com/questions/1096907/do-browsers-parse-javascript-on-every-page-load/)

# Layout & Rendering: 界面布局与渲染策略

* [高性能 JavaScript 重排与重绘](http://www.cnblogs.com/zichi/p/4720000.html?utm_source=tuicool)

* [improving-your-css-with-parker](http://csswizardry.com/2016/06/improving-your-css-with-parker/)

* [避免大规模、复杂的布局](https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn)

- [一篇文章说清浏览器解析和 CSS（GPU ）动画优化](https://segmentfault.com/a/1190000008015671)

# Interaction & Animation: 交互与动画

# Mobile Optimization: 移动端优化

* [移动端 HTML5 页面开发备忘录 ](http://zerosoul.github.io/2016/11/15/h5-memo/)

* [钉钉的 H5 性能优化方案](http://mp.weixin.qq.com/s/r-D4S94XOo22PQM_wZlrig)

* [解耦 ---Hybrid H5 跨平台性思考 ](http://mp.weixin.qq.com/s?__biz=MzA3NTYzODYzMg==&mid=2653577297&idx=3&sn=96c9ec407e937132595c29b0584cdd5c&scene=4#wechat_redirect)

* [Mobile JavaScript Apps: The Problem with the Mobile Web](http://thefullstack.xyz/category/the-mobile-web/)

* [Speed Matters: Designing for Mobile Performance](https://parg.co/bDR)
