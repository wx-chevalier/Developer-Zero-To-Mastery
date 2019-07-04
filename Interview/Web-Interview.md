# Web Interview | Web 面试题集锦

[Web Interview]() 是 [Awesome Interviews]() 系列的组成，涵盖了笔者在日常积累中总结而来的可成为面试题的知识要点与场景案例。

本文所提及的问题皆可在下列文档矩阵中寻找到解答，请自行索引。

# 语法基础

## JavaScript & TypeScript

- V8 引擎中的对象与数组是如何存储的？为何 JS 的数组每个数据类型都可以不一样？为何 JS 的数组无需提前设置长度，是可变数组？为何数组可以像 Object 一样挂载任意属性？如果浏览器需要进行大规模数组运算，应该选择怎样的存储结构？

- Event Loop 的基础概念是否了解？浏览器中的 Event Loop 与 Node.js 中的 Event Loop 有何区别？

- 如何在 TypeScript 中设计简单的 IoC & DI 框架？如何实现简单的接口注解以自动生成类 Swagger 文档？

## DOM

## CSS

# 工程实践

## 客户端可用性

- 如何设计一个客户端错误上报系统？应该如何捕获常见的浏览器错误？

- 如果设计一个客户端实时录屏系统，可能的技术挑战点会在哪里？应该如何去设计前后端架构？

## 架构优化

- 简单概述浏览器工作原理，即从用户输入某个 URL 开始到渲染，经历了哪些主要的步骤？浏览器的核心组件包含哪些？

- 如何设计一个 JavaScript 应用沙箱？

# Framework | 框架

## React & React Native

- 为何在 JSX 或者 TSX 的文件首部需要引入 React？

- 在 Antd 中如何实现主题切换的特性，如何在单个项目中打包多个不同版本的 Antd？

- Hooks 函数式组件与类组件相比各有何优劣？

- 猜想一下，React DevTools 是如何监听 React 的状态变化？

## Vue

- v-if 指令是如何实现的？

## Redux & MobX

- 为什么 Redux 的 Store 会使用不可变数据类型？

- Redux 中的 Reducer 为何要设置为纯函数？常见的 Side Effects 应当在哪个模块中处理？

- Redux 的中间件是如何实现的？如何在 Redux 中实现简单的 Promise 中间件？

- Redux Sagas 为何要使用 Generator？put, get 等函数的原理是什么？其是如何处理 Effects 的？

- MobX 是如何实现响应式监听的？MobX 与 Redux 相比其适用场景、工程案例上有何差异？
