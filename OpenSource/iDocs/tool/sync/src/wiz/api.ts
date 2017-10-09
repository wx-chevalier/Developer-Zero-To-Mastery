const fetch = require('isomorphic-fetch');

const Token = 'da19ce139d036650ba35b41c36c8f4daafivpqa0bxsb5s';

const Host = 'https://note.wiz.cn';

/**
 * Description 获取用户信息
 * @param {string} Token
 * @return {Promise<any>}
 */
export async function getInfo(): Promise<any> {
  return get('/wizas/a/users/get_info');
}

// getInfo().then(data => {
//   console.log(data);
// });

/**
 https://note.wiz.cn/ks/category/all/62f7d6c2-7c7c-4804-aa61-bb561897ba12?clientType=web&clientVersion=3.0.0&apiVersion=10&lang=zh-cn&_=1507040583048
 */
export interface DirTree {
  [key: string]: DirTree;
}

export async function getDirTree(category: string) {
  const dirs = await get('/ks/category/all/62f7d6c2-7c7c-4804-aa61-bb561897ba12', {
    category,
    withAbstract: true,
    start: 0,
    count: 200,
    ascending: 'desc'
  });

  return dirs;
}

/**
 * Description 通用抓取函数
 * @param {string} path
 * @param queryParams
 * @return {Promise<T>}
 */
function get(path: string, queryParams: { [key: string]: any } = {}) {
  const finalQueryParams = Object.assign(
    {},
    {
      lang: 'zh-cn',
      client_type: 'web2.0',
      api_version: '10',
      _: Date.now()
    },
    queryParams
  );

  let queryString = '';

  for (let queryKey in finalQueryParams) {
    queryString += `${queryKey}=${encodeURIComponent(
      finalQueryParams[queryKey]
    )}&`;
  }

  queryString = queryString.substring(0, queryString.length - 1);

  console.log(queryString);

  return fetch(`${Host}${path}?${queryString}`, {
    credentials: 'include'
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
}
