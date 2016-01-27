/**
 * Created by TC-62 on 2015/11/4.
 */

'use strict';

var i, x, tmp,
	Cock = require('components/cock/cock.js'),
    auto = {
        name: 'post',
        tpl: __inline('view/class.tmpl'),
        data: require('data/class_cn.js'),
        tip: '请选择职位',
        //multi: 1,
        ratio: 12,
        baba: true, // 这是父级可选
		mui: {}
    };


console.log(auto.data.all_z);

// for (i = 0; i < auto.data.all.length; i++) {
// 	tmp = auto.data.all[i];
// 	if (tmp.length == 2) {
// 		tmp[1] = auto.data.all_z[tmp[1]];
// 		for (x = 0; x < tmp[1].length; x++) {
// 			if ($.isArray(tmp[1][x])) {
// 				tmp[1][x] = tmp[1][x][0];
// 			}
// 		}
// 	}
// }

// console.log(auto.data);


function Post(option, callback) {
    Cock.run($.extend({}, auto, option), callback);
}


Post.skin = Cock.skin;
Post.data = auto.data;

module.exports = Post;
