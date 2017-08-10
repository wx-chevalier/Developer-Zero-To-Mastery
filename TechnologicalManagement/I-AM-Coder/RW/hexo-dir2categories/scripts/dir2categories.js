'use strict';
var front = require('hexo-front-matter');
var fs = require('hexo-fs');
var crc32 = require('./crc32');
var path = require('path');

var hexo = hexo || {};

var crcRes = [];

hexo.extend.filter.register('before_post_render', dir2categories);


function dir2categories(data){

    var config = this.config;

    //判断是否需要添加dir2categories依赖
    if(config.default_category === 'dir2categories') {
        //更新 categories 数组
        var segs = data.source.split('/');

        var tmpPost = front.parse(data.raw);

        tmpPost.categories = segs.splice(1,segs.length - 2);

        //更新标签
        tmpPost.tags = tmpPost.categories.map(function(cat){
            if(!!config.category_map[cat]){
                return config.category_map[cat];
            }
        });

        //判断是否存在标题
        if(!data.title){

            var anchor_start = data.raw.indexOf('# ') + 2;
            var anchor_end = data.raw.indexOf('\n\n',anchor_start);

            tmpPost.title = data.raw.substr(anchor_start, anchor_end - anchor_start);
        }

        //添加永久链接
        tmpPost.abbrlink = (checKCrc(crc32.str(tmpPost.title) >>> 0)).toString(16);

        let postStr = front.stringify(tmpPost);

        postStr = '---\n' + postStr;

        fs.writeFileSync(data.full_source, postStr, 'utf-8');
    }


}

let checKCrc = function(res) {
    if (crcRes.indexOf(res) > -1) {
        res++;
        return checKCrc(res);
    } else {
        return res;
    }

}

let thisAdd = function(value) {
    crcRes.push(value);
}