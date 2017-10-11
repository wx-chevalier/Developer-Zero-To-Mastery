[![章节头](https://parg.co/UGo)](https://parg.co/b4z) 
 - [Webpack 学习与实践资料索引- [react-armor](https://github.com/elierotenberg/react-armor)- [前端缓存策略与基于Webpack的静态资源版本管理](https://zhuanlan.zhihu.com/p/24954527)- [大公司里怎样开发和部署前端代码](https://github.com/fouber/blog/issues/6)。](#webpack-%E5%AD%A6%E4%B9%A0%E4%B8%8E%E5%AE%9E%E8%B7%B5%E8%B5%84%E6%96%99%E7%B4%A2%E5%BC%95--react-armorhttpsgithubcomelierotenbergreact-armor--%E5%89%8D%E7%AB%AF%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5%E4%B8%8E%E5%9F%BA%E4%BA%8Ewebpack%E7%9A%84%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86httpszhuanlanzhihucomp24954527--%E5%A4%A7%E5%85%AC%E5%8F%B8%E9%87%8C%E6%80%8E%E6%A0%B7%E5%BC%80%E5%8F%91%E5%92%8C%E9%83%A8%E7%BD%B2%E5%89%8D%E7%AB%AF%E4%BB%A3%E7%A0%81httpsgithubcomfouberblogissues6)
- [Resource: 资源## Tutorial: 教程](#resource-%E8%B5%84%E6%BA%90%23%23-tutorial-%E6%95%99%E7%A8%8B)
- [Feature: 特征](#feature-%E7%89%B9%E5%BE%81)
  * [Modularity: 模块化](#modularity-%E6%A8%A1%E5%9D%97%E5%8C%96)
- [EPractices](#epractices)
  * [Build Performance: 构建性能优化- [2016-Optimizing Webpack build times and improving caching with DLL bundles](https://robertknight.github.io/posts/webpack-dll-plugins/)](#build-performance-%E6%9E%84%E5%BB%BA%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96--2016-optimizing-webpack-build-times-and-improving-caching-with-dll-bundleshttpsrobertknightgithubiopostswebpack-dll-plugins)
  * [Production: 发布到生产环境- [2017-Reducing CSS bundle size 70% by cutting the class names and using scope isolation](https://parg.co/b19)- [Webpack Bundle Analyzer【Project】](https://github.com/th0r/webpack-bundle-analyzer): Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap.](#production-%E5%8F%91%E5%B8%83%E5%88%B0%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83--2017-reducing-css-bundle-size-70%25-by-cutting-the-class-names-and-using-scope-isolationhttpspargcob19--webpack-bundle-analyzerprojecthttpsgithubcomth0rwebpack-bundle-analyzer-webpack-plugin-and-cli-utility-that-represents-bundle-content-as-convenient-interactive-zoomable-treemap)
- [Plugin: 插件](#plugin-%E6%8F%92%E4%BB%B6) 


# Webpack 学习与实践资料索引- [react-armor](https://github.com/elierotenberg/react-armor)- [前端缓存策略与基于Webpack的静态资源版本管理](https://zhuanlan.zhihu.com/p/24954527)- [大公司里怎样开发和部署前端代码](https://github.com/fouber/blog/issues/6)。


# Resource: 资源## Tutorial: 教程
- [2016-Getting Started with Webpack 2](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.3ksiast1f): At its simplest, webpack is a module bundler for your JavaScript. However, since its release it’s evolved into a manager of all your front-end code.- [2017-Intro To Webpack](https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d?source=linkShare-fe48c4221a4c-1482154145): Webpack is a very complex tool, and most people do not need to know how every part of it works.- [2017-How to setup Webpack +2.0 from scratch in 2017【Series】](https://medium.com/@wesharehoodies/simple-beginner-guide-for-webpack-2-0-from-scratch-part-v-495dba627718)- [2017-Webpack: A Detailed Introduction](https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/): JavaScript module bundling has been around for a while. RequireJS had its first commits in 2009, then Browserify made its debut, and since then several other bundlers have spawned across the Internet. Among that group, webpack has jumped out as one of the best. If you’re not familiar with it, I hope this article will get you started with this powerful tool.





# Feature: 特征
## Modularity: 模块化
- [2017-Brief introduction to scope hoisting in Webpack](https://parg.co/beE): On its third major release, Webpack introduced a new feature: scope hoisting. Many developers are already exposing data showing great positive impacts on the initial execution time of their bundles.## Code Split: 代码分割- [2017-Vendor and code splitting in webpack 2](https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923#.4ma6usgf0)
- [2017-webpack bits: Getting the most out of the CommonsChunkPlugin()](https://parg.co/bQb):
- [2017-How to use Webpack’s new “magic comment” feature with React Universal Component + SSR](https://parg.co/b9A): Webpack 2.4.0, which came out a few weeks ago, launched with a very interesting new feature: “magic comments.” In combination with dynamic imports, “magic comments” greatly simplify code-splitting + server-side rendering.

# EPractices
## Build Performance: 构建性能优化- [2016-Optimizing Webpack build times and improving caching with DLL bundles](https://robertknight.github.io/posts/webpack-dll-plugins/)
- [HappyPack【Project】](https://github.com/amireh/happypack): HappyPack makes webpack builds faster by allowing you to transform multiple files in parallel.

## Production: 发布到生产环境- [2017-Reducing CSS bundle size 70% by cutting the class names and using scope isolation](https://parg.co/b19)- [Webpack Bundle Analyzer【Project】](https://github.com/th0r/webpack-bundle-analyzer): Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap.
- [2017-webpack for real tasks: bundling front-end and adding compilation【Series】](https://iamakulov.com/notes/all/webpack-for-real-tasks-part-1/): Bundling front-end and adding compilation ,Decreasing front-end size and improving caching,  Speeding up build and improving the development workflow- [基于 Webpack 搭建前端工程解决方案探索](http://www.infoq.com/cn/articles/frontend-engineering-webpack)
- [基于 Webpack 的前端资源构建方案](http://lifei.github.io/2015/12/20/webpack/#___8)
# Plugin: 插件
- [Webpack Dashboard【Project】](https://github.com/FormidableLabs/webpack-dashboard): A CLI dashboard for webpack dev server. 如果是 Windows 下的开发者可以优先使用 [electron-webpack-dashboard](https://github.com/FormidableLabs/electron-webpack-dashboard)- [preload-webpack-plugin](https://github.com/googlechrome/preload-webpack-plugin): A Webpack plugin for wiring up link `<rel='preload'>` (and prefetch) - supports async chunks
- [Introducing React Loadable Component-centric code splitting and loading in React](http://6me.us/z5x)



