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

    $.ajax({
        url: './job_list',
        method: 'post',
        data: {
            funtype:'0000',
            funtype_text:'职位类别不限',
            jobarea:'0000',
            jobarea_text:'工作地点不限',
            keyword_scope:'job_name',
            key_words:'服务员',
            job_add_time:0,
            company_type:0,
            work_year_min:0,
            work_year_max:1000,
            salary_min:0,
            salary_max:1000000,
            form_src:'local'
        },
        success: function(data) {
            console.log(data.message);
        },
        error: function (err) {}
    });
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
