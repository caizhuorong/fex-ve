/**
 * Created by TC-62 on 2015/10/22.
 */

var tpl = require('common:components/tpl/tpl.js'),
    drop = require('widget/droplist/droplist.js'),
    H = require('common:widget/helper/helper.js'),
    selectTimer,
    $joblist = $('.w-joblist'),
    tmpl = __inline('view/joblist.tmpl'),
    _FILTER_POST = {},
    whole = false;


tpl.helper('inArray', $.inArray);

window.renderMod = tpl.compile(tmpl);

/** ****************************职位列表的对外接口************************* **/
/**
 * 渲染数据
 * @param data
 */
function asyncRender(data) {
    var list = renderMod(data),
        $list = $(list);

    $list.find('.job-child .attr .brief').each(function () {
        var $self = $(this);
        $self.html(H.substring($self.html(), 220));
    });

    $joblist.find('.joblist').html('').append($list);
}

exports.asyncRender = asyncRender;


/**
 * 筛选功能接口 ，测试催得紧  就先不写详细注释了！
 * @param name
 * @param value
 */
exports.where = function (name, value) {

    var key;
    _FILTER_POST[name] = value;

    for (key in _FILTER_POST) {
        if (!_FILTER_POST[key]) {
            delete _FILTER_POST[key];
        }
    }

    require.async(['base:components/layer/layer.js'], function (layer) {
        layer.load(2, {shade: .1});

        function render(data) {
            asyncRender({
                data: data.message.data,
                $top: data.message.top_job_num,
                fav: data.message.favoriteJob.join('|').split('|'),
                $DROPDATA_INDEX: DROPDATA_INDEX,
                whole: whole
            });
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
 * 列表或显示摘要
 * @param bool
 * @returns {boolean}
 */
exports.whole = function (bool) {
    if (typeof bool == 'undefined') {
        return whole;
    }
    $joblist.find('.job-child .all').css('display', bool ? 'block' : '');
    whole = bool;
};

/** ****************************提供的接口就这么多，到这里就没有了************************* **/


/**
 * 基本展示效果
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
                    location.href = 'http://i.veryeast.cn/user/login?redirect=' + encodeURIComponent(location.href);
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

    $joblist
        .on('click', '.apply', function (ev) { // 立即申请
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
                        });
                    }
                });
            });
            ev.stopPropagation();
        })
        .on('click', '.collect', function () {
            /**
             * 收藏
             */
            var $self = $(this);

            if (!$self.hasClass('action')) {
                $.ajax({
                    url: '/pop/collection_job',
                    method: 'post',
                    dataType: 'json',
                    data: {
                        job_id: $self.closest('.job-child').data('id')
                    },
                    success: function (data) {
                        if (data.status == 1) {
                            $self.addClass('active');
                        }
                        layer.message(data.message, {title: data.message.title});
                    }
                });
            }
        });


});





