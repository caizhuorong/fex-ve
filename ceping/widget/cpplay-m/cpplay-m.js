'use static';

var $btn = $('#ceping-play');
var $cpplay = $('.w-cpplay-m');
var $about = $('w-about');
var $html = $('html');

$btn.click(function(ev) {
	$html.addClass('ov-hide');
	$cpplay.addClass('action');
})

$html.on('click', '.w-cpplay-m .w-cpplay-m-box .w-m-top-left', function() {
	$html.removeClass('ov-hide');
	$cpplay.removeClass('action');
}).on('click', '.w-cpplay-m .w-cpplay-m-box .w-cpplay-m-list>li', function () {
	var $this = $(this);
	$this.toggleClass('active');
});