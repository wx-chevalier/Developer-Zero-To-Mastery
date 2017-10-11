"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const md_1 = require("../../util/markdown/md");
const dict_1 = require("../../shared/dict");
const private_1 = require("../../shared/private");
const debug = require('debug')('generateRepoToc');
const fs = require('fs-extra');
const GitHub = require('github-api');
const gh = new GitHub({
    username: private_1.GITHUB_USERNAME,
    password: private_1.GITHUB_PASSWORD
});
// 全局变量，计算当前深度
let currentDepth;
const MAX_DEPTH = 2;
async function generateRepoToc(userName, repository, basePath = '/', useSubHeader = false) {
    // 获取到 Repository 对象
    const repo = gh.getRepo(userName, repository);
    currentDepth = 0;
    const fileTree = await dfsWalkToGenerateFileTree(repo, '/', basePath);
    let toc;
    if (useSubHeader) {
        toc = await generateTocFromFileTreeWithSubHeader(fileTree);
    }
    else {
        toc = await generateTocFromFileTree(fileTree, `https://github.com/${userName}/${repository}/${basePath}`);
    }
    fs.outputFile('toc.md', toc);
}
exports.generateRepoToc = generateRepoToc;
/**
 * 功能：以广度优先方式遍历 Repo，并且生成文件目录树
 * @return {Promise<void>}
 */
async function dfsWalkToGenerateFileTree(repo, dir, path) {
    // 存放本仓库指定路径下的文件内容
    const fileTree = {
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
                h1s: md_1.getH1sFromMDString(content)
            });
        }
        else {
            // 否则递归获取子层级的目录
            fileTree.dirs[blob.name] = await dfsWalkToGenerateFileTree(repo, blob.name, `${path}/${blob.name}`);
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
function generateTocFromFileTree(fileTree, dirAbsolutePathPrefix = '/') {
    let toc = '';
    // 首先处理所有的文件
    for (let file of fileTree.files) {
        // 如果是需要忽略的文件，则直接跳过
        if (dict_1.ignoreFilesOrDirs.includes(file.name)) {
            continue;
        }
        toc += `    - [${file.name}](${file.html_url}):${file.h1s
            .join(', ')
            .replace(/\\n/g, '')} \n`;
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
exports.generateTocFromFileTree = generateTocFromFileTree;
/**
 * 功能：基于仓库内容，生成二级标题的目录，用于 Awesome Reference、Awesome CheatSheet 等系列
 * @param {FileTree} fileTree
 * @return {string} 用于表示目录的字符串
 */
function generateTocFromFileTreeWithSubHeader(fileTree) {
    let toc = '';
    // 首先处理所有的文件
    for (let file of fileTree.files) {
        // 如果是需要忽略的文件，则直接跳过
        if (dict_1.ignoreFilesOrDirs.includes(file.name)) {
            continue;
        }
        toc += `- [${file.name}](${file.html_url}):${file.h1s.join(', ')} \n`;
    }
    for (let dirName in fileTree.dirs) {
        const dir = fileTree.dirs[dirName];
        if (currentDepth == 0) {
            toc += `## ${dirName} \n`;
        }
        else if (currentDepth == 1) {
            toc += `### ${dirName} \n`;
        }
        else {
            toc += `*** \n`;
        }
        // 进入下一级
        currentDepth += 1;
        toc += generateTocFromFileTreeWithSubHeader(dir);
        currentDepth -= 1;
    }
    return toc;
}
exports.generateTocFromFileTreeWithSubHeader = generateTocFromFileTreeWithSubHeader;
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
