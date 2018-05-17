[![返回目录](https://parg.co/U0e)](https://parg.co/U0X)

> [2017 值得一瞥的 JavaScript 相关技术趋势](https://zhuanlan.zhihu.com/p/24671288)从属于笔者的[Web 前端入门与工程实践](https://github.com/wxyyxc1992/Web-Frontend-Introduction-And-Engineering-Practices)，推荐阅读[2016-我的前端之路:工具化与工程化](https://zhuanlan.zhihu.com/p/24575395)获得更多关于 2016 年前端总结。本文主要内容翻译自，笔者对于每个条目进行了些许完善。本文中提及的这些趋势可能离大部分开发者还很远，或者说离真正的大规模工程化应用还很远，不过不妨碍我们提前两三年了解下。本文仅代表原作者个人看法，不喜留言轻喷，译者也很好奇大家对这个列表的看法。

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/1/1/istock-504857308.jpg__640x360_q85_crop_subsampling-2.jpg)

# 2017 值得一瞥的 JavaScript 相关技术趋势

跨年前两天，[Dan Abramov](https://medium.com/u/a3a8af6addc1)在 Twitter 上提了一个问题：
![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/1/1/QQ20170101.png)

JS 社区毫不犹豫的抛出了它们对于新技术的预期与期待，本文内容也是总结自 Twitter 的回复，按照流行度降序排列。有一个尚未确定的小点是既然函数式编程已不再是少数派，是否要把它踢出红毯呢？

# WebAssembly

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/1/1/1-kn4vtNVqMmMxkzIRCi3mjw.jpeg)

去年笔者就表示过了对于 WebAssembly 的期待，WebAssembly 就是面向 Web 平台的底层代码。其初衷是希望能够使所有语言都能够编译运行到 Web 平台，这一点对于很多函数式编程、响应式编程的粉丝充满吸引力。特别是随着这几年 JavaScript 社区的突飞猛进，很多开发者并不能跟得上这门语言衍化的速度，因此他们也非常希望能够直接用自己习惯的语言而不是要去重头学一门从入门到直接放弃的语言。不过 JavaScript 目前还处于明显的上升势头，暂时还没人唱衰它。并且 WebAssembly 仍处于襁褓中，才进入到预览阶段，离真正的发布还有很长的距离。总结而言，笔者建议我们都应该对 WebAssembly 保持一定的关注，毕竟它会对未来的 JavaScript 造成极大的影响。如果你对于 WebAssembly 有兴趣，那么推荐阅读[Eric Elliott 的相关博客](https://medium.com/javascript-scene/what-is-webassembly-the-dawn-of-a-new-era-61256ec5a8f6#.4wd8dn7ri)。

# Elm

> 笔者个人不太意愿使用 Elm，不过其特性还是很有借鉴价值

2016 年不少的开发者参与到[Elm 的开发中](https://hackernoon.com/why-elm-is-going-to-change-the-world-f5a6c693b2ca#.f752y3uln)，Elm 不仅仅是 JavaScript 的扩展库，而是一门可以编译到 JavaScript 的编程语言，对于很多热衷于函数式编程的开发者是个不错的选择。参考[Elm  入门介绍](https://guide.elm-lang.org/)，Elm 提供了如下特性：

* 并不会存在运行时错误，没有`null`，没有`undefined is not a funtion`。
* 非常友好的错误提示信息能够辅助你开发。
* 比较严格的代码规范与项目架构，保证了你的应用在快速迭代中依然保持着最佳实践。
* 自动为所有的 Elm 包添加语义版本描述。

总而言之，Elm 为我们提供了优秀的工具来保证编写干净、简单与碎片化的代码，并且因为 Elm 是可以编译到 JavaScript，因此很多 JavaScript 开发者都可以保持下关注或者尝试下。

# babili(babel-minify)

[Babili](https://github.com/babel/babili)最早于 2016 年 8 月份发布，它是基于 Babel 工具链上的支持原生 ES6 语法的压缩工具。Henry Zhu 在[这篇文章](https://babeljs.io/blog/2016/08/30/babili)中称述了为什么我们需要另一个压缩工具，关键点如下：目前大部分压缩工具只能够处理 ES5 代码，因此在压缩之前需要先进性编译，而 Babili 能够支持直接输入 ES2015+。随着浏览器性能的提升，越来越多的浏览器支持直接运行 ES2015 的代码，因此我们不需要再进行转换编译。另外 Babili 也可以作为[Babel preset](http://babeljs.io/docs/plugins/#presets)引入到现有的 Babel 配置中，也可以作为直接使用的命令行工具。

这里举个简单的例子，我们编写了如下的 ES6 类:

```
class Mangler {
  constructor(program) {
    this.program = program;
  }
}
// need this since otherwise Mangler isn't used
new Mangler();
```

之前，利用传统的 Babel 进行编译与压缩，会得到如下代码:

```
// ES2015 code -> Babel -> Uglify/Babili -> Minified ES5 Code
var a=function a(b){_classCallCheck(this,a),this.program=b};a();
```

而 Babili 的效果如下:

```
// ES2015 code -> Babili -> Minified ES2015 Code
class a{constructor(b){this.program=b}}new a;
```

# OCaml

OCaml 本身和 JS 没啥关系，不过列表接下来的两项都是基于 OCaml，因此还是要先介绍下。如果你关注了近两年来的函数式编程崛起之路，你或许听过 Haskell。而得益于 OCaml 能够编译到就 S，其以后来居上的姿态凌驾于 Haskell。Facebook 的不少开发者都是 OCaml 的粉丝，他们的[Hack](http://hacklang.org/)、[Flow](https://flowtype.org/)以及[Infer](http://fbinfer.com/)都是基于 OCaml 构建的。

# BuckleScript
[BuckleScript](https://github.com/bloomberg/bucklescript)是基于 OCaml 实现的服务端框架，由著名的 Bloomberg 团队创造而来。[Duane Johnson](https://github.com/canadaduane)对他们的解释如下：
BuckleScript 或者 bsc，是个基于 OCaml 编译器的相对较新的 JavaScript 服务端框架。换言之，你可以使用优秀的函数式、自带类型的 OCaml 语言，同时也能继续背靠基于`npm`包管理器的 Web 生态系统。

我们来简要的看下 BuckleScript 代码风格，譬如用 BuckleScript 实现简单的服务端：

```
let port = 3000
let hostname = "127.0.0.1"
let create_server http =
  let server = http##createServer begin fun [@bs] req resp ->
      resp##statusCode #= 200;
      resp##setHeader "Content-Type" "text/plain";
      resp##_end "Hello world\n"
    end
  in
  server##listen port hostname begin fun [@bs] () ->
    Js.log ("Server running at http://"^ hostname ^ ":" ^ Pervasives.string_of_int port ^ "/")
  end



let () = create_server Http_types.http
```

编译输出为:

```
'use strict';
var Pervasives = require("bs-platform/lib/js/pervasives");
var Http       = require("http");


var hostname = "127.0.0.1";


function create_server(http) {
  var server = http.createServer(function (_, resp) {
    resp.statusCode = 200;
    resp.setHeader("Content-Type", "text/plain");
    return resp.end("Hello world\n");
  });
  return server.listen(3000, hostname, function () {
    console.log("Server running at http://" + (hostname + (":" + (Pervasives.string_of_int(3000) + "/"))));
    return /* () */0;
  });
}


create_server(Http);
```

OCaml 最大的特性就是其函数式语言特性，我们再看下其对于不可变类型的支持，我们使用 OCaml stdlib 实现的不可变类型如下:

```
module IntMap = Map.Make(struct
  type t = int
  let compare (x : int) y = compare x y
end)


let test () =
  let m = ref IntMap.empty in
  let count = 1000000 in
  for i = 0 to count do
    m := IntMap.add i i !m
  done;
  for i = 0 to count do
    ignore (IntMap.find i !m)
  done


let () = test()
```

而如果要用 Facebook Immutable 实现的代码为:

```
'use strict';


var Immutable = require('immutable');
var Map = Immutable.Map;
var m = new Map();


function test() {
  var count = 1000000;
  for(var i = 0; i < count; ++i) {
    m = m.set(i, i);
  }
  for(var j = 0; j < count; ++j) {
    m.get(j);
  }
}


test();
```

性能评测下，二者的执行时间对比为：

* BuckleScript: 1186ms
* JavaScript: 3415ms

编译后的体积为：

* BuckleScript (production): 899 Bytes
* JavaScript: 55.3K Bytes

# ReasonML

ReasonML 与 React 师出同门，是基于 OCamel 设计的语法友好、编辑器支持程度高，并且有强大的编译工具支持的语言。建议阅读[Sean Grove](https://youtu.be/QWfHrbSqnB0?t=29m34s)对 ReasonML 的介绍。本文简单介绍几个 JavaScript 与 Reason 的语法对比：

* 元类型
  | JavaScript | Reason |
  | --------------------------- | ----------------------------- |
  | `3` | `3` |
  | `3.1415` | `3.1415` |
  | `"Hello world!"` | `"Hello world!"` |
  | `'Hello world!'` | Strings must use “ |
  | Characters are strings | `'a'` |
  | `true` | `true` |
  | `[1,2,3]` | `[1,2,3]` |
  | `null` | `()` |
  | `const x = y;` | `let x = y;` |
  | `let x = y;` | `reference cells` |
  | `var x = y;` | No equivalent (thankfully) |
  | `[x, ...lst] (linear time)` | `[x, ...lst] (constant time)` |
  | `[...lst, x] (linear time)` | `Not supported` |
  | `{...obj, x: y}` | `{...obj, x: y}` |

- 表达式
  | JavaScript | Reason |
  | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
  | `login ? "hi" : "bye"` | `login ? "hi" : "bye"` |
  | `let res = undefined;switch (thing) { case first: res = "first"; break; case second: res = "second"; break;};` | `let res = switch thing { | first => "first" | second => "second"};` |

# Purescript

另一个强类型、高性能的能够编译到 JavaScript 的编程语言，其定位与 Elm 类似，主要特性为：

* 没有运行时错误
* 严格的，类似于 JavaScript 的计算
* 支持 JavaScript 对象语法
* 提供相较于 Hashkell 更强大方便的类型系统
* 更方便地 JavaScript 库集成

# [Webpack-blocks](https://github.com/andywer/webpack-blocks)

Dan Abramov 说过，Webpack 的定位就是在相对底层，因此将配置以编程块的方式实现会更加完备。

```
const { createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const devServer = require('@webpack-blocks/dev-server2')
const postcss = require('@webpack-blocks/postcss')
const autoprefixer = require('autoprefixer')


module.exports = createConfig([
  entryPoint('./src/main.js'),
  setOutput('./build/bundle.js'),
  babel(),
  postcss([
    autoprefixer({ browsers: ['last 2 versions'] })
  ]),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  env('development', [
    devServer(),
    devServer.proxy({
      '/api': { target: 'http://localhost:3000' }
    }),
    sourceMaps()
  ])
])
```

# [GraphQL](https://medium.com/commit-push/the-top-rising-javascript-trends-to-watch-in-2017-86d8e87db3b3#.fbcwpw2m0)

GraphQL 是个不错的 REST 替代查询语言，特别是对于那些拥有大量数据的公司。这个[案例分析](https://0x2a.sh/from-rest-to-graphql-b4e95e94c26b#.rttn26wqh)很好地阐述了从 REST 到 GraphQL 的转变之路。我能够想象 2017 年 GraphQL 会继续处于上升势头，不过要谈到真的大规模实施，还要到 2018 年吧。

# [React Storybook](https://getstorybook.io/)

相信大家对于 React Storybook 并不陌生了，你能够独立于应用而交互式的开发你的组件，就如下图所示：
![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/1/1/1-8T0opytn0oYuEMpd8PRTsw.gif)

# [jQuery 3.0]()

爷爷辈的 jQuery 仍然处于不断的迭代更新中，可能很多开发者忽略了 2016 年 6 月份发布的 jQuery 3.0 版本，可以参考[这里获取更多信息](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/)。

# [Pixi.js](http://www.pixijs.com/)

如果你打算在浏览器中实现精彩的 2D 效果，特别是对于使用 WebGL 的游戏开发者，Pixi.js 是个值得一看的库，可以参考[这里](http://www.pixijs.com/gallery)获取更多的 Demo。

# [Preact](https://preactjs.com/)与[inferno]()

非常优秀的 React 的替代库。

# Rust

Rust 可以编译到 JavaScript 啦(通过[emscripten](https://github.com/kripken/emscripten))。

# Custom Elements

Custom Elements(包括 Shadow DOM)一直不被主流的开发者接受，不过看似 2017 这一点将会发生些许变化。变化的关键因素在于[浏览器支持比例的改善](http://jonrimmer.github.io/are-we-componentized-yet/)。个人还是蛮期待 Custom Elements 的，可以关注[SmashingMag](https://www.smashingmagazine.com/2014/03/introduction-to-custom-elements/)或者[Google’s](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)关于 Custom Elements 的解释。

# WebRTC

很难相信 WebRTC 已经五岁了，Facebook、Slack、Snapchat 以及 WhatsApp 都在他们的服务中集成了 WebRTC。可以预见 WebRTC 会在 2017 年被更多的公司采用，蒸蒸日上。

# [Next.js](https://github.com/zeit/next.js)

Next.js 是个基于 React、Webpack 与 Babel 构建的，支持服务端渲染的小框架，其来源于 ZEIT 团队，在 React 社区获得了不小的关注度。
