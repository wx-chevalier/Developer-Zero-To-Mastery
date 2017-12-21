import { FileDescriptor, FileTree } from '../../util/fs/interface';
import { getH1sFromMDString } from '../../util/markdown/md';
import { ignoreFilesOrDirs } from '../../shared/dict';
import { GITHUB_PASSWORD, GITHUB_USERNAME } from '../../shared/private';
import {
  generateTocFromFileTree,
  generateTocFromFileTreeWithSubHeader,
} from '../../util/fs/file';

const fs = require('fs-extra');

const GitHub = require('github-api');

const gh = new GitHub({
  username: GITHUB_USERNAME,
  password: GITHUB_PASSWORD,
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
    toc = await generateTocFromFileTreeWithSubHeader(fileTree, currentDepth);
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
  return `\n - [${file.name.replace('.md', '')}](${file.html_url}): ${file
    .h1s[0] || ''} \n\n`;
};

/**
 * 功能：以广度优先方式遍历 Repo，并且生成文件目录树
 * @return {Promise<void>}
 */
async function dfsWalkToGenerateFileTree(repo, dir, path) {
  // 存放本仓库指定路径下的文件内容
  const fileTree: FileTree = {
    dirs: {},
    files: [],
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
        h1s: getH1sFromMDString(content),
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
