<?php

require_once('common.php');

$fis_data = array_merge($public_data, [
    data => $GLOBALS['fcData'],

    'title' => '酒店餐饮旅游职位搜索_最佳东方',
    'keyworks' => '酒店求职,职位搜索,职位推荐',
    'description' => '最佳东方职位搜索专为个人提供最全最新最准确的酒店、餐饮、旅游企业职位招聘信息的高级搜索服务，方便个人进行职位搜索，体验到职位搜索的快捷性和高匹配性。',


    'recommend' => [
        /**
         * skin  为自定义样式预留的接口
         */
        [
            'title' => ['t' => '<i>爱</i>上一份工作', 'p' => '找到最适合自己的工作'],
            'tpl' => 'list-a',
            'list' => [
                ['link' => '/job_search/job_list?s=searcher&p=hurry', 'text' => '急聘职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=clear_salary', 'text' => '明确薪资职位', 'skin' => 'sign'],
                ['link' => '/job_search/job_list?s=searcher&p=rations_quarters', 'text' => '包吃包住职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=woman', 'text' => '女性优先职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=rations_quarter', 'text' => '竞争少职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=oversea', 'text' => '海外职位', 'skin' => 'sign'],
                ['link' => '/job_search/job_list?s=searcher&p=property', 'text' => '物业职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=star', 'text' => '高星酒店职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=construct', 'text' => '筹建企业职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=man', 'text' => '男性优先职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=golf', 'text' => '高尔夫职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=liner', 'text' => '邮轮职位', 'skin' => '']
            ]
        ],
        [
            'title' => ['t' => '<i>恋</i>上一座城市', 'p' => '到最满意的城市去工作'],
            'tpl' => 'list-a',
            'skin' => 'big', // 加大标签间距
            'list' => [
                ['link' => '/job_search/job_list?s=searcher&p=city&key=happiness', 'text' => '幸福感最强城市职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=city&key=beauty_city', 'text' => '美女最多城市职位', 'skin' => 'sign'],
                ['link' => '/job_search/job_list?s=searcher&p=city&key=travel_city', 'text' => '十佳旅游城市职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=city&key=art_city', 'text' => '最文艺城市职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=city&key=economy_city', 'text' => '经济最发达城市职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=city&key=food_city', 'text' => '美食最多城市职位', 'skin' => ''],
                ['link' => '/job_search/job_list?s=searcher&p=city&key=air_city', 'text' => '空气最优城市职位', 'skin' => 'sign']
            ]
        ],
        [
            'title' => ['t' => '<i>实现</i>不凡价值', 'p' => '创造平凡岗位里的不平凡'],
            'tpl' => 'list-b',
            'list' => [
                [
                    'title' => '文职类推荐：',
                    'list' => [
                        ['link' => '/job_search/job_list?s=recommend&p=0803', 'text' => '秘书/文员', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=0801,0802,0804,0805,0806,0807', 'text' => '行政办公室', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=0901,0902,0903,0904,0905,0906,0907,0908,0909,0911', 'text' => '人力资源', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=1008,1009,1010,1011,1012,1013,1014', 'text' => '媒讯/策划/文案', 'skin' => ''],
                    ]
                ],
                [
                    'title' => '技能类推荐：',
                    'list' => [
                        ['link' => '/job_search/job_list?s=recommend&p=2002', 'text' => '值班工程师', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=2003', 'text' => '机修领班/主管', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=2009', 'text' => '机修主管/领班', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=2103', 'text' => '电脑工程师', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=1915', 'text' => '日审/收入会计', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=1611,1603', 'text' => '炉灶厨师', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=2422', 'text' => '按摩/足疗/保健技师', 'skin' => '']
                    ]
                ],
                [
                    'title' => '服务类推荐：',
                    'list' => [
                        ['link' => '/job_search/job_list?s=recommend&p=1105,1115,1114', 'text' => '礼宾/前台/接待', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=1202,1203,1204,1205,1206,1207,1208', 'text' => '预定/总机/客服', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=1917,1918', 'text' => '收银员', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=1014,1011,1004,1006', 'text' => '市场销售', 'skin' => ''],
                        ['link' => '/job_search/job_list?s=recommend&p=1417', 'text' => '服务员', 'skin' => '']
                    ]
                ]
            ]
        ],
		[
            'title' => ['t' => '<i>热门</i>企业', 'p' => ''],
            'tpl' => 'list-c',
            'list' => $GLOBALS['fcData']['hot']
        ]
    ],

    /*'spot' => [
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
    ]*/
]);