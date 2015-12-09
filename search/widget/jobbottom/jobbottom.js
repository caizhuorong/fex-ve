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


function nHas() {
    layer.message({right: '<h4>你没有选中如何职位！</h4>', icon: 2});
}


$jobbottom
    .on('change', '.selectAll', function () {
        var ck = $(this).prop('checked'),
            url = [];
        $joblist.find(check).prop('checked', ck)[(ck ? 'add' : 'remove') + 'Class']('checked');

        ck && checks().each(function () {
            var $me = $(this);
            url.push($me.data('id'));
        });

        $('.J-shows').attr('href', ck ? '/job_search/job_show/' + url.join('-') : 'javascript:');
    })
    .on('click', '.J-collects', function () {
        $(this).attr('href') == 'javascript:' && nHas();
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
            ck = $self.prop('checked'),
            cks, url = [];

        $self[(ck ? 'add' : 'remove') + 'Class']('checked');
        $jobbottom.find('.selectAll').prop('checked', ck && $check.length == $check.filter('.checked').length);


        // 显示选中职位 url拼接;
        cks = checks();
        cks.each(function () {
            var $me = $(this);
            url.push($me.data('id'));
        });
        $('.J-shows').attr('href', cks.length ? '/job_search/job_show/' + url.join('-') : 'javascript:')
    });
    ev.stopPropagation();
});


//joblist.collect( $('.w-joblist .job-child') );


