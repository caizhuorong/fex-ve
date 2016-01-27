/**
 * Created by TC-62 on 2016/1/11.
 */

require('base:components/layer/layer.js').skin('indigo'); // 设置layer弹窗皮肤，

var H = require('common:widget/helper/helper.js'),
	KW = {
		post: require('base:widget/cock/post_en.js').skin('blue'),
		area: require('base:widget/cock/area.js'),
		class: require('base:widget/cock/class.js')
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
			tmp = val[i] != "" && (KW[name].data.raw[val[i]] || KW[name].data.type[val[i]]);
			tmp && list.push(tmp);
		}
		list.length && $me.find('span').html(list.join('+'));
	});

