'use static';

var tmpl = __inline('cpplayall.tmpl');
var tpl = require('common:components/tpl/tpl').compile(tmpl);
var layer = require('base:components/layer/layer.js').skin();


var data;


exports.cpplayall = function(dom) {
	if (!data) return;
	$(dom).click(function() {
		layer.open({
			type: 1,
			title: false,
			area: '615px',
			content: tpl(data)
		});
	})
}


exports.init = function(url, data, datatype) {
	$.ajax({
		url: url,
		data: data,
		dataType: datatype,
		success: function(ok) {
			data = ok.data
		}
	})
}