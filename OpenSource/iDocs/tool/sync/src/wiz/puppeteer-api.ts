import { PASSWORD, USERNAME } from '../private';

const puppeteer = require("puppeteer");
const fs = require("fs-extra");

export const login = async (browser: any) => {
  // DOM 元素选择器
  const USERNAME_SELECTOR = "#login-wizID";
  const PASSWORD_SELECTOR = "#login-password";
  const BUTTON_SELECTOR = "#loginbtn";

  const page = await browser.newPage();

  // 等待打开登录界面执行登陆操作
  await page.goto("https://note.wiz.cn/login?p=login");

  await page.click(USERNAME_SELECTOR);
  await page.type(USERNAME);

  await page.click(PASSWORD_SELECTOR);
  await page.type(PASSWORD);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();

  return page;
};

export const setUp = page => {
  page.evaluate(() => {
    const Host = "https://note.wiz.cn";

    /**
       * Description 通用抓取函数
       * @param {string} path
       * @param queryParams
       * @return {Promise<T>}
       */
    function get(path, queryParams = {}) {
      const finalQueryParams = Object.assign(
        {},
        {
          lang: "zh-cn",
          client_type: "web2.0",
          api_version: "10",
          _: Date.now()
        },
        queryParams
      );

      let queryString = "";

      for (let queryKey in finalQueryParams) {
        queryString += `${queryKey}=${encodeURIComponent(
          finalQueryParams[queryKey]
        )}&`;
      }

      queryString = queryString.substring(0, queryString.length - 1);

      return fetch(`${Host}${path}?${queryString}`, {
        credentials: "include"
      })
        .then(response => {
          return response.json();
        })
        .catch(error => {
          console.error(error);
        });
    }

    window["get"] = get;
  });
};

puppeteer.launch({ headless: false }).then(async browser => {
  //执行登陆操作，并且获取页面
  const page = await login(browser);

  // 设置基本方法
  setUp(page);

  // 抓取全部的目录列表
  let { result: dirs } = await page.evaluate(async () => {
    return await window["get"](
      "/ks/category/all/62f7d6c2-7c7c-4804-aa61-bb561897ba12"
    );
  });

  const category = "/Workbench/Coder-Knowledge-Management/Awesome-Reference/";

  // 依次遍历目录下的笔记
  let notes = await page.evaluate(async category => {
    let { result: rawNotes } = await window[
      "get"
    ]("/ks/note/list/category/62f7d6c2-7c7c-4804-aa61-bb561897ba12", {
      category,
      withAbstract: false,
      start: 0,
      count: 200,
      orderBy: "modified",
      ascending: "desc"
    });

    let notes = [];

    for (let rawNote of rawNotes) {
      let note = await window[
        "get"
      ](
        `/ks/note/download/62f7d6c2-7c7c-4804-aa61-bb561897ba12/${rawNote.docGuid}`,
        {
          downloadInfo: 1,
          downloadData: 1
        }
      );

      /**
       * 从原始的 HTML 中提取出内容
       * @param rawHTML 
       */
      function extractContent(rawHTML) {
        var container = document.createElement("div");

        container.innerHTML = rawHTML.replace(/<br>/g, "<span>nsplit</span>");

        document.body.appendChild(container);

        return container.querySelector("div").textContent;
      }

      note.html = extractContent(note.html).replace(/nsplit/g, "\n");

      notes.push(note);
    }

    return notes;
  }, category);

  console.log(notes);

  // 将笔记写入到指定目录
  for (let note of notes) {
    const file = `/tmp${category}${note.info.title}`;
    fs.ensureFileSync(file);
    fs.writeFileSync(file, note.html);
  }
});
