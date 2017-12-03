# JavaScript 语法速览与实战清单

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

## 正则表达式

对于常量正则表达式，可以使用正则字符串方式；而对于动态的正则表达式，可以使用正则表达式构造函数 :

```js
// Regular Expression Literal
const regexLiteral = /cat/;

// Regular Expression Constructor
const regexConstructor = new RegExp("cat");
```

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

### Comprehensions: 变换

`reduce()` 函数能够将

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
