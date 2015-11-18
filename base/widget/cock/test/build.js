// 将产品给定的文本数据转换为对应的ID

var fs = require('fs'),
    postlist = require('../post_zh-cn.js'),
    postTxt = fs.readFileSync('post.txt').toString(),
    list = {},
    post = [],
    postMap = [],
    i;


for(i in postlist) {
    list[postlist[i]] = i;
}


postTxt = postTxt.split(/\r?\n/);

for (i = 0, len = postTxt.length; i < len; i++) {
    post.push([]);
    postMap.push([]);
    postTxt[i] = postTxt[i].split('\t');

    postMap[i][0] = list[postTxt[i][1]].match(/^.{2}/)[0] + '00';
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


fs.writeFileSync('../data/postmap.js', 'module.exports=' + JSON.stringify(postMap) + ';');
console.log('done!');