var layer = require('base:components/layer/layer.js').skin();
var $subClick = $('.cp-sub-click');

$subClick.attr('href', 'javascript:;');
// <h4>您即将进入《人力资源主管》岗位胜任力免费测评</h4><p>测评时长90分钟，XX题，为了确保测评结果的准确性，建议您认真完成所有题目。测评中如果关闭页面或退出，系统会默认自动交卷。</p>

exports.init = function(href, name, time) {
	$subClick.on('click', function() {
		layer.open({
			title: false,
			closeBtn: false,
			content: '<div class="w-info-msg"><h4>您即将进入《<i>' + name + '</i>》岗位胜任力免费测评</h4><p>测评时长' + time + '分钟，为了确保测评结果的准确性，建议您认真完成所有题目。测评中如果关闭页面或退出，系统会默认自动交卷。</p></div>',
			success: function () {
				$(window).resize();
			},
			btn: ['确定', '取消'],
			yes: function() {
				location.href = href
			},
			area: window.screen.availWidth > 640 ? '446px' : '90%'
		})
	})
}