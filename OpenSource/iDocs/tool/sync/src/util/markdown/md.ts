// https://github.com/jonschlinkert/markdown-toc#optionsmaxdepth

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
