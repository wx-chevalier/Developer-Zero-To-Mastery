<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [编程基础](#%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80)
  - [Java](#java)
    - [字符串处理](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86)
    - [集合类型](#%E9%9B%86%E5%90%88%E7%B1%BB%E5%9E%8B)
    - [流程控制](#%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6)
      - [分支循环](#%E5%88%86%E6%94%AF%E5%BE%AA%E7%8E%AF)
      - [运算符](#%E8%BF%90%E7%AE%97%E7%AC%A6)
      - [异常处理](#%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86)
    - [并发编程](#%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B)
      - [锁](#%E9%94%81)
      - [内置的线程安全模型](#%E5%86%85%E7%BD%AE%E7%9A%84%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E6%A8%A1%E5%9E%8B)
    - [JVM内部原理](#jvm%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86)
  - [JavaScript](#javascript)
    - [常用数据类型](#%E5%B8%B8%E7%94%A8%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
    - [函数与闭包](#%E5%87%BD%E6%95%B0%E4%B8%8E%E9%97%AD%E5%8C%85)
    - [面向对象:原型继承与this](#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%8E%9F%E5%9E%8B%E7%BB%A7%E6%89%BF%E4%B8%8Ethis)
- [CS通识](#cs%E9%80%9A%E8%AF%86)
  - [操作系统](#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)
  - [网络](#%E7%BD%91%E7%BB%9C)
  - [并发编程](#%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B-1)
- [数据结构与算法](#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95)
- [Web前端开发](#web%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91)
  - [JavaScript基础](#javascript%E5%9F%BA%E7%A1%80)
  - [HTML+CSS基础](#htmlcss%E5%9F%BA%E7%A1%80)
  - [常用框架与类库](#%E5%B8%B8%E7%94%A8%E6%A1%86%E6%9E%B6%E4%B8%8E%E7%B1%BB%E5%BA%93)
    - [React](#react)
  - [常用构建工具](#%E5%B8%B8%E7%94%A8%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7)
    - [Webpack](#webpack)
  - [Web网络安全](#web%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8)
    - [SQL注入](#sql%E6%B3%A8%E5%85%A5)
    - [XSS](#xss)
    - [CSRF](#csrf)
    - [WebShell](#webshell)
- [服务端应用程序](#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)
  - [API层](#api%E5%B1%82)
  - [应用层](#%E5%BA%94%E7%94%A8%E5%B1%82)
    - [Spring](#spring)
      - [Bean](#bean)
    - [Express](#express)
      - [AOP](#aop)
- [基础架构与大数据](#%E5%9F%BA%E7%A1%80%E6%9E%B6%E6%9E%84%E4%B8%8E%E5%A4%A7%E6%95%B0%E6%8D%AE)
  - [数据存储](#%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8)
    - [MySQL](#mysql)
    - [Redis](#redis)
      - [Redis基础数据结构](#redis%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
      - [Redis集群](#redis%E9%9B%86%E7%BE%A4)
      - [Redis底层架构](#redis%E5%BA%95%E5%B1%82%E6%9E%B6%E6%9E%84)
      - [Redis调优](#redis%E8%B0%83%E4%BC%98)
  - [Hadoop Ecosystem](#hadoop-ecosystem)
    - [HDFS](#hdfs)
    - [MapReduce](#mapreduce)
    - [HBase](#hbase)
    - [Hive](#hive)
  - [Virtualization](#virtualization)
- [面试随笔](#%E9%9D%A2%E8%AF%95%E9%9A%8F%E7%AC%94)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

> 本文正在逐步完善中，为了保证文章的整体性请务必不要在笔者宣告完成之前擅自转载，谢谢。
> 因为笔者主要投递的方向是Web前端开发与服务端应用程序/大数据分析开发这两个方向，对于iOS、Android、C++、机器学习算法涉及不多，不过它山之石，可以攻玉，如果你在目录中发现感兴趣的部分也欢迎阅读相关部分。另外，如果有涉及iOS、Android、C++、机器学习算法与本文类似的提纲挈领的文章也很欢迎推荐，经原作者允许可以在本文添加外链以方便大家知识共享。另外，需要实现说明的是，本文以校招时笔者水准，对于很多知识点并不能深入，若有谬误烦请包涵指正。

# 编程基础
## Java
关于此部分的详细索引可以参考笔者的[Java入门与最佳实践](https://github.com/wxyyxc1992/WXJavaToolkits)系列文章。
### 字符串处理
### 集合类型

### 流程控制
#### 分支循环
Java中Switch可以使用String作为校验值，不过是在1.6之后才添加进来的，并且只能使用`hashCode`作为校验值。
#### 运算符
#### 异常处理
### 并发编程
#### 锁
#### 内置的线程安全模型
### JVM内部原理
关于JVM部分的详细索引可以参考笔者的[JVM入门与最佳实践](https://github.com/wxyyxc1992/WXJavaToolkits#jvmjava-virtual-machine)

## JavaScript
关于JavaScript部分的详细索引可以参考笔者的[JavaScript入门与最佳实践](https://github.com/wxyyxc1992/web-frontend-practice-handbook#javascript)

### 常用数据类型
### 函数与闭包
### 面向对象:原型继承与this

# CS通识
## 操作系统
## 网络
## 并发编程
# 数据结构与算法

笔者也是本次校招开始之后短短月余的时间才开始刷题，如果只是为了应付校招多学点套路也能说得过去，但是刷题本身的热趣确实挺有意思。关注笔者的博客或者Github的朋友应该知道，笔者过去几年里一直以工程应用于产品开发为重，老实说，很多时候解决真实场景下的问题需要动的脑子不如做几个算法题，可能带来的成就感也见仁见智。

以华为为例，还有一种常见的OJ题目便是场景题，并不需要多么复杂的算法设计与考虑，而主要考察你对于用户需求的理解与具体编程能力、编程的精细度与代码掌控力的探查。

# Web前端开发
## JavaScript基础
## HTML+CSS基础
## 常用框架与类库
### React
## 常用构建工具
### Webpack
## Web网络安全
这部分可以参考笔者的[信息安全系列文章](https://github.com/wxyyxc1992/infosecurity-handbook)，如果对Web网络安全基础想要有个了解可以阅读[笔者翻译的Martin Fowler的Web应用安全基础](https://segmentfault.com/a/1190000004983446)。

### SQL注入
### XSS
### CSRF
### WebShell

# 服务端应用程序
## API层
## 应用层
### Spring 
#### Bean
- 远程Bean的构建

### Express

#### AOP

# 基础架构与大数据
## 数据存储
### MySQL
### Redis
关于Redis部分的详细知识点可以参考笔者的[Redis入门与最佳实践](https://github.com/wxyyxc1992/infrastructure-handbook#redis)

#### Redis基础数据结构
#### Redis集群
#### Redis底层架构
#### Redis调优
## Hadoop Ecosystem
笔者在这里并没有列举Spark/Storm/Flink这些，感觉这些针对性可能更强一点，如果大家觉得这部分也有很大的必要列入清单请留言。

### HDFS
### MapReduce
### HBase
### Hive

## Virtualization

# 面试随笔
一般而言，准备的充分应付笔试应该绰绰有余，不要像笔者这样在校招开始之后才猛然发现自己两手空空的奔赴战场，被打个手足无措就好。笔试之后即是面试，从笔者自己的经验来看，面试一定要掌握好节奏。笔者自己原来创业或者带团队的时候也经常招聘面试别人，如果你的简历一穷二白，或者千篇一律，毫无特色，那么面试官也是觉得很难做的，只能按照程序化的东西问题。面试官更想了解的是你做过啥，那么我们应该尽可能地寻找机会去展示自己会的东西。譬如如果问你Log4j的用法，那么在标准回答之后可以适当扩展，从经典的基于ELK的日志处理到基于Flume、HDFS、Hive这一系列的日志处理方案或者基于Kafka+Flink的实时日志处理，应该尽可能地去回答自己懂的东西。瑕不掩瑜，那也要尽可能地去将自己的闪光点展示出来。