'use static';

var tmpl = __inline('cpplay.tmpl');
var tpl = require('common:components/tpl/tpl').compile(tmpl);
var layer = require('base:components/layer/layer.js').skin();

exports.cpplay = function(dom, data) {
	$(dom).off(play).click(data, play)
}


function play(ev) {
	layer.open({
		type: 1,
		title: false,
		area: '730px',
		content: tpl({
			data: ev.data
		})
	});
}