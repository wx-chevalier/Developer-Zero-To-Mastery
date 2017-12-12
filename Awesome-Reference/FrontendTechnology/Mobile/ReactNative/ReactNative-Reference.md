[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 

# ReactNative 学习与实践资料索引


## Overview

- [2016-Writing Cross-Platform Apps with React Native](https://www.infoq.com/articles/react-native-introduction)

- [2017-Comparing the Performance between Native iOS (Swift) and React-Native](https://medium.com/the-react-native-log/comparing-the-performance-between-native-ios-swift-and-react-native-7b5490d363e2#.azcqq063o)

- [React Native 学习指南【Collection】](https://github.com/reactnativecn/react-native-guide) 

- [2017-React Native vs Real Native Apps](https://parg.co/U6A): This post is targeted to highlight the theoretical as well as practical aspects of using React Native in comparison with the Swift.

# Tutorial

- [2016-React Native Training](https://unbug.gitbooks.io/react-native-training/content/)

- [react-native-socket-io-example](https://github.com/vinnyoodles/react-native-socket-io-example)

- [2017-Build an Imgur App with React Native and MobX](http://school.shoutem.com/lectures/build-simple-imgur-client-react-native/)

- [React Native Styling Cheat Sheet](https://github.com/vhpoet/react-native-styling-cheat-sheet#text) 

- [2017-React Native: developing using best practices](https://parg.co/beC): I am one of those who felt in love at first sight with it, so I will try to find out the best practices that should be applied to a React Native project in order to have an understandable, easily maintainable and scalable, and highly performant mobile app.

## Quick Start: 开发环境搭建与调试

- [Create React Native App #Project# ](http://6me.us/PIszU): Create a React Native app on any OS with no build config.

- [Expo](https://expo.io/): Expo lets web developers build truly native apps that work across both iOS and Android by writing them once in just JavaScript.

- [Pepperoni](https://github.com/futurice/pepperoni-app-kit): Futurice React Native Starter Kit

- [SnowFlake](https://github.com/bartonhammond/snowflake): A React-Native Android iOS Starter App/ BoilerPlate / Example with Redux, RN Router, & Jest with the Snowflake Hapi Server running locally or on RedHat OpenShift for the backend, or a Parse Server running locally or remotely on Heroku

- [2017-VSCode for React Native](https://medium.com/@Kelset/vscode-for-react-native-526ec4a368ce): An opinionated list of extensions to get the most out of it.

- [2017-GitPoint](https://github.com/gitpoint/git-point): GitHub for iOS. Built with React Native.

## Case Study: 案例分析

- [GitBook 阅读器](https://github.com/le0zh/gitbook-reader-rn)：使用  ReactNative 开发的 GitBook 阅读器，可以查看在线的书籍信息，在线阅读和下载。

- [BBCNews-React-Native](https://github.com/joeltrew/BBCNews-React-Native)


- [f8app](https://github.com/fbsamples/f8app)

- [react-native-gitfeed](https://github.com/xiekw2010/react-native-gitfeed)

- [react-native-nba-app](https://github.com/wwayne/react-native-nba-app)


## Book

- [2016-Learning React Native #Book#](https://www.safaribooksonline.com/library/view/learning-react-native/9781491929049/preface01.html#idp116000)：[本书的附带的很多教学代码，还是很不错的](https://github.com/bonniee/learning-react-native)。

- [2017-React and React Native #Book#](https://parg.co/beh): Use React and React Native to build applications for desktop browsers, mobile browsers, and even as native mobile apps.

- [beginning-mobile-app-development-with-react-native](https://leanpub.com/beginning-mobile-app-development-with-react-native?a=0_dCaHBbnEiR_Uy2Ihm_Wk) 

# Component Syntax: 组件基础

## Style: 组件样式


- [2016-Tips for styling your React Native apps](https://parg.co/beN): In this post I’ll go through a series of techniques for “theming” your react native application.


# EPractices


## Performance

- [performance-limitations-of-react-native-and-how-to-overcome-them](https://medium.com/@talkol/performance-limitations-of-react-native-and-how-to-overcome-them-947630d7f440#.oftytc7lc)


- [2017-I made React Native fast, you can too](http://6me.us/3Yx9): The purpose of this article is to walk you through how you can use Native tools to track down and fix performance issues in your React Native app.


- [携程是如何做React Native优化的](https://zhuanlan.zhihu.com/p/23715716)
 
- [2016-React Native痛点解析之性能调优](http://www.infoq.com/cn/articles/react-native-performance-tuning)：自从React Native出世，虽然官方一直尽可能的优化其性能，为了能让其媲美原生App的速度，但是现实感觉有点不尽人意。接下来介绍下实践中遇到的一些性能问题以及优化方案。以下对性能参数的依据是来自于React Native自带的FPS Monitor.。

- [Moving Beyond Animations to User Interactions at 60 FPS in React Native](https://hackernoon.com/moving-beyond-animations-to-user-interactions-at-60-fps-in-react-native-b6b1fa0ba525#.s9qc4wo93): The async nature of the React Native bridge incurs an inherent performance penalty, preventing JavaScript code from running at high framerates. Modern animation libraries, like Animated, address this by minimizing passes over the bridge. User interactions, where UI continuously reacts to the user’s gestures, are a step further. How can we run those at 60 FPS?

- [5 ways we improved our React Native app](https://parg.co/b93): A real world scenario of enhancing performances.

- [2017-React Native Performance in Marketplace](https://parg.co/b2F)


## CrossPlatform

- [2016-React-Web-Intro](http://taobaofed.org/blog/2016/03/11/react-web-intro/)
 
- [Ways to pass objects between native and JavaScript in React Native](https://parg.co/bQj) 

- [2017-React Native Performance — An Updated Example](https://hackernoon.com/react-native-performance-an-updated-example-6516bfde9c5c): I’m working on my performance talk for React Amsterdam 2017, which is based on the post “Performance Limitations of React Native and How to Overcome Them”. I’ve decided to freshen up the example we’ll be discussing in order to walk through some exciting new API available today.

- [2017-React Native for Web #Project# ](https://github.com/necolas/react-native-web): React Native components and APIs for the Web.


## Production

- [2017-React Native 拆包及热更新方案](http://solart.cc/2017/02/22/react-native-jsbundle_patch)：随着 React Native 的不断发展完善，越来越多的公司选择使用 React Native 替代 iOS/Android 进行部分业务线的开发，也有不少使用 Hybrid 技术的公司转向了 React Native 。要说 React Native 最能吸引开发者的地方那就是其拥有前端的开发速度以及原生的体验。


- [2017-11 mistakes I’ve made during React Native / Redux app development](https://parg.co/bQS):  After working almost a year with React Native I decided to describe mistakes that I’ve made while being a beginner.

- [2017-Powering UberEATS With React Native and Uber Engineering](https://eng.uber.com/ubereats-react-native/) 


# UI 

- [How to make your React Native app respond gracefully when the keyboard pops up](http://6me.us/yQU)


- [Responsive UIs in React Native](https://parg.co/baT): This is true even for libraries that address the topic of responsive design: they assume that the dimensions of the window won’t change over time.


## List



- [2016-Custom Pull to Refresh Animations in React Native](https://parg.co/bXO) 

- [2016-Building infinite scroll in React Native](http://frontside.io/blog/2016/12/15/building-infinite-scroll-in-react-native.html)


- [2017-Building a great scrollable list in React Native with FlatList](https://parg.co/bXs) 

- [2017-How to use the FlatList Component — React Native Basics](https://parg.co/bXQ): Since v0.43 of React Native we’ve had access to two new list views, the FlatList and the SectionList. Today we will take a look at how to use the FlatList component.



## Pattern Library

- [9-libraries-to-consider-for-your-next-react-native-project](https://medium.com/@bilalbudhani/9-libraries-to-consider-for-your-next-react-native-project-723f179d4764#.rtqlr8rid)

- [react-native-wechat](https://github.com/weflex/react-native-wechat)

- [react-native-pushy](https://github.com/reactnativecn/react-native-pushy)

- [code-push](https://github.com/microsoft/code-push)

- [2017-react-native-interactable](https://github.com/wix/react-native-interactable): Experimental implementation of high performance interactable views in React Native.

- [react-native-offline-utils](https://github.com/rauliyohmc/react-native-offline-utils): Handy toolbelt to deal nicely with offline/online connectivity in a React Native app. Smooth redux integration.


- [React Navigation](https://github.com/react-community/react-navigation): React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution.

- [2017-kittenTricks](https://github.com/akveo/kittenTricks): A react native mobile starter kit with over 40 screens and theme hot reload support.




# Core: 核心原理

- [2016-React Native 运行原理解析 ](http://blog.csdn.net/xiangzhihong8/article/details/52623852)：Facebook 于2015年9月15日推出react native for Android 版本， 加上2014年底已经开源的IOS版本，至此RN （react-native）真正成为跨平台的客户端框架。本篇主要是从分析代码入手，探讨一下RN在安卓平台上是如何构建一套JS的运行框架。

- [2016-从 iOS 视角解密 React Native 中的线程](http://mp.weixin.qq.com/s/5a83ubJtdg9oJP0lHXeRNA): 在 iOS 开发中，一谈到线程管理，肯定离不开 GCD（Grand Central Dispatch）与 NSOperation/NSOperationQueue 技术选型上的争论。但是 RN 在线程管理是如何选用 GCD 和 NSOperation 的？带着此问题，一起从组件中的线程、JSBundle 加载中的线程以及图片组件中的线程三个方面，逐步看看其中的线程管理细节。


- [2017-20 分钟理解 React Native For Android 原理](http://6me.us/nNgd) 


## Node

- [2017-React Native Node](https://github.com/staltz/react-native-node): Run a separate Node.js process behind a React Native app


# EPractices
## 技术选型

- [2017-How We Built Our React Native App](https://parg.co/bDM): An ideal mobile application should be an extension of the mobile web instead of being a replacement.

