[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

# ECMAScript 各版本特性概述

> [ECMAScript 2017（ES8 ）特性概述](https://zhuanlan.zhihu.com/p/27844393) 整理自 [ES8 was Released and here are its Main New Features](https://parg.co/b10)，归纳于笔者的[现代 JavaScript 开发：语法基础与实践技巧](https://parg.co/b1c)系列文章中；也欢迎关注[前端每周清单系列](https://parg.co/bh1)获得一手资讯。

# ECMAScript 2017 （ ES8）Features

ECMAScript 2017 或 ES8 与 2017 年六月底由 TC39 正式发布，可以在[这里](https://www.ecma-international.org/ecma-262/8.0/index.html)浏览完整的版本；而 ES8 中代表性的特征包括了字符串填充、对象值遍历、对象的属性描述符获取、 函数参数列表与调用中的尾部逗号、异步函数、共享内存与原子操作等。

### 字符串填充

ES8 中添加了内置的字符串填充函数，分别为 padStart 与 padEnd，该函数能够通过填充字符串的首部或者尾部来保证字符串达到固定的长度；开发者可以指定填充的字符串或者使用默认的空格，函数的声明如下：

```js
str.padStart(targetLength [, padString])
str.padEnd(targetLength [, padString])
```

如上所示，函数的首个参数为目标长度，即最终生成的字符串长度；第二个参数即是指定的填充字符串：

```js
"es8".padStart(2); // 'es8'
"es8".padStart(5); // '  es8'
"es8".padStart(6, "woof"); // 'wooes8'
"es8".padStart(14, "wow"); // 'wowwowwowwoes8'
"es8".padStart(7, "0"); // '0000es8'
"es8".padEnd(2); // 'es8'
"es8".padEnd(5); // 'es8  '
"es8".padEnd(6, "woof"); // 'es8woo'
"es8".padEnd(14, "wow"); // 'es8wowwowwowwo'
"es8".padEnd(7, "6"); // 'es86666'
```

### 对象值遍历

`Object.values` 函数会返回指定对象的可枚举的属性值数组，数组中值顺序与 `for-in` 循环保持一致，函数的声明为：

```js
Object.values(obj);
```

首个参数 `obj` 即为需要遍历的目标对象，它可以为某个对象或者数组（数组可以看做键为下标的对象）：

```
const obj = { x: 'xxx', y: 1 };
Object.values(obj); // ['xxx', 1]


const obj = ['e', 's', '8']; // same as { 0: 'e', 1: 's', 2: '8' };
Object.values(obj); // ['e', 's', '8']


// when we use numeric keys, the values returned in a numerical
// order according to the keys
const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.values(obj); // ['yyy', 'zzz', 'xxx']
Object.values('es8'); // ['e', 's', '8']
```

而 `Object.entries` 方法则会将某个对象的可枚举属性与值按照二维数组的方式返回，数组中顺序与 `Object.values` 保持一致，该函数的声明与使用为：

```
const obj = { x: 'xxx', y: 1 };
Object.entries(obj); // [['x', 'xxx'], ['y', 1]]


const obj = ['e', 's', '8'];
Object.entries(obj); // [['0', 'e'], ['1', 's'], ['2', '8']]


const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.entries(obj); // [['1', 'yyy'], ['3', 'zzz'], ['10': 'xxx']]
Object.entries('es8'); // [['0', 'e'], ['1', 's'], ['2', '8']]
```

### 对象的属性描述符获取 `getOwnPropertyDescriptors` 函数会返回指定对象的某个指定属性的描述符；该属性必须是对象自己定义而不是继承自原型链，函数的声明为：

```
Object.getOwnPropertyDescriptor(obj, prop)
```

`obj` 即为源对象，而 `prop` 即为需要查看的属性名；结果中包含的键可能有 configurable、enumerable 、 writable、get 、 set 以及 value。

```
const obj = { get es8() { return 888; } };
Object.getOwnPropertyDescriptor(obj, 'es8');
// {
//   configurable: true,
//   enumerable: true,
//   get: function es8(){}, //the getter function
//   set: undefined
// }
```

### 函数参数列表与调用中的尾部逗号

该特性允许我们在定义或者调用函数时添加尾部逗号而不报错：

```
function es8(var1, var2, var3,) {
  // ...

}
es8(10, 20, 30,);
```

### 异步函数

ES8 中允许使用 async/await 语法来定义与执行异步函数，async 关键字会返回某个 AsyncFunction 对象；在内部实现中虽然异步函数与迭代器的实现原理类似，但是其并不会被转化为迭代器函数：

```
function fetchTextByPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("es8");
    }, 2000);
  });
}
async function sayHello() {
  const externalFetchedText = await fetchTextByPromise();
  console.log(`Hello, ${externalFetchedText}`); // Hello, es8
}
sayHello();


console.log(1);
sayHello();
console.log(2);


// 调用结果
1 // immediately
2 // immediately
Hello, es8 // after 2 seconds
```

### 共享内存与原子操作

共享内存允许多个线程并发读写数据，而原子操作则能够进行并发控制，确保多个存在竞争关系的线程顺序执行。本部分则介绍了新的构造器 `SharedArrayBuffer` 与包含静态方法的命名空间对象 `Atomics`。`Atomic` 对象类似于 `Math`，我们无法直接创建其实例，而只能使用其提供的静态方法：

* add /sub - 增加或者减去某个位置的某个值
* and / or /xor - 进行位操作
* load - 获取值
