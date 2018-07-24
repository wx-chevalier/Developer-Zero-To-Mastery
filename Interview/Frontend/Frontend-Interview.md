# 前端工程师面试

考察你的语法、原理等理解

（1）WebView/Cordova 的缺陷，或者说项目中碰到的瓶颈点有哪些？

体验不如原生，Android 上老版本的 WebView 性能较差；可以考虑打包单独的浏览器，并且将某些关键页面使用 Native 实现。

（2）对于 ES6 的认知，什么是变量提升？

ES6 弥补了传统 JavaScript 的缺陷，比如说变量的作用域、语法层面的赋值、定义等。面试者混淆了变量提升与词法作用域的概念。

（3）JavaScript 常见的异步写法，Promise.finally 的实现？

希望面试者能够已简单的抓取远程用户信息为例，实践几种常见的异步模式。面试者实现了基于 jQuery get 函数的抓取机制，返回了 Promise。面试者回答：Promise 内部包含了三个状态，不同状态间的转换会触发不同的 Callback。

面试者在实现过程中感觉缺乏 ESLint 规范实践，实现了基础原型。

（4）React 的设计理念，其与 jQuery, Vue.js 的区别

面试者回答：React 的核心是用 Virtual DOM 替代原有的 DOM 操作，实现了自己的事件系统，是单向数据流。jQuery 主要还是在操作 DOM，Vue.js 的部分理念来自于 React（X），Vue.js 的数据流默认为双向数据流。对于 React 组件系统、调和算法等认知不多。

（5）React 常见设计模式有哪些，手写 HOC

面试者对常见的 React 设计模式不太熟悉，回答较慢。面试者回答：高阶组件，利用高阶函数帮我们提取公共方法，来创造组件。要求面试者实现简单的处理加载状态的 HOC，面试者还是使用类似于 createClass 这样传统的写法。

（6）Redux 的设计理念，其与 Flux 的区别

面试者表示没了解过 Flux，Redux 是为了解决跨层级的 React 组件间数据传递问题，通过抽取单一的数据中心与触发 Action 来更新。面试者对于函数式编程、纯函数等理解感觉不深。

（7）Redux 常见的异步处理机制，简单的 Thunk 组件实现

通过中间件拦截的方式来处理异步 Action，常见的异步库包括 redux-thunk，redux-sagas。对于 Sagas 的具体使用也不太熟悉，对于中间件的机制和实现基本不了解。

缺陷，面试者使用 CoffeeScript 较多，对于 ES6、fetch 等缺乏理解或者应用，对于 React 的认知也较为停留在表面，缺乏实践，对于 Redux 的认知与实践也不多。

## React

- 生命周期
- setState
- did
- HOC 手写
- 受控和非受控 手写
- 新特性
- Context
- 父子组件通信

## Redux

- middleware
- redux-thunk

## webpack

- 开源，动机，贡献者
- 换肤
- chunk

# 面试记录

## js

- slice & splice

## es6

- Symbol
- Promise

```
new Promise(() => console.log(1));
new Promise(() => console.log(2));
new Promise(() => console.log(3));
```

- geneartor, iterator, iteratable
- const let
- class

## eslint

- 配置
- 忽略哪些

## webpack

- amd, cmd, commonjs
- webpack chunk
- webpack1 -> webpack2

## css

- display none; visibility; opacity

## less

- mixin
- 局部变量

# jQuery

- 事件委托
- 父子包含关系

## React

- 生命周期
- setState
- did
- HOC
- 受控和非受控

## 瞎扯

- lodash
- async await
- koa
- antd

# JavaScript

## 数组操作与变换

map/reduce/filter 都是开发中常用的函数。

- 使用 reduce 进行数组扁平化

```js
```

# JavaScript

## 代码阅读

[fbjs](https://github.com/facebook/fbjs)

# DOM

# React
