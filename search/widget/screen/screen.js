/**
 * Created by zsl99a on 2015/11/1.
 */

var drop = require('common:widget/droplist/droplist.js'),
    $doc = $(document),
    $screen = $('.w-screen');

require.async(['base:components/layer/layer.js'], function (layer) {


    $screen.find('[control=select]').on('click', function (ev) {
        var $self = $(this),
            $tpl = drop($self, DROPDATA, 'w-screen-drop', function () {

            });

        if ($self.hasClass('active')) {
            $tpl.hide();
        } else {
            $tpl.move(12, 1);
        }
        ev.stopPropagation();
    });


    $screen.on('click', '.screen .btn-n1', function () {
        var $input = $(this).siblings('input'),
            val = $input.val().trim();

        if (val != '') {
            $screen.find('.child').append('<span>' + $input.val().trim() + '<i></i></span>');
        } else {
            layer.tips('这里什么都木有！', $input, {tips: [1, '#FF9900'], time: 2000});
        }
        $input.val('').focus();
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