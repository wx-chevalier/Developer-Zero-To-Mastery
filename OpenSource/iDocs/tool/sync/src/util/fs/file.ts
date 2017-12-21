import { ignoreFilesOrDirs } from '../../shared/dict';
import { formatToc } from '../markdown/md';
import { FileTree } from './interface';

const walkSync = require('walk-sync');
const readline = require('readline');
const fs = require('fs');
const debug = require('debug')('file');

/**
 * 
 * 功能：开始遍历指定目录
 * @export
 * @param {string} parentDirectory 
 * @returns 
 */
export async function generateFileTree(parentDirectory: string) {
  const fileTree: FileTree = {
    dirs: {},
    files: [],
  };

  const paths: string[] = walkSync(parentDirectory);

  for (let path of paths) {
    let segments: string[] = path.split('/');

    let obj: FileTree = fileTree;

    // 遍历每一段路径
    for (let segment of segments) {
      if (segment.endsWith('.md')) {
        // 这里的 segment 等价于文件名
        let h1s: string[] = await readMarkdownHeadersFromFile(
          parentDirectory + '/' + path,
          segment
        );

        obj.files.push({
          path,
          name: segment,
          h1s,
          html_url: `./${path}`,
        });
      } else {
        // 如果是文件目录，则创建新的结点
        if (ignoreFilesOrDirs.includes(segment)) {
          continue;
        }

        // 如果当前树中不存在结点，则创建空结点
        if (!obj.hasOwnProperty('dirs')) {
          obj['dirs'] = {};
        }

        // 判断是否存在目录结点
        if (!obj['dirs'][segment]) {
          obj['dirs'][segment] = {
            dirs: {},
            files: [],
          };
        }

        // 将子字典赋值给当前对象
        obj = obj['dirs'][segment];
      }
    }
  }

  return fileTree;
}

export function readMarkdownHeadersFromFile(
  path: string,
  fileName: string
): Promise<string[]> {
  return new Promise((resolve, reject) => {
    let headers: string[] = [];

    const rl = readline.createInterface({
      input: fs.createReadStream(path),
    });

    rl.on('line', (line: string) => {
      if (line.startsWith('# ')) {
        headers.push(line.replace('# ', ''));
      }
    });

    rl.on('close', function(_: string) {
      resolve(headers);
    });

    rl.on('error', function(error: Error) {
      reject(error);
    });
  });
}

/**
 * 功能：生成二级列表形式目录，用于所有书籍系列
 * @param {FileTree} fileTree
 * @param dirAbsolutePathPrefix
 * @return {string}
 */
export function generateTocFromFileTree(
  fileTree: FileTree,
  dirAbsolutePathPrefix = '/'
): string {
  let toc = '';

  // 首先处理所有的文件
  for (let file of fileTree.files) {
    // 如果是需要忽略的文件，则直接跳过
    if (ignoreFilesOrDirs.includes(file.name)) {
      continue;
    }

    toc += `    ${formatToc(file)}`;
  }

  // 遍历当前目录下的所有文件夹
  for (let dirName in fileTree.dirs) {
    const dir = fileTree.dirs[dirName];

    toc += `- [${dirName}](${dirAbsolutePathPrefix +
      '/' +
      encodeURIComponent(dirName) +
      '/Index.md'}) \n`;

    toc += generateTocFromFileTree(dir, dirAbsolutePathPrefix);
  }

  return toc;
}

/**
 * 功能：基于仓库内容，生成二级标题的目录，用于 Awesome Reference、Awesome CheatSheet 等系列
 * @param {FileTree} fileTree
 * @param currentDepth
 * @return {string} 用于表示目录的字符串
 */
export function generateTocFromFileTreeWithSubHeader(
  fileTree: FileTree,
  currentDepth: number
): string {
  let toc = '';

  // 首先处理所有的文件
  for (let file of fileTree.files) {
    // 如果是需要忽略的文件，则直接跳过
    if (ignoreFilesOrDirs.includes(file.name)) {
      continue;
    }

    toc += `${formatToc(file)}`;
  }

  for (let dirName in fileTree.dirs) {
    const dir = fileTree.dirs[dirName];

    if (currentDepth == 0) {
      toc += `## ${dirName} \n`;
    } else if (currentDepth == 1) {
      toc += `### ${dirName} \n`;
    } else {
      toc += `*** \n`;
    }

    // 进入下一级
    currentDepth += 1;

    toc += generateTocFromFileTreeWithSubHeader(dir, currentDepth);

    currentDepth -= 1;
  }

  return toc;
}
