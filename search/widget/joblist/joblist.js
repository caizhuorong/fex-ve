/**
 * Created by TC-62 on 2015/10/22.
 */

var tpl = require('common:components/tpl/tpl.js'),
    drop = require('widget/droplist/droplist.js'),
    H = require('common:widget/helper/helper.js'),
    selectTimer,
    $joblist = $('.w-joblist'),
    tmpl = __inline('view/joblist.tmpl'),
    _FILTER_POST = {};


tpl.helper('inArray', $.inArray);

window.renderMod = tpl.compile(tmpl);


function asyncRender(data) {
    var html = renderMod(data),
        $html = $(html);

    $html.find('.job-child .attr .brief').each(function () {
        var $self = $(this);
        $self.html(H.substring($self.html(), 220));
    });

    $joblist.find('.joblist').html('').append($html);
};

exports.asyncRender = asyncRender;


exports.where = function (name, value) {

    _FILTER_POST[name] = value;

    require.async(['base:components/layer/layer.js'], function (layer) {
        layer.load(2, {shade: .1});

        function render(data) {
            asyncRender({data: data.message.data, $top: data.message.top_job_num, $DROPDATA_INDEX: DROPDATA_INDEX});
            layer.closeAll();
        }

        $.ajax({
            url: window.location.href,
            method: 'post',
            dataType: 'json',
            data: _FILTER_POST,
            success: render,
            error: function (err) {
                layer.closeAll();
                layer.alert('出错了： ' + err);
            }
        });
    });

};


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
 * 选择求职信 [ 申请之前，选择求职信 ]   打开效果
 * @type {*|jQuery|HTMLElement}
 */
var $popbox = $('<div class="popbox"><div class="pop"><span><em></em><strong>选择求职信</strong><br>申请之前，选择求职信</span></div></div>'),
    joblistTimer = $joblist.on('mouseenter', '.operate .apply', function () {
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


    var ajax = function (opt, data) {
        var args = arguments;
        if (typeof opt == 'string') {
            opt = {
                url: opt,
                data: data
            };
        }

        layer.load(2, {shade: .1});

        $.ajax($.extend({}, {
            method: 'post',
            dataType: 'json',
            success: function (data) {
                layer.closeAll();
                var status = data.status;
                if (status == 2) {
                    // login;
                } else if (status == 0 || (data.message && data.message.right)) {
                    var msg = data.message;
                    layer.message({right: msg.right, bottom: msg.bottom || undefined, icon: msg.icon || 0}, {title: msg.title});
                } else if (status == 1) {
                    typeof args[args.length - 1] == "function" ? args[args.length - 1](data) : null;
                } else {
                    layer.alert('未知错误! data.status:' + status)
                }
            },
            error: function (err) {
                layer.closeAll();
                layer.alert('未知错误!<br><pre>' + err + '</pre>', {maxWidth: '600px'});
            }
        }, opt));
    };


    /**
     * 电话直聘
     */
    $joblist.on('click', '.base .job .call', function () {
        ajax('/pop/show_tel', {job_id: $(this).closest('.job-child').data('id')}, function (data) {
            //console.log(data);
            layer.message('<p>欢迎来电应聘/咨询：<strong>' + data.message.contact_telephone + '</strong><br>咨询时间：' + (data.message.contact_time == '00:00-00:00' ? '24 x 7' : data.message.contact_time) + '</p>', 2, {title: '电话直聘'});
        });
    });


    /**
     * 选择求职信列表
     */
    var jsldata;
    $(document).on('click', '.w-joblist-sl [control=select]', function (ev) {
        var $self = $(this);

        if (!$self.hasClass('active')) {
            drop({
                $dom: $self,
                data: jsldata.list,
                skin: 'w-joblist-drop',
                zIndex: parseInt($self.closest('.layui-layer').css('zIndex')) + 1,
                cache: false
            }, function (val) {
                var $sl = $('.layui-layer .w-joblist-sl');
                $sl.find('textarea').val(jsldata.all[val].content);
            }).resize(8).move(0);
            ev.stopPropagation();
        }
    });


    /**
     * 申请职位
     */
    var selectletter = __inline('view/selectletter.tmpl');

    $joblist.on('click', '.apply', function (ev) { // 立即申请
        ajax('/pop/apply_job', {job_id: $(this).closest('.job-child').data('id')}, function (data) {
            console.log(data);
        });
    }).on('click', '.pop span', function (ev) {
        var $child = $(this).closest('.job-child');

        ajax('/pop/choose_resume', {job_id: $(this).closest('.job-child').data('id')}, function (data) {
            // 求职信列表数据
            var i, len, letterList = data.message.letterList;
            jsldata = {list: [], all: {}};
            for (i = 0, len = letterList.length; i < len; i++) {
                jsldata.list.push([letterList[i].id, letterList[i].title]);
                jsldata.all[letterList[i].id] = letterList[i];
            }

            layer.open({
                title: '请选择求职信',
                content: selectletter,
                area: '480px',
                move: false,
                btn: false,
                success: function (layero) {
                    this.layero = layero
                },
                yes: function () {
                    var apl_id = this.layero.find('[name=apply_letter_id]').val();

                    ajax('/pop/apply_job', {
                        job_id: $child.data('id'),
                        use_letter: 1,
                        apply_letter_id: apl_id,
                        apply_letter_title: jsldata.all[apl_id].title,
                        apply_letter_content: this.layero.find('[name=apply_letter_content]').val()
                    }, function (data) {
                        // console.log(data);
                    });
                }
            });
        });
        ev.stopPropagation();
    });


});





