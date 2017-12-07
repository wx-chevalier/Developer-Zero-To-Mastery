[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 

# WebAssembly 学习与实践资料索引

![](https://pic1.zhimg.com/a3d0d0e45057489e78b70620b739bb74_r.png)

# Overview

- [2015-WebAssembly：面向 Web 的通用二进制和文本格式](http://www.infoq.com/cn/news/2015/06/webassembly-wasm)

- [2017-WebAssembly: Mozilla Won](http://robert.ocallahan.org/2017/06/webassembly-mozilla-won.html): Mozilla staff are being very diplomatic and restrained by allowing WebAssembly to be portrayed as a compromise between the approaches of asm.js and PNaCl. They have good reasons for being so, but I can be a bit less restrained. asm.js and PNaCl represented quite different visions for how C/C++ code should be supported on the Web, and I think WebAssembly is a big victory for asm.js and Mozilla's vision.

- [2017-How JavaScript works: A comparison with WebAssembly + why in certain cases it’s better to use it over JavaScript](https://parg.co/Uua)

- [2016-awesome-wasm #Project#](https://github.com/mbasso/awesome-wasm/blob/master/README.md): Collection of awesome things regarding WebAssembly (wasm) ecosystem.

- [2017-A cartoon intro to WebAssembly](https://hacks.mozilla.org/2017/02/a-cartoon-intro-to-webassembly/): WebAssembly is fast. You’ve probably heard this. But what is it that makes WebAssembly fast? In this series, I want to explain to you why WebAssembly is fast.

- [2017-Why WebAssembly is Faster Than asm.js](https://hacks.mozilla.org/2017/03/why-webassembly-is-faster-than-asm-js/) 

- [2017-An Abridged Cartoon Introduction To WebAssembly](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/): In this article, I want to help you understand what exactly it is about WebAssembly that makes it fast.

## Case Study

- [2017-Execute millions of SQL statements in milliseconds in the browser with WebAssembly and Web Workers.](https://hackernoon.com/execute-millions-of-sql-statements-in-milliseconds-in-the-browser-with-webassembly-and-web-workers-3e0b25c3f1a6#.wmwgurgvu) 

- [2017-WebAssembly cut Figma’s load time by 3x](https://parg.co/biB): Many people have started experimenting with toy WebAssembly projects on the side, but it’s hard to tell what the real-world performance gains will be unless you have a large compatible code base for comparison.

# Tutorial

- [Build Your First Thing With WebAssembly](http://cultureofdevelopment.com/blog/build-your-first-thing-with-web-assembly/)

- [How to get a performance boost using WebAssembly](https://hackernoon.com/how-to-get-a-performance-boost-using-webassembly-8844ec6dd665#.gle72anx6)

- [2017-WebAssembly 101: a developer's first steps](http://blog.openbloc.fr/webassembly-first-steps/):  This tutorial will guide you along the necessary steps to port a JavaScript library of the Conway's game of life to WebAssembly (wasm). This is a simple exercise that is perfect to start beyond a trivial Hello World.

- [2017-Egghead.io WASM Introduction Examples](https://github.com/guybedford/wasm-intro): Course examples from the Introduction to WebAssembly egghead.io course.

## Rust

- [2017-ROCKET - A RUST GAME RUNNING ON WASM](https://parg.co/UZJ): I thought it would be interesting to try to adapt my game Rocket to work on the browser through the wasm32-unknown-unknown target. 

# Under the hood

- [2017-Understanding WebAssembly text format](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format): To enable WebAssembly to be read and edited by humans, there is a textual representation of the wasm binary format. This is an intermediate form designed to exposed in text editors, browser developer tools, etc. This article explains how that text format works, in terms of the raw syntax, and how it is related to the underlying bytecode it represents — and the wrapper objects representing wasm in JavaScript.

- [Asmble #Project#](https://github.com/cretz/asmble): Asmble is a compiler that compiles WebAssembly code to JVM bytecode. It also contains utilities for working with WASM code from the command line and from JVM languages.
