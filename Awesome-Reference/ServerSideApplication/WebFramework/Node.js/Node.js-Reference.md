
# Overview
- [2017-Before you bury yourself in packages, learn the Node.js runtime itself](https://parg.co/b4I)

- [2017-Node.js 8: util.promisify()](http://2ality.com/2017/05/util-promisify.html): Node.js 8 has a new utility function: util.promisify(). It converts a callback-based function to a Promise-based one.
- [2017-Learn Node.js in 8 hours [For Beginners]](https://parg.co/bNy): Node.js is also open source, completely free, and used by thousands of developers around the world.
- [2017-The Definitive Guide to Object Streams in Node.js](https://parg.co/bfV): Node.js Streams come with a great power: You have an asynchronous way of dealing with input and output, and you can transform data in independent steps. In this tutorial, I'll walk you through the theory, and teach you how to use object stream transformables, just like Gulp does.
- [The Basics of Package.json in Node.js and npm](http://6me.us/zFEia8)
- [Why the Hell Would You Use Node.js](https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e#.71g206imf): This article comes from [Tomislav Capan](https://twitter.com/tomislavcapan), technical consultant and Node.js enthusiast. Tomislav originally published this in August 2013 in the [Toptal](https://www.toptal.com/developers)blog — you can find the original post [here](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js); the blog has been slightly updated. The following subject matter is based on the opinion and experiences of this author.
- [What is Node.js? An explanation too late](https://lethalbrains.com/what-is-node-js-an-explanation-too-late-477c10778dea#.5daatualo)
- [The Art of Node: An introduction to Node.js](https://github.com/maxogden/art-of-node#modules)
- [2017-Having your Node.js Cake and Eating It Too](https://parg.co/bTW)

## NPM
- [NodeJS包管理工具——npm入门](http://aerotiger.info/archives/beginners-guide-node-package-manager.html?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [What's the difference between dependencies, devDependencies and peerDependencies in npm package.json file?](http://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies/22004559#22004559)
- [The Definitive Guide for Monitoring Node.js Applications](https://blog.risingstack.com/monitoring-nodejs-applications-nodejs-at-scale/)


# Resource

## Book & Course
- [2017-深入理解Node.js：核心思想与源码分析【Book】](http://6me.us/epg)
- [2017-RESTful API design with Node.js](https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09)
- [2017-Practical Node.js【Book】](https://github.com/azat-co/practicalnode): Practical Node is a work of 30+ in-person courses, workshops and classes delivered by me in-person at various companies.
- [2017-Node.js 实践教程【Book】](https://github.com/ElemeFE/node-practice)：本教程的初衷是做一个 Node.js 进阶的视频教程, 在撰写 node-interview 之后, 觉得按照概念依次讲下来不好组织, 于是决定按照以一些有名的模块/功能为基础, 在实现的过程中讲解各项知识点。


# Core Modules: 核心模块
- [2017-Mastering the Node.js Core Modules - The File System & fs Module](https://blog.risingstack.com/mastering-the-nodejs-core-modules-file-system-fs-module/): In this article, we'll take a look at the File System core module, File Streams and some fs module alternatives.

## Event Loop
- [2016-Understanding the Node.js Event Loop](https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/): This article helps you to understand how the Node.js event loop works, and how you can leverage it to build fast applications. We’ll also discuss the most common problems you might encounter, and the solutions for them.
- [2016-The Node.js Event Loop, Timers, and process.nextTick()](https://parg.co/b1l): The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

## Modularity: 模块机制
- [2011-深入Node.js的模块机制](http://www.infoq.com/cn/articles/nodejs-module-mechanism)
- [2017-Requiring modules in Node.js: Everything you need to know](https://parg.co/bQl)

## Stream: 流
- [2017-Node.js Streams: Everything you need to know](https://parg.co/bJN): Node.js streams have a reputation for being hard to work with, and even harder to understand. Well I’ve got good news for you — that’s no longer the case. Over the years, developers created lots of packages out there with the sole purpose of making working with streams easier. But in this article, I’m going to focus on the native Node.js stream API.
- [2017-深入理解 Node Stream 内部机制](http://www.barretlee.com/blog/2017/06/06/dive-to-nodejs-at-stream-module/)：相信很多人对 Node 的 Stream 已经不陌生了，不论是请求流、响应流、文件流还是 socket 流，这些流的底层都是使用 stream 模块封装的，甚至我们平时用的最多的 console.log 打印日志也使用了它，不信你打开 Node runtime 的源码。

## Cluster: 集群方案
- [浅谈 Node.js 和 PHP 进程管理](http://taobaofed.org/blog/2015/11/24/nodejs-php-process-manager/)
- [2015-当我们谈论 cluster 时我们在谈论什么](http://taobaofed.org/blog/2015/11/03/nodejs-cluster/)
- [2017-Hello World: Concurrency In Node.js Using The Cluster Module](http://6me.us/AKz9)
- [2017-Node.js Child Processes: Everything you need to know](https://parg.co/bLq): Using multiple processes is the best way to scale a Node application. Node.js is designed for building distributed applications with many nodes. This is why it’s named Node. Scalability is baked into the platform and it’s not something you start thinking about later in the lifetime of an application.

# EPractices: 工程实践

## Debug: 调试
- [2017-How to Debug Node.js with the Best Tools Available](https://blog.risingstack.com/how-to-debug-nodej-js-with-the-best-tools-available/): We will dive into two different aspects of debugging Node.js applications - the first one will be logging, so you can keep an eye on production systems, and have events from there. After logging, we will take a look at how you can debug your applications in development environments.
- [2017-Debugging remote Node.js application running in a Docker container](https://parg.co/byP)

## Test: 测试

## Performance: 性能优化

- [node-micro-optimizations-javascript](https://www.infoq.com/articles/node-micro-optimizations-javascript) ：中文译本为[多个提高Node.js应用吞吐量的小优化技巧介绍](https://zhuanlan.zhihu.com/p/25276558)。
- []()


## Production: 发布到生产环境
- [2017-Writing Secure Node.js Code - Danny Grander](https://parg.co/bVL)：In his presentation, Danny Grander walked us through hacking a vulnerable Node.js application, as well as looking in-depth into three different vulnerabilities in popular npm packages.
- [「服务端」node服务的监控预警系统架构](https://github.com/ShowJoy-com/showjoy-blog/issues/4)
- [2017-Node.js Performance Monitoring with Prometheus](https://parg.co/bed): This article helps you to understand what to monitor if you have a Node.js application in production, and how to use Prometheus - an open-source solution, which provides powerful data compressions and fast data querying for time series data - for Node.js monitoring.
- [2017-Scaling Node.js Applications](https://parg.co/b1y): Everything you need to know about Node.js built-in tools for scalability.
- [2017-Checklist: Node.JS production best practices](http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/)


# Command Line
- 命令行辅助参数解析：[yargs【Project】](https://github.com/yargs/yargs)、[Inquirer.js【Project】](https://github.com/SBoudrias/Inquirer.js)
- [pkg【Project】](https://github.com/zeit/pkg): Package your Node.js project into an executable.
- [2017-Creating a project generator with Node](https://parg.co/byo): In this post, I’ll walk you through how to create a simple project generator built with NodeJS that can be installed globally on your computer and used to create a starter project wherever you want, whenever you want.


