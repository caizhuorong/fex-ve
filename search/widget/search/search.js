/**
 * Created by TC-62 on 2015/10/22.
 */



var form = require('common:widget/form/form.js'),
    drop = require('common:widget/droplist/droplist.js'),
    cock = require('base:widget/cock/cock.js'),
    $doc = $(document);


cock('post');

$('.search').on('click', 'label', function () {
    var $self = $(this);

    $self.addClass('active').siblings('label').removeClass('active');
});


require.async('base:components/layer/layer.js', function (layer) {
    window.layer = layer;
    window.form = form;

    //layer.message('<p>欢迎来电应聘/咨询：<strong>0752-278056-021</strong><br>咨询时间：08:30-18:00</p>', 2, {title: '电话直聘'});
    //layer.message({right: '<h4>申请成功！</h4><span>职位申请已存入职位申请记录，欢迎随时查看。</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~'}, {title: '申请成功'});
    //layer.message({right: '<h4>申请失败！</h4><span>1个月内不能对同一企业的同一职位重复申请。</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~<div class="info"><em>友情提示：</em>当您的简历更新后，企业看到您的简历也会同步更新，无需重复投递哟</div>', icon: 1}, {title: '申请失败'});
    //layer.message({right: '<h4>申请失败！</h4><span>每天最多申请20个职位！</span>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~', icon: 1}, {title: '申请失败'});
    //layer.message('<h4>收藏成功！</h4><span>职位已收藏至<a href="##" target="_blank">职位收藏夹</a>，欢迎随时查看</span>', 0, {title: '收藏成功'});
    //layer.message('<h4>您还没有求职信！</h4><span>可以先写<a href="## , 求职信</a>哦。</span>', 2, {title: '选择求职信'});
    //layer.message({right: '<h4>请先选择求职信！</h4>', bottom: '您今日还可以申请<strong>19</strong>个职位，已申请<strong>1</strong>个。请认真投递哟~', icon: 2}, {title: '请选择求职信'});


    var droplist = {
            company_industry: [
                [0, '不限'],
                [1, '酒店业', 'company_type_hotel'],
                [2, '餐饮业', 'company_type_din'],
                [3, '娱乐业', 'company_type_din'],
                [4, '物业', 'company_type_property'],
                [5, '高尔夫'],
                [6, '温泉'],
                [7, '邮轮'],
                [8, '旅行社'],
                [9, '旅游/酒店用品服务商'],
                [10, '旅游/酒店网络服务商'],
                [11, '其他行业']
            ],

            company_type_hotel: [
                [0, '不限'],
                [1, '国际品牌酒店', 'star_level_hotel'],
                [2, '国内品牌酒店', 'star_level_hotel'],
                [3, '精品酒店'],
                [4, '单体酒店', 'star_level_hotel'],
                [5, '经济品牌酒店']
            ],

            company_type_din: [
                [0, '不限'],
                [1, '餐饮/娱乐总部'],
                [2, '单体餐饮/娱乐']
            ],

            company_type_property: [
                [0, '不限'],
                [1, '商业物业', 'star_level_property'],
                [2, '工业物业', 'star_level_property'],
                [3, '机关物业', 'star_level_property'],
                [4, '住宅物业', 'star_level_property'],
                [5, '农林牧渔物业', 'star_level_property'],
                [5, '其他物业', 'star_level_property']
            ],

            star_level_hotel: [
                [0, '不限'],
                [1, '五星/准五星'],
                [2, '四星/准四星'],
                [3, '三星级及以下']
            ],

            star_level_property: [
                [0, '不限'],
                [1, '一级资质'],
                [2, '二级资质'],
                [3, '三级资质'],
                [3, '未评']
            ],

            // ----------
            work_year: [
                [0, '不限'],
                [1, '一年以上'],
                [2, '两年以上'],
                [3, '三年以上'],
                [4, '五年以上'],
                [5, '八年以上'],
                [6, '十年以上']
            ],

            salary: [
                [0, '不限'],
                [2, '2000以下'],
                [3, '2001－3000'],
                [4, '3001－5000'],
                [5, '4500－6000'],
                [6, '6001－8000'],
                [7, '8001－10000'],
                [8, '10000以上']
            ],

            is_construct: [
                [0, '不限'],
                [1, '筹建中']
            ],

            gender: [
                [0, '不限'],
                [1, '男性优先'],
                [2, '女性优先']
            ],

            rations_quarters: [
                [0, '不限'],
                [1, '提供食宿'],
                [2, '不提供食宿'],
                [3, '提供吃'],
                [4, '提供住']
            ],

            degree: [
                [0, '不限'],
                [1, '初中(中技)'],
                [2, '高中(中专)'],
                [3, '大专'],
                [4, '本科'],
                [5, '硕士'],
                [6, '博士']
            ],

            work_mode: [
                [0, '不限'],
                [1, '全职'],
                [2, '兼职'],
                [3, '实习'],
                [4, '临时']
            ]
        };


    
    /*
     droplist.each(function () {
     var $self = $(this),
     v = $self.data('v');
     if (!cache[v]) {
     cache[v] = new drop(droplist[v]);
     }
     cache[v].move($(this), 12, 0);
     });
     */

    // var myDrop = new drop(droplist.company_industry);


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












