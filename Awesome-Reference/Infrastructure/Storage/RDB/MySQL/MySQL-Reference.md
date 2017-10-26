[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 
 


# MySQL 实践参考资料


# Usage



- [2017-OnlineSchemaChange #Project# ](https://github.com/facebookincubator/OnlineSchemaChange): A tool for performing online schema changes on MySQL.


# StoreEngine

- [MySQL 线程池内幕](https://my.oschina.net/andylucc/blog/820624)：在MySQL中，线程池指的是用来管理处理MySQL客户端连接任务的线程的一种机制，我厂用的percona版本已经是集成了线程池，只需要通过如下参数开启即可。

- [MySQL锁系列（七）之 锁算法详解](https://parg.co/bXN)

- [InnoDB 存储引擎体系架构](https://segmentfault.com/a/1190000004673132)

- [MySQL · InnoDB 文件系统之IO系统和内存管理 ](http://mp.weixin.qq.com/s?__biz=MzAwNjQwNzU2NQ==&mid=2650342507&idx=1&sn=b7beed97485a9eb1b2b5d80c16c02ef7&scene=23&srcid=0417dJlCwbKo1B0hQQrlG2jP#rd)


# Resource

## Book



- [2017-MySQL 学习笔记【Book】](http://notes.diguage.com/mysql/)


- [2017-The Unofficial MySQL 8.0 Optimizer Guide【Book】](http://www.unofficialmysqlguide.com/introduction.html): Morgan Tocker is the Product Manager for the MySQL Server at Oracle. He has previously worked in a variety of roles including Support, Training and Community. Morgan is based out of Toronto, Canada.
## Tool: 辅助工具


- [2017-SQLAdvisor](http://6me.us/cULIo3): SQLAdvisor是由美团点评公司技术工程部DBA团队（北京）开发维护的一个分析SQL给出索引优化建议的工具。它基于MySQL原生态词法解析，结合分析SQL中的where条件、聚合条件、多表Join关系 给出索引优化建议。目前SQLAdvisor在美团点评内部广泛应用，公司内部对SQLAdvisor的开发全面转到github上，开源和内部使用保持一致。


# Performance: 性能优化

- [2017-我必须得告诉大家的 MySQL 优化原理](http://www.jianshu.com/p/d7665192aaaf)：理解这些优化建议背后的原理就尤为重要，希望本文能让你重新审视这些优化建议，并在实际业务场景下合理的运用。

- [2017-巧用复合索引，有效降低系统 IO](https://mp.weixin.qq.com/s/G-UXWThBC9lH0f-Nx6UCBg): 今天我们将围绕B*Tree索引的使用，解读如何合理地使用索引，以及如何通过正确的索引来提高性能。

- [解开发者之痛：中国移动MySQL数据库优化最佳实践](http://www.tuicool.com/articles/MFjeIrm)

- [实例解析MySQL性能瓶颈排查定位](http://ourmysql.com/archives/1416?utm_source=tuicool&utm_medium=referral)

- [高效MySQL的N个习惯 ](http://mp.weixin.qq.com/s?__biz=MjM5NzAzMTY4NQ==&mid=2653929230&idx=1&sn=60dd4c8527af847dd0ef58cc4c2c976e&chksm=bd3b25648a4cac72f0c5d4055b5a743b3847775c97b73c613a4b0b88271f16026d480d1ff2f0&scene=0#rd)

- [MySQL大表优化方案](https://segmentfault.com/a/1190000006158186?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

- [Mysql索引实现原理及相关优化策略 ](http://mp.weixin.qq.com/s?__biz=MzA4ODIxMzg5MQ==&mid=2653995839&idx=1&sn=21dacffad0969b52589d2dcbd4bfb5a0&scene=23&srcid=0602w3n2mTGIqDpvQaJz0kqt#rd)

- [都是主键惹的祸-记一次死锁分析过程 ](http://mp.weixin.qq.com/s?__biz=MjM5NzAzMTY4NQ==&mid=2653929270&idx=1&sn=e0e2bf70746ce4d21085a21a5b61e997&chksm=bd3b255c8a4cac4ae07923b76e21b34e5c92297bd775e32dc6c79c9c61d8f9a280b59c671d53&scene=0#wechat_redirect)


# EPractices

- [MySQL表字段字符集不同导致的索引失效问题](http://www.tuicool.com/articles/A7nM3yI)
 



# Distributed Cluster: 分布式集群

- [MySQL Group Replication官方文档中文版](http://storage.360buyimg.com/brickhaha/Mysql.pdf)：MySQL Group Replication（简称MGR）是MySQL官方于2016年12月推出的一个全新的高可用与高扩展的解决方案。MySQL组复制提供了高可用、高扩展、高可靠的MySQL集群服务。

- [2017-五大常见的MySQL高可用方案](https://zhuanlan.zhihu.com/p/25960208)：这里只讨论常用高可用方案的优缺点以及高可用方案的选型。





