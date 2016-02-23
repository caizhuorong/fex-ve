require('../config.js')('demo');


fis.match('(widget/**.md)', {
	parser: fis.plugin('marked'),
	rExt: 'tpl',
	release: '/${template}/${namespace}/$1',
	url: '${namespace}/$1',
	deploy: fis.plugin('local-deliver', {
		to: 'E:/wwwroot/veryeast/fex/fex_tpl_veryeast'
	}),
	useMap: true
});