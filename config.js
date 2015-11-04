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

fis.match('*.{tpl,tmpl}', {
    optimizer: fis.plugin('html-compress')
});

fis.match('/components/{*,**/*}.{js,css}', {
    isMod: true
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

