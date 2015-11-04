// www.veryeast.cn 2012.08.01 Iceli
var countdown;
jQuery.fn.extend({
    'to_default': function () {
        this.removeClass('error_notice').html(this.attr('default'));
    }
});

$(document).ready(function () {

    /*提交按钮交互效果*/

    //下一步
    $(".next_btn").hover(function () {
        $(this).css("background-position", "-43px -326px");
    }, function () {
        $(this).css("background-position", "-214px -326px");
    });
    $(".return_btn").hover(function () {
        $(this).css("background-position", "-43px -370px");
    }, function () {
        $(this).css("background-position", "-214px -370px");
    });
    $(".confirm_btn").hover(function () {
        $(this).css("background-position", "-43px -458px");
    }, function () {
        $(this).css("background-position", "-214px -458px");
    });
    $(".confirm_btn2").hover(function () {
        $(this).css("background-position", "-43px -414px");
    }, function () {
        $(this).css("background-position", "-214px -414px");
    });
    $(".cancel_btn").hover(function () {
        $(this).css("background-position", "-43px -499px");
    }, function () {
        $(this).css("background-position", "-214px -499px");
    });
    $(".public_btn").hover(function () {
        $(this).css("background-position", "-43px -665px");
    }, function () {
        $(this).css("background-position", "-214px -665px");
    });
    $(".save_resume_btn").hover(function () {
        $(this).css("background-position", "-43px -624px");
    }, function () {
        $(this).css("background-position", "-214px -624px");
    });
    $(".select_resume_btn,.opus_upload_btn,.certificate_upload_btn,.attachment_upload_btn").hover(function () {
        $(this).css("background-position", "-43px -1086px");
    }, function () {
        $(this).css("background-position", "-214px -1086px");
    });
    $(".opus_upload_btn_en,.certificate_upload_btn_en,.attachment_upload_btn_en").hover(function () {
        $(this).css("background-position", "-43px -1185px");
    }, function () {
        $(this).css("background-position", "-214px -1185px");
    });

    //密码找回方式选择
    $(".no_secret ul li :radio").click(function () {
        $(this).parent().children(":text").removeClass("unusable").removeAttr("disabled");
        $('.method1_text').val('');
        $(this).parent().siblings("li").not(".validatecode").children(":text").addClass("unusable").attr("disabled", "disabled");

    });
    $(".no_secret ul li :radio").first().click();

    /*$('.method1_text').focus(function(){
     $(".method1_header_notice").to_default();
     });*/

    //找回密码
    $("#secret_method1").hover(function () {
        $(".method_1").css("background-position", "-43px -239px");
    }, function () {
        $(".method_1").css("background-position", "-214px -239px");
    });
    $("#secret_method2").hover(function () {
        $(".method_2").css("background-position", "-43px -282px");
    }, function () {
        $(".method_2").css("background-position", "-214px -282px");
    });
    $("#secret_method1").click(function () {
        $(this).removeClass("method_1").addClass("method_1_hover").css("background-position", "0 0");
        $("#secret_method2").removeClass("method_2_hover").addClass("method_2").css("background-position", "-214px -282px");
        $("#secret_method1_content1").show();
        $("#secret_method1_content2").hide();
        reloadcode();
    });
    $("#secret_method2").click(function () {
        $(this).removeClass("method_2").addClass("method_2_hover").css("background-position", "0 0");
        $("#secret_method1").removeClass("method_1_hover").addClass("method_1").css("background-position", "-214px -239px");
        $("#secret_method1_content2").show();
        $("#secret_method1_content1").hide();
        reloadcode();
    });


    $('.method1_text').focus(function () {
        $(".method1_header_notice").to_default();
    });

    $("#method1_mobile").blur(function () {
        var mobile_num = trim($(this).val());
        $(this).val(mobile_num);
        if (!check_mobile(mobile_num)) {
            $(".method1_header_notice").addClass('error_notice').html('请输入11位数字的手机号码');
        } else {
            $(".method1_header_notice").to_default();
        }
    })

    $("#method1_username").blur(function () {
        var username = trim($(this).val());
        $(this).val(username);
        if (!check_username(username)) {
            $(".method1_header_notice").addClass('error_notice').html('请输入4到20个字符的用户名');
        } else {
            $(".method1_header_notice").to_default();
        }
    })

    $('#method1_email').blur(function () {
        var email = trim($(this).val());
        $(this).val(email);
        if (strlen(email) > 50) {
            $('.method1_header_notice').addClass('error_notice').html('请输入50字以内的邮箱');
        } else if (!check_email(email)) {
            $('.method1_header_notice').addClass('error_notice').html('请输入正确的邮箱，例如username@example.com');
        } else {
            $('.method1_header_notice').to_default();
        }
    })

    $('.new_pwd').focus(function () {
        $('.new_pwd_notice').to_default();
    }).keyup(function () {
        var password = $(this).val();
        var level = get_password_level(password);
        show_password_level(level);
    }).blur(new_pwd_blur);

    $('.cfm_new_pwd').focus(function () {
        $('.cfm_new_pwd_notice').to_default();
    }).blur(cfm_new_pwd_blur);

    $('.verify_code').focus(function () {
        $('.secret_method_content:visible .validatecode_notice').to_default();
    });

    $('#question_username').focus(function () {
        $('.question_validatecode_notice').to_default();
    }).blur(function () {
        var username = trim($(this).val());
        $(this).val(username);
        if (!check_username(username)) {
            $('.question_validatecode_notice').addClass('error_notice').html('请输入4到20个字符的用户名');
        } else {
            $('.question_validatecode_notice').to_default();
        }
    })

    $('#question_verify_code').focus(function () {
        if ($('.question_validatecode_notice').html() == '请输入验证码')
            $('.question_validatecode_notice').to_default();
    }).blur(function () {
        var code = trim($(this).val());
        if (is_null(code)) {
            $('.question_validatecode_notice').addClass('error_notice').html('请输入验证码');
        }
    })

    $('#findpwd_answer_text').focus(function () {
        $('.answer_notice').to_default();
    }).blur(function () {
        var answer = $(this).val();
        if (is_null(answer)) {
            $('.answer_notice').addClass('error_notice').html('请输入密保问题答案');
        } else {
            $('.answer_notice').to_default();
        }
    })
    reloadcode();

});//$(document).ready 结束

function reloadcode() {
    var d = new Date();
    var src = 'http://sso.veryeast.cn/verify/show?t=' + d.toTimeString();
    $('.secret:visible .validatecode_image').attr('src', src);
}
var submiting;
function forget_pwd_submit() {
    if (submiting) return false;
    submiting = true;
    setTimeout(function () {
        submiting = false;
    }, 3000);

    var field = $(".no_secret ul li input:checked").val();
    var value = $(".no_secret ul li input:checked").parent().children('.method1_text').val();
    var code = $(".secret_method_content:visible .verify_code").val();
    var status = false;
    $(".no_secret ul li input:checked").parent().children('.method1_text').blur();
    eval("status=check_" + field + "(value);");
    if (status) {
        if (!is_null(code)) {
            check_code({
                'code': code,
                'success': forget_pwd_submit_main,
                'fail': function () {
                    $('.secret:visible .validatecode_notice').addClass('error_notice').html('验证码错误');
                }
            });
        } else {
            $('.secret:visible .validatecode_notice').addClass('error_notice').html('请输入验证码');
        }
    }
}

function forget_pwd_submit_main() {
    $('.secret:visible .validatecode_notice').to_default();
    var field = $(".no_secret ul li input:checked").val();
    var value = $(".no_secret ul li input:checked").parent().children('.method1_text').val();
    forget_pwd_submit_callback({'field': field, 'value': value, 'encoding': 'utf-8'}, function (json) {
        reloadcode();
        if (json.flag == 0) {
            $('#find_result_email_type').html('');
            $('#find_result_email').html('');
            $(".secret_method_content:visible .verify_code").val('');

            var email_info_html = '';
            var email_types = {};
            var email_type_html = '';
            for (var i in json.email_info) {
                email_info_html += json.email_info[i]['email'] + '<br>';
                if (json.email_info[i]['type'] && typeof(email_types[json.email_info[i]['type']['name']]) == 'undefined') {
                    email_types[json.email_info[i]['type']['name']] = json.email_info[i]['type'];
                }
            }
            $('#find_result_email').html(email_info_html);

            var part = '';
            for (var j in email_types) {
                if (email_types[j]['name']) {
                    email_type_html += part + '<a href="' + email_types[j]['home'] + '" target="_blank" class="linkcolor_blue text_underline" >' + email_types[j]['name'] + '</a>';
                    part = '、';
                }
            }
            if (email_type_html) {
                $('#find_result_email_type').html('立刻登录' + email_type_html);
            }
            $('#email_findpwd_result').show();
            $('#email_findpwd').hide();
            before_resend_email();
        } else {
            $(".method1_header_notice").addClass('error_notice').html('抱歉，您未注册过最佳东方！');
        }
    })
}

function question_finpwd_submit() {
    var username = trim($('#question_username').val());
    var code = $('#question_verify_code').val();
    $('#question_username').blur();
    if (check_username(username)) {
        $('#question_verify_code').blur();
        if (!is_null(code)) {
            check_code({
                'code': code,
                'success': function () {
                    var username = trim($('#question_username').val());
                    get_question({'field': 'username', 'value': username, 'encoding': 'utf-8'}, function (json) {
                        reloadcode();
                        $('#question_verify_code').val('');
                        if (json.flag == 1042) {
                            after_get_question();
                            $('.question_findpwd_question').html(json.question);
                        } else if (json.flag == 1041) {
                            $('.question_validatecode_notice').addClass('error_notice').html('抱歉，您未设置密保问题！');
                        } else {
                            $('.question_validatecode_notice').addClass('error_notice').html('抱歉，您未注册过最佳东方！');
                        }
                    });
                },
                'fail': function () {
                    $('.question_validatecode_notice').addClass('error_notice').html('验证码错误');
                }
            });
        }
    }
}

function answer_submit() {
    var answer = trim($('#findpwd_answer_text').val());
    $('#findpwd_answer_text').blur();
    if (!is_null(answer)) {
        var username = trim($('#question_username').val());
        var question = trim($('.question_findpwd_question').html());
        check_answer({'field': 'username', 'value': username, 'question': question, 'answer': answer}, function (json) {
            if (json.flag == 0) {
                $('#findpwd_answer_text').val('');
                window.location.href = json.reset_password_url;
            } else {
                $('.answer_notice').addClass('error_notice').html('答案错误');
            }
        });
    }
}

function check_code(obj) {
    $.ve_get('http://sso.veryeast.cn/verify/get', {}, function (data) {
        if (obj.code == data.code) {
            obj.success();
        } else {
            obj.fail();
        }
    });
}

function forget_pwd_submit_callback(data, callback) {
    data = obj_merge({'method': 'email'}, data);
    $.ve_get(
        'http://sso.veryeast.cn/user/forget_password',
        data,
        callback);
}

function get_question(data, callback) {
    data = obj_merge({'method': 'question'}, data);
    $.ve_get(
        'http://sso.veryeast.cn/user/forget_password',
        data,
        callback);
}

function check_answer(data, callback) {
    data = obj_merge({'method': 'check_answer', 'encoding': 'utf-8'}, data);
    $.ve_get(
        'http://sso.veryeast.cn/user/forget_password',
        data,
        callback);
}

function repeat_send_email() {
    var field = $(".no_secret ul li input:checked").val();
    var value = $(".no_secret ul li input:checked").parent().children('.method1_text').val();
    forget_pwd_submit_callback({'field': field, 'value': value}, function (json) {
        if (json.flag == 0) {
            after_resend_email();
        }
    });
}

function after_resend_email() {
    $('.after_resend_email').show();
    $('.before_resend_email').hide();
    $('.current_num').html(60);
    clearInterval(countdown);
    countdown = setInterval(show_countdown, 1000);
}

function show_countdown() {
    var second = $('.current_num').html() * 1;
    if (second <= 1) {
        before_resend_email();
        clearInterval(countdown);
    }
    second--;
    $('.current_num').html(second);
}

function before_resend_email() {
    $('.before_resend_email').show();
    $('.after_resend_email').hide();
}

function after_get_question() {
    $('.have_secret').hide();
    $('#question_findpwd_answer_info').show();
}

function before_get_question() {
    $('.have_secret').hide();
    $('#question_findpwd_question_info').show();
}

function findpwd_return() {
    $('#email_findpwd').show();
    $('#email_findpwd_result').hide();
}

function reset_password_submit() {
    if (!new_pwd_blur())
        return false;
    if (!cfm_new_pwd_blur())
        return false;
    var password = trim($('.new_pwd').val());
    var password_confirm = trim($('.cfm_new_pwd').val());
    var code = $('#code').val();
    $.ve_get(
        'http://sso.veryeast.cn/user/reset_password',
        {'code': code, 'password': password, 'password_confirm': password_confirm, 'encoding': 'utf-8'},
        function (json) {
            if (json.flag == 0) {
                $(".set_password_body").hide();
                $(".v_set_password").show();
            } else if (json.flag == 8001) {
                $(".set_password_body").hide();
                $(".f_set_password").show();
            }
        });
};

function new_pwd_blur() {
    var password = trim($(".new_pwd").val());
    var username = trim($('#username_span').html());
    var res = check_password(password, username);
    $('.password_level_info').hide();
    $(".new_pwd_notice").show();
    switch (res) {
        case 1:
            $(".new_pwd_notice").addClass('error_notice').html('请输入密码');
            break;
        case 2:
            $(".new_pwd_notice").addClass('error_notice').html('密码不得少于6位');
            break;
        case 3:
            $(".new_pwd_notice").addClass('error_notice').html('密码不得超过20位');
            break;
        case 4:
            $(".new_pwd_notice").addClass('error_notice').html('密码不得包含系统敏感字符');
            break;
        case 5:
            $(".new_pwd_notice").addClass('error_notice').html('密码不得与用户名相同或为password');
            break;
        case 0:
            $(".new_pwd_notice").to_default();
            var level = get_password_level(password);
            show_password_level(level);
            return true;
            break;
    }
    return false;
};

function show_password_level(level) {
    var level_bg = {0: "#C8C8C8", 1: "#ff0000", 2: "#ff6600", 3: "#11b100"};
    $('.password_level_info').show();
    $('.password_level').each(function () {
        if ($(this).attr('level') <= level) {
            $(this).css('background', level_bg[level]);
        } else {
            $(this).css('background', level_bg[0]);
        }
    })
    $('.new_pwd_notice').hide();
}

function cfm_new_pwd_blur() {
    var password = trim($(".new_pwd").val());
    var confirm_password = trim($(".cfm_new_pwd").val());
    if (is_null(confirm_password)) {
        $(".cfm_new_pwd_notice").addClass('error_notice').html('请再次输入上面填写的密码');
    } else if (confirm_password != password) {
        $(".cfm_new_pwd_notice").addClass('error_notice').html('两次输入的密码不一致');
    } else {
        $(".cfm_new_pwd_notice").to_default();
        return true;
    }
};

//注册页显示提示信息 加载页面时直接运行$(document).ready(function()
function showtip(thisObj, strMsg) {
    $("#append_parent").css("position", "absolute");
    $("#append_parent").css("z-index", 600);
    $("#append_parent").css("display", "block");
    var strHtml = '<div class="jobs_tip"><div class="jobs_tip_top"></div><div class="jobs_tip_content"><p>' + strMsg + '</p></div><div class="jobs_tip_bottom"></div></div>';
    $("#append_parent").html(strHtml);
    var div_width = $("#append_parent").width();
    var div_height = $("#append_parent").height();
    var div_top = $(thisObj).offset().top - 4;
    var div_left = $(thisObj).offset().left + $(thisObj).width() + 15;
    $("#append_parent").css("left", div_left);
    $("#append_parent").css("top", div_top);
    $("#append_parent").show();
};

function closetip() {
    $("#append_parent").hide();
};

function strLenCalc(obj, checklen, maxlen) {
    var v = obj.val(), charlen = 0, maxlen = !maxlen ? 2000 : maxlen, curlen = maxlen, len = v.length;
    for (var i = 0; i < v.length; i++) {
        if (v.charCodeAt(i) < 0 || v.charCodeAt(i) > 255) {
            curlen -= 1;
        }
    }
    /*Math.ceil(x):比x大的最小值。Math.floor(x):比x小的最大值。 */
    if (curlen >= len) {
        $("#" + checklen).html("已输入<strong>" + (maxlen / 2 - Math.floor((curlen - len) / 2)) + "</strong>字");
    } else {
        $("#" + checklen).html("已经超过 <strong>" + Math.ceil((len - curlen) / 2) + "</strong>字");
    }
};
