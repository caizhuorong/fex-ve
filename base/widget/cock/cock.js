/**
 * Created by TC-62 on 2015/11/4.
 */

'use strict';

var tpl = require('common:components/tpl/tpl.js'),
    layer = require('layer'),
    postlist = require('data/post_zh-cn.js'),
    list = {},
    postTxt = __inline('data/post.txt'),
    post = [],
    postMap = [];


for(i in postlist) {
    list[postlist[i]] = i;
}


postTxt = postTxt.split(/\r?\n/);

for (var i = 0, len = postTxt.length; i < len; i++) {
    post.push([]);
    postMap.push([]);
    postTxt[i] = postTxt[i].split('\t');

    console.log(postTxt[i], i);
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

window.list = list;
window.post = post;
window.postMap = postMap;

function Cock() {

}


module.exports = new Function;
