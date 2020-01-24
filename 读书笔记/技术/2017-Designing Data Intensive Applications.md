# Designing Data-Intensive Applications

《Designing Data-Intensive Applications》着实是一本非常优秀的讲解数据库与分布式系统底层实现原理的书籍，特别是 Martin Kleppmann 从理论到实践深入浅出地介绍了这些系统的实现路径。

本书主要分为三个部分：1~4 章介绍 Foundations of Data Systems，5~9 章介绍了 Distributed Data，10~12 章介绍了 Derived Data。

# 1. Foundations of Data Systems

An introductory chapter that defines reliability, scalability and maintainability. I particularly liked the example of the evolution of how Twitter delivers tweets to followers. There is also a good point made about response times: when end-users require multiple back-end calls, many users may experience delays, even if only a fraction of individual requests are slow (tail latency amplification).

# 2. Data Models and Query Languages

This chapter discusses the well-known relational model and the document model (NoSQL). There is a good example of how a LinkedIn profile can be represented as a JSON document – the tree-like structure of a profile is a good fit to represent with JSON. However, there can be problems as data becomes more interconnected between documents (in the LinkedIn example: references to companies and universities, recommendations between users). In a document model, joins are shifted from the database to the application.

Document databases are sometimes called schema-less. That is not correct, since there is an implicit schema. A better way to think of it is schema-on-write (the database enforces the schema when storing the value), and schema-on-read (the schema is implicit, and only interpreted when the data is read). This is similar to static typing and dynamic typing in programming languages.

Next there is a discussion of query languages, with a good example of the contrast between an imperative query (a loop in a programming language) versus a declarative query (a SELECT statement in SQL). Finally there is a discussion of graph-like data models (used by for example Neo4J) and various query languages for this model.

# 3. Storage and Retrieval

This is one of my favorite chapters. I have previously taken a MOOC course on databases, but it did not talk much about the internals of databases. This chapter starts off by explaining how LSM-trees and B-trees work.

LSM-trees
Kleppmann starts by creating a simple database in 2 lines of bash code. A key and a value is stored by appending a line (the key followed by the value) to a file. To retrieve the value for a given key, you grep through the file and take the value if the key is found. Writing to an existing key simply means appending the new line to the file. The old line with the key and value is left in the file. But the get function only returns the last value found for the given key, so it doesn’t matter that the old line is left in the file.

The key (ha ha) idea here is that it is fast to only append to the file (as opposed to changing values within the file). However, scanning through the whole file to retrieve the value for a key is slow. One speed-up is to keep a separate hash that has a pointer to where each key starts in the file. Then a read operation first looks up the offset to use, and then starts reading from that position in the file.

Next, we imagine that all the lines within the file are sorted by key. These files are called String Sorted Tables, abbreviated SSTables. If we have many of these files, created at different times, then a given key can appear in many of the files. However, the most recent value for the key is the only valid value – all the other values are obsolete (superseded by the newer value). We can merge these files into one file, and simultaneously get rid of all obsolete lines. This is called compaction, and since all the files are sorted by key, this can be done efficiently the same way merge sort works.

How do you create the sorted file in the first place? You maintain an in-memory tree structure (such as a red-black tree or AVL tree), called a memtable. This keeps the data sorted, and once the tree gets to a certain size (a few megabytes), it is written out as a new SSTable. Adding or changing a value for a key simply means adding it to the memtable (possibly overwriting it if it is already present). To look up the value for a key, you first search in the memtable, then in the most recent SSTable, then in the next older SSTable etc.

This type of storage structure is called a Log-Structured Merge-Tree (LSM-tree), and is used in for example Cassandra.

B-trees
B-trees is the most widely used indexing structure (used in traditional SQL databases), and are quite different from LSM-trees. B-trees also keep key-value pairs sorted by keys, to allow for quick lookups. However, the data is stored on disk in fixed-size blocks (also called pages), traditionally 4 KB in size. To change a value in a block, the whole block is written. A tree is created by using pointers to child blocks, where the key-range gets more and more specific, until a leaf block containing the wanted value is found. The branching factor describes how many child nodes a parent node can have.

Most databases can fit in a B-tree that is three or four levels deep – a four level tree of 4 KB blocks with a branching factor of 500 can store up to 256 TB. The B-tree structure was introduced in 1970 by Rudolf Bayer and Edward McCreight at Boeing. It is unclear what the B stands for – Boeing, balanced, broad, bushy, and Bayer have all been suggested according to Wikipedia.

LSM-trees are typically faster for writes, whereas B-trees are faster for reads. However, several factors affect the performance, and these are discussed next in the chapter. Different types of optimizations are described, and strategies for handling crashes, such as using a write-ahead log (WAL, also known as a redo log).

Transactions and Analytics
When databases first appeared, they were often used for commercial transactions, for example making a sale or paying salary. Even though databases started to be used for other tasks, the term transaction stuck.

There are two broad categories of usage: online transaction processing (OLTP) and online analytics processing (OLAP). OLTP is typically used when facing end-users, and the transactions are typically small. OLAP is more used in a data warehouse context, where the queries may aggregate values from millions of records. Databases for OLAP are often organized in a star schema.

Sometimes, column-oriented storage is used for OLAP use-cases. This can be more efficient when processing lots of values from one column (for example summing or averaging). There is a good example in this chapter how bitmaps and run-length encoding is used to compress the stored values.

This chapter was quite long, but very good. I have used both MySQL and Cassandra at work, and knowing how the internal storage models differ is very helpful.

# 4. Encoding and Evolution

Backward compatibility – newer code can read data written by older code. Forward compatibility – older code can read data written by newer code. Both are needed. When data in a program needs to be saved to file or sent over the network, it needs to be encoded in some format.

Three types of data encoding are covered. The first type is language-specific formats, for example java.io.Serializable for Java, or pickle for Python. There are many problems with using such formats: security, versioning, performance, and the fact that they are tied to a specific programming language.

Next there standardized textual encodings such as XML, JSON and CSV. They too have their problems. For example, they don’t support binary strings (sequences of bytes without a character encoding). JSON doesn’t distinguish between integers and floating-point numbers, and it doesn’t specify a precision. CSV is quite a vague format. For example, how should commas and newlines be handled?

Finally, several binary encoding formats are described in some detail: Thrift (originally from Facebook), Protocol Buffers (originally from Google) and Avro (originally from the Hadoop project). They all have schemas, and use several clever tricks to make the encodings compact.

# 5. Replication

This is the first chapter in the Distributed Data section. Replication means that the same data is stored on multiple machines. Some reasons for replication are: to keep working even if some parts of the system fail (increased availability), to keep data geographically close to the users (reduce latency), and to increase read throughput by serving the same data from many machines.

Three different models are covered: single leader, multi-leader, and leaderless. Replication can either be synchronous or asynchronous. If it is synchronous, the leader and all followers acknowledge a write before it is acknowledged back to the user. This can block all writes if any one of the followers is slow or has failed. Therefore asynchronous replication is more common.

There are many tricky aspects of replication. The first is when setting up a new follower. Since data is constantly changing in the leader, typically you take a consistent snapshot of the leader’s database and copy it to the new follower. Then you need to process the backlog of changes that happened during the copying process.

If a follower fails, it needs to catch up once it recovers. This means it needs to keep track of which transactions from the leader it had already processed before failing. If the leader fails, a new leader needs to be selected. This is called failover. Many things can go wrong here. If asynchronous replication is used, the new leader may not have received all the writes. If the former leader rejoins the cluster after a new leader is selected, what should happen to those not-replicated writes?

Performing the replication is also tricky. Simply repeating the SQL statements will cause problems if NOW() or RAND() are used. There are many other edge cases as well, so this method is generally not used. Instead, the database internal write-ahead log is used. This is an append-only sequence of bytes containing all the writes to the database.

Replication Lag
When you use asynchronous replication you have eventual consistency. Even if the replication lag usually is small, a whole range of factors (for example network problems or high load) can cause the lag to become several seconds or even minutes. Several problems can occur when you have replication lag: If you submit data, and then reload the page, you may not see the data you just wrote, if the read of the reload is done from a different server than received the write. There are several possible solutions to this that guarantee that you read your own writes. This can be even trickier with cross-device reads (updating from a laptop, then reading from a phone).

Another anomaly is when it appears as if time moves backwards. The first read returns a comment recently made by user X. When refreshing the page, the read is from another (lagging) server, and the comment by user X has not yet been made. Monotonic reads is a way to avoid this situation, for example by routing all reads to the same server. If eventual consistency is too weak, distributed transactions can be used.

Multi-Leader Replication
In multi-datacenter operations, it can make sense to use multi-leader replications. There are several advantages: performance (writes don’t all have to go through a single leader), tolerance of datacenter outages, tolerance of network problems (temporary problems don’t prevent writes to go through). However, with more than one leader there is the risk of write conflicts. There are several ways to handle these: Last write wins (based on timestamp or unique id), merge the values together automatically, or keep the conflicting values and let the user pick the value to keep.

Leaderless Replication
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

These days, it feels like most systems are distributed system in one way or another. Designing Data-Intensive Applications should almost be mandatory reading for all software developers. So many of the concepts explained in it are really useful to know.

A lot of the problems described and solved in the book come down to concurrency issues. Often, there are good pictures and diagrams illustrating the points. At the beginning of each chapter there is a fantasy-style map which lists the key concepts in the coming chapter. I quite liked those.

Designing Data-Intensive Applications is thick – a bit over 550 pages. This made me hesitate to start it – it almost felt too imposing. Luckily, we picked it for the book club at work this spring. That gave me enough of a nudge to get started and to keep going. I am really happy I started, because there is so much good information in it. I particularly like how it is both theoretical and practical at the same time.

If you liked this summary, you should definitely read the whole book. There are so many more details and examples, and they are all very interesting. Highly recommended!

# 链接

- https://henrikwarne.com/2019/07/27/book-review-designing-data-intensive-applications/
