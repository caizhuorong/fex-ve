var tpl = require('common:components/autocomplete/autocomplete.js');


var $answer = $('.w-answer'),
	$answerList = $('.w-answer-list'),
	$axis = $('.w-answer-axis');


var questionTypes = [
	{ input: 'radio', type: '单选题' },
	{ input: 'checkbox', type: '多选题' }
]

var questionList = [
	{
		id: '1501',
		title: '这里是文本格式的题目001？ ',
		type: '0',
		item: ['选项1', '选项2', '选项3', '选项4']
	},
	{
		id: '1502',
		title: '这里是文本格式的题目002？ ',
		type: '1',
		item: ['选项1', '选项2', '选项3', '选项4']
	},
	{
		id: '1503',
		title: '这里是文本格式的题目003？ ',
		type: '0',
		item: ['选项1', '选项2', '选项3', '选项4']
	},
	{
		id: '1504',
		title: '这里是文本格式的题目004？ ',
		type: '1',
		item: ['选项1', '选项2', '选项3', '选项4']
	},
	{
		id: '1505',
		title: '这里是文本格式的题目005？ ',
		type: '0',
		item: ['选项1', '选项2', '选项3', '选项4']
	}
]

var answerSheet = {

}



// var initAnswer = function() {

// }


var $left = $answer.find('.w-answer-pageLeft'),
	$right = $answer.find('.w-answer-pageRight');


var getInfo = function() {
	return $.extend($answerList.data(), { all: questionList.length });
}


var render = function(index) {
	var question = questionList[index],
		$box = '<h4>' + question.title + '</h4><ul>';
	$.each(question.item, function(index, item) {
		$box += '<li><label><input '
		if ($.inArray(index, answerSheet[question.id]) >= 0) {
			$box += 'checked'
		}
		$box += ' name="question" value="' + index + '" type="' + questionTypes[question.type].input + '">' + item + '</label></li>'
	});
	$box += '</ul>';
	$answerList.data({ index: index, id: question.id }).html($box);

	$left[index > 0 ? 'show' : 'hide']();
	$right[index + 1 < getInfo().all ? 'show' : 'hide']();
}


var pagePrev = function() {
	render(getInfo().index - 1);
}
var pageNext = function() {
	render(getInfo().index + 1);
}

$left.on('click', pagePrev);
$right.on('click', pageNext);



$axis.axis(0, true);
setTimeout(function() {
	render(0);
}, 0);



$answerList.on('change', 'input', function () {
	console.log( $(this).val() )
})



exports.setPage = render;
exports.pageNext = pageNext;
exports.pagePrev = pagePrev;
