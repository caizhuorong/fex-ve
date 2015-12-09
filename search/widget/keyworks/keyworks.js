/**
 * Created by TC-62 on 2015/11/24.
 */

var H = require('common:widget/helper/helper.js'),
    post = require('base:widget/cock/post.js'),
    $keywork = $('.w-keyworks'),
    $doc = $(document);


$keywork
    .on('click', '.kwbtn', function () {
        post($(this).data(), function (data) {

        });
    })

    .on('click', '.search-type', function (ev) {
        $(this).toggleClass('active');
        ev.stopPropagation();
    })
    .on('click', '.search-type li', function (ev) {
        var $me = $(this);
        $keywork
            .find('.search-type').removeClass('active')
            .find('.keyword_scope').val($me.data('name'))
            .siblings('span').html($me.html());
        ev.stopPropagation();
    });


$doc.on('click', function () {
    $keywork.find('.search-type').removeClass('active');
});
