[![章节头](https://parg.co/UGo)](https://parg.co/b4z) 
 - [Web 性能优化实践资料索引](#web-%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E5%AE%9E%E8%B7%B5%E8%B5%84%E6%96%99%E7%B4%A2%E5%BC%95)
- [性能优化概述](#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%A6%82%E8%BF%B0)
- [Benchmark: 性能评测与监控](#benchmark-%E6%80%A7%E8%83%BD%E8%AF%84%E6%B5%8B%E4%B8%8E%E7%9B%91%E6%8E%A7)
  * [Page Metric: 页面性能评测](#page-metric-%E9%A1%B5%E9%9D%A2%E6%80%A7%E8%83%BD%E8%AF%84%E6%B5%8B)
  * [API Metric: 接口性能评测](#api-metric-%E6%8E%A5%E5%8F%A3%E6%80%A7%E8%83%BD%E8%AF%84%E6%B5%8B)
  * [Code Coverage: 代码覆盖率](#code-coverage-%E4%BB%A3%E7%A0%81%E8%A6%86%E7%9B%96%E7%8E%87)
- [Request: 请求优化](#request-%E8%AF%B7%E6%B1%82%E4%BC%98%E5%8C%96)
  * [Lazy Loading: 懒加载](#lazy-loading-%E6%87%92%E5%8A%A0%E8%BD%BD)
  * [Image Processing: 图片处理](#image-processing-%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86)
    + [WebP](#webp)
  * [HTTP/2 Push: HTTP/2 推送](#http2-push-http2-%E6%8E%A8%E9%80%81)
- [Bundle Optimization: 包体优化](#bundle-optimization-%E5%8C%85%E4%BD%93%E4%BC%98%E5%8C%96)
  * [Remove Unused CSS: 移除非必需的 CSS 代码](#remove-unused-css-%E7%A7%BB%E9%99%A4%E9%9D%9E%E5%BF%85%E9%9C%80%E7%9A%84-css-%E4%BB%A3%E7%A0%81)
  * [Code Spliting: 代码分割](#code-spliting-%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2)
- [Rendering Optimization: 渲染优化](#rendering-optimization-%E6%B8%B2%E6%9F%93%E4%BC%98%E5%8C%96)
  * [CSS](#css)
  * [JavaScript](#javascript)
- [Mobile Optimization: 移动端优化](#mobile-optimization-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%BC%98%E5%8C%96) 


# Web 性能优化实践资料索引

前端优化的根本目的是为了有一个更好地用户体验的同时尽可能减少后端负载压力。即保证更少的加载时间、更快的首屏渲染、更流畅的用户交互。


# 性能优化概述


- [Speed Matters: Designing for Mobile Performance](https://parg.co/bDR)
- [2017-Production Web Apps Performance Study Q4/16 - Q1/17](https://github.com/GoogleChrome/discovery/issues/1)
- [小胡子哥的性能专栏](https://github.com/barretlee/performance-column/issues)
- [2016-Front-End Performance Checklist 2017 (PDF, Apple Pages)](http://6me.us/d1xGe): we created an overview of all the things we have to keep in mind when improving performance. 
- [2017-Frontend Performance Check-list For Production](https://parg.co/bLP): In this article I will share with you my chick-list that I use to optimize my web pages after development. So feel free to leave a comment if you think I miss something.

- [2017-The State of the Web](https://medium.com/@fox/talk-the-state-of-the-web-3e12f8e413b3): A guide to impactful performance improvements.
- [Web优化训练营, 网页提速50倍](http://www.tuicool.com/articles/Ub6bMrR):通过一个完整的实例, 一步步的优化加载, 渲染等各方面的体验
- [400%飞跃：Web 页面加载速度优化实战 ](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484307&idx=1&sn=e795ef72f62cec564d263b495efc7a54&chksm=97236151a054e847afa5b35388f7bfdca6b2707e92c2a97b36e86aed7cb8acd50e9307912ee8&mpshare=1&scene=1&srcid=10049m9VtGjECpa1kK5qVIlU#rd)
- [Front End Optimization – 9 Tips to Improve Web Performance](https://www.keycdn.com/blog/front-end-optimization/?utm_source=tuicool&utm_medium=referral)
- [Optimising the front end for the browser](https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572?source=reading_list---------1-1---------)
- [浏览器工作原理](https://segmentfault.com/a/1190000004934730)
- [从输入 URL 到页面加载完成的过程中都发生了什么事情？](http://fex.baidu.com/blog/2014/05/what-happen/)
- [CSDN-开发者应该知道的有关于网页渲染的事](http://www.csdn.net/article/2015-06-12/2824946)

- [JS一定要放在Body的最底部么？聊聊浏览器的渲染机制](http://delai.me/code/js-and-performance/?utm_source=tuicool&utm_medium=referral)
- [高性能JavaScript重排与重绘](http://www.cnblogs.com/zichi/p/4720000.html?utm_source=tuicool)
- [how-browsers-work](http://taligarsiel.com/Projects/howbrowserswork1.htm)
- [the-rendering-process-of-a-web-page](https://medium.com/@gneutzling/the-rendering-process-of-a-web-page-78e05a6749dc#.zdp2moezo)
- [渲染性能](https://github.com/sundway/blog/issues/2?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [应该知道的前端性能二三事：Reflow 和 Repaint](http://www.tuicool.com/articles/UvYBfy)
- [前端性能——监控起步](http://www.07net01.com/2016/09/1653517.html)
- [Web App性能优化之亮剑](http://insights.thoughtworkers.org/web-apps-performance-optimization/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [web-performance-secrets-from-the-bbc](https://medium.com/net-magazine/web-performance-secrets-from-the-bbc-d4b01f869752#.hwhq6jcbn)


# Benchmark: 性能评测与监控
- [Leveraging the Performance Metrics that Most Affect User Experience](https://parg.co/b96): But as you try to answer the question: how fast is my app?, you'll realize that fast is a vague term. What exactly do we mean when we say fast? In what context? And fast for whom?
- [2014-FEX-7 天打造前端性能监控系统](http://6me.us/3EO4ch) 
## Page Metric: 页面性能评测

- [Lighthouse【Project】](https://github.com/GoogleChrome/lighthouse): Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.
- [stats.js【Project】](https://github.com/mrdoob/stats.js): JavaScript Performance Monitor.
- [SiteSpeed](https://www.sitespeed.io/): itespeed.io is a set of Open Source tools that helps make your web pages faster.
## API Metric: 接口性能评测

- [Locust](https://locust.io/): Define user behaviour with Python code, and swarm your system with millions of simultaneous users.
- [wrk](https://github.com/wg/wrk): wrk is a modern HTTP benchmarking tool capable of generating significant load when run on a single multi-core CPU.
- [Apache JMeter](https://jmeter.apache.org/): The Apache JMeter™ application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance.
## Code Coverage: 代码覆盖率

- [Using the Chrome devtools new code coverage feature](https://blog.logrocket.com/using-the-chrome-devtools-new-code-coverage-feature-ca96c3dddcaf): This is an exciting feature that is useful both when working with JavaScript and CSS, so I thought I’d do a quick demo and explore how it can be helpful.

# Request: 请求优化

- [Preload, Prefetch And Priorities in Chrome](https://parg.co/bhM): Today we’ll dive into insights from Chrome’s networking stack to provide clarity on how web loading primitives (like <link rel=“preload”> & <link rel=“prefetch”>) work behind the scenes so you can be more effective with them.

- [2017-多“维”优化——前端高并发策略的更深层思考](https://parg.co/bIv)：一项指标的变好，总少不了相应优化策略的实施。优化并不是简单的一蹴而就，而是个不断迭代与推翻的过程。更深层的优化方案，往往是在某种思维策略之下，对问题场景和基本策略优缺的深刻理解后做出的当下最优的权衡结果。本文笔者从前端高并发优化这一具体点出发，逐步向大家阐述笔者在优化的“术”之上思维层面的一些思考。希望能给各位带来共鸣和感悟。

## Lazy Loading: 懒加载

- [2017-Lozad.js【Project】](https://github.com/ApoorvSaxena/lozad.js): Highly performant, light ~0.5kb and configurable lazy loader in pure JS with no dependencies for images, iframes and more, using IntersectionObserver API
## Image Processing: 图片处理

- [2017-Essential Image Optimization](https://images.guide/): In 2017, image optimization should be automated. It's easy to forget, best practices change, and content that doesn't go through a build pipeline can easily slip.
- [2017-An Introduction to Progressive Image Rendering](https://parg.co/bLp): In this article, we’ll look at how you can save your users bandwidth and time by loading and rendering well-optimized images lazily and progressively.
- [2017-Reducing Image File Size at Etsy](https://parg.co/bvn): Serving images is a critical part of Etsy’s infrastructure. 

- [Save time by transforming images in the command line](http://6me.us/WYOP1)
- [Jpegio【Project】](https://www.jpeg.io/): Convert any major image format into a highly optimized JPEG.
- [reducing-jpg-file-size](https://medium.com/@duhroach/reducing-jpg-file-size-e5b27df3257c#.jdegycys9)
- [reducing-png-file-size](https://medium.com/@duhroach/reducing-png-file-size-8473480d0476#.pxfmpayr1)
### WebP

- [使用 webP 减少图片的大小](http://www.tuicool.com/articles/euAJv2Z)
- [探究WebP一些事儿](https://aotu.io/notes/2016/06/23/explore-something-of-webp/)


## HTTP/2 Push: HTTP/2 推送

# Bundle Optimization: 包体优化
## Remove Unused CSS: 移除非必需的 CSS 代码

- [2017-Remove Unused CSS Rules](https://parg.co/bDk): Removing unused styles can help make the situation more manageable.
- [UnCSS【Project】](https://github.com/giakki/uncss): UnCSS is a tool that removes unused CSS from your stylesheets. It works across multiple files and supports Javascript-injected CSS.

- [2017-Critical CSS and Webpack: Automatically Minimize Render-Blocking CSS](https://parg.co/bwo) 
## Code Spliting: 代码分割
# Rendering Optimization: 渲染优化
## CSS
- [improving-your-css-with-parker](http://csswizardry.com/2016/06/improving-your-css-with-parker/?utm_source=tuicool&utm_medium=referral)

- [避免大规模、复杂的布局](https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn)


 
## JavaScript
# Mobile Optimization: 移动端优化

- [移动端HTML5页面开发备忘录 ](http://zerosoul.github.io/2016/11/15/h5-memo/?utm_source=tuicool&utm_medium=referral)
- [钉钉的H5性能优化方案](http://mp.weixin.qq.com/s/r-D4S94XOo22PQM_wZlrig?utm_source=tuicool&utm_medium=referral) 
- [解耦---Hybrid H5跨平台性思考 ](http://mp.weixin.qq.com/s?__biz=MzA3NTYzODYzMg==&mid=2653577297&idx=3&sn=96c9ec407e937132595c29b0584cdd5c&scene=4#wechat_redirect)
- [Mobile JavaScript Apps: The Problem with the Mobile Web](http://thefullstack.xyz/category/the-mobile-web/)


