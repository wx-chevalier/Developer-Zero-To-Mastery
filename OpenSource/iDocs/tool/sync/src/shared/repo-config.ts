// @ts-check
// 存放每个仓库的配置

export interface ReposityConfig {
  // 描述
  description: string;

  // 所属为知笔记目录

  wizCatalogue: string;

  // 书或系列对应的仓库名
  repository: string;

  // 仓库中的根路径
  basePath: string;

  // 仓库对应的短链接
  sUrl: string;

  // 书中每一章节需要插入的章节头
  chapterHeader: string;

  useSubHeader?: boolean;
}

const repos: { [key: string]: ReposityConfig } = {
  // Coder-Knowledge-Management
  'Awesome-Reference': {
    description: 'Awesome-Reference',
    wizCatalogue: '/Workbench/Coder-Knowledge-Management/Awesome-Reference',
    repository: 'Coder-Knowledge-Management',
    basePath: 'Awesome-Reference',
    sUrl: 'https://parg.co/b4z',
    chapterHeader: 'https://parg.co/UGo',
    useSubHeader: true
  }
};

export default repos;
