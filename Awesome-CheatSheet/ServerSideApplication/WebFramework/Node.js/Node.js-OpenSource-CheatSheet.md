[![返回目录](https://parg.co/UCb)](https://parg.co/UCH) 
 
 
> 本文翻译自 David Gilbertson 的[19-things-i-learnt-reading-the-nodejs-docs](https://hackernoon.com/19-things-i-learnt-reading-the-nodejs-docs-8a2dcc7f307f#.1twxqa1tm) 本文从属于笔者的[Web 开发入门与最佳实践](https://github.com/wxyyxc1992/Web-Develop-Introduction-And-Best-Practices)中[NodeJS 入门与最佳实践](https://github.com/wxyyxc1992/Web-Develop-Introduction-And-Best-Practices/tree/master/Server/NodeJS)系列文章。

虽然我已经用了三年多的 NodeJS，也曾经以为自己对其无所不知。但是我好像从未有安静的坐下来仔细地阅读 NodeJS 的完整文档。如果有熟悉我的朋友应该知道，我之前已经看了 HTML，DOM，Web APIs，CSS，SVG 以及 ECMAScript 的文档，NodeJS 是我这个系列的最后一个待翻阅的山峰。在阅读文档的过程中我也发现了很多本来不知道的知识，我觉得我有必要分享给大家。不过文档更多的是平铺直叙，因此我也以阅读的顺序列举出我觉得需要了解的点。

# [querystring:可以用作通用解析器的模块](https://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options)

很多时候我们会从数据库或其他地方得到这种奇怪格式的字符串:`name:Sophie;shape:fox;condition:new`，一般来说我们会利用字符串切割的方式来讲字符串划分到 JavaScript Object。不过`querystring`也是个不错的现成的工具:

```
const weirdoString = `name:Sophie;shape:fox;condition:new`;
const result = querystring.parse(weirdoString, `;`, `:`);
// result:
// {
//   name: `Sophie`,
//   shape: `fox`,
//   condition: `new`,
// };
```

# [V8 Inspector](https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js)

以`--inspect`参数运行你的 Node 应用程序，它会反馈你某个 URL。将该 URL 复制到 Chrome 中并打开，你就可以使用 Chrome DevTools 来调试你的 Node 应用程序啦。详细的实验可以参考[这篇文章](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27#.evhku718w)。不过需要注意的是，该参数仍然属于实验性质。 ![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2016/11/2/1-iHurZ1VUsM54zGjZJHqexQ.png)

# [nextTick 与 setImmediate 的区别](https://nodejs.org/api/timers.html#timers_setimmediate_callback_args)

这两货的区别可能光从名字上还看不出来，我觉得应该给它们取个别名:

* `process.nextTick()`应该为`process.sendThisToTheStartOfTheQueue()`
* `setImmediate`应该为`sendThisToTheEndOfTheQueue()`

再说句不相关的，React 中的 Props 应该为`stuffThatShouldStayTheSameIfTheUserRefreshes`，而 State 应该为`stuffThatShouldBeForgottenIfTheUserRefreshes`。

# [Server.listen 可以使用 Object 作为参数](https://nodejs.org/api/net.html#net_net_createserver_options_connectionlistener)

我更喜欢命名参数的方式调用函数，这样相较于仅按照顺序的无命名参数法会更直观。别忘了 Server.listen 也可以使用某个 Object 作为参数:

```
require(`http`)
  .createServer()
  .listen({
    port: 8080,
    host: `localhost`,
  })
  .on(`request`, (req, res) => {
    res.end(`Hello World!`);
  });
```

不过这个特性不是表述在[http.Server](https://nodejs.org/api/http.html#http_class_http_server)这个 API 中，而是在其父级[net.Server](https://nodejs.org/api/net.html#net_server_listen_options_callback)的文档中。

# [相对地址](https://nodejs.org/api/fs.html#fs_file_system)

你传入`fs`模块的距离可以是相对地址，即相对于`process.cwd()`。估计有些人早就知道了，不过我之前一直以为是只能使用绝对地址:

```
const fs = require(`fs`);
const path = require(`path`);
// why have I always done this...
fs.readFile(path.join(__dirname, `myFile.txt`), (err, data) => {
  // do something
});
// when I could just do this?
fs.readFile(`./path/to/myFile.txt`, (err, data) => {
  // do something
});
```

# [Path Parsing](https://nodejs.org/api/path.html#path_path_parse_path):路径解析

之前我一直不知道的某个功能就是从某个文件名中解析出路径，文件名，文件扩展等等:

```
myFilePath = `/someDir/someFile.json`;
path.parse(myFilePath).base === `someFile.json`; // true
path.parse(myFilePath).name === `someFile`; // true
path.parse(myFilePath).ext === `.json`; // true
```

# [Logging with colors](https://nodejs.org/api/console.html#console_console_dir_obj_options)

别忘了`console.dir(obj,{colors:true})`能够以不同的色彩打印出键与值，这一点会大大增加日志的可读性。

# [使用 setInterval 执行定时任务](https://nodejs.org/api/timers.html#timers_timeout_unref)

我喜欢使用`setInterval`来定期执行数据库清理任务，不过默认情况下在存在`setInterval`的时候 NodeJS 并不会退出，你可以使用如下的方法让 Node 沉睡:

```
const dailyCleanup = setInterval(() => {
  cleanup();
}, 1000 * 60 * 60 * 24);
dailyCleanup.unref();
```

# Use Signal Constants

如果你尝试在 NodeJS 中杀死某个进程，估计你用过如下语法:

```
process.kill(process.pid, `SIGTERM`);
```

这个没啥问题，不过既然第二个参数同时能够使用字符串与整形变量，那么还不如使用全局变量呢:

```
process.kill(process.pid, os.constants.signals.SIGTERM);
```

# [IP Address Validation](https://nodejs.org/api/net.html#net_net_isip_input)

NodeJS 中含有内置的 IP 地址校验工具，这一点可以免得你写额外的正则表达式:

```
require(`net`).isIP(`10.0.0.1`) 返回 4
require(`net`).isIP(`cats`) 返回 0
```

# [os.EOF](https://nodejs.org/api/os.html#os_os_eol)

不知道你有没有手写过行结束符，看上去可不漂亮啊。NodeJS 内置了`os.EOF`，其在 Windows 下是`\r\n`，其他地方是`\n`，[使用 os.EOL](https://github.com/sasstools/sass-lint/pull/92/files)能够让你的代码在不同的操作系统上保证一致性:

```
const fs = require(`fs`);
// bad
fs.readFile(`./myFile.txt`, `utf8`, (err, data) => {
  data.split(`\r\n`).forEach(line => {
    // do something
  });
});
// good
const os = require(`os`);
fs.readFile(`./myFile.txt`, `utf8`, (err, data) => {
  data.split(os.EOL).forEach(line => {
    // do something
  });
});
```

# [HTTP 状态码](https://nodejs.org/api/http.html#http_http_status_codes)

NodeJS 帮我们内置了 HTTP 状态码及其描述，也就是`http.STATUS_CODES`，键为状态值，值为描述: ![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2016/11/2/1-68Kp8_XfEM3gUoS__WGx9Q.png) 你可以按照如下方法使用:

```
someResponse.code === 301; // true
require(`http`).STATUS_CODES[someResponse.code] === `Moved Permanently`; // true
```

# [避免异常崩溃](https://nodejs.org/api/process.html#process_event_uncaughtexception)

有时候碰到如下这种导致服务端崩溃的情况还是挺无奈的:

```
const jsonData = getDataFromSomeApi(); // But oh no, bad data!
const data = JSON.parse(jsonData); // Loud crashing noise.
```

我为了避免这种情况，在全局加上了一个:

```
process.on(`uncaughtException`, console.error);
```

当然，这种办法绝不是[最佳实践](https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly)，如果是在大型项目中我还是会使用[PM2](http://pm2.keymetrics.io/)，然后将所有可能崩溃的代码加入到`try...catch`中。

# [Just this once()](https://nodejs.org/api/events.html#events_emitter_once_eventname_listener)

除了`on`方法，`once`方法也适用于所有的 EventEmitters，希望我不是最后才知道这个的:

```
server.once(`request`, (req, res) => res.end(`No more from me.`));
```

# [Custom Console](https://nodejs.org/api/console.html#console_new_console_stdout_stderr)

你可以使用`new console.Console(standardOut,errorOut)`，然后设置自定义的输出流。你可以选择创建 console 将数据输出到文件或者 Socket 或者第三方中。

# [DNS lookup](https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback)

某个年轻人告诉我，Node[并不会缓存 DNS 查询信息](https://github.com/nodejs/node/issues/5893)，因此你在使用 URL 之后要等个几毫秒才能获取到数据。不过其实你可以使用`dns.lookup()`来缓存数据:

```
dns.lookup(`www.myApi.com`, 4, (err, address) => {
  cacheThisForLater(address);
});
```

# [fs 在不同 OS 上有一定差异](https://nodejs.org/api/fs.html)

* `fs.stats()`返回的对象中的`mode`属性在 Windows 与其他操作系统中存在差异。

* `fs.lchmod()`仅在 macOS 中有效。

* 仅在 Windows 中支持调用`fs.symlink()`时使用`type`参数。

* 仅仅在 macOS 与 Windows 中调用`fs.watch()`时传入`recursive`选项。

* 在 Linux 与 Windows 中`fs.watch()`的回调可以传入某个文件名

* 使用`fs.open()`以及`a+`属性打开某个目录时仅仅在 FreeBSD 以及 Windows 上起作用，在 macOS 以及 Linux 上则存在问题。

* 在 Linux 下以追加模式打开某个文件时，传入到`fs.write()`的`position`参数会被忽略。

# [net 模块差不多比 http 快上两倍](https://nodejs.org/api/net.html)

笔者在文档中看到一些关于二者性能的讨论，还特地运行了两个服务器来进行真实比较。结果来看`http.Server`大概每秒可以接入 3400 个请求，而`net.Server`可以接入大概 5500 个请求。

```
// This makes two connections, one to a tcp server, one to an http server (both in server.js)
// It fires off a bunch of connections and times the response

// Both send strings.

const net = require(`net`);
const http = require(`http`);

function parseIncomingMessage(res) {
  return new Promise((resolve) => {
    let data = ``;

    res.on(`data`, (chunk) => {
      data += chunk;
    });

    res.on(`end`, () => resolve(data));
  });
}

const testLimit = 5000;


/*  ------------------  */
/*  --  NET client  --  */
/*  ------------------  */
function testNetClient() {
  const netTest = {
    startTime: process.hrtime(),
    responseCount: 0,
    testCount: 0,
    payloadData: {
      type: `millipede`,
      feet: 100,
      test: 0,
    },
  };

  function handleSocketConnect() {
    netTest.payloadData.test++;
    netTest.payloadData.feet++;

    const payload = JSON.stringify(netTest.payloadData);

    this.end(payload, `utf8`);
  }

  function handleSocketData() {
    netTest.responseCount++;

    if (netTest.responseCount === testLimit) {
      const hrDiff = process.hrtime(netTest.startTime);
      const elapsedTime = hrDiff[0] * 1e3 + hrDiff[1] / 1e6;
      const requestsPerSecond = (testLimit / (elapsedTime / 1000)).toLocaleString();

      console.info(`net.Server handled an average of ${requestsPerSecond} requests per second.`);
    }
  }

  while (netTest.testCount < testLimit) {
    netTest.testCount++;
    const socket = net.connect(8888, handleSocketConnect);
    socket.on(`data`, handleSocketData);
  }
}


/*  -------------------  */
/*  --  HTTP client  --  */
/*  -------------------  */
function testHttpClient() {
  const httpTest = {
    startTime: process.hrtime(),
    responseCount: 0,
    testCount: 0,
  };

  const payloadData = {
    type: `centipede`,
    feet: 100,
    test: 0,
  };

  const options = {
    hostname: `localhost`,
    port: 8080,
    method: `POST`,
    headers: {
      'Content-Type': `application/x-www-form-urlencoded`,
    },
  };

  function handleResponse(res) {
    parseIncomingMessage(res).then(() => {
      httpTest.responseCount++;

      if (httpTest.responseCount === testLimit) {
        const hrDiff = process.hrtime(httpTest.startTime);
        const elapsedTime = hrDiff[0] * 1e3 + hrDiff[1] / 1e6;
        const requestsPerSecond = (testLimit / (elapsedTime / 1000)).toLocaleString();

        console.info(`http.Server handled an average of ${requestsPerSecond} requests per second.`);
      }
    });
  }

  while (httpTest.testCount < testLimit) {
    httpTest.testCount++;
    payloadData.test = httpTest.testCount;
    payloadData.feet++;

    const payload = JSON.stringify(payloadData);

    options[`Content-Length`] = Buffer.byteLength(payload);

    const req = http.request(options, handleResponse);
    req.end(payload);
  }
}

/*  --  Start tests  --  */
// flip these occasionally to ensure there's no bias based on order
setTimeout(() => {
  console.info(`Starting testNetClient()`);
  testNetClient();
}, 50);

setTimeout(() => {
  console.info(`Starting testHttpClient()`);
  testHttpClient();
}, 2000);
```

```
// This sets up two servers. A TCP and an HTTP one.
// For each response, it parses the received string as JSON, converts that object and returns a string
const net = require(`net`);
const http = require(`http`);

function renderAnimalString(jsonString) {
  const data = JSON.parse(jsonString);
  return `${data.test}: your are a ${data.type} and you have ${data.feet} feet.`;
}


/*  ------------------  */
/*  --  NET server  --  */
/*  ------------------  */

net
  .createServer((socket) => {
    socket.on(`data`, (jsonString) => {
      socket.end(renderAnimalString(jsonString));
    });
  })
  .listen(8888);


/*  -------------------  */
/*  --  HTTP server  --  */
/*  -------------------  */

function parseIncomingMessage(res) {
  return new Promise((resolve) => {
    let data = ``;

    res.on(`data`, (chunk) => {
      data += chunk;
    });

    res.on(`end`, () => resolve(data));
  });
}

http
  .createServer()
  .listen(8080)
  .on(`request`, (req, res) => {
    parseIncomingMessage(req).then((jsonString) => {
      res.end(renderAnimalString(jsonString));
    });
  });
```

# [REPL tricks](https://nodejs.org/api/repl.html)

* 如果你是在 REPL 模式下，就是直接输入 node 然后进入交互状态的模式。你可以直接输入`.load someFile.js`然后可以载入包含自定义常量的文件。

* 可以通过设置`NODE_REPL_HISTORY=""`来避免将日志写入到文件中。

* `_`用来记录最后一个计算值。

* 在 REPL 启动之后，所有的模块都已经直接加载成功。可以使用`os.arch()`而不是`require(`os`).arch()`来使用。
