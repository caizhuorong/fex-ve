/**
 * Created by TC-62 on 2015/10/20.
 */

var SSO_Controller = require('common:widget/sso/sso.js'),
    sso,
    parameter = {},
    $top = $('.ve-w-top');


/**
 * iframe 延迟加载
 */
function lazyload() {
    var $imgbtn = $('.top_bch_imgbtn')
    function load () {
        var $self = $(this);
        if (!$self.attr('src')) {
            $self.attr('src', $self.attr('lazy-src'));
        }
    }
    $imgbtn.one('mouseover', function () {
        $(this).find('[lazy-src]').each(load);
    });
    setTimeout(function () {
        $top.find('[lazy-src]').each(load);
    }, 5000);
}


/**
 * 登陆状态模板
 */
function loginInit() {
    parameter.autologin = 1;
    parameter['welcome'] = '<span class="top_bc_tit">您好，欢迎来到最佳东方！</span> <a href="http://i.veryeast.cn/user/login/" class="color_main" target="_self">请登录</a> <a href="http://i.veryeast.cn/user/register/" target="_self">免费注册简历</a> <a href="http://vip.veryeast.cn/Reg.asp/" target="_self">注册企业会员</a>';
    parameter['quit'] = '<span class="top_bc_tit">您好，<span class="color_main user-name">企业</span>，欢迎来到最佳东方！</span> <a href="http://vip.veryeast.cn/" class="col_333" target="_self">进入招聘通</a><a class="login-logout">[退出]</a>';
    parameter['quit2'] = '<span class="top_bc_tit">您好，<span class="color_main user-name">个人</span>，欢迎来到最佳东方！</span> <a href="http://my.veryeast.cn/user/home/" class="col_333" target="_self">进入我的最佳东方</a><a class="login-logout">[退出]</a>';
}


/**
 * 初始化sso
 */
function initSso() {
    try {
        sso = new SSO_Controller(null, $);
        sso.init({
            name: 'sso',
            encoding: 'utf-8',
            is_check_login_state: false,
            custom_login_state_callback: function (cookieinfo) {
                loginEnter(cookieinfo);
            }
        });
        sso = window.sso = sso;
        sso.custom_login_state_callback(sso.cookieinfo);
    } catch (err) {
        console && console.log(err);
    }
}


/**
 * 登陆状态的回掉函数
 * @param data // sso.cookieinfo
 */
function loginEnter(data) {
    var name, type, $tl = $('.top-l');

    if (data && (parameter.username = name = data.username)) {
        type = data.user_type;
        if (1 == type) {
            $tl.html(parameter.quit);

        } else if (2 == type) {
            $tl.html(parameter.quit2);
        }
        $('.user-name').html(name);
    } else {
        $tl.html(parameter.welcome);
    }
}


/**
 * 退出
 */
function logout() {
    sso.logout('script');
    initSso();
}


function operate() {
    var $tbb = $top.find('.top_bc_btn');

    $tbb.on('mouseenter', function () {
        $(this).find(".top_ck_btn").slideDown();
    }).on("mouseleave", function () {
        $(this).find(".top_ck_btn").hide();
    });

    $top.on('click', '.login-logout', logout);
}


function init() {
    loginInit();
    initSso();
    operate();
    lazyload();
}

init();


// 对外接口，退出
exports.logout = logout;
// 状态刷新，（登陆后操作）
exports.initSso = initSso;