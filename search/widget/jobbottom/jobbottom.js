/**
 * Created by TC-62 on 2015/12/1.
 */


var joblist = require('widget/joblist/joblist.js'),
    $jobbottom = $('.w-jobbottom'),
    $joblist = $('.w-joblist'),
    check = '.base .job input[type=checkbox]';


function checks() {
    return $joblist.find('.job-child input.checked').closest('.job-child');
}



function checkAll (ck) {
    var url = [];
    ck && checks().each(function () {
        url.push($(this).data('id'));
    });

    $jobbottom.find('.J-shows').attr('href', ck ? '/job_search/job_show/' + url.join('-') : 'javascript:');
    $jobbottom.find('.J-collects').data('jobs', url.join('-'));
}


function nHas() {
    layer.message({right: '<h4>收藏失败</h4><span>您没有选中任何职位哦！</span>', icon: 2});
}


$jobbottom
    .on('change', '.selectAll', function () {
        var ck = $(this).prop('checked');

        $joblist.find(check).prop('checked', ck)[(ck ? 'add' : 'remove') + 'Class']('checked');

        checkAll(ck);
    })
    .on('click', '.J-collects', function () {
        var $shows = checks();
        if ($shows.length) {
            //console.log( $(this).data('jobs') );
            joblist.collect($shows)
        } else {
            nHas();
        }
    })
    .on('click', '.J-shows', function () {
        var $shows = checks();
        !$shows.length && nHas();
    });


/**
 * todo: 判断是否全选
 */
$joblist.on('click', check, function (ev) {
    var $self = $(this);
    setTimeout(function () {
        var $check = $joblist.find(check),
            ck = $self.prop('checked');

        $self[(ck ? 'add' : 'remove') + 'Class']('checked');
        $jobbottom.find('.selectAll').prop('checked', ck && $check.length == $check.filter('.checked').length);
        checkAll(ck);
    });
    ev.stopPropagation();
});


//joblist.collect( $('.w-joblist .job-child') );


