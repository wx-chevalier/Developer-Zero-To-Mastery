[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 
 

![](https://img.readitlater.com/i/cdn-images-1.medium.com/max/800/1*LBocICeBuP3FSLPMBLA04g/RS/w1408.png?&ssl=1)
 

# 消息中间件资料索引

- [2017-消息队列的对比调研](http://www.jianshu.com/p/f056a74d77a4)：我们发现Redis的作者出了一个新的消息队列系统Disque，我做了一点调研来决定我们使用哪种消息队列，主要对比了Disque、Kafka和RocketMQ。

- [Message Queue的设计和实现](http://mp.weixin.qq.com/s/AgdayVL0pvcwL0amLouu-Q) 


# RocketMQ

- [Apache RocketMQ Official](https://rocketmq.incubator.apache.org/docs/quick-start/) 

- [2017-Apache RocketMQ 背后的设计思路与最佳实践](http://jm.taobao.org/2017/03/09/20170309/) 

- [2017-专访RocketMQ联合创始人：项目思路、技术细节和未来规划](http://www.infoq.com/cn/news/2017/02/RocketMQ-future-idea)

- [2016-分布式开放消息系统(RocketMQ)的原理与实践](http://www.jianshu.com/p/453c6e7ff81c) 

- [2016-分布式消息队列 RocketMQ【Series】](http://blog.csdn.net/chunlongyu/article/category/6638499) 

- [2016-RocketMQ 源码分析系列文章【Series】](http://blog.csdn.net/a417930422/article/category/6423649) 

- [2016-Jaskey RocketMQ 系列文章【Series】](http://jaskey.github.io/blog/2016/12/15/rocketmq-concept/) 

- [2017-YunaiV RocketMQ 源码解析系列文章【Series】](https://github.com/YunaiV/Blog/tree/master/RocketMQ) 


# Kafka

- [2017-Apache Kafka Goes 1.0](https://www.confluent.io/blog/apache-kafka-goes-1-0/): The feature set and the broad deployments all speak of a stable and Enterprise-ready product, which leads to an important step we are taking with this release: as of today, Apache Kafka is going 1.0!

- [2017-View Counting at Reddit](https://parg.co/bJE): Reddit’s data pipeline is primarily oriented around Apache Kafka. When a user views a post, an event gets fired and sent to an event collector server, which batches the events and persists them into Kafka.

- [Kafka 设计解析（六）- Kafka 高性能架构之道](http://www.jasongj.com/kafka/high_throughput/)

- [Benchmarking Kafka Performance【Series】](https://hackernoon.com/benchmarking-kafka-performance-part-1-write-throughput-7c7a76ab7db1)：a series that explores Kafka performance on multiple public cloud providers. [Part 1: Write Throughput](https://hackernoon.com/benchmarking-kafka-performance-part-1-write-throughput-7c7a76ab7db1)

- [Kafka 深度解析](http://www.jasongj.com/2015/01/02/Kafka%e6%b7%b1%e5%ba%a6%e8%a7%a3%e6%9e%90/)

- [Kafka 源码分析](https://zqhxuyuan1.gitbooks.io/kafka/content/chapter1-intro.html)

- [Kafka 技术内幕系列博客](http://zqhxuyuan.github.io/2017/01/01/Kafka-Code-Index/)
 

- [Awesome Kafka](https://github.com/infoslack/awesome-kafka#books) 

- [2017-Exactly-once Semantics are Possible: Here’s How Kafka Does it](https://parg.co/bXj): In this post, I’d like to tell you what exactly-once semantics mean in Apache Kafka, why it is a hard problem, and how the new idempotence and transactions features in Kafka enable correct exactly-once stream processing using Kafka’s Streams API.

- [2017-Delivering Billions of Messages Exactly Once](https://segment.com/blog/exactly-once-delivery/):In the past three months we’ve built an entirely new de-duplication system to get as close as possible to exactly-once delivery, in the face of a wide variety of failure modes. The new system is able to track 100x the number of messages of the old system, with increased reliability, at a fraction of the cost. Here’s how.
