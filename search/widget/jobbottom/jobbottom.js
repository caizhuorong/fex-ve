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


function checkAll(ck) {
    var url = [];
    ck && checks().each(function () {
        url.push($(this).data('id'));
    });

	if (url.length) {
		$jobbottom.find('.J-shows')
			.attr('href', ck ? '/job_search/job_show/' + url.join('-') : 'javascript:')
			.attr('target', ck ? '_blank' : '');// 解决ie9一下兼容问题
		$jobbottom.find('.J-collects').data('jobs', url.join('-'));
	}
}


function nHas() {
    layer.message({ right: '<h4>收藏失败</h4><span>您没有选中任何职位哦！</span>', icon: 2 });
}


$jobbottom
    .on('change', '.selectAll', function () {
        var ck = $(this).prop('checked');

        $joblist.find(check).prop('checked', ck)[(ck ? 'add' : 'remove') + 'Class']('checked');

        checkAll(ck);
    })
    .on('click', '.J-collects', function () {
        var $shows = checks();

        if (USER_INFO.status == 1) {
            if (USER_INFO.message.userType == 2) {
                // if ($shows.length) {
                //     //console.log( $(this).data('jobs') );
                //     joblist.collect($shows)
                // } else {
                //     nHas();
                // }
				joblist.collect($shows);
            } else {
                layer.message({ right: '<h4>收藏失败！</h4><span>抱歉，您是企业用户，不能收藏职位哦！</span>', icon: 2 });
            }
        } else if (USER_INFO.status == 2) {
            location.href = 'http://i.veryeast.cn/user/login?redirect=' + encodeURIComponent(location.href);
        }
    })
    .on('click', '.J-shows', function () {
        var $shows = checks();
        !$shows.length && layer.message({ right: '<h4>啊哦，不能显示</h4><span>您没有选中任何职位哦！</span>', icon: 2 });
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



$joblist.on('tplReload', function () {
	$jobbottom.find('.selectAll').prop('checked', false).end().find('.J-shows').attr('href', 'javascript:');
});

//joblist.collect( $('.w-joblist .job-child') );


