[![章节头](https://parg.co/UGo)](https://parg.co/b4z) 
 - [JVM 资料索引[Creating JVM Language Serials](http://jakubdziworski.github.io/categories.html#Enkel-ref)](#jvm-%E8%B5%84%E6%96%99%E7%B4%A2%E5%BC%95creating-jvm-language-serialshttpjakubdziworskigithubiocategorieshtml%23enkel-ref)
- [Memory Model: 内存模型](#memory-model-%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B)
  * [Memory Leak: 内存泄露](#memory-leak-%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2)
- [Garbage Collection: 垃圾回收](#garbage-collection-%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6)
- [Class: 类文件与加载](#class-%E7%B1%BB%E6%96%87%E4%BB%B6%E4%B8%8E%E5%8A%A0%E8%BD%BD)
- [JIT: 即时编译](#jit-%E5%8D%B3%E6%97%B6%E7%BC%96%E8%AF%91)
- [Tunning: 性能调优](#tunning-%E6%80%A7%E8%83%BD%E8%B0%83%E4%BC%98) 


# JVM 资料索引[Creating JVM Language Serials](http://jakubdziworski.github.io/categories.html#Enkel-ref)

- [2017-面试小结之 JVM 篇](http://ginobefunny.com/post/jvm_interview_questions/)：最近面试一些公司，被问到的关于Java虚拟机的问题，以及自己总结的回答。
- [Java 内存管理初探](https://halfstackdeveloper.github.io/2016/12/30/java%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E5%88%9D%E6%8E%A2/) 
- [Jvm之用java解析class文件](http://www.tuicool.com/articles/ZfMnMju) 
- [2017 - JVM Anatomy Park【Series】](http://6me.us/oa8): "JVM Anatomy Park" is the mini-post series, where every post is slated to take 5-10 minutes to read (and no more than 2 hours for me to write).
- [【笔记】Java虚拟机(一)-GC](https://darkness463.github.io/2017/03/30/Java-VM-GC/) 

- [2017-Java 技术之类加载机制](http://wingjay.com/2017/05/08/java_classloader/)：类加载机制是 Java 语言的一大亮点，使得 Java 类可以被动态加载到 Java 虚拟机中。 这次我们抛开术语和概念，从例子入手，由浅入深地讲解 Java 的类加载机制。 本文涉及知识点：双亲委托机制、BootstrapClassLoader、ExtClassLoader、AppClassLoader、自定义网络类加载器等。
# Memory Model: 内存模型
## Memory Leak: 内存泄露

- [The Introduction of Java Memory Leaks](http://www.programcreek.com/2013/10/the-introduction-of-memory-leak-what-why-and-how/): One of the most significant advantages of Java is its memory management. You simply create objects and Java Garbage Collector takes care of allocating and freeing memory. However, the situation is not as simple as that, because memory leaks frequently occur in Java applications.

- [Creating a memory leak with Java](https://stackoverflow.com/questions/6470651/creating-a-memory-leak-with-java) 
# Garbage Collection: 垃圾回收

- [Case for Defaulting to G1 Garbage Collector in Java 9](https://www.infoq.com/articles/Make-G1-Default-Garbage-Collector-in-Java-9#anch128313)
- [Java 中, 为什么一个对象的实例方法在执行完成之前其对象可以被 GC 回收?](https://www.zhihu.com/question/51244545/answer/126055789)
- [java-garbage-collection-handbook](https://plumbr.eu/java-garbage-collection-handbook)
- [成为JavaGC专家（1）—深入浅出Java垃圾回收机制](http://www.importnew.com/1993.html)

- [JVM 垃圾回收器工作原理及使用实例介绍](www.ibm.com/developerworks/cn/java/j-lo-JVMGarbageCollection/index.html)

- [垃圾收集器与内存分配策略——在线文字版](http://book.51cto.com/art/201107/278857.htm)



# Class: 类文件与加载
# JIT: 即时编译
# Tunning: 性能调优
