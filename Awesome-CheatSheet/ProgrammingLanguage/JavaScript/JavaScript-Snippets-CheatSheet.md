[![返回目录](https://parg.co/UCb)](https://github.com/wxyyxc1992/Awesome-CheatSheet)

# JavaScript 代码片

# 类型转换

```
// 0[object Object]1
{} + [] + {} + [1]

// NaN[object Object]
{} + [1,2] + {} + []
```

```js
// false，等式两侧存在 NaN，则为 false
NaN == NaN

// 先进行 Bool 操作转化为 false，然后两侧都变为数字 0
[] == ![]
```
