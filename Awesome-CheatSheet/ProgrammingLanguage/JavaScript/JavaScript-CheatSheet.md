[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

[🔆 中文版本](./JavaScript-CheatSheet.md) | [☀️ English Version](./JavaScript-CheatSheet.en.md)

# JavaScript 语法速览与实战清单

参考了 [30 seconds of code](https://github.com/Chalarangelo/30-seconds-of-code)

# 基础语法

## ES6 Module: 模块

```js
// 导出蜘蛛
export { default as Spider } from "./source/spider/Spider";
export { default as HTMLSpider } from "./source/spider/web/HTMLSpider";
export {
  default as HeadlessChromeSpider
} from "./source/spider/web/HeadlessChromeSpider";

// 导出爬虫
export { default as Crawler } from "./source/crawler/Crawler";

// 导出爬虫调度器
export { default as CrawlerScheduler } from "./source/crawler/CrawlerScheduler";

// 导出全局唯一值
export { dcEmitter, store } from "./source/crawler/supervisor";

// 导出持久化器
export { default as DownloadPersistor } from "./sink/persist/DownloadPersistor";
```

# 变量与表达式

# 基本数据类型

## 类型判断与变量比较

```js
[] == []; // false
```

```js
typeof 0; // number
typeof true; // boolean
typeof "Hello"; // string
typeof Math; // object
typeof null; // object  !!
typeof Symbol("Hi"); // symbol (New ES6)
```

## Regex: 正则表达式

对于常量正则表达式，可以使用正则字符串方式；而对于动态的正则表达式，可以使用正则表达式构造函数 :

```js
// Regular Expression Literal
const regexLiteral = /cat/;

// Regular Expression Constructor
const regexConstructor = new RegExp("cat");
```

正则表达式可以用来判断元素存在性，用于字符串替换等：

```js
const str1 = "the cat says meow";
const hasCat = /cat/;
hasCat.test(str1);
// true

function removeCc(str) {
  return str.replace(/([A-Z])/g, " $1");
}
removeCc("camelCase"); // 'camel Case'
removeCc("helloWorldItIsMe"); // 'hello World It Is Me'
```

* Symbols

| 符号 | 描述                                                           |
| ---- | -------------------------------------------------------------- |
| .    | (period) Matches any single character, except for line breaks. |
| \*   | Matches the preceding expression 0 or more times.              |
| +    | Matches the preceding expression 1 or more times.              |
| ?    | Preceding expression is optional (Matches 0 or 1 times).       |
| ^    | Matches the beginning of the string.                           |
| $    | Matches the end of the string.                                 |

* Character groups

| 符号   | 描述                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------- |
| \d     | Matches any single digit character.                                                                                       |
| \w     | Matches any word character (alphanumeric & underscore).                                                                   |
| [XYZ]  | Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z] |
| [XYZ]+ | Matches one or more of any of the characters in the set.                                                                  |
| [^a-z] | Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.      |

* Flags: There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: /[A-Z]/g I’ll only be introducing 2 here.

| 符号 | 描述                    |
| ---- | ----------------------- |
| g    | Global search           |
| i    | case insensitive search |

* Advanced

| 符号   | 描述                                                                      |
| ------ | ------------------------------------------------------------------------- |
| (x)    | Capturing Parenthesis: Matches x and remembers it so we can use it later. |
| (?:x)  | Non-capturing Parenthesis: Matches x and does not remembers it.           |
| x(?=y) | Lookahead: Matches x only if it is followed by y.                         |

# 集合类型

## Array: 数组

### Array Like

### Transform: 变换

`reduce()` 函数能够将某个函数作用于数组中的每个  元素，从而将多个值转换为单个值；其典型的用法为计算数组和值，或者进行数组扁平化：

```js
// 指定初始值
let result = arr.reduce(callback, initValue);

// 计算数组和值
let sum = arr.reduce((acc, val) => {
  return acc + val;
});

// 使用 reduce 进行数组扁平化
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
// flatten([1,[2],3,4]) -> [1,2,3,4]

// 深度扁平化
const flattenDepth = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce(
        (a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v),
        []
      )
    : arr.reduce((a, v) => a.concat(v), []);
// flattenDepth([1,[2],[[[3],4],5]], 2) -> [1,2,[3],4,5]
```

# 函数

## Definition: 函数定义

## Call: 函数调用

可以使用 apply 来连接两个数组：

```js
let countries = ["Moldova", "Ukraine"];
let otherCountries = ["USA", "Japan"];
countries.push.apply(countries, otherCountries);
console.log(countries); // => ['Moldova', 'Ukraine', 'USA', 'Japan']
```

较为全面的 JavaScript 中函数调用方式列举如下：

```js
console.log(1);
(_ => console.log(2))();
eval('console.log(3);');
console.log.call(null, 4);
console.log.apply(null, [5]);
new Function('console.log(6)')();
Reflect.apply(console.log, null, [7])
Reflect.construct(function(){console.log(8)}, []);
Function.prototype.apply.call(console.log, null, [9]);
Function.prototype.call.call(console.log, null, 10);
new (require('vm').Script)('console.log(11)‘).runInThisContext();
```

# 其他

## 异常处理

```js
try {
  let hello = prompt("Type hello");
  if (hello !== "hello") {
    throw new Error("Oops, you didn't type hello");
  }
} catch (e) {
  alert(e.message);
} finally {
  alert("thanks for playing!");
}
```

# JavaScript 语法速览与实践技巧

合入 [JavaScript hacks for ES6 hipsters](https://parg.co/Uuy)

# 表达式与控制流

# 数据结构

## Array

```js
const uniqueArray = arr => [...new Set(arr)];

uniqueArray([1, 2, 2, 3, 4, 4, 5]);
// [1,2,3,4,5]
```

# 函数与类

## 函数定义

### 参数

ES6 中引入了所谓的默认参数 :

```js
// 传统的默认参数编写方式
function filterEvil(array, evil) {
  evil = evil || "darth vader";
  return array.filter(item => item !== evil);
}

// ES6 默认参数
function filterEvil(array, evil = "darth vader") {
  return array.filter(item => item !== evil);
}

// 默认参数可以用来进行必要参数检测
const isRequired = () => {
  throw new Error("param is required");
};

function filterEvil(array, evil = isRequired()) {
  return array.filter(item => item !== evil);
}
```
