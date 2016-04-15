/**
 * 加载图片
 */
$('img').map(function () {
	var $this = $(this);
	$this.prev('.imgbox').css({ backgroundImage: 'url(' + $this.attr('src') + ')' });
})




/**
 * 进度条
 */
jQuery.fn.axis = function (percentage, hasTit) {
	var i,
		$axis = this.children('.lib-axis'),
		$tmp;
	if (!$axis.length) {
		$axis = $('<div class="lib-axis"><div class="lib-axis-num"><div class="lib-axis-signNum"></div></div></div>').appendTo(this);
		if (hasTit) {
			for (i = 0; i < 5; i++) {
				$tmp = $('<div class="lib-axis-sign" style="left:' + i * 25 + '%">' + i * 25 + '%</div>')
				if (i == 0) {
					$tmp.css({ 'marginLeft': 0 })
				} else if (i == 4) {
					$tmp.css({ 'marginLeft': '-36px' })
				}
				$axis.append($tmp);
			}
		}
	}

	$axis.children('.lib-axis-num').width(percentage + '%');

	var $signNum = $axis.find('.lib-axis-signNum');
	$signNum.css({ display: (percentage + 4) % 25 < 9 ? 'none' : 'block' }).html(percentage + '%');

}
