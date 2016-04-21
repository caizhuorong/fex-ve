fis.require('smarty')(fis)





fis.match('::image', {
	useHash: false
});
fis.match('*.{js,css,less}', {
	useHash: false
});
fis.match('*.js', {
	optimizer: false
});




//不用发布的目录
fis.match("{/doc/**,/.idea,/widget/**/test/**}", {
	release: false
});




fis.match('{*,**/*}.tmpl', {
	optimizer: fis.plugin('html-compress')
});

fis.match('/{components,lib}/{*,**/*}.{js,css}', {
	isMod: true
});


fis.match('*/{_,.}**.less', {
	parser: false,
	isMod: false
});


/*
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
	spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.{less,css,sass,scss}', {
	// 给匹配到的文件分配属性 `useSprite`
	useSprite: true,
	packTo: '/pkg/all.css'
});
*/




/**
 * 资源发布目录
 */
module.exports = function(nameSpace) {
	fis.set('namespace', nameSpace);


	fis.set('static', nameSpace == 'common' ? '' : 've');

	fis.match('*', {
		domain: '//fis.veimg.cn',
		deploy: fis.plugin('local-deliver', {
			to: 'e:/wwwroot/veryeast/fex/fis.veimg.cn'
		})
	});

	fis.match('{/*.tpl,' +
		'/{plugin/*,smarty.conf,domain.conf,*.php},' +
		'server.conf,' +
		'/test/*,' +
		'/config/*,' +
		'${namespace}-map.json,' +
		'*.sh}', {
			domain: false,
			deploy: fis.plugin('local-deliver', {
				to: 'e:/wwwroot/veryeast/fex/fex_tpl_veryeast'
			})
		});


	return this;
}