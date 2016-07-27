<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Network](#network)
- [NetworkManagement:网络管理](#networkmanagement%E7%BD%91%E7%BB%9C%E7%AE%A1%E7%90%86)
  - [Reachability:网络可达性判断](#reachability%E7%BD%91%E7%BB%9C%E5%8F%AF%E8%BE%BE%E6%80%A7%E5%88%A4%E6%96%AD)
- [Socket:套接字](#socket%E5%A5%97%E6%8E%A5%E5%AD%97)
- [HttpClient:网络客户端](#httpclient%E7%BD%91%E7%BB%9C%E5%AE%A2%E6%88%B7%E7%AB%AF)
  - [URI Handler:URI处理工具集](#uri-handleruri%E5%A4%84%E7%90%86%E5%B7%A5%E5%85%B7%E9%9B%86)
    - [Generator:构造](#generator%E6%9E%84%E9%80%A0)
    - [Encode:编码](#encode%E7%BC%96%E7%A0%81)
    - [Analysis:分析](#analysis%E5%88%86%E6%9E%90)
  - [Request Generator(请求构造)](#request-generator%E8%AF%B7%E6%B1%82%E6%9E%84%E9%80%A0)
    - [Header:请求头管理](#header%E8%AF%B7%E6%B1%82%E5%A4%B4%E7%AE%A1%E7%90%86)
    - [Get](#get)
    - [Post/Put/Delete](#postputdelete)
  - [Request Executor:请求执行器](#request-executor%E8%AF%B7%E6%B1%82%E6%89%A7%E8%A1%8C%E5%99%A8)
    - [Synchronous Request:同步请求](#synchronous-request%E5%90%8C%E6%AD%A5%E8%AF%B7%E6%B1%82)
    - [Asynchronous Request:异步请求](#asynchronous-request%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82)
    - [Parallel Request:并发请求](#parallel-request%E5%B9%B6%E5%8F%91%E8%AF%B7%E6%B1%82)
  - [Response:响应解析](#response%E5%93%8D%E5%BA%94%E8%A7%A3%E6%9E%90)
    - [Response Caching:响应缓存](#response-caching%E5%93%8D%E5%BA%94%E7%BC%93%E5%AD%98)
  - [Advanced Request:一些较为复杂的请求管理](#advanced-request%E4%B8%80%E4%BA%9B%E8%BE%83%E4%B8%BA%E5%A4%8D%E6%9D%82%E7%9A%84%E8%AF%B7%E6%B1%82%E7%AE%A1%E7%90%86)
    - [Request Cancel:请求撤销](#request-cancel%E8%AF%B7%E6%B1%82%E6%92%A4%E9%94%80)
    - [Timeouts:请求超时](#timeouts%E8%AF%B7%E6%B1%82%E8%B6%85%E6%97%B6)
    - [Authentication:认证](#authentication%E8%AE%A4%E8%AF%81)
    - [HTTPS](#https)
  - [HTTPStubs/MockServer:本地伪装网络请求](#httpstubsmockserver%E6%9C%AC%E5%9C%B0%E4%BC%AA%E8%A3%85%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82)
- [FileTransfer:文件传输](#filetransfer%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93)
  - [Uploads:上传](#uploads%E4%B8%8A%E4%BC%A0)
    - [Widgets:用于进行文件上传的插件](#widgets%E7%94%A8%E4%BA%8E%E8%BF%9B%E8%A1%8C%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%8F%92%E4%BB%B6)
    - [Download:下载](#download%E4%B8%8B%E8%BD%BD)
- [Push:推送与长连接](#push%E6%8E%A8%E9%80%81%E4%B8%8E%E9%95%BF%E8%BF%9E%E6%8E%A5)
  - [WebSocket](#websocket)
- [RPC:远程与本地调用](#rpc%E8%BF%9C%E7%A8%8B%E4%B8%8E%E6%9C%AC%E5%9C%B0%E8%B0%83%E7%94%A8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



# Network

本文包含客户端开发中与网络请求、网络操作等相关的知识要点与框架。



# NetworkManagement:网络管理

## Reachability:网络可达性判断
# Socket:套接字
# HttpClient:网络客户端
以okHttp(Android)、Volley、AFNetworking(iOS)为例。

- 能够取消现有的网络请求
- 能够并发请求
- 连接池能够复用存在的Socket连接
- 本地对于响应的缓存
- 简单的异步接口来避免主线程阻塞
- 对于REST API的封装
- 重连策略
- 能够有效地载入与传输图片
- 支持对于JSON的序列化
- 支持SPDY、HTTP/2


## URI Handler:URI处理工具集

### Generator:构造

### Encode:编码

### Analysis:分析

## Request Generator(请求构造)

### Header:请求头管理

### Get

### Post/Put/Delete

## Request Executor:请求执行器

### Synchronous Request:同步请求

### Asynchronous Request:异步请求

### Parallel Request:并发请求

## Response:响应解析

### Response Caching:响应缓存

## Advanced Request:一些较为复杂的请求管理

### Request Cancel:请求撤销

### Timeouts:请求超时

### Authentication:认证

### HTTPS

## HTTPStubs/MockServer:本地伪装网络请求

# FileTransfer:文件传输

## Uploads:上传

### Widgets:用于进行文件上传的插件

### Download:下载

# Push:推送与长连接

## WebSocket

# RPC:远程与本地调用

包括类似于WebService那样的远程调用。



![](http://153.3.251.190:11900/client-network)

