<?php
/**
 * Created by TC-62 on 2015/11/5.
 */


// 这里配置三级联动的依赖关系
$DROPDATA_CHILDREN_MAP = [
    [1, 2, 7, 3, 4],
    [5, 6],
    [8, 9, 10, 11, 12, 13],
    [5, 4, 3],
    [16, 17, 18]
];

/*
	[0, '不限'], // 0
	[2, '2K以下'],
	[3, '2K-3K'],
	[4, '3K-4K'],
	[5, '4K-5K'],
	[6, '5K-6K'],
	[7, '6K-8K'],
	[8, '8K-10K'],
	[9, '10K-15K'],
	[10, '15K-20K'],
	[11, '20K-30K'],
	[12, '30K-50K'],
	[13, '50K以上']
*/

$DROPDATA_FILTER = [
    salary => ['-', '-', '0-2000', '2001-3000', '3001-4000', '4001-5000', '5001-6000', '6001-8000', '8001-10000', '10001-15000', '15001-20000', '20001-30000', '30001-50000', '50001-1000000', ],
    work_year => ['-', '1-1000', '2-1000', '3-1000', '5-1000', '8-1000', '10-1000']
];


// 这里是下拉列表
$DROPDATA = [
    // 行业
    company_industry => [
        [0, '不限'], // 0
        [1, '酒店业', 0],
        [2, '餐饮业', 1],
        [3, '娱乐业', 1],
        [7, '物业', 2],
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
        [1, '国际品牌酒店', 3],
        [2, '国内品牌酒店', 3],
        [7, '精品酒店'],
        [3, '单体酒店', 3],
        [4, '经济品牌酒店'],

        [5, '餐饮/娱乐总部'],
        [6, '单体餐饮/娱乐'],

        [8, '商业物业', 4],
        [9, '工业物业', 4],
        [10, '机关物业', 4],
        [11, '住宅物业', 4],
        [12, '农林牧渔物业', 4],
        [13, '其他物业', 4]
    ],


    star_level => [
        [0, '不限'], // 0
        [5, '五星/准五星'],
        [4, '四星/准四星'],
        [3, '三星级及以下'],

        [16, '一级资质'],
        [17, '二级资质'],
        [18, '三级资质']
    ],

    // ----------
    work_year_min => [
        [0, '不限'], // 0
        [1, '一年以上'],
        [2, '两年以上'],
        [3, '三年以上'],
        [5, '五年以上'],
        [8, '八年以上'],
        [10, '十年以上']
    ],
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
        [2, '2K以下'],
        [3, '2K-3K'],
        [4, '3K-4K'],
        [5, '4K-5K'],
        [6, '5K-6K'],
        [7, '6K-8K'],
        [8, '8K-10K'],
        [9, '10K-15K'],
        [10, '15K-20K'],
        [11, '20K-30K'],
        [12, '30K-50K'],
        [13, '50K以上']
    ],


    is_construct => [
        [0, '不限'], // 0
        [1, '筹建中']
    ],


    gender_id => [
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


    // 更新日期
    job_update_time => [
        [0, '不限'], // 0
        [1, '今日最新'],
        [3, '近三天'],
        [5, '近五天'],
        [7, '近一周'],
        [14, '近两周'],
        [30, '近一月'],
        [60, '近两月']
    ],


    contact_display_status => [
        [0, '不限'], // 0
        ['2,5,7,8', '电话公开'],
        ['1,6,7,8', '电话直聘'],
        ['3,5,6,8', '邮箱公开']
        // ['100', '只接受系统投递']
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
