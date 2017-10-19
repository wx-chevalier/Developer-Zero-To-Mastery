
# 前端每周清单半年盘点之 Node.js 篇


[前端每周清单](http://www.infoq.com/cn/FE-Weekly)专注前端领域内容，以对外文资料的搜集为主，帮助开发者了解一周前端热点；分为新闻热点、开发教程、工程实践、深度阅读、开源项目、巅峰人生等栏目。欢迎关注【前端之巅】微信公众号（ID：frontshow），及时获取前端每周清单；本文则是对于半年来发布的前端每周清单中的 Node.js 相关的教程实践与开源项目的盘点，可以查看[这里](https://parg.co/bh1)获得往期清单或者其他盘点篇。


# 教程实践



- [掌握 Node.js 核心模块之文件系统](https://parg.co/bMj)：本文介绍 Node.js 核心模块中与文件系统、文件流等相关的部分，同时还介绍了实际开发中常用的第三方文件库。本文首先介绍了基本的读取与写入操作，然后介绍了权限控制、监听等功能，最后讨论了使用 graceful-fs、mock-fs、lockFile 等优秀的第三方库来辅助开发。( https://parg.co/bMj )



- [《关于Node.js存在反序列化远程代码执行漏洞的安全公告》](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484996&idx=1&sn=a1b037ececa56de2d878f4d6c91540f1)：近日，国家信息安全漏洞共享平台（CNVD）收录了Node.js反序列化远程代码执行漏洞（CNVD-2017-01206，对应 CVE-2017-594）。攻利用漏洞执行远程执行操作系统指令，获得服务器权限。由于目前验证代码已经公开，极有可能诱发大规模网站攻击。Node.js反序列化模块node-serialize库中的unserialize()函数未做安全处理，该漏洞通过传递调用JavaScript IIFE函数表达式的方式实现远程任意代码执行的效果。攻击者可通过远程攻击获得当前服务器运行环境权限，由于实际部署中node.js运行环境较多为操作系统root权限，因此可完全控制服务器主机。CNVD对该漏洞的综合评级为“高危”。目前，相关利用方式已经在互联网上公开，近期出现攻击尝试爆发的可能。不过根据[原作者表述](https://www.zhihu.com/question/55860542/answer/146613147)，实际上这个库在 GitHub 上一共只有 20 个 star，还有几个是漏洞文章发布后引来的，而且下载量也是非常少。如果想要避免此类安全问题，需要解决的就是确保用户输入的安全。方法比如通过安全传输方式（内网 & 加密）传输序列化字符串、使用如 RSA 等签名算法对字符串进行完整化校验。




- [《一次一个微优化，改进Node.js应用的吞吐量》](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484989&idx=1&sn=b1b4d9686a42498001687b156f2db928)：本文是多个提高 Node.js 应用吞吐量的小优化技巧介绍，包括尽可能地使用聚合 IO 操作，以批量写的方式来最小化系统调用的次数、需要将发布的开销考虑进内，清除应用中不同的定时器、CPU 分析器能够给你提高一些有用信息，但是并不能完整地反馈整个流程、谨慎使用 ECMAScript 高级语法，特别是你还未使用最新的 JavaScript 引擎或者类似于 Babel 这样的转换器的时候、要洞察你的依赖树的组成并且对你使用的依赖进行适当的性能评测。当我们希望去优化某个包含了 IO 功能的应用性能时，我们需要对于应用耗费的 CPU 周期以及那些妨碍到应用并行化执行的因素了如指掌。本文则是分享作者在提升 Apache Cassandra 项目中的 DataStax Node.js 驱动时的一些思考与总结出的导致应用吞吐量降级的关键因素。


- [《并发与并行：理解 Node.js 中 IO 底层机制》](https://blog.risingstack.com/concurrency-and-parallelism-understanding-i-o/)：本系列希望能帮助开发者深入了解开发并发应用的相关知识，而本文则是着眼于相对基础的操作系统级别的调度、应用的 IO 这些知识。


- [《Node.js 社区的发展之道：质量与速度并重》](https://nodejs.org/en/blog/community/quality-with-speed/): Node.js 社区的核心目标之一就是在快速迭代的同时保证代码质量，新发布的版本务必与之前的版本保持相同的稳定性，避免造成生产环境下应用的崩溃。Node.js 社区并没有一味的寻求妥协，而是不断突破自己，从而在保证变更速度的同时达成较高的质量要求。文本则是 Node.js 社区对于他们发布版本、变更流程以及自动化测试、性能测试等多方面的介绍。




- [《为何使用 Node.js ？》](https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e#.71g206imf)：本文来自于 Node.js 的技术专家 Tomislav Capan，此文最早发布于 2013 年，详细介绍了 Node.js 的内部原理，并且论述了 Node.js 适用的业务场景与典型的范模式。( http://suo.im/3sFwvm  )



- [《你应该知道的关于 Node.js 中模块导入的知识》](https://parg.co/bQl)：在 Node.js 开发中我们时刻都在于其模块机制打交道，而本文作者则深入浅出地介绍了 Node.js 中负责处理模块依赖的两个核心模块：require 与 module；并且介绍了不同的导入对象在 Node.js 中实际的递归处理流程以及最终在 module 中形成的元数据描述。( https://parg.co/bQl )




- [《Node.js 应用监控实践指南》](https://parg.co/bhb)：本文介绍生产环境下 Node.js 应用监控实践指南，包括了监控的意义、监控的对象、目前开源的监控解决方案以及一些 SaaS 解决方案等。( https://parg.co/bhb )



- [《使用 Faker.js 为 Node.js 应用创建模拟数据》](https://parg.co/bhU)：在应用开发中我们往往会头疼于如何构建大量的随机数据，特别是那些符合某些固定模式的数据，我们可能会要用这些数据仿制 RESTful 接口、进行单元测试等等。而 Faker.js 则为我们提供了这样的随机数据生成器。( https://parg.co/bhU )




- [《Node.js 运行时介绍》](https://parg.co/b4I)：本文是一篇不错的 Node.js 入门介绍的文章，包括了 Node.js 中常见的概念知识、JavaScript 并发模型以及基于 Event Loop 的实现、Node.js 内置的对象，以及 Node.js 缘何取名为 Node.js 等等。( https://parg.co/b4I )




- [《TypeScript 在 Slack 的实践分享》](https://parg.co/bRR)：维护大型的跨平台的 JavaScript 代码库是一件非常具有挑战性的工作，无论是从 Chrome 的 JavaScript 中传递对象给 Objective-C 或者单纯的接受来自 Node.js 中的回调结果，你都需要保证不同的代码对于通讯对象的期望之间的一致性。而本文即是在开发跨平台多终端的应用中，Slack 使用 TypeScript 来约束类型，从而避免意外的类型不一致导致的崩溃的实践经验分享。( https://parg.co/bRR )




- [《Node.js 中 Object Streams 的终极指南》](https://parg.co/bfV)：Node.js 中的流为我们提供了强大的功能，允许我们异步地处理输入与输出，或者在多个独立步骤中进行数据转换。而本文则是首先回顾了流相关的理论，然后介绍了如何像 Gulp 那样进行对象流的转换操作。( https://parg.co/bfV )



- [《在 Node.js 应用中如何使用 ESLint》](https://parg.co/bN4)：ESLint 是开源的 JavaScript Linting 工具，它能够帮助开发者解决 JavaScript 无类型语言本身带来的一些错误。ESLint 遵循组件化的设计思想，它允许开发者动态地设置使用的规则，而本文即是介绍基础的 ESLint 环境搭建与使用方法的文章。( https://parg.co/bN4 )



- [《8 小时内学习 Node.js》](https://parg.co/bNy)：Node.js 是基于 Google Chrome V8 引擎的 JavaScript 框架，其能够用于开发类似于视频直播、单页应用等 IO 密集型的 Web 项目。而本文则是提供了完整的从零到一的 Node.js 学习路线图，包含了基础的环境构建、Console 使用、核心模块使用、基本的 Web 服务器搭建等等内容。( https://parg.co/bNy )



- [《掌握 Node.js 核心模块之文件系统》](https://parg.co/bMj)：本文介绍 Node.js 核心模块中与文件系统、文件流等相关的部分，同时还介绍了实际开发中常用的第三方文件库。本文首先介绍了基本的读取与写入操作，然后介绍了权限控制、监听等功能，最后讨论了使用 graceful-fs、mock-fs、lockFile 等优秀的第三方库来辅助开发。( https://parg.co/bMj )




- [《使用 Electrino 减少近 99% 的应用大小》](https://parg.co/bM2)：Electro 是非常不错的利用 Web 技术开发跨平台桌面应用的运行时，不过其缺陷在于打包的应用中往往需要携带 Node.js 与 Chromium 的完整框架，导致了即使是最简单的 HelloWorld 应用也有近 115MB。而 Electrino 提供了类似于 Electron 的接口，不过使用系统自带的 Web 运行时来替代 Chromium，从而保证最后打包出来的应用仅有原来的 0.1% 大小。Electrino 适用于那些不依赖于操作系统本身功能的应用，项目也处于开发状态。( https://parg.co/bM2 )




- [《调试 Node.js 应用的最佳工具》](https://parg.co/bMB)：调试，也就是寻找与修复软件中存在问题的过程一直是 Node.js 项目构建过程中的挑战之一，而本文则是介绍了如何利用那些优秀的工具来辅助进行 Node.js 代码调试。本文首先介绍日志相关内容，恰当的日志能够帮助开发者在生产环境中迅速定位到错误所在；然后本文介绍了如何在开发环境中直接调试 Node.js 应用。( https://parg.co/bMB )




- [《Node.js 根本没有 float：浮点反序列化错误背后的故事》](https://parg.co/bMX)：在 Node.js 中，当我们把一个浮点数序列化，再反序列化，居然出错了，这是为什么呢？作者通过刨根问底的追查，发现 Node.js 根本没有 float！( https://parg.co/bMX )




- [《编写安全的 Node.js 代码》](https://parg.co/bVL)：本文是对于 Danny Grander 演讲的总结，他首先回顾了如何黑掉有漏洞的 Node.js 应用，同时也深度阐述了数个流行的 npm 包中存在的安全威胁；最后作者给出了修复这些漏洞以及在未来应用开发中保证 Node.js 代码安全性的建议。( https://parg.co/bVL )




- [《需要掌握的 Node.js Streams 相关知识》](https://parg.co/bJN)：Node.js steams 一直以来都被诟病难以理解与使用，近年来也有不少的开发者创建了封装库以便于使用 Node.js streams；不过本文追本溯源，着重于介绍 Node.js Streams 的基本语法并且理清常见的误解。本文首先以简单的利用 Stream 读取文件的例子来介绍 Stream 的概念，然后介绍了 Node.js 中四个流以及其具体实现方式。( https://parg.co/bJN )




- [《N-API：下一代编写 Node.js 原生模块的接口》](https://parg.co/bip)：Node.js 有着非常庞大而又生机勃勃的模块生态圈，这也是其一直保有活力与魅力的源泉。而现在的很多基于 C/C++ 编写的原生模块直接依赖于 V8 或者 NAN 接口，导致了它们缺乏稳定性的暴走，并且需要随着 Node.js 版本的更迭而不断变化或者重编译。而 N-API 则致力于解决这个问题，文本即是对于 N-API 的基本语法与当前状态的介绍。( https://parg.co/bip )




- [《Yarn 与 npm5 比较》](https://yarnpkg.com/blog/2017/05/31/determinism/)：随着 Node.js 8.0.0 一起发布的 npm 5.0.0 不仅在性能上得到了极大提升，还通过引入类似于 yarn.lock 的 package-lock.json 文件来实现所谓可确定的包管理。本文则是介绍了所谓可确定的包管理的具体含义，以及 yarn 与 npm5 各自不同的实现方式与优缺性的比较。( https://parg.co/bir ) 




- [《JavaScript 模块现状》](https://parg.co/bi0)：近日随着各大浏览器纷纷开始支持 ESM（ECMAScript Moduls），Node.js 中也计划引入 `*.mjs` 作为 ESM 的文件扩展名，关于 JavaScript 模块化的未来发展也在社区引发了热切讨论。本文则是首先介绍了 ESM 在浏览器、Webpack 等构件工具以及 Node.js 中未来的实现，然后讨论了个人对于 ESM 未来发展以及对于程序开发本身的潜在影响。( https://parg.co/bi0 )




- [《Node.js 8 中 util.promisify 介绍》](http://2ality.com/2017/05/util-promisify.html)：Node.js 8 为我们提供了新的工具函数 util.promisify()，它能够将某个基于回调的函数封装为基于 Promise 的函数。本文介绍了 util.promisify() 的基本使用，首先介绍了对于文件读取写入相关接口的封装使用，然后讨论了如何引入 async 语法，最后还介绍了自定义 promisify 函数的用法。




- [《你应该掌握的关于 Node.js 子进程的知识》](https://parg.co/bLq)：Node.js 最初以单进程单线程非阻塞方式提供了强大的性能表现，不过在目前多核时代下仅使用单进程已远远不能承载日益增长的应用压力。本文即介绍在 Node.js 中如何使用 spawn()、exec()、execFile()、fork() 等多进程相关模块的用法与各自的特点，依次介绍了使用 spawn 来创建实现了 EventEmit 接口的子进程、使用 exec 执行子命令、使用 fork 创建自带通信信道的子进程等。( https://parg.co/bLq )




- [16 行代码构建基于 Node.js 的天气应用](https://parg.co/byY)：本文是一篇浅显易懂的 Node.js 入门实践介绍，作者利用  Node.js 抓取来自 OpenWeatherMap 的开放数据并且打印在控制台中。本文依次介绍了如何注册并且获得 OpenWeatherMap 的 ApiKey、如何使用 npm 初始化项目、如何利用 request 抓取数据、如何优化命令行交互显示等等。( https://parg.co/byY  )




- [基于 Prometheus 的 Node.js 应用性能监控](https://parg.co/bed)：本文致力于帮助已有生产环境下 Node.js 应用的开发者，了解如何利用开源应用 Prometheus 搭建监测平台；Prometheus 为我们提供了强大的数据压缩与针对时序数据的快速查询功能。本文首先讨论了 Node.js 应用监控的设计理念与指标，然后对比了当前存在的几种监控解决方案的优缺点。最后介绍了如何在项目中引入 Prometheus，并且集成 Kubernetes、Grafana 等第三方插件；更多 Node.js 相关资料参考 [ https://parg.co/be0 ](https://parg.co/be0)。( https://parg.co/bed  )




- [扩展 Node.js 应用](https://parg.co/b1y)：Node.js 设计的初衷之一即是保证其可扩展性，本文则详细介绍了开发者应该了解的可用于扩展 Node.js 应用的内建工具。本文首先介绍了复制、分解、分割等常用的设计思想，然后讨论了如何利用 Node.js 内置的 Cluster 模块来保证应用的可扩展性与如何提供零停机重启的特性。


- [Node.js 实战第二版](https://github.com/azat-co/practicalnode)：该仓库是 Azat Mardan 的著作 Practical Node.js 第二版参考的开源发布地址，包含了十二个章节与相关的示范代码，非常值得一读。该书依次介绍了 Node.js 环境搭建与 Express.js 初探、基于 Mocha 的单元测试、模板引擎、数据持久化与性能优化、项目调试、部署与发布等章节；更多 Node.js 相关资料参考 [ https://parg.co/be0 ](https://parg.co/be0)。



- [使用 Apollo Server 快速开发基于 Node.js 的 GraphQL 服务端](https://parg.co/bWY)：Apollo Server 是由社区维护的开源 GraphQL 服务端，它支持目前主流的 Node.js HTTP 服务端框架：Express、Connect、Hapi、Koa、AWS Lambda、Restify 以及 Micro。本文首先介绍 Apollo Server 遵循着开放、简单、高性能的原则，然后介绍了基于 Express 的基础用法以及性能监控等内容；更多 GraphQL 相关资料参考 [ https://parg.co/b1e ](https://parg.co/b1e)。



- [swagger-decorator](https://parg.co/bWb)：swagger-decorator 是旨在一处注解多处使用的 JavaScript & Node.js 应用中实体类与方法注解库，其能够用于实体类生成与校验、Sequelize ORM 实体类生成、面向 Koa 的路由注解与 Swagger 文档自动生成的场景。




- [基于 Node.js 与 HTML5 的视频流](https://parg.co/bgP)：本文一步一步地介绍如何构建基础的 Node.js 接口，并且添加某个路由从而将视频文件发送给前端。本文首先介绍了 Node.js 中流的基础概念与如何获取文件体积、从文件创建流并且获取块的大小等基本 API，然后介绍了如何搭建服务器并且添加合适的路由以返回视频流，最后介绍了前端如何利用 HTML5 的 video 标签实现视频播放与控制；更多 Node.js 相关资料参考 [ https://parg.co/be0 ](https://parg.co/be0)。




- [Node.js 微服务实践](https://parg.co/bgu)：微服务架构目前正在大行其道，不过作者发现由于很多人有自己独到的见解，微服务架构的变种与复杂度在持续增加；作者则希望通过本文使初学者快速地利用 Node.js 开发出简单的微服务。本文首先介绍了微服务出现的背景以及微服务的五个原则：零配置、高冗余、可容错、自我修复、自动发现；然后介绍了使用 cote 这个微服务库一步一步地实现 Node.js 微服务集群，依次创建 Requester、Responder 等基础组件以最终实现系统中的几个相互依赖的模块。更多 Node.js 相关资料参考 [ https://parg.co/be0 ](https://parg.co/be0)。




- [Node.js 实践教程](https://github.com/ElemeFE/node-practice)：本教程是希望以一些有名的模块/功能为基础, 在实现的过程中讲解各项知识点，主要分为控制流、Web、存储等几个部分。目前完成的模块包括 async 介绍、Promise 实现、coroutine 实现、co 模块介绍、HTTP Client 实现、HTTP Server 实现等；更多 Node.js 相关资料参考 [ https://parg.co/be0 ](https://parg.co/be0)。




- [Node.js 如何解析 Form 上传？](https://parg.co/bF3)：NPM 和 GitHub 里的开源组件帮我们解决了很多繁琐的工作，但是也让我们失去了很多深入技术细节的机会。在现有组件无法满足我们需求的时候，就需要我们来自己动手丰衣足食了。 作者前段时间遇到了一个需要手动解析 Form 表单上传的机会，也借此为各位解析一下 Node.js 解析 Form 上传的实现细节。更多 Node.js 相关资料参考 [ https://parg.co/be0 ](https://parg.co/be0)。




- [利用 Node.js 构建 API Gateway](https://parg.co/b2l)：随着现代业务复杂度的增加，微服务的理念正在得到更多的落地实践；作为微服务架构的重要组成部分，API Gateway 能够为所有的后端服务提供统一的权限校验与客户端协议兼容的抽象层。本文首先介绍了微服务的基础架构与 API Gateway 的概念，然后介绍了面向前端团队的 Node.js API  Gateway 组成；接下来详细的分析了 API Gateway 的基础功能需求：路由与版本、迭代式设计、权限校验、数据聚合、数据序列化与反序列化、限流与缓存等等，最后讨论了基于 Express 的 API Gateway 的实现。更多 Node.js 相关资料参考[这里](https://parg.co/be0)。




- [利用 std/esm 在 Node.js 开发中使用 ES Modules](https://parg.co/bjg)：随着主流浏览器逐步开始支持 ES Modules 标准，越来越多的目光投注于 Node.js 对于 ESM 的支持实现上；Node.js 拟计划在 2020 年发布的 9.x 版本中引入内置的 ESM 支持。而近日正式发布的 @std/esm 为我们提供了高性能的 Node.js 中 CommonJS 与 ES Modules 模块间调用，其能够作用于 Node.js 4.x 以上版本；它能够顺滑地集成到现有的 Webpack、Babel 环境中，并且支持不同模块使用不同的依赖版本。不同于目前的解决方案需要是发布编译之后的 CommonJS 格式的文件，@std/esm 能够以最小的代价的、按需转化的、动态缓存的方式来进行源代码转化。更多 Node.js 相关资料参考[这里](https://parg.co/be0)。




- [你看到的 Node.js 权限校验指南可能都存在着错误](https://parg.co/b2o)：权限校验几乎是每个服务端应用程序的标配，本文作者在搜索学习 Node.js / Express.js 相关的权限校验教程时发现大部分都或多或少地存在着问题，因此编撰了这篇文章以提醒其他开发者。常见的误区可能包括凭证的存储方式、密码的重置策略、API Tokens 的生成与校验、限流等多个方面；更多 Node.js 相关资料参考[这里](https://parg.co/be0)。



# 开源项目



- [《pkg》](https://github.com/zeit/pkg)：pkg 能够将 Node.js 项目打包为单个可执行文件，其允许开发者发布商业级应用而不用担心源代码泄露的风险。pkg 会自动扫描你的 node_modules，然后将需要用到的本地内容打包到可执行文件中。( https://github.com/zeit/pkg  )




- [doppio](https://github.com/plasma-umass/doppio): doppio 是基于 TypeScript 0.5.0 版本编写的 Java 虚拟机（JVM），其支持 Node.js 6.0 以上版本，并且内置了 Java 8 JDK 环境；doppio 是个有趣的尝试打破浏览器语言栅栏的尝试，浏览其源代码也可以学习如何编写 Java 虚拟机。




- [notifme-sdk](https://github.com/notifme/notifme-sdk)：notifme-sdk 是用于简化通知发送流程的 Node.js 库，它允许我们灵活地集成邮件、短信、推送、WebPush 等不同的渠道来发送通知；notifme-sdk 还允许我们自由注册服务提供商，内建的 Fallback 与轮询机制也能进行简单的容错，同时 notifme-sdk 还提供了简单的 UI 控制台以方便我们仅界面化监控。




- [《使用 create-graphql-server 快速搭建 GraphQL 服务器》](https://parg.co/bfQ)：本文介绍了如何用几个简单的命令快速搭建 GraphQL 服务器，其使用 Node.js 作为应用后端、Mongodb 作为数据存储。( https://parg.co/bfQ )



- [《Caporal.js》](https://github.com/mattallty/Caporal.js)：特性全面的可用于创建 Node.js 命令行工具的框架，包括了帮助信息生成、自动补全等。 ( https://github.com/mattallty/Caporal.js )



# 延伸阅读



- [Node.js 学习与实践资料索引](https://parg.co/be0)


- [深入浅出 Node.js 全栈架构](https://parg.co/b2s)


- [前端每周清单半年盘点之 React 与 ReactNative 篇](https://zhuanlan.zhihu.com/p/28560073)

