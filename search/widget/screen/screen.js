/**
 * Created by zsl99a on 2015/11/1.
 */

var drop = require('widget/droplist/droplist.js'),
    $doc = $(document),
    $screen = $('.w-screen');

require.async(['base:components/layer/layer.js'], function (layer) {


    function render (data) {

    }



    $screen.on('click', '[control=select]', function (ev) {
        var name = $(this).find('input[name]').attr('name')

        var $self = $(this),
            $tpl = drop({
                $dom: $self,
                data: DROPDATA,
                skin: 'w-screen-drop'
            }, function (val) {
                window.location.search

                $.ajax({
                    url: window.location.href,
                    method: 'post',
                    dataType: 'json',
                    success: render
                });

                /*
                 var arr_where_filter_second = window._REQUEST.arr_where_filter_second,
                 i, len, list, test = {};
                 if (arr_where_filter_second) {
                 list = arr_where_filter_second.split('*');
                 for (i = 0, len = list.length; i < len; i++) {
                 list[i] = list[i].split('-s||');
                 test[list[i][0]] = list[i][1];
                 }

                 }
                 test[name] = val;

                 console.log(test);

                 arr_where_filter_second = '';
                 for (i in test) {
                 arr_where_filter_second += i + '-s||' + test[i] + '*';
                 }

                 window._REQUEST.arr_where_filter_second = arr_where_filter_second;
                 window.location.search = $.param(window._REQUEST);
                */
            });

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
    var tipsConfig = {tips: [1, '#FF9900'], time: 2400};
    $screen.on('click', '.screen .btn-n1', function () {
        var $input = $(this).siblings('input'),
            $child = $screen.find('.child'),
            val = $input.val().trim();
        if ($child.find('span').length == 4) {
            layer.tips('最多只支持4个关键字！', $child, tipsConfig);
        } else if (val == '') {
            layer.tips('这里什么都木有！', $input, tipsConfig);
        } else {
            $child.append('<span>' + $input.val().trim() + '<i></i></span>');
            $input.val('');
        }
        $input.focus();
    }).on('click', '.child span i', function () {
        $(this).parent().animate({'opacity': 0}, 200, function () {
            $(this).remove()
        });
    }).on('keydown', '.screen input', function (ev) {
        if (ev.keyCode == 13) {
            $screen.find('.screen .btn-n1').click();
        }
    });


});