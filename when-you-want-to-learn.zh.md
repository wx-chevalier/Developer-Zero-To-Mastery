
如果你觉得本系列文章有所帮助，欢迎打赏~
![](http://7xlgth.com1.z0.glb.clouddn.com/show.htm.png?imageView2/1/w/150/h/150)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Coder-Knowledge-Graph](#coder-knowledge-graph)
- [当我要学习一门编程语言:C++/Java/PHP/Swift/Rust/Go。。。](#%E5%BD%93%E6%88%91%E8%A6%81%E5%AD%A6%E4%B9%A0%E4%B8%80%E9%97%A8%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80cjavaphpswiftrustgo%E3%80%82%E3%80%82%E3%80%82)
  - [语法基础](#%E8%AF%AD%E6%B3%95%E5%9F%BA%E7%A1%80)
    - [入门概述](#%E5%85%A5%E9%97%A8%E6%A6%82%E8%BF%B0)
    - [Quick Start](#quick-start)
    - [数据结构](#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
    - [流程控制与异常处理](#%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E4%B8%8E%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86)
    - [函数](#%E5%87%BD%E6%95%B0)
    - [模块与组件](#%E6%A8%A1%E5%9D%97%E4%B8%8E%E7%BB%84%E4%BB%B6)
    - [类与对象](#%E7%B1%BB%E4%B8%8E%E5%AF%B9%E8%B1%A1)
    - [IO](#io)
  - [语法应用](#%E8%AF%AD%E6%B3%95%E5%BA%94%E7%94%A8)
    - [Advanced](#advanced)
    - [Network](#network)
    - [Storage](#storage)
    - [TestRelease](#testrelease)
    - [SysProc](#sysproc)
- [当我要学习客户端开发:iOS/Android/Hybrid/WebAPP](#%E5%BD%93%E6%88%91%E8%A6%81%E5%AD%A6%E4%B9%A0%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%BC%80%E5%8F%91iosandroidhybridwebapp)
  - [Language](#language)
  - [UI:界面呈现](#ui%E7%95%8C%E9%9D%A2%E5%91%88%E7%8E%B0)
    - [Components(基本组件)](#components%E5%9F%BA%E6%9C%AC%E7%BB%84%E4%BB%B6)
    - [Interaction(用户交互)](#interaction%E7%94%A8%E6%88%B7%E4%BA%A4%E4%BA%92)
    - [DVisual(绘图以及数据可视化)](#dvisual%E7%BB%98%E5%9B%BE%E4%BB%A5%E5%8F%8A%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96)
    - [Animation(动画与变换)](#animation%E5%8A%A8%E7%94%BB%E4%B8%8E%E5%8F%98%E6%8D%A2)
    - [Widgets(界面插件)](#widgets%E7%95%8C%E9%9D%A2%E6%8F%92%E4%BB%B6)
  - [Network:网络调用](#network%E7%BD%91%E7%BB%9C%E8%B0%83%E7%94%A8)
  - [Storage:存储](#storage%E5%AD%98%E5%82%A8)
  - [SysProc:系统与进程](#sysproc%E7%B3%BB%E7%BB%9F%E4%B8%8E%E8%BF%9B%E7%A8%8B)
  - [TestRelease](#testrelease-1)
- [当我要学习服务端开发:SpringMVC/Laravel/Rails](#%E5%BD%93%E6%88%91%E8%A6%81%E5%AD%A6%E4%B9%A0%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%BC%80%E5%8F%91springmvclaravelrails)
- [当我要学习数据科学:MachineLearning/NLP/DeepLearning/Statistic](#%E5%BD%93%E6%88%91%E8%A6%81%E5%AD%A6%E4%B9%A0%E6%95%B0%E6%8D%AE%E7%A7%91%E5%AD%A6machinelearningnlpdeeplearningstatistic)
- [当我要学习云计算与大数据的基础架构:分布式计算/运维/存储/虚拟化](#%E5%BD%93%E6%88%91%E8%A6%81%E5%AD%A6%E4%B9%A0%E4%BA%91%E8%AE%A1%E7%AE%97%E4%B8%8E%E5%A4%A7%E6%95%B0%E6%8D%AE%E7%9A%84%E5%9F%BA%E7%A1%80%E6%9E%B6%E6%9E%84%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97%E8%BF%90%E7%BB%B4%E5%AD%98%E5%82%A8%E8%99%9A%E6%8B%9F%E5%8C%96)
  - [DCE:分布式计算环境](#dce%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97%E7%8E%AF%E5%A2%83)
  - [Distributed:分布式系统](#distributed%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F)
  - [OM:运维管理](#om%E8%BF%90%E7%BB%B4%E7%AE%A1%E7%90%86)
  - [Storage:存储](#storage%E5%AD%98%E5%82%A8-1)
  - [Virtualization:虚拟化](#virtualization%E8%99%9A%E6%8B%9F%E5%8C%96)
- [当我要学习信息安全:移动安全/计算机取证/渗透测试/逆向工程/加固](#%E5%BD%93%E6%88%91%E8%A6%81%E5%AD%A6%E4%B9%A0%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8%E7%A7%BB%E5%8A%A8%E5%AE%89%E5%85%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%8F%96%E8%AF%81%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B%E5%8A%A0%E5%9B%BA)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Coder-Knowledge-Graph
Knowledge Graph For Coder —— From My Daily Experience &amp; Practice

六年前笔者开始接触到C语言，写了第一行HelloWorld。三年前开始进入工作岗位进行实践，前前后后参与了公司里、学校里也有十来个项目，自己也有多次自主创业的经历。在不懂事的时候，笔者自诩“全栈架构师”，从前端的Android、iOS、Web，到中间件的Apache、Nginx，再到后端的Laravel、Spring、Rails、NodeJs，还有MySQL、Redis、Mongodb，有时候还要做些CI，用用Hadoop、Docker、Spark做做云计算环境，再实践实践机器学习的算法。呵呵，每当想起这些，笔者脑中就闪过了孔乙己一字排开八个大钱的画面，只懂些名词，真是连民科都不如。作为一个有底线的程序猿，知之为知之，不知为不知，虽然笔者在不长的实践生涯中“被迫”着了解了计算机软件行业的许多方面，但是笔者在这里描述这个背景并不是自夸或者装逼，只是想陈述一个事实：如果你还没有感到知识管理、知识归档的痛苦，那说明你还了解的不够多。如果你还只是停留在一字排开数个名词的阶段，那说明你了解的还不够深。

技术分为术与道两者，术即是具体的做事的方法，而道则是做事的逻辑抽象的原则与原理。一味地追求术的人往往都是希望走捷径，不求甚解的。而道之所求也是符合一万小时原理，需要大量的付出与总结。借用数学之美中的例子，如果你想要去建立一个搜索引擎，直接拿来主义，用上Solr、ElasticSearch之类的，是术。而根据下载、索引与排序这三个抽象步骤来进行提炼与升华，这就是道。计算机科学有两类根本问题。一类是理论：算法，数据结构，复杂度，机器学习，模式识别，等等等。一类是系统：操作系统，网络系统，分布式系统，存储系统，游戏引擎，等等等等。粗浅的说，学界会偏向前者，产界偏向后者，笔者作为一只一直读书的从本科到硕士，见多了二者相互嫌弃。但是这二者相辅相成，笔者自己数学一直不好，对于那些公式啊推导畏如猛虎，但是用心看了之后，甚多乐趣啊。所谓举一反三，见微知著，这都是需要在一个广博的知识的基础上才行，所以对于知识，还是应该拿来主义，来者不拒。

笔者回顾自己这几年的风雨历程，老实说，谈到绝望或者无奈的场景往往不是某个具体的问题，**能解决的问题是一定可以解决的**，而是在知识海洋面前，感受到了宇宙的浩瀚与人类的渺小。庄子有云：吾生也有涯，而知也无涯。以有涯随无涯，殆已！笔者最常感觉痛苦的事情有二：

（1）学过的知识都忘了。笔者算来开始用Java也有五年了吧，但是你现在要笔者立马说出JVM的架构组成，笔者也是心有戚戚，呐呐不能言。我能够记得的就是我系统的学习过五次，但是都忘了。再举个例子，笔者之前学习语言的时候，因为工作关系同时在用Python、Java、Ruby、JavaScript，不谈学的多深，当时感觉最痛苦的就是老把每个语言怎么求取数组长度给忘了或者搞混了，是不是觉得很傻比？或者每次写Java的时候，笔者都会觉得读取文件好难好难，但是至少也写过上万行各种各样的读取文件的代码了吧。**我们构建一个完备的知识体系，不是为了让我们不会去忘记，而是让我们忘了之后能以最快的速度学会**。我们宝贵的时间不应该浪费在对于知识的重复学习，Learn Once，Know Forever。

（2）写过的代码都没了。举两个例子吧，还是以Java为例，我们很多项目都会用到一些字符串辅助的方法，譬如加密或者编码，然后笔者就发现每次做项目的时候都要把这些重写一遍。另一个呢，笔者学习Spark的时候，80%的时间都用来重复搭建虚拟机环境了，啪啪的。后来使用Docker之后才好一点。

授人以鱼不如授人以渔，笔者一直觉得我这几年磕磕碰碰精华所在就是这完整的知识体系架构，它给了我莫大的信心与勇气去遨游在璀璨的知识长河中。不积跬步无以至千里，编程之路亦如一场游戏，随时学点知识拿个EXP，或者打个大魔王爆个装备啥的，一个完备的知识体系或者知识图谱，就是你的背囊，也是你行走在知识海洋里的一叶扁舟。当然，本文所讲也只是一家之言，做不得准，大家见仁见智。顺便说一句，笔者很感谢为知笔记为我提供了非常好用的工具，这里友情推广一波。

> **知识应该放在它应该在的地方**



# 当我要学习一门编程语言:C++/Java/PHP/Swift/Rust/Go。。。



> 关于本部分的详细文档和全部的知识结构图可以查看[这里](https://github.com/wxyyxc1992/Coder-Knowledge-Graph/blob/master/zh/programminglanguage.md)。



笔者从学习第一门语言开始，就被教导一个概念，学习一门语言的基础，也就是语法本身，不代表你掌握了这门语言。学习一门语言应该是学习它所代表的完整的生态环境和在各个应用场景下最合适的组合。同样的，笔者大大小小算是用过七八门语言，当然，你为了学习而去学习，用语言的数量标榜自己是毫无意义的。但是，每个语言都有其特性，就像才接触Python时候它的弱类型、快速开发的便捷以及后面应用到大型程序开发时候的代码混乱都给我留下了深刻的印象。往往说一门语言不好是因为你没学到家，但是就所处的技能水准和应用场景而言各个语言还是各有其优势的。笔者看现有的很多教程，以Java为例，它的讲解方式以及应用示例都是基于JDK本身和Java语言本身的特点的。那么笔者自己总结的这份所谓的编程语言的知识结构图或者拓扑图，是会抽象了各个语言的特性而形成。唔，譬如笔者最早是在JavaScript中，在用jQuery的时候接触到了Promise的概念，后来在Java、在Swift中都发现了类似的，但不一定叫这个名字的用法或者第三方类库，那么我们在做笔记时，首先要知道，你现在所学的，是应该放在哪一部分。

**本文介绍的这种笔记排布方式不一定适合于初学者理解**

## 语法基础

学习一门语言呢，肯定首先要去学习它的语法基础，那学习语法基础的时候，我们要掌握哪几个方面呢，笔者大概归类到入门概述、Quick Start、数据结构、流程控制与异常处理、函数、模块与组件、类与对象以及IO这几个部分。详细的目录式列表可以参考[这里](https://github.com/wxyyxc1992/Coder-Knowledge-Graph/blob/master/zh/programminglanguage.md)。

### 入门概述

在这里你要了解这门语言的由来，它的特点，它的基本面貌。譬如你要了解下它各个版本迭代的特点。就像Java 8提出之后，你需要专门的对于Java8的语法特性进行一些了解，但是对于某个具体的语法知识点还是应该放到对应的语法讲解的位置。譬如Java8里面提出了函数式接口，那这部分具体的讲解还是应该放置到接口那一部分。

其次呢，你还要在这边了解基本的注释与代码分割的规范，就好像笔者初学Python的时候，这货没有大括号，用的是缩进分割的方法，让才从C++/Java走过来的笔者一顿酸爽。

接下来，在入门概述这边，你还要放外部资料的链接。你不可能把全部的你看到的资料转化为自己的笔记，那么你需要把所有的你看到的有价值的参考资料地址存放在这里。笔者大概分为了：

- Tutorial & Docs:入门教程和指导相关

- Practice&Tips:实践、小贴士相关，就好像Github上流行的awesome-系列，就要把链接放这

- Forum&Lessons:一些论坛和在线的视频教程地址

- Blog&News:博客和资讯

- Book&Resources:参考的书籍啊、资源啊放这里

### Quick Start

学习一门语言的时候，你肯定会写HelloWorld，笔者在上面强调过，做笔记的一个目的就是在未来某天你可能全部忘记的时候能够以最快的速度学会，那么你再次学习的时候肯定会去继续写HelloWorld。在这一部门，你需要知道怎么搭建开发环境，特别推荐是也要学下怎么使用Docker去搭建开发环境。接下来呢，你要学下构建工具和依赖管理工具。在早年，笔者才学Java，还不知道用Maven的时候，那个时候根本分不清什么构建啊、依赖管理的概念，每次要用jar包了只能手动拖拽，真心呵呵哒。当然，一门优秀的编程语言一定要有其对应的构建与依赖管理工具，这样才能促进整个社区的活跃与交流。然后你要看看怎么进行代码部署，就好像Python的Notebook、Swift的PlayGround这些个神奇的东西，还是非常好用的。

最后呢，还要看看常用的IDE，不过笔者目前基本上就用的是Atom加上Jetbrains(感恩)这一个系列。唔，之前看到很多大牛喜欢用Sublime啊Vim来写代码，我表示，这个逼还是不要装的好。

### 数据结构

学完了HelloWorld，我们就要来看看数据结构了，这是一个编程语言的基石所在。那么不论哪一种语言，它会提供给我们哪些知识呢。

（1）首先是知道怎么去定义变量与常量。就好像JavaScript里面的var、let，以及未来Java里面会加入的val，变量定义的方式也是有很多种的。还有就是要了解下系统的内置的常量，这个在使用PHP进行开发的时候比较用得上。接下来，要看看这个变量是怎么赋值的，是必须单个赋值还是能够链式赋值，或者是像JavaScript这样还能支持解构赋值。最后呢，这一部分还要看看你怎么进行类型、格式判断的，好比`instanceof`啊`typeof`这些操作符，都是在这里介绍的。

（2）然后呢要看看一些基本的数据类型。首先是数值类型，是分为了整型、浮点型还是像OJC这样的全是NSNumber，还要看看原始类型和非原始类型的区别。如果是数值的话，还要看看怎么获取随机数、怎么进行科学计算、怎么进行类型转换。接下来，还要看看空类型、布尔类型、可选类型和枚举类型是怎么定义的。

（3）接下来呢，看看字符串类型是怎么用的。字符串也是每个语言必备的，说难不难，说简单吧，那么多用法呢。基本上就要看看它是怎么创建增删、怎么索引遍历、怎么进行类型编码还有些像反向啊之类的基本操作。这里面也会有很多小的知识点，譬如Java里面字符串是不可变类型，譬如PHP里面你连接字符串不能用加号。

（4）然后呢，就要看看结构体是怎么定义的了，这个在Swift里面还是挺重要的，不过在有些语言里就没有。

（5）下面就要看看基本的时间日期类型，这里还会涉及到时区转换啊、日历啊等等方面。基本上各个语言的时间日期，要么是原生提供的不错，要么就会有第三方类库支持，譬如JavaScript中的Moment.js，还是很不错的。

（6）上面讲的几个数据类型都还好，现在开始就要了解高级复杂数据类型，也就是所谓的集合了。笔者把集合分为了序列类型与键值索引两大部分，譬如分别对应Java中的List和Map。这边也是要了解集合的创建增删、索引遍历、类型转换还有排序啊、查找啊等等高级用法。

（7）最后在这里还要学学不可变数据，这一点在函数式编程里面很流行，就好像Facebook提供的Immutable.js这个类库，还是很不错的。

### 流程控制与异常处理

接下来就要看看流程控制与异常处理方面的知识了，首先要知道运算符相关，像逻辑运算符啊、加减运算符啊还有运算符重载(运算符重载是能用于数据分析计算的语言的一个重要优势)。然后要看看怎么进行分支选择的，也就是常见的if、switch语句，在Swift中还有guarantee这样好用的语句。接下来就要看看怎么进行常见的循环了，最经典的肯定就是for循环，之后各个语言也都各有扩充，像什么for-in、for-of、forEach循环，它们都是属于循环遍历。还有就是while以及do-while这种变种。

看完了循环下面继续看看流程控制，就像break、continue这种，还有goto这样可以随便乱跳的语句。下面要继续了解些作用域相关的知识，像JavaScript里面，一不小心就全局作用域了。然后还有关于迭代器的知识，在很多语言里迭代器和生成器是密不可分的，而在Java里面迭代器是一个接口。迭代器放在流程控制里也是因为一般来说迭代器也是用于循环的。

最后，我们要来看看异常处理，包括怎么定义异常、怎么抛出异常，还有怎么用try-catch-finally这种形式来捕获和处理异常。Swift里面提供了try?的用法，也是非常Sweet。

### 函数

接下来我们继续学习函数的概念，唔，像Java这种完全的OO的语言，是没有函数的，里面只有方法，这也是它经常被诟病的地方，老说别的语言HelloWorld就一行，但是Java里面要写好多行。在这里笔者是把包括方法啊、函数都放在这边介绍。

（1）函数定义

首先呢要来看看函数是怎么定义的，不同的语言里定义方式有区别有交集。像有什么func、function、define等等N多不同的关键字。要注意下这个函数是不是需要返回值的，像Java里面没有返回值就是void，而Swift里面可以写可以不写，还有很多弱类型语言里没有返回值。另外还要看看怎么定义函数变量，这个和闭包经常放在一起使用。

（2）参数调用

看完了定义再看看参数定义和调用方式。参数的话需要了解下有没有默认参数和外部参数。笔者刚接触OJC的时候，它的外部参数确实大大提高了可读性，后来Swift继承并且发扬光大了。下面就要看看不定参数，譬如怎么在Java里面定义不定参数。最后，要看看引用传值和复制传值的区别，在有些语言里还存在有in-out这样的关键字。

（3）匿名函数/Lambda/闭包

Java8里面引入了Lambda的用法，Lambda本身也是函数式编程的一枚标杆，是一种设计模式吧。这里要看看Lambda怎么用，像有的语言里是->，有的是=>，这个要区分下。还有就是看看闭包怎么定义，Swift里面提供了一个尾随闭包的调用方式，非常方便。

（4）生成器

生成器、yield，最早笔者是在Python中接触到的，现在看ES里面也引入了这个概念。生成器一般和迭代器搭配在一起使用，不过也可以用来编写异步代码。

（5）装饰器

装饰器感觉有点像AOP的概念，笔者也是在Python和Angular2中接触到的。

（6）函数柯里化和反柯里化

在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函 数，并且返回接受余下的参数而且返回结果的新函数的技术。这个技术由 Christopher Strachey 以逻辑学家哈斯凯尔·加里命名的，尽管它是 Moses Schönfinkel 和 Gottlob Frege 发明的。这是来自维基百科的名词解释。顾名思义，柯里化其实本身是固定一个可以预期的参数，并返回一个特定的函数，处理批特定的需求。这增加了函数的适用 性，但同时也降低了函数的适用范围。笔者在JavaScript与Scala会比较常用这个特性，这里以JavaScript为例说明柯里化的核心思想。



### 模块与组件

这里主要学习下模块化的概念，譬如Java、C#里面都会存在有命名空间，而Swift里是全局命名空间。还有像ES6里，这个export、import关键字到底是咋用的。



### 类与对象

笔者还真没接触过Lisp、Haskell这样纯函数式语言，基本上都是OO的吧。那么类与对象也就是非常重要的一个部分。

（1）类的定义

怎么定义类、怎么用public、private、protected或者类似的方法来划分可见域、怎么来划分属性。像Swift里面还有延迟加载啊、属性监控啊等等。怎么来定义方法(和上面的函数一起看)。

（2）对象

怎么初始化对象，有的语言里有new，有的没有。怎么实践单例模式。还有就是this或者self这样类似的用法到底干啥的，像JavaScript里面，因为最早的时候没有OO的概念，各种自定义的对象，这时候this的用法也就非常的杂乱。还有就是对象属于哪个类型进行的判断，这一点和变量章节有所重复。

（3）继承

怎么继承一个对象，还有就是继承之后的方法对于访问的父类中的属性啊、重载啊咋搞的，这个在Java面试题里面经常碰到。

（4）抽象类、接口/协议与委托

怎么定义抽象类或者接口，在Swift和OJC中是协议的概念，还有就是譬如Java中的怎么定义一个注解。

（5）内部类

这个在Java中用的比较多，又分为静态内部类、成员内部类、局部内部类以及匿名内部类。

（6）反射与类装载

### IO

这里介绍基本的输入输出的方法，包括控制台的输入输出、参数的处理、文件基本的读写，还有像Java里面繁多的什么字节流、字符流啊进行介绍。

## 语法应用

学完了语法基础，那我们的笔记就要进入其他的具体的应用了，这里又分为Advanced、Storage、TestRelease、SysProc这几个部分。

### Advanced

在这里就要进行泛型编程、内存管理、序列化和反序列化、编程规范和代码风格以及由该语言实现的算法的学习。

### Network

本部分主要介绍网络访问、网络调用相关。包括了NetworkManagement(网络管理)、Socket、HttpClient(网络客户端)、RPC/RMI(远程调用)

### Storage

在这里存放文件系统、数据库存储等等相关的内容。包括了缓存，像Java里缓存又会分为on-heap和off-heap两种。然后就要看看常见的数据库，数据库包括了KeyValue数据库，最常见的就是Redis。还有文档型数据库，最常见的就是Mongodb，还有关系型数据库。关系型数据库的使用中又要注意ORM和数据库分区分表等等插件。

### TestRelease

这里主要是测试啊、发布啊相关的内容。包括了单元测试，像JUnit、Debug，像在PHP里面用XDebug实现单步调试，还有Log 日志，像著名的log4j，还有就是运行状态监控。

### SysProc

这里主要存放系统进程相关的内容，包括了切面编程和最重要的并发、同步相关的知识。

（1）并发

并发这部分要了解多线程的基本概念、线程通信的基本概念。基本的异步模式，像Promise、Callback啊等等，还有就是异步的数据流，也就是消息总线，还有就是响应式开发。

（2）同步与线程安全

这边要了解锁的基本概念，譬如Java中的synchronized和Lock。然后还要了解一些内建的线程安全的数据结构。

# 当我要学习客户端开发:iOS/Android/Hybrid/WebAPP

随着前后端分离的概念日渐流行，实际上现在包括Web领域都可以认为是一个客户端。笔者阅读REST这篇论文的时候，最大的感受就是彻底的C/S化与无状态化。那么，在这一部分，笔者要解决的问题同样是，当我要学习Android/iOS/WebAPP的时候，我应该学些什么。这一部分会比上面的更加复杂，全部的列表可以看[这里](https://github.com/wxyyxc1992/Coder-Knowledge-Graph/blob/master/zh/client.md)。



## Language

此部分主要介绍用于开发对应程序的语言详情，基本上和上面的编程语言知识体系结构相一致。



## UI:界面呈现

这一部分基本上是整个客户端开发的最重要的地方，首先在UI.md中介绍界面呈现的基本原理，什么Screen、坐标系之类的。

### Components(基本组件)

本部分要介绍系统自带的基本组件，譬如Android里面的Activity、Fragment，iOS里面的UIView、UIViewController等等。此外，还需要介绍：
（1）Layout & Position

此部分介绍基本的布局与定位的知识。包括基本的布局约束，譬如左边距、右边距、居中等等。然后是基本的定位方式，包括绝对布局、相对布局、弹性布局和线性布局等等。接下来是基本的布局管理器，Android开发的同学应该对这个概念不陌生。然后就是自动布局或者所谓的响应式布局，对应了iOS中的AutoLayout和Web里面的响应式开发。

（2）Container

此部分主要介绍经常的作为容器的View，一个是页卡视图，就是常说的TabBar，譬如Android中的Tab、iOS中的TabbarController等等。还有导航视图，就是NavigationView，譬如iOS中的UINavigationController。最后是最常用的滚动视图，ScrollView，譬如Web中的Swiper等等。滚动视图还要解决几个问题：Infinite Scroll、上拉下拉刷新以及像ViewPager这样的基于页面的滑页式滚动。

（3）Router:页面路由

譬如ui-router等等。

### Interaction(用户交互)

本部分主要介绍用户交互相关知识。

（1）Event&Gesture(事件与手势操作)

这里对于用户常见的点击、拖拽等事件进行响应处理，包括了基本事件的绑定与监听、事件捕获传递与分发机制以及复杂手势的监听与识别，譬如多点触控、拖拽、滚动】缩放和摇晃等。

（2）Media(音视频播放、录制与相关操作)

主要包括了对于相机的基本操作、对于Audio的基本操作以及对于Video的播放。还包括譬如语音输入啊、直播啊等等。

（3）Sensor

本部分主要包括对于各种传感器，包括陀螺仪、重力传感器等的使用，譬如iOS的HealthKit就是放在这里的。

（4）Notification

这里记录对于通知栏的操作，包括本地通知与远程推送的通知。

### DVisual(绘图以及数据可视化)

本部分主要对于基本的绘图与数据可视化进行了记录，包括但不限于：
（1）Graphics

这里记录了基本的绘图、画笔的使用，包括了像颜色与取色、头像啊、表情啊之类的处理。

（2）Style&Theme

样式与主题的处理，在Android中就会经常涉及到样式与主题的概念，还有什么夜间模式、日间模式之类的。

（3）Filter

这里进行基本的滤镜与过滤的处理，注意，这里与图片部分的滤镜区别在于这里的滤镜是面向于某个View，而不仅仅是图片进行的。

（4）Chart

这里记录各种图表，什么折线图、饼状图等等。

（5）Map

这里记录地图相关，像对于百度地图的使用就放在这里。

（6）Barcode

这里记录二维码、条形码相关的内容。

### Animation(动画与变换)

本部分主要记录动画以及常见的变换的内容，包括了动画构造库以及常见的动画集合。动画构造库的话又会分为帧动画与属性控制这两种。

### Widgets(界面插件)

这里存放各式各样的插件，算是最复杂的一块。全部的列表可以看[这里](https://github.com/wxyyxc1992/Coder-Knowledge-Graph/blob/master/zh/client.md)。

（1）Dialog:对话框插件

包括了模态对话框、弹出层与提示层、覆盖层、Action Sheet等等。

（2）Indicator:指示器

包括了介绍或者引导页、时间显示、进度显示、文本显示以及效果、标签显示以及效果等等。

（3）Picker:输入器

包括了按钮、菜单、状态栏/工具栏、选择器、文本输入、时间与日期输入等等。

（4）TableGrid:网格与表单

包括了基本的列表的使用、网格的使用以及卡片式界面的使用。譬如iOS 的 UITableView、Android的CardView、RecycleView都要放在这里。

（5）Gallery:画廊

包括了图片的基本操作，譬如图片的加载、懒加载、缓存、动图的播放与控制、图片滤镜、图片标签、图片贴纸、图片裁剪与美化等等。还有图片相册的浏览、图片轮播、瀑布流方式图片展示、焦点图浏览等等。

（6）WebView

包括了WebView的基本使用、本地交互以及Cordova的集成等等。

## Network:网络调用

本部分主要讲解网络调用，包括了：
（1）网络管理

譬如网络可达性判断、打开网络等等放在这。

（2）Socket

（3）HttpClient

常见的网络客户端的使用，譬如Android中的okHttp、iOS中的AFNetwork等等的基本使用都放在这，基本的请求管理、并发请求等等。注意，这里还有一个叫HTTPStubs或者MockServer，是方便开发或者测试进行的本地伪装网络请求。

（4）Push

本部分进行推送与长连接实现的内容。

（5）FileTransfer

本部分进行基本的文件传输，上传和下载的记录。

（6）Serialization
本部分进行常见的譬如JSON、FlatBuffer以及MsgPack序列化的研究。

## Storage:存储

本部分主要对于存储相关的内容进行记录，包括：
（1）DataBase(数据库)

像iOS的CoreData、SQLite的使用，以及最近比较火的Realm的使用。

（2）File(文件)

这里记录了基本的文件浏览与访问，还有对于配置文件、资源文件的使用等等。

（3）Cache(缓存系统)

## SysProc:系统与进程

（1）组件之间的通信

像Android中利用AIDL进行通信、利用ContentProvider进行通信等等。

（2）并发与异步

（3）服务

（4）RPC:远程服务调用

## TestRelease

本部分主要记录测试与发布相关的内容：
（1）Debug(调试与记录)

包括日志、线程与Crash的监控等等

（2）Test

包括了单元测试、界面测试以及第三方测试等等。

（3）Release

包括了Android中的签名、iOS里面的提交到AppStore的流程还有类似于云测这样的第三方测试。

（4）Optimization

优化

（5）Plugin & Dynamic Patch(插件化与动态更新)

这个在Android中用的比较多，像阿里的那个可以动态更新的工具。

（6）APM:应用状态追踪与评分

# 当我要学习服务端开发:SpringMVC/Laravel/Rails




![](http://ww3.sinaimg.cn/large/697e0967jw1ew4b6sp4zyj20qo0k0gmh.jpg)



- Introduction
- Quick Start
  - Installation
  - Generator
  - Dependence Managent：依赖管理与自定义模块导入
  - Deployment
- Application
  - LifeCycle
  - Configuration
    - Multiple Modules
- Route
- Controller
  - Request
  - Session
  - Response
    - Pagination
- Model
  - Relational DataBase
    - ORM
    - MySQL
    - Oracle
    - SQLServer
    - PostgreSQL
  - NoSQL
    - MongoDB
  - Cache
    - Redis
    - Memcache
- View
  - Template
- Middleware
  - Auth
- Service
  - IoC/DI
  - Log
- Test
- Concurrence
  - Queue



> 笔者在这里打个广告，介绍下笔者自己借鉴了微服务、Redux等等杂七杂八东西之后对于RESTful深入理解提出的一些构想：[Reactive Abstract Resource Flow](https://segmentfault.com/a/1190000004600730)


# 当我要学习数据科学:MachineLearning/NLP/DeepLearning/Statistic



> 这是笔者自己的一个数据科学的[Gitbook](https://wxyyxc1992.gitbooks.io/datascience-practice-handbook/content/)



对于数据科学这部分，笔者自己也正在完善中，只能是大概如下：

- Methodology:方法理论

    - DataProcess:数据处理

    - MachineLearning:机器学习的计算算法

        - ANN:人工神经网络

        - Clustering:聚类

        - Regression:回归

        - SVM

    - NLP:自然语言处理

        - PatternMatch:模式识别

        - SentimentAnalysis:情感分析

        - TopicModel:主题模型

        - Word2Vec:词向量

- Library:开发库

    - ClusterComputing

        - MLib

        - Madout

    - Java

        - Weka

        - Deeplearning4j

    - MATLAB

    - Python

        - Scikit

        - Tensorflow

    - R

- Application:应用

    - Classification:分类

    - CommunityDetection:社团发现

    - Personas:用户标签画像

    - Recognition:模式识别

    - RecommendSystem:推荐系统





# 当我要学习云计算与大数据的基础架构:分布式计算/运维/存储/虚拟化

云计算和大数据的概念很火啊，作为一个程序狗，笔者也是算是从四年前就开始接触到这方面的技术，不过讲真，因为没去过大公司，只能看着啥阿里、美团在InfoQ、程序员杂志上分享自己的高可用平台眼馋。很多技术笔者在自己的电脑上用过，也一直保持关注，但还真没投入过实战。这一部分在笔者笔记内的代号是Infrastructure，就是基础架构，主要包括了DCE(分布式计算环境)、Distributed(分布式)、OM(运维)、Storage(存储)以及Virtualization(虚拟化)这几个方面。

## DCE:分布式计算环境

分布式计算环境主要会介绍基于批式计算和流式计算的常见的框架和原理，这里推荐一波笔者翻译的：[Apache流计算框架对比](https://segmentfault.com/a/1190000004593949?_ea=665564)。常见的批处理框架就是Hadoop的MapReduce和Spark(不知道有没有理解错) ，而流处理框架包括但不限于Flink、Storm还有Spark Streaming 。



## Distributed:分布式系统

分布式系统这部分，一方面要了解分布式系统的基本的知识原理，另一方面就是应用了，笔者主要分为了以下几个部分：

- JobSchedule:任务调度与管理，譬如Disque

- MOM:消息中间件，像Kafka、RabbitMQ、ZeroMQ这些

- ProgramModel:编程模型

- ResManager:资源管理，典型的就是Yarn和Mesos

- ServiceCoordination:服务发现和服务调度，典型的就是Zookeeper和Etcd，话说阿里的Dubbo我也放在这了，确实不错的。



## OM:运维管理

这部分是运维管理，也包含了DevOps的很多理念在这边，主要就是：

- ContinuousDelivery:持续交付，也包括了CI的概念，像Jenkins这样的工具介绍

- Log:日志

    - ELK

    - Flume

- MonitorAnalytic:应用追踪与分析


## Storage:存储

这部分就是介绍各种各样的存储系统：

- Cache:缓存，著名的Memcache就放在这

- DataBase:数据库系统

    - ColumnOriented:列数据库，譬如HBase

    - Document:文档型数据库，譬如Mongodb、Cassandra

    - Graph:图数据库

    - KeyValue:键值数据库，譬如Redis

    - Relational:关系型数据库

        - MySQL

        - Oracle

        - SQLServer

- DataWareHouse:数据仓库，譬如Hive

- ETL:数据存储过程，譬如Kettle

- FileSystem:文件系统

    - NTFS

    - ext4

    - RAMFS:譬如Taycon

    

## Virtualization:虚拟化

这部分主要介绍虚拟化的相关知识和原理，大概如下：

- Container:容器技术，很火的，不多说

    - Docker

    - Rocket

- OpenStack

- SandBox:传统的沙箱的技术

- Hypervisor

    - Xen

    - VShpere    




# 当我要学习信息安全:移动安全/计算机取证/渗透测试/逆向工程/加固

笔者本科里学习的是信息安全，当时做Windows驱动开发的，每天扒MSDN的文档，当时是以越向下为荣，现在想想就觉得好凄惨。后来笔者的第一份兼职也是和信息安全相关，也搞过站抓过鸡，不过后来觉得唔至少在自己浅薄的认知里，做安全很大程度上是去发现现有系统的问题，不能说无聊，只能说没有做工程开发那样让我来的有兴趣。笔者在自己的信息安全相关的学习中，大概进行了如下归类：

- ComputerForensics:计算机取证相关

- Cryptology:密码学与编码相关

- MobileSecurity:移动安全，包括像应用程序的逆向还有木马啊、系统破解啊之类的，笔者当年也研究过Xposed，还弄了个[Android-AppMonitorDroid](https://github.com/wxyyxc1992/Android-AppMonitorDroid)

- Reinforce:主机加固啊之类的

- ReverseEngineering:逆向工程，就是传统的用OD、IDA进行破解的，还有免杀也属于这一块

- PenetrationTesting:渗透测试，这波就比较大了

    - Tools:常见的渗透测试工具的介绍，像Kali、Backtrack、MSF之类的

    - Vulns:漏洞和0Day的总结

        - Application:应用程序的漏洞，像什么ECShop之类的

        - DataBase:数据库漏洞

        - Middleware:中间件漏洞

        - OS:操作系统漏洞   

    - Tech

        - 踩点扫描，啥社会工程啊之类的

        - 漏洞利用，DDOS之类的

        - 内网渗透，内网监听、DNS投毒之类的

        - 前端安全，啥SQL注入、XSS、CSRF属于这一块

        - 无线安全

    



