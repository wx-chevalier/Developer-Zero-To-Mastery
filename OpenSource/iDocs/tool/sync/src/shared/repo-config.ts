// @ts-check
// 存放每个仓库的配置

export interface ReposityConfig {
  // 描述
  description: string;

  // 仓库对应的短链接
  sUrl: string;

  // 书中每一章节需要插入的章节头
  chapterHeader: string;

  // 目录层级
  depth?: number;

  // 本地仓库路径
  localPath?: string;
}

const baseLocalDir = '/Users/apple/Workspace/Docs';

// 所有仓库的声明
const repos: { [key: string]: ReposityConfig } = {
  // Coder-Knowledge-Management

  'Awesome-Reference': {
    description: 'Awesome-Reference',
    sUrl: 'https://parg.co/b4z',
    chapterHeader: 'https://parg.co/UGo',
    depth: 2,
    localPath: `${baseLocalDir}/Coder-Knowledge-Management/Awesome-Reference`,
  },

  // Domain-of-ProgrammingLanguage

  'Modern-JavaScript-Development-Foundation': {
    description: '现代 JavaScript 开发：语法基础与工程实践',
    sUrl: 'https://parg.co/bxN',
    chapterHeader: 'https://parg.co/USw',
    depth: 1,
    localPath: `${baseLocalDir}/Domain-of-ProgrammingLanguage/JavaScript/Modern-JavaScript-Development-Foundation`,
  },

  // Web-Development-And-Engineering-Practices

  'Modern-Web-Development-Foundation': {
    description: '现代 Web 开发基础',
    sUrl: 'https://parg.co/UHU',
    chapterHeader: 'https://parg.co/U0y',
    depth: 1,
    localPath: `${baseLocalDir}/Web-Development-And-Engineering-Practices/Modern-Web-Development-Foundation`,
  },

  'Modern-Web-Engineering-Practices': {
    description: '现代 Web 开发工程化实践',
    sUrl: 'https://parg.co/Ubt',
    chapterHeader: 'https://parg.co/UYp',
    depth: 1,
    localPath: `${baseLocalDir}/Web-Development-And-Engineering-Practices/Modern-Web-Engineering-Practices'`,
  },

  'Modern-Web-Application-Architecture-And-Performance-Optimization': {
    description: '现代 Web 应用架构与性能调优',
    sUrl: 'https://parg.co/UGZ',
    chapterHeader: 'https://parg.co/US3',
    depth: 1,
    localPath: `${baseLocalDir}/Web-Development-And-Engineering-Practices/Modern-Web-Application-Architecture-And-Performance-Optimization`,
  },

  'React-And-Frontend-Engineering': {
    description: 'React 与前端工程化实践',
    sUrl: 'https://parg.co/U0I',
    chapterHeader: 'https://parg.co/UY3',
    depth: 1,
    localPath: `${baseLocalDir}/Web-Development-And-Engineering-Practices/React-And-Frontend-Engineering`,
  },

  'Vue-And-Frontend-Engineering': {
    description: 'Vue.js 与前端工程化实践',
    sUrl: 'https://parg.co/bWF',
    chapterHeader: 'https://parg.co/U01',
    depth: 1,
    localPath: `${baseLocalDir}/Web-Development-And-Engineering-Practices/Vue-And-Frontend-Engineering`,
  },

  // ﻿ServerSideApplication-Development-And-System-Architecture

  'ServerSide-Application-Development-Fundamentals': {
    description: '服务端应用程序开发基础',
    sUrl: 'https://parg.co/UdT',
    chapterHeader: 'https://parg.co/Udx',
    depth: 1,
    localPath: `${baseLocalDir}/ServerSideApplication-Development-And-System-Architecture/ServerSide-Application-Development-Fundamentals`,
  },

  'Head-First-Full-Stack-Node.js': {
    description: '深入浅出 Node.js 全栈架构',
    sUrl: 'https://parg.co/b2s',
    chapterHeader: 'https://parg.co/UGX',
    depth: 1,
  },
};

export default repos;
