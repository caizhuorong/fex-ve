'use static';

var $btn = $('#ceping-play');
var $cpplay = $('.w-cpplay-m');
var $about = $('w-about');
var $html = $('html');

$btn.click(function(ev) {
	$html.addClass('ov-hide');
	$cpplay.addClass('action');
})

$html.on('click', '.w-cpplay-m .w-cpplay-box .w-m-top-left', function() {
	$html.removeClass('ov-hide');
	$cpplay.removeClass('action');
})