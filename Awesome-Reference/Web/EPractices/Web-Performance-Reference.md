
# Web 性能优化实践资料索引

- [Speed Matters: Designing for Mobile Performance](https://parg.co/bDR)
- [2017-Production Web Apps Performance Study Q4/16 - Q1/17](https://github.com/GoogleChrome/discovery/issues/1)
- [小胡子哥的性能专栏](https://github.com/barretlee/performance-column/issues)
- [2016-Front-End Performance Checklist 2017 (PDF, Apple Pages)](http://6me.us/d1xGe): we created an overview of all the things we have to keep in mind when improving performance. 
- [2017-Frontend Performance Check-list For Production](https://parg.co/bLP): In this article I will share with you my chick-list that I use to optimize my web pages after development. So feel free to leave a comment if you think I miss something.
- [2017-The State of the Web](https://medium.com/@fox/talk-the-state-of-the-web-3e12f8e413b3): A guide to impactful performance improvements.


# Benchmark: 性能评测
- [Leveraging the Performance Metrics that Most Affect User Experience](https://parg.co/b96): use first paint and first contentful paint

## Code Coverage: 代码覆盖率

- [Using the Chrome devtools new code coverage feature](https://blog.logrocket.com/using-the-chrome-devtools-new-code-coverage-feature-ca96c3dddcaf): This is an exciting feature that is useful both when working with JavaScript and CSS, so I thought I’d do a quick demo and explore how it can be helpful.

# Request: 请求优化

- [Preload, Prefetch And Priorities in Chrome](https://parg.co/bhM): Today we’ll dive into insights from Chrome’s networking stack to provide clarity on how web loading primitives (like <link rel=“preload”> & <link rel=“prefetch”>) work behind the scenes so you can be more effective with them.
- [2017-多“维”优化——前端高并发策略的更深层思考](https://parg.co/bIv)：一项指标的变好，总少不了相应优化策略的实施。优化并不是简单的一蹴而就，而是个不断迭代与推翻的过程。更深层的优化方案，往往是在某种思维策略之下，对问题场景和基本策略优缺的深刻理解后做出的当下最优的权衡结果。本文笔者从前端高并发优化这一具体点出发，逐步向大家阐述笔者在优化的“术”之上思维层面的一些思考。希望能给各位带来共鸣和感悟。


## Lazy Loading: 懒加载

- [2017-Lozad.js【Project】](https://github.com/ApoorvSaxena/lozad.js): Highly performant, light ~0.5kb and configurable lazy loader in pure JS with no dependencies for images, iframes and more, using IntersectionObserver API

## Image Processing: 图片处理

- [2017-An Introduction to Progressive Image Rendering](https://parg.co/bLp): In this article, we’ll look at how you can save your users bandwidth and time by loading and rendering well-optimized images lazily and progressively.
- [2017-Reducing Image File Size at Etsy](https://parg.co/bvn): Serving images is a critical part of Etsy’s infrastructure. 
- [Save time by transforming images in the command line](http://6me.us/WYOP1)
- [Jpegio【Project】](https://www.jpeg.io/): Convert any major image format into a highly optimized JPEG.
- [reducing-jpg-file-size](https://medium.com/@duhroach/reducing-jpg-file-size-e5b27df3257c#.jdegycys9)
- [reducing-png-file-size](https://medium.com/@duhroach/reducing-png-file-size-8473480d0476#.pxfmpayr1)
[使用 webP 减少图片的大小](http://www.tuicool.com/articles/euAJv2Z)
[探究WebP一些事儿](https://aotu.io/notes/2016/06/23/explore-something-of-webp/)



## HTTP/2 Push: HTTP/2 推送

# Bundle Optimization: 包体优化

## Remove Unused CSS: 移除非必需的 CSS 代码

- [2017-Remove Unused CSS Rules](https://parg.co/bDk): Removing unused styles can help make the situation more manageable.
- [UnCSS](https://github.com/giakki/uncss): UnCSS is a tool that removes unused CSS from your stylesheets. It works across multiple files and supports Javascript-injected CSS.

## Code Spliting: 代码分割

# Rendering Optimization: 渲染优化
