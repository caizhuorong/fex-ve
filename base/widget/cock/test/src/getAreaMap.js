var fs = require('fs'),
    area = require('../data/zh-cn/area.json'),
    areaAll = require('../data/zh-cn/area-all.json'),
    areaHot = require('../data/zh-cn/area-hot.json'),
    map = {
        raw: area,
        all: areaAll,
        hot: areaHot
    },
    i, len, tmp1, tmp2;



// hot 列的 col 总值
map.h_col = [];
for (i = 0, len = map.hot.length; i < len; i++) {
    tmp1 = map.hot[i][1].length;
    tmp2 = map.h_col[i % 2] || 0;
    map.h_col[i % 2] = tmp1 > tmp2 ? tmp1 : tmp2;
}


fs.writeFileSync('../../data/area_zh-cn.js', 'module.exports=' + JSON.stringify(map));

