const walkSync = require('walk-sync');
const { promisify } = require('util');
const fs = require('fs-extra');
const readFileAsync = promisify(fs.readFile);

import { default as repos, ReposityConfig } from '../../shared/repo-config';

export async function decorate(repoName = 'Awesome-Reference') {
  const repo: ReposityConfig = repos[repoName];

  const files = walkSync(repo.localPath).filter(
    path => path.endsWith('.md') && path !== 'README.md'
  );

  for (let file of files) {
    const absoluteFile = `${repo.localPath}/${file}`;

    // 读取文件内容
    let content = await readFileAsync(absoluteFile, { encoding: 'utf8' });

    const header = `[![返回目录](${repo.chapterHeader})](${repo.sUrl}) \n\n\n`;

    // 替换已经存在的图片
    content.replace(/\[!\[返回目录\]\(.*\)\]\(.*\)/, '');
    content = header + content;

    fs.outputFile(absoluteFile, content);
  }
}
