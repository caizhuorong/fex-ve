var tpl = require('common:components/autocomplete/autocomplete.js');


var tmpl = __inline('views/answer.tmpl'),
	arttpl = require('common:components/tpl/tpl.js'),
	helper = require('common:widget/helper/helper.js'),
	tpl = arttpl.compile(tmpl),
	$answer = $('.w-answer'),
	$answerList = $('.w-answer-list'),
	$axis = $('.w-answer-axis');


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


// 如果有一天你在维护这段代码，请不要抱怨   - -!
function init(data) {
	questionList = data.data.list
	$axis.axis(0, true);
	render(0);
}


var answerSheet = {}


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
	if (!ans.length && answerSheet[cache.index]) {
		delete answerSheet[cache.index];
	}
})

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

var pagePrev = function () {
	render(getInfo().index - 1);
}
var pageNext = function () {
	render(getInfo().index + 1);
}

$left.on('click', pagePrev);
$right.on('click', pageNext);





/**
 * 浮动题目目录
 */
var tplFloat = __inline('views/float.tmpl'),
	layer = require('base:components/layer/layer.js').skin(),
	$floatLayer;

layer.open({
	type: 1,
	shade: false,
	closeBtn: false,
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
	content: tplFloat
});



exports.setPage = render;
exports.pageNext = pageNext;
exports.pagePrev = pagePrev;

exports.init = init;
