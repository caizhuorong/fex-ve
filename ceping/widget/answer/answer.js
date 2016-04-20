var tpl = require('common:components/autocomplete/autocomplete.js');


var tmpl = __inline('views/answer.tmpl'),
	arttpl = require('common:components/tpl/tpl.js'),
	helper = require('common:widget/helper/helper.js'),
	tpl = arttpl.compile(tmpl),
	$answer = $('.w-answer'),
	$answerList = $('.w-answer-list'),
	$axis = $('.w-answer-axis'),
	$wFloat;


arttpl.helper('num2str', function (num) {
	return (num + 10).toString(36);
})

arttpl.helper('pad', helper.pad)

arttpl.helper('quesChecked', function (item, arr) {
	return $.inArray(item, arr) >= 0 ? 'checked' : '';
})


var questionTypes = [
	{ input: 'radio', type: '单选题' },
	{ input: 'checkbox', type: '多选题' }
]

var questionList;



function init(data) {
	questionList = data.data.list
	$axis.axis(0, true);
	render(0);
	floatbox()
}


var answerSheet = {}
// window.answerSheet = answerSheet

// var initAnswer = function() {

// }


var $left = $answer.find('.w-answer-pageLeft'),
	$right = $answer.find('.w-answer-pageRight');


var getInfo = function () {
	return $.extend($answerList.data(), { all: questionList.length });
}



function render(index) {
	var question = questionList[index],
		sheet = answerSheet[index],
		html = tpl({
			type: questionTypes[question.type - 1],
			ques: question,
			sheet: sheet ? sheet : { answer: [] },
			index: index + 1
		});


	$answerList.data({
		index: index,
		question_id: question.id,
		factors_id: question.factors_id
	}).html(html);

	$left[index > 0 ? 'show' : 'hide']();
	$right[index + 1 < getInfo().all ? 'show' : 'hide']();
}



$answerList.on('change', 'input', function () {
	var ans = [],
		cache = $answerList.data();
	$answerList.find('input').map(function (index) {
		if ($(this).prop('checked')) {
			ans.push($(this).val())
		}
	})

	answerSheet[cache.index] = {
		question_id: cache.question_id,
		factors_id: cache.factors_id,
		answer: ans
	}

	var $float = $('.w-answer-float')
	if (ans.length) {
		$float.find('li').eq(cache.index).addClass('action')
	} else if (answerSheet[cache.index]) {
		$float.find('li').eq(cache.index).removeClass('action')
		delete answerSheet[cache.index];
	}

	$lis = $float.find('li')
	var len = Math.round($lis.filter('.action').length * 1000 / $lis.length) / 10
	$('#subTest').css({ display: len > 99.9 ? 'block' : 'none' });

	$axis.axis(len, true);

})

var pagePrev = function () {
	render(getInfo().index - 1);
}
var pageNext = function () {
	render(getInfo().index + 1);
}

$left.on('click', pagePrev);
$right.on('click', pageNext);





$(document).on('click', '.w-answer-float li', function () {
	render($(this).index());
})
/**
 * 浮动题目目录
 */
var layer = require('base:components/layer/layer.js').skin(),
	$floatLayer;

function floatbox() {
	$wFloat = $('<section class="w-answer-float"><ul>');
	var $ul = $wFloat.find('ul')
	for (var i = 0; i < questionList.length; i++) {
		$ul.append('<li>' + (i + 1) + '</li>');
	}

	layer.open({
		type: 1,
		shade: false,
		closeBtn: false,
		title: '答题记录：',
		success: function ($layer) {
			$floatLayer = $layer;
			$floatLayer.css({ top: -9999 })
			setTimeout(function () {
				$(window).resize()
			}, 999)
		},
		offset: function () {
			try {
				var left = $(window).width() - $floatLayer.width();
			} catch (err) { };
			return [56, left];
		},
		area: '189px',
		content: $wFloat.get(0).outerHTML
	});


	$(window.body)
}






/*
{
    "result": {
        "list": [
            { "question_id": "8", "factors_id": "23", "answer": "B" },
            { "question_id": "9", "factors_id": "23", "answer": "AB" },
            { "question_id": "14", "factors_id": "24", "answer": "B" }
        ]
    },
    "post_id": 31,
    "start_time": "",
    "end_time": "",
    "submit_type": "1",
    "site_type": "1"
}
*/

/*********************************************/
/**
 * site_type:
 * 1先之PC,
 * 2先之触屏,
 * 3先之客户端,
 * 4最佳东方pc,
 * 5最佳东方触屏,
 * 6最佳东方客户端
 */
// 5400
var start_time = (new Date).getTime();
var end_time = start_time + 5400000;

var submitting = false;
function subform(submit_type) {
	var list = [];
	var i, tmp;
	for (i in answerSheet) {
		tmp = $.extend(true, {}, answerSheet[i]);
		tmp.answer = tmp.answer.sort().join('');
		list.push(tmp);
	}
	console.log(list);

	// TODO: 请求 
	// $.ajax({
	// 	url: ''
	// })
}

$('#subTest').on('click', function () {
	subform(1)
});



var $countdown = $('.w-answer-topbox #countdown');
var timeRun = setInterval(function () {
	var time = (new Date).getTime();
	var timer = parseInt((end_time - time) / 1000);
	var s = timer % 60;
	var m = parseInt(timer / 60);
	$countdown.text(m + ' : ' + s)
	if (m <= 0) {
		clearInterval(timeRun);
		subform(2)
		layer.alert('时间到，自动提交！', {
			end: function () {
				location.href = $('#subTest').data('href');
			}
		})
	}
}, 999)




exports.setPage = render;
exports.pageNext = pageNext;
exports.pagePrev = pagePrev;

exports.init = init;
