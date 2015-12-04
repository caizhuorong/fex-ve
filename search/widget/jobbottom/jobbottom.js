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
        var ck = $(this).prop('checked');
        $joblist.find(check).prop('checked', ck)[(ck ? 'add' : 'remove') + 'Class']('checked');
    })
    .on('click', '.J-collects', function () {
        var $shows = checks();

    })
    .on('click', '.J-shows', function () {
        var $shows = checks();
        console.log($shows)
    });


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


