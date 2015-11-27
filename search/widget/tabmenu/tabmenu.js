/**
 * Created by TC-62 on 2015/11/4.
 */

'use strict';

var $doc = $(document),
    li = '.w-tabmenu li',
    joblist = require('widget/joblist/joblist.js');

$doc.on('mouseenter', li, function () {
    $(this).addClass('hover');
}).on('mouseleave', li, function () {
    $(this).removeClass('hover');
}).on('click', li, function () {
    var $self = $(this);
    $(this).addClass('active').siblings('li').removeClass('active');

    joblist.where('cn_order', $self.data('val'));
});


//require('common:components/pagination/pagination.js');

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
