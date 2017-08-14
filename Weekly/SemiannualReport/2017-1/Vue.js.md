# 前端每周清单半年盘点之 Vue.js 篇

[前端每周清单](http://www.infoq.com/cn/FE-Weekly)专注前端领域内容，以对外文资料的搜集为主，帮助开发者了解一周前端热点；分为新闻热点、开发教程、工程实践、深度阅读、开源项目、巅峰人生等栏目。欢迎关注【前端之巅】微信公众号（ID：frontshow），及时获取前端每周清单；本文则是对于半年来发布的前端每周清单中的 Vue.js 相关的教程实践与开源项目的盘点，可以查看[这里](https://parg.co/bh1)获得往期清单或者其他盘点篇。


# 教程实践

- [基于 Vue 与 DeepStream 构建实时 CRUD 应用](https://scotch.io/tutorials/build-a-realtime-crud-app-with-vue-deepstream)：Vue 是专注于 JavaScript UI 的渐进式库，它提供了开发现代 Web 应用的各种先进的特性。而随着移动互联网的发展，实时技术也愈发重要；各种各样的提供抽象接口的实时服务器扮演着越发重要的作用，其中[DeepStream](https://deepstream.io/) 就是开源的、免费的并且性能表现相当优秀的实时服务器。而本文就利用 Vue 与 DeepStream 这两个开源工具构建实时交互的应用。

- [Vue.js 组件样式指南](https://github.com/pablohpsilva/vuejs-component-style-guide)：该样式指南提供了一种统一架构 Vue.js 代码的建议，其目标是达成易于开发者与团队成员理解以及寻找东西、易于 IDE 来审查代码并且提供帮助、易于重用开发构建工具、易于独立地缓存与使用代码块。该指南借鉴了 [RiotJS](https://github.com/voorhoede/riotjs-style-guide)样式指南，主要还包含了以下几个部分：[基于模块开发](https://github.com/pablohpsilva/vuejs-component-style-guide#module-based-development)、[Vue 组件命名](https://github.com/pablohpsilva/vuejs-component-style-guide#vue-component-names)，等等。

- [基于 Vue.js 开发一个 Pokemon Battle 指南](https://medium.com/coding-artist/vue-js-pokemon-battle-tutorial-380cd72eb681#.x8wnb4s0f): 本文是非常详细的如何利用 Vue.js 开发一个宠物小精灵的战斗场景的教程，还是挺有意思的。( http://suo.im/1jwicW )

- [Vue.js 实用技巧](http://6me.us/alZ)：本文来自于饿了么大前端的 cinwell， Vue.js 2.0 已经发布了有一段时间，生态链也日渐完善。作者在使用 Vue.js 开发项目时收集的一些工具和使用技巧，分享给各位。( http://6me.us/alZ )

- [Vue.js 前端框架比较](http://6me.us/5E8wN)：本文是对常用的基于 Vue.js 的前端框架的比较。( http://6me.us/5E8wN )

- [滴滴 webapp 5.0 Vue 2.0 重构经验分享](https://github.com/DDFE/DDFE-blog/issues/13)：滴滴的 webapp 是运行在微信、支付宝、手 Q 以及其它第三方渠道的打车软件。借着产品层面的功能和视觉升级，我们用 Vue 2.0 对它进行了一次技术重构；本文即是本次重构中的经验分享。( https://github.com/DDFE/DDFE-blog/issues/13 )

- [使用 Vue.js 与 Electron 构建桌面问卷应用](https://parg.co/bQ3)：本文介绍了如何利用 Vue.js 与 Electron 来构建简单的桌面问卷应用，作者首先介绍了如何使用 vue-cli 创建简单的 Web 项目，然后讨论了如何将项目运行在 Electron 中，最后阐述了如何将应用整体打包发布。( https://parg.co/bQ3 )

- [Vue.js 2.2 完整 API 清单](https://parg.co/bhC)：本文是 Vue.js 2.2 中完整的 API 介绍，可以作为手册随时查阅 。（ https://parg.co/bhC ）

- [创建基于 Vue.js 的可复用组件](https://parg.co/b49)：本系列文章关注于如何利用 Vue.js 创建可复用的组件，每一篇都会讲解某个具体的界面组件，然后一步一步地介绍如何利用 Vue.js 来实现这些组件，顺便也介绍 Vue.js 的各种原理与设计准则。( https://parg.co/b49 )

- [面向重度 jQuery 开发者的 Vue.js 介绍](https://parg.co/bRN)：本文是一位经验丰富的开发者，在将原有的基于 jQuery 工程重构为基于 Vue.js 工程的过程中总结出的经验与认识介绍。本文首先从零开始介绍如何搭建 Vue.js 基础项目并且一步一步地实现应用的各种特征，同时还对比了利用 Vue.js 与 利用 jQuery 实现的差异性以及二者在设计思想上的区别。( https://parg.co/bRN )

- [后 MVC 时代](https://realm.io/news/the-post-mvc-age/)：在很长一段时间里，MVC（Model-View-Controller）架构是构建应用的黄金法则，而近几年随着 React，Vue.js，Angular 等以组件为中心的库的流行，MVC 架构在前端却趋于平寂。开发者往往将模型、视图与控制器耦合在单个实体内，而打破了传统的 MVC 架构中的约束。类似于 Flux 或者响应式编程的设计思想也改变了应用状态的处理方式，不同于 MVC 中的双向绑定，而是数据在实体之间单向流动。本文即是讨论在所谓后 MVC 时代的 GUI 应用架构的思考。( https://realm.io/news/the-post-mvc-age/ )

- [在 Vue.js 项目中使用第三方库](https://parg.co/bf4)：本文介绍了如何在基于单文件模块的 Vue.js 项目中使用 Lodash、Moment、Axios 这些优秀的第三方库或框架。本文递进地介绍了譬如全局变量引用、单文件导入、扩展 Vue 对象、插件实现等多种方式。( https://parg.co/bf4 )

- [Vue.js 2 中的权限验证指南](https://auth0.com/blog/vuejs2-authentication-tutorial/)：本文介绍了如何快速构建 Vue.js 2 应用程序并且添加合适的权限验证模块。本文首先介绍了 Vue.js、Angular 以及 React 之间设计思想的对比，然后介绍了 Vue.js 2.0 中的核心概念与基本用法，最后以某个真实的登录控制案例介绍了如何为 Vue.js 应用中添加权限验证功能。( https://auth0.com/blog/vuejs2-authentication-tutorial/ )

- [实测Vue SSR的渲染性能：避开20倍耗时](https://parg.co/bNv)：Vue SSR是Vue.js 2.0引入的直出渲染方案，本文将全面解析virtual-dom-based 及 string-based 的原理并对其进行对比。Vue SSR的模板是virtual-dom-based，所以QQ空间Hybrid业务做Vue 2.0的改造的同时，模板类型也从之前的a类转换成b类。 本文是在实际业务场景中对Vue SSR的渲染性能做测试，并解析渲染步骤，给出尝试优化的方案和最终结论。( https://parg.co/bNv )

- [基于 Vue.js、Webpack、Material Design 打造 PWA 应用](https://parg.co/btH)：PWA 应用已经受到了越来越多的关注与实践，而本系列文章则介绍了如何使用 Vue.js、Webpack 以及 Material Design 打造 PWA 应用。本系列文章包含七个部分，分别介绍了基于 Vue.js、Webpack 与 Material Design Lite 创建单页应用、使用 Vue-Resource 与 VueFire 进行数据交互、使用 Service Workers 实现离线模式、拍照、上传图片、实现推送、访问设备地址等内容。( https://parg.co/btH )

- [Vue.js 与外部交互](http://vuejsdevelopers.com/2017/05/01/vue-js-cant-help-head-body/)：Vue.js 是非常优秀的网页构建框架，不过我们往往会面临着比较割裂的开发情况，即网页中的一部分是交由 Vue.js 管理，而另一部分是交由其他脚本或者插件管理；这中情况在多团队协同开发或者对旧版本的改造时可能会碰到。而本文则介绍了应该如何使用 Vue.js 与外部其他脚本进行交互，譬如管理 head 、body 标签、监听键盘事件等等内容。( https://parg.co/bMw )

- [使用现代方法端到端测试 Vue.js 应用](https://parg.co/bV9)：端到端测试是 Web 测试中的重要组成部分，也是应用开发流程中不可或缺的部分；本文则介绍了如何使用 TestCafe 对 Vue.js 应用进行端到端测试。( https://parg.co/bV9 )

- [从 React 迁移到 Vue.js](http://vuejsdevelopers.com/2017/05/28/switch-from-react-to-vue-js/)：React 与 Vue.js 都是非常优秀的前端框架，不同的团队在不同的应用场景下可能有不同的偏好。而本文则记录了作者从 React 迁移到 Vue.js 中的思考过程；本文首先介绍了 React 与 Vue.js 之间的异同，对比了二者常用的语法特点以及生态圈，并且讨论了为何从 React 迁移到 Vue.js 的理由。( https://parg.co/bJ8 )

- [基于 Vuex 的 Vue 应用状态管理](https://scotch.io/tutorials/state-management-in-vue-getting-started-with-vue)：就如同其他基于组件的框架，对于基于 Vue 开发的应用随着其体量与功能的增加，对于状态的追踪会变得日渐麻烦。而本文则分析了状态管理的痛点以及深入浅出地介绍了如何利用 Vuex 进行 Vue 应用状态管理。( https://parg.co/bJk )

- [Vue 2017 现状与展望](https://parg.co/bJ6)：5 月 20 日，在全球首届 VueConf 上，Vue.js 作者尤雨溪介绍了 Vue.js 2017 的现状，并对 Vue 的未来做了展望。本文是对此次演讲的回顾。获取更多Vue相关内容，请关注前端之巅公众号并回复“Vue”。( https://parg.co/bJ6  )

- [Nuxt.js SSR 与权限验证指南](https://parg.co/bic)：Nuxt.js 是基于 Vue.js 构建的服务端渲染框架，它允许开发者快速创建支持服务端渲染的应用；而本文则是介绍了利用 Nuxt.js 搭建应用并且为其添加权限验证模块的步骤。( https://parg.co/bic )

- [在 Vue.js 中使用过滤器](https://css-tricks.com/using-filters-vue-js/)：过滤器是 Vue 中常用的处理数据渲染结果的方式之一，我们首先需要明白过滤器并不是对于方法、推导值等的替代，毕竟它们并没有真实地转换数据，而只是对用户的可视结果进行了处理。自 Vue 2.0 之后框架本身并无内置的过滤器，而本文则是介绍了基本的过滤器的使用语法以及几个经典的使用场景。( https://css-tricks.com/using-filters-vue-js/ )

- [使用 Vue 与 NativeScript 开发跨端应用](https://www.nativescript.org/blog/a-new-vue-for-nativescript)：目前标准的开发 NativeScript 应用的方式是使用朴素的 JavaScript 或者 Angular，而本文介绍了如何结合使用 Vue 与 NativeScript 来开发跨终端应用。本文首先阐述了 Vue.js 相较于 React 或者 Angular 的优势，然后阐述了使用 Vue 语法来开发基础 NativeScript 应用的步骤。( https://www.nativescript.org/blog/a-new-vue-for-nativescript )

- [基于 Firebase 与 Vue.js 构建基于地理位置的聊天室](https://parg.co/bLH)：本文介绍了基于 Firebase 与 Vue.js 构建某个基于地理位置搜索与配对的聊天室应用的过程，应用发布在[这里](https://near.idgo.me./)，还是挺有意思的应用。本文除了介绍 Vue.js 项目的基础构建与语法之外，还介绍了所谓 Geohash 的知识与 Firebase 相关接口的使用。( https://parg.co/bLH )

- [在 Vue.js 中使用 Mixins](https://parg.co/b9S)：在项目开发中我们经常会碰到两个组件的业务逻辑有所相似，可能共享相同的底层业务逻辑；此时我们就需要考虑如何来合理地划分代码，即避免冗余代码，也不能过度抽象。而本文则介绍了如何在 Vue.js 中使用 Mixins 来编写可重复使用的功能代码片；Mixin 允许我们将部分代码片封装到函数中然后动态地在多个组件中使用。( https://parg.co/b9S )

- [为什么我选择了 React 而不是 Vue？](https://parg.co/b9H)：本文作者阐述了自己在技术选型过程中更倾向于 React 的原因，本文带有较强的主观色彩，请读者批判性阅读。本文作者认为 React 与 Vue 虽然是相似的前端组件型库，但是 Vue、Angular、Knockout 等框架依旧是以 HTML 为中心，使用指令来描述部分逻辑；而 React 则是以 JavaScript 为中心，完全使用 JavaScript 代码来描述逻辑。本文从模板、工具、状态的可变性等角度来论证自己的观点。( https://parg.co/b9H )

- [三分钟交互式介绍 Vue.js](https://parg.co/byU)：Vue.js 是近年来逐步流行的轻量级构建前端界面的组件库，其相对平滑的学习曲线确保了开发者能够快速入门使用。而本文作者则循序渐进地介绍了 Vue.js 基础使用知识，并且在每一段中都包含了[交互式代码演示](https://scrimba.com/casts/crNKWHd)；作者依次介绍了 Vue.js 中模板语法与数据绑定、常见指令以及响应用户输入等内容；更多 Vue 相关资料参考[这里](https://parg.co/byL)。( https://parg.co/byU )

- [TDD 与 Vue.js](https://parg.co/byQ)：在真实的项目中我们免不了需要进行代码测试，而本文即分享如何在 Vue.js 中遵循测试驱动开发的基础知识。本文首先利用 Vue CLI 的默认模板创建了一个简单的组件，然后为其添加部分基础功能，同时会为每个元素添加单元测试。( https://parg.co/byQ )

- [Vue.js 框架的优势与缺陷（*仅代表原作者个人看法，若有翻译不当之处请指正）](https://parg.co/byl)：Vue.js 已经在国内的很多公司得到了广泛应用，与 Google 的 Angular 以及 Facebook 的 React 鼎足而立，本文作者则是从自己的角度阐述了 Vue.js 目前的优势与潜在缺陷所在。首先 Vue.js 的优势在于其包体较小，良好的文档方便开发者理解与使用，并且能很快地集成到现有项目中，其灵活性与数据通信机制也保证了项目的可扩展性。而目前来看 Vue.js 的缺陷则在于其开发者社区可能不如 React 等成熟，并且主要使用者以国人为主，与英语社区的交流存在一定语言障碍，同时其灵活性本身也是一种双刃剑，对于某些开发者而言反而会造成困难；更多 Vue 相关资料参考[这里](https://parg.co/byL)。( https://parg.co/byl )

- [利用 Webpack 加速 Vue.js 应用的四种姿势](https://parg.co/byC)：Webpack 是开发 Vue.js 单页应用的必须工具之一，它能够帮你处理复杂的编译步骤从而简化开发流程，并且能够帮助你优化应用体积与性能表现。而本文中作者即从单文件组件、优化 Vue 构建配置、浏览器缓存管理、代码分割这四个角度讨论了如何利用 Webpack 提供的特性来加速 Vue.js 应用。( https://parg.co/byC )

- [VueConf 观后感](https://parg.co/ber)：首届官方举办的 Vue.js 大会刚刚落幕，本文即是作者对于自己参会之后的感想进行的简要阐述。作者首先介绍了自己参与的数个 WorkShop 与演讲，从 Evan You 对于 Vue.js 发展历史与现状的介绍，到基于 Vuex 的状态管理、服务端渲染、代码分割等多个具体的技术实现。本文是非常不错的对于 VueConf 的回顾，如果没有参会或者尚未了解过议程的同学可以一看，并且选择自己感兴趣的议题查看对应的胶片与演讲视频。 ( https://parg.co/ber  )

- [选择与支持 Vue.js 的理由](https://parg.co/bX2)：本文是来自 Monterail 的前端工程师、Vue.js 资深开发者 Damian Dulisz 分享他选择与支持 Vue.js 的理由。本文不仅仅从开发者的角度阐述了 Vue.js 对其的吸引力，还从产品经理的视角、Vue.js 社区发展的角度阐述了 Vue.js 的巨大潜力。本文是一篇不错的介绍 Vue.js 最新变化与进展，并且对常见的 Vue.js 的部分误解进行了阐述的文章；更多 Vue 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。( https://parg.co/bX2 )

- [VueConf 观后感](https://parg.co/ber)：首届官方举办的 Vue.js 大会刚刚落幕，本文即是作者对于自己参会之后的感想进行的简要阐述。作者首先介绍了自己参与的数个 WorkShop 与演讲，从 Evan You 对于 Vue.js 发展历史与现状的介绍，到基于 Vuex 的状态管理、服务端渲染、代码分割等多个具体的技术实现。本文是非常不错的对于 VueConf 的回顾，如果没有参会或者尚未了解过议程的同学可以一看，并且选择自己感兴趣的议题查看对应的胶片与演讲视频。 ( https://parg.co/ber  )

- [百度 Web 生态构建：发布基于 Vue 的 PWA 解决方案 LAVAS；将全面支持 Web AR ](https://parg.co/bIZ)：在 Baidu Create 2017 Web 生态分论坛上，百度搜索正式对外发布基于 Vue 的 PWA 解决方案 LAVAS，同时宣布将全面支持 Web AR，此外，百度还对 MIP 的架构与原理、HTTPS 等技术进行了深度解析。( https://parg.co/bIZ )

- [基于 Vue.js 2 的分角色权限验证](https://parg.co/bIs)：本文作者因为 Vue.js 平滑的学习曲线与易于理解的官方文档而倾向于使用 Vue.js 进行前端开发工作，本文即是作者介绍如何利用 Vue.js 2 来为项目添加基于角色的权限控制功能。作者在本文中首先介绍了基于角色的权限控制的概念与设计，然后讨论了如何使用 vue-cli 来构建基础项目架构并且按特征划定目录层次，最后介绍了关键部分的代码实现以及如何使用 Vuex 来管理应用状态；更多 Vue 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。( https://parg.co/bIs )

- [基于 Vue.js 与 Laravel 构建实时仪表盘](https://parg.co/bIJ)：本文是来自 Spatie 的工程师，介绍基于 Laravel 与 Vue.js 构建，实时的队伍与事件信息展示面板的实践总结。本文首先介绍了历史项目的不足以及目前项目的设计考量，然后讨论了前端网格布局的解决方案。接下来作者分别介绍了服务端基于 Laravel 与客户端基于 Vue.js 的关键代码的实现；更多 Vue 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。( https://parg.co/bIJ  )

- [Vue 直出内存泄露问题的追查实践](https://parg.co/bIN)：近期，作者遇到了 Vue 直出内存泄露问题，并进行了追查。其项目背景是，作者在一次规模较大的运营活动中正好碰到了内存泄漏的问题，技术背景和业务背景分别如下：技术背景：node直出项目，直出用到了 Vue 的直出方案；业务背景：一次 PV 最高达到 1400W 的运营活动 qps 的压力下，后期使得服务出现一定错误率。本文将回顾整个追查的实践过程。( https://parg.co/bIN )

- [Vue.js 2.4.0 发布](https://github.com/vuejs/vue/releases/tag/v2.4.0)：Vue.js 2.4.0 版本提供了内置的服务端渲染与异步组件支持，从而保证了在服务端渲染中也能使用异步组件，而不再是局限于路由中使用。此外该版本还简化了包装组件的写法、提供了 v-on 等一系列新的指令或者 API 特性，并且修复了老版本中存在的错误；更多详细内容可参考原文，或者阅读 [ Vue.js 2.4.0 中的 4 个重大变化](https://parg.co/b17)一文。

- [Vue.js 项目中使用 TypeScript](https://parg.co/b1j)：Vue.js 是优秀的渐进式前端框架，而 TypeScript 则可以为项目添加静态类型检测的特性，本文即是介绍如何在 Vue.js 项目中使用 TypeScript。本文以 Vue.js 中的单文件组件为例，首先讨论了 tsconfig.json 的基本配置以及如何引入 Webpack 并配置合适的 loader；然后介绍了 TypeScript 的基础用法，更多 Vue.js 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。

- [Vue.js 组件的实践分享](https://parg.co/bW6)：本文是来自 Morningstar 的工程师，分享的他们利用 Vue.js 进行前端组件化开发时的实践经验；主要是它们对于 Vue.js 组件编写的心得。作者首先介绍了组件不同生命周期回调的含义，然后介绍了从简单到复杂组件的状态与数据管理，接下来介绍了 Slot 与 Minxin 在组件重用上的具体用法等内容；更多 Vue.js 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。

- [使用 Vue.js 与 Chart.js 构建漂亮的图表](https://www.sitepoint.com/creating-beautiful-charts-vue-chart-js/)：图表是现代网站与应用的重要组成，它们能够帮助你更有张力地呈现数据；本文即是介绍如何利用 Chart.js 与 Vue.js 来有效地，针对不同格式的图表进行可视化数据呈现。本文首先介绍了使用 vue-cli 构建基本的项目骨架，然后引入了 vue-router 进行路由划分，接下来介绍了利用 vue-chartjs 库依次构建常见的线型图、饼图、气泡图、柱状图等常见的图表；更多 Vue.js 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。

- [ Vue.js 中安全地使用 jQuery 插件](https://parg.co/bgU)：实际上我们并不推荐在界面中同时使用 jQuery 与 Vue.js，不过在项目开发中有时候我们无法避免地需要同时使用，本文即是讨论如何安全地使用 jQuery 插件。本文以某个时间日期选择插件为例，首先讨论了引入 jQuery 存在的潜在风险，然后一步步地介绍了初始化插件、将插件包裹在 Vue.js 组件内、如何在插件与组件之间进行数据交互等内容；更多 Vue.js 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。

- [Vue.js 与 NativeScript 初窥](https://www.nativescript.org/blog/vue-and-nativescript-in-one-minute)：NativeScript 框架最值得称道的即是其扩展性，它目前已经支持原生 JavaScript、Angular、Vue.js 等多种框架或者编码方式，同时未来还计划支持 Preact 等框架。本文即是介绍如何使用 NativeScript 与 Vue.js 协同开发，首先介绍了如何使用 NativeScript 命令行工具创建项目，然后引入 Vue.js 插件以及如何运行该项目；更多 Vue.js 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。

- [Vue.js 2 单元测试指南](https://morningstar.engineering/vue-2-unit-testing-primer-48d1d616a981)：本文主要介绍如何利用 Jasmine 为 Vue.js 2 应用搭建完整的单元测试；这里选用 Jasmine 的原因是它本身的性能较好，并且 Vue.js 本身也是使用该测试框架。本文首先介绍了环境搭建与待测试的组件构成，然后依次介绍了配置测试环境、如何根据组件的业务功能逻辑选定测试点、如何编写不同目标的测试用例等内容；更多 Vue.js 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。

- [深入 Vue.js 响应式原理](https://parg.co/bF4)：本文作者从 Java 与 C# 中经典的 Getters/Setters 引入，讨论了 Vue.js 中从组件渲染函数、数据的 Getter、Setter 劫持、监听器的控制以及重渲染触发整个生命流程。更多 Vue.js 相关资料参考[ https://parg.co/byL ](https://parg.co/byL)。

# 开源项目

- [vue2-elm](https://github.com/bailicangdu/vue2-elm)：基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用，涉及注册、登陆、商品展示、购物车、下单等等，是一个完整的流程。挺不错的学习参考资料。( https://github.com/bailicangdu/vue2-elm  )

- [基于 Vue2 与 Element-UI的管理系统模板](https://github.com/lin-xin/manage-system)：基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案。( https://github.com/lin-xin/manage-system )

- [vue-3d-model](https://github.com/hujiulong/vue-3d-model)：一个展示三维模型的  Vue 组件，支持模型操作和模型点击事件，能自动缩放模型到合适大小并校正偏移，目前支持 obj、stl、dae 和 json 格式的模型。


- [awesome-github-vue](https://github.com/opendigg/awesome-github-vue)：awesome-github-vue 是由 OpenDigg 整理并维护的 Vue 相关开源项目库集合。( https://github.com/opendigg/awesome-github-vue  )

- [Eagle.js](https://github.com/zulko/eagle.js/)：Eagle.js 是基于 Vue.js 构建的创建 Web 中幻灯片的库，支持动画、主题、交互插件等常用功能。( https://github.com/zulko/eagle.js/ ) 

- [vue-recyclerview](https://github.com/hilongjw/vue-recyclerview)：vue-recyclerview 是基于 DOM 重用的能够处理大型列表项目的 Vue 组件，它能够用于构建高性能瀑布式列表或者无限列表。( https://github.com/hilongjw/vue-recyclerview )

- [hacker-news-pwas](https://parg.co/biQ)：基于不同的前端框架实现的符合 PWA 应用特性的 Hacker News APP 的合集，包括了常见的 React、Angular、Vue、Preact 等多个版本，并且均在 Lighthouse 评测中达到 90 以上的评分。( https://parg.co/biQ )

- [Aurora](http://aurora.mljr.com/install.html)：Aurora  是基于 Vue 2.2.0 版的组件库, 提供了常见的网格布局、按钮、表单域、分页、模态窗口等组件。

- [vue-table-component](https://github.com/spatie/vue-table-component): vue-table-component 提供了轻量级、易于使用的 Vue.js 组件；该组件的一大特性在于其能够自动缓存用户的筛选与排序结果，即使用户刷新了页面该数据仍然可以保留使用。( https://github.com/spatie/vue-table-component  )





