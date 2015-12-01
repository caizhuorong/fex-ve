/**
 * Created by TC-62 on 2015/11/4.
 */

'use strict';

var $doc = $(document),
    li = '.w-tabmenu li',
    joblist = require('widget/joblist/joblist.js'),
    $tabmenu = $('.w-tabmenu');

$doc.on('mouseenter', li, function () {
    $(this).addClass('hover');
}).on('mouseleave', li, function () {
    $(this).removeClass('hover');
}).on('click', li, function () {
    var $self = $(this);
    $(this).addClass('active').siblings('li').removeClass('active');
    joblist.where('cn_order', $self.data('val'));
});


/**
 * 复制翻页到底部
 */
$tabmenu.find('.tabright .ve-page-inner').clone().appendTo('.funright');


/**
 * 翻页展开效果
 */
var tabtimer;
$tabmenu.on('mouseover', '.w-tab-show, .tabright', function () {
    clearTimeout(tabtimer);
    $tabmenu.find('.tabright').removeClass('hide')
}).on('mouseout', '.tabright', function () {
    tabtimer = setTimeout(function () {
        $tabmenu.find('.tabright').addClass('hide');
    }, 500)
});


/**
 * 列表/明细
 */
var jlStyle = '.joblist-style span';
$tabmenu.on('click', jlStyle, function () {
    var $self = $(this);
    $self.addClass('action').siblings().removeClass('action');
    joblist.whole($self.hasClass('wtm-whole'));
});
$tabmenu.find(jlStyle).eq(joblist.whole()).addClass('action');