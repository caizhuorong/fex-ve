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


$jobbottom
    .on('change', '.selectAll', function () {
        var ck = $(this).prop('checked'),
            url = [];
        $joblist.find(check).prop('checked', ck)[(ck ? 'add' : 'remove') + 'Class']('checked');

        ck && checks().each(function () {
            var $me = $(this);
            url.push($me.data('id'));
        });

        $('.J-shows').attr('href', ck ? '/job_search/job_show/' + url.join('-') : 'javascript:')
    })
    .on('click', '.J-collects', function () {
        if ($(this).href('javascript:')) {
            require.async(['base:components/layer/layer.js'], function (layer) {
                layer.message()
            });
        }
    })
    .on('click', '.J-shows', function () {
        var $shows = checks();
        console.log($shows)
    });


/**
 * TODO:
 */
$joblist.on('click', check, function (ev) {
    var $self = $(this);
    setTimeout(function () {
        var $check = $joblist.find(check),
            ck = $self.prop('checked');
        $self[(ck ? 'add' : 'remove') + 'Class']('checked');
        $jobbottom.find('.selectAll')
            .prop('checked', ck && $check.length == $check.filter('.checked').length);
    });
    ev.stopPropagation();
});


//joblist.collect( $('.w-joblist .job-child') );


