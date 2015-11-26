<?php

require_once('drop.php');

$public_data = [
    'logo' => [
        'link' => '',
        'img' => '',
        'alt' => '杭州东方网升科技股份有限公司'
    ],

    'header' => [
        ['title' => '首页', 'link' => '#'],
        '|',
        ['title' => '酒店', 'link' => '#'],
        ['title' => '餐饮', 'link' => '#'],
        ['title' => '物业', 'link' => '#'],
        '|',
        ['title' => '海外', 'link' => '#'],
        ['title' => '高尔夫', 'link' => '#'],
        ['title' => '邮轮', 'link' => '#'],
        '|',
        ['title' => '招聘会', 'link' => '#'],
        '|',
        ['title' => '校园招聘', 'link' => '#']
    ],

    'nav' => [
        ['title' => '我的最佳东方', 'link' => '#'],
        '|',
        ['title' => '找工作', 'link' => '/'],
        '|',
        ['title' => '简历管理', 'link' => '#'],
        '|',
        ['title' => '职位管理', 'link' => '#']
    ],

    'DROPDATA' => $DROPDATA,
    'DROPDATA_CHILDREN_MAP' => $DROPDATA_CHILDREN_MAP,
    'DROPDATA_INDEX' => $DROPDATA_INDEX,
    'DROPDATA_FILTER' => $DROPDATA_FILTER
];