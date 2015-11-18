// 将产品给定的文本数据转换为对应的ID

var fs = require('fs'),
    post_cn = require('../data/post_zh-cn.js'),
    postTxt = fs.readFileSync('post.txt').toString(),
    list = {},
    post = [],
    typeMap = {},
    postMap = [],
    i;


for(i in post_cn.item) {
    list[post_cn.item[i]] = i;
}


postTxt = postTxt.split(/\r?\n/);

for (i = 0, len = postTxt.length; i < len; i++) {
    post.push([]);
    postMap.push([]);
    postTxt[i] = postTxt[i].split('\t');

    postMap[i][0] = list[postTxt[i][1]].match(/^.{2}/)[0] + '00';
    typeMap[postMap[i][0]] = postTxt[i][0];

    postMap[i][1] = [];
    for (var x = 0, xlen = postTxt[i].length; x < xlen; x++) {
        if (postTxt[i][x] != '') {
            post[i].push(postTxt[i][x]);
            if (x) {
                postMap[i][1].push(list[postTxt[i][x]]);
            }
        }
    }
}

post_cn.list = typeMap;

fs.writeFileSync('../data/postmap.js', 'module.exports=' + JSON.stringify(postMap) + ';');
fs.writeFileSync('../data/post_zh-cn.js', 'module.exports=' + JSON.stringify(post_cn) + ';');


console.log('done!');