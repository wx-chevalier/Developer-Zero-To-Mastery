[![返回目录](https://parg.co/UCb)](https://github.com/wxyyxc1992/Awesome-CheatSheet) 
 
 
# Git 提交信息

规范来自 [Angular's commit convension](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#)，参考 [vue commit convension](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)

我们暂时先不需严格按照上面两个规范中提到的去写提交信息（commit message ），但是建议先要做到以下几点，大家习惯了写提交信息后再考虑细化我们的这份规范。

基本格式：

* < 类型 >( 作用域 ): < 主题 >

- < 空行 >

* 提交详情

- < 空行 >

* < 脚注 >

注意每一行尽量不要超过 100 个字符（各种 git 预览工具在预览提交信息的时候会截断超过部分，不方便以后浏览提交信息）。

**类型**

* feat：特性（feature ）

- fix: bug 修复

* docs: 文档

- style: 代码格式，例如丢了个分号，格式化代码，修改了缩进之类的

* refactor: 没有修改功能的情况下重写、优化、整理了代码

- test: 添加之前遗漏的测试

* chore: 维护，零星的工作。我们约定：**当该次提交不属于上面几种时，使用该类型，注意如果提交明确属于上面几种时，尽量不要使用该类型，它不够明确**

**作用域**

不同项目作用域可能划分方式可能不同，这个可能需要项目相关人员自己摸索，大家最开始使用此规范时可以使用比较大的作用域，像前端代码，如果暂时没有细分，可以考虑使用这样几个：config, component, container, state 。当然，这个视项目而定，有好的想法可以一起更新此文档。

**如果找不到好的作用域，使用 \* 占位。**

**主题**

简短的关于该次提交做了什么的信息。

* 我们约定提交信息包括后面的提交详情一律**使用中文**

- 结尾不要添加句号，点号作结尾

**提交详情**

* 使用中文

- 主题没有描述清楚的，这里可以多行详细描述

**脚注**

这里放下面几类信息

* **Breaking change**

- 发生了与之前版本不兼容的改变，如后端某个之前发布过接口发生改变

\*

* **引用 Issue、任务**

- Closes #1

* 即该提交完成任务 1。

- 如果使用 Coding.net 管理任务，如下图位置可以找到任务编号（使用其它的平台应该也有类似编号）

* ![img](https://images-cdn.shimo.im/QzC5zCcKi9gd7XTr/image.png!thumbnail)

\*

**例子**

* feat(component): 添加 ResponseViewer 组件

-

* \- 组件描述 blabla

- \- 其它描述 blabla

* fix(config): 修改 ... 插件配置导致的 ... 问题

-

* 详细描述，... 参考资料的网址 ...

-

* Closes #32
