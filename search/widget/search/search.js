/**
 * Created by TC-62 on 2015/10/22.
 */



var form = require('common:widget/form/form.js'),
    drop = require('common:widget/droplist/droplist.js'),
    cock = require('base:widget/cock/cock.js');


cock('post');

$('.search').on('click', 'label', function () {
    var $self = $(this);

    $self.addClass('active').siblings('label').removeClass('active');
});


require.async(['base:components/layer/layer.js', '../drop'], function (layer, droplist) {

    //layer.message('<p>欢迎来电应聘/咨询：<strong>0752-278056-021</strong><br>咨询时间：08:30-18:00</p>', 2, {title: '电话直聘'});
    //layer.message({right: '<h4>申请成功！</h4><span>职位申请已存入职位申请记录，欢迎随时查看。</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~'}, {title: '申请成功'});
    //layer.message({right: '<h4>申请失败！</h4><span>1个月内不能对同一企业的同一职位重复申请。</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~<div class="info"><em>友情提示：</em>当您的简历更新后，企业看到您的简历也会同步更新，无需重复投递哟</div>', icon: 1}, {title: '申请失败'});
    //layer.message({right: '<h4>申请失败！</h4><span>每天最多申请20个职位！</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~', icon: 1}, {title: '申请失败'});
    //layer.message('<h4>收藏成功！</h4><span>职位已收藏至<a href="##" target="_blank">职位收藏夹</a>，欢迎随时查看</span>', 0, {title: '收藏成功'});
    //layer.message('<h4>您还没有求职信！</h4><span>可以先写<a href="## , 求职信</a>哦。</span>', 2, {title: '选择求职信'});
    //layer.message({right: '<h4>请先选择求职信！</h4>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~', icon: 2}, {title: '请选择求职信'});



    $('.w-search [control=select]').on('click', function (ev) {
        var $self = $(this),
            $tpl = drop($self, droplist, 'w-search-drop');

        if ($self.hasClass('active')) {
            $tpl.hide();
        } else {
            $tpl.move(12, 1);
        }
        ev.stopPropagation();
    });


    window.degree = droplist.degree;


});












