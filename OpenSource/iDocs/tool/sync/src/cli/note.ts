import { wizSync } from '../service/wiz/wiz-sync';
import { generateRepoToc } from '../service/github/generateRepoToc';
import repos from '../shared/repo-config';
import { decorate } from '../service/decorate/decorate';
const os = require('os');
const program = require('commander');

program
  .version('0.0.1')
  .option(
    '-t, --target [target]',
    ` 
      sync: 从为知笔记中同步指定仓库的内容, 
      toc: 从 Github 中生成指定仓库的目录内容',
      ltoc: 为本地路径中的文件生成目录内容
    `
  )
  .option('-r, --repo [repo]', '仓库名', 'Awesome-Reference')
  .option(
    '-d, --directory [directory]',
    '工作目录，默认为当前目录',
    os.homedir() + '/Desktop'
  )
  .option('-l, --language [language]', '指定生成的语言版本 [zh/en]', 'zh');

program.parse(process.argv);

// 如果是同步
if (program.target === 'sync') {
  wizSync(program.directory, program.repo);
}

// 如果是生成目录
if (program.target === 'toc') {
  const repo = repos[program.repo];

  generateRepoToc(
    'wxyyxc1992',
    repo.repository,
    repo.basePath,
    repo.useSubHeader
  );
}

// 如果是生成本地目录
if (program.target === 'ltoc') {
  decorate(program.repo).then();
}
