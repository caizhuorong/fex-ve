/**
 * Created by TC-62 on 2015/10/22.
 */

var template = require('common:components/tpl/tpl.js'),
    H = require('common:widget/helper/helper.js'),
    selectTimer,
    $joblist = $('.w-joblist');

e = __inline('view.tmpl');


$joblist.on('mouseenter', '.job-child', function () {
    var $all = $(this).find('.all');
    if ($all.css('display') != 'block') {
        $joblist.find('.job-child .all').hide();
        $all.stop(true).fadeIn(200);
    }
}).on('dblclick', '.job-child', function () {
    var $input = $(this).find('.job input');
    if ($input.prop('checked')) {
        $input.prop('checked', false)
    } else {
        $input.prop('checked', true)
    }
}).on('click', function () {
    var me = this;
    clearTimeout(selectTimer);
    H.selected(false, me);
    selectTimer = setTimeout(function () {
        H.selected(true, me);
    }, 300)
}).on('click', '.apply', function (ev) {
    console.log(1)
}).on('click', '.pop span', function (ev) {
    console.log(2);
    ev.stopPropagation();
});


if (!$('body').css('maxWidth')) {
    $('.w-joblist .job-child .base').each(function () {
        var $self = $(this),
            $job = $self.find('.job a'),
            $hotel = $self.find('.hotel a');

        $job.html(H.substring($job.html(), 33)).css('width', '');
        $hotel.html(H.substring($hotel.html(), 24));
    });
}


var $popbox = $('<div class="popbox"><div class="pop"><span><em></em><strong>选择求职信</strong><br>申请之前，选择求职信</span></div></div>');


var joblistTimer =
$joblist.on('mouseenter', '.operate .apply', function () {
    me = this;
    joblistTimer = setTimeout(function () {
        $popbox.appendTo($(me));
    }, 150);
}).on('mouseleave', '.operate .apply', function () {
    clearTimeout(joblistTimer);
    $popbox.remove();
});



