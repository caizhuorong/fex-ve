/**
 * Created by TC-62 on 2015/11/4.
 */

'use strict';

var $doc = $(document),
    li = '.w-tabmenu li';

$doc.on('mouseenter', li, function () {
    $(this).addClass('hover');
}).on('mouseleave', li, function () {
    $(this).removeClass('hover');
}).on('click', li, function () {
    $(this).addClass('active').siblings('li').removeClass('active');


});


require('common:components/pagination/pagination.js');

/*
$('.pages').pagination({
    url: './job_list',
    $page: $('.page'),
    //data: {},
    fillContent: function(data) {
        console.log(data);
    }
});
*/
