"use strict";
import { generateFileTree } from '../fs/file';

const program = require("commander");

program
  .version("0.0.1")
  .option("-u --url [url]", "系列所属 URL 地址")
  .option("-p, --parentDirectory [parentDirectory]", "文件夹目录，默认为当前目录", __dirname)
  .option("-l, --language [language]", "指定生成的语言版本 [zh/en]", "zh")
  .option("-t, --target [target]", "指定生成的目标：aw, book", "aw")
  .parse(process.argv);

const {
  url,
  parentDirectory,
  language,
  target
}: {
  url?: string;
  parentDirectory: string;
  language: string;
  target: string;
} = program;

if (!url) {
  throw new Error("必须指定系列所属 URL 地址");
}

generateFileTree(parentDirectory).then(
  fileTree => {
    console.log(
      fileTree["dirs"]["Coder-Essentials"]["dirs"]["AlgoDS"]["files"]
    );
  },
  error => {
    console.log(error);
  }
);
