var tmpl = __inline('factor-m.tmpl');
var tpl = require('common:components/tpl/tpl.js').compile(tmpl); 

var $list = $('.cp-collapse.duty .cp-list');
$list.html($list.html().replace(/([\S ]+)/g, '<li>$1</li>'));


$('.w-factor-m').on('click', '.cp-collapse .title', function () {
	$(this).next().stop().slideToggle().end().parent().toggleClass('active')
});


exports.init = function (data) {
	$('.cp-coll-list').html(  tpl(data)  )
}