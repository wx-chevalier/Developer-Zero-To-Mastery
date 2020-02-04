![](https://i.postimg.cc/6pYfMBv7/image.png)

# Cendertron，动态爬虫与敏感信息泄露检测

> Cendertron = Crawler + Rendertron

[Cendertron https://url.wx-coder.cn/HinPM](https://url.wx-coder.cn/HinPM) 是基于 Puppeteer 的 Web 2.0 动态爬虫与敏感信息泄露检测工具。其依托于 [xe-crawler](https://github.com/wx-chevalier/xe-crawler) 的通用爬虫、调度与缓存模型，新增了 Monkey Test 以及 Request Intercept 等特性，以期尽可能多地挖掘页面与请求。同时针对渗透测试的场景，Cendertron 内置了目录扫描、敏感文件扫描的能力，能够模拟用户实际在浏览器登录状态下的自定义字典爆破。Cendertron 在大量实践的基础上设置了自身的去重策略，能够尽可能地避免重复爬取，加快扫描速度。Cendertron 同时也是正在闭源开发的 [Chaos-Scanner](https://github.com/wx-chevalier/Chaos-Scanner) 模块化安全扫描解决方案的一部分，为基础扫描与智能扫描提供前置输入。

![](https://i.postimg.cc/8PcCmt6t/image.png)

# Usage | 使用

## Locally Development | 本地开发

在本地开发中，我们只需要如正常的 Node 项目一样启动，其会使用 Puppeteer 内置的 Headless Chrome 来执行界面渲染操作：

```sh
$ git clone https://github.com/wx-chevalier/Chaos-Scanner
$ cd cendertron
$ yarn install
$ npm run dev
```

启动之后可以按提示打开浏览器界面：

![](https://i.postimg.cc/Tw8Y2cKc/image.png)

这里我们可以以 [DVWA](http://www.dvwa.co.uk/) 作为测试目标，在输入框内输入 `http://localhost:8082/` 然后执行爬取，即可得到如下结果：

```json
{
  "isFinished": true,
  "metrics": {
    "executionDuration": 116177,
    "spiderCount": 51,
    "depth": 4
  },
  "spiderMap": {
    "http://localhost:8082/vulnerabilities/csrf/": [
      {
        "url": "http://localhost:8082/vulnerabilities/view_source.php?id=csrf&security=low",
        "parsedUrl": {
          "host": "localhost:8082",
          "pathname": "/vulnerabilities/view_source.php",
          "query": {
            "id": "csrf",
            "security": "low"
          }
        },
        "hash": "localhost:8082#/vulnerabilities/view_source.php#idsecurity",
        "resourceType": "document"
      }
      // ...
    ]
  }
}
```

需要说明的是，因为 DVWA 是需要登录后爬取，因此如果想进行完整的测试请参考下文的 POST 方式创建任务。

## Deploy in Docker | 部署在 Docker 中

```sh
# build image
$ docker build -t cendertron .

# run as contaner
$ docker run -it --rm -p 3033:3000 --name cendertron-instance cendertron

# run as container, fix with Jessie Frazelle seccomp profile for Chrome.
$ wget https://raw.githubusercontent.com/jfrazelle/dotfiles/master/etc/docker/seccomp/chrome.json -O ~/chrome.json
$ docker run -it -p 3033:3000 --security-opt seccomp=$HOME/chrome.json --name cendertron-instance cendertron

# or
$ docker run -it -p 3033:3000 --cap-add=SYS_ADMIN --name cendertron-instance cendertron

# use network and mapping logs
$ docker run -d -p 3033:3000 --cap-add=SYS_ADMIN --name cendertron-instance --network wsat-network cendertron
```

## Deploy as FC | 以函数式计算方式部署

Install cendertron from NPM:

```sh
# set not downloading chromium
$ PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

$ yarn add cendertron
# or
$ npm install cendertron -S
```

Import `Crawler` and use in your code:

```js
const crawler = new Crawler(browser, {
  onFinish: () => {
    callback(crawler.spidersRequestMap);
  }
});

let pageUrl =
  evtStr.length !== 0 && evtStr.indexOf("{") !== 0
    ? evtStr
    : "https://www.aliyun.com";

crawler.start(pageUrl);
```

If you want to use it in Alibaba Function Computing Service, [cendertron-fc](./deploy/fc) provides simple template.

# Strategy | 策略

Cendertron 的内部架构如下所示：

![](https://i.postimg.cc/LsPNxSzM/image.png)

Crawler Scheduler 会负责定期重启 Headless Chrome 以控制缓存，并且针对待爬取的请求返回已缓存的内容。Crawler Scheduler 会为每个无缓存的目标创建 Crawler，Crawler 会根据策略创建不同的 Spider，每个 Spider 依次执行并且将结果推送到 Crawler 中；Crawler 在全部 Spider 执行完毕后会将结果推送到缓存并且通知 Crawler Scheduler：

```ts
export interface CrawlerOption {
  // 爬取深度，如果设置为 1 就是单页面爬虫
  depth: number;
  // 爬虫的唯一编号
  uuid?: string;
  // 爬虫缓存
  crawlerCache?: CrawlerCache;

  // 单页面爬取出的最多的子节点数
  maxPageCount: number;
  // 总站点的总延时
  timeout: number;
  // 单页面的延时
  pageTimeout: number;

  // 是否仅爬取同站内容
  isSameOrigin: boolean;
  // 是否忽略媒体资源
  isIgnoreAssets: boolean;
  // 是否设置为移动模式
  isMobile: boolean;
  // 是否开启缓存
  useCache: boolean;
  // 是否使用弱口令扫描
  useWeakfile: boolean;

  // 页面 Cookie
  cookie: string;
  // 页面的 localStorage
  localStorage: object;
}
```

## 模拟操作

![](https://i.postimg.cc/0Qp5zJm1/image.png)

Cendertron 内置了 Click Monkey, Gremlins 等多种随机执行器，会点击按钮并且执行一些随机操作：

```js
function initGermlins() {
  gremlins
    .createHorde()
    .gremlin(gremlins.species.formFiller())
    .gremlin(gremlins.species.clicker().clickTypes(["click"]))
    .gremlin(gremlins.species.toucher())
    .gremlin(gremlins.species.scroller())
    .gremlin(function() {
      if ("$" in window) {
        window.$ = function() {};
      }
    })
    .unleash();
}
```

## 请求监听与提取

Cendertron 会监听打开的页面与所有的 Ajax 请求：

```js
await page.setRequestInterception(true);

// 设置目标监听
const targetCreatedListener = (target: puppeteer.Target) => {
  const opener = target.opener();

  if (!opener) {
    return;
  }

  // 记录所有新打开的界面
  opener.page().then(_page => {
    if (_page === page) {
      target.page().then(_p => {
        if (!_p.isClosed()) {
          openedUrls.push(target.url());
          _p.close();
        }
      });
    }
  });
};

// 监听所有当前打开的页面
browser.on("targetcreated", targetCreatedListener);

page.on("request", interceptedRequest => {
  // 屏蔽所有的图片
  if (isMedia(interceptedRequest.url())) {
    interceptedRequest.abort();
  } else if (
    interceptedRequest.isNavigationRequest() &&
    interceptedRequest.redirectChain().length !== 0
  ) {
    interceptedRequest.continue();
  } else {
    interceptedRequest.continue();
  }

  requests.push(transformInterceptedRequestToRequest(interceptedRequest));

  // 每次调用时候都会回调函数
  cb(requests, openedUrls, [targetCreatedListener]);
});
```

## URL 归一化与过滤

所谓的 URL 归一化，就是将同一资源下被随机串处理的 Path 们泛化成同一个 Pattern，从而减少重复爬取的数目；当然，在安全扫描的场景下我们需要进行尽可能地去重，而在数据爬取的场景下，则往往不需要进行过多的过滤。目前 Cendertron 只是采取了简单的 UTL 归一化算法，并且使用 Set 进行过滤，如果你想了解更复杂的 URL 归一化与聚类算法，可以参考[自然语言处理 https://url.wx-coder.cn/JcINy](https://url.wx-coder.cn/JcINy) 或者[哈希表实战 https://url.wx-coder.cn/WfdWP](https://url.wx-coder.cn/WfdWP) 中的关联章节。

```js
export function hashUrl(url: string): string {
  // 将 URL 进行格式化提取
  const _parsedUrl = parse(url, url, true);

  let urlHash = "";

  if (!_parsedUrl) {
    return urlHash;
  }

  // 提取出 URL 中的各个部分
  const { host, pathname, query, hash } = _parsedUrl;

  // 判断是否存在查询参数
  const queryKeys = Object.keys(query).sort((k1, k2) => (k1 > k2 ? 1 : -1));

  if (queryKeys.length > 0) {
    // 如果存在查询参数，则默认全路径加查询参数进行解析
    urlHash = `${host}#${pathname}#${queryKeys.join("")}`;
  } else {
    // 如果不存在查询参数，则去除 pathname 的最后一位，并且添加进来
    const pathFragments = pathname.split("/");

    // 判断路径是否包含多个项目，如果包含，则将所有疑似 UUID 的替换为 ID
    if (pathFragments.length > 1) {
      urlHash = `${host}#${pathFragments
        .filter(frag => frag.length > 0)
        .map(frag => (maybeUUID(frag) ? "id" : frag))
        .join("")}`;
    } else {
      urlHash = `${host}#${pathname}`;
    }
  }

  if (hash) {
    const hashQueryString = hash.replace("#", "");
    const queryObj = parseQuery(hashQueryString);
    Object.keys(queryObj).forEach(n => {
      if (n) {
        urlHash += n;
      }
    });
  }

  return urlHash;
}
```

## 权限认证

以 DVWA 为例，可以用 Docker 快速开启测试环境：`docker run --rm -it -p 8082:80 vulnerables/web-dvwa`，然后向 `/scrape` 提交 POST 请求：

```json
{
  "url": "http://localhost:8082/vulnerabilities/csrf/",
  "cookies": "tid=xx; PHPSESSID=xx; security=low"
}
```

在 Cendertron 中，其会使用如下方式设置 Cookie：

```js
const puppeteer = require("puppeteer");

let rockIt = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  var cookie = [
    // cookie exported by google chrome plugin editthiscookie
    {
      domain: "httpbin.org",
      expirationDate: 1597288045,
      hostOnly: false,
      httpOnly: false,
      name: "key",
      path: "/",
      sameSite: "no_restriction",
      secure: false,
      session: false,
      storeId: "0",
      value: "value!",
      id: 1
    }
  ];
  await page.setCookie(...cookie);
  await page.goto("https://httpbin.org/headers");
  console.log(await page.content());
  await page.close();
  await browser.close();
};
rockIt();
```

未来也会支持 localStorage 等存储方式：

```js
await page.evaluate(() => {
  localStorage.setItem("token", "example-token");
});
```
