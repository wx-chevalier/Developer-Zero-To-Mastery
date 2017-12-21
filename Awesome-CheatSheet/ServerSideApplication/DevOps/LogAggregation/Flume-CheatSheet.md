[![返回目录](https://parg.co/UCb)](https://parg.co/UCH) 
 
 
# Source

| **Source 类型**            | **说明**                                                     |
| -------------------------- | ------------------------------------------------------------ |
| Avro Source                | 支持 Avro 协议（实际上是 Avro RPC），内置支持                |
| Thrift Source              | 支持 Thrift 协议，内置支持                                   |
| Exec Source                | 基于 Unix 的 command 在标准输出上生产数据                    |
| JMS Source                 | 从 JMS 系统（消息、主题）中读取数据，ActiveMQ 已经测试过     |
| Spooling Directory Source  | 监控指定目录内数据变更                                       |
| Twitter 1% firehose Source | 通过 API 持续下载 Twitter 数据，试验性质                     |
| Netcat Source              | 监控某个端口，将流经端口的每一个文本行数据作为 Event 输入    |
| Sequence Generator Source  | 序列生成器数据源，生产序列数据                               |
| Syslog Sources             | 读取 syslog 数据，产生 Event，支持 UDP 和 TCP 两种协议       |
| HTTP Source                | 基于 HTTP POST 或 GET 方式的数据源，支持 JSON、BLOB 表示形式 |
| Legacy Sources             | 兼容老的 Flume OG 中 Source（0.9.x 版本）                    |

# Channel

| **Channel 类型**           | **说明**                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| Memory Channel             | Event 数据存储在内存中                                                                                 |
| JDBC Channel               | Event 数据存储在持久化存储中，当前 Flume Channel 内置支持 Derby                                        |
| File Channel               | Event 数据存储在磁盘文件中                                                                             |
| Spillable Memory Channel   | Event 数据存储在内存中和磁盘上，当内存队列满了，会持久化到磁盘文件（当前试验性的，不建议生产环境使用） |
| Pseudo Transaction Channel | 测试用途                                                                                               |
| Custom Channel             | 自定义 Channel 实现                                                                                    |

# Sink

| **Sink 类型**       | **说明**                                               |
| ------------------- | ------------------------------------------------------ |
| HDFS Sink           | 数据写入 HDFS                                          |
| Logger Sink         | 数据写入日志文件                                       |
| Avro Sink           | 数据被转换成 Avro Event，然后发送到配置的 RPC 端口上   |
| Thrift Sink         | 数据被转换成 Thrift Event，然后发送到配置的 RPC 端口上 |
| IRC Sink            | 数据在 IRC 上进行回放                                  |
| File Roll Sink      | 存储数据到本地文件系统                                 |
| Null Sink           | 丢弃到所有数据                                         |
| HBase Sink          | 数据写入 HBase 数据库                                  |
| Morphline Solr Sink | 数据发送到 Solr 搜索服务器（集群）                     |
| ElasticSearch Sink  | 数据发送到 Elastic Search 搜索服务器（集群）           |
| Kite Dataset Sink   | 写数据到 Kite Dataset，试验性质的                      |
| Custom Sink         | 自定义 Sink 实现                                       |
