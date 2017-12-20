[![返回目录](https://parg.co/UGo)](https://parg.co/b4z)

# Web 性能优化实践资料索引

前端优化的根本目的是为了有一个更好地用户体验的同时尽可能减少后端负载压力。即保证更少的加载时间、更快的首屏渲染、更流畅的用户交互。鉴于本文篇幅较长，因此拆分为了[第一部分](.Web-Performance-Reference.md)与[第二部分](./Web-Performance-Reference.2.md)。

# Image Optimization: 图片优化

* [2017-Essential Image Optimization](https://images.guide/): In 2017, image optimization should be automated. It's easy to forget, best practices change, and content that doesn't go through a build pipeline can easily slip.

* [2017-An Introduction to Progressive Image Rendering](https://parg.co/bLp): In this article, we’ll look at how you can save your users bandwidth and time by loading and rendering well-optimized images lazily and progressively.

* [2017-Reducing Image File Size at Etsy](https://parg.co/bvn): Serving images is a critical part of Etsy’s infrastructure.

- [Save time by transforming images in the command line](http://6me.us/WYOP1)

* [2017-Network based image loading using the Network Information API in Service Worker](https://parg.co/U5N): Recently, Chromium improved their implementation of navigator.connection by adding three new attributes: effectiveType, downlink and rtt.

* [SuperTinyIcons #Project#](https://github.com/edent/SuperTinyIcons):Under 1KB each! Super Tiny Icons are miniscule SVG versions of your favourite website and app logos

## JPEG

* [Jpegio #Project# ](https://www.jpeg.io/): Convert any major image format into a highly optimized JPEG.

* [reducing-jpg-file-size](https://medium.com/@duhroach/reducing-jpg-file-size-e5b27df3257c#.jdegycys9)

* [reducing-png-file-size](https://medium.com/@duhroach/reducing-png-file-size-8473480d0476#.pxfmpayr1)

## WebP

* [使用 webP 减少图片的大小](http://www.tuicool.com/articles/euAJv2Z)

* [探究 WebP 一些事儿](https://aotu.io/notes/2016/06/23/explore-something-of-webp/)

* [Front End Optimization – 9 Tips to Improve Web Performance](https://www.keycdn.com/blog/front-end-optimization/)

* [Optimising the front end for the browser](https://hackernoon.com/optimising-the-front-end-for-the-browser-f2f51a29c572?source=reading_list---------1-1---------)

* [渲染性能](https://github.com/sundway/blog/issues/2)

* [Web App 性能优化之亮剑](http://insights.thoughtworkers.org/web-apps-performance-optimization/)

* [web-performance-secrets-from-the-bbc](https://medium.com/net-magazine/web-performance-secrets-from-the-bbc-d4b01f869752#.hwhq6jcbn)

* [2017-Developer's Guide to E-Commerce Sites Speed Optimization](https://parg.co/U6q): You need to optimize your e-commerce website for speed at a time when search engines themselves rank faster websites above slower ones. At that same time, audience's attention span is getting shorter by the day.

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

# Layout & Rendering: 界面布局与渲染策略

* [高性能 JavaScript 重排与重绘](http://www.cnblogs.com/zichi/p/4720000.html)

* [improving-your-css-with-parker](http://csswizardry.com/2016/06/improving-your-css-with-parker/)

* [避免大规模、复杂的布局](https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn)

- [一篇文章说清浏览器解析和 CSS（GPU ）动画优化](https://segmentfault.com/a/1190000008015671)

- [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a): All of the below properties or methods, when requested/called in JavaScript, will trigger the browser to synchronously calculate the style and layout*.

# Interaction & Animation: 交互与动画

# Mobile Optimization: 移动端优化

* [移动端 HTML5 页面开发备忘录 ](http://zerosoul.github.io/2016/11/15/h5-memo/)

* [钉钉的 H5 性能优化方案](http://mp.weixin.qq.com/s/r-D4S94XOo22PQM_wZlrig)

* [解耦 ---Hybrid H5 跨平台性思考 ](http://mp.weixin.qq.com/s?__biz=MzA3NTYzODYzMg==&mid=2653577297&idx=3&sn=96c9ec407e937132595c29b0584cdd5c&scene=4#wechat_redirect)

* [Mobile JavaScript Apps: The Problem with the Mobile Web](http://thefullstack.xyz/category/the-mobile-web/)

* [Speed Matters: Designing for Mobile Performance](https://parg.co/bDR)
