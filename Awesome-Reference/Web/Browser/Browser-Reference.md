
# 浏览器相关学习与资料索引

本文承接自[ Web 学习与实践资料索引](https://parg.co/b4T)。

- [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [浅析渲染引擎与前端优化](http://jdc.jd.com/archives/2806?utm_source=tuicool&utm_medium=referral)


# Chrome

## CSS
- [从 Chrome 源码看浏览器如何计算CSS](https://zhuanlan.zhihu.com/p/25380611)


## Extension
- [2015-How to Create a Chrome Extension in 10 Minutes Flat](https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/)
- [Chrome Extension Developer's Guide](https://developer.chrome.com/extensions/devguide)
- [Getting Started: Building a Chrome Extension](https://developer.chrome.com/extensions/getstarted)


# Firefox
- [2017-Inside a super fast CSS engine: Quantum CSS (aka Stylo)](https://parg.co/bTa)

# Edge
- [2017-Modernizing the DOM tree in Microsoft Edge](https://blogs.windows.com/msedgedev/2017/04/19/modernizing-dom-tree-microsoft-edge/#gXbKkdM2Yl71P1jX.97): In this post, we’ll walk you through the history of the DOM in Internet Explorer and Microsoft Edge, and the impact of our recent work to modernize the DOM Tree, which is already resulting in substantially improved performance in the Windows 10 Creators Update.
- [2017-Improved JavaScript performance, WebAssembly, and Shared Memory in Microsoft Edge](https://blogs.windows.com/msedgedev/2017/04/20/improved-javascript-performance-webassembly-shared-memory/#aXYIbCB04QkDAmeQ.97): In this post, we’ll walk you through some new features coming to Chakra with the Windows 10 Creators Update that improve the day-to-day browsing experience in Microsoft Edge, as well as some new experimental features for developers: WebAssembly, and Shared Memory and Atomics.

# Security

- [扒一扒浏览器的安全机制](http://mp.weixin.qq.com/s?__biz=MjM5NjA0NjgyMA==&mid=2651061832&idx=2&sn=233869f7e47291aa9d7cde78f0d02599&scene=0#wechat_redirect)


# Browser Detection
## [ua-device](https://github.com/fex-team/ua-device)

## Browser Feature Detection(浏览器特征检测)

``` javascript
<script type="text/javascript">
var userAgent = navigator.userAgent, 
rMsie = /(msie\s|trident.*rv:)([\w.]+)/, 
rFirefox = /(firefox)\/([\w.]+)/, 
rOpera = /(opera).+version\/([\w.]+)/, 
rChrome = /(chrome)\/([\w.]+)/, 
rSafari = /version\/([\w.]+).*(safari)/;
var browser;
var version;
var ua = userAgent.toLowerCase();
function uaMatch(ua) {
var match = rMsie.exec(ua);
if (match != null) {
return { browser : "IE", version : match[2] || "0" };
}
var match = rFirefox.exec(ua);
if (match != null) {
return { browser : match[1] || "", version : match[2] || "0" };
}
var match = rOpera.exec(ua);
if (match != null) {
return { browser : match[1] || "", version : match[2] || "0" };
}
var match = rChrome.exec(ua);
if (match != null) {
return { browser : match[1] || "", version : match[2] || "0" };
}
var match = rSafari.exec(ua);
if (match != null) {
return { browser : match[2] || "", version : match[1] || "0" };
}
if (match != null) {
return { browser : "", version : "0" };
}
}
var browserMatch = uaMatch(userAgent.toLowerCase());
if (browserMatch.browser) {
browser = browserMatch.browser;
version = browserMatch.version;
}
document.write(browser+version);	
</script>
```

### [Modernizr](https://github.com/Modernizr/Modernizr)

Modernizr是一个开源的JS库，它使得那些基于访客浏览器的不同（指对新标准支持性的差异）而开发不同级别体验的设计师的工作变得更为简单。它使得设计师可以在支持[HTML5](http://www.mhtml5.com/)和CSS3的浏览器中充分利用[HTML5](http://www.mhtml5.com/)和CSS3的特性进行开发，同时又不会牺牲其他不支持这些新技术的浏览器的控制。	

当你在网页中嵌入Modernizr的脚本时，它会检测当前浏览器是否支持CSS3的特性，比如 @font-face、border-radius、 border-image、box-shadow、rgba() 等，同时也会检测是否支持[HTML5](http://www.mhtml5.com/)的 特性——比如audio、video、本地储存、和新的 <input>标签的类型和属性等。在获取到这些信息的基础上，你可以在那些支持这些功能的浏览器上使用它们，来决定是否创建一个基于JS的 fallback，或者对那些不支持的浏览器进行简单的优雅降级。另外，Modernizr还可以令IE支持对[HTML5](http://www.mhtml5.com/)的元素应用CSS样式，这样开发者就可以立即使用这些更富有语义化的标签了。	

``` 
  if (browser === "the-one-they-make-you-use-at-work") {
    getTheOldLameExperience();
  } else {
    showOffAwesomeNewFeature();
  }

```

改为了：

``` 
  if (Modernizr.awesomeNewFeature) {
    showOffAwesomeNewFeature();
  } else {
    getTheOldLameExperience();
  }

```



### [feature.js](https://github.com/viljamis/feature.js)

### [Bowser](https://github.com/ded/bowser)

引入方式：

``` javascript
browser = require('bowser');
```
# 服务端版本识别
> - [天猫双11前端分享系列（七）：如何精确识别终端](https://github.com/tmallfe/tmallfe.github.io/issues/32)

