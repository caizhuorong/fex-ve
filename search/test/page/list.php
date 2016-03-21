<?php

require_once('common.php');


function _getStr(){
    $text = '';
    foreach ($_GET as $key => $value) {
        if ($key != 'page') {
            $text = $text . $key . '=' . $value . '&';
        }
    }
    return $text . 'page=';
}


$cityId_postId = $GLOBALS['fcData']['job_city_id_text'] . ' ' . $GLOBALS['fcData']['job_post_id_text'];

$fis_data = array_merge($public_data, [
    'data' => $GLOBALS['fcData'],

    '_GET_TEXT' => _getStr(),

    'title' => $cityId_postId . ' ' . $GLOBALS['fcData']['key_words'] . ' 最新' . $GLOBALS['fcData']['job_post_id_text'] . '招聘/求职信息 – 最佳东方',
    'keyworks' => '最佳东方' . $cityId_postId . '找工作详情页，每天更新大量' . $cityId_postId . '最新招聘/求职信息满足广大用户需求，解决您的后顾之忧。',
    'description' => $cityId_postId . '招聘, 最新' . $cityId_postId . '招聘信息, ' . $cityId_postId,

]);


foreach ($fis_data['data']['arr_result'] as $key => $val) {
    $fis_data['data']['arr_result'][$key]['job_description'] = strip_tags($val['job_description']);
}

