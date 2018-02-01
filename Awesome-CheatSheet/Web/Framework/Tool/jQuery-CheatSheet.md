# jQuery CheatSheet

# 元素选择

```js
$('div span:last-child')
  .css({ color: 'red', fontSize: '80%' })
  .hover(
    function() {
      $(this).addClass('solast');
    },
    function() {
      $(this).removeClass('solast');
    }
  );
```

```js
$('li').each(function(index) {
  // this 指向的还是 DOM 对象
  console.log(index + ': ' + $(this).text());
});
```

# 元素操作

## 样式类

```js
// 删除全部样式类
$('p:odd').removeClass();

// 删除指定样式类
$('p:odd').removeClass('blue under');
```
