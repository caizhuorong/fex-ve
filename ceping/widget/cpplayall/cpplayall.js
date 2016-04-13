'use static';

var tmpl = __inline('cpplayall.tmpl');

var layer = require('base:components/layer/layer.js').skin();




exports.cpplayall = function (dom) {
	$(dom).click(function() {
        layer.open({
			type: 1,
			title: false,
			area: '615px',
			content: tmpl
		});

	})
}
