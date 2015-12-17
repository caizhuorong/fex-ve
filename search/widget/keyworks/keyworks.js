/**
 * Created by TC-62 on 2015/11/24.
 */

var H = require('common:widget/helper/helper.js'),
    KW = {
        post: require('base:widget/cock/post.js'),
        area: require('base:widget/cock/area.js')
    },
    $keywork = $('.w-keyworks'),
    $doc = $(document);









$keywork
/**
 * 神奇的弹出窗
 */
    .on('click', '.kwbtn[data-name]', function () {
        var $this = $(this),
            data = $this.data();

        data.hit = $this.find('input').val().split(',');

        KW[$this.data('name')](data, function (list) {
            var value = list.v.join(','),
                text = list.t.join('+');

            $this.find('input').val(value ? value : '');
            $this.attr('title', text ? text : $this.data('title'));
            $this.find('span').html(text ? text : $this.data('placeholder'));

        });
    })


/**
 * 搜索关键字类型
 */
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
    })


/**
 * 历史纪录和联想
 */
    .on('focus', '.search-val', function () {
        var $me = $(this);

        $.ajax({
            url: 'http://search1.veryeast.cn/job_search/getHistory',
            method: 'post',
            dataType: 'json',
            success: function (data) {
                var i, len, list = [];

                for (i = 0, len = data.message.length; i < len; i++) {
                    list.push(data.message[i].value);
                }

            }
        });
    });


$doc.on('click', function () {
    $keywork.find('.search-type').removeClass('active');
});
