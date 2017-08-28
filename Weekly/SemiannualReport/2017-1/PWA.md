# 前端每周清单半年盘点之 PWA 篇

[前端每周清单](http://www.infoq.com/cn/FE-Weekly)专注前端领域内容，以对外文资料的搜集为主，帮助开发者了解一周前端热点；分为新闻热点、开发教程、工程实践、深度阅读、开源项目、巅峰人生等栏目。欢迎关注【前端之巅】微信公众号（ID：frontshow），及时获取前端每周清单；本文则是对于半年来发布的前端每周清单中的 PWA 相关的教程实践与开源项目的盘点，可以查看[这里](https://parg.co/bh1)获得往期清单或者其他盘点篇。

# 教程实践

- [工程实践中的 PWA 利器清单](https://medium.com/dev-channel/progressive-web-app-libraries-in-production-b52cad37d34#.3u42kd67r): 本文是 Google Chrome 团队的 Addy Osmani 所写，介绍了这两年来他们团队开发或者推荐的一系列能够用于生产环境的 PWA 开发工具或者辅助库。此文作者同时来列举了目前在很多主流站点应用 PWA 之后带来的一系列包括离线优先、首屏加载优化等提升用户体验的实践案例。 ( http://suo.im/1IxGPJ 

- [百度搜索对PWA的探索和初步实践](http://6me.us/JS85s): 本文是百度搜索资深Web前端工程师沈洲在前端之巅微信群中的分享整理总结而成，介绍了百度天气 PWA 应用的开发实践，本周还分享了[PWA 实践：从一个简单的页面开始](http://6me.us/Ik5k1L)与[PWA实践：理解和创建 Service Worker 脚本](http://6me.us/P5cB)等 PWA 相关内容 。(http://6me.us/JS85s)

- [PWA 在饿了么的实践经验](https://parg.co/bO7)：本篇旨在和大家分享「饿了么 M 站」（https://h5.ele.me/msite/）在 PWA 改造中的实践经验。涉及到的方面有：PWA 线上部署的准备工作、多页应用的 prerender 优化、实践过程中踩到的（和推进解决的）坑。( https://parg.co/bO7 )

- [Progressive Web Apps：响应式 Web 设计的延伸](https://julian.is/article/progressive-web-apps/)：本文是对于 Progressive Web Apps 概念、设计理念与简单实践的介绍，作者介绍了 PWA 应用应该具备的基本特性、性能与体验上的要求以及如何将现有站点转化为 PWA 的简单实践。( https://julian.is/article/progressive-web-apps/ )

- [基于 Vue.js、Webpack、Material Design 打造 PWA 应用](https://parg.co/btH)：PWA 应用已经受到了越来越多的关注与实践，而本系列文章则介绍了如何使用 Vue.js、Webpack 以及 Material Design 打造 PWA 应用。本系列文章包含七个部分，分别介绍了基于 Vue.js、Webpack 与 Material Design Lite 创建单页应用、使用 Vue-Resource 与 VueFire 进行数据交互、使用 Service Workers 实现离线模式、拍照、上传图片、实现推送、访问设备地址等内容。( https://parg.co/btH )

- [饿了么的 PWA 升级实践](https://parg.co/bMz)：本文介绍了饿了么利用 Vue.js 与 PWA 开发其移动 Web 端过程中的实践经验，包括 PRPL 模式的实现、多页面性能优化、用户体验优化等等内容。( https://parg.co/bMz )

- [大前端公共知识梳理：这些知识你都掌握了吗？](https://parg.co/byS)：近年来，随着移动化联网浪潮的汹涌而来与浏览器性能的提升，iOS、Android、Web 等前端开发技术各领风骚，大前端的概念也日渐成为某种共识。 其中特别是 Web 开发的领域，以单页应用为代表的富客户端应用迅速流行，各种框架理念争妍斗艳，百花竞放。Web 技术的蓬勃发展也催生了一系列跨端混合开发技术，希望能够结合 Web 的开发便捷性与原生应用的高性能性；其中以 Cordova、PWA 为代表的方向致力于为 Web 应用尽可能添加原生体验，而以 NativeScript、ReactNative、Weex 为代表的利用 Web 技术或者理念开发原生应用。 平心而论，无论哪一种开发领域或者技术，他们本质上都是进行图形用户界面（GUI）应用程序的开发，面对的问题、思考的方式、架构的设计很大程度上仍然可以回溯到当年以 MFC、Swing、WPF 为主导的桌面应用程序开发时代，其术不同而道相似。( https://parg.co/byS )

- [Progressive Web Apps 入门教程](https://parg.co/b1n)：或许你已经对 PWA 有所耳闻，或者已经真实使用过某个 PWA 应用；本文并不着眼于详细介绍 PWA 的内部原理与工作机制，而是希望以简明扼要的语义引导读者构建 PWA 应用 。本文依次介绍了如何测试自身应用的 PWA 评分、构建图标与说明、添加 Service Worker、发布到 Github Pages 等；更多 PWA 相关资料参考 [ https://parg.co/bVh  ](https://parg.co/bVh)。

- [将现有的 Angular 应用转化为 PWA](https://parg.co/bz3)：本教程将会介绍如何将现有的 Angular 应用逐步地转化为 Progressive Web App，该教程适用于任何基于 @angular/cli 命令行工具创建的项目。本文首先介绍了 Service Worker 的作用、如何在项目中集成 Service Worker、如何创建自定义的 App Manifest；然后讨论了如何管理离线特征，最后说明了如何利用 Google LightHouse 进行应用的性能、可用性与最佳实践的测试，以及如何提升应用的性能。

- [构建混合渲染的 PWA](https://parg.co/bzO)：[PWA Directory](https://pwa-directory.appspot.com/) 最初是采用了纯粹服务端渲染的 PWA 应用，它对于搜索引擎地支持比较好。不过这种应用并无法很好地进行客户端路由跳转，反而会带来一些额外的性能损耗；本文则依次介绍了如何使用 JavaScript 来托管路由跳转、如何利用 Service Worker 来进行数据缓存或者后台操作等内容。更多 PWA 相关资料参考[这里](https://parg.co/bVh)。

# 开源项目

- [PWA Builder](http://6me.us/VW9nG)：随着 PWA 的日渐发展，Manifoldjs 也转型成为 PWA 应用在线构建工具；该工具为用户提供了在线构建 Manifest、自动生成多格式 Icon、创建 Service Worker、发布 PWA 等多种服务。( http://6me.us/VW9nG )

- [Service Worker Mock](https://parg.co/bCD)：在 PWA 应用的开发中对于 Service Worker 的测试一直比较麻烦，每个文件都可能通过`self.addEventListener`产生副作用，并且 Service Worker 的运行环境也迥异于正常的 Web 或者 Node 环境。而本包则是通过注入伪造的 Service Worker 环境来方便测试。( https://parg.co/bCD )

- [pwmetrics](https://github.com/paulirish/pwmetrics)：基于 LightHouse 封装的能够在命令行中使用的 PWA 应用的性能评测工具。( https://github.com/paulirish/pwmetrics )

- [hacker-news-pwas](https://parg.co/biQ)：基于不同的前端框架实现的符合 PWA 应用特性的 Hacker News APP 的合集，包括了常见的 React、Angular、Vue、Preact 等多个版本，并且均在 Lighthouse 评测中达到 90 以上的评分。( https://parg.co/biQ )
