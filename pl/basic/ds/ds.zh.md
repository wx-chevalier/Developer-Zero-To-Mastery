<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [变量与常量](#%E5%8F%98%E9%87%8F%E4%B8%8E%E5%B8%B8%E9%87%8F)
  - [作用域(Scope)](#%E4%BD%9C%E7%94%A8%E5%9F%9Fscope)
  - [常量与宏](#%E5%B8%B8%E9%87%8F%E4%B8%8E%E5%AE%8F)
    - [系统常量](#%E7%B3%BB%E7%BB%9F%E5%B8%B8%E9%87%8F)
  - [赋值](#%E8%B5%8B%E5%80%BC)
    - [赋值类型：传引用/传值(pass-by-reference or pass-by-value)](#%E8%B5%8B%E5%80%BC%E7%B1%BB%E5%9E%8B%EF%BC%9A%E4%BC%A0%E5%BC%95%E7%94%A8%E4%BC%A0%E5%80%BCpass-by-reference-or-pass-by-value)
    - [连续赋值](#%E8%BF%9E%E7%BB%AD%E8%B5%8B%E5%80%BC)
    - [解构赋值](#%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC)
  - [类型/格式/值 判断与检测](#%E7%B1%BB%E5%9E%8B%E6%A0%BC%E5%BC%8F%E5%80%BC-%E5%88%A4%E6%96%AD%E4%B8%8E%E6%A3%80%E6%B5%8B)
    - [Reference Equality VS Value Equality:引用相等与值相等](#reference-equality-vs-value-equality%E5%BC%95%E7%94%A8%E7%9B%B8%E7%AD%89%E4%B8%8E%E5%80%BC%E7%9B%B8%E7%AD%89)
    - [Predicate Library:基于谓词逻辑的判断](#predicate-library%E5%9F%BA%E4%BA%8E%E8%B0%93%E8%AF%8D%E9%80%BB%E8%BE%91%E7%9A%84%E5%88%A4%E6%96%AD)
    - [Runtime TypeChecking:动态类型检查](#runtime-typechecking%E5%8A%A8%E6%80%81%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5)
  - [复合类型的复制:Copy Composite Data Types](#%E5%A4%8D%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%A4%8D%E5%88%B6copy-composite-data-types)
- [基本类型(Basic)](#%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8Bbasic)
  - [数值类型](#%E6%95%B0%E5%80%BC%E7%B1%BB%E5%9E%8B)
    - [随机数](#%E9%9A%8F%E6%9C%BA%E6%95%B0)
    - [科学计算](#%E7%A7%91%E5%AD%A6%E8%AE%A1%E7%AE%97)
    - [类型转换](#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)
  - [空类型](#%E7%A9%BA%E7%B1%BB%E5%9E%8B)
  - [布尔类型](#%E5%B8%83%E5%B0%94%E7%B1%BB%E5%9E%8B)
  - [可选类型:Optional](#%E5%8F%AF%E9%80%89%E7%B1%BB%E5%9E%8Boptional)
  - [枚举类型:Enum](#%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8Benum)
- [字符串:String](#%E5%AD%97%E7%AC%A6%E4%B8%B2string)
  - [Manipulation:操作](#manipulation%E6%93%8D%E4%BD%9C)
    - [创建添加](#%E5%88%9B%E5%BB%BA%E6%B7%BB%E5%8A%A0)
    - [Format/Template:格式化与模板字符串生成、字符串插值](#formattemplate%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%B8%8E%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%94%9F%E6%88%90%E3%80%81%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8F%92%E5%80%BC)
    - [替换删除](#%E6%9B%BF%E6%8D%A2%E5%88%A0%E9%99%A4)
  - [Index&Iteration:索引遍历](#index&iteration%E7%B4%A2%E5%BC%95%E9%81%8D%E5%8E%86)
    - [存在判断](#%E5%AD%98%E5%9C%A8%E5%88%A4%E6%96%AD)
    - [反向索引](#%E5%8F%8D%E5%90%91%E7%B4%A2%E5%BC%95)
    - [循环遍历](#%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86)
    - [截取分割](#%E6%88%AA%E5%8F%96%E5%88%86%E5%89%B2)
  - [类型编码](#%E7%B1%BB%E5%9E%8B%E7%BC%96%E7%A0%81)
    - [字符集编码](#%E5%AD%97%E7%AC%A6%E9%9B%86%E7%BC%96%E7%A0%81)
    - [URL/HTML编码](#urlhtml%E7%BC%96%E7%A0%81)
    - [拼音编码](#%E6%8B%BC%E9%9F%B3%E7%BC%96%E7%A0%81)
  - [模式匹配](#%E6%A8%A1%E5%BC%8F%E5%8C%B9%E9%85%8D)
    - [正则表达式](#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F)
    - [Valid:字符串校验](#valid%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%A1%E9%AA%8C)
- [时间日期类型](#%E6%97%B6%E9%97%B4%E6%97%A5%E6%9C%9F%E7%B1%BB%E5%9E%8B)
  - [构造与TimeZone:本地化时间](#%E6%9E%84%E9%80%A0%E4%B8%8Etimezone%E6%9C%AC%E5%9C%B0%E5%8C%96%E6%97%B6%E9%97%B4)
    - [TimeStamp](#timestamp)
  - [TimeFormat:时间格式化](#timeformat%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F%E5%8C%96)
  - [TimeOperation](#timeoperation)
    - [TimeComparison:时间比较](#timecomparison%E6%97%B6%E9%97%B4%E6%AF%94%E8%BE%83)
    - [TimeExtract:获取部分值，譬如获取到年](#timeextract%E8%8E%B7%E5%8F%96%E9%83%A8%E5%88%86%E5%80%BC%EF%BC%8C%E8%AD%AC%E5%A6%82%E8%8E%B7%E5%8F%96%E5%88%B0%E5%B9%B4)
    - [Diff:差值计算](#diff%E5%B7%AE%E5%80%BC%E8%AE%A1%E7%AE%97)
      - [Diff Format:差值格式化展示](#diff-format%E5%B7%AE%E5%80%BC%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%B1%95%E7%A4%BA)
  - [Calendar:日历](#calendar%E6%97%A5%E5%8E%86)
- [结构体:Struct](#%E7%BB%93%E6%9E%84%E4%BD%93struct)
- [Indexed Collection:序列类型](#indexed-collection%E5%BA%8F%E5%88%97%E7%B1%BB%E5%9E%8B)
  - [Properties:属性](#properties%E5%B1%9E%E6%80%A7)
    - [Length/Size:长度/尺寸](#lengthsize%E9%95%BF%E5%BA%A6%E5%B0%BA%E5%AF%B8)
    - [Types:类型判断](#types%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD)
  - [Manipulation:操作](#manipulation%E6%93%8D%E4%BD%9C-1)
    - [创建添加](#%E5%88%9B%E5%BB%BA%E6%B7%BB%E5%8A%A0-1)
    - [复制](#%E5%A4%8D%E5%88%B6)
    - [替换删除](#%E6%9B%BF%E6%8D%A2%E5%88%A0%E9%99%A4-1)
    - [截取分割](#%E6%88%AA%E5%8F%96%E5%88%86%E5%89%B2-1)
    - [转换:Transform](#%E8%BD%AC%E6%8D%A2transform)
      - [map/flatMap](#mapflatmap)
  - [Index&Iteration:索引遍历](#index&iteration%E7%B4%A2%E5%BC%95%E9%81%8D%E5%8E%86-1)
    - [存在判断&反向索引](#%E5%AD%98%E5%9C%A8%E5%88%A4%E6%96%AD&%E5%8F%8D%E5%90%91%E7%B4%A2%E5%BC%95)
    - [循环遍历](#%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86-1)
    - [过滤:filter](#%E8%BF%87%E6%BB%A4filter)
    - [排序:Comparison](#%E6%8E%92%E5%BA%8Fcomparison)
      - [Comparator](#comparator)
      - [sort](#sort)
  - [Aggregation:聚合操作](#aggregation%E8%81%9A%E5%90%88%E6%93%8D%E4%BD%9C)
    - [reduce](#reduce)
    - [count/sum:求和/求值](#countsum%E6%B1%82%E5%92%8C%E6%B1%82%E5%80%BC)
- [Keyed Collections:键值索引类型](#keyed-collections%E9%94%AE%E5%80%BC%E7%B4%A2%E5%BC%95%E7%B1%BB%E5%9E%8B)
  - [Properties](#properties)
    - [Keys:键信息获取](#keys%E9%94%AE%E4%BF%A1%E6%81%AF%E8%8E%B7%E5%8F%96)
    - [Type:类型判断](#type%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD)
  - [Manipulation:操作](#manipulation%E6%93%8D%E4%BD%9C-2)
    - [创建添加](#%E5%88%9B%E5%BB%BA%E6%B7%BB%E5%8A%A0-2)
    - [复制](#%E5%A4%8D%E5%88%B6-1)
    - [替换删除](#%E6%9B%BF%E6%8D%A2%E5%88%A0%E9%99%A4-2)
  - [Index&Iteration:索引遍历](#index&iteration%E7%B4%A2%E5%BC%95%E9%81%8D%E5%8E%86-2)
    - [存在判断&反向索引](#%E5%AD%98%E5%9C%A8%E5%88%A4%E6%96%AD&%E5%8F%8D%E5%90%91%E7%B4%A2%E5%BC%95-1)
    - [循环遍历](#%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86-2)
    - [过滤:filter](#%E8%BF%87%E6%BB%A4filter-1)
- [序列化与反序列化](#%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8E%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96)
  - [JSON](#json)
    - [JSON Generator:从Model生成JSON](#json-generator%E4%BB%8Emodel%E7%94%9F%E6%88%90json)
    - [JSON Parser:从JSON生成Model](#json-parser%E4%BB%8Ejson%E7%94%9F%E6%88%90model)
  - [XML/HTML](#xmlhtml)
    - [XML/HTML Parser:XML解析器](#xmlhtml-parserxml%E8%A7%A3%E6%9E%90%E5%99%A8)
    - [XML/HTML Generator:XML构造器](#xmlhtml-generatorxml%E6%9E%84%E9%80%A0%E5%99%A8)
    - [XSD Validator:根据XSD对XML进行校验](#xsd-validator%E6%A0%B9%E6%8D%AExsd%E5%AF%B9xml%E8%BF%9B%E8%A1%8C%E6%A0%A1%E9%AA%8C)
  - [CSV](#csv)
    - [CSV Parser:CSV解释器](#csv-parsercsv%E8%A7%A3%E9%87%8A%E5%99%A8)
    - [CSV Generator:CSV生成器](#csv-generatorcsv%E7%94%9F%E6%88%90%E5%99%A8)
- [Immutable:不可变对象](#immutable%E4%B8%8D%E5%8F%AF%E5%8F%98%E5%AF%B9%E8%B1%A1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

本部分应该算是一门语言的基石，主要涉及某个语言所提供的基本的数据类型与数据结构。

# 变量与常量

本部分主要介绍变量的定义方式与定义规范，变量名的要求、强/弱类型语言区分以及类型声明等。譬如PHP中需要明晰所有的变量以$符号开始，Java中以```Int i ```这种类型在前的方式声明，而Swift中以```var i:Int```这种方式声明。除以之外，在JavaScript与Swift中存在着let与var两种变量声明方式，这两种不同的声明方式对应了不变量与可变量。

## 作用域(Scope)

变量与值存取几乎是所有编程语言中通用的范式，正是这种能够存取以及修改值的能力赋予了程序以状态(State)。本部分主要对于变量的作用域进行一个阐述，一般变量即是指局部变量，但是往往会受到闭包、静态变量(static)、全局变量(global)的影响。



> One of the most fundamental paradigms of nearly all programming languages is the ability to store values in variables, and later retrieve or modify those values. In fact, the ability to store values and pull values out of variables is what gives a program state.



## 常量与宏

常量与宏往往作为全局的定义或者配置，譬如C++以及OC中的define关键字，就可以定义某个宏。

### 系统常量

本部分需要对常用的系统常量有一个了解，譬如PHP中的__dir，就是指代的当前目录。

## 赋值

赋值最简单的理解就是利用```=```号将右侧的值或者指针赋予左侧，不过赋值这部分需要了解的是该语言是否支持析构解包赋值，譬如ES6中的特性：```var a,b = [1,2]```

### 赋值类型：传引用/传值(pass-by-reference or pass-by-value)

### 连续赋值

### 解构赋值





## 类型/格式/值 判断与检测



本部分主要阐述语言中常用的类型判断方法，譬如Java领域的instanceof关键字、JavaScript领域的typeof关键字等等。另一方面，还要阐述下常见的强制类型转换的方法，就像Swift领域的as关键字。

### Reference Equality VS Value Equality:引用相等与值相等

在进行对象比较时，我们常说的两个对象是否相等，实际上可能有两个指向，一是指二者的引用是否相等，另一个是值二者的实际的值是否相等。譬如在JavaScript中，如果我们直接使用`==`或者`===`来比较两个对象是否相等，即:

```

object = object2;
object == object2; // true
object === object2; // true

```

这种得出的结果其实是表明这两个对象是引用相等的，即两个对象实际指向内存空间中的同一块区域。当我们修改某个对象的值的时候，获取另一个对象的相同属性获得的也是修改之后的值:

```

object = object2;
object.x = 12;

object.x; // 12
object2.x; // 12
```

而对于值相等，则是指内存空间中两块不同的数据中的原始值借相等，最直观的例子就是两个原始值的一致性:

```

var x = 12,
    y = 12;

x == y; // true
x === y; // true

```

一般来说，值相等的判断都会较为复杂，我们使用下述伪代码来描述值相等的判断过程:

```

// Input: an object1 and object2
// Output:
     true if an object1 is equal in terms of values to object2

valueEqual(object1, object2):
  object1keys = <list of keys of object1>
  object2keys = <list of keys of object2>

  return false if length(object1keys) != length(object2keys)

  for each key in object1keys:
    return false if key not in object2keys
    return false if typeof(object1[key]) != typeof(object2[key])

    if object1[key] is an object:
      keyEqual = valueEqual(object1[key], object2[key])
      return false if keyEqual != false

    if object1[key] is a primitive:
      return false if object1[key] != object2[key]

  return true
```

这里对于Object中的Key的遍历可以等价于OOP中对于类的属性域的判断。



### Predicate Library:基于谓词逻辑的判断

所谓谓词，即是基于值来返回True或者False的判断语句，可以用于封装常见的判断逻辑，建议是在任何需要对于Collection/Group数据进行判断与检测并且返回True或者False的情形都使用Predicate。这种函数式的表述可读性比较好，以Java8为例:

```

    public static Predicate<Employee> isAdultMale() {
        return p -> p.getAge() > 21 && p.getGender().equalsIgnoreCase("M");
    }
     
    public static Predicate<Employee> isAdultFemale() {
        return p -> p.getAge() > 18 && p.getGender().equalsIgnoreCase("F");
    }
     
    public static Predicate<Employee> isAgeMoreThan(Integer age) {
        return p -> p.getAge() > age;
    }
```

### Runtime TypeChecking:动态类型检查



## 复合类型的复制:Copy Composite Data Types

一般来说，复制(Copy)分为浅复制(Shallow Copy)与深复制(Deep Copy)，通俗来说，浅复制只是复制了内存的地址，新旧对象其实指向同一块存储。而深复制则是创建一块新的内存空间，新旧对象彻底隔离。

> Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

> A deep copy copies all fields, and makescopies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.



# 基本类型(Basic)



本部分主要介绍常见的基础数据类型。



## 数值类型



数值类型包括整型、浮点型(如果是强数据类型的化)。



### 随机数



介绍随机数的生成方式。



### 科学计算



介绍科学计算的方式，特别是对于Matlab、R、Python这样在统计学与数据科学领域应用较多的，包括常见的科学计算算子等等。



### 类型转换

介绍数值类型之间，或者其他类型转化为数值类型的方法。

## 空类型



本部分介绍语言中是怎么定义空类型的，常见的空类型有null、nil、undefined等等。



## 布尔类型



不部分介绍语言中的布尔类型，对于非面向对象的语言，往往是true这样的Primitive类型，而OC中则存在着TRUE、YES等等多种形式。



## 可选类型:Optional



笔者第一次接触到可选类型还是在Google的Guava这个类库中，此后作为特性之一正式加入了Java8。不过笔者窃认为Swift中对于可选类型的封装更为完善，譬如在Swift中以```var str:String?```方式声明的就是一个可选类型，该类型可以优雅地判断是否为空或者为Nil（虽然是因为Swift不会主动将对象赋值为Nil才需要这么做），然后通过```str!```方式即可方便调用。





## 枚举类型:Enum





# 字符串:String

字符串是语言中最常使用的语法，没有之一，虽然简单，但是还是很恶心。本部分主要就是阐述常用的字符串的API，往往都是一列一大堆，还长得特别像，所以这边也分了个类。如果是在C这种非对象化的语言中，可以暂时将字符数组看做字符串，不要在意这些细节。



这部分包括字符串的基本比较



## Manipulation:操作

本部分介绍怎么创建以及修改某个字符串。

### 创建添加

最常见的也是最通用的创建字符串的方式就是以```””```双引号方式创建，不过譬如OC中你一定要加@符号才能真正创建某个字符串对象，这个需要注意。另外，在字符串合并时，譬如C里面要注意使用concat这样的函数，而PHP里面要注意使用```.```运算符而不是```+```运算符。

### Format/Template:格式化与模板字符串生成、字符串插值

格式化字符串、模板字符串、字符串插值其实是一个意思，简单而言就好像```print("%s","a")```这样，其实print里面是采用变量替换的方式组装了一个新的字符串。在ES6、Swift、PHP中的直观表现就是利用{}或者双引号可以书写变量然后直接将变量的值替换进来。

### 替换删除

本部分介绍常见的在字符串中查找某个字符、根据下标删除某个字符等等。

## Index&Iteration:索引遍历

### 存在判断

本部分主要介绍如何在字符串中判断某个字符是否存在或者某个字串是否存在，有时候直接可以用contains方法，有时候需要indexOf方法判断。在有些语言，譬如Swift中还支持`hasPrefix`、`hasSuffix`这样的内建的辅助方法。

### 反向索引

根据某个字符或者某个字串，获得其在字符串中的下标。

### 循环遍历

怎么去遍历某个字符串。

### 截取分割

本部分介绍怎么根据某个字符或者正则表达式进行字符串分割，往往分割的结果就是获得一个数组。

## 类型编码

### 字符集编码

### URL/HTML编码

介绍下语言中是否有处理HTML标签的方法，往往是为了防止XSS等，譬如PHP领域的htmlspecialchars、strip_tags等等。

### 拼音编码

介绍下语言中是否对于汉字拼音有支持，譬如Java领域比较著名的Pinyin4j。

## 模式匹配

### 正则表达式

### Valid:字符串校验

封装好的类似于正则表达式，用于校验字符串长度、是否为URL、Email等。



# 时间日期类型



时间与日期类型也是编程语言领域常用的数据类型，Java8之前的Date、SimpleDateFormat等等也是为人诟病。一般而言，时间与日期类型需要考虑以下几个部分：



| Input      | Example          | Description                              |

| ---------- | ---------------- | ---------------------------------------- |

| `YYYY`     | `2014`           | 4 or 2 digit year                        |

| `YY`       | `14`             | 2 digit year                             |

| `Y`        | `-25`            | Year with any number of digits and sign  |

| `Q`        | `1..4`           | Quarter of year. Sets month to first month in quarter. |

| `M MM`     | `1..12`          | Month number                             |

| `MMM MMMM` | `Jan..December`  | Month name in locale set by `moment.locale()` |

| `D DD`     | `1..31`          | Day of month                             |

| `Do`       | `1st..31st`      | Day of month with ordinal                |

| `DDD DDDD` | `1..365`         | Day of year                              |

| `X`        | `1410715640.579` | Unix timestamp                           |

| `x`        | `1410715640579`  | Unix ms timestamp                        |



| Input      | Example  | Description                              |

| ---------- | -------- | ---------------------------------------- |

| `H HH`     | `0..23`  | 24 hour time                             |

| `h hh`     | `1..12`  | 12 hour time used with `a A`.            |

| `a A`      | `am pm`  | Post or ante meridiem (Note the one character `a p` are also considered valid) |

| `m mm`     | `0..59`  | Minutes                                  |

| `s ss`     | `0..59`  | Seconds                                  |

| `S SS SSS` | `0..999` | Fractional seconds                       |

| `Z ZZ`     | `+12:00` | Offset from UTC as `+-HH:mm`, `+-HHmm`, or `Z` |







## 构造与TimeZone:本地化时间



本部分介绍怎么根据当前时间构造一个时间对象或者根据输入的指定格式的字符串构造一个时间对象。另外，需要对TimeZone以及本地化时间有一个阐述。



### TimeStamp



介绍怎么从时间对象得到TimeStamp，以及TimeStamp本身的TimeZone。



## TimeFormat:时间格式化



``` 

介绍下常用的时间格式话工具、规范，譬如OC领域的NSDateFormatter等等。

```



## TimeOperation

### TimeComparison:时间比较

### TimeExtract:获取部分值，譬如获取到年

### Diff:差值计算

#### Diff Format:差值格式化展示

主要介绍如何比较两个时间对象以及计算他们之间的差值。





## Calendar:日历

日历功能，用于判断某个日期在某月的第几周等等。Java 8中，LocalDate也自带了Calendar功能。

# 结构体:Struct

# Indexed Collection:序列类型

常说的序列类型，包括但不限于数组(Array)、列表(List)、元组(Tuple)。序列类型是编程语言数据类型的重要组成部分。如果是像JavaScript或者PHP这种，只有一种Array类型的，可以直接一章写完。如果是Java这样包含了各种序列类型的，建议是另开一章。序列类型最基本的需要介绍序列的长度获取、空判断以及序列的类型判断。

## Properties:属性

### Length/Size:长度/尺寸

### Types:类型判断

## Manipulation:操作

### 创建添加

### 复制

### 替换删除

### 截取分割

### 转换:Transform

#### map/flatMap

## Index&Iteration:索引遍历

### 存在判断&反向索引

### 循环遍历

### 过滤:filter

### 排序:Comparison

#### Comparator

#### sort

## Aggregation:聚合操作

### reduce

### count/sum:求和/求值



# Keyed Collections:键值索引类型

## Properties

### Keys:键信息获取

### Type:类型判断

## Manipulation:操作

### 创建添加

### 复制

### 替换删除

## Index&Iteration:索引遍历

### 存在判断&反向索引

### 循环遍历

### 过滤:filter



# 序列化与反序列化

序列化与反序列化简单来说就是把某个Object或者复杂数据类型转化为某个字符串(Json)或者某个数据流。本部分一方面主要介绍语言内置的序列化方式，譬如Java的Serialization，不要管什么ProtoBuf、FlatBuffer、Thrift等等。另一方面介绍该语言常用的Json编译与解析框架(用的多，没办法)。就像Java领域的FastJson。

## JSON

### JSON Generator:从Model生成JSON

### JSON Parser:从JSON生成Model

## XML/HTML

### XML/HTML Parser:XML解析器

### XML/HTML Generator:XML构造器

### XSD Validator:根据XSD对XML进行校验

## CSV

### CSV Parser:CSV解释器

### CSV Generator:CSV生成器



# Immutable:不可变对象





