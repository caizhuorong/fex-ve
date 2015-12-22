var
	fs = require('fs'),
	glyph = fs.readFileSync('fonts.svg').toString(),
	entity = get_entity(),
	fonts = '找到最适合自己的工作到最满意的城市去工作创造平凡岗位里的不平凡'.split(''),
	i, len, out = {}, text = '';

// Array.prototype.get = function (i) { return typeof this[i] == 'string' ? this[i].trim() : this[i] }
// text.match(/<glyph unicode="你"[^>]*><\/glyph[^>]*>/g)



for (i = 0, len = fonts.length; i < len; i++) {
	out[fonts[i]] = glyph.match(RegExp('<glyph unicode="&#x' + fonts[i].charCodeAt().toString(16) + ';"[^>]*><\/glyph[^>]*>', 'g'))[0].replace(/\s+>/g, '>') + '\n';
}

for (i in out) {
	text += out[i];
}

fs.writeFileSync('data.txt', text);

// end





// 本来准备写实体编码支持的，本次项目没用到，所以先就不写了
function get_entity () {
	var 
		i, len, tmp,
		entity = {},
		original = fs.readFileSync('entity.txt').toString();

	original = original.split('\r\n');		

	for (i = 0, len = original.length; i < len ;i++) {
		tmp = original[i].split('\t'),
		entity[tmp[0]] = [tmp[2], tmp[3]];
	}
	return entity;
}
