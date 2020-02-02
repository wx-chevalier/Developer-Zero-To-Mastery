# Designing Data-Intensive Applications

《Designing Data-Intensive Applications》着实是一本非常优秀的讲解数据库与分布式系统底层实现原理的书籍，特别是 Martin Kleppmann 从理论到实践深入浅出地介绍了这些系统的实现路径。

本书主要分为三个部分：1~4 章介绍 Foundations of Data Systems，5~9 章介绍了 Distributed Data，10~12 章介绍了 Derived Data。

# 1. Foundations of Data Systems

介绍性章节定义了可靠性，可伸缩性和可维护性。 我特别喜欢Twitter向关注者传递推文的演变方式的例子。 关于响应时间也有一个好处：当最终用户需要多个后端呼叫时，即使只有一小部分单独的请求很慢（尾部延迟放大），许多用户也可能会遇到延迟。

# 2. Data Models and Query Languages

本章讨论了众所周知的关系模型和文档模型（NoSQL）。 有一个很好的示例说明了如何将LinkedIn配置文件表示为JSON文档–配置文件的树状结构非常适合用JSON表示。 但是，随着数据在文档之间变得更加相互关联（在LinkedIn示例中：对公司和大学的引用，用户之间的建议），可能会出现问题。 在文档模型中，联接从数据库转移到应用程序。

文档数据库有时称为无模式（schema-less）。 这是不正确的，因为存在隐式架构。 更好的方式是写模式（schema-on-write，数据库在存储值时强制执行模式）和读模式（schema-on-read，模式是隐式的，仅在读取数据时才解释）。 这类似于编程语言中的静态类型和动态类型。

接下来，将讨论查询语言，并很好地说明了命令式查询（编程语言中的循环）与声明式查询（SQL中的SELECT语句）之间的对比。 最后，讨论了类似图形的数据模型（例如，由Neo4J使用）和该模型的各种查询语言。

# 3. Storage and Retrieval

这是我最喜欢的章节之一。 我以前参加过关于数据库的MOOC课程，但是没有过多谈论数据库的内部知识。 本章首先说明LSM树和B树的工作方式。

## LSM-trees

Kleppmann首先用两行bash代码创建一个简单的数据库。 通过将行（键后跟值）添加到文件中来存储键和值。 要检索给定密钥的值，请遍历文件，并在找到密钥后获取该值。 写入现有密钥仅意味着将新行附加到文件中。 文件中保留了带有键和值的旧行。 但是get函数仅返回为给定键找到的最后一个值，因此文件中保留旧行并不重要。

 这里的关键（哈哈）思想是仅将其追加到文件中是快速的（与更改文件中的值相反）。 但是，扫描整个文件以获取键的值很慢。 一种提高速度的方法是保留一个单独的散列，该散列具有一个指针，该指针指向文件中每个键的起始位置。 然后，读取操作首先查找要使用的偏移量，然后从文件中的该位置开始读取。

 接下来，我们假设文件中的所有行均按键排序。 这些文件称为字符串排序表，缩写为SSTables。 如果我们有许多在不同时间创建的文件，则给定密钥可能会出现在许多文件中。 但是，密钥的最新值是唯一的有效值-所有其他值都已过时（由较新的值代替）。 我们可以将这些文件合并为一个文件，同时摆脱所有过时的行。 这称为压缩，并且由于所有文件均按键排序，因此可以有效地完成合并排序的方式。

 首先如何创建排序的文件？ 您维护一个称为内存表的内存中树结构（例如红黑树或AVL树）。 这样可以使数据保持排序，并且一旦树达到一定大小（几兆字节），它就会作为新的SSTable被写出。 添加或更改键的值只是意味着将其添加到内存表中（如果已经存在，则可能会覆盖它）。 要查找键的值，请先在内存表中搜索，然后在最新的SSTable中搜索，然后在下一个较旧的SSTable中搜索，依此类推。

 这种存储结构称为日志结构合并树（LSM-tree），例如在Cassandra中使用。

## B-trees

B树是最广泛使用的索引结构（在传统SQL数据库中使用），并且与LSM树有很大不同。  B树还按键对键/值对进行排序，以便快速查找。 但是，数据以固定大小的块（也称为页面）存储在磁盘上，传统上大小为4 KB。 要更改块中的值，需要写入整个块。 通过使用指向子块的指针来创建树，在该子块中，键范围变得越来越具体，直到找到包含所需值的叶块为止。 分支因子描述了父节点可以具有多少个子节点。

 大多数数据库都可以容纳在三层或四层深的B树中–具有4 KB块且分支因子为500的四层树最多可以存储256 TB。  B树结构是1970年由波音公司的Rudolf Bayer和Edward McCreight引入的。 目前尚不清楚B的含义-根据维基百科，已经提出了波音，平衡，宽阔，浓密和拜耳的建议。

 LSM树通常用于写入，而B树则用于读取。 但是，有几个因素会影响性能，这些因素将在本章中进行讨论。 描述了不同类型的优化，以及用于处理崩溃的策略，例如使用预写日志（WAL，也称为重做日志）。
 
## Transactions and Analytics

当数据库首次出现时，它们通常用于商业交易，例如进行销售或支付薪水。 即使将数据库用于其他任务，术语 transaction 仍然存在。现在数据库用法分为两大类：在线事务处理（OLTP）和在线分析处理（OLAP）。  OLTP通常在面对最终用户时使用，并且交易通常很小。  OLAP在数据仓库环境中使用得更多，在该环境中查询可以聚合数百万条记录中的值。  OLAP数据库通常以星型模式进行组织。有时面向列的存储用于OLAP用例。 当处理一列中的多个值时（例如求和或求平均值），这可能会更有效率。 本章提供了一个很好的示例，说明如何使用位图和游程长度编码来压缩存储的值。

本章很长，但是非常好。 我在工作中同时使用MySQL和Cassandra，这有助于理解内部存储模型之间的差异。

# 4. Encoding and Evolution

当程序中的数据需要保存到文件或通过网络发送时，需要以某种格式进行编码。

- 向后兼容性–新代码可以读取由旧代码编写的数据。

- 前向兼容性–旧代码可以读取新代码编写的数据。

目前常见的有三种类型的数据编码：

- 第一种类型是特定于语言的格式，例如Java的java.io.Serializable或Python的pickle。使用此类编码方式存在许多问题：安全性，版本控制，性能以及它们与特定编程语言绑定的事实。

- 接下来是标准化的文本编码，例如XML，JSON和CSV。 他们也有问题。 例如，它们不支持二进制字符串（没有字符编码的字节序列）。  JSON不能区分整数和浮点数，也没有指定精度。  CSV是一种模糊的格式。 例如，如何处理逗号和换行符？

- 最后，还有几种著名的二进制编码格式：Thrift（最初来自Facebook），Protocol Buffers（最初来自Google）和Avro（最初来自Hadoop项目）。 它们都有模式，并使用一些巧妙的技巧使编码紧凑。

# 5. Replication

这是“分布式数据”部分的第一章。 复制意味着相同的数据存储在多台计算机上。 复制的一些原因是：即使系统的某些部分发生故障也要继续工作（可用性提高），使数据在地理位置上更接近用户（减少延迟），以及通过从许多计算机提供相同的数据来增加读取吞吐量。

涵盖了三种不同的模型：单领导者（Single Leader），多领导者（Multi Leader）和无领导者（Leaderless）。 复制可以是同步的也可以是异步的。 如果是同步的，则领导者和所有关注者在确认写回用户之前会先对其进行确认。 如果任何跟随者速度慢或失败，则这可能会阻止所有写入。 因此，异步复制更为常见。

There are many tricky aspects of replication. The first is when setting up a new follower. Since data is constantly changing in the leader, typically you take a consistent snapshot of the leader’s database and copy it to the new follower. Then you need to process the backlog of changes that happened during the copying process.

If a follower fails, it needs to catch up once it recovers. This means it needs to keep track of which transactions from the leader it had already processed before failing. If the leader fails, a new leader needs to be selected. This is called failover. Many things can go wrong here. If asynchronous replication is used, the new leader may not have received all the writes. If the former leader rejoins the cluster after a new leader is selected, what should happen to those not-replicated writes?

Performing the replication is also tricky. Simply repeating the SQL statements will cause problems if NOW() or RAND() are used. There are many other edge cases as well, so this method is generally not used. Instead, the database internal write-ahead log is used. This is an append-only sequence of bytes containing all the writes to the database.

## Replication Lag

When you use asynchronous replication you have eventual consistency. Even if the replication lag usually is small, a whole range of factors (for example network problems or high load) can cause the lag to become several seconds or even minutes. Several problems can occur when you have replication lag: If you submit data, and then reload the page, you may not see the data you just wrote, if the read of the reload is done from a different server than received the write. There are several possible solutions to this that guarantee that you read your own writes. This can be even trickier with cross-device reads (updating from a laptop, then reading from a phone).

Another anomaly is when it appears as if time moves backwards. The first read returns a comment recently made by user X. When refreshing the page, the read is from another (lagging) server, and the comment by user X has not yet been made. Monotonic reads is a way to avoid this situation, for example by routing all reads to the same server. If eventual consistency is too weak, distributed transactions can be used.

## Multi-Leader Replication

In multi-datacenter operations, it can make sense to use multi-leader replications. There are several advantages: performance (writes don’t all have to go through a single leader), tolerance of datacenter outages, tolerance of network problems (temporary problems don’t prevent writes to go through). However, with more than one leader there is the risk of write conflicts. There are several ways to handle these: Last write wins (based on timestamp or unique id), merge the values together automatically, or keep the conflicting values and let the user pick the value to keep.

## Leaderless Replication

Dynamo, Cassandra, Riak and Voldemort all use leaderless replication. In order to make sure no writes are lost, and that no reads return stale values, quorum reads and writes are used. If there are n replicas, every write must be confirmed by w nodes to be successful, and we must query at least r nodes for each read. As long as w + r > n, we expect to get up-to-date values when reading. In the simplest case, n=3 and w=2 and r=2. However, there can still be edge cases – for example, if a write is concurrent with a read, the write may only be present in some of the replicas, and it is unclear if the new or old value should be returned for the read.

If a node has been down, and has stale values, it can be detected when reading a value from it. This can initiate a repair. There can also be an anti-entropy process running in the background that looks for inconsistencies and initiates repair.

The chapter ends with a good example of how version vectors can be used to keep track of causal dependencies between concurrent events.

# 6. Partitioning

The reason for breaking the data up into partitions (also known as sharding) is scalability. Note that you can have partitioning and replication at the same time – each partition can be replicated to several nodes. Each piece of data belongs to exactly one partition. The partitioning can be done on key range or by hashing of the key. The advantage of partitioning may be lost if some partitions are hit more than others (skewed workloads). Secondary indexes can get tricky with partitioned databases. One approach to handling this is scatter/gather.

As the data grows and changes, there may be a need to rebalance – moving load from one node to another. You should not move more data than is necessary. For example, simply using hash mod N will cause too many changes. A better approach is to use many more partitions than there are nodes, and only move entire partitions between nodes. If rebalancing happens automatically, there is a risk of cascading failures. Therefore it may be good to only do it manually. The routing of requests to the correct partition is often handled by a separate coordination service, such as Zookeeper.

# 7. Transactions

This chapter covers transactions on a single machine. A transaction groups writes and reads into one logical unit. The transaction as a whole either succeeds (commit) or fails (abort, rollback). This frees the application developer from having to handle a lot of different potential problems: that the connectivity to the database is lost, that the database or application crashes before all data is written, that several clients may be overwriting each other’s data etc.

ACID stands for Atomicity, Consistency, Isolation and Durability. Atomicity is not about concurrency (isolation is). Instead it means that either all writes succeeded, or none. There is no partially written data. Consistency means that invariants must always be true before and after a transaction. For example, that credits and debits across all accounts are always balanced. Some invariants, such as foreign key constraints and uniqueness constraints, can be checked by the database. But in general, only the application can define what is valid or invalid data – the database only stores the data.

Isolation means that concurrently executing transactions don’t interfere with each other. Much of the rest of the chapters deals with this. Finally, durability means that data that has been written successfully will not be lost. However, even if data is written to disk, there are many ways it can be lost: disks can get corrupted, firmware bugs can stop your reads, the machine can die and prevent getting to the data even if the data is fine on the disk.

Isolation Levels
When multiple clients concurrently read and update data, there are an amazing number of pitfalls. To avoid these, there are several isolation levels to prevent problems.

The most basic level is read committed. It means that when reading, you will only see committed data, not data in the process of being written but not yet committed. When writing to the database, you will only overwrite data that has been committed. This is also known as no dirty reads and no dirty writes.

Snapshot isolation deals with consistency between different parts. If you have two accounts with $500 in each, and you read the balance from the first, then the balance from the second (both reads in the same transaction), they should sum to $1000. However, between the first and second read, there could be a concurrent transaction moving $100 from the second account to the first. So the first read could give $500, while the second read returns $400 (since $100 has already been subtracted here). If we repeat the same account reads again, we would get $600 for the first, and $400 for the second, so now they sum to \$1000 as expected. If the problem of the sum changing is avoided, it is called snapshot isolation, also known as repeatable read.

The problem is that we want what we see in the database at a given point in time to be consistent. We don’t want to see the case where the total is only \$900 in the example above. This is important for example when taking a backup. It may take hours to make the backup, and the data keeps changing, but we want what we store in the backup to be consistent. The same goes for long-running queries – we want them to be executed on a consistent snapshot. A common solution for this is to use multi-version concurrency control (MVCC). The database can keep several different committed versions of an object, because various in-progess transactions may need to see the state of the database at different points in time.

When two transactions both write data, there is a risk of lost updates. For example if two users concurrently read a counter, increment it, and write back the result, the final counter value may only have been updated by one, not by two. If a transactions read some information, bases a decision on the information, and writes the result, there can be write skew. This means that by the time the result is written, the premise it was based on is no longer true. For example, a meeting room booking systems that tries to avoid double-bookings.

Serializable transactions
A sure way of avoiding problems is if all transactions are done serially instead. However, often the performance suffers too much then. In some circumstances, you can actually execute all transactions serially. You need to have the whole dataset in memory, and use stored procedures to avoid network roundtrips during the transaction, and the throughput must be low enough to be handled by a single CPU.

For about 30 years, the only widely used algorithm for serializability was two-phase locking (2PL). Extensive locking means that the throughput suffers. You can also easily get deadlocks. A new algorithm called serializable snapshot isolation (SSI) can also provide serializablity, but with better performance due to optimistic concurrency control, as opposed to pessimistic concurrency control used by 2PL.

# 8. The Trouble with Distributed Systems

This is my other favorite chapter in the book (together with chapter 3, Storage and Retrieval). Even though I worked with distributed systems and concurrency issues for a long time, this chapter was a real eye-opener for me with respect to all the ways things can go wrong.

Unreliable networks. The connections between nodes can fail in various ways. In addition to the normal failure modes, some unusual ones are listed: a software upgrade of a switch causes all network packets to be delayed for more than a minute, sharks bite and damage undersea cables, all inbound packets are dropped, but outbound packets are sent successfully. Even in a controlled environment, such as one datacenter, network problems are common. One study showed 12 network faults per month. The only solution for detecting network problems is timeouts.

Unreliable clocks. Time-of-day clocks return the current date and time according to some calendar. They are usually synchronized with NTP. Because the local clock on the machine can drift, it may get ahead of the NTP time, and a reset can make it appear to jump back in time. Monotonic clocks are more suitable to measuring elapsed time – they are guaranteed to always move forward.

Even if NTP is used to synchronize different machines, there are many possible problems. Since there are network delays from the NTP server, there is a limit to how accurate the clocks can be. Leap seconds have also caused many large outages. These and other problems mean that a day may not have exactly 86,400 seconds, clocks can move backwards, and time on one node may be quite different from time on another node. Furthermore, incorrect clocks easily go unnoticed.

Relying on timestamps for ordering events, such as Last Write Wins in for example Cassandra, can lead to unexpected results. One solution, used by Google’s Spanner, is to have confidence intervals for time stamps, and make sure there is no overlap when ordering events.

Process Pauses. Another problem related to time is process pauses. Code that checks the current time, and then take some action may have been paused for many seconds before the action is taken. There are many ways this can happen: garbage collection, synchronous disk access that is not obvious from the code (Java classloader lazily loading a class file), operating system swapping to disk (paging) etc.

To handle these various problems in distributed systems, the truth is defined by the majority (more on this in the next chapter). The possible problems described here can lead to some very tricky situations. Even worse would be if participating nodes would deliberately try to cause problems. That is called Byzantine faults, but this is not covered in this book. By having control over all the servers involved, such problems can be avoided.

The chapter ends by defining safety and liveness. Safety means that nothing bad happens (for example, wrong data is not written to the database), and liveness means that something good eventually happens (for example, after a leader node fails, eventually a new leader is elected).

# 9. Consistency and Consensus

Distributed consistency is mostly about coordinating the state of replicas in the face of delays and faults.

Linearizability
Linearizability means that replicated data can appear as though there is only one single copy of the data, and all operations look like they act atomically on the data (you don’t see a value flipping between the new and old value). It makes the database behave like a variable in a single-threaded program. The problem is that it is slow, especially when there are large network delays.

The CAP theorem is sometimes presented as Consistency, Availability, Partition tolerance: pick 2 out of 3. But network partitioning is a fault, so you don’t have a choice about it, it will happen. Kleppmann thinks the theorem is better put as: either Consistent or Available when Partitioned. He also notes that the CAP theorem only talks about partitioning and doesn’t say anything about other faults, like network delays or dead nodes. So the CAP theorem is not so useful.

Ordering Guarantees
A total order allows any two elements to be compared, and you can always say which one is greater. A linearizable system has a total order. If two events happen concurrently, you can’t say which happened first. This leads to the weaker consistency model of causality. It defines a partial order: some operations are ordered with respect to each other, but some are incomparable (concurrent).

Lamport timestamps provide a total ordering consistent with causality. However, that is not enough for problems like ensuring that selected usernames are unique (if two user concurrently try to pick the same username, we will only know afterwards who of the two got it). This leads to Total Order Broadcast. It requires that no messages are lost; if a message is delivered to one node, it is delivered to all nodes. It also requires that messages are delivered to every node in the same order. Having a total order broadcast enables correct database replication.

Distributed Transactions and Consensus
For distributed transactions, two-phase commit (2PC) can be used. It requires a coordinator. First it sends each node a prepare message. The nodes check that they will be able to perform the write, and if so, they answer yes. If all nodes answered yes, the next message is the commit. Each node must then perform the write.

With a single leader database, all the decisions are taken by the leader, and you therefore can have linearizable operations, uniqueness constraints, a totally ordered replication log and more (these properties are all reducible to consensus). If the leader fails, or network problems prevent you from reaching it, there are three options: Wait for it to recover, manually failover by letting a human pick a new leader, or use an algorithm to automatically choose a new leader. Tools like ZooKeeper and etcd help with this.

However, not all systems require consensus. Leaderless and multi-leader replication systems typically do without. Instead, they have to handle the conflicts that occur. This was the most difficult chapter to understand for me (I am not even sure I fully understand it), especially the explanation for how consensus is reduced to these other properties.

# 10. Batch Processing

This is the first chapter of the part of the book dealing with derived data. There is a distinction between systems of record (holds the authoritative version of the data) and derived data systems. Data in derived data systems is existing data transformed or processed in some way, for example a cache or a search index.

The chapter starts with an example of batch processing using Unix tools. To find the five most popular URLs from an access log, the commands sort, awk, uniq and head are piped together. Sort is actually much more powerful than I thought. If the dataset does not fit in memory, it will automatically store to disk, and it will automatically parallelize sorting across multiple CPU cores if available.

There are similarities between how MapReduce works and how the piped-together Unix tools work. They do not modify the input, they do not have any side effects other than producing the output, and the files are written once, in a sequential fashion. For the Unix tools, stdin and stdout are the input and output. MapReduce jobs read and write files on a distributed file system. Since the input is immutable, and there are no side effects, failed MapReduce jobs can just be run again. Depending on what results we want from the MapReduce jobs, there are some different kinds of joins that can be performed: sort-merge joins, broadcast hash joins, and partitioned hash joins.

Using the analogy of the piped Unix commands, MapReduce is like writing the output of each command to a temporary file. There are newer dataflow engines, like Flink, that can improve the performance over classic MapReduce. For example by not storing to file (materializing) as often, and by only sorting when needed, as opposed to at every stage. When sorting is avoided at some steps, you also don’t need the whole data set, and you can pipeline the stages.

# 11. Stream Processing

An event is a small, self-contained, immutable object containing the details of something that happened at some point in time. Events can for example be generated by users taking actions on a web page, temperature measurements from sensors, server metrics like CPU utilization, or stock prices. Stream processing is similar to batch processing, but done continuously on unbounded streams rather than on fixed-size input. In this analogy, message brokers are the streaming equivalents of a filesystem.

There are two broad categories of message brokers, depending on whether they discard or keep the messages after they have been processed. Log-based message brokers (like Kafka) keep the messages, so it is possible to go back and reread old messages. This is similar to replication logs in databases, and log-structured storage engines.

It can also be useful to think of writes to a database as a stream. Log compaction can reduce the storage needed, while still allowing the stream to retain a full copy of the database. Representing the database as a stream allows for derived data systems such as search indexes, caches, and analytics systems to be continually up to date. This is done by consuming the log of changes and applying them to the derived system. It is also possible to create new views by starting from the beginning and consume all the events up to the present. This is also very similar to event sourcing.

Typically there is a timestamp in every event. This timestamp is different from the time the server processes the event, and this can lead to some strange situations. For example, a user makes a web request, which is handled by web server A. Then the user makes another request, handled by web server B. Both web servers emit events, but B’s event gets to the message broker first (maybe due to queueing or network faults). So the message broker sees the event from B, then the event from A, even though they occurred in the opposite order.

You can also perform analytics on streams. For example measuring the rate of something, calculating a rolling average over some time period, or comparing current statistics to previous time intervals to detect trends. Various types of windows can be used: tumbling, hopping, sliding or session. Also, just like for batch jobs, you can join stream data with database tables to enrich the event data.

# 12. The Future of Data Systems

In this chapter, Kleppmann describes his vision for how data systems should be designed. It is based on the ideas from chapter 11, using event streams from systems of record to create various derived views of the data. Since the derivations are asynchronous and loosely coupled, problems in one area aren’t spreading to other unrelated areas like they do in tightly integrated systems. Furthermore, these types of systems can better handle mistakes. If the code processing the data has a bug, that bug can be fixed, and then the data can be reprocessed.

There is also a discussion on how internal measures, such as transactions, are not enough to protect from for example erroneously perform an operation twice. Checks need to work end-to-end from the application. For example, making sure an operation is idempotent could be done by assigning a unique identifier to it, and have a check that the operation is only done once for that id. Sometimes, it is also better to be able to compensate when something goes wrong, instead of putting a lot of effort into preventing it. For example, a compensating transaction if an account has been overdrawn, or an apology and compensation if a flight has been overbooked. If it doesn’t happen too often, it is acceptable for most businesses. By checking constraints asynchronously, you can avoid most coordination and still maintain integrity, while also performing well.

Tied to dataflows is a discussion of moving away from request/response systems to publish/subscribe dataflows. If you are notified of all the changes, you can keep the view up to date (compare to how spreadsheets work, where changes ripple through cells). It is however hard to do this, because assumptions of request/response are deeply ingrained in databases, libraries and frameworks.

The last section of the chapters deals with ethics considerations when developing data handling systems. One interesting thought experiment is to replace the word data with surveillance. “In our surveillance-driven organization we collect real-time surveillance streams and store them in our surveillance warehouse. Our surveillance scientists use advanced analytics and surveillance processing in order to derive new insights.”

# Nuggets

Throughout the book there were lots of nuggets of information that I found really interesting. Here are a few of my favorites.

- In-memory databases are not faster than ones with disk-based storage because they can read from memory, and the traditional ones read from disk. The operating system caches recently used disk blocks in memory anyway. Instead, the speed advantage comes from not having to encode the in-memory data structures to a format suitable for writing to disk (page 89).

- The built-in hash functions in some languages are not suitable for getting partitioning keys, because the same key may have different hash value in different processes. For example Object.hashCode() in Java and Object#hash in Ruby (page 203).

- At Google, a MapReduce task that runs for an hour has a 5% risk of being terminated. This rate is more than an order of magnitude higher than the rate of failure due to hardware issues, machine reboots etc. The reason MapReduce is designed to tolerate frequent unexpected task termination is not because the hardware is particularly unreliable, it’s because the freedom to arbitrarily terminate processes enables better resource utilization in a computing cluster (page 418).

Every chapter starts with a quote. Two of them I particularly like. The first, from chapter 5, is one of my all-time favorite quotes on software development:

A complex system that works is invariably found to have evolved from a simple system that works. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work. – John Gall, Systemantics (1975)

Here is the second quote, from chapter 11:

The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair. – Douglas Adams, Mostly Harmless (1992)

# Conclusion

如今，感觉大多数系统都是以一种或另一种方式分布的系统。 对于所有软件开发人员来说，设计数据密集型应用程序几乎都是必读的。 因此，了解其中的许多概念确实很有用。

 本书中描述和解决的许多问题都归结为并发问题。 通常，有很好的图片和图表说明了这些要点。 在每一章的开头，都有一张幻想样式的地图，其中列出了下一章的关键概念。 我很喜欢那些。

 设计数据密集型应用程序很厚-超过550页。 这让我开始犹豫，几乎觉得太过气了。 幸运的是，我们今年春天在工作中为读书俱乐部选择了它。 这给了我足够的微动，可以开始并继续前进。 我真的很高兴开始，因为其中包含了很多很好的信息。 我特别喜欢它同时具有理论和实践意义。

 如果您喜欢此摘要，则一定要阅读整本书。 还有更多的细节和示例，它们都很有趣。 强烈推荐！

# 链接

- https://henrikwarne.com/2019/07/27/book-review-designing-data-intensive-applications/
