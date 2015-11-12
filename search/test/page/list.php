<?php

require_once('common.php');

$fis_data = array_merge($public_data, [
    'data' => $GLOBALS['fcData'],

    'title' => '酒店餐饮旅游职位搜索_最佳东方',
    'keyworks' => '职位搜索,高级搜索,找工作',
    'description' => '最佳东方职位搜索专为个人提供最全最新最准确的酒店、餐饮、旅游企业职位招聘信息的高级搜索服务，方便个人进行职位搜索，体验到职位搜索的快捷性和高匹配性。',

    'recommend' => [
        /**
         * skin  为自定义样式预留的接口
         */
        [
            'title' => ['t' => '<i>爱</i>上一份工作', 'p' => '找到最适合自己的工作'],
            'tpl' => 'list',
            'list' => [
                ['link' => '##', 'text' => '急聘职位', 'skin' => ''],
                ['link' => '##', 'text' => '明确薪资职位', 'skin' => 'sign'],
                ['link' => '##', 'text' => '包吃包住职位', 'skin' => ''],
                ['link' => '##', 'text' => '女性优先职位', 'skin' => ''],
                ['link' => '##', 'text' => '竞争少职位', 'skin' => ''],
                ['link' => '##', 'text' => '海外职位', 'skin' => 'sign'],
                ['link' => '##', 'text' => '物业职位', 'skin' => ''],
                ['link' => '##', 'text' => '高星酒店职位', 'skin' => ''],
                ['link' => '##', 'text' => '筹建企业职位', 'skin' => ''],
                ['link' => '##', 'text' => '男性优先职位', 'skin' => ''],
                ['link' => '##', 'text' => '高尔夫职位', 'skin' => ''],
                ['link' => '##', 'text' => '邮轮职位', 'skin' => '']
            ]
        ],
        [
            'title' => ['t' => '<i>恋</i>上一座城市', 'p' => '到最满意的城市去工作'],
            'tpl' => 'list',
            'skin' => 'big', // 加大标签间距
            'list' => [
                ['link' => '##', 'text' => '幸福感最强城市职位', 'skin' => ''],
                ['link' => '##', 'text' => '美女最多城市职位', 'skin' => 'sign'],
                ['link' => '##', 'text' => '十佳旅游城市职位', 'skin' => ''],
                ['link' => '##', 'text' => '最文艺城市职位', 'skin' => ''],
                ['link' => '##', 'text' => '经济最发达城市职位', 'skin' => ''],
                ['link' => '##', 'text' => '美食最多城市职位', 'skin' => ''],
                ['link' => '##', 'text' => '空气最优城市职位', 'skin' => 'sign']
            ]
        ],
        [
            'title' => ['t' => '<i>实现</i>不凡价值', 'p' => '到最满意的城市去工作'],
            'tpl' => 'list-b',
            'list' => [
                [
                    'title' => '文职类推荐：',
                    'list' => [
                        ['link' => '##', 'text' => '秘书/文员', 'skin' => ''],
                        ['link' => '##', 'text' => '行政办公室', 'skin' => ''],
                        ['link' => '##', 'text' => '人力资源', 'skin' => ''],
                        ['link' => '##', 'text' => '媒讯/策划/文案', 'skin' => ''],
                    ]
                ],
                [
                    'title' => '技能类推荐：',
                    'list' => [
                        ['link' => '##', 'text' => '值班工程师', 'skin' => ''],
                        ['link' => '##', 'text' => '机修领班/主管', 'skin' => ''],
                        ['link' => '##', 'text' => '机修主管/领班', 'skin' => ''],
                        ['link' => '##', 'text' => '电脑工程师', 'skin' => ''],
                        ['link' => '##', 'text' => '日审/收入会计', 'skin' => ''],
                        ['link' => '##', 'text' => '炉灶厨师', 'skin' => ''],
                        ['link' => '##', 'text' => '按摩/足疗/保健技师', 'skin' => '']
                    ]
                ],
                [
                    'title' => '服务类推荐：',
                    'list' => [
                        ['link' => '##', 'text' => '礼宾/前台/接待', 'skin' => ''],
                        ['link' => '##', 'text' => '预定/总机/客服', 'skin' => ''],
                        ['link' => '##', 'text' => '收银员', 'skin' => ''],
                        ['link' => '##', 'text' => '市场销售', 'skin' => ''],
                        ['link' => '##', 'text' => '服务员', 'skin' => '']
                    ]
                ]
            ]
        ]
    ],

    'spot' => [
        [
            'link' => '##',
            'img' => '//f3.v.veimg.cn/ve/search/201510/spot-1.jpg',
            'alt' => 'hello world'
        ],
        [
            'link' => '##',
            'img' => '//f3.v.veimg.cn/ve/search/201510/spot-2.jpg',
            'alt' => 'hello world'
        ],
        [
            'link' => '##',
            'img' => '//f3.v.veimg.cn/ve/search/201510/spot-3.jpg',
            'alt' => 'hello world'
        ]
    ]
]);


foreach ($fis_data['data']['arr_result'] as $key => $val) {
    $fis_data['data']['arr_result'][$key]['job_description'] = strip_tags($val['job_description']);
}

//var_dump($fis_data);die;

