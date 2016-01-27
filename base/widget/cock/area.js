/**
 * Created by TC-62 on 2015/11/4.
 */

'use strict';

var 
	Cock = require('components/cock/cock.js'),
    auto = {
        name: 'area',
        tpl: __inline('view/area.tmpl'),
        data: require('data/area_cn.js'),
        emp: { // 自定义class
            "item-hot": ["050100", "061300", "050500", "230300"],
            "item-bold": ["010000", "070100", "030000", "070200"]
        },
        tip: '请选择工作地点',
        //multi: 1,
        ratio: 3, // 二级菜单长宽比率
        baba: true, // 这是父级可选
		mui: {}
    },
    i, key;


auto.data.type = {};
auto.data.all = [];
for (i in auto.data.raw) {
    key = parseInt(i.match(/\d{2}/));

    if (/0{4}$/.test(i)) {
        auto.data.type[i] = auto.data.raw[i];
        auto.data.all[key] = [i, []];
    } else {
        auto.data.all[key][1].push(i);
    }
}


function Post(option, callback) {
    Cock.run($.extend({}, auto, option), callback);
}


Post.skin = Cock.skin;
Post.data = auto.data;

module.exports = Post;
