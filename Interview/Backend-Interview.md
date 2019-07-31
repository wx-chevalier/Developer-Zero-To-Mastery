# Backend Interview | 服务端开发面试题集锦

[Backend Interview]() 是 [Awesome Interviews]() 系列的组成，涵盖了笔者在日常积累中总结而来的可成为面试题的知识要点与场景案例。

本文所提及的问题皆可在下列文档矩阵中寻找到解答，请自行索引。

全局唯一有序 ID。 snowflake ，timestamp 加前面，然后后面加机器 id 等冯诺依曼体系
shell 命令的执行过程信息熵程序运行中的栈式结构，栈溢出攻击
TCP/IP 有关知识。TCP 传输层加端口号，IP 网络层加 ip 地址；路由器就主要工作在 IP 网络层同步与阻塞并行与并发
Java 线程的本质，内核线程与用户线程，线程调度，并行级别内核态与用户态，中断
CPU 与内存与磁盘缓存行与伪共享内存分配管理，段页式。jemalloc

Java 程序的运行原理普通可执行程序的运行原理缓存行与伪共享。两个面试官都问，可见十分重要，还好都答出来了从浏览器发出请求开始，到服务端应用接受到请求为止的过程
HashMap ，hash 碰撞，hash 算法的优化单点登录正向代理与反向代理反爬机制，爬虫模拟浏览器行为
cglib 方法拦截动态代理依赖注入
Servlet 的本质
TCP 长连接。心跳包，websocket
Netty 百万级长连接优化
DSL 解析到 AST 。lexer 和 parser
JVM 相关。(你读过 GC 相关源码吗？)代码规范，包命名规范大学里最有成就感的事读过的 Java 书籍。(四大名著之类)

后端清单全局唯一有序 ID。 snowflake ，timestamp 加前面，然后后面加上机器 id 等冯诺依曼体系
shell 命令的执行过程信息熵程序运行中的栈式结构，栈溢出攻击
TCP/IP 有关知识。TCP 传输层加端口号，IP 网络层加 ip 地址；路由器就主要工作在 IP 网络层同步与阻塞并行与并发
Java 线程的本质，内核线程与用户线程，线程调度，并行级别内核态与用户态，中断
CPU 与内存与磁盘缓存行与伪共享内存分配管理，段页式。jemalloc
Java 程序的运行原理普通可执行程序的运行原理缓存行与伪共享。两个面试官都问，可见十分重要，还好都答出来了从浏览器发出请求开始，到服务端应用接受到请求为止的过程
HashMap ，hash 碰撞，hash 算法的优化单点登录正向代理与反向代理反爬机制，爬虫模拟浏览器行为
cglib 方法拦截动态代理依赖注入
Servlet 的本质
TCP 长连接。心跳包，websocket
Netty 百万级长连接优化
DSL 解析到 AST 。lexer 和 parser
JVM 相关。(你读过 GC 相关源码吗？)代码规范，包命名规范收集箱

4、微服务的高可用怎么保证的？

5、常用的负载均衡，该怎么用，你能说下吗？

6、网关能够为后端服务带来哪些好处？

7、Spring Bean 的生命周期

8、xml 中配置的 init、destroy 方法怎么可以做到调用具体的方法？

9、反射的机制

10、Object 类中的方法

11、hashcode 和 equals 方法常用地方

12、对象比较是否相同

13、hashmap put 方法存放的时候怎么判断是否是重复的

14、Object toString 方法常用的地方，为什么要重写该方法

15、Set 和 List 区别？

16、ArrayList 和 LinkedList 区别

17、如果存取相同的数据，ArrayList 和 LinkedList 谁占用空间更大？

18、Set 存的顺序是有序的吗？

19、常见 Set 的实现有哪些？

20、TreeSet 对存入对数据有什么要求呢？

21、HashSet 的底层实现呢

22、TreeSet 底层源码有看过吗？

23、HashSet 是不是线程安全的？为什么不是线程安全的？

24、Java 中有哪些线程安全的 Map？

25、Concurrenthashmap 是怎么做到线程安全的？

26、HashTable 你了解过吗？

27、如何保证线程安全问题？

28、synchronized、lock

29、volatile 的原子性问题？为什么 i++ 这种不支持原子性？从计算机原理的设计来讲下不能保证原子性的原因

30、happens before 原理

31、cas 操作

32、lock 和 synchronized 的区别？

33、公平锁和非公平锁

34、Java 读写锁

35、读写锁设计主要解决什么问题？

36、你项目除了写 Java 代码，还有前端代码，那你知道前端有哪些框架吗？

37、MySQL 分页查询语句

38、MySQL 事务特性和隔离级别

39、不可重复读会出现在什么场景？

40、sql having 的使用场景

41、前端浏览器地址的一个 http 请求到后端整个流程是怎么样？能够说下吗？

42、http 默认端口，https 默认端口

43、DNS 你知道是干嘛的吗？

44、你们开发用的 ide 是啥？你能说下 idea 的常用几个快捷键吧？

45、代码版本管理你们用的是啥？

# 编程语言

## Java

### 并发编程

- 对于原子操作而言，synchronized, cas, AtomicInterger, LongAdder 哪种方式性能较好，为什么？

- synchronized 是如何保证 JMM 中的原子性、可见性与有序性的？

- 如下单例模式的代码可能存在什么问题？请从内存模型的角度思考。

```java
public class Singleton {
  static Singleton instance;
  static Singleton getInstance(){
    if (instance == null) {
      synchronized(Singleton.class) {
        if (instance == null)
          instance = new Singleton();
        }
    }
    return instance;
  }
}
```

### JVM

- 有时候在模拟有大量超时情况的 JMeter 压力测试中，前数分钟响应经常会超时，但是后面会突然降到毫秒级别，这可能是因为什么？

## Go

- Goroutine 机制简述，其与 JVM 线程的区别？为什么 Go 的线程调度使用了 G-P-M 模型而不是 G-M 模型？
- Go 中应该如何创建新的对象，make 关键字常用于哪些场景下。

# 编程基础

## Java

关于此部分的详细索引可以参考笔者的[Java 入门与最佳实践](https://github.com/wx-chevalier/WXJavaToolkits)系列文章。

# 数据结构与算法

关于数据结构与算法系列详细的文章列表可以参考笔者的[数据结构与算法系列综述](https://github.com/wx-chevalier/just-coder-handbook/blob/master/DataStructure/README.md#graph%E5%9B%BE)
笔者也是本次校招开始之后短短月余的时间才开始刷题，如果只是为了应付校招多学点套路也能说得过去，但是刷题本身的热趣确实挺有意思。关注笔者的博客或者 Github 的朋友应该知道，笔者过去几年里一直以工程应用于产品开发为重，老实说，很多时候解决真实场景下的问题需要动的脑子不如做几个算法题，可能带来的成就感也见仁见智。以华为为例，还有一种常见的 OJ 题目便是场景题，并不需要多么复杂的算法设计与考虑，而主要考察你对于用户需求的理解与具体编程能力、编程的精细度与代码掌控力的探查。

1.为什么不建议使用订单号作为主键? 2.为什么要在需要排序的字段上加索引?
3.for update 的记录不存在会导致锁住全表?
4.Redo Log 和 Binlog 有什么区别?
5.MySQL 如何回滚一条 sql ?
6.char(50) 和 varchar(50) 效果是一样的么?

一条 SQL 语句执行得很慢的原因有哪些？

# 服务端基础

## 微服务与云原生

- 有状态服务与无状态服务的区别在哪里？如何设计幂等性服务？

## Spring

- 你所在的公司/负责的项目组，是否使用过微服务；如果使用过，那么完整的研发部署流程会包含哪些关键的步骤、组件？

- Spring Boot 默认的 Worker 线程池大小是多少？

- 是否使用过 MyBatis 提供的缓存机制，是否开启过二级缓存，如果开启过，那么缓存返回的对象是否是线程安全的？

- 目前在项目中使用的数据库连接池是什么？如果是 HikariCP，那么其为什么性能相较于其他数据库会比较好？

- Spring 中的定时器，在单线程模型下，假如定时任务是 5 秒执行一次,但是第一个任务就执行了 8 秒,第二个会怎么样呢?

## DevOps

## Test

- 在服务测试中如何模拟百万级并发请求？

## 高可用架构

- 如何设计多租户隔离系统？可以从系统隔离、服务隔离、异地多活等多领域阐述？

- 常见的流量控制、熔断降级的手段有哪些？

- Sentinel 是否会对服务带来额外负载？

- 在发生故障时，我们应该优先恢复局部故障还是全局故障？

# 基础架构

## Linux 与操作系统

## 分布式系统

- 如何理解 CAP 理论？常用的保障 CA/CP/AP 的策略有哪些？如何理解 BASE 理论？

## 分布式计算

### 并发编程

- IO 多路复用属于同步阻塞型 IO 模型还是异步非阻塞 IO 模型？

## 数据库

### MySQL 与关系型数据库

- MySQL 中的主键应该选择怎样的策略去创建？常见的分布式 ID 生成的策略有哪些？为什么不建议使用订单号作为主键?

- 简述 `select city,name,age from person where city(存在索引)='武汉' order by name limit 100;` 的底层执行逻辑？为什么数据库索引中常使用合并排序算法？如果针对 `city-name` 添加了联合索引，那么执行逻辑上会有何区别？为什么要在需要排序的字段上加索引?

- 是否应该尽可能地添加列索引？应该以什么原则选择需要索引的列？像性别这样的列是否应该添加索引？

* InnoDB 事务提交后在底层都干了些什么？如果发生写失效(页 16KB 数据,只写了 8Kb),可以通过重做日志进行恢复,为什么还需要 double_write?

- 简述 `update person set age = 30 where id = 1;` 在数据库引擎中的执行流程。

- MySQL 并发控制策略中的锁机制与 MVCC 分别会被用于哪些场景下？for update 的记录不存在会导致锁住全表?

* 如果某条 SQL 执行较慢，能否分析下其原因？

* Redo Log 和 Binlog 有什么区别?

### 缓存

- 如何保证缓存与数据库的双写一致性？譬如如何保证 MySQL 与 Redis 中地数据一致性？
- 如何设计一个大规模高并发的数据缓存系统？

### 数据库拆分与中间件

- 如何设计一个分布式用户登录系统，能够根据用户 ID 将请求分发到不同的服务器？如果某台服务器出现了故障，应该如何进行重划分？

- 在 MySQL 数据库中，一般单表数据量超过多少后会建议分库分表？为什么会有这样的考量？

- 在分库分表的情况下，一般如何设计跨库的分页查询；如果进行分页查询，应该使用 `limit 100，10 ORDER BY id` 还是 `where id > ? limit 10` 的形式？

## 分布式计算

### 并发编程

- 什么是协程？协程相对于线程的优势是什么？Go 中协程模型是如何实现的？在什么情况下应该优先选择协程？在什么情况下应该优先选择多线程？

### 消息中间件 MOM

- 是否了解过常见的消息中间件？能否简述下不同的业务场景下应该如何去选择合适的消息中间件？

- 常见的消息中间件采取怎样的持久化策略？

- 常见的消息中间件是如何保障其高可用特性的？

## 容器与虚拟化

### Docker

- Docker 中如何配置容器访问主机？可以设置网络为 host 模式，或者设置主机的 DNS 解析规则。

# 典型业务系统

## BPM 流程引擎

## IM

- 如何设计 Feed 流系统，针对十万、千万、十亿等不同的用户体量时其设计有什么差异？

# 链接

- https://mp.weixin.qq.com/s/4Zip0DVMGuJPMUnv_ySGIg
- https://github.com/digoal/blog/blob/master/201806/20180623_01.md

> [Java 进阶面试问题列表](https://zhuanlan.zhihu.com/p/24910702)翻译自[Java developer interview questions: The hard part](https://howtotrainyourjava.com/2016/07/14/java-developer-interview-questions-the-hard-part/)，从属于笔者的[Java 入门与工程实践](https://github.com/wx-chevalier/Java-Introduction-And-Engineering-Practices)系列。最近公司打算招几个 Java 开发人员，正巧在 Reddit 上看到了该文，顺手翻译了一波。只是单纯的问题列表，可能较水，慎进。

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/1/2/QQ2017011611fas.png)

# 面向对象编程的基本理念与核心设计思想

- 解释下多态性(polymorphism)，封装性(encapsulation)，内聚(cohesion)以及耦合(coupling)。
- 继承(Inheritance)与聚合(Aggregation)的区别在哪里。
- 你是如何理解干净的代码(Clean Code)与技术负载(Technical Debt)的。
- 描述下常用的重构技巧。
- 阐述下 [SOLID](http://howtotrainyourjee.com/2014/08/28/rock-solid-code/) 原则。
- 其他的譬如 KISS,DRY,YAGNI 等原则又是什么含义。
- 什么是设计模式(Design Patterns)？你知道哪些设计模式？
- 你有了解过存在哪些反模式(Anti-Patterns)吗？
- 你会如何设计登陆舰/数学表达式计算程序/一条龙？
- 你知道哪些基本的排序算法，它们的计算复杂度如何？在给定数据的情况下你会倾向于使用哪种算法呢？
- 尝试编写如下代码：
      - 计算指定数字的阶乘

- 开发 [Fizz Buzz](http://c2.com/cgi/wiki?FizzBuzzTest)  小游戏
      - 倒转句子中的单词
      - 回文字符串检测

- 枚举给定字符串的所有排列组合

# Java 核心概念

- equals 与 hashCode 的异同点在哪里？Java 的集合中又是如何使用它们的。
- 描述下 Java 中集合(Collections)，接口(Interfaces)，实现(Implementations)的概念。LinkedList 与 ArrayList 的区别是什么？
- 基础类型(Primitives)与封装类型(Wrappers)的区别在哪里？
- final 与 static 关键字可以用于哪里？它们的作用是什么？
- 阐述下 Java 中的访问描述符(Access Modifiers)。
- 描述下 String,StringBuilder 以及 StringBuffer 区别。
- 接口(Interface)与抽象类(Abstract Class)的区别在哪里。
- 覆盖(Overriding)与重载(OverLoading)的区别在哪里。
- 异常分为哪几种类型？以及所谓的`handle or declare`原则应该如何理解？
- 简述垃圾回收器的工作原理。
- 你是如何处理内存泄露或者栈溢出问题的？
- 如何构建不可变的类结构？关键点在哪里？
- 什么是 JIT 编译？
- Java 8 / Java 7 为我们提供了什么新功能？即将到来的 Java 9 又带来了怎样的新功能？

# Hibernate / 数据库

- 请解释下 ORM。
- 简述下 Hibernate 的优劣特性。
- Hibernate 与 JPA 区别在哪？
- Hibernate 最新版提供了哪些特性？
- 什么是懒加载(Lazy Loading)？
- 什么是 N+1 难题？
- 介绍一些熟悉的 Hibernate 注释。
- 简介下 Hibernate Session 与 SessionFactory。
- Entity Beans 的状态有哪些。
- Hibernate 中的缓存分为几层。
- Hibernate 中事务的支持分为几级？
- 什么是乐观锁(Optimistic Locking)？
- 简述下 ACID 原则。
- 简述下数据库正则化(Normalizations)。
- 请介绍下你日常工作中优化慢查询(Slow Query)的策略。

# Spring

- 新版的 Spring 中有哪些新特性？
- 介绍下 Spring 的优势与缺陷。
- 什么是控制反转(Inversion of Control)与依赖注入(Dependency Injection)？
- 你用过哪些 Spring 的模块？
- Spring 中是如何使用依赖注入的？
- Spring 中提供了几种自动注入的机制？
- 介绍下 Spring MVC。
- Spring 中 Scopes 有哪些？
- Spring 中 Bean 的生命周期包含哪些步骤？
- Spring Bean 与 EJB Bean 的区别在哪里？

# 其他主题

- 介绍下切面编程(Aspect Oriented Programming)。
- 概述下 GET 与 POST 的区别。
- Web Server、Web Container 与 Application Server 的区别是什么？
- 简要介绍下从浏览器输入 URL 开始到获取到请求界面之后 Java Web 应用中发生了什么。
- 什么是 N 层架构？
- 微服务(MicroServices)与巨石型应用(Monolithic Applications)之间的区别在哪里？
- 你知道哪些商业级设计模式？
- 你是如何测试一个应用的？知道哪些测试框架？
- 你是如何测试单个方法的？
- 在你的职业生涯中，算得上最困难的技术挑战是什么？
- 什么是领域驱动开发(Domain Driven Development)？
- 介绍下一些你最爱的 IDE 的常用插件。
- 除了 IDE 之外，你的日常工作中还会用到哪些工具？
- 你使用什么版本管理工具？
- 分支(Branch)与标签(Tag)之间的区别在哪里？
- 你常用的持续集成(Continuous Integration)、静态代码分析(Static Code Analysis)工具有哪些？

# 链接

- https://zhuanlan.zhihu.com/p/70410011
