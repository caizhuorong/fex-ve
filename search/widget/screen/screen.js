/**
 * Created by zsl99a on 2015/11/1.
 */

var drop = require('widget/droplist/droplist.js'),
    $doc = $(document),
    $screen = $('.w-screen');

require.async(['base:components/layer/layer.js'], function (layer) {


    $screen.on('click', '[control=select]', function (ev) {
        var $self = $(this),
            $tpl = drop({
                $dom: $self,
                data: DROPDATA,
                skin: 'w-screen-drop'
            }, function () {});

        if ($self.hasClass('active')) {
            $tpl.hide();
        } else {
            $tpl.resize(12).move(1);
        }
        ev.stopPropagation();
    });


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