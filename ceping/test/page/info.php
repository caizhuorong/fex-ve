<?php

// echo json_encode($GLOBALS['fcData']);die;

if ( isset($GLOBALS['fcData']) ) {
	$fis_data = $GLOBALS['fcData'];
} else {
	$fis_data = array(
		"status" => 0,
		"data" => [
			"name" => "人力资源主管", 
			"list" => [
				[
					"name" => "日常人力资源工作",
					"list" => [
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理薪资、假期申请及所有与员工关数据"],
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理假期申请"]
					]
				],
				[
					"name" => "执行人力资源标准", 
					"list" => [
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理薪资、假期申请及所有与员工关数据"],
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理假期申请"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理薪资、假期申请及所有与员工关数据"]
					]
				],
				[
					"name" => "协助进行员工规划", 
					"list" => [
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理薪资、假期申请及所有与员工关数据"],
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理假期申请"]
					]
				],
				[
					"name" => "外部沟通合作",
					"list" => [
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理薪资、假期申请及所有与员工关数据"],
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"],
						["name" => "控制及管理假期申请"],
						["name" => "执行部门计划目标"],
						["name" => "协助准备部门工作表现报告"]
					]
				]
			]
		]
	);
	
	$fis_data['site_type'] = $_GET['site_type'];
}

$fis_data['GET'] = $_GET;