'use static';

var tmpl = __inline('cpplay.tmpl');
var tpl = require('common:components/tpl/tpl').compile(tmpl);
var layer = require('base:components/layer/layer.js').skin();

// http://home.9first.com/post/job
var data = { "jobname": "酒店驻店经理/常务副总经理/副总经理/业主代表/总经理助理", "pojobname": "温泉区域经理", "xz_post_id": "35", "pojob": [{ "id": "30", "name": "酒店总裁", "paname": [{ "id": "34", "name": "酒店主管" }, { "id": "36", "name": "司机师傅" }] }, { "id": "31", "name": "人力资源部总监", "paname": [{ "id": "35", "name": "温泉区域经理" }, { "id": "56", "name": "助理" }] }, { "id": "33", "name": "店长", "paname": [] }, { "id": "57", "name": "主管", "paname": [{ "id": "58", "name": "餐饮主管" }] }, { "id": "65", "name": "前厅经理", "paname": [{ "id": "66", "name": "前厅经理" }] }] };


exports.cpplay = function(dom) {
	if (data) {
		$(dom).click(function() {
			layer.open({
				type: 1,
				// closeBtn: false,
				title: false,
				area: '730px',
				content: tpl({data: data})
			});
		})
	}
}
