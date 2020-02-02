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

复制有很多棘手的方面。 首先是在设置新的关注者时。 由于领导者中的数据不断变化，因此通常您需要对领导者的数据库进行一致的快照并将其复制到新的关注者中。 然后，您需要处理复制过程中发生的更改积压。

 如果关注者失败，则恢复后需要追赶。 这意味着它需要跟踪失败之前领导者已经处理过的交易。 如果领导者失败，则需要选择一个新的领导者。 这称为故障转移。 这里很多事情都会出错。 如果使用异步复制，则新的领导者可能尚未收到所有写入。 如果在选择新的领导者后，前领导者重新加入集群，那些未复制的写入应该怎么办？

 执行复制也很棘手。 如果使用NOW() 或 RAND()，则仅重复SQL语句就会引起问题。 也有许多其他边缘情况，因此通常不使用此方法。 而是使用数据库内部预写日志。 这是一个仅附加字节序列，其中包含对数据库的所有写操作。

## Replication Lag

使用异步复制时，您最终会保持一致。 即使复制时滞通常很小，但各种因素（例如网络问题或高负载）也可能导致时滞变为几秒钟甚至几分钟。 当您有复制滞后时，可能会发生一些问题：如果提交的数据是从与接收到的写入不同的服务器上完成的，则您提交数据然后重新加载页面时，可能看不到刚写入的数据。 有几种可能的解决方案，可以保证您自己阅读内容。 跨设备读取（从笔记本电脑更新，然后从手机读取）甚至更加棘手。

 另一个异常是时间似乎在向后移动。 第一次读取返回用户X最近所做的注释。刷新页面时，读取来自另一个（滞后）服务器，并且尚未由用户X进行注释。 单调读取是避免这种情况的一种方法，例如，通过将所有读取路由到同一服务器。 如果最终的一致性太弱，则可以使用分布式事务。

## Multi-Leader Replication

在多数据中心操作中，使用多头复制很有意义。 有几个优点：性能（写入不必全部都经过一个领导者），数据中心中断的容忍度，网络问题的容忍度（临时性问题不会阻止写入过程）。 但是，如果领导者多于一位，则存在写冲突的风险。 有几种方法可以处理这些问题：上次写入获胜（基于时间戳或唯一ID），自动将值合并在一起或保留冲突值并让用户选择要保留的值。

## Leaderless Replication

Dynamo，Cassandra，Riak和Voldemort都使用无领导者复制。 为了确保没有写入丢失，并且没有读取返回过时的值，将使用仲裁读取和写入。 如果有n个副本，则每次写入必须由w个节点确认是否成功，并且我们必须为每个读取至少查询r个节点。 只要w + r> n，我们期望在读取时获得最新的值。 在最简单的情况下，n = 3，w = 2，r = 2。 但是，仍然存在边缘情况–例如，如果写入与读取并发，则写入可能仅存在于某些副本中，并且不清楚是否应为读取返回新值或旧值。

如果节点已关闭且具有过时的值，则从该节点读取值时可以检测到该节点。 这可以启动修复。 还可能在后台运行反熵过程，以寻找不一致之处并启动修复。

本章以一个很好的例子作为结束，说明如何使用版本向量来跟踪并发事件之间的因果关系。
 
# 6. Partitioning

将数据分为多个分区（也称为分片）的原因是可伸缩性。 请注意，您可以同时进行分区和复制，每个分区可以复制到多个节点。 每条数据恰好属于一个分区。 分区可以在键范围内进行，也可以通过键的散列来完成。 如果某些分区的命中率高于其他分区（工作负载偏斜），则分区的优势可能会丢失。 二级索引对于分区数据库可能会比较棘手。 解决此问题的一种方法是分散/聚集。

 随着数据的增长和更改，可能需要重新平衡，将负载从一个节点转移到另一个节点。 您不应移动过多的数据。 例如，仅使用hash mod N将导致太多更改。 更好的方法是使用比节点更多的分区，并且仅在节点之间移动整个分区。 如果自动进行重新平衡，则存在级联故障的风险。 因此，最好仅手动执行此操作。 请求到正确分区的路由通常由单独的协调服务（例如Zookeeper）处理。

# 7. Transactions

本章介绍在一台计算机上的事务。 一个事务组将一个读写单元写入一个逻辑单元。 整个事务要么成功（提交），要么失败（中止，回滚）。 这样一来，应用程序开发人员就不必处理许多潜在的问题：与数据库的连接断开，在写入所有数据之前数据库或应用程序崩溃，多个客户端可能会覆盖彼此的数据等。

ACID代表原子性，一致性，隔离性和耐久性。 原子性与并发无关（隔离）。 相反，这意味着所有写入都成功，或者没有成功。 没有部分写入的数据。 一致性意味着在事务之前和之后，不变性必须始终为真。 例如，所有帐户的贷方和借方始终保持平衡。 数据库可以检查某些不变量，例如外键约束和唯一性约束。 但是通常，只有应用程序才能定义有效或无效的数据-数据库仅存储数据。

 隔离意味着并发执行的事务不会相互干扰。 其余各章中的大多数都涉及到这一点。 最后，持久性意味着成功写入的数据不会丢失。 但是，即使将数据写入磁盘，也有许多方式可能会丢失数据：磁盘可能会损坏，固件错误可能会阻止您的读取，计算机可能死机并且即使磁盘上的数据很好也无法获取数据 。

## Isolation Levels

当多个客户端同时读取和更新数据时，会有很多陷阱。 为避免这些情况，有几种隔离级别可以防止出现问题。最基本的级别是已提交读。 这意味着在读取时，您只会看到已提交的数据，而不是正在写入但尚未提交的数据。 写入数据库时​​，您只会覆盖已提交的数据。 这也称为无脏读和无脏写。

快照隔离（Snapshot Isolation）处理不同部分之间的一致性。 如果您有两个帐户，每个帐户中有$ 500，并且您从第一个帐户中读取了余额，然后从第二个帐户中读取了余额（两个都在同一笔交易中读取），那么它们的总和应为$ 1000。 但是，在第一次读取和第二次读取之间，可能会有一笔并发交易将$ 100从第二个帐户转移到第一个帐户。 因此，第一次读取可能会得到$ 500，而第二次读取会返回$ 400（因为此处已减去$ 100）。 如果我们再次重复读取同一帐户，则第一个帐户将获得$ 600，第二个帐户将获得$ 400，因此现在它们的总和达到了预期的 $1000。 如果避免了总和更改的问题，则称为快照隔离，也称为可重复读取。

问题是我们希望在给定的时间点在数据库中看到的内容保持一致。 在上面的示例中，我们不希望看到总额仅为$900美元的情况。 例如，这在进行备份时很重要。 进行备份可能需要几个小时，并且数据会不断变化，但是我们希望存储在备份中的内容保持一致。 长时间运行的查询也是如此–我们希望它们在一致的快照上执行。 常见的解决方案是使用多版本并发控制（MVCC）。 数据库可以保留一个对象的多个不同的提交版本，因为各种进行中的事务可能需要在不同的时间点查看数据库的状态。

 当两个事务都写入数据时，就有丢失更新的风险。 例如，如果两个用户同时读取，递增和写入结果，则最终的计数器值可能仅被更新了一个，而不是两个。 如果事务读取某些信息，基于该信息做出决定并写入结果，则可能存在写入偏斜。 这意味着在写入结果时，其所基于的前提不再成立。 例如，一个会议室预订系统试图避免重复预订。

## Serializable transactions

避免出现问题的一种可靠方法是，如果所有事务都依次执行。 但是，性能常常遭受太多损失。 在某些情况下，您实际上可以串行执行所有事务。 您需要将整个数据集存储在内存中，并使用存储过程来避免事务期间的网络往返，并且吞吐量必须足够低才能由单个CPU处理。

 大约30年以来，唯一可广泛使用的可序列化算法是两阶段锁定（2PL）。 广泛的锁定意味着吞吐量下降。 您也很容易陷入僵局。 一种称为可序列化快照隔离（SSI）的新算法也可以提供可序列化性，但是由于乐观并发控制，与2PL使用的悲观并发控制相反，它具有更好的性能。

# 8. The Trouble with Distributed Systems

这是本书中我最喜欢的另一章（以及第3章“存储和检索”）。 即使我在分布式系统和并发问题上工作了很长时间，但本章对于我可能会出错的所有方式还是让我大开眼界。

- 网络不可靠。 节点之间的连接可能会以各种方式失败。 除正常故障模式外，还列出了一些异常模式：交换机的软件升级导致所有网络数据包延迟一分钟以上，鲨鱼咬伤并损坏海底电缆，所有入站数据包均被丢弃，而出站数据包则被丢弃。 发送成功。 即使在一个数据中心等受控环境中，网络问题也很常见。 一项研究表明每月有12个网络故障。 检测网络问题的唯一解决方案是超时。

- 不可靠的时钟。 时钟根据某些日历返回当前日期和时间。 它们通常与NTP同步。 由于计算机上的本地时钟可能会漂移，因此它可能早于NTP时间，并且重置会使它看起来像是在时间上回跳。 单调时钟更适合于测量经过的时间–保证它们始终向前移动。

 即使使用NTP同步不同的计算机，也存在许多可能的问题。 由于NTP服务器存在网络延迟，因此时钟的精确度受到限制。  seconds秒也造成了许多大故障。 这些和其他问题意味着一天可能没有精确的86,400秒，时钟可能向后移动，并且一个节点上的时间可能与另一节点上的时间完全不同。 此外，不正确的时钟很容易被忽视。

 依靠时间戳来订购事件（例如Cassandra中的Last Write Wins）可能会导致意外结果。  Google Spanner使用的一种解决方案是确定时间戳的置信区间，并确保在订购事件时不存在重叠。

- 处理暂停。 与时间有关的另一个问题是过程暂停。 在执行操作之前，检查当前时间然后执行某些操作的代码可能已暂停了几秒钟。 发生这种情况的方式有很多：垃圾回收，从代码中看不出来的同步磁盘访问（Java类加载器延迟加载类文件），操作系统交换到磁盘（分页）等。

 为了处理分布式系统中的这些各种问题，多数人定义了事实（在下一章中对此进行了更多讨论）。 这里描述的可能的问题可能会导致一些非常棘手的情况。 更糟糕的是，如果参与的节点故意尝试引起问题。 那就是所谓的拜占庭式断层，但这在本书中没有涉及。 通过控制所有涉及的服务器，可以避免此类问题。

 本章以定义安全性（Safety）和活力（Liveness）为结尾。 安全意味着没有不好的事情发生（例如，错误的数据未写入数据库），活跃意味着最终发生了好事（例如，在 Leader 节点发生故障之后，最终选举了新的领导者）。
 
# 9. Consistency and Consensus

分布式一致性主要是在面对延迟和故障时协调副本的状态。

## Linearizability

线性化意味着复制的数据看起来好像只有一个数据副本，并且所有操作看起来都像是对数据进行原子操作（您不会看到值在新值和旧值之间转换）。 它使数据库的行为类似于单线程程序中的变量。 问题是它运行缓慢，尤其是在网络延迟较大的情况下。

 CAP定理有时表示为一致性，可用性，分区容限：从3中选择2。但是网络分区是一个错误，因此您别无选择，它会发生。 克莱普曼（Kleppmann）认为该定理最好表示为：划分时一致或可用。 他还指出，CAP定理仅涉及分区，没有提及其他故障，例如网络延迟或死节点。 因此，CAP定理不是那么有用。

## Ordering Guarantees

总顺序允许比较任何两个元素，并且您始终可以说哪个更大。 线性化系统的总阶数。 如果同时发生两个事件，则无法确定哪个事件先发生。 这导致因果关系的一致性模型较弱。 它定义了部分顺序：某些操作是相对于彼此进行排序的，但是有些操作是不可比较的（并发）。

 Lamport时间戳提供与因果关系一致的总排序。 但是，这还不足以解决诸如确保所选用户名唯一的问题（如果两个用户同时尝试选择相同的用户名，那么我们将在此之后才知道两个人中有谁）。 这导致总订单广播。 它要求没有消息丢失； 如果消息传递到一个节点，则将消息传递到所有节点。 它还要求消息以相同顺序传递到每个节点。 具有全部订单广播可以实现正确的数据库复制。

## Distributed Transactions and Consensus

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
