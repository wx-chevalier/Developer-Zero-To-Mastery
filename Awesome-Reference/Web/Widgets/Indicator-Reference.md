[![返回目录](https://parg.co/UGo)](https://parg.co/b4z) 
# Web 指示器插件索引

# ProgressBar

- [NProgress](http://ricostacruz.com/nprogress/)

# Introduction

## Guide/Tour

### [react-user-tour](https://github.com/socialtables/react-user-tour)


# Text

## Animation

### Typewriter(打字机)

### In-Out(切入切出效果)

### Carousel(轮播)

#### [substituteteacher.js](http://danrschlosser.github.io/substituteteacher.js/)

![](http://7xiegq.com1.z0.glb.clouddn.com/2015-09-22%2017_46_27.gif)



- Installation

``` 
npm install substituteteacher.js --save-dev
```

- Usage

``` html
<!-- Step 1: Add the substituteteacher.js file -->
<script src="substituteteacher.min.js"></script>

<!-- Step 2: Create your container element -->
<div id="sub">Fallback text.</div>

<!-- Step 3: Init substituteteacher.js -->
<script type="text/javascript">
  var sub = new Sub([
      "A daring JavaScript library for subsitute teachers",
      "A hilarious JavaScript library for awesome taglines",
      "A svelte JavaScript library for sweet taglines",
      "A badass JavaScript library for sliding fun",
      "A JavaScript library for word substitution"
  ]).run();
</script>
```

# Progress
## ProgressBar
### [Elastic Progress](https://github.com/codrops/ElasticProgress)

![Elastic Progress](https://camo.githubusercontent.com/cc2cecf6a9725655027e0282452ad246d88a2fb9/687474703a2f2f636f64726f7073707a2e74796d70616e75732e6e6574646e612d63646e2e636f6d2f636f64726f70732f77702d636f6e74656e742f75706c6f6164732f323031352f30392f656c617374696370726f67726573732e676966)
## Pagination

### [Rubber Indicator][1]

<iframe src="http://codepen.io/machycek/full/eNvyjb/"></iframe>


# DateTimer
## TimeLine

### [labella.js](https://github.com/twitter/labella.js)

![](http://7xi5sw.com1.z0.glb.clouddn.com/FAD36EC5-F2A9-4C78-8ADE-DF5C806B786A.png)

``` javascript
// idealPos: The most preferred position for each label
// width:    The width of each label
var nodes = [
  new labella.Node(1, 50), // idealPos, width
  new labella.Node(2, 50),
  new labella.Node(3, 50),
  new labella.Node(3, 50),
  new labella.Node(3, 50),
];

var force = new labella.Force()
  .nodes(nodes)
  // Listen when the nodes' positions are updated.
  .on('end', function(){
    // The rendering is independent from this library.
    // User can use canvas, svg or any library to draw the labels.
    // There is also a built-in helper labella.Renderer for this purpose. See the examples
    draw(force.nodes());
  })
  // Run simulation at most 100 rounds. It may end earlier if equillibrium is reached.
  .start(100);
```
### [d3-timeline](https://github.com/commodityvectors/d3-timeline)
![](https://raw.githubusercontent.com/commodityvectors/d3-timeline/master/usage.gif)



[1]: http://codepen.io/machycek/full/eNvyjb/

# Loading

- [css-loaders](https://github.com/lukehaas/css-loaders)

- [SpinKit](https://github.com/tobiasahlin/SpinKit):A collection of loading indicators animated with CSS,IE8 Support

- [loaders.css](https://github.com/ConnorAtherton/loaders.css)
![](http://7xkt0f.com1.z0.glb.clouddn.com/2016-03-25%2013_59_30.gif)


## Code Style(代码样式显示)

- [spectacle-code-slide](https://github.com/thejameskyle/spectacle-code-slide)

- [microlight](https://github.com/asvd/microlight)

