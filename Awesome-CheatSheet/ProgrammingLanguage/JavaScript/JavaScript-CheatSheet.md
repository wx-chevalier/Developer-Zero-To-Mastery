[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

[🔆 中文版本](./JavaScript-CheatSheet.md) | [☀️ English Version](./JavaScript-CheatSheet.en.md)

# 现代 JavaScript 语法速览与实战清单

本文是对于现代 JavaScript 的语法速览与实战清单，从属于 [Awesome CheatSheet](https://parg.co/UCH) ，它是对某项技术/领域的语法速览与实践备忘清单集锦，包含了 JavaScript，Java，Go，Python，Rust 等常见的编程语言，Web，数据库，信息安全等 [ITCS 知识图谱与技术路线](https://parg.co/bwI)中归档的知识技能点，其致力于提升学习速度与研发效能，即可以将其当做速查手册，也可以作为轻量级的入门学习资料。

本清单参考了 [30 seconds of code](https://github.com/Chalarangelo/30-seconds-of-code)，[JavaScript hacks for ES6 hipsters](https://parg.co/Uuy), [The Definitive JavaScript Handbook](https://parg.co/UZS), [Modern JavaScript Cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet) 等。更多 JavaScript 相关学习资料参考 [Awesome JavaScript Reference](https://parg.co/UHR) 与[现代 JavaScript 开发：语法基础与工程实践](https://parg.co/bxN)。

# 基础语法

# 表达式与控制流

# 基本数据类型

JavaScript 内置了 7 种基础数据类型：null, undefined,

```js
typeof 0; // number
typeof true; // boolean
typeof "Hello"; // string
typeof Math; // object
typeof null; // object  !!
typeof Symbol("Hi"); // symbol (New ES6)
```

## 类型判断与变量比较

### 隐式转换

```
// 0[object Object]1
{} + [] + {} + [1]

// NaN[object Object]
{} + [1,2] + {} + []
```

```js
// false，等式两侧存在 NaN，则为 false
NaN == NaN

// true, 先进行 Bool 操作转化为 false，然后两侧都变为数字 0
[] == ![]
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

```js
const uniqueArray = arr => [...new Set(arr)];

uniqueArray([1, 2, 2, 3, 4, 4, 5]);
// [1,2,3,4,5]
```

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

# 类与对象

# 其他

## ES6 Module: 模块

ES2015 Modules 中主要的关键字就是 `import` 与 `export`，前者负责导入模块而后者负责导出模块。完整的导出语法如下所示：

```js
// default exports
export default 42;
export default {};
export default [];
export default foo;
export default function () {}
export default class {}
export default function foo () {}
export default class foo {}

// variables exports
export var foo = 1;
export var foo = function () {};
export var bar; // lazy initialization
export let foo = 2;
export let bar; // lazy initialization
export const foo = 3;
export function foo () {}
export class foo {}

// named exports
export {foo};
export {foo, bar};
export {foo as bar};
export {foo as default};
export {foo as default, bar};

// exports from
export * from "foo";
export {foo} from "foo";
export {foo, bar} from "foo";
export {foo as bar} from "foo";
export {foo as default} from "foo";
export {foo as default, bar} from "foo";
export {default} from "foo";
export {default as foo} from "foo";
```

相对应的完整的支持的导入方式如下所示：

```js
// default imports
import foo from "foo";
import {default as foo} from "foo";

// named imports
import {bar} from "foo";
import {bar, baz} from "foo";
import {bar as baz} from "foo";
import {bar as baz, xyz} from "foo";

// glob imports
import * as foo from "foo";

// mixing imports
import foo, {baz as xyz} from "foo";
import * as bar, {baz as xyz} from "foo";
import foo, * as bar, {baz as xyz} from "foo";
```

## Error Handling: 异常处理

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
