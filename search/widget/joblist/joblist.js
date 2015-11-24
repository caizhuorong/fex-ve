/**
 * Created by TC-62 on 2015/10/22.
 */

var tpl = require('common:components/tpl/tpl.js'),
    drop = require('widget/droplist/droplist.js'),
    H = require('common:widget/helper/helper.js'),
    selectTimer,
    $joblist = $('.w-joblist');
//e = __inline('view.tmpl');


/**
 * 基本展示效果  ↓←← 有装逼嫌疑
 */
$joblist.on('mouseenter', '.job-child', function () { // 鼠标移入展开
    var $all = $(this).find('.all');
    if ($all.css('display') != 'block') {
        $joblist.find('.job-child .all').hide();
        $all.stop(true).fadeIn(200);
    }
}).on('dblclick', '.job-child', function () { // 双击选中
    var $input = $(this).find('.job input');
    if ($input.prop('checked')) {
        $input.prop('checked', false);
    } else {
        $input.prop('checked', true);
    }
}).on('click', function () { // 双击文本选中bug处理
    var me = this;
    clearTimeout(selectTimer);
    H.selected(false, me);
    selectTimer = setTimeout(function () {
        H.selected(true, me);
    }, 300)
});


/**
 *  超长文本截断
 */
// 多行
$joblist.find('.attr .brief').each(function () {
    var $self = $(this);

    $self.html(H.substring($self.text(), 220));
});

// 低版本单行兼容
if (!$('body').css('maxWidth')) {
    $('.w-joblist .job-child').each(function () {
        var $self = $(this),
            $job = $self.find('.base .job a'),
            $hotel = $self.find('.base .hotel a');

        $job.html(H.substring($job.html(), 33)).css('width', '');
        $hotel.html(H.substring($hotel.html(), 24));
    });
}


/**
 * 选择求职信
 * @type {*|jQuery|HTMLElement}
 */
var $popbox = $('<div class="popbox"><div class="pop"><span><em></em><strong>选择求职信</strong><br>申请之前，选择求职信</span></div></div>'),
    joblistTimer =
        $joblist.on('mouseenter', '.operate .apply', function () {
            me = this;
            joblistTimer = setTimeout(function () {
                $popbox.appendTo($(me));
            }, 150);
        }).on('mouseleave', '.operate .apply', function () {
            clearTimeout(joblistTimer);
            $popbox.remove();
        });


require.async(['base:components/layer/layer.js'], function (layer) {

    //layer.message({right: '<h4>申请成功！</h4><span>职位申请已存入职位申请记录，欢迎随时查看。</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~'}, {title: '申请成功'});
    //layer.message({right: '<h4>申请失败！</h4><span>1个月内不能对同一企业的同一职位重复申请。</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~<div class="info"><em>友情提示：</em>当您的简历更新后，企业看到您的简历也会同步更新，无需重复投递哟</div>', icon: 1}, {title: '申请失败'});
    //layer.message({right: '<h4>申请失败！</h4><span>每天最多申请20个职位！</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~', icon: 1}, {title: '申请失败'});
    //layer.message('<h4>收藏成功！</h4><span>职位已收藏至<a href="##" target="_blank">职位收藏夹</a>，欢迎随时查看</span>', 0, {title: '收藏成功'});
    //layer.message('<h4>您还没有求职信！</h4><span>可以先写<a href="## , 求职信</a>哦。</span>', 2, {title: '选择求职信'});
    //layer.message({right: '<h4>请先选择求职信！</h4>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~', icon: 2}, {title: '请选择求职信'});


    var message = function (data) {
        if (data.status == 2) {
            // login;
        } else {
            var msg = data.message;
            layer.message({right: msg.right, bottom: msg.bottom || undefined, icon: msg.icon || 0}, {title: msg.title});
        }
    };


    /**
     * 电话直聘
     */
    $joblist.on('click', '.base .job .call', function () {
        $.ajax({
            url: '/pop/show_tel',
            dataType: '',
            success: function (data) {
                layer.message('<p>欢迎来电应聘/咨询：<strong>0752-278056-021</strong><br>咨询时间：08:30-18:00</p>', 2, {title: '电话直聘'});
            }
        });
    });


    /**
     * 选择求职信列表
     */


    var jsldata = [];
    $(document).on('click', '.w-joblist-sl [control=select]', function (ev) {
        var $self = $(this),
            $tpl = drop({
                $dom: $self,
                data: jsldata,
                skin: 'w-joblist-drop',
                zIndex: parseInt($self.closest('.layui-layer').css('zIndex')) + 1,
                cache: false
            }, function (val) {
                console.log(val);
            });

        $self.hasClass('active') ? $tpl.hide() : $tpl.resize(12).move(1)
        ev.stopPropagation();
    });


    /**
     * 申请职位
     */
    var selectletter = __inline('view/selectletter.tmpl');

    $joblist.on('click', '.apply', function (ev) { // 立即申请
        if ($('.login-logout').length) {
            $.ajax({
                url: '/pop/apply_job',
                method: 'post',
                dataType: 'json',
                data: {
                    job_id: $(this).closest('.job-child').data('id')
                },
                success: message
            });
        } else {
            layer.alert('请先登录！');
        }
    }).on('click', '.pop span', function (ev) {
        if ($('.login-logout').length) {
            $.ajax({
                url: '',
                method: 'get',
                dataType: 'json',
                data: {},
                success: function (data) {

                }
            });

            layer.open({
                content: selectletter,
                area: '480px',
                move: false,
                btn: false,
                success: function (layero, index) {
                    console.log(layero);
                },
                yes: function (index) {
                    console.log(index);
                }
            });
            /*
             if (data.status == 1) {
             console.log('hello');
             } else {
             msgerror(data);
             }
             */
        } else {
            layer.alert('请先登录！');
        }
        ev.stopPropagation();
    });


});