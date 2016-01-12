# 最佳东方弹出窗插件


### 依赖
[jQuery] http://jquery.com
[layer] http://layer.layui.com/api.html
[artTemplate] http://aui.github.com/artTemplate


### 参数
data参数 | 说明 | 默认值 | 必选
:-: | :-: | :-: | :-:
name | cache所对应的key | null | 1
tpl | 渲染主界面的模板文件 | null | 1
data | 对应的数据 | null | 1
emp | 给指定id添加指定class | null |
tip | 默认显示的信息 | '~' |
multi | 最多可选个数 | 1 (单选) |
ratio | 二级菜单长宽比 | 999 (不限制) |
baba | 父级可选 | false |


```javascript
{
    name: 'area',
    tpl: __inline('view/area.tmpl'),
    data: require('data/area_zh-cn.js'),
    emp: {
        "item-hot": ["050100", "061300", "050500", "230300"],
        "item-bold": ["010000", "070100", "030000", "070200"]
    },
    tip: '请选择工作地点',
    multi: 5,
    ratio: 3,
    baba: true
}
```


### 回调函数返回
```javascript
{
    v: ["1304", "1102"],
    t: ["楼层主管/领班", "大堂副理/宾客服务经理"]
}
```


### 上层调用
```html
<a class="kwbtn" data-name="post" data-placeholder="请选择职位" data-title="请选择职位" title="请选择职位">
    <span class="ellipsis">请选择职位</span>
    <input type="text" name="funtype" value="1304,1102">
</a>
<br>
<a class="kwbtn" data-name="area" data-placeholder="请选择地点" data-title="请选择地点" title="请选择地点">
    <span class="ellipsis">请选择地点</span>
    <input type="text" name="jobarea" value="">
</a>
```

```javascript
var H = require('common:widget/helper/helper.js'),
    KW = {
        post: require('base:widget/cock/post.js'),
        area: require('base:widget/cock/area.js')
    },
    data = {
        area: require('base:widget/cock/data/area_zh-cn.js'),
        post: require('base:widget/cock/data/post_zh-cn.js')
    };

$('.demo-w-cock')
    .on('click', '.kwbtn[data-name]', function () {
        var $this = $(this),
            data = $this.data();

        data.hit = $this.find('input').val().split(',');

        KW[$this.data('name').split('-')[0]](data, function (list) {
            var value = list.v.join(','),
                text = list.t.join('+');

            $this.find('input').val(value ? value : '');
            $this.attr('title', text ? text : $this.data('title'));
            $this.find('span').html(text ? text : $this.data('placeholder'));
        });
    })
    .find('.kwbtn').each(function () {
        var $me = $(this),
            name = $me.data('name').split('-')[0],
            $input = $me.find('input[type=hidden],input[type=text]'),
            val = $input.val().split(','),
            i = 0, len = val.length, list = [], tmp;
        for (; i < len; i++) {
            tmp = data[name].raw[val[i]] || data[name].type[val[i]];
            tmp && list.push(tmp);
        }
        list.length && $me.find('span').html(list.join('+'));
    });
```