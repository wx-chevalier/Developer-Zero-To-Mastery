[![返回目录](https://parg.co/UGo)](https://parg.co/b4z)

# 分布式系统学习与实践资料索引

* [分布式系统本质论](http://www.52cs.org/)

- [In search of a simple consensus algorithm](http://rystsov.info/2017/02/15/simple-consensus.html)

# Distributed UUID

* [五分钟了解分布式 ID 生成方案](http://mp.weixin.qq.com/s?__biz=MzA5ODM0NjA3NA==&mid=2651209088&idx=1&sn=640af6452e8644e65c5c5985eb405358&scene=4#wechat_redirect)
* [2017-Leaf—— 美团点评分布式 ID 生成系统](http://tech.meituan.com/MT_Leaf.html)：在复杂分布式系统中，往往需要对大量的数据和消息进行唯一标识。如在美团点评的金融、支付、餐饮、酒店、猫眼电影等产品的系统中，数据日渐增长，对数据分库分表后需要有一个唯一 ID 来标识一条数据或消息，数据库的自增 ID 显然不能满足需求；特别一点的如订单、骑手、优惠券也都需要有唯一 ID 做标识。此时一个能够生成全局唯一 ID 的系统是非常必要的。。

## Twitter-Snowflake

* [Twitter-Snowflake，64 位自增 ID 算法详解](http://www.lanindex.com/twitter-snowflake%EF%BC%8C64%E4%BD%8D%E8%87%AA%E5%A2%9Eid%E7%AE%97%E6%B3%95%E8%AF%A6%E8%A7%A3/)

* [微信序列号生成器架构设计及演变](http://h2ex.com/1163)
