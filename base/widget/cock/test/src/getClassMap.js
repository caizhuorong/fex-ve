var i,
	fs = require('fs'),
    class_cn = require('../data/cn/class.json');






fs.writeFileSync('../../data/class_cn.js', 'module.exports=' + JSON.stringify(class_cn, null, 4));
