import { ignoreFilesOrDirs } from '../../shared/dict';

const walkSync = require("walk-sync");
const readline = require("readline");
const fs = require("fs");

// 构建生成文件树
/**
 * {
 *  files:[],
 *  dirName:{
 *    files:[
 *      {
 *        // 文件路径
 *        path:"...",
 *        fileName:"...",
 *        // 文件所有的一级标题
 *        h1s:["..."]
 *      }
 *    ],
 *    dirName:{...}
 *  }
 * }
 */
export interface FileDescriptor {
  path: string;
  fileName: string;
  h1s: Array<string>;
}

export interface FileTree {
  dirs: {
    [key: string]: FileTree;
  };
  files: Array<FileDescriptor>;
}

/**
 * 
 * 功能：开始遍历指定目录
 * @export
 * @param {string} parentDirectory 
 * @returns 
 */
export async function generateFileTree(parentDirectory: string) {
  const fileTree: FileTree = {
    dirs: {},
    files: []
  };

  const paths: string[] = walkSync(parentDirectory);

  for (let path of paths) {
    let segments: string[] = path.split("/");

    let obj: FileTree = fileTree;

    // 遍历每一段路径
    for (let segment of segments) {
      if (segment.endsWith(".md")) {
        // 这里的 segment 等价于文件名
        let h1s: string[] = await readMarkdownHeadersFronFile(
          parentDirectory + "/" + path,
          segment
        );

        obj.files.push({
          path,
          fileName: segment,
          h1s
        });
      } else {
        // 如果是文件目录，则创建新的结点
        if (ignoreFilesOrDirs.includes(segment)) {
          continue;
        }

        // 如果当前树中不存在结点，则创建空结点
        if (!obj.hasOwnProperty("dirs")) {
          obj["dirs"] = {};
        }

        // 判断是否存在目录结点
        if (!obj["dirs"][segment]) {
          obj["dirs"][segment] = {
            dirs: {},
            files: []
          };
        }

        // 将子字典赋值给当前对象
        obj = obj["dirs"][segment];
      }
    }
  }

  return fileTree;
}

export function readMarkdownHeadersFronFile(
  path: string,
  fileName: string
): Promise<string[]> {
  return new Promise((resolve, reject) => {
    let headers: string[] = [];

    const rl = readline.createInterface({
      input: fs.createReadStream(path)
    });

    rl.on("line", (line: string) => {
      if (line.startsWith("# ")) {
        headers.push(line.replace("# ", ""));
      }
    });

    rl.on("close", function(_: string) {
      resolve(headers);
    });

    rl.on("error", function(error: Error) {
      reject(error);
    });
  });
}
