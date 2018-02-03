[![返回目录](https://parg.co/UCb)](https://github.com/wxyyxc1992/Awesome-CheatSheet)

# Functional Programming Jargon: 函数式编程术语解释

> 本文的主要目的即是希望能够有一种通俗易懂的方式来阐述函数式编程中常见的理论术语概念

## Arity: 参数数目

> Arity 代指一个函数的参数数量，该关键字来源于类似于 unary、binary 、 ternary 等等，由两个后缀`-ary`、`-ity`组成。譬如，如果一个函数允许输入两个参数，那就称为所谓的 binary function( 二元函数 )，或者一个有两个参数的函数。有时候这种函数也会被喜欢拉丁语法的人称为 "dyadic( 二价的 )" 函数。以此类推，不定参数的方程也就被称为`variadic( 可变参数函数 )`。

```js
const sum = (a, b) => a + b;

const arity = sum.length;
console.log(arity);
// => 2
// The arity of sum is 2
```

## Higher-Order Functions (HOF): 高等函数

> 一个接收某个函数作为参数的函数成为高等函数，该函数可以选择返回一个函数也可以返回其他类型

```js
const filter = (pred, xs) => {
  const result = [];
  for (var idx = 0; idx < xs.length; idx += 1) {
    if (pred(xs[idx])) {
      result.push(xs[idx]);
    }
  }
  return result;
};
```

```js
const is = type => x => Object(x) instanceof type;
```

```js
filter(is(Number), [0, "1", 2, null]); //=> [0, 2]
```

## Partial Application: 局部封装

> 将原本一个多参数值的函数封装为固定参数数目的函数的过程称为 Partial Application

```js
let sum = (a, b) => a + b;

// partially applying `a` to `40`
let partial = sum.bind(null, 40);

// Invoking it with `b`
partial(2); //=> 42
```

---

## Currying

> 将一个 N 参数值的函数转化为 N 个一元函数的组合，Currying 与 Partial Application 的区别在于 Partial Application 最终生成的函数允许接收多个值，而 Currying 生成的函数序列中的每个函数只允许接收一个参数

```js
let sum = (a, b) => a + b;

let curriedSum = a => b => a + b;

curriedSum(40)(2); // 42.
```

---

## Composition: 组合

> 感觉有点像设计模式里的 Decorator，即能够将两个指定类型组合转化为一个新值的函数

最常见的组合即是常见的函数组合，允许你将不同的函数组合成一个返回单值的函数

```js
const compose = (f, g) => a => f(g(a)); // Definition
const floorAndToString = compose(val => val.toString(), Math.floor); //Usage
floorAndToString(121.212121); // "121"
```

---

## Purity: 纯函数

> 一个没有任何副作用，并且返回值只由输入决定的函数成为纯函数

```js
let greet = "yo";

greet.toUpperCase(); // YO;

greet; // yo;
```

As opposed to:

```js
let numbers = [1, 2, 3];

numbers.splice(0); // [1, 2, 3]

numbers; // []
```

---

## Side effects: 副作用

> 如果一个函数，除了返回值之外，还会修改某些其它状态，或者与外部函数等有可观测的交互

```js
console.log("IO is a side effect!");
```

---

## Idempotency: 幂等性

> 多次执行下都不会产生副作用的函数被称为具有幂等性的函数

`f(f(x)) = f(x)`

`Math.abs(Math.abs(10))`

---

## Point-Free Style

> 那些并没有线性定义参数的函数风格被称为 Point-Free Style，这类型往往需要[currying](#currying) 或者 [Higher-Order functions](#higher-order-functions-hof)。

```js
// Given
let map = fn => list => list.map(fn);
let add = (a, b) => a + b;

// Then

// Not points-free - `numbers` is an explicit parameter
let incrementAll = numbers => map(add(1))(numbers);

// Points-free - The list is an implicit parameter
let incrementAll2 = map(add(1));
```

`incrementAll`明确规定了参数`numbers`, 而`incrementAll2`是对于参数的封装，并没有显性说明`numbers`参数，因此它可以被称为 Points Free。一般来说，Points-free 的函数都不会用常见的`function`或者`=>`关键字来定义。

---

## Contracts

## 暂无

## Guarded Functions

## 暂无

## Categories: 分类

> 关联到遵循某些规则的函数的对象，譬如[monoid](#monoid)

---

## Value: 值

> 计算中常用到的一些复合值 (complex) 或者简单值 (primitive)，包括函数。一般来说，函数式编程中的值都被认为是不可变值。

```js
5
Object.freeze({name: 'John', age: 30}) // The `freeze` function enforces immutability.
(a) => a
```

注意，譬如[Functor](#functor), [Monad](#monad)这样包含其他值的结构体本身也是值，这就是说，这些复合值也可以相互包含。

---

## Constant: 常量

> 对于一个值的不可变引用，不能跟变量相混淆。Variable 即指那些可能在任意点呗更改的引用。

```js
const five = 5;
const john = { name: "John", age: 30 };
```

常量一般认为是透明的，也就是说，它们可以被值本身代替而不影响最终的计算结果，上面的两个常量也可以用下述方式表述：

```js
john.age + five === { name: "John", age: 30 }.age + 5;
```

上述表达式会一直返回真。

---

## Functor

> Functor 即指那些可以引用`map`函数的对象，JavaScript 中最简单的函数就是`Array`。

```js
[2, 3, 4].map(n => n * 2); // [4,6,8]
```

假设`func`构造为一个实现了`map`函数的对象，`f`、`g`则是任意的函数，只要`func`遵循以下规则就可以将`func`称为一个 functor: Let `func` be an object implementing a `map` function, and `f`, `g` be arbitrary functions, then `func` is said to be a functor if the map function adheres to the following rules:

```js
func.map(x => x) == func;
```

以及

```js
func.map(x => f(g(x))) == func.map(g).map(f);
```

我们将`Array`称为 Functor，也是因为它遵循了以下规则：

```js
[1, 2, 3].map(x => x); // = [1, 2, 3]
```

以及

```js
let f = x => x + 1;
let g = x => x * 2;

[1, 2, 3].map(x => f(g(x))); // = [3, 5, 7]
[1, 2, 3].map(g).map(f); // = [3, 5, 7]
```

---

## Pointed Functor

> 实现了`of`方法的 Functor，`Of`会将任何单值转化为一个 Functor

Pointed Functor 在 Array 中的实现为：

```js
Array.prototype.of = v => [v];

[].of(1); // [1]
```

---

## Lift

> Lift 很类似于`map`，不过它可以用于多个 Functors：

在单值函数下，Map 与 Lift 的作用是一致的：

```js
lift(n => n * 2)([2, 3, 4]); // [4,6,8]
```

而 Lift 可以允许输入多个值：

```
lift((a, b)  => a * b)([1, 2], [3]); // [3, 6]
```

---

## Referential Transparency: 透明引用

> 一个可以直接用其值来替换而不会影响到程序表现的表达式称为透明引用

譬如我们有一个叫`greet`的引用

```js
let greet = () => "Hello World!";
```

## 任何对于`greet()`的调用都可以被`Hello World!`直接替换，因此可以将`greet`称为透明引用。

## Equational Reasoning

> 当一个应用由表达式组合而成并且没有任何副作用的时候，该系统可以由部分推导而来

---

## Lazy evaluation: 懒计算

> Lazy evaluation 即是所谓的只有在需要某个值的时候才进行计算的机制。在函数式语言中，这个机制就允许对于那些近乎无限的列表进行操作。

```js
let rand = function*() {
  while (1 < 2) {
    yield Math.random();
  }
};
```

```js
let randIter = rand();
randIter.next(); // Each exectuion gives a random value, expression is evaluated on need.
```

---

## Monoid: 独异点

> 一个 monoid 就是与某个恒等值进行组合之后不会影响现有结果的数据类型

一个最简单的 Monoid 就是如下所示：

```js
1 + 1; // 2
```

数据类型是 number，函数是`+`：

```js
1 + 0; // 1
```

恒等式的值是`0`, 将`0`与任何数相加并不会改变值。有时候，monoid 类型进行不同的交换操作也不会影响结果：

```js
1 + (2 + 3) == 1 + 2 + 3; // true
```

数组连接也可以认为是一个 monoid:

```js
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

恒等值即是空数组： `[]`

```js
[1, 2].concat([]); // [1, 2]
```

---

## Monad

> 一个 Monad 就是拥有[`of`](#pointed-functor)以及`chain`函数的对象。 `Chain` 类似于 [map](#functor)只不过它会扁平化最终求得的嵌套式结果。

```js
["cat,dog", "fish,bird"]
  .chain(a => a.split(",")) // ['cat','dog','fish','bird']

  [
    //Contrast to map
    ("cat,dog", "fish,bird")
  ].map(a => a.split(",")); // [['cat','dog'], ['fish','bird']]
```

You may also see `of` and `chain` referred to as `return` and `bind` (not be confused with the JS keyword/function...) in languages which provide Monad-like constructs as part of their standard library (e.g. Haskell, F#), on [Wikipedia](https://en.wikipedia.org/wiki/Monad_%28functional_programming%29) and in other literature. It's also important to note that `return` and `bind` are not part of the [Fantasy Land spec](https://github.com/fantasyland/fantasy-land) and are mentioned here only for the sake of people interested in learning more about Monads.

---

## Comonad: 余单子

> 实现了`extract`与`extend`函数的对象

```js
let CoIdentity = v => ({
  val: v,
  extract: this.v,
  extend: f => CoIdentity(f(this))
});
```

Extract 可以将值从 Functor 中吐出来：

```js
CoIdentity(1).extract(); // 1
```

Extend 则是会返回一个跟 Commonad 相同值的函数：

```js
CoIdentity(1).extend(co => co.extract() + 1); // CoIdentity(2)
```

---

## Applicative( 可适用的 ) Functor

> 一个 Applicative Functor 就是一个实现了`ap`函数的对象，`Ap`可以将某个对象中的某个值转化为另一个对象中的相同类型的值

```js
[a => a + 1].ap([1]); // [2]
```

---

## Morphism: 态射

> 一个转化函数

---

## Isomorphism: 同态转换

> 用不同方式存储的能够表明相同数据的转换

譬如，一个二维的数组可以存储为数组：`[2,3]`或者对象：`{x: 2, y: 3}`。

```js
// Providing functions to convert in both directions makes them isomorphic.
const pairToCoords = pair => ({ x: pair[0], y: pair[1] });

const coordsToPair = coords => [coords.x, coords.y];

coordsToPair(pairToCoords([1, 2])); // [1, 2]

pairToCoords(coordsToPair({ x: 1, y: 2 })); // {x: 1, y: 2}
```

---

## Setoid

> 实现了`equals`函数的对象，即可以与其他对象进行对比判断是否属于同一类型，被称为 Setoid。

下面对于原型的扩充可以将 Array 变成 Setoid。

```js
Array.prototype.equals = arr => {
  var len = this.length;
  if (len != arr.length) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (this[i] !== arr[i]) {
      return false;
    }
  }
  return true;
};

[1, 2]
  .equals([1, 2]) // true
  [(1, 2)].equals([0]); // false
```

---

## Semigroup: 半群

一个拥有`concat`，即将另一个对象转化为相同类型的函数，函数的对象称为 Semigroup。

```js
[1].concat([2]); // [1, 2]
```

---

## Foldable: 可折叠

> 实现了 reduce 函数，即可以将一个对象转化为其他类型的函数，的对象称为 Foldable 对象。

```js
let sum = list => list.reduce((acc, val) => acc + val, 0);
sum([1, 2, 3]); // 6
```

---

## Traversable

## 暂无

## Type Signatures: 类型签名

> 一般来说，函数都会注释表明它们的参数类型和返回值类型

```js
// functionName :: firstArgType -> secondArgType -> returnType

// add :: Number -> Number -> Number
let add = x => y => x + y;

// increment :: Number -> Number
let increment = x => x + 1;
```

如果一个函数接收其他函数作为参数，譬如这样：

```js
// call :: (a -> b) -> a -> b
let call = f => x => f(x);
```

这里的`a`, `b`, `c`, `d`表明参数可以是任意类型，不过它会将类型`a`转化为另一个类型`b`，而对于下面这个 map，它的注释表明了它会输入一个 a 类型的列表，然后转化为另一个包含了 b 类型的列表。

```js
// map :: (a -> b) -> [a] -> [b]
let map = f => list => list.map(f);
```
