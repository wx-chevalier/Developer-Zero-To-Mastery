[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 


# Webpack 学习与实践资料索引

* [前端缓存策略与基于 Webpack 的静态资源版本管理](https://zhuanlan.zhihu.com/p/24954527)

* [大公司里怎样开发和部署前端代码](https://github.com/fouber/blog/issues/6)。

## Tutorial: 教程

* [2016-Getting Started with Webpack 2](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.3ksiast1f): At its simplest, webpack is a module bundler for your JavaScript. However, since its release it’s evolved into a manager of all your front-end code.

* [2017-Intro To Webpack](https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d?source=linkShare-fe48c4221a4c-1482154145): Webpack is a very complex tool, and most people do not need to know how every part of it works.

* [2017-How to setup Webpack +2.0 from scratch in 2017 #Series#](https://medium.com/@wesharehoodies/simple-beginner-guide-for-webpack-2-0-from-scratch-part-v-495dba627718)

* [2017-Webpack: A Detailed Introduction](https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/): JavaScript module bundling has been around for a while. RequireJS had its first commits in 2009, then Browserify made its debut, and since then several other bundlers have spawned across the Internet. Among that group, webpack has jumped out as one of the best. If you’re not familiar with it, I hope this article will get you started with this powerful tool.

# Configuration: 基础配置

## Modularity: 模块化

* [2017-Brief introduction to scope hoisting in Webpack](https://parg.co/beE): On its third major release, Webpack introduced a new feature: scope hoisting. Many developers are already exposing data showing great positive impacts on the initial execution time of their bundles.

## Build Performance: 构建性能优化

* [2016-Optimizing Webpack build times and improving caching with DLL bundles](https://robertknight.github.io/posts/webpack-dll-plugins/)

* [Keep webpack Fast: A Field Guide for Better Build Performance](https://parg.co/UkI): This post is a field guide offering up what we learned on our path towards a faster build.

* [HappyPack #Project#](https://github.com/amireh/happypack): HappyPack makes webpack builds faster by allowing you to transform multiple files in parallel.

* [AutoDllPlugin #Project#](https://parg.co/Uka): Webpack's DllPlugin without the boilerplate.

* [HardSourceWebpackPlugin #Project#](https://parg.co/Uk1): HardSourceWebpackPlugin is a plugin for webpack to provide an intermediate caching step for modules.

* [parallel-webpack #Project#](https://parg.co/UkW): Builds multi-config webpack projects in parallel.

# Production: 发布到生产环境

* [2017-Reducing CSS bundle size 70% by cutting the class names and using scope isolation](https://parg.co/b19)

- [2017-webpack for real tasks: bundling front-end and adding compilation #Series#](https://iamakulov.com/notes/all/webpack-for-real-tasks-part-1/): Bundling front-end and adding compilation ,Decreasing front-end size and improving caching,  Speeding up build and improving the development workflow

- [基于 Webpack 搭建前端工程解决方案探索](http://www.infoq.com/cn/articles/frontend-engineering-webpack)

- [基于 Webpack 的前端资源构建方案](http://lifei.github.io/2015/12/20/webpack/#___8)

## Code Split: 代码分割

* [2017-Vendor and code splitting in webpack 2](https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923#.4ma6usgf0)

* [2017-webpack bits: Getting the most out of the CommonsChunkPlugin()](https://parg.co/bQb):

* [2017-How to use Webpack’s new “magic comment” feature with React Universal Component + SSR](https://parg.co/b9A): Webpack 2.4.0, which came out a few weeks ago, launched with a very interesting new feature: “magic comments.” In combination with dynamic imports, “magic comments” greatly simplify code-splitting + server-side rendering.

- [2018-RIP CommonsChunkPlugin](https://parg.co/Ukz): webpack 4 removes the CommonsChunkPlugin in favor of two new options (optimization.splitChunks and optimization.runtimeChunk). Here is how it works.

# OpenSource: 相关的开源工具与扩展

## 监控

* [Webpack Dashboard #Project#](https://github.com/FormidableLabs/webpack-dashboard): A CLI dashboard for webpack dev server. 如果是 Windows 下的开发者可以优先使用 [electron-webpack-dashboard](https://github.com/FormidableLabs/electron-webpack-dashboard)

* [Webpack Monitor #Project#](https://github.com/webpackmonitor/webpackmonitor): A tool for monitoring webpack optimization metrics through the development process

- [JARVIS #Project#](https://github.com/zouhir/jarvis): J.A.R.V.I.S. (Just A Rather Very Intelligent System) will put in your browser all the relevant information you need from your webpack build whether in dev or in prod.

* [Webpack Bundle Analyzer #Project# ](https://github.com/th0r/webpack-bundle-analyzer): Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap.

## 应用优化

* [preload-webpack-plugin](https://github.com/googlechrome/preload-webpack-plugin): A Webpack plugin for wiring up link `<rel='preload'>` (and prefetch) - supports async chunks

# Internals

* [2017-Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007/)
