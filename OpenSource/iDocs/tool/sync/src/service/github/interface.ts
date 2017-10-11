// 文件描述符
export interface FileDescriptor {
  // 相对路径
  path: string;

  // 文件名
  name: string;

  // 文件内容
  content?: string;

  // 经过 base64 解码之后的内容
  rawContent?: string;

  // 文件链接
  html_url: string;

  // 文件内的一级目录
  h1s?: Array<string>;
}

// 文件树
export interface FileTree {
  dirs: {
    [key: string]: FileTree;
  };
  files: Array<FileDescriptor>;
}
