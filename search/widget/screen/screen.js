/**
 * Created by zsl99a on 2015/11/1.
 */

var drop = require('widget/droplist/droplist.js'),
    H = require('common:widget/helper/helper.js'),
    $doc = $(document),
    $screen = $('.w-screen');

require.async(['base:components/layer/layer.js'], function (layer) {


    var joblist = require('widget/joblist/joblist.js');


    function getTimer(offset) {
        var time = new Date;
        time.setTime(time.valueOf() - _SERVER_TIME_OFFSET); // 服务器时间偏移
        time.setDate(time.getDate() + (offset || 0));       // 参数时间偏移
        return time.getFullYear() + '-' + H.pad(time.getMonth() + 1, 2) + '-' + H.pad(time.getDate(), 2);
    }


    /**
     * 条件筛选
     */
    function where_second() {
        var vals = $screen.find('.drops form').serializeArray(),
            arr_where_filter_second = '', i, len, name, value;

        for (i = 0, len = vals.length; i < len; i++) {
            name = vals[i]['name'];
            value = vals[i]['value'];
            if (name == 'job_add_time') {
                // 发布日期
                if (value && value != 0) {
                    arr_where_filter_second += name + ' >-s||' + getTimer(-value) + '*';
                }
            } else if (name == 'salary') {
                // 月薪范围
                if (value && value != 0) {
                    value = DROPDATA_FILTER[name][value].split('-');
                    arr_where_filter_second += 'salary_min-s||' + value[0] + '*' + 'salary_max-s||' + value[1] + '*';
                }
            } else if (value && value != 0) {
                arr_where_filter_second += name + '-s||' + value + '*';
            }
        }
        arr_where_filter_second = arr_where_filter_second.slice(0, -1);

        joblist.where('arr_where_filter_second', arr_where_filter_second);
    }


    $screen.on('click', '[control=select]', function (ev) {
        var name = $(this).find('input[name]').attr('name');

        var $self = $(this),
            $tpl = drop({
                $dom: $self,
                data: DROPDATA,
                skin: 'w-screen-drop'
            }, where_second);

        if ($self.hasClass('active')) {
            $tpl.hide();
        } else {
            $tpl.resize(12).move(1);
        }
        ev.stopPropagation();
    });


    /**
     * 过滤关键字
     */
    var tipsConfig = {tips: [1, '#FF9900'], time: 2400},
        $child = $screen.find('.child');

    function changeKeyWork() {
        var keys = [];
        $child.find('span').each(function () {
            var item = $(this).data('item');
            if (item)keys.push(item);
        });
        joblist.where('arr_where_filter_reverse_str', keys.join('||'))
    }

    $screen
        .on('click', '.screen .btn-n1', function () {
            var $input = $(this).siblings('input'),
                val = $input.val().trim();
            if ($child.find('span').length == 4) {
                layer.tips('最多只支持4个关键字！', $child, tipsConfig);
            } else if (val == '') {
                layer.tips('这里什么都木有！', $input, tipsConfig);
            } else {
                /**
                 *  添加关键字
                 */
                $input.val('');
                $child.append($('<span>' + val + '<i></i></span>').data('item', val));
                changeKeyWork();
            }
            $input.focus();
        })
        .on('click', '.child span i', function () {
            /**
             *  删除关键字
             */
            var $span = $(this).parent();

            $span.data('item', '').animate({'opacity': 0}, 200, function () {
                $(this).remove();
            });
            changeKeyWork();
        })
        .on('keydown', '.screen input', function (ev) {
            ev.keyCode == 13 &&  $screen.find('.screen .btn-n1').click();

        });


});