<?php
/**
 * Created by TC-62 on 2015/11/5.
 */


// 这里配置三级联动的依赖关系
$DROPDATA_CHILDREN_MAP = [
    company_type_hotel => [1, 2, 3, 4],
    company_type_din => [],
    company_type_property => [],
    star_level_hotel => [],
    star_level_property => []
];


// 这里是下拉列表
$DROPDATA = [
    // 行业
    company_industry => [
        [0, '不限'], // 0
        [1, '酒店业', 'company_type_hotel'],
        [2, '餐饮业', 'company_type_din'],
        [3, '娱乐业', 'company_type_din'],
        [7, '物业', 'company_type_property'],
        [8, '高尔夫'],
        [9, '温泉'],
        [10, '邮轮'],
        [4, '旅行社'],
        [5, '旅游/酒店用品服务商'],
        [11, '旅游/酒店网络服务商'],
        [6, '其他行业']
    ],


    // 企业类型
    company_type => [
        [0, '不限'], // 0
        [1, '国际品牌酒店', 'star_level_hotel'],
        [2, '国内品牌酒店', 'star_level_hotel'],
        [7, '精品酒店'],
        [3, '单体酒店', 'star_level_hotel'],
        [4, '经济品牌酒店'],

        [5, '餐饮/娱乐总部'],
        [6, '单体餐饮/娱乐'],

        [8, '商业物业', 'star_level_property'],
        [9, '工业物业', 'star_level_property'],
        [10, '机关物业', 'star_level_property'],
        [11, '住宅物业', 'star_level_property'],
        [12, '农林牧渔物业', 'star_level_property'],
        [13, '其他物业', 'star_level_property']
    ],


    star_level => [
        [0, '未评'], // 0
        [5, '五星/准五星'],
        [4, '四星/准四星'],
        [3, '三星级及以下'],

        [16, '一级资质'],
        [17, '二级资质'],
        [18, '三级资质']
    ],

    // ----------
    work_year => [
        [0, '不限'], // 0
        [1, '一年以上'],
        [2, '两年以上'],
        [3, '三年以上'],
        [4, '五年以上'],
        [5, '八年以上'],
        [6, '十年以上']
    ],


    salary => [
        [0, '不限'], // 0
        [2, '2000以下'],
        [3, '2001－3000'],
        [4, '3001－5000'],
        [5, '4500－6000'],
        [6, '6001－8000'],
        [7, '8001－10000'],
        [8, '10000以上']
    ],


    is_construct => [
        [0, '不限'], // 0
        [1, '筹建中']
    ],


    gender => [
        [0, '不限'], // 0
        [1, '男性优先'],
        [2, '女性优先']
    ],


    rations_quarters => [
        [0, '不限'], // 0
        [1, '提供食宿'],
        [2, '不提供食宿'],
        [3, '提供吃'],
        [4, '提供住']
    ],


    degree_id => [
        [0, '不限'], // 0
        [1, '初中(中技)'],
        [2, '高中(中专)'],
        [3, '大专'],
        [4, '本科'],
        [5, '硕士'],
        [6, '博士']
    ],


    work_mode => [
        [0, '不限'], // 0
        [1, '全职'],
        [2, '兼职'],
        [3, '实习'],
        [4, '临时']
    ],


    // 发布日期
    job_add_time => [
        [0, '不限'], // 0
        [1, '今日最新'],
        [2, '近三天'],
        [3, '近五天'],
        [4, '近一周'],
        [5, '近两周'],
        [6, '近一月'],
        [7, '近两月']
    ],


    contact_display_status => [
        [0, '不限'], // 0
        [1, '电话公开'],
        [2, '电话直聘'],
        [3, '邮箱公开'],
        [4, '只接受系统投递']
    ]

];


function arrar_index($arr)
{
    $data = [];
    foreach ($arr as $key => $list) {
        $data[$key] = [];

        foreach ($list as $i => $item) {
            $data[$key][$item[0]] = $item[1];
        }
    }
    return $data;
}

$DROPDATA_INDEX = arrar_index($DROPDATA);
