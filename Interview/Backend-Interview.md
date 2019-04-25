全局唯一有序 ID。 snowflake ，timestamp 加前面，然后后面加上机器 id 等冯诺依曼体系
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

## Go

- Goroutine 机制简述，与 JVM 线程的区别

# MicroService & Spring Ecosystem

- 你所在的公司/负责的项目组，是否使用过微服务；如果使用过，那么完整的研发部署流程会包含哪些关键的步骤、组件？

## MyBatis

- MyBatis 的缺陷是什么？在日常工作中是否有什么不舒适的体验？

# 数据结构与算法

# 操作系统与网络

# 数据库

## MySQL

# 架构与设计

# 编程基础

## Java

关于此部分的详细索引可以参考笔者的[Java 入门与最佳实践](https://github.com/wx-chevalier/WXJavaToolkits)系列文章。

### 集合类型

### 流程控制

#### 分支循环

Java 中 Switch 可以使用 String 作为校验值，不过是在 1.6 之后才添加进来的，并且只能使用`hashCode`作为校验值。

#### 运算符

#### 异常处理

### 并发编程

#### 锁

#### 内置的线程安全模型

### JVM 内部原理

关于 JVM 部分的详细索引可以参考笔者的[JVM 入门与最佳实践](https://github.com/wx-chevalier/WXJavaToolkits#jvmjava-virtual-machine)

# 数据结构与算法

关于数据结构与算法系列详细的文章列表可以参考笔者的[数据结构与算法系列综述](https://github.com/wx-chevalier/just-coder-handbook/blob/master/DataStructure/README.md#graph%E5%9B%BE)
笔者也是本次校招开始之后短短月余的时间才开始刷题，如果只是为了应付校招多学点套路也能说得过去，但是刷题本身的热趣确实挺有意思。关注笔者的博客或者 Github 的朋友应该知道，笔者过去几年里一直以工程应用于产品开发为重，老实说，很多时候解决真实场景下的问题需要动的脑子不如做几个算法题，可能带来的成就感也见仁见智。以华为为例，还有一种常见的 OJ 题目便是场景题，并不需要多么复杂的算法设计与考虑，而主要考察你对于用户需求的理解与具体编程能力、编程的精细度与代码掌控力的探查。

## 字符串操作

### 模式匹配

### 回文字串

## 树与图

### BFS 与 DFS

#### 迷宫问题

## 排序

## 搜索

## 科学计算

## 优化算法

### 递归

### 动态规划

#### 股票买卖

### 回溯

# Web 前端开发

## DOM 基础

## HTML+CSS 基础

## 常用框架与类库

### React

## 常用构建工具

### Webpack

## 前端优化

### 性能优化

前端优化的根本目的是为了有一个更好地用户体验的同时尽可能减少后端负载压力。即保证更少的加载时间、更快的首屏渲染、更流畅的用户交互。在笔者自己的知识体系内，当我们想为用户呈现更好的视觉效果与用户体验时，我们往往会从[性能评测与监控](https://github.com/wx-chevalier/web-frontend-practice-handbook/blob/master/advanced/Optimization/FrontendOptimization-Benchmark.md)、[资源与请求优化](https://github.com/wx-chevalier/web-frontend-practice-handbook/blob/master/advanced/Optimization/FrontendOptimization-Resource-Request.md)、[加载策略](https://github.com/wx-chevalier/web-frontend-practice-handbook/blob/master/advanced/Optimization/FrontendOptimization-Load.md)、[首页与关键路径](https://github.com/wx-chevalier/web-frontend-practice-handbook/blob/master/advanced/Optimization/FrontendOptimization-HomePage-CriticalPath.md)、[渲染优化](https://github.com/wx-chevalier/web-frontend-practice-handbook/blob/master/advanced/Optimization/FrontendOptimization-Render.md)这几个方面进行考虑。

### 响应式网页

## Web 网络安全

### SQL 注入

### XSS

### CSRF

### WebShell

# 服务端应用程序

## API 层

## 应用层

### Spring

#### Bean

- 远程 Bean 的构建

### Express

#### AOP

# 基础架构与大数据

## 数据存储

### MySQL

### Redis

关于 Redis 部分的详细知识点可以参考笔者的[Redis 入门与最佳实践](https://github.com/wx-chevalier/infrastructure-handbook#redis)

#### Redis 基础数据结构

#### Redis 集群

#### Redis 底层架构

#### Redis 调优

## Hadoop Ecosystem

笔者在这里并没有列举 Spark/Storm/Flink 这些，感觉这些针对性可能更强一点，如果大家觉得这部分也有很大的必要列入清单请留言。

### HDFS

### MapReduce

### HBase

### Hive

## Virtualization

# 面试随笔

一般而言，准备的充分应付笔试应该绰绰有余，不要像笔者这样在校招开始之后才猛然发现自己两手空空的奔赴战场，被打个手足无措就好。笔试之后即是面试，从笔者自己的经验来看，面试一定要掌握好节奏。笔者自己原来创业或者带团队的时候也经常招聘面试别人，如果你的简历一穷二白，或者千篇一律，毫无特色，那么面试官也是觉得很难做的，只能按照程序化的东西问题。面试官更想了解的是你做过啥，那么我们应该尽可能地寻找机会去展示自己会的东西。譬如如果问你 Log4j 的用法，那么在标准回答之后可以适当扩展，从经典的基于 ELK 的日志处理到基于 Flume、HDFS、Hive 这一系列的日志处理方案或者基于 Kafka+Flink 的实时日志处理，应该尽可能地去回答自己懂的东西。瑕不掩瑜，那也要尽可能地去将自己的闪光点展示出来。

# 容器与虚拟化

## Docker

- Docker 中如何配置容器访问主机

可以设置网络为 host 模式，或者设置主机的 DNS 解析规则。
