/** * Created by TC-62 on 2015/11/4. */'use strict';var Cock = require('components/cock/cock.js'),    auto = {        tpl: __inline('view/post.tmpl'),        data: require('data/post_zh-cn.js'),        tip: '请选择职位',        multi: '5',        ratio: 18    };window.postCn = auto.data;/** *  option = { *      multi: 1, *      placeholder: "请选择职位", *      tip: "请选择工作地点", *      name: "area" *  } * @param option * @constructor */function Post(option, callback) {    Cock.run($.extend({}, auto, option), callback);}module.exports = Post;