/**
 * Created by TC-62 on 2016/1/11.
 */

require('base:components/layer/layer.js').skin('indigo');

var H = require('common:widget/helper/helper.js'),
	KW = {
		post: require('base:widget/cock/post.js').skin('blue'),
		area: require('base:widget/cock/area.js')
	};

$('.demo-w-cock')
	.on('click', '.kwbtn[data-name]', function () {
		var $this = $(this),
			data = $this.data();

		data.hit = $this.find('input').val().split(',');

		KW[$this.data('name').split('-')[0]](data, function (list) {
			console.log(list);
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
			tmp = KW[name].data.raw[val[i]] || KW[name].data.type[val[i]];
			tmp && list.push(tmp);
		}
		list.length && $me.find('span').html(list.join('+'));
	});

