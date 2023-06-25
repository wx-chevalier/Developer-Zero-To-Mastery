> [原文地址](https://github.com/mzlogin/markdown-intro)

# [![Markdown Intro](https://github.com/mzlogin/markdown-intro/raw/master/assets/title.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/title.png)

自从 2014 年左右接触到 Markdown 以来，对它的使用就一发而不可收拾。从最开始使用它在 GitHub Pages 里写博客，到用它编辑项目的 README 文件，再到撰写开发文档，编辑微信公众号文章和邮件内容等等，这期间也见证了它在各类平台和网站上的普及和被原生支持，可以说，Markdown 如今已经渗透了我在技术和网络活动的方方面面，成为了我撰写文本文档的首选。

那么首先我们一起来看一下它的「定义」：

> Markdown 是一种轻量级标记语言，创始人为 John Gruber。它允许人们「使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者 HTML）文档」。——维基百科

本文档的目的不在于面面俱到地介绍 Markdown，只是作为我对其理解的笔记整理，希望能同时帮助一些对 Markdown 感兴趣的人快速上手，或是作为一个工具，供对其已经有所了解的人在需要时参考。

接下来请随我一起深入了解这门并不神秘的实用标记语言。

# [![Table of Contents](https://github.com/mzlogin/markdown-intro/raw/master/assets/toc.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/toc.png)

- 背景
  - [优点](https://github.com/mzlogin/markdown-intro/blob/master/README.md#优点)
  - [使用场景](https://github.com/mzlogin/markdown-intro/blob/master/README.md#使用场景)
  - [编辑工具](https://github.com/mzlogin/markdown-intro/blob/master/README.md#编辑工具)
- 语法
  - [标题](https://github.com/mzlogin/markdown-intro/blob/master/README.md#标题)
  - [段落](https://github.com/mzlogin/markdown-intro/blob/master/README.md#段落)
  - [行内格式](https://github.com/mzlogin/markdown-intro/blob/master/README.md#行内格式)
  - [引用块](https://github.com/mzlogin/markdown-intro/blob/master/README.md#引用块)
  - [超链接](https://github.com/mzlogin/markdown-intro/blob/master/README.md#超链接)
  - [图片](https://github.com/mzlogin/markdown-intro/blob/master/README.md#图片)
  - [列表](https://github.com/mzlogin/markdown-intro/blob/master/README.md#列表)
  - [代码块](https://github.com/mzlogin/markdown-intro/blob/master/README.md#代码块)
  - [水平分割线](https://github.com/mzlogin/markdown-intro/blob/master/README.md#水平分割线)
  - [嵌入 HTML](https://github.com/mzlogin/markdown-intro/blob/master/README.md#嵌入-html)
- 扩展语法
  - [表格](https://github.com/mzlogin/markdown-intro/blob/master/README.md#表格)
  - [任务列表](https://github.com/mzlogin/markdown-intro/blob/master/README.md#任务列表)
  - [删除线](https://github.com/mzlogin/markdown-intro/blob/master/README.md#删除线)
  - [自动链接](https://github.com/mzlogin/markdown-intro/blob/master/README.md#自动链接)
  - [emoji](https://github.com/mzlogin/markdown-intro/blob/master/README.md#emoji)
- 奇技淫巧
  - [画流程图和时序图](https://github.com/mzlogin/markdown-intro/blob/master/README.md#画流程图和时序图)
  - [插入数学公式](https://github.com/mzlogin/markdown-intro/blob/master/README.md#插入数学公式)
  - [用 Markdown 做 PPT](https://github.com/mzlogin/markdown-intro/blob/master/README.md#用-markdown-做-ppt)
  - [用 Markdown 写微信公众号](https://github.com/mzlogin/markdown-intro/blob/master/README.md#用-markdown-写微信公众号)
  - [更多](https://github.com/mzlogin/markdown-intro/blob/master/README.md#更多)
- [参考](https://github.com/mzlogin/markdown-intro/blob/master/README.md#参考)

## 背景

### 优点

1. 专注于文字内容；
2. 纯文本，易读易写，可以方便地纳入版本控制；
3. 语法简单，没有什么学习成本，能轻松在码字的同时做出美观大方的排版。

### 使用场景

- 各类代码托管平台

  主流的代码托管平台，如 GitHub、GitLab、BitBucket、Coding、Gitee 等等，都支持 Markdown 语法，很多开源项目的 README、开发文档、帮助文档、Wiki 等都用 Markdown 写作。

- 技术社区和写作平台

  StackOverflow、CSDN、掘金、简书、GitBook、有道云笔记

- 论坛

  V2EX、光谷社区

个人感觉比较遗憾的一点是各平台可能采用不同语言实现的 Markdown 解析引擎，或采用同一解析引擎的不同版本，而且可能有不同程度的定制与扩展，这导致在不同平台上使用 Markdown 写作时体验并不完全一致。不过幸好对于大家公认的一些标准语法，各家都是支持的。

### 编辑工具

理论上任何一款文本编辑器都能用于编辑 Markdown 文档，它们分别提供了不同程度的语法高亮、预览等功能，以下只是列举其中一部分，选择自己称手的即可。

- 现代编辑器

  VSCode / Atom

- 传统编辑器

  Vim / Emacs / Sublime Text / Notepad++

- IDE 自带编辑器

  IntelliJ IDEA / Android Studio / WebStorm

- 专用编辑器

  Ulysses / Mou / Typora / Markpad

- 在线编辑器

  各种支持 Markdown 的网站都提供了在线编辑器

## 语法

### 标题

**Markdown：**

```
# atx-style 一级标题

## 二级标题

###### 六级标题

Setext-style 一级标题
===

二级标题
---
```

**预览效果：**

> # atx-style 一级标题
>
> ## 二级标题
>
> ###### 六级标题
>
> # Setext-style 一级标题
>
> ## 二级标题

**对应 HTML：**

```
<h1>atx-style 一级标题</h1>

<h2>二级标题</h2>

<h6>六级标题</h6>

<h1>Setext-style 一级标题</h1>

<h2>二级标题</h2>
```

### 段落

中间没有空行的连续不断的几行文字被视为一个段落。

**Markdown：**

```
白日依山尽，

黄河入海流。
（句号后面没空格）

欲穷千里目，

更上一层楼。
（句号后面有俩空格）
```

**预览效果：**

白日依山尽，

黄河入海流。（句号后面没空格）

欲穷千里目，

更上一层楼。
（句号后面有俩空格）

**对应 HTML：**

```
<p>白日依山尽，</p>

<p>黄河入海流。
（句号后面没有空格）</p>

<p>欲穷千里目，</p>

<p>
  更上一层楼。
  <br>
  （句号后面有俩空格）
</p>
```

### 行内格式

对段落或者部分文本的强调效果。

**Markdown：**

```
后面俩字**加黑**

后面俩字*斜体*
```

**预览效果：**

后面俩字**加黑**

后面俩字*斜体*

**对应 HTML：**

```
<p>
  后面俩字
  <strong>加黑</strong>
</p>
<p>
  后面俩字
  <em>斜体</em>
</p>
```

### 引用块

**Markdown：**

```
> 引用块段落一。
>
> 引用块段落二。
>> 内嵌引用块段落一。
>
> ### 引用块内的标题
```

**预览效果：**

> 引用块段落一。
>
> 引用块段落二。
>
> > 内嵌引用块段落一。
>
> ### 引用块内的标题

**对应 HTML：**

```
<blockquote>
  <p>引用块段落一。</p>
  <p>引用块段落二。</p>
  <blockquote>
    <p>内嵌引用块段落一。</p>
  </blockquote>
  <h3 id="引用块内的标题">引用块内的标题</h3>
</blockquote>
```

### 超链接

Markdown 支持行内式链接和引用式链接。

**Markdown：**

```
行内式 [博客](https://mazhuang.org "我的个人博客") 链接，带 title。

行内式 [GitHub](https://github.com/mzlogin) 链接。

引用式 [博客][1] 链接。

引用式 [GitHub][2] 链接，带 title。

[1]: https://mazhuang.org
[2]: https://github.com/mzlogin "我的 GitHub 主页"
```

**预览效果：**

行内式 [博客](https://mazhuang.org/) 链接，带 title。

行内式 [GitHub](https://github.com/mzlogin) 链接。

引用式 [博客](https://mazhuang.org/) 链接。

引用式 [GitHub](https://github.com/mzlogin) 链接，带 title。

**对应 HTML：**

```
<p>行内式 <a href="https://mazhuang.org" title="我的个人博客">博客</a> 链接，带 title。</p>

<p>行内式 <a href="https://github.com/mzlogin">GitHub</a> 链接。</p>

<p>引用式 <a href="https://mazhuang.org">博客</a> 链接。</p>

<p>引用式 <a href="https://github.com/mzlogin" title="我的 GitHub 主页">GitHub</a> 链接，带 title。</p>
```

### 图片

在超链接的写法前加一个 `!`，就是引用图片的方法。

**Markdown：**

```
![Alt text](https://mazhuang.org/favicon.ico "favicon")
```

**预览效果：**

[![Alt text](https://camo.githubusercontent.com/37cba8628de325a1616c059441f41745a42aa68804a04c7fe755c7e0db7537fc/68747470733a2f2f6d617a6875616e672e6f72672f66617669636f6e2e69636f)](https://camo.githubusercontent.com/37cba8628de325a1616c059441f41745a42aa68804a04c7fe755c7e0db7537fc/68747470733a2f2f6d617a6875616e672e6f72672f66617669636f6e2e69636f)

**对应 HTML：**

```
<img src="https://mazhuang.org/favicon.ico" alt="Alt text" title="favicon">
```

### 列表

包括有序列表和无序列表。

**Markdown：**

```
- 苹果
- 葡萄
- 榴莲

1. 苹果
2. 葡萄
3. 榴莲
```

**预览效果：**

- 苹果
- 葡萄
- 榴莲

1. 苹果
2. 葡萄
3. 榴莲

**对应 HTML：**

```
<ul>
  <li>苹果</li>
  <li>葡萄</li>
  <li>榴莲</li>
</ul>
<ol>
  <li>苹果</li>
  <li>葡萄</li>
  <li>榴莲</li>
</ol>
```

其中无序列表的标记可以使用 `+`、`-` 或 `*`，有序列表前的数字可以是乱序的。

### 代码块

支持行内代码和代码块。

**Markdown：**

````
Android 里使用 `TextUtils` 类的 `isEmpty` 方法来判断字符串是否为空。

```java
if (TextUtils.isEmpty(text)) {
    return null;
}
```
````

**预览效果：**

Android 里使用 `TextUtils` 类的 `isEmpty` 方法来判断字符串是否为空。

```
if (TextUtils.isEmpty(text)) {
    return null;
}
```

**对应 HTML：**

```
<p>Android 里使用 <code>TextUtils</code> 类的 <code>isEmpty</code> 方法来判断字符串是否为空。</p>

<div class="highlight highlight-source-java"><pre><span class="pl-k">if</span> (<span class="pl-smi">TextUtils</span><span class="pl-k">.</span>isEmpty(text)) {
    <span class="pl-k">return</span> <span class="pl-c1">null</span>;
}</pre></div>
```

上例中的语言标记 `java` 可选填，可用于在编辑器和渲染后的效果里添加语法高亮。

块式代码也可以对整个代码段缩进四个空格，或一个 Tab 来实现。

### 水平分割线

使用一个单独行里的三个或以上 `*`、`-` 来生产一条水平分割线，它们之间可以有空格。

**Markdown：**

```
***

-----

- - -
```

**预览效果：**

---

---

---

**对应 HTML：**

```
<hr />

<hr />

<hr />
```

### 嵌入 HTML

Markdown 标记语言的目的不是替代 HTML，也不是发明一种更便捷的插入 HTML 标签的方式。它对应的只是 HTML 标签的一个很小的子集。

对于那些没有办法用 Markdown 语法来对应的 HTML 标签，直接使用 HTML 来写就好了。

## 扩展语法

本节的内容是介绍一些受到广泛支持的 Markdown 扩展语法。

### 表格

**Markdown：**

```
| 编号  | 姓名（左） | 年龄（右） | 性别（中） |
| ----- | :--------  | ---------: | :------:   |
| 0     | 张三       | 28         | 男         |
| 1     | 李四       | 29         | 男         |
```

**预览效果：**

| 编号 | 姓名（左） | 年龄（右） | 性别（中） |
| ---- | ---------- | ---------- | ---------- |
| 0    | 张三       | 28         | 男         |
| 1    | 李四       | 29         | 男         |

**对应 HTML：**

```
<table>
  <thead>
    <tr>
      <th>编号</th>
      <th align="left">姓名（左）</th>
      <th align="right">年龄（右）</th>
      <th align="center">性别（中）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td align="left">张三</td>
      <td align="right">28</td>
      <td align="center">男</td>
    </tr>
    <tr>
      <td>1</td>
      <td align="left">李四</td>
      <td align="right">29</td>
      <td align="center">男</td>
    </tr>
  </tbody>
</table>
```

### 任务列表

在 GitHub / GitLab 里有较好的支持。

**Markdown：**

```
- [x] 洗碗
- [ ] 清洗油烟机
- [ ] 拖地
```

**预览效果：**

- 洗碗
- 清洗油烟机
- 拖地

**对应 HTML：**

```
<ul class="contains-task-list">
  <li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox" checked=""> 洗碗</li>
  <li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 清洗油烟机</li>
  <li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 拖地</li>
</ul>
```

如果是在 GitHub / GitLab 的 Issue 里，会附赠任务完成比例提示效果：

[![task list 1](https://github.com/mzlogin/markdown-intro/raw/master/assets/task-list-1.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/task-list-1.png)

还可以直接在网页上拖动调整顺序，勾选和取消勾选。

[![task list 2](https://github.com/mzlogin/markdown-intro/raw/master/assets/task-list-2.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/task-list-2.png)

### 删除线

**Markdown：**

```
后面三个字打上~~删除线~~。
```

**预览效果：**

后面三个字打上~~删除线~~。

**对应 HTML：**

```
<p>后面三个字打上<del>删除线</del>。</p>
```

### 自动链接

自动链接扩展，即：当识别到 URL，或用 `<`、`>` 包括的 URL 时，会自动为其生成 `a` 标签。

**Markdown：**

```
https://github.com

<example@gmail.com>
```

**预览效果：**

[https://github.com](https://github.com/)

[example@gmail.com](mailto:example@gmail.com)

**对应 HTML：**

```
<p><a href="https://github.com">https://github.com</a></p>

<p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
```

### emoji

以 GitHub Pages 为例。

**Markdown：**

```
:camel: :blush: :smile:
```

**预览效果：**

🐫 😊 😄

**对应 HTML：**

```
<p>
  <img class="emoji" title=":camel:" alt=":camel:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f42b.png" height="20" width="20">
  <img class="emoji" title=":blush:" alt=":blush:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f60a.png" height="20" width="20">
  <img class="emoji" title=":smile:" alt=":smile:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png" height="20" width="20">
</p>
```

## 奇技淫巧

脑洞清奇的工程师们还发掘了很多使用 Markdown 的方法，大部分都是引入第三方 JavaScript 插件来实现。对这部分我只做简述，对其中的部分功能比如作图等，还是推荐用专门的可视化工具去做。

### 画流程图和时序图

有部分网站和编辑器实现了对 Markdown 里流程图和时序图的支持，比如我们使用的项目管理工具 TAPD 的在线编辑器，还有 VSCode + 插件 Markdown Preview Enhanced 等。

以我们使用的项目管理工具 TAPD 的在线编辑器为例：

[![流程图](https://github.com/mzlogin/markdown-intro/raw/master/assets/tapd-markdown-flowchart.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/tapd-markdown-flowchart.png)

[![时序图](https://github.com/mzlogin/markdown-intro/raw/master/assets/tapd-markdown-seq.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/tapd-markdown-seq.png)

### 插入数学公式

仍然以 TAPD 为例：

[![数学公式](https://github.com/mzlogin/markdown-intro/raw/master/assets/tapd-markdown-math.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/tapd-markdown-math.png)

应该是利用 JavaScript 支持了 LaTeX 公式语法。

### 用 Markdown 做 PPT

有专门的工具 [Marp](https://github.com/yhatt/marp)，另外使用 VSCode + 插件 Markdown Preview Enhanced 也可以实现。

### 用 Markdown 写微信公众号

可以将公众号素材用 Markdown 编辑好后，贴到在线排版工具以后，复制到公众号编辑器里即可。有多种页面主题和代码主题可选择。

我维护的工具地址：[https://md.mazhuang.org](https://md.mazhuang.org/)

[![微信公众号](https://github.com/mzlogin/markdown-intro/raw/master/assets/wechat-markdown.png)](https://github.com/mzlogin/markdown-intro/blob/master/assets/wechat-markdown.png)

### 更多

想象力丰富的工程师们还扩展了很多基于 Markdown 的玩法，包括但不限于：

- 自动生成 / 更新 Table of Contents
- 流程图 / 时序图
- 制作幻灯片
- 集成 PlantUML / GraphViz 的能力
- 导出 HTML / PDF / 电子书
- ...

以上功能基本都可以用 VSCode + 插件 Markdown Preview Enhanced 实现。

另外可以参考我以前的一篇博客 [关于 Markdown 的一些奇技淫巧](https://mazhuang.org/2017/09/01/markdown-odd-skills/)。
