/**
 * Created by TC-62 on 2015/11/24.
 */

require('common:components/autocomplete/autocomplete.js');

var H = require('common:widget/helper/helper.js'),
    KW = {
        post: require('base:widget/cock/post.js'),
        area: require('base:widget/cock/area.js')
    },
    $keywork = $('.w-keyworks'),
    $doc = $(document),
    $his = $keywork.find('.J_search-his'),
    hisCache,

    cache = {},

    data = {
        area: require('base:widget/cock/data/area_zh-cn.js'),
        post: require('base:widget/cock/data/post_zh-cn.js')
    };

$keywork.find('.kwbtn').each(function () {
    var $me = $(this),
        name = $me.data('name'),
        $input = $me.find('input[type=hidden]'),
        val = $input.val().split(','),
        i = 0, len = val.length, list = [], tmp;
    for (; i < len; i++) {
        tmp = data[name].raw[val[i]] || data[name].type[val[i]];
        tmp && list.push(tmp);
    }
    list.length && $me.find('span').html(list.join('+'));
});


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
        var $me = $(this),
            nVal = $me.val() != '';

        if (nVal) {
            $his.hide();
        } else if (hisCache) {
            $his.show();
        } else {
            $.ajax({
                url: '/job_search/getHistory',
                method: 'post',
                dataType: 'json',
                success: function (data) {
                    var i = 0, len = data.message.length, item, html = '';

                    for (; i < len; i++) {
                        item = data.message[i];
                        html += '<li><a class="ellipsis " href="/job_search/job_list?s=history&p=' + encodeURIComponent(item.value) + '" title="' + item.word + '">' + item.word + '</a></li>';
                    }
                    $keywork.find('.J_search-his')[html == '' ? 'hide' : 'show']().find('.sb-list').html(html);
                    hisCache = html;
                }
            });
        }

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


/** ************************************* **/
var $input = $('.search-val'), opsCache = {};

$input.autocomplete({
    limit: 10,
    show: 10,
    key: 'keyword',
    className: 'auto-complete-hot',
    request: function (task, callback) {
        $.ajax({
            url: '/api/autocomplete',
            type: 'post',
            dataType: 'json',
            data: {keywords: task.keyword},
            success: function (data) {
                callback(data.message);
            }
        });
    },
    render: function (data, keyword) {
        var me = this, content = '';
        $.each(data, function (k, v) {
            content += '<li>' + me.highlight(v[me.key], keyword) + (v.exist == 1 ? '<em></em>' : '') + '</li>';
        });
        return content;
    }
});

$input.autocomplete('bind', 'hover', function ($ele, data) {
    var index = $ele.index(), list = data[index], opts = this, $list = opts.element.$list, $opsWrap;
    $list.height('auto');

    var fillOps = function (opsList) {
        var str = '<div class="ops-list">';
        for (var key in opsList) {
            str += '<a href="http://job.veryeast.cn/' + opsList[key].c_userid + '" target="_self">' + opsList[key].company_name + '</a>'
        }
        str += "</div>";
        $opsWrap = $(str).appendTo($ele);
        $ele.attr('ops-loaded', 1);
        $ele.find('em').addClass('on-ops');

        position($opsWrap);
    };

    var position = function ($opsWrap) {
        var width = Math.max($opsWrap.height(), $list.height());
        $opsWrap.css('top', -1 * $ele.index() * ($ele.outerHeight() + 3));
        $opsWrap.height(width);
        $list.height(width);
    };

    if ($ele.attr('ops-loaded') == '1') {
        position($ele.find('.ops-list'));
        return;
    }

    if (list.exist == '1') {
        if (opsCache[list.id]) {
            fillOps(opsCache[list.id]);
        } else {
            $.ajax({
                url: '/api/opskeyword',
                type: 'post',
                dataType: 'json',
                data: {id: list.id},
                success: function (data) {
                    opsCache[list.id] = data.message;
                    fillOps(opsCache[list.id]);
                }
            });
        }
    }
});


var $bar = $keywork.find('.search-bar');
$input.autocomplete('bind', 'show', function () {
    this.element.$list.height('auto').find('li').eq(0).css('margin-top', 0);
    this.element.$wrap.css({
        top: $bar.offset().top + $bar.height() + 2,
        left: this.$input.offset().left,
        width: this.$input.outerWidth()
    });
});

/** ************************************* **/



$doc.on('click', function () {
    $keywork.find('.search-type').removeClass('active');
});









