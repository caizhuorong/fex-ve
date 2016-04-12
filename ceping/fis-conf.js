require('../config.js')('ceping');

fis.match('/static/echarts{**,*}', {
	useHash: false,
	optimizer: false
});