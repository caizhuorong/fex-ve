/**
 * Created by TC-62 on 2015/11/24.
 */

var H = require('common:widget/helper/helper.js'),
    KW = {
        post: require('base:widget/cock/post.js'),
        area: require('base:widget/cock/area.js')
    },
    $keywork = $('.w-keyworks'),
    $doc = $(document),

    his = __inline('view/history.tmpl'),
    hisCache = {},
    $ass = $keywork.find('.J_search-ass'),
    cache = {};


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
    .on('keyup.rapid', '.search-val', function () {
        var $me = $(this);
        $ass[$me.val() == '' ? 'show' : 'hide']();
    })

    .on('focus', '.search-val', function () {
        $keywork.find('.search-val').trigger('keyup.rapid');
    })
    .on('blur', '.search-val', function () {
        cache.timer = setTimeout(function () {
            $keywork.find('.search-rapid').hide()
        }, 0);
    })
    .on('mousedown', '.search-rapid', function () {
        setTimeout(function () {
            clearTimeout(cache.timer)
        }, 0)
    });












/*
if (list.exist == '1') {
    if (opsCache[list.id]) {
        fillOps(opsCache[list.id]);
    } else {
        $.ajax({
            url: '/api/opskeyword',
            type: 'post',
            dataType: 'json',
            data: {id: list.id},
            success: function(response) {
                opsCache[list.id] = response.data;
                fillOps(opsCache[list.id]);
            }
        });
    }
}
*/






















$doc.on('click', function () {
    $keywork.find('.search-type').removeClass('active');
});
