# 编程之道，从代码到软件系统

十年前，当笔者写下第一行 Hello World 时，仿佛已经抓住了整个世界；十年后，我还是在门口徘徊。本节主要以感性地方式去讨论笔者思索的，所谓编程到底难在哪，这个 “Little Problem”。

编程的本质，是用某些可复用，可组合的逻辑元素，去对现实建模。

# 编程能力

## 熟练使用

编程，首先都是从学习编程语言的基本知识学起的，不论是什么编程语言，有很多共同的基本知识，例如怎么写第一个 Hello World、if/while/for、变量等，因此我比较建议在刚刚开始学一门编程语言的时候，还是就看看编程语言自己的一些文档就好，而不要上来就去看一些高阶的书。除了看文档以外，编程是个超级实践的活，所以一定要多写代码，只有这样才能真正熟练起来。

## 解决问题

在写代码的过程中，出问题是非常正常的，怎么去有效且高效的排查问题，是程序员群体中通常能感受到的大家在编程能力上最大的差距，解决问题能力强的基本很容易在程序员群体里得到很高的认可，在查问题的能力上，首先要掌握的是一些基本的调试技巧，好用的调试工具。除了调试技巧和工具外，查问题的更高境界会和编程能力的高级阶段有非常大的关系，就是懂原理，一个懂原理的程序员在查问题的水平上是有明显差距的。除了查问题外，更厉害的程序员是在写代码的过程就会很好的去避免问题，大家最容易理解的就是在写代码时处理各种异常情况，但这里通常也是程序员们很大的差距的地方，写一段正向逻辑的代码，大部分情况下即使有差距，也不会太大，但在怎么很好的处理这个过程中有可能出现的异常上，这个时候的功力差距会非常明显，很多时候一段代码里处理异常逻辑的部分都会超过正常逻辑的代码量.

## 懂高级 API 和原理

例如学 Java NIO，可以自己基于 NIO 包一个框架，然后对比 Netty，看看哪些写的是不如 Netty 的，这样会非常有助于真正的理解。

## 系统设计能力

除了少数程序员会进入专深的领域，例如 Linux Kernel、JVM，其他多数的程序员除了编程能力的成长外，也会越来越需要在系统设计能力上成长。通常一个编程能力不错的程序员，在一定阶段后就会开始承担一个模块的工作，进而承担一个子系统、系统、跨多领域的更大系统等。

思考与行动分离，一时只做一件事

专注于重要且紧急的事情

少做杂事

# 语言、范式与模式

> Programmers who program “in” a language limit their thoughts to constructs that the language directly supports. If the language tools are primitive, the programmer’s thoughts will also be primitive.
>
> Programmers who program “into” a language first decide what thoughts they want to express, and then they determine how to express those thoughts using the tools provided by their specific language.
>
> -- Steve McConnell’s Code Complete

在笔者过去的工作中，曾经多次被语言“绑架”而导致在技术选型上的巨大失败，最终衍化为了产品、商业竞争力上的乏力。

多范式编程（Multi-Paradigm Programming）和最小表达力原则（Least Expressiveness Principle）

# 架构与复杂性控制

# 性能与高可用

首先是算法。

# 研发效能
