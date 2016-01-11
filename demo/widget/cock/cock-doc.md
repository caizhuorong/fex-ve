#最佳东方弹出窗插件

data参数 | 说明
:-: | :-:
tpl | 渲染主界面的模板文件,
data | 对应的数据,
tip | 默认显示的信息,
multi | 最多可选个数，不设置则为单选,
ratio | 二级菜单长宽比,
baba | 父级可选


```
var Cock = require('components/cock/cock.js'),
    auto = {
        tpl: __inline('view/post.tmpl'),
        data: require('data/post_zh-cn.js'),
        tip: '请选择职位',
        multi: 5,
        ratio: 12,
        baba: true // 这是父级可选
    };

function Post(option, callback) {
    Cock.run($.extend({}, auto, option), callback);
}

module.exports = Post;
```