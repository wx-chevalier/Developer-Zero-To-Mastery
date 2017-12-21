import { generateToc } from '../service/local/generateToc';
const os = require('os');
const program = require('commander');

program
  .version('0.0.1')
  .option('-r, --repo [repo]', '仓库名', 'Awesome-Reference')
  .option(
    '-d, --directory [directory]',
    '工作目录，默认为当前目录',
    os.homedir() + '/Desktop'
  )
  .option('-l, --language [language]', '指定生成的语言版本 [zh/en]', 'zh');

program.parse(process.argv);

// 如果是生成本地目录
generateToc(program.repo).then();
