[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 
 
# Core Modules: 核心模块

* [2017-Mastering the Node.js Core Modules - The File System & fs Module](https://blog.risingstack.com/mastering-the-nodejs-core-modules-file-system-fs-module/): In this article, we'll take a look at the File System core module, File Streams and some fs module alternatives.

## Event Loop

* [2016-Understanding the Node.js Event Loop](https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/): This article helps you to understand how the Node.js event loop works, and how you can leverage it to build fast applications. We’ll also discuss the most common problems you might encounter, and the solutions for them.

* [2016-The Node.js Event Loop, Timers, and process.nextTick()](https://parg.co/b1l): The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

## Modularity: 模块机制

* [2011- 深入 Node.js 的模块机制](http://www.infoq.com/cn/articles/nodejs-module-mechanism)

- [2017-Requiring modules in Node.js: Everything you need to know](https://parg.co/bQl)

## Stream: 流

* [2017-Node.js Streams: Everything you need to know](https://parg.co/bJN): Node.js streams have a reputation for being hard to work with, and even harder to understand. Well I’ve got good news for you — that’s no longer the case. Over the years, developers created lots of packages out there with the sole purpose of making working with streams easier. But in this article, I’m going to focus on the native Node.js stream API.

- [2017- 深入理解 Node Stream 内部机制](http://www.barretlee.com/blog/2017/06/06/dive-to-nodejs-at-stream-module/)：相信很多人对 Node 的 Stream 已经不陌生了，不论是请求流、响应流、文件流还是 socket 流，这些流的底层都是使用 stream 模块封装的，甚至我们平时用的最多的 console.log 打印日志也使用了它，不信你打开 Node runtime 的源码。

* [Node.js Streams 基础](http://scarletsky.github.io/2016/07/01/basics-node-js-streams/)

* [A Brief History of Node Streams #Series#](http://6me.us/cC9Jcm)

## Cluster: 集群方案

* [浅谈 Node.js 和 PHP 进程管理](http://taobaofed.org/blog/2015/11/24/nodejs-php-process-manager/)

* [2015- 当我们谈论 cluster 时我们在谈论什么](http://taobaofed.org/blog/2015/11/03/nodejs-cluster/)

* [2017-Hello World: Concurrency In Node.js Using The Cluster Module](http://6me.us/AKz9)

* [2017-Node.js Child Processes: Everything you need to know](https://parg.co/bLq): Using multiple processes is the best way to scale a Node application. Node.js is designed for building distributed applications with many nodes. This is why it’s named Node. Scalability is baked into the platform and it’s not something you start thinking about later in the lifetime of an application.

# Command Line

* 命令行辅助参数解析：[yargs #Project# ](https://github.com/yargs/yargs)、[Inquirer.js #Project# ](https://github.com/SBoudrias/Inquirer.js)

* [pkg #Project# ](https://github.com/zeit/pkg): Package your Node.js project into an executable.

* [2017-Creating a project generator with Node](https://parg.co/byo): In this post, I’ll walk you through how to create a simple project generator built with NodeJS that can be installed globally on your computer and used to create a starter project wherever you want, whenever you want.

- [ora #Project#](https://github.com/sindresorhus/ora): Elegant terminal spinner

# Storage

## MySQL

## ORM

## Redis

* [node_redis #Project#](https://github.com/NodeRedis/node_redis): This is a complete and feature rich Redis client for node.js. It supports all Redis commands and focuses on high performance.

* [ioredis #Project#](https://github.com/luin/ioredis): A robust, performance-focused and full-featured Redis client for Node and io.js.

* [Radredis #Project#](https://github.com/bustle/radredis): Radredis is a node data adapter for redis. It is not a full ORM but a simple opinionated interface for storing application data in redis.
