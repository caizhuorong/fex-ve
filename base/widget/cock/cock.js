/**
 * Created by TC-62 on 2015/11/4.
 */

'use strict';

var tpl = require('common:components/tpl/tpl.js'),
    layer = require('layer'),
    postmap = require('data/postmap.js'),
    postlist = require('data/post_zh-cn.js');



function dataMod (map, list) {
    var i;
    for (i = 0; i < map.length; i++) {
        map[i][0] = {id: map[i][0], text: list.list[map[i][0]]};
    }
}

function Cock() {

    dataMod(postmap, postlist);

    console.log( postmap );



}


module.exports = Cock;




/*
function sub (a, i) {
    var num = 1;
    while (i > 0) {
        num = num * a;
        i--;
    }
    return num;
}

function allnum (list) {
    var i, len, num = 0;
    for (i = 0, len = list.length; i < len; i++) {
        num += list[i];
    }
    return num;
}

function fn (list, obj) {
    var i;
    if (!obj) {
        obj = [];
        for (i = 0; i < list.length; i++) {
            console.log(i);
            if (i) {

            }

        }
    } else {

    }

}

fn([1, 2, 3]);
*/