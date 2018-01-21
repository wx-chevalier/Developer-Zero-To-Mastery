[![返回目录](https://parg.co/UGo)](https://parg.co/b4z)

# Progressive Web Apps 学习与实践资料索引

本文是 Progressive Web Apps 开发中搜集的一系列有价值的参考资料。

# Overview: 概览

* [2016-Why Google Thinks You Should Start Building Progressive Web Apps](https://arc.applause.com/2016/05/24/progressive-web-apps/)

## Case Study: 案例分析

* [AliExpress Case Study](https://developers.google.com/web/showcase/2016/aliexpress) : AliExpress increases conversion rate for new users by 104% with new progressive web apps.

* [eXtra Electronics Case Study](https://developers.google.com/web/showcase/2016/extra) : United eXtra Electronics grows eCommerce sales by 100% with Web Push Notifications.

* [Jumia Case Study](https://developers.google.com/web/showcase/2016/jumia) : Push Notifications help Jumia reverse cart abandonment and increase conversions by 9X.

* [Konga Case Study](https://developers.google.com/web/showcase/2016/konga) : Konga cuts data usage 92% with new Progressive Web App.

* [Suumo Case Study](https://developers.google.com/web/showcase/2016/suumo) : Japan's top real estate site supercharges new listings with web Push Notifications and sees a 31% open rate for notifications.

* [2017- 百度搜索对 PWA 的探索和初步实践](http://6me.us/JS85s): 本文是百度搜索资深 Web 前端工程师沈洲在前端之巅微信群中的分享整理总结而成，介绍了百度天气 PWA 应用的开发实践，本周还分享了[《PWA 实践：从一个简单的页面开始》](http://6me.us/Ik5k1L)与[《PWA 实践：理解和创建 Service Worker 脚本》](http://6me.us/P5cB)等 PWA 相关内容 。

- [2017-PWA 在饿了么的实践经验](https://parg.co/bO7)：本篇旨在和大家分享「饿了么 M 站」（https://h5.ele.me/msite/）在 PWA 改造中的实践经验。涉及到的方面有：PWA 线上部署的准备工作、多页应用的 prerender 优化、实践过程中踩到的（和推进解决的）坑。

* [2017-Twitter Lite and High Performance React Progressive Web Apps at Scale](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3): A look into removing common and uncommon performance bottlenecks in one of the worlds largest React.js PWAs, Twitter Lite.

* [2017-Upgrading Ele.me to Progressive Web App](https://parg.co/bMz): we at Ele.me (the biggest food ordering and delivering company in China) have been working on upgrading our mobile website to a Progressive Web App.

- [2017-A Pinterest Progressive Web App Performance Case Study](https://parg.co/UuI): In this post we’ll cover some of their work to load fast on mobile hardware by keeping JavaScript bundles lean and adopting Service Workers for network resilience.

* [2017-HNPWA #Project#](https://parg.co/biQ): Hacker News readers as Progressive Web Apps

- [2017-A React And Preact Progressive Web App Performance Case Study: Treebo](https://parg.co/bBH): They recently shipped a new Progressive Web App as their default mobile experience, initially using React and eventually switching to Preact in production.

- [2017-A Tinder Progressive Web App Performance Case Study](https://parg.co/UMw): Techniques for JavaScript performance optimization, Service Workers for network resilience and Push Notifications for chat engagement.

## Tool: 工具

* [2017-Progressive Web App Libraries in Production](https://medium.com/dev-channel/progressive-web-app-libraries-in-production-b52cad37d34#.z5egf9m7v): This article is written by Addy Osmani. Two years ago, our team at Google started work on JavaScript libraries to reduce the friction for building Progressive Web Apps.

* [Manifoldjs: PWA Builder](http://6me.us/hx5JS): PWA Builder will give you an easy way to provide the missing pieces of your PWA, and not weigh down your site with data you don’t need or use.

* [Offline-plugin for webpack](https://github.com/NekR/offline-plugin): This plugin is intended to provide an offline experience for webpack projects. It uses ServiceWorker, and AppCache as a fallback under the hood. Simply include this plugin in your webpack.config, and the accompanying runtime in your client script, and your project will become offline ready by caching all (or some) of the webpack output assets. you can also turn to [Easy Offline First Apps With Webpack's Offline Plugin](https://dev.to/kayis/easy-offline-first-apps-with-webpacks-offline-plugin) for further information.

* [react-progressive-web-app](http://6me.us/aRCdPU): An opinionated React based repository which is optimized for Progressive Web App development.

* [RealFaviconGenerator](http://realfavicongenerator.net/): A great way to generate all the images, favicons, and associated files needed to display your app icon across different browsers.

* [Android Asset Studio - Launcher Icon Generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html): Generate Android style icons.

* [pwmetrics #Project# ](https://github.com/paulirish/pwmetrics): Progressive web metrics at your fingertipz

* [Workbox #Project# ](https://workboxjs.org/)：Workbox 是来自 Google Chrome 团队的快速将现有应用转化为 Progressive Web Apps 的 JavaScript 库；Workbox 允许我们通过 Webpack 插件、Gulp 插件以及 npm 脚本的方式快速地为当前应用的资源创建对应加载 ServiceWorker。

# Tutorial

* [2017-A beginner’s guide to making Progressive Web Apps](https://parg.co/b1n): Hopefully, this post will be all you need to get started in making your own PWA.

* [2017-A progressive Web application with Vue JS, Webpack & Material Design #Series#](https://parg.co/btH): The tutorial will be split in several parts, that will be published successively

* [2017-Progressive Web Apps (PWA) 中文版 #Book#](https://github.com/SangKa/PWA-Book-CN): This book is written with stand-alone chapters, letting you learn about particular features of interest without having read previous chapters. By the end, you'll be ready to build better web applications and improve the user experience.

- [2016-Progressive Web Apps with React.js #Series#](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12#.178womihv): Progressive Web Apps take advantage of new technologies to bring the best of mobile sites & native apps to users. They’re reliable, fast, and engaging. They originate from a secure origin and load regardless of network state.

- [2016-Google Developers - Your First Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/?hl=en) : A step-by-step guide to building a progressive web apps using the app shell pattern.

- [2016-Building Progressive Web Apps - O'Reilly Media](https://pwabook.com/oreillyapwa) : A deep dive into progressive web apps, service workers, push notifications, background sync, IndexedDB, offline first and much more (disclaimer: written by the maintainer of this page).

- [2015-A Beginner’s Guide To Progressive Web Apps](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/): Progressive web apps could be the next big thing for the mobile web. Originally proposed by Google in 2015, they have already attracted a lot of attention because of the relative ease of development and the almost instant wins for the application’s user experience.

- [2017-PWA 入门 : 写个非常简单的 PWA 页面](https://parg.co/bOz)：Progressive Web Apps 是 Google 提出的用前沿的 Web 技术为网页提供 App 般使用体验的一系列方案。这篇文章里我们来完成一个非常简单的 PWA 页面。

- [2017-Progressive Web Apps — The Next Step in Responsive Web Design — Julian Gaviria ](https://julian.is/article/progressive-web-apps/)

- [2017-Progressive Web Apps course #Course#](https://www.youtube.com/playlist?list=PLNYkxOF6rcIAdnzEsWkg0KpMn2WJwMBmN)

## Installable Web App

* [Increasing Engagement with Web App Install Banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en) : An intro to App Install Banners and making sure Chrome offers your web app to your users.

* [Installable Web Apps with the Web App Manifest in Chrome for Android](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android): An introduction to installable Web Apps in Chrome for Android.

## Push

* [Chrome Platform Status - Web Notifications](https://www.chromestatus.com/feature/5480344312610816) : Implementation status for Chrome and other browsers.

* [PWA Dev Summit 2016 codelab - Push Notifications](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en) : Up-to-date getting started tutorial for Progressive Web App, Push Notifications and service worker basics.

* [Using the Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Using_the_Push_API) : An article introducing Push API.

* [web-push-libs](https://github.com/web-push-libs) : A collection of useful libraries for web push in different technologies (Node.js, PHP, Python, etc.)
