require('../config.js')('ceping');

fis.match('/static/echarts{**,*}', {
	useHash: false,
	optimizer: false
});



/**
 * 1先之PC,
 * 2先之触屏,
 * 3先之客户端,
 * 4最佳东方pc,
 * 5最佳东方触屏,
 * 6最佳东方客户端
 */