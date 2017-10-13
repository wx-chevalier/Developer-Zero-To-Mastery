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
  },

  // Domain-of-ProgrammingLanguage
  'Modern-JavaScript-Development-Foundation': {
    description: '现代 JavaScript 开发：语法基础与工程实践',
    wizCatalogue:
      '/Workbench/Domain-of-ProgrammingLanguage/JavaScript/Modern-JavaScript-Development-Foundation',
    repository: 'Domain-of-ProgrammingLanguage',
    basePath: 'JavaScript/Modern-JavaScript-Development-Foundation',
    sUrl: '﻿https://parg.co/bxN',
    chapterHeader: '"https://parg.co/UG3"',
    useSubHeader: false
  },

  // Web-Development-And-Engineering-Practices
  'Modern-Web-Application-Architecture-And-Performance-Optimization': {
    description: '现代 Web 应用架构与性能调优',
    wizCatalogue:
      '/Workbench/Web-Development-And-Engineering-Practices/Modern-Web-Application-Architecture-And-Performance-Optimization',
    repository: 'Web-Development-And-Engineering-Practices',
    basePath:
      'Modern-Web-Application-Architecture-And-Performance-Optimization',
    sUrl: 'https://parg.co/UGZ',
    chapterHeader: 'https://parg.co/UGp',
    useSubHeader: false
  },

  // ﻿ServerSideApplication-Development-And-System-Architecture
  'Head-First-Full-Stack-Node.js': {
    description: '深入浅出 Node.js 全栈架构',
    wizCatalogue:
      '/Workbench/ServerSideApplication-Development-And-System-Architecture/Head-First-Full-Stack-Node.js',
    repository: 'ServerSideApplication-Development-And-System-Architecture',
    basePath:
      'Head-First-Full-Stack-Node.js',
    sUrl: 'https://parg.co/b2s',
    chapterHeader: 'https://parg.co/UGX',
    useSubHeader: false
  }
};

export default repos;
