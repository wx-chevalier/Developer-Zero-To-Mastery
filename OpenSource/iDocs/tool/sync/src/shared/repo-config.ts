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

  // 是否使用二级目录头
  useSubHeader?: boolean;

  // 本地仓库路径
  localPath?: string;
}

// 所有仓库的声明
const repos: { [key: string]: ReposityConfig } = {
  // Coder-Knowledge-Management

  'Awesome-Reference': {
    description: 'Awesome-Reference',
    wizCatalogue: '/Workbench/Coder-Knowledge-Management/Awesome-Reference',
    repository: 'Coder-Knowledge-Management',
    basePath: 'Awesome-Reference',
    sUrl: 'https://parg.co/b4z',
    chapterHeader: 'https://parg.co/UGo',
    useSubHeader: true,
    localPath:
      '/Users/apple/Workspace/Docs/Coder-Knowledge-Management/Awesome-Reference',
  },

  // Domain-of-ProgrammingLanguage

  'Modern-JavaScript-Development-Foundation': {
    description: '现代 JavaScript 开发：语法基础与工程实践',
    wizCatalogue:
      '/Workbench/Domain-of-ProgrammingLanguage/JavaScript/Modern-JavaScript-Development-Foundation',
    repository: 'Domain-of-ProgrammingLanguage',
    basePath: 'JavaScript/Modern-JavaScript-Development-Foundation',
    sUrl: 'https://parg.co/bxN',
    chapterHeader: 'https://parg.co/USw',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/Domain-of-ProgrammingLanguage/JavaScript/Modern-JavaScript-Development-Foundation',
  },

  // Web-Development-And-Engineering-Practices

  'Modern-Web-Development-Foundation': {
    description: '现代 Web 开发基础',
    wizCatalogue:
      '/Workbench/Web-Development-And-Engineering-Practices/Modern-Web-Development-Foundation',
    repository: 'Web-Development-And-Engineering-Practices',
    basePath: 'Modern-Web-Development-Foundation',
    sUrl: 'https://parg.co/UHU',
    chapterHeader: 'https://parg.co/U0y',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/Web-Development-And-Engineering-Practices/Modern-Web-Development-Foundation',
  },

  'Modern-Web-Engineering-Practices': {
    description: '现代 Web 开发工程化实践',
    wizCatalogue:
      '/Workbench/Web-Development-And-Engineering-Practices/Modern-Web-Engineering-Practices',
    repository: 'Web-Development-And-Engineering-Practices',
    basePath: 'Modern-Web-Engineering-Practices',
    sUrl: 'https://parg.co/Ubt',
    chapterHeader: 'https://parg.co/UYp',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/Web-Development-And-Engineering-Practices/Modern-Web-Engineering-Practices',
  },

  'Modern-Web-Application-Architecture-And-Performance-Optimization': {
    description: '现代 Web 应用架构与性能调优',
    wizCatalogue:
      '/Workbench/Web-Development-And-Engineering-Practices/Modern-Web-Application-Architecture-And-Performance-Optimization',
    repository: 'Web-Development-And-Engineering-Practices',
    basePath:
      'Modern-Web-Application-Architecture-And-Performance-Optimization',
    sUrl: 'https://parg.co/UGZ',
    chapterHeader: 'https://parg.co/US3',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/Web-Development-And-Engineering-Practices/Modern-Web-Application-Architecture-And-Performance-Optimization',
  },

  'My-Frontend-Road': {
    description: '我的前端之路',
    wizCatalogue:
      '/Workbench/Web-Development-And-Engineering-Practices/My-Frontend-Road',
    repository: 'Web-Development-And-Engineering-Practices',
    basePath: 'My-Frontend-Road',
    sUrl: 'https://parg.co/U0X',
    chapterHeader: 'https://parg.co/U0e',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/Web-Development-And-Engineering-Practices/My-Frontend-Road',
  },

  'React-And-Frontend-Engineering': {
    description: 'React 与前端工程化实践',
    wizCatalogue:
      '/Workbench/Web-Development-And-Engineering-Practices/React-And-Frontend-Engineering',
    repository: 'Web-Development-And-Engineering-Practices',
    basePath: 'React-And-Frontend-Engineering',
    sUrl: 'https://parg.co/U0I',
    chapterHeader: 'https://parg.co/UY3',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/Web-Development-And-Engineering-Practices/React-And-Frontend-Engineering',
  },

  'Vue-And-Frontend-Engineering': {
    description: 'Vue.js 与前端工程化实践',
    wizCatalogue:
      '/Workbench/Web-Development-And-Engineering-Practices/Vue-And-Frontend-Engineering',
    repository: 'Web-Development-And-Engineering-Practices',
    basePath: 'Vue-And-Frontend-Engineering',
    sUrl: 'https://parg.co/bWF',
    chapterHeader: 'https://parg.co/U01',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/Web-Development-And-Engineering-Practices/Vue-And-Frontend-Engineering',
  },

  // ﻿ServerSideApplication-Development-And-System-Architecture

  'ServerSide-Application-Development-Fundamentals': {
    description: '服务端应用程序开发基础',
    wizCatalogue:
      '/Workbench/ServerSideApplication-Development-And-System-Architecture/ServerSide-Application-Development-Fundamentals',
    repository: 'ServerSideApplication-Development-And-System-Architecture',
    basePath: 'ServerSide-Application-Development-Fundamentals',
    sUrl: 'https://parg.co/UdT',
    chapterHeader: 'https://parg.co/Udx',
    useSubHeader: false,
    localPath:
      '/Users/apple/Workspace/Docs/ServerSideApplication-Development-And-System-Architecture/ServerSide-Application-Development-Fundamentals',
  },

  'Head-First-Full-Stack-Node.js': {
    description: '深入浅出 Node.js 全栈架构',
    wizCatalogue:
      '/Workbench/ServerSideApplication-Development-And-System-Architecture/Head-First-Full-Stack-Node.js',
    repository: 'ServerSideApplication-Development-And-System-Architecture',
    basePath: 'Head-First-Full-Stack-Node.js',
    sUrl: 'https://parg.co/b2s',
    chapterHeader: 'https://parg.co/UGX',
    useSubHeader: false,
  },
};

export default repos;
