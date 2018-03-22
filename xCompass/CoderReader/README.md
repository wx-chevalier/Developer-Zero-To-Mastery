# CoderReader

CoderReader 是笔者闲暇时编写的专门的技术人员阅读应用，其包含了知识图谱、搜索、资讯、周刊、书籍等栏目，内容整合自笔者在[ Coder-Links: 追求技术之上的进阶阅读学习索引](https://zhuanlan.zhihu.com/p/25642783)一文中介绍的技术社区，包括但不限于：

- 资讯聚合：[HackerNews](https://news.ycombinator.com/news)、[Reddit](https://www.reddit.com/)、[Google+](plus.google.com)、[推酷](tuicool.com)、[TechMeme](https://www.techmeme.com/)、[V2EX](https://www.v2ex.com/)、[DZone](dzone.com)
- 技术书籍：[Gitbook](https://www.gitbook.com/)、[SafariBooksOnline](https://www.safaribooksonline.com/)
- 技术阅读：[Medium](https://medium.com)、[开发者头条](https://toutiao.io)、[掘金](https://gold.xitu.io/)、[CSDN](http://www.csdn.net/)
- 技术问答：[StackOverflow](https://stackoverflow.com/)、[SegmentFault](https://segmentfault.com/)
- 开源社区：[Github](https://github.com/)、[OSChina](https://git.oschina.net/)、[coding.net](https://coding.net)
- 期刊订阅：[MyBridge](mybridge.co)、[InfoQ 架构师](www.infoq.com/cn)、[CSDN 程序员杂志]()、[码农周刊](http://weekly.manong.io/)、[高可用架构系列](http://www.ituring.com.cn/search?q=%E9%AB%98%E5%8F%AF%E7%94%A8%E6%9E%B6%E6%9E%84&type=)、[ThoughtWorks 技术雷达](https://assets.thoughtworks.com/assets/technology-radar-apr-2016-cn.pdf)
- 在线学习：[Coursera](https://www.coursera.org/)、[edX](https://www.edx.org/)、[Udacity](https://cn.udacity.com/)、[MIT公开课](https://ocw.mit.edu/index.htm)、[MOOC学院](http://mooc.guokr.com/course/)、[慕课网](http://www.imooc.com/)
- 在线编程：[LeetCode](https://leetcode.com/)、[Project Euler](https://projecteuler.net/)、[CodingGame](https://www.codingame.com/start)、[Kaggle](https://www.kaggle.com/)、[Topcoder](https://www.topcoder.com/)、牛客网、[HackerRank](https://www.hackerrank.com/)
- 大厂风范：[MSDN](https://msdn.microsoft.com/zh-cn)、[Google 开发者 ](https://developers.google.cn/)、[云栖社区](https://yq.aliyun.com/)、[IBM DeveloperWorks](http://www.ibm.com/developerworks/)、[Facebook AI Research ](https://research.fb.com/ai-helps-facebooks-internet-drones-find-where-the-people-are/)、[Facebook](https://code.facebook.com/posts/)、[airbnb](http://nerds.airbnb.com/)


该应用目前是基于 Expo SDK 进行编译与发布，请先前往 Android 应用市场或者 APPStore 下载 Expo Client，然后扫描如下二维码即可打开：

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/6/1/wx-coder-expo.png)

也可以直接下载 Android APK：

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/6/1/coder-reader.png)

本文余下部分是笔者在进行 React Native 开发过程中的笔记与实践总结，有兴趣者不妨一看。

## Integrated Open Source Code

- [kittenTricks](https://github.com/akveo/kittenTricks): A react native mobile starter kit with over 40 screens and theme hot reload support.

# 配置与调试

![](https://docs.expo.io/0af875d134c9a8835b71baaa0e1791bc-quality=50&pngCompressionLevel=9&width=1822.png)

```json
{
    "name": "CoderReader",
    "description": "No description",
    "slug": "CoderReader",
    "privacy": "public",
    "sdkVersion": "18.0.0",
    "version": "1.0.0",
    "orientation": "portrait",
    "primaryColor": "#cccccc",
    "icon": "./assets/icons/app-icon.png",
    "notification": {
        "icon": "./assets/icons/notification-icon.png",
        "color": "#000000",
        "iconUrl": "http://localhost:19001/assets/./assets/icons/notification-icon.png"
    },
    "loading": {
        "icon": "./assets/icons/loading-icon.png",
        "hideExponentText": false,
        "iconUrl": "http://localhost:19001/assets/./assets/icons/loading-icon.png"
    },
    "packagerOpts": {
        "hostType": "localhost",
        "lanType": "ip",
        "dev": true,
        "strict": false,
        "minify": false,
        "urlType": "exp",
        "urlRandomness": "gp-j7r"
    },
    "ios": {
        "supportsTablet": true
    },
    "xde": true,
    "developer": {
        "tool": "xde"
    },
    "env": {},
    "bundleUrl": "http://localhost:19001/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&strict=false&minify=false&hot=false&assetPlugin=expo/tools/hashAssetFiles",
    "debuggerHost": "localhost:19001",
    "mainModuleName": "node_modules/expo/AppEntry",
    "logUrl": "http://localhost:19000/logs",
    "iconUrl": "http://localhost:19001/assets/./assets/icons/app-icon.png"
}
```

```json
{
    "android": {
      "package": "cn.wxcoder.reader"
    }
}
```

```shell

# 编译 Android 版本
 
exp ba / exp build:android

# 编译独立的 iOS ipa 包

exp bi / exp build:ios
```

[Expo Vector Icons](https://expo.github.io/vector-icons/)

# 路由导航
```shell
curl -X POST \
  https://parg.co/api/shorten \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: 3470ba5e-e625-da31-8246-3c1df7e059e2' \
  -d 'api_key=0b7f4c7a35b8636e838e5d1f3658e4c0&email=384924552%40qq.com&url=https%3A%2F%2Ftsts.com'

```
