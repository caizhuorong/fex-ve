require('../config.js');
fis.set('namespace', 'demo');

fis.match('(**.md)', {
	parser: fis.plugin('marked'),
	rExt: 'tpl',
	release: '/${template}/${namespace}/$1',
	url: '${namespace}/$1',
	useMap: true
});