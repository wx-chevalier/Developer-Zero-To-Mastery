<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [When you want to learn new programming language:C++/Java/JavaScript/PHP/Swift/Rust/Go...](#when-you-want-to-learn-new-programming-languagecjavajavascriptphpswiftrustgo)
  - [Introduction](#introduction)
    - [Version Iteration](#version-iteration)
    - [Comments & Code Splitting](#comments-&-code-splitting)
    - [Modules & NameSpace](#modules-&-namespace)
    - [Reference](#reference)
      - [Tutorials & Docs](#tutorials-&-docs)
  - [Quick Start](#quick-start)
    - [Installation](#installation)
    - [Builder & Dependence Manager](#builder-&-dependence-manager)
    - [Deployment](#deployment)
    - [IDE](#ide)
  - [Data Structure](#data-structure)
    - [Variable & Constant](#variable-&-constant)
      - [Scope](#scope)
      - [Assignment](#assignment)
        - [Pass-by-Reference VS Pass-by-Value](#pass-by-reference-vs-pass-by-value)
        - [Continuous Assignment](#continuous-assignment)
        - [Destructuring Assignment](#destructuring-assignment)
      - [Copy Composite Data Types](#copy-composite-data-types)
    - [TypeChecking & Transform](#typechecking-&-transform)
      - [Runtime TypeChecking](#runtime-typechecking)
    - [Basic](#basic)
      - [Numeric](#numeric)
      - [Random Number](#random-number)
      - [Scientific Evaluation](#scientific-evaluation)
      - [Null](#null)
      - [Boolean](#boolean)
      - [Optional](#optional)
      - [Enum](#enum)
    - [String](#string)
      - [Create&Insert&Delete](#create&insert&delete)
      - [Index&Iteration](#index&iteration)
      - [Format&Encode](#format&encode)
      - [Others](#others)
    - [Struct](#struct)
    - [Indexed Collection:Array/List/Set](#indexed-collectionarraylistset)
      - [Create&Insert&Delete](#create&insert&delete-1)
      - [Index&Iteration](#index&iteration-1)
      - [Format&Encode](#format&encode-1)
      - [Others](#others-1)
    - [Keyed Collection:Map/Turple](#keyed-collectionmapturple)
      - [Create&Insert&Delete](#create&insert&delete-2)
      - [Index&Iteration](#index&iteration-2)
      - [Format&Encode](#format&encode-2)
      - [Others](#others-2)
    - [Immutable](#immutable)
    - [Serialization](#serialization)
      - [JSON](#json)
      - [CSV](#csv)
      - [XML](#xml)
  - [Control Flow & Error Handling](#control-flow-&-error-handling)
    - [Operator](#operator)
      - [Basic](#basic-1)
      - [Logic](#logic)
      - [Overload](#overload)
    - [Branch](#branch)
      - [if](#if)
      - [switch](#switch)
    - [Loop](#loop)
      - [for](#for)
      - [for-in](#for-in)
      - [for-of](#for-of)
      - [forEach](#foreach)
    - [Control](#control)
      - [breaker/continue](#breakercontinue)
      - [anchor](#anchor)
    - [Iterator](#iterator)
      - [Generator/yield](#generatoryield)
    - [Exception Handling](#exception-handling)
      - [Error](#error)
      - [Throw](#throw)
      - [Try-Catch-Finally](#try-catch-finally)
  - [Function](#function)
    - [Definition](#definition)
      - [Return Value](#return-value)
      - [Functional Variable](#functional-variable)
    - [Invoke/Call](#invokecall)
      - [Default Params & External Params](#default-params-&-external-params)
      - [Indefinite Params](#indefinite-params)
    - [Anonymous Function / Lambda / Closures](#anonymous-function--lambda--closures)
      - [Decorator](#decorator)
      - [Currying & unCurrying](#currying-&-uncurrying)
  - [Network](#network)
    - [NetworkManagement](#networkmanagement)
        - [Reachability](#reachability)
    - [Socket](#socket)
    - [HttpClient](#httpclient)
    - [RPC/RMI](#rpcrmi)
  - [Storage](#storage)
    - [Cache](#cache)
    - [Database](#database)
      - [KeyValue](#keyvalue)
        - [Redis](#redis)
      - [Relational](#relational)
        - [ORM](#orm)
        - [Sharding Support](#sharding-support)
    - [FileSystem](#filesystem)
      - [FileSystem-Monitor](#filesystem-monitor)
      - [Archives](#archives)
  - [TestRelease](#testrelease)
    - [Debug](#debug)
      - [Monitor](#monitor)
    - [Test](#test)
      - [TestRunner](#testrunner)
      - [Assert](#assert)
      - [Mock&Stuv](#mock&stuv)
    - [Log](#log)
    - [Release](#release)
      - [Package](#package)
  - [SysProc](#sysproc)
    - [AOP](#aop)
    - [Concurrence](#concurrence)
      - [Thread](#thread)
      - [Asynchronous Pattern](#asynchronous-pattern)
        - [Data Flow](#data-flow)
        - [Reactice](#reactice)
      - [Synchronous](#synchronous)
        - [Lock](#lock)
        - [Atomic](#atomic)
        - [Data visibility](#data-visibility)
        - [Built-in ThreadSafe DataStructure](#built-in-threadsafe-datastructure)
          - [Collections](#collections)
  - [Advanced](#advanced)
    - [Generic](#generic)
    - [Memory Management](#memory-management)
    - [Code Style & Conventions](#code-style-&-conventions)
    - [Algorithms](#algorithms)
- [When you want to learn Client-Side development:iOS/Android/Hybrid/WebAPP](#when-you-want-to-learn-client-side-developmentiosandroidhybridwebapp)
  - [Language](#language)
    - [Objective-C](#objective-c)
    - [Swift](#swift)
    - [Dart](#dart)
    - [Java](#java)
  - [Network](#network-1)
    - [NetworkManagement](#networkmanagement-1)
      - [Reachability](#reachability-1)
    - [Socket](#socket-1)
    - [HttpClient](#httpclient-1)
      - [URL Encode & Analysis](#url-encode-&-analysis)
      - [Request Manage](#request-manage)
      - [Parallel Request](#parallel-request)
      - [HTTPStubs/MockServer](#httpstubsmockserver)
    - [FileTransfer](#filetransfer)
      - [Uploads](#uploads)
      - [Download](#download)
    - [Push](#push)
      - [WebSocket](#websocket)
    - [RPC](#rpc)
      - [JSON](#json-1)
        - [JSON Object Mapper](#json-object-mapper)
    - [FlatBuffer](#flatbuffer)
    - [MsgPack](#msgpack)
  - [Storage](#storage-1)
    - [DataBase](#database)
      - [CoreData](#coredata)
      - [SQLite](#sqlite)
      - [Realm](#realm)
    - [File](#file)
      - [Props](#props)
      - [Resources](#resources)
      - [Widgets](#widgets)
        - [FileBrowser](#filebrowser)
        - [FileReader](#filereader)
    - [Memory/Cache/ClipBoard](#memorycacheclipboard)
  - [SysProc](#sysproc-1)
    - [Components Communication](#components-communication)
      - [EventBus](#eventbus)
    - [Concurrence](#concurrence-1)
      - [Thread](#thread-1)
      - [Promise](#promise)
    - [Service](#service)
      - [Daemon](#daemon)
    - [System](#system)
      - [RunTime/Device Detection](#runtimedevice-detection)
      - [Deeplink](#deeplink)
      - [Permission](#permission)
  - [TestRelease](#testrelease-1)
    - [Debug](#debug-1)
      - [Log](#log-1)
      - [Monitor](#monitor-1)
    - [Release](#release-1)
      - [Signature](#signature)
      - [Ad-hoc/AppStore](#ad-hocappstore)
      - [Confusion](#confusion)
      - [Update](#update)
    - [Test](#test-1)
      - [TestRunner](#testrunner-1)
      - [Test Utils](#test-utils)
        - [Assert](#assert-1)
        - [Mock](#mock)
      - [End To End Test & Integration Test](#end-to-end-test-&-integration-test)
        - [Multi-RunTime Test](#multi-runtime-test)
        - [Screenshot & Comparison](#screenshot-&-comparison)
      - [External Test](#external-test)
    - [Optimization](#optimization)
    - [Plugin & Dynamic Patch & Hot Fix](#plugin-&-dynamic-patch-&-hot-fix)
    - [APM](#apm)
      - [Rating](#rating)
      - [Analytics](#analytics)
      - [Crash Reporter](#crash-reporter)
  - [UI](#ui)
    - [Components](#components)
      - [Layout & Position](#layout-&-position)
        - [Layout Constraints](#layout-constraints)
        - [Position](#position)
          - [Absolute](#absolute)
          - [Relative](#relative)
          - [Flex](#flex)
          - [Liner](#liner)
        - [Layout Management](#layout-management)
        - [AutoLayout/Responsive](#autolayoutresponsive)
      - [Container](#container)
        - [ScrollView](#scrollview)
          - [ScrollControl](#scrollcontrol)
          - [RefreshLayout/PullToRefresh](#refreshlayoutpulltorefresh)
          - [Page-Based Scroll/Slider](#page-based-scrollslider)
        - [NavigationView](#navigationview)
        - [TabBarView](#tabbarview)
      - [Router](#router)
    - [Interaction](#interaction)
      - [Event&Gesture](#event&gesture)
        - [Event Bind](#event-bind)
          - [Click/Tap/Touch](#clicktaptouch)
          - [Cover](#cover)
        - [Event Dispatcher](#event-dispatcher)
        - [Gesture Recognizer](#gesture-recognizer)
          - [Multiple Touch](#multiple-touch)
          - [Drag&Drop](#drag&drop)
          - [Scroll](#scroll)
          - [Zoom](#zoom)
          - [Shake](#shake)
      - [Media](#media)
        - [Camera](#camera)
        - [Audio](#audio)
        - [Video](#video)
          - [WebRTC](#webrtc)
      - [Sensor](#sensor)
        - [FingerPrint](#fingerprint)
        - [Pedometer](#pedometer)
  - [UI-Widgets](#ui-widgets)
    - [Dialog](#dialog)
      - [Modal Dialog](#modal-dialog)
      - [Popup](#popup)
        - [HUD](#hud)
        - [Tooltip](#tooltip)
      - [Popover](#popover)
        - [Empty/Error](#emptyerror)
      - [Action Sheet](#action-sheet)
    - [Indicator](#indicator)
      - [Introduction](#introduction-1)
        - [Splash](#splash)
        - [Guide/Tour](#guidetour)
        - [Login/Register](#loginregister)
        - [About](#about)
      - [DateTimer](#datetimer)
        - [TimeLine](#timeline)
        - [CountDown](#countdown)
        - [Calendar](#calendar)
      - [Progress](#progress)
        - [ProgressBar](#progressbar)
          - [Liner ProgressBar](#liner-progressbar)
          - [Sticky](#sticky)
          - [Circular ProgressBar](#circular-progressbar)
        - [ProgressBackground](#progressbackground)
        - [Loading](#loading)
        - [Pagination](#pagination)
        - [Steppers](#steppers)
      - [Text](#text)
        - [Rich Text](#rich-text)
          - [MarkDown](#markdown)
          - [TypeSet](#typeset)
          - [Code Style](#code-style)
        - [Animation](#animation)
          - [TypeWriter](#typewriter)
          - [In-Out](#in-out)
          - [Carousel](#carousel)
          - [NumberMorph](#numbermorph)
        - [Font](#font)
      - [Label](#label)
        - [Icon](#icon)
        - [Tags](#tags)
        - [Badge](#badge)
    - [Picker](#picker)
      - [KeyBoard](#keyboard)
        - [KeyBoard Event](#keyboard-event)
        - [KeyBoard Panel](#keyboard-panel)
        - [KeyBoadrPanel Switcher](#keyboadrpanel-switcher)
      - [Button](#button)
        - [FAB](#fab)
        - [SpreadButton](#spreadbutton)
        - [Like/Zan](#likezan)
      - [Menu](#menu)
      - [Toolbar/StatusBar](#toolbarstatusbar)
      - [Select](#select)
        - [Search](#search)
        - [Segment](#segment)
        - [Toggle/Switch](#toggleswitch)
        - [Ratio Button](#ratio-button)
        - [Check](#check)
        - [Transfer](#transfer)
      - [Text](#text-1)
        - [TextEditor](#texteditor)
        - [AutoComplete](#autocomplete)
          - [@Mention Plugin](#@mention-plugin)
        - [Specific Format](#specific-format)
        - [Animation](#animation-1)
          - [Expand](#expand)
          - [FloatingLabel](#floatinglabel)
      - [DataTimerPicker](#datatimerpicker)
      - [LockView](#lockview)
        - [Password](#password)
        - [Gesture](#gesture)
    - [TableGrid](#tablegrid)
      - [List](#list)
        - [Animation](#animation-2)
        - [Interaction](#interaction-1)
          - [SwiperItem](#swiperitem)
          - [Folding](#folding)
          - [Sortable](#sortable)
      - [Grid](#grid)
        - [DataGrid](#datagrid)
        - [Cascading](#cascading)
      - [CardView](#cardview)
      - [SearchView](#searchview)
    - [Gallery](#gallery)
      - [ImageView](#imageview)
        - [Load](#load)
        - [Responsive](#responsive)
        - [Gifs](#gifs)
        - [Filter](#filter)
        - [Label](#label-1)
        - [Sticker](#sticker)
        - [Crop](#crop)
        - [HoverEffect](#hovereffect)
      - [PhotoBrowser](#photobrowser)
        - [album](#album)
      - [Carousel](#carousel-1)
      - [Waterfall](#waterfall)
      - [Focus](#focus)
        - [Single](#single)
        - [Carousel](#carousel-2)
    - [WebView](#webview)
      - [Native Interaction](#native-interaction)
      - [Cordova Integration](#cordova-integration)
  - [DVisual](#dvisual)
    - [Graphics](#graphics)
      - [Color](#color)
      - [Avatar&Emoij](#avatar&emoij)
      - [Sketch/Drawing](#sketchdrawing)
    - [Style&Theme](#style&theme)
    - [Filter](#filter-1)
    - [Chart](#chart)
    - [Map](#map)
    - [Barcode](#barcode)
    - [Flow](#flow)
    - [Slide](#slide)
  - [Animation](#animation-3)
    - [Animation Framework](#animation-framework)
      - [KeyFrame](#keyframe)
      - [Property](#property)
    - [Animation Collection](#animation-collection)
      - [View Transition](#view-transition)
      - [Rotate](#rotate)
      - [Flip](#flip)
- [When you want to learn Server-Side development:SpringMVC/Rails/Laravel/Express](#when-you-want-to-learn-server-side-developmentspringmvcrailslaravelexpress)
  - [Introduction](#introduction-2)
  - [Quick Start](#quick-start-1)
    - [Installation](#installation-1)
    - [Generator](#generator)
    - [Dependence Management](#dependence-management)
    - [Deployment](#deployment-1)
  - [Application](#application)
    - [LifeCycle](#lifecycle)
    - [Configuration](#configuration)
      - [Multiple Modules](#multiple-modules)
  - [Route](#route)
    - [Global Configuration](#global-configuration)
  - [Controller](#controller)
    - [Request](#request)
    - [Session](#session)
    - [Response](#response)
      - [Pagination](#pagination-1)
  - [Model](#model)
    - [Relational Database](#relational-database)
      - [ORM](#orm-1)
      - [MySQL](#mysql)
      - [Oracle](#oracle)
      - [SQLServer](#sqlserver)
      - [PostgreSQL](#postgresql)
    - [NoSQL](#nosql)
      - [Mongodb](#mongodb)
    - [Cache](#cache-1)
      - [Redis](#redis-1)
      - [Memcache](#memcache)
  - [View](#view)
    - [Template](#template)
  - [Middleware](#middleware)
    - [Auth](#auth)
    - [Log](#log-2)
  - [Service](#service-1)
    - [IoC/DI](#iocdi)
  - [Test](#test-2)
  - [Concurrence&Async](#concurrence&async)
    - [Queue](#queue)
- [When you want to learn DataScience:MachineLearning/NLP/DeepLearning/Statistic](#when-you-want-to-learn-datasciencemachinelearningnlpdeeplearningstatistic)
  - [Methodology](#methodology)
    - [DataProcess](#dataprocess)
    - [MachineLearning](#machinelearning)
      - [ANN](#ann)
      - [Clustering](#clustering)
      - [Regression](#regression)
      - [SVM](#svm)
    - [NLP](#nlp)
      - [PatternMatch](#patternmatch)
      - [SentimentAnalysis](#sentimentanalysis)
      - [TopicModel](#topicmodel)
      - [Word2Vec](#word2vec)
  - [Library](#library)
    - [ClusterComputing](#clustercomputing)
      - [MLib](#mlib)
      - [Madout](#madout)
    - [Java](#java-1)
      - [Weka](#weka)
      - [Deeplearning4j](#deeplearning4j)
    - [MATLAB](#matlab)
    - [Python](#python)
      - [Scikit](#scikit)
      - [Tensorflow](#tensorflow)
    - [R](#r)
  - [Application](#application-1)
    - [Classification](#classification)
    - [CommunityDetection](#communitydetection)
    - [Personas](#personas)
    - [Recognition](#recognition)
    - [RecommendSystem](#recommendsystem)
- [When I want to learn Infrastructure:Distributed System/OM/Cloud&Big Data/Storage/Visualization](#when-i-want-to-learn-infrastructuredistributed-systemomcloud&big-datastoragevisualization)
  - [Distributed Computing Environment](#distributed-computing-environment)
    - [Batch](#batch)
      - [Hadoop](#hadoop)
      - [Spark](#spark)
        - [Architecture](#architecture)
        - [GraphX](#graphx)
    - [Streaming](#streaming)
      - [Flink](#flink)
      - [Storm](#storm)
      - [SparkStreaming](#sparkstreaming)
  - [Distributed](#distributed)
    - [ClusterScheduler](#clusterscheduler)
    - [Distributed Model](#distributed-model)
      - [Synchronization](#synchronization)
        - [Atomic](#atomic-1)
        - [Consistency](#consistency)
        - [Lock](#lock-1)
      - [RPC](#rpc-1)
        - [Dubbo](#dubbo)
        - [gRPC](#grpc)
        - [Motan](#motan)
        - [Thrift](#thrift)
    - [Message Oriented System](#message-oriented-system)
      - [JobScheduler](#jobscheduler)
        - [Disque](#disque)
      - [ActiveMQ](#activemq)
      - [AWS-SQS](#aws-sqs)
      - [Kafka](#kafka)
      - [RabbitMQ](#rabbitmq)
      - [ZeroMQ](#zeromq)
    - [ServiceCoordination](#servicecoordination)
  - [Operation & Maintain](#operation-&-maintain)
    - [Configuration](#configuration-1)
      - [Ansible](#ansible)
      - [AWS-OpsWorks](#aws-opsworks)
      - [Chef](#chef)
      - [Puppet](#puppet)
    - [ContinuousDelivery](#continuousdelivery)
    - [LoadBalancing](#loadbalancing)
      - [HAProxy](#haproxy)
      - [LVS](#lvs)
    - [MonitorAnalytic](#monitoranalytic)
      - [Performance](#performance)
      - [Log](#log-3)
        - [ELK](#elk)
        - [Flume](#flume)
    - [Security](#security)
      - [Sentry](#sentry)
  - [Storage](#storage-2)
    - [Cache](#cache-2)
    - [DataBase](#database-1)
      - [ColumnOriented](#columnoriented)
      - [Document](#document)
      - [Graph](#graph)
      - [KeyValue](#keyvalue-1)
      - [Relational](#relational-1)
        - [Kudu](#kudu)
        - [MySQL](#mysql-1)
        - [Oracle](#oracle-1)
        - [SQL](#sql)
        - [SQLServer](#sqlserver-1)
    - [DataWareHouse](#datawarehouse)
    - [ETL](#etl)
    - [ObjectStorage](#objectstorage)
      - [BlockStorage](#blockstorage)
        - [RAID](#raid)
      - [DistributedFS](#distributedfs)
        - [BFS](#bfs)
        - [fastDFS](#fastdfs)
        - [GridFS](#gridfs)
        - [HDFS](#hdfs)
        - [MogileFS](#mogilefs)
        - [TFS](#tfs)
      - [ImageServer](#imageserver)
      - [InMemory](#inmemory)
      - [LocalFS](#localfs)
      - [NetworkFS](#networkfs)
  - [Virtualization](#virtualization)
    - [Container](#container-1)
      - [Docker](#docker)
    - [OpenStack](#openstack)
    - [SandBox](#sandbox)
    - [Hypervisor](#hypervisor)
      - [Vmware](#vmware)
      - [Xen](#xen)
  - [Network](#network-2)
    - [AccessControl](#accesscontrol)
      - [Firewalls](#firewalls)
      - [Rate Limit](#rate-limit)
    - [CDN](#cdn)
    - [Protocol](#protocol)
      - [HTTP](#http)
        - [HTTP2](#http2)
        - [HTTPS](#https)
      - [TCPIP](#tcpip)
- [When you want to learn Information Security:Mobile Security/ComputerForensics/PenetrationTesting/Reinforce](#when-you-want-to-learn-information-securitymobile-securitycomputerforensicspenetrationtestingreinforce)
- [ComputerForensic](#computerforensic)
  - [Cryptology](#cryptology)
  - [MobileSecurity](#mobilesecurity)
  - [Reinforce](#reinforce)
  - [ReverseEngineering](#reverseengineering)
  - [PenetrationTesting](#penetrationtesting)
    - [Tools](#tools)
      - [Kali](#kali)
    - [Vulns](#vulns)
      - [Application](#application-2)
      - [DataBase](#database-2)
      - [MiddleWare](#middleware)
      - [OS](#os)
    - [Tech](#tech)
      - [Footprinting/Scan/SocialEngineering](#footprintingscansocialengineering)
      - [Exploits](#exploits)
        - [DDOS](#ddos)
      - [Intranet Penetration](#intranet-penetration)
      - [Frontend](#frontend)
        - [SQL Injection](#sql-injection)
        - [XSS](#xss)
        - [CSRF](#csrf)
      - [Wireless](#wireless)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

when you want to learn something, you should cover or search the following in the internet. a great categorized knowledge graph will help you pick up new knowledger and encourage you to understand the underlying mechanism.this is from my notes for coding.

I explore new technology or frameworks mainly from these sites:

- Reddit
- Medium
- Github Explore

> - The most painful and troublesome  thing during my coding life is forgetting something i have learned and have no choice but to waste it again and again


> - my english is not good, so currently there are only titles and i will enrich them step by step.



# When you want to learn new programming language:C++/Java/JavaScript/PHP/Swift/Rust/Go...

## Introduction

### Version Iteration

### Comments & Code Splitting

### Modules & NameSpace

### Reference

#### Tutorials & Docs

## Quick Start

### Installation

### Builder & Dependence Manager

### Deployment

### IDE

## Data Structure

### Variable & Constant

#### Scope

#### Assignment

##### Pass-by-Reference VS Pass-by-Value

##### Continuous Assignment

##### Destructuring Assignment

#### Copy Composite Data Types

### TypeChecking & Transform

#### Runtime TypeChecking

### Basic

#### Numeric

#### Random Number

#### Scientific Evaluation

#### Null

#### Boolean

#### Optional

#### Enum

### String

#### Create&Insert&Delete

#### Index&Iteration

#### Format&Encode

#### Others

### Struct

### Indexed Collection:Array/List/Set

#### Create&Insert&Delete

#### Index&Iteration

#### Format&Encode

#### Others

### Keyed Collection:Map/Turple

#### Create&Insert&Delete

#### Index&Iteration

#### Format&Encode

#### Others

### Immutable

### Serialization

#### JSON

#### CSV

#### XML

## Control Flow & Error Handling

### Operator

#### Basic

#### Logic

#### Overload

### Branch

#### if

#### switch

### Loop

#### for

#### for-in

#### for-of

#### forEach

### Control

#### breaker/continue

#### anchor

### Iterator

#### Generator/yield

### Exception Handling

#### Error

#### Throw

#### Try-Catch-Finally

## Function

### Definition

#### Return Value

#### Functional Variable

### Invoke/Call

#### Default Params & External Params

#### Indefinite Params

### Anonymous Function / Lambda / Closures

#### Decorator

#### Currying & unCurrying

## Network

### NetworkManagement

##### Reachability

### Socket

### HttpClient

### RPC/RMI

## Storage

### Cache

### Database

#### KeyValue

##### Redis

#### Relational

##### ORM

##### Sharding Support

### FileSystem

#### FileSystem-Monitor

#### Archives

## TestRelease

### Debug

#### Monitor

### Test

#### TestRunner

#### Assert

#### Mock&Stuv

### Log

### Release

#### Package

## SysProc

### AOP

### Concurrence

#### Thread

#### Asynchronous Pattern

##### Data Flow

##### Reactice

#### Synchronous

##### Lock

##### Atomic

##### Data visibility

##### Built-in ThreadSafe DataStructure

###### Collections

## Advanced

### Generic

### Memory Management

### Code Style & Conventions

### Algorithms



# When you want to learn Client-Side development:iOS/Android/Hybrid/WebAPP

## Language

### Objective-C

### Swift

### Dart

### Java

## Network

### NetworkManagement

#### Reachability

### Socket

### HttpClient

#### URL Encode & Analysis

#### Request Manage

#### Parallel Request

#### HTTPStubs/MockServer

### FileTransfer

#### Uploads

#### Download

### Push

#### WebSocket

### RPC

#### JSON

##### JSON Object Mapper

### FlatBuffer

### MsgPack

## Storage

### DataBase

#### CoreData

#### SQLite

#### Realm

### File

#### Props

#### Resources

#### Widgets

##### FileBrowser

##### FileReader

### Memory/Cache/ClipBoard

## SysProc

### Components Communication

#### EventBus

### Concurrence

#### Thread

#### Promise

### Service

#### Daemon

### System

#### RunTime/Device Detection

#### Deeplink

#### Permission

## TestRelease

### Debug

#### Log

#### Monitor

### Release

#### Signature

####  Ad-hoc/AppStore

#### Confusion

#### Update

### Test

#### TestRunner

#### Test Utils

##### Assert

##### Mock

#### End To End Test & Integration Test

##### Multi-RunTime Test

##### Screenshot & Comparison

#### External Test

### Optimization

### Plugin & Dynamic Patch & Hot Fix

### APM

#### Rating

#### Analytics

#### Crash Reporter

## UI

### Components

#### Layout & Position

##### Layout Constraints

##### Position

###### Absolute

###### Relative

###### Flex

###### Liner

##### Layout Management

##### AutoLayout/Responsive

#### Container

##### ScrollView

###### ScrollControl

- ScrollSpy
- Sticky

###### RefreshLayout/PullToRefresh

- Infinite Scroll

###### Page-Based Scroll/Slider

##### NavigationView

##### TabBarView

#### Router

### Interaction

#### Event&Gesture

##### Event Bind

###### Click/Tap/Touch

###### Cover

##### Event Dispatcher

##### Gesture Recognizer

###### Multiple Touch

###### Drag&Drop

###### Scroll

###### Zoom

###### Shake

#### Media

##### Camera

##### Audio

##### Video

###### WebRTC

#### Sensor

##### FingerPrint

##### Pedometer

## UI-Widgets

### Dialog

#### Modal Dialog

#### Popup

##### HUD

##### Tooltip

#### Popover

##### Empty/Error

#### Action Sheet

### Indicator

#### Introduction

##### Splash

##### Guide/Tour

##### Login/Register

##### About

#### DateTimer

##### TimeLine

##### CountDown

##### Calendar

#### Progress

##### ProgressBar

###### Liner ProgressBar

###### Sticky

###### Circular ProgressBar

##### ProgressBackground

##### Loading

##### Pagination

##### Steppers

#### Text

##### Rich Text

###### MarkDown

###### TypeSet

###### Code Style

##### Animation

###### TypeWriter

###### In-Out

###### Carousel

###### NumberMorph

##### Font

#### Label

##### Icon

##### Tags

##### Badge

### Picker

#### KeyBoard

##### KeyBoard Event

##### KeyBoard Panel

##### KeyBoadrPanel Switcher

#### Button

##### FAB

##### SpreadButton

##### Like/Zan

#### Menu

#### Toolbar/StatusBar

#### Select

##### Search

##### Segment

##### Toggle/Switch

##### Ratio Button

##### Check

##### Transfer

#### Text

##### TextEditor

##### AutoComplete

###### @Mention Plugin

##### Specific Format

##### Animation

###### Expand

###### FloatingLabel

#### DataTimerPicker

#### LockView

##### Password

##### Gesture

### TableGrid

#### List

##### Animation

##### Interaction

###### SwiperItem

###### Folding

###### Sortable

#### Grid

##### DataGrid

##### Cascading

#### CardView

#### SearchView

### Gallery

#### ImageView

##### Load

##### Responsive

##### Gifs

##### Filter

##### Label

##### Sticker

##### Crop

##### HoverEffect

#### PhotoBrowser

##### album

#### Carousel

#### Waterfall

#### Focus

##### Single

##### Carousel

### WebView

#### Native Interaction

#### Cordova Integration



## DVisual

### Graphics

#### Color

#### Avatar&Emoij

#### Sketch/Drawing

### Style&Theme

### Filter

### Chart

### Map

### Barcode

### Flow

### Slide

## Animation

### Animation Framework

#### KeyFrame

#### Property

### Animation Collection

#### View Transition

#### Rotate

#### Flip

# When you want to learn Server-Side development:SpringMVC/Rails/Laravel/Express

## Introduction

## Quick Start

### Installation

### Generator

### Dependence Management

### Deployment

## Application

### LifeCycle

### Configuration

#### Multiple Modules

## Route

### Global Configuration

## Controller

### Request

### Session

### Response

#### Pagination

## Model

### Relational Database

#### ORM

#### MySQL

#### Oracle

#### SQLServer

#### PostgreSQL

### NoSQL

#### Mongodb

### Cache

#### Redis

#### Memcache

## View

### Template

## Middleware

### Auth

### Log

## Service

### IoC/DI

## Test

## Concurrence&Async

### Queue

# When you want to learn DataScience:MachineLearning/NLP/DeepLearning/Statistic

## Methodology

### DataProcess

### MachineLearning

#### ANN

#### Clustering

#### Regression

#### SVM

### NLP

#### PatternMatch

#### SentimentAnalysis

#### TopicModel

#### Word2Vec

## Library

### ClusterComputing

#### MLib

#### Madout

### Java

#### Weka

#### Deeplearning4j

### MATLAB

### Python

#### Scikit

#### Tensorflow

### R

## Application

### Classification

### CommunityDetection

### Personas

### Recognition

### RecommendSystem

# When I want to learn Infrastructure:Distributed System/OM/Cloud&Big Data/Storage/Visualization

## Distributed Computing Environment

### Batch

#### Hadoop

#### Spark

##### Architecture

##### GraphX

### Streaming

#### Flink

#### Storm

#### SparkStreaming

## Distributed

### ClusterScheduler

### Distributed Model

#### Synchronization

##### Atomic

##### Consistency

##### Lock

#### RPC

##### Dubbo

##### gRPC

##### Motan

##### Thrift



### Message Oriented System

#### JobScheduler

##### Disque

#### ActiveMQ

#### AWS-SQS

#### Kafka

#### RabbitMQ

#### ZeroMQ

### ServiceCoordination

## Operation & Maintain

### Configuration

#### Ansible

#### AWS-OpsWorks

#### Chef

#### Puppet

### ContinuousDelivery

### LoadBalancing

#### HAProxy

#### LVS

### MonitorAnalytic

#### Performance

#### Log

##### ELK

##### Flume

### Security

#### Sentry

## Storage

### Cache

### DataBase

#### ColumnOriented

#### Document

#### Graph

#### KeyValue

#### Relational

##### Kudu

##### MySQL

##### Oracle

##### SQL

##### SQLServer

### DataWareHouse

### ETL

### ObjectStorage

#### BlockStorage

##### RAID

#### DistributedFS

##### BFS

##### fastDFS

##### GridFS

##### HDFS

##### MogileFS

##### TFS

#### ImageServer

#### InMemory

#### LocalFS

#### NetworkFS



## Virtualization

### Container

#### Docker

### OpenStack

### SandBox

### Hypervisor

#### Vmware

#### Xen

## Network

### AccessControl

#### Firewalls

#### Rate Limit

### CDN

### Protocol

#### HTTP

##### HTTP2

##### HTTPS

#### TCPIP

# When you want to learn Information Security:Mobile Security/ComputerForensics/PenetrationTesting/Reinforce

# ComputerForensic

## Cryptology

## MobileSecurity

## Reinforce

## ReverseEngineering

## PenetrationTesting

### Tools

#### Kali

### Vulns

#### Application

#### DataBase

#### MiddleWare

#### OS

### Tech

#### Footprinting/Scan/SocialEngineering

#### Exploits

##### DDOS

#### Intranet Penetration

#### Frontend

##### SQL Injection

##### XSS

##### CSRF

#### Wireless