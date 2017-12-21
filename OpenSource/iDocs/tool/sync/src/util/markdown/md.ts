// https://github.com/jonschlinkert/markdown-toc#optionsmaxdepth

import { FileDescriptor } from '../fs/interface';

/**
 * 功能：从 MarkDown 字符串中获取所有的一级目录
 * @param {string} mdString
 */
export function getH1sFromMDString(mdString: string) {
  const lines = mdString.split('\n');

  let headers: string[] = [];

  for (let line of lines) {
    if (line.startsWith('# ')) {
      headers.push(line.replace('# ', '').trim());
    }
  }

  return headers;
}

/**
 * Description 格式化显示文件
 * @param {FileDescriptor} file
 * @return {string}
 */
export const formatToc = (file: FileDescriptor) => {
  return `\n- [${file.name.replace('.md', '')}](${file.html_url}): ${file
    .h1s[0] || ''} \n\n`;
};
