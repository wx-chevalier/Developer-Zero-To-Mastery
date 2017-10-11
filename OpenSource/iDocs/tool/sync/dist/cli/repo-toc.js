const program = require('commander');
program
    .version('0.0.1')
    .command('sync [name]', '从为知笔记中同步指定仓库的内容')
    .command('toc [name]', '从 Github 中生成指定仓库的目录内容')
    .option('-d, --directory [directory]', '工作目录，默认为当前目录', __dirname)
    .option('-l, --language [language]', '指定生成的语言版本 [zh/en]', 'zh')
    .parse(process.argv);
console.log(program.sync);
