fis.require('smarty')(fis);


fis.match('*.{js,css,less,sass,scss,png,jpeg,jpg,gif}', {
    useHash: false,
    useSprite: false,
    optimizer: null
});


//不用发布的目录
fis.match("{/doc/**,/.idea,/widget/*/test/*}", {
    release: false
});


fis.match('{*,**/*}.tmpl', {
    optimizer: fis.plugin('html-compress')
});


fis.match('/components/{*,**/*}.{js,css}', {
    isMod: true
});


fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
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


fis.match('*.{js,css,less,sass,scss,png,jpg,jpeg,gif}', {
    domain: '//fex.v.veimg.cn'
});

 */