// @ts-check
// 存放每个仓库的配置

export interface ReposityConfig {
  // 描述
  description: string;

  // 所属目录
  catalogue: string;

  // 书或系列对应的仓库地址
  repositoryUrl: string;

  // 仓库对应的短链接
  sUrl: string;

  // 书中每一章节需要插入的章节头
  chapterHeader: string;
}

export default {
  AW: {
    description: "Awesome-Reference",
    catalogue: "/Workbench/Coder-Knowledge-Management/Awesome-Reference",
    repositoryUrl: "",
    sUrl: "",
    chapterHeader: ""
  }
};
