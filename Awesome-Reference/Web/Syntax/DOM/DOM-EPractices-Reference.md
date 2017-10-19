


# DOM 工程实践资料索引

# Storage



- [2017-Web Cache - Everything you need to know](http://kamranahmed.info/blog/2017/03/14/quick-guide-to-http-caching/?rd=1): This is one is going to be specifically about the caching.

- [Offline Storage for Progressive Web Apps](https://medium.com/dev-channel/offline-storage-for-progressive-web-apps-70d52695513c#.19w8r1c4o)
 

- [Lovefield](https://google.github.io/lovefield/):Relational Database With Schema


- [LokiJS](https://github.com/techfort/LokiJS):in Memory Database



- [localForage](https://github.com/localForage/localForage)



- [RxDB](https://github.com/pubkey/rxdb):The reactive, serverless, client-side, offline-first database for your next javascript-application.




## Cookie

- [cookie规范（RFC 6265）翻译](https://github.com/renaesop/blog/issues/4)



## History & Cache: 历史记录与缓存


- [2017-ultra-router【Project】](https://github.com/gt3/ultra-router): Router for component-based web apps. Pair with React or <BYOF />.


# Network






## fetch



- [Fetch 进阶指南](http://louiszhai.github.io/2016/11/02/fetch/): Fetch 是 web异步通信的未来. 从chrome42, Firefox39, Opera29, EdgeHTML14(并非Edge版本)起, fetch就已经被支持了. 其中chrome42~45版本, fetch对中文支持有问题, 建议从chrome46起使用fetch.


## CORS



- [2017-CORS — a guided tour](https://parg.co/bOF): Cross-origin resource sharing

- [前端解决跨域问题的8种方案（最新最全）](http://www.tuicool.com/articles/ENZbEvi)

- [JavaScript 四种跨域方法](http://segmentfault.com/a/1190000003642057?utm_source=tuicool)

- [同源策略和跨域访问](http://blog.csdn.net/shimiso/article/details/21830313)

- [前端跨域的整理 ](http://qiutc.me/post/cross-domain-collections.html?utm_source=tuicool&utm_medium=referral)

- [MDN-HTTP访问控制(CORS)](https://parg.co/UGw)

## 实时通信



- [巨头们关注的实时Web：发展与相关技术](https://parg.co/UGB)：我们生活在一个实时（real-time）的世界中，因此Web的最终最自然的状态也应当是实时的。用户需要实时的沟通、数据和搜索。我们对互联网信息实时性的要求也越来越高，如果信息或消息延时几分钟后才更新，简直让人无法忍受。现在很多大公司（如Google、Facebook和Twitter）已经开始关注实时Web，并提供了实时性服务。实时Web将是未来最热门的话题之一。


- [CometD](https://github.com/cometd/cometd)


- [浏览器与服务器的消息通信](http://blog.brucefeng.info/post/brower-server-msg)
## 文件传输




- [前端实现文件的断点续传](http://www.tuicool.com/articles/neUzAbB)





# DOM Extension: DOM 扩展


## DataBinding: 数据绑定



- [Angular沉思录（一）数据绑定](https://github.com/xufei/blog/issues/10)

- [双向绑定的简单实现——基于“脏检测”](https://parg.co/bOW)：本文基于“脏检测”机制实现一个简单的双向绑定。若您对如何使用ES5的getter/setter实现动态数据绑定较为感兴趣，可移步至双向绑定的简单实现——基于ES5对象的getter/setter机制。

- [前端模板的原理与实现](http://www.tuicool.com/articles/Q73Ubym)

- [开发vue（或类似的MVVM框架）的过程中，需要面对的主要问题有哪些？](https://www.zhihu.com/question/53176471/answer/134004234)

- [250行实现一个简单的MVVM](https://zhuanlan.zhihu.com/p/24475845)


- [如何监听 js 中变量的变化?](https://www.zhihu.com/question/44724640)

- [2017-如何监听页面 DOM 变动并高效响应](https://hijiangtao.github.io/2017/08/03/How-to-Manipulate-DOM-Effectively/)


## VirtualDOM



- [2015-The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/): React attacks us with the virtual DOM right away, on the main page. This feature seems to be very important!

- [2015-ReactJS | Learning Virtual DOM and React Diff Algorithm](http://www.oyecode.com/2015/09/reactjs-learning-virtual-dom-and-react.html)

- [2015-深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)：本文会在教你怎么用 300~400 行代码实现一个基本的 Virtual DOM 算法，并且尝试尽量把 Virtual DOM 的算法思路阐述清楚。希望在阅读本文后，能让你深入理解 Virtual DOM 算法，给你现有前端的编程提供一些新的思考。


- [2016-知乎问答-网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？](https://www.zhihu.com/question/31809713/answer/53544875)

- [2017-饿了么-对 Virtual-DOM 的一些理解](https://zhuanlan.zhihu.com/p/25630842)

- [2017-The Inner Workings Of Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf#.or5425hja): In this blog, I’ll take a simple example and go over various scenarios to give you an idea as to how they actually work.
- 实现：[virtual-dom](https://github.com/Matt-Esch/virtual-dom)，[how-to-write-your-own-virtual-dom](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060#.59fqwanqa)，[simple-virtual-dom](https://github.com/livoras/simple-virtual-dom)

- Benchmark: [Virtual DOM Benchmark](http://vdom-benchmark.github.io/vdom-benchmark/), [how-to-win-in-web-framework-benchmarks](https://medium.com/@localvoid/how-to-win-in-web-framework-benchmarks-8bc31af76ce7#.h3nedvhr5)

- [2017-asm-dom【Project】](https://github.com/mbasso/asm-dom/blob/master/README.md): A minimal WebAssembly virtual DOM to build C++ SPA (Single page applications)


## JSX

- [2017-dom-chef【Project】](https://github.com/vadimdemedes/dom-chef): Build DOM elements using JSX automatically.


