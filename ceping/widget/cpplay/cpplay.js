'use static';

var tmpl = __inline('cpplay.tmpl');

var layer = require('base:components/layer/layer.js').skin();



$('#ceping-play').click(function() {

	layer.open({
		type: 1,
		// closeBtn: false,
		title: false,
		area: '730px',
		content: tmpl
	});

})

