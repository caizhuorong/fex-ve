// 将产品给定的文本数据转换为对应的ID

var timen = (new Date).valueOf();

var fs = require('fs'),
    util = require('util'),
    post = require('../data/zh-cn/post.json'),
    post_cn = {},

    postTxt = fs.readFileSync('../post.txt').toString(),

    tmp, i;


// post_cn 的key和值颠倒
for (i in post) {
    post_cn[post[i]] = i;
}

// 中文数据结构
postTxt = postTxt.split(/\r?\n/);
for (i = 0, len = postTxt.length; i < len; i++) {
    tmp = postTxt[i].replace(/\t*$/, '').split('\t');
    postTxt[i] = [tmp.shift(), tmp];
}


// console.log( postTxt );return;


function items(list) {
    var i, item = [];

    for (i = 0; i < list.length; i++) {
        if (util.isArray(list[0]) && util.isArray(list[1])) {
            // 子集列表
            item[i] = items(list[i]);
        } else if (util.isString(list[0]) && util.isArray(list[1])) {
            if (!i) {
                // 标题
                item = {
                    k: post_cn[list[1][0]].match(/^\d{2}/)[0] + '00',
                    t: list[0],
                    l: items(list[1])
                };
            }
        } else {
            // 列表
            item[i] = {
                k: post_cn[list[i]],
                t: list[i]
            };
        }
    }

    return item;
}


// console.log(items(postTxt));


fs.writeFileSync('../../data/post_zh-cn.js', 'module.exports=' + JSON.stringify(items(postTxt)).replace(/\"(\w)\"\:/g, "$1:") + ';');


console.log((new Date).valueOf() - timen + 'ms', 'done!');
