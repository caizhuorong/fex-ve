var option = {
	// title: {
	// 	text: '胜任力模型',
	// 	show: false
	// },
	tooltip: {
		trigger: 'axis',
		formatter: '{d} <br> {b0}： {c0} <br> {b1}： {c1}'
	},
	// legend: {
	// 	data: ['岗位要求', '自己'],
	// 	left: 'left',
	// 	orient: 'vertical',
	// 	show: false
	// },
	polar: [{
		name: {
			textStyle: {
				fontFamily: 'Microsoft YaHei,arial,STXihei',
				fontSize: 12,
				color: '#777'
			}
		},
		splitLine: {
			lineStyle: {
				color: '#e7e7e7'
			}
		},
		splitArea: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#d6d6d6'
			}
		},
		splitNumber: 3,
		indicator: []
	}],
	series: [{
		name: '胜任力要素',
		type: 'radar',
		itemStyle: {
			normal: {
				areaStyle: {
					type: 'default'
				}
			}
		},
		symbol: 'emptyCircle',
		symbolSize: 3,
		data: []
	}],
	color: [
		'#a5a5a5', '#79bb49', '#5ab1ef', '#ffb980', '#d87a80'
	]
};



// var indicator = window.__data__.indicator
// var data = window.__data__.data


var indicator = [
	[
		{ text: '目标执行力', max: 3 },
		{ text: '入离职管理', max: 3 },
		{ text: '薪酬福利管控', max: 3 },
		{ text: '入离职管理', max: 3 },
		{ text: '目标执行力', max: 3 },
		{ text: '工作报告', max: 3 }
	],
	[
		{ text: '目标执行力2', max: 3 },
		{ text: '入离职管理2', max: 3 },
		{ text: '薪酬福利管控2', max: 3 },
		{ text: '入离职管理2', max: 3 },
		{ text: '目标执行力2', max: 3 },
		{ text: '工作报告2', max: 3 }
	],
	[
		{ text: '目标执行力3', max: 3 },
		{ text: '入离职管理3', max: 3 },
		{ text: '薪酬福利管控3', max: 3 },
		{ text: '入离职管理3', max: 3 },
		{ text: '目标执行力3', max: 3 },
		{ text: '工作报告3', max: 3 }
	]
]
var data = [
	[{
		name: '岗位要求',
		value: [2.8, 2.4, 1.7, 2.6, 2.3, 1.8]
	}, {
		name: '　　自己',
		value: [2, 1, 3, 2, 3, 2]
	}],
	[{
		name: '岗位要求',
		value: [2.8, 2.4, 1.3, 2.6, 2.3, 1.8]
	}, {
		name: '　　自己',
		value: [2, 1, 3, 2, 3, 2]
	}],
	[{
		name: '岗位要求',
		value: [2.8, 2.4, 1.7, 2.1, 2.3, 1.8]
	}, {
		name: '　　自己',
		value: [2, 1, 3, 2, 3, 2]
	}]
]






$('.w-results>.cp-dashed-box').find('#echarts-cs').each(function(index) {
	option.polar[0].indicator = indicator[index];
	option.series[0].data = data[index];
	var myChart = echarts.init(this);
	myChart.setOption(option);
});