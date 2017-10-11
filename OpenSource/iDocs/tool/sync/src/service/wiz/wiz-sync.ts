const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const markdownToc = require('markdown-toc');
import repos from '../../shared/repo-config';
import { login } from './automation';
import { setUp } from './api';

/**
 * Description 将为知笔记中的内容同步到指定目录
 * @param {string} basePath
 * @param {string} repoName
 */
export function wizSync(basePath = '/tmp', repoName = 'Awesome-Reference') {
  // 获得到仓库名
  const repo = repos[repoName];

  // 获得到为知笔记对应的路径
  const wizCatalogue = repo.wizCatalogue;

  puppeteer.launch({ headless: false }).then(async browser => {
    //执行登陆操作，并且获取页面
    const page = await login(browser);

    // 设置基本方法
    setUp(page);

    // 抓取全部的目录列表
    let { result: dirs } = await page.evaluate(async () => {
      return await window['get'](
        '/ks/category/all/62f7d6c2-7c7c-4804-aa61-bb561897ba12'
      );
    });

    // 遍历所有的目录
    // console.log(dirs);

    let noteNum = 0;

    for (let dir of dirs) {
      // 这里的文件夹就是为知笔记目录
      if (!dir.startsWith(wizCatalogue)) {
        continue;
      }

      // 依次遍历目录下的笔记
      let notes = await page.evaluate(async category => {
        let { result: rawNotes } = await window[
          'get'
        ]('/ks/note/list/category/62f7d6c2-7c7c-4804-aa61-bb561897ba12', {
          category,
          withAbstract: false,
          start: 0,
          count: 200,
          orderBy: 'modified',
          ascending: 'desc'
        });

        let notes = [];

        for (let rawNote of rawNotes) {
          let note = await window[
            'get'
          ](
            `/ks/note/download/62f7d6c2-7c7c-4804-aa61-bb561897ba12/${rawNote.docGuid}`,
            {
              downloadInfo: 1,
              downloadData: 1
            }
          );

          note.html = window['extractContent'](note.html, 'nsplit')
            .replace(/nsplit/g, '\n')
            .replace(/\-\s\[/g, '\n- [');

          notes.push(note);
        }

        return notes;
      }, dir);

      noteNum += notes.length;

      // 遍历所有的目录
      for (let note of notes) {
        const file = `${basePath}${dir}${note.info.title}`;

        // 移除文件首部的 [toc]
        note.html = note.html.replace('[toc]', '');

        // 生成 MarkDown 文件目录
        const toc = markdownToc(note.html).content;

        // 插入统一的文件头
        const header = `[![章节头](${repo.chapterHeader})](${repo.sUrl}) \n ${toc} \n\n`;

        if (note.info.title != 'README.md') {
          // 将笔记写入到指定目录
          note.html = header + note.html;
        }

        fs.outputFile(file, note.html);
      }

      console.log(`已处理笔记数：${noteNum}`);
    }

    console.log(`总处理笔记数：${noteNum}`);

    browser.close();
  });
}
