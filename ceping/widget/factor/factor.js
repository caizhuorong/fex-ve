var $factor = $('#factor');


var factorRender = function(factor, level) {

	var i, len,
		level = level || 0,
		$child,
		$then,
		$div;

	if (factor.list) {
		$child = $('<table><tbody><tr>').find('>tbody>tr');
		$child.append('<td class="level-' + level + '"><div><span>' + factor.name + '</span></div></td><td class="level-x' + level + '"></td>')
		len = factor.list.length;
		for (i = 0; i < len; i++) {
			$then = factorRender(factor.list[i], level + 1)
			if ($then.is('table')) {
				$child.children('td').eq(1).append($then);
			} else {
				$div = $child.children('td').eq(1).children('.end-level')
				if ($div.length) {
					$div.append($then)
				} else {
					$child.children('td').eq(1).append('<div class="end-level">').children('div').append($then);
				}
			}
			if (i === len - 1) {
				$then.addClass('end-then');
			}
		}
		return $child.end();
	} else {
		return $('<span class="level-' + level + '">' + factor.name + '</span>');
	}

}

// _factor
// data = {"status":1,"data":{"postlist":{"id":"34","name":"酒店主管","description":"专门卖酒的管理","list":[{"id":"3","name":"工作分析及工作设计","list":[{"id":"6","name":"人员配备"}]},{"id":"16","name":"设立人力资源体系","list":[{"id":"6","name":"人员配备"}]},{"id":"17","name":"计划及招聘","list":[{"id":"24","name":"离职"}]}]}}}

$factor.append(factorRender(_factor));








































/*
// 写完就蒙逼了
var factorRender = function($factor, factor, level, offset) {

	var i, len,
		rowspan = 0,
		offset = offset || [0];
		
	level = level || 0;

	if (factor.list) {
		len = factor.list.length;
		for (i = 0; i < len; i++) {
			rowspan += factorRender($factor, factor.list[i], level + 1, offset);
		}
		$factor.find('tr').eq(offset[0] - rowspan)
			.prepend('<td rowspan="' + rowspan + '" class="level-' + level + '">'
			+ factor.title
			+ '</td>');
	} else {
		offset[0] += 1;
		$factor.prepend('<tr><td class="level-' + level + '">' + factor.title + '</td>');
	}

	return rowspan || 1;

}

factorRender($factor, _factor);
*/