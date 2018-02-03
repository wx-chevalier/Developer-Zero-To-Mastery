[![返回目录](https://parg.co/UCb)](https://github.com/wxyyxc1992/Awesome-CheatSheet) 
 
 
# ElasticSearch 清单

ElasticSearch 是一个基于[Apache Lucene(TM)](https://lucene.apache.org/core/)的开源搜索引擎。无论在开源还是专有领域，Lucene 可以被认为是迄今为止最先进、性能最好的、功能最全的搜索引擎库。但是，Lucene 只是一个库。想要使用它，你必须使用 Java 来作为开发语言并将其直接集成到你的应用中，更糟糕的是，Lucene 非常复杂，你需要深入了解检索的相关知识来理解它是如何工作的。ElasticSearch 也使用 Java 开发并使用 Lucene 作为其核心来实现所有索引和搜索的功能，但是它的目的是通过简单的`RESTful API`来隐藏 Lucene 的复杂性，从而让全文搜索变得简单。不过，Elasticsearch 不仅仅是 Lucene 和全文搜索，我们还能这样去描述它：

* 分布式的实时文件存储，每个字段都被索引并可被搜索
* 分布式的实时分析搜索引擎
* 可以扩展到上百台服务器，处理 PB 级结构化或非结构化数据

```
home---这是Elasticsearch解压的目录
　　bin---这里面是ES启动的脚本

　　conf---elasticsearch.yml为ES的配置文件

　　data---这里是ES得当前节点的分片的数据，可以直接拷贝到其他的节点进行使用

　　logs---日志文件

　　plugins---这里存放一些常用的插件，如果有一切额外的插件，可以放在这里使用。
```

# CRUD

## 创建与更新

在 ElasticSearch 中，Index 这一动作类比于 CRUD 中的 Create 与 Update，当我们尝试为某个不存在的文档建立索引时，会自动根据其类似与 ID 创建新的文档，否则就会对原有的文档进行修改。ElasticSearch 使用 PUT 请求来进行 Index 操作，你需要提供索引名称、类型名称以及可选的 ID，格式规范为 :`http://localhost:9200/<index>/<type>/[<id>]`。其中索引名称可以是任意字符，如果 ElasticSearch 中并不存在该索引则会自动创建。类型名的原则很类似于索引，不过其与索引相比会指明更多的细节信息：

* 每个类型有自己独立的 ID 空间
* 不同的类型有不同的映射 (Mappings)，即不同的属性 / 域的建立索引的方案
* 尽可能地在一起搜索请求中只对某个类型或者特定的类型进行搜索

典型的某个 Index 请求为 :

```sh
curl -XPUT "http://localhost:9200/movies/movie/1" -d'
{
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "year": 1972
}'
```

ElasticSearch 仅会允许版本号高于原文档版本号的修改发生。注意，如果你并没有提供文档编号，那么应该使用 POST 方法来创建新的索引 :

```sh
POST /website/blog/
{
  "title": "My second blog entry",
  "text":  "Still trying this out...",
  "date":  "2014/01/01"
}
```

## Search: 搜索

ElasticSearch 为我们提供了通用的`_bulk`端点来在单请求中完成多文档创建操作，不过这里为了简单起见还是分为了多个请求进行执行。ElasticSearch 中搜索主要是基于`_search`这个端点进行的，其标准请求格式为 :`<index>/<type>/_search`，其中 index 与 type 都是可选的。换言之，我们可以以如下几种方式发起请求 :

* **http://localhost:9200/_search** - 搜索所有的 Index 与 Type
* **http://localhost:9200/movies/_search** - 搜索 Movies 索引下的所有类型
* **http://localhost:9200/movies/movie/_search** - 仅搜索包含在 Movies 索引 Movie 类型下的文档

### 全文搜索

ElasticSearch 的 Query DSL 为我们提供了许多不同类型的强大的查询的语法，其核心的查询字符串包含很多查询的选项，并且由 ElasticSearch 编译转化为多个简单的查询请求。最简单的查询请求即是全文检索，譬如我们这里需要搜索关键字 :`kill`:

[创建数据](https://parg.co/Upn)

```sh
curl -XPOST "http://localhost:9200/_search" -d'
{
    "query": {
        "query_string": {
            "query": "kill"
        }
    }
}'
```

### 指定域搜索

在上文简单的全文检索中，我们会搜索每个文档中的所有域。而很多时候我们仅需要对指定的部分域中文档进行搜索操作，譬如我们要搜索仅在标题中出现`ford`字段的文档 :

```sh
curl -XPOST "http://localhost:9200/_search" -d'
{
    "query": {
        "query_string": {
            "query": "ford",
            "fields": ["title"]
        }
    }
}'
```

# Geo

```sh
PUT /my_locations
{
    "mappings": {
        "location": {
            "properties": {
                "pin": {
                    "properties": {
                        "location": {
                            "type": "geo_point"
                        }
                    }
                }
            }
        }
    }
}

PUT /my_locations/location/1
{
    "pin" : {
        "location" : {
            "lat" : 40.12,
            "lon" : -71.34
        }
    }
}
```

```sh
GET /my_locations/location/_search
{
    "query": {
        "bool" : {
            "must" : {
                "match_all" : {}
            },
            "filter" : {
                "geo_distance" : {
                    "distance" : "200km",
                    "pin.location" : {
                        "lat" : 40,
                        "lon" : -70
                    }
                }
            }
        }
    }
}
```
