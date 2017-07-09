# JavaScript EPractices Reference

- [2017-Composing Software【Series】](https://parg.co/bJ4): the “Composing Software” series on learning functional programming and compositional software techniques in JavaScript ES6+ from the ground up.

# StyleGuide
- [2013-Airbnb JavaScript Style Guide【Project】](https://github.com/airbnb/javascript): A mostly reasonable approach to JavaScript.
- [2017-jsinspect【Project】](https://github.com/danielstjules/jsinspect):Detect copy-pasted and structurally similar code.
- [2017-Elements of JavaScript Style](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f): These guidelines have stood the test of time for good reason: They’re usually right. Deviate from them only for good reason — not simply on a whim or a personal style preference.
- [2017-Project Guidelines](https://parg.co/bI3): A set of best practices for JavaScript projects

# Performance
- [Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers): This document will contain advice to avoid writing code that will perform significantly worse than expected. Specifically those patterns that cause V8 (relevant to Node.JS, Opera, Chromium...) to refuse to optimize the affected function.
- [2017-Optimizing dynamic JavaScript with inline caches](https://parg.co/b4a)：This is an overview of an optimization technique I've been using in JSIL for a while, where you create and update polymorphic inline caches in your JavaScript code at runtime so that it can stay fast while adapting to unexpected changes.。( https://parg.co/b4a )
- [2017-Improved JavaScript performance, WebAssembly, and Shared Memory in Microsoft Edge](https://parg.co/bfk)


# Production

## Tool
- [2014-Refactoring your JavaScript code with Grasp](http://www.graspjs.com/blog/2014/01/07/refactoring-javascript-with-grasp):  Grasp 这个小小的 JavaScript 的命令行重构工具让我们所有人印象深刻。它为抽象语法树提供了丰富的选择器和操作，比摆弄 sed 和 grep 要先进多了。这给我们正在进行的将 JavaScript 做为一等编程语言的运动添加了一个有用的新工具。
- [2016-Butternut【Project】](https://github.com/Rich-Harris/butternut): The fast, future-friendly minifier.
- [2017-Prepack【Project】](https://prepack.io/): Prepack is a tool that optimizes JavaScript source code: Computations that can be done at compile-time instead of run-time get eliminated. Prepack replaces the global code of a JavaScript bundle with equivalent code that is a simple sequence of assignments. This gets rid of most intermediate computations and object allocations.
