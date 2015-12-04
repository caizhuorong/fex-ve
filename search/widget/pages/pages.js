/**
 * Created by TC-62 on 2015/12/3.
 */

var i
    , tpl = require('common:components/tpl/tpl.js')
    , joblist = require('search:widget/joblist/joblist.js')
    , $pages
    ;


/**
 * 复制翻页到底部
 */
$('.w-tabmenu .tabright .w-page-inner').clone().appendTo('.funright');


$pages = $('.w-page-inner:not(.nojs)');

$pages
    .on('click', '.page-btn', function () {
        joblist.where('page', parseInt($(this).siblings('.page-text').val()), true);
    })
    .on('keydown', '.page-text', function (ev) {
        ev.keyCode == 13 && $pages.find('.page-btn').click();
    })
    .on('click', 'a', function () {
        joblist.where('page', $(this).html(), true);
    }).find('a').attr('href', 'javascript:;');
