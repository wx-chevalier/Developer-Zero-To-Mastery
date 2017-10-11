"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUp = page => {
    page.evaluate(() => {
        const Host = 'https://note.wiz.cn';
        /**
             * Description 通用抓取函数
             * @param {string} path
             * @param queryParams
             * @return {Promise<T>}
             */
        function get(path, queryParams = {}) {
            const finalQueryParams = Object.assign({}, {
                lang: 'zh-cn',
                client_type: 'web2.0',
                api_version: '10',
                _: Date.now()
            }, queryParams);
            let queryString = '';
            for (let queryKey in finalQueryParams) {
                queryString += `${queryKey}=${encodeURIComponent(finalQueryParams[queryKey])}&`;
            }
            queryString = queryString.substring(0, queryString.length - 1);
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
        window['get'] = get;
        /**
           * 从原始的 HTML 中提取出内容
           * @param rawHTML
           * @param br
           */
        function extractContent(rawHTML, br) {
            const container = document.createElement('div');
            container.innerHTML = rawHTML
                .replace(/<div>/g, '<div><br>')
                .replace(/<br>/g, `<span>${br}</span>`);
            document.body.appendChild(container);
            // 移除样式节点
            let styleNode = container.querySelector('style');
            if (styleNode) {
                // 移除首个节点
                container.removeChild(styleNode);
            }
            // 为所有的 div 添加<br>
            return container.textContent;
        }
        window['extractContent'] = extractContent;
    });
};
