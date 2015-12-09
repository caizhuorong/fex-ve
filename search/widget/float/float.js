/**
 * Created by TC-62 on 2015/11/30.
 */




var $float = $('.w-float'),
    $doc = $(document),
    $win = $(window),
    selectletter = __inline('view/selectletter.tmpl');

$win.scroll(function () {
    $float.find('a')[$doc.scrollTop() < 200 ? 'hide' : 'show']();
}).scroll();


$float.on('click', 'img', function () {
    layer.open({
        title: '请选择求职信',
        content: selectletter,
        area: '480px',
        move: false,
        btn: false,
        success: function (layero) {
            this.layero = layero;
            $.ajax({
                url: '/api/getLoginUserInfo',
                method: 'get',
                dataType: 'json',
                success: function (data) {
                    if (data.status == 1) {
                        layero.find('[name=email]').val(data.message.email);
                    }
                }
            })
        },
        yes: function () {
            $.ajax({
                url: '/pop/feedback',
                method: 'post',
                dataType: 'json',
                data: {
                    content: this.layero.find('[name=content]').val(),
                    email: this.layero.find('[name=email]').val()
                },
                success: function (data) {
                    if (data.status == 1) {
                        layer.message('<p>' + data.message + '</p>', 0, {
                            cancel: function () {
                                layer.closeAll();
                            }
                        });
                    } else {
                        layer.message('<p>' + data.message.errorMsg + '</p>', 1);
                    }
                }
            })
        }
    });
})
