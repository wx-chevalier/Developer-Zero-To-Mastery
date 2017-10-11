import { FileDescriptor, FileTree } from './interface';
import { getH1sFromMDString } from '../../util/markdown/md';
import { ignoreFilesOrDirs } from '../../shared/dict';
import { GITHUB_PASSWORD, GITHUB_USERNAME } from '../../shared/private';

const debug = require('debug')('generateRepoToc');
const fs = require('fs-extra');

const GitHub = require('github-api');

const gh = new GitHub({
  username: GITHUB_USERNAME,
  password: GITHUB_PASSWORD
});

// 全局变量，计算当前深度
let currentDepth;

const MAX_DEPTH = 2;

let handledNum = 0;

export async function generateRepoToc(
  userName,
  repository,
  basePath = '/',
  useSubHeader = false
) {
  // 获取到 Repository 对象
  const repo = gh.getRepo(userName, repository);

  currentDepth = 0;

  const fileTree = await dfsWalkToGenerateFileTree(repo, '/', basePath);

  let toc;

  if (useSubHeader) {
    toc = await generateTocFromFileTreeWithSubHeader(fileTree);
  } else {
    toc = await generateTocFromFileTree(
      fileTree,
      `https://github.com/${userName}/${repository}/${basePath}`
    );
  }

  fs.outputFile('toc.md', toc);
}

/**
 * Description 格式化显示文件
 * @param {FileDescriptor} file
 * @return {string}
 */
const formatToc = (file: FileDescriptor) => {
  return `- [${file.name.replace('.md', '')}](${file.html_url}): ${file
    .h1s[0] || ''} \n`;
};

/**
 * 功能：以广度优先方式遍历 Repo，并且生成文件目录树
 * @return {Promise<void>}
 */
async function dfsWalkToGenerateFileTree(repo, dir, path) {
  // 存放本仓库指定路径下的文件内容
  const fileTree: FileTree = {
    dirs: {},
    files: []
  };

  // 递归获取到所有的内容
  let { data: blobs } = await repo.getContents('master', path, true);

  for (let blob of blobs) {
    // 如果当前类型为文件，则直接添加到文件树中
    if (blob.type === 'file') {
      // 抓取文件内容
      const content = (await repo.getBlob(blob.sha)).data;

      fileTree.files.push({
        // 相对路径
        path: blob.path,

        // 文件名
        name: blob.name,

        // 文件链接
        html_url: blob.html_url,

        // 文件内的一级目录
        h1s: getH1sFromMDString(content)
      });

      console.log(`已处理文件数：${handledNum++}`);
    } else {
      // 否则递归获取子层级的目录
      fileTree.dirs[blob.name] = await dfsWalkToGenerateFileTree(
        repo,
        blob.name,
        `${path}/${blob.name}`
      );
    }
  }

  return fileTree;
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

  for (let dirName in fileTree.dirs) {
    const dir = fileTree.dirs[dirName];

    toc += `- [${dirName}](${dirAbsolutePathPrefix +
      '/' +
      dirName +
      '/Index.md'}) \n`;

    toc += generateTocFromFileTree(dir, dirAbsolutePathPrefix);
  }

  return toc;
}

/**
 * 功能：基于仓库内容，生成二级标题的目录，用于 Awesome Reference、Awesome CheatSheet 等系列
 * @param {FileTree} fileTree
 * @return {string} 用于表示目录的字符串
 */
export function generateTocFromFileTreeWithSubHeader(
  fileTree: FileTree
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

    toc += generateTocFromFileTreeWithSubHeader(dir);

    currentDepth -= 1;
  }

  return toc;
}

// generateRepoToc(
//   'wxyyxc1992',
//   'Coder-Knowledge-Management',
//   'Awesome-Reference'
// ).then(() => {});

// generateRepoToc(
//   'wxyyxc1992',
//   'Domain-of-ProgrammingLanguage',
//   'Java/Modern-Java-Development-Foundation'
// ).then(() => {});
