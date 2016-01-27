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
require('base:components/layer/layer.js').skin('indigo'); // 设置layer弹窗皮肤，

var H = require('common:widget/helper/helper.js'),
	KW = {
		post: require('base:widget/cock/post.js').skin('blue'),
		area: require('base:widget/cock/area.js')
	};

$('.demo-w-cock')
	.on('click', '.kwbtn[data-name]', function () {
		var $this = $(this),
			data = $this.data();

		// 弹窗打开前初始化默认选中的数据
		data.hit = $this.find('input').val().split(',');

		KW[$this.data('name').split('-')[0]](data, function (list) {
			// 点击确认后返回选中的数据
			console.log(list);
			var value = list.v.join(','),
				text = list.t.join('+');

			$this.find('input').val(value ? value : '');
			$this.attr('title', text ? text : $this.data('title'));
			$this.find('span').html(text ? text : $this.data('placeholder'));
		});
	})
	
	// 初始化赋值，搜索功能可无视此处
	.find('.kwbtn').each(function () {
		var $me = $(this),
			name = $me.data('name').split('-')[0],
			$input = $me.find('input[type=hidden],input[type=text]'),
			val = $input.val().split(','),
			i = 0, len = val.length, list = [], tmp;
		for (; i < len; i++) {
			tmp = KW[name].data.raw[val[i]] || KW[name].data.type[val[i]];
			tmp && list.push(tmp);
		}
		list.length && $me.find('span').html(list.join('+'));
	});
```

#### fis外调用
```html
<!-- 如果和seajs 同时使用，请放在seajs后面 -->
<script src="//fis.veimg.cn/common/mod_sea.js"></script>
```
```javascript
var _this = this,
	filter = { // 可以通过id做一些表单验证，等的判断，对应下方调用，和本插件无关，只是一个demo
		post_number: {
			onFocus: function (me) {
				_this.form.formatInput('job_post_number');
			},
			onBlur: function (me) {
				_this.form.validate('job_post_number');
				_this.fillDescriptionHelp();
			}
		},
		work_place: {
			onFocus: function (me) {
				_this.form.formatInput('work_place');
			},
			onBlur: function (me) {
				_this.form.validate('work_place');
			}
		}
	},
	mods = 'common:widget/helper/helper.js,'+
			'base:components/layer/layer.js,'+
			'base:widget/cock/post.js,'+
			'base:widget/cock/area.js';


$.ajax({
	url: 'http://fex.veryeast.cn/resource/getDeps?s=' + mods,
	dataType: 'jsonp',
	success: function (map) {
		// 请先加载 mod_sea.js
		window.require.resourceMap(map);

		window.require.async(mods.split(','), function (H, layer, post, area) {
			layer.skin('indigo');

			var KW = {
				post: post.skin('blue'),
				area: area
			};

			$('#form')
				.on('click', '.kwbtn[data-name]', function () {
					var $this = $(this),
						data = $this.data();
					
					try{filter[$this.attr('id')].onFocus()}catch(err){} // 对应上面的filter，和本插件无关，只是一个demo
					
					// 选中的id
					data.hit = $this.find('input').val().split(',');

					KW[$this.data('name').split('-')[0]](data, function (list) {
						// 对选中数据做处理并插入到dom中
						var value = list.v.join(','),
							text = list.t.join('+');

						$this.find('input').val(value ? value : '');
						$this.attr('title', text ? text : $this.data('title'));
						$this.find('span').html(text ? H.substring(text, 24) : $this.data('placeholder'));
						
						try{filter[$this.attr('id')].onBlur()}catch(err){} // 对应上面的filter，和本插件无关，只是一个demo
					});
				})
				
				// 初始化赋值，搜索功能可无视此处
				.find('.kwbtn').each(function () {
					var $me = $(this),
						name = $me.data('name').split('-')[0],
						$input = $me.find('input[type=hidden],input[type=text]'),
						val = $input.val().split(','),
						i = 0, len = val.length, list = [], tmp;
					for (; i < len; i++) {
						tmp = KW[name].data.raw[val[i]] || KW[name].data.type[val[i]];
						tmp && list.push(tmp);
					}
					list.length && $me.find('span').html(list.join('+'));
				});
		})
	}
});
```