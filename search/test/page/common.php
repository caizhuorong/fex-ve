<?php

require_once('drop.php');

$public_data = [

    'logo' => [
        'link' => '',
        'img' => '',
        'alt' => '杭州东方网升科技股份有限公司'
    ],

    'header' => [
        ['title' => '首页', 'link' => 'http://www.veryeast.cn/'],
        '|',
        ['title' => '酒店', 'link' => 'http://www.veryeast.cn/hotel'],
        ['title' => '餐饮', 'link' => 'http://canyin.veryeast.cn/'],
        ['title' => '物业', 'link' => 'http://www.veryeast.cn/property'],
        '|',
        ['title' => '海外', 'link' => 'http://www.veryeast.cn/overseas'],
        ['title' => '高尔夫', 'link' => 'http://www.veryeast.cn/golf'],
        ['title' => '邮轮', 'link' => 'http://www.veryeast.cn/cruise'],
        '|',
        ['title' => '招聘会', 'link' => 'http://zph.veryeast.cn/'],
        '|',
        ['title' => '校园招聘', 'link' => 'http://campus.veryeast.cn/']
    ],

    'nav' => [
        ['title' => '我的最佳东方', 'link' => 'http://my.veryeast.cn/'],
        '|',
        ['title' => '找工作', 'link' => '/'],
        '|',
        ['title' => '简历管理', 'link' => 'http://my.veryeast.cn/user/resume'],
        '|',
        ['title' => '职位管理', 'link' => 'http://my.veryeast.cn/user/application']
    ],

    'DROPDATA' => $DROPDATA,
    'DROPDATA_CHILDREN_MAP' => $DROPDATA_CHILDREN_MAP,
    'DROPDATA_INDEX' => $DROPDATA_INDEX,
    'DROPDATA_FILTER' => $DROPDATA_FILTER
];