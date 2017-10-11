"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const markdownToc = require('markdown-toc');
const automation_1 = require("../service/wiz/automation");
const api_1 = require("../service/wiz/api");
const basePath = '/tmp';
const wizCatalogue = '/Workbench/Coder-Knowledge-Management/Awesome-Reference/';
puppeteer.launch({ headless: false }).then(async (browser) => {
    //执行登陆操作，并且获取页面
    const page = await automation_1.login(browser);
    // 设置基本方法
    api_1.setUp(page);
    // 抓取全部的目录列表
    let { result: dirs } = await page.evaluate(async () => {
        return await window['get']('/ks/category/all/62f7d6c2-7c7c-4804-aa61-bb561897ba12');
    });
    // 遍历所有的目录
    // console.log(dirs);
    for (let dir of dirs) {
        if (!dir.startsWith(wizCatalogue)) {
            continue;
        }
        // 依次遍历目录下的笔记
        let notes = await page.evaluate(async (category) => {
            let { result: rawNotes } = await window['get']('/ks/note/list/category/62f7d6c2-7c7c-4804-aa61-bb561897ba12', {
                category,
                withAbstract: false,
                start: 0,
                count: 200,
                orderBy: 'modified',
                ascending: 'desc'
            });
            let notes = [];
            for (let rawNote of rawNotes) {
                let note = await window['get'](`/ks/note/download/62f7d6c2-7c7c-4804-aa61-bb561897ba12/${rawNote.docGuid}`, {
                    downloadInfo: 1,
                    downloadData: 1
                });
                note.html = window['extractContent'](note.html, 'nsplit').replace(/nsplit/g, '\n');
                notes.push(note);
            }
            return notes;
        }, dir);
        for (let note of notes) {
            const file = `${basePath}${dir}${note.info.title}`;
            // 移除文件首部的 [toc]
            note.html = note.html.replace('[toc]', '');
            // 生成 MarkDown 文件目录
            const toc = markdownToc(note.html).content;
            // 插入统一的文件头
            const header = `${toc} \n\n`;
            // 将笔记写入到指定目录
            note.html = header + note.html;
            fs.outputFile(file, note.html);
        }
    }
});
