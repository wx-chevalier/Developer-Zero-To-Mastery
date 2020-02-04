![](https://camo.githubusercontent.com/ddb37bd59e73e8e19e18c9b88c644b64ab477864/68747470733a2f2f692e706f7374696d672e63632f76484d4a747764342f696d6167652e706e67)

# Cendertron，动态爬虫的滑动验证码绕过策略

在 [Cendertron](https://url.wx-coder.cn/HinPM) 安全动态爬虫系列中我们依次介绍了安全爬虫的设计、爬虫的集群搭建，本篇则是讨论有关于滑动验证码的绕过策略。

本文采用的策略与代码来自 [How to bypass “slider CAPTCHA” with JS and Puppeteer](https://medium.com/@filipvitas/how-to-bypass-slider-captcha-with-js-and-puppeteer-cd5e28105e3c) 一文。

## 爬虫中滑动验证的绕过

验证是常见的反爬虫策略之一，在现在的很多站点中我们会引入滑动验证的方式，来校验访问者的真实性。譬如下面著名的 jQuery 滑动插件：

![](https://i.postimg.cc/wx4830CM/image.png)

在模拟登陆时，我们往往需要绕过这样的滑动验证，而基于 Puppeteer 的动态爬虫也给予了便利；往往我们需要进行以下步骤：移动到滑条中间，按下鼠标，移动鼠标，释放鼠标。

```js
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1366, height: 768 }
  });
  const page = await browser.newPage();

  await page.goto("http://kthornbloom.com/slidetosubmit/");
  await page.type('input[name="name"]', "Puppeteer Bot");
  await page.type('input[name="email"]', "js@automation.com");

  let sliderElement = await page.$(".slide-submit");
  let slider = await sliderElement.boundingBox();

  let sliderHandle = await page.$(".slide-submit-thumb");
  let handle = await sliderHandle.boundingBox();

  await page.mouse.move(
    handle.x + handle.width / 2,
    handle.y + handle.height / 2
  );
  await page.mouse.down();
  await page.mouse.move(handle.x + slider.width, handle.y + handle.height / 2, {
    steps: 10
  });
  await page.mouse.up();

  await page.waitFor(3000);

  // success!

  await browser.close();
}

run();
```

在实际的案例中，我们可以以淘宝的注册界面为例：

```js
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1366, height: 768 }
  });
  const page = await browser.newPage();

  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, "webdriver", {
      get: () => false
    });
  });

  await page.goto("https://world.taobao.com/markets/all/sea/register");

  let frame = page.frames()[1];
  await frame.waitForSelector(".nc_iconfont.btn_slide");

  const sliderElement = await frame.$(".slidetounlock");
  const slider = await sliderElement.boundingBox();

  const sliderHandle = await frame.$(".nc_iconfont.btn_slide");
  const handle = await sliderHandle.boundingBox();
  await page.mouse.move(
    handle.x + handle.width / 2,
    handle.y + handle.height / 2
  );
  await page.mouse.down();
  await page.mouse.move(handle.x + slider.width, handle.y + handle.height / 2, {
    steps: 50
  });
  await page.mouse.up();

  await page.waitFor(3000);

  // success!

  await browser.close();
}

run();
```

![](https://i.postimg.cc/LX4w81vj/image.png)

另一种常见的滑块则是如下这种拼图性质的滑块：

![](https://i.postimg.cc/3NdqgQsR/image.png)

```js
const puppeteer = require("puppeteer");
const Rembrandt = require("rembrandt");

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1366, height: 768 }
  });
  const page = await browser.newPage();

  let originalImage = "";

  await page.setRequestInterception(true);
  page.on("request", request => request.continue());
  page.on("response", async response => {
    if (response.request().resourceType() === "image")
      originalImage = await response.buffer().catch(() => {});
  });

  await page.goto("https://monoplasty.github.io/vue-monoplasty-slide-verify/");

  const sliderElement = await page.$(".slide-verify-slider");
  const slider = await sliderElement.boundingBox();

  const sliderHandle = await page.$(".slide-verify-slider-mask-item");
  const handle = await sliderHandle.boundingBox();

  let currentPosition = 0;
  let bestSlider = {
    position: 0,
    difference: 100
  };

  await page.mouse.move(
    handle.x + handle.width / 2,
    handle.y + handle.height / 2
  );
  await page.mouse.down();

  while (currentPosition < slider.width - handle.width / 2) {
    await page.mouse.move(
      handle.x + currentPosition,
      handle.y + handle.height / 2 + Math.random() * 10 - 5
    );

    let sliderContainer = await page.$(".slide-verify");
    let sliderImage = await sliderContainer.screenshot();

    const rembrandt = new Rembrandt({
      imageA: originalImage,
      imageB: sliderImage,
      thresholdType: Rembrandt.THRESHOLD_PERCENT
    });

    let result = await rembrandt.compare();
    let difference = result.percentageDifference * 100;

    if (difference < bestSlider.difference) {
      bestSlider.difference = difference;
      bestSlider.position = currentPosition;
    }

    currentPosition += 5;
  }

  await page.mouse.move(
    handle.x + bestSlider.position,
    handle.y + handle.height / 2,
    { steps: 10 }
  );
  await page.mouse.up();

  await page.waitFor(3000);

  // success!

  await browser.close();
}

run();
```

这里我们采用了简单的图片对比的方式，即在滑动过程中，如果发现了有符合阈值的差异，则认为是已经滑动成功。

## Spider 配置

在 [Cendertron](https://github.com/wx-chevalier/Chaos-Scanner/tree/master/cendertron) 中，提供了一类特殊的 Slider Captcha Monkey，在传入的 SpiderOption 中添加如下参数即可：

```ts
export interface SpiderOption {
  allowRedirect: boolean;
  depth: number;
  // 页面插件
  monkies?: {
    sliderCaptcha: {
      sliderElementSelector: string;
      sliderHandleSelector: string;
    };
  };
}
```

# 延伸阅读

您可以通过以下任一方式阅读笔者的系列文章，涵盖了技术资料归纳、编程语言与理论、Web 与大前端、服务端开发与基础架构、云计算与大数据、数据科学与人工智能、产品设计等多个领域：

- 在 Gitbook 中在线浏览，每个系列对应各自的 Gitbook 仓库。

| [Awesome Lists](https://ngte-al.gitbook.io/i/) | [Awesome CheatSheets](https://ngte-ac.gitbook.io/i/) | [Awesome Interviews](https://github.com/wx-chevalier/Awesome-Interviews) | [Awesome RoadMaps](https://github.com/wx-chevalier/Awesome-RoadMaps) | [Awesome MindMaps](https://github.com/wx-chevalier/Awesome-MindMaps) | [Awesome-CS-Books](https://github.com/wx-chevalier/Awesome-CS-Books) |
| ---------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |


| [编程语言理论](https://ngte-pl.gitbook.io/i/) | [Java 实战](https://ngte-pl.gitbook.io/i/go/go) | [JavaScript 实战](https://github.com/wx-chevalier/JavaScript-Series) | [Go 实战](https://ngte-pl.gitbook.io/i/go/go) | [Python 实战](https://ngte-pl.gitbook.io/i/python/python) | [Rust 实战](https://ngte-pl.gitbook.io/i/rust/rust) |
| --------------------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------- |


| [软件工程、数据结构与算法、设计模式、软件架构](https://ng-tech.icu/SoftwareEngineering-Series/) | [现代 Web 全栈开发与工程架构](https://ngte-web.gitbook.io/i/) | [大前端混合开发与数据可视化](https://ngte-fe.gitbook.io/i/) | [服务端开发实践与工程架构](https://ng-tech.icu/Backend-Series/#/) | [分布式基础架构](https://ng-tech.icu/DistributedSystem-Series/#/) | [数据科学，人工智能与深度学习](https://ng-tech.icu/AI-Series/#/) | [产品设计与用户体验](https://ng-tech.icu/Product-Series/#/) |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------- |

