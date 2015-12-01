/**
 * Created by TC-62 on 2015/12/1.
 */


var $jobbottom = $('.w-jobbottom'),
    $joblist = $('.w-joblist'),
    check = '.base .job input[type=checkbox]';

$jobbottom.on('change', '.selectAll', function () {
    var ck = $(this).prop('checked');
    $joblist.find(check).prop('checked', ck)[(ck ? 'add' : 'remove') + 'Class']('checked');
});



var jltimer;
$joblist.on('change', check, function (ev) {
    var $self = $(this);
    jltimer = setTimeout(function () {
        var $check = $joblist.find(check),
            ck = $self.prop('checked');
        $self[(ck ? 'add' : 'remove') + 'Class']('checked');
        $jobbottom.find('.selectAll')
            .prop('checked', ck && $check.length == $check.filter('.checked').length);
    });
    ev.stopPropagation();
});
