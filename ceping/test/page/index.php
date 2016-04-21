<?php

$fis_data_text = '{"status":1,"data":{"jobname":"餐饮总裁\/总经理","pojobname":"酒店总裁","xz_post_id":"30","pojob":[{"id":"30","name":"酒店总裁","paname":[{"id":"34","name":"酒店主管"},{"id":"36","name":"司机师傅"}]},{"id":"31","name":"人力资源部总监","paname":[{"id":"35","name":"温泉区域经理"},{"id":"56","name":"助理"}]},{"id":"33","name":"店长","paname":[]},{"id":"57","name":"主管","paname":[{"id":"58","name":"餐饮主管"}]},{"id":"65","name":"前厅经理","paname":[{"id":"66","name":"前厅经理"}]}]}}';

if ( isset($GLOBALS['fcData']) ) {
	$fis_data = $GLOBALS['fcData'];
} else {
	$fis_data = json_decode($fis_data_text, true);
	$fis_data['site_type'] = $_GET['site_type'];
}