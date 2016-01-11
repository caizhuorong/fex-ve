/**
 * Created by TC-62 on 2015/11/30.
 */


var H = require('common:widget/helper/helper.js');


/**
 * 获取用户基本信息
 */
$.ajax({
    url: '/api/getLoginUserInfo',
    method: 'get',
    dataType: 'json',
    cache: false,
    success: function (data) {
        window.USER_INFO = data;
    }
});
$('.login-logout').on('click', function () {
    setTimeout(function () {
        USER_INFO.status = 2;
    }, 500);
});


/** ****************** **/
var $float = $('.w-float'),
    $doc = $(document),
    $win = $(window),
    selectletter = __inline('view/selectletter.tmpl');

$win.scroll(function () {
    $float.find('a')[$doc.scrollTop() < 200 ? 'hide' : 'show']();
}).scroll();


$float.on('click', 'img', function () {
    if (USER_INFO && USER_INFO.status == 2) {
        location.href = 'http://i.veryeast.cn/user/login?redirect=' + encodeURIComponent(location.href);
    } else {
        feedback();
    }
});


function feedback() {
    layer.open({
        title: '意见反馈',
        content: selectletter,
        area: '480px',
        move: false,
        btn: false,
        success: function (layero) {
            this.layero = layero;
            H.refresh(layero.find('[name=content]'));
            H.refresh(layero.find('[name=email]').val(USER_INFO.message.email));
        },
        yes: function () {
            var tipsConfig = {tips: [2, '#FF9900'], time: 2400},
                $content = this.layero.find('[name=content]'),
                $email = this.layero.find('[name=email]'),
                content = $content.val(),
                email = $email.val(), load;

            if (content == '' || content == $content.attr('placeholder')) {
                layer.tips('请填写您的建议或问题哦！', $content, tipsConfig);
                return;
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test($.trim(email))) {
                layer.tips('请填写您的邮箱，便于回复哦', $email, tipsConfig);
                return;
            }

            load = layer.load(2, {shade: .1});

            $.ajax({
                url: '/pop/feedback',
                method: 'post',
                dataType: 'json',
                data: {
                    content: content,
                    email: $.trim(email)
                },
                success: function (data) {
                    layer.close(load);
                    if (data.status == 1) {
                        layer.message('<p>' + data.message + '</p>', 0, {
                            cancel: function () {
                                layer.closeAll();
                            }
                        });
                    } else {
                        layer.message('<p>' + data.message.errorMsg + '</p>', 2);
                    }
                }
            })
        }
    });
}