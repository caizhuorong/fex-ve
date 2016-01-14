/* global layer */
/* global DROPDATA */
/* global DROPDATA_CHILDREN_MAP */
/**
 * Created by TC-62 on 2015/10/22.
 */

var form = require('common:widget/form/form.js'),
	drop = require('widget/droplist/droplist.js'),
	$search = $('.w-search');


// checkbox 子父级效果
$search
	.on('click', '.search-more', function () {
		var $keywork = $('.w-keyworks'),
			$bottom = $('.form-bottom');
		if ($keywork.hasClass('action')) {
			$search.find('.search-form-box').stop(true).slideUp();
			$keywork.removeClass('action');
			$bottom.removeClass('action');
		} else {
			$search.find('.search-form-box').stop(true).slideDown();
			$keywork.addClass('action');
			$bottom.addClass('action');
		}
	})
	.on('click', '.clear-form', function () {
		// 下拉菜单
		$search.find('[control=select]').each(function () {
			var $me = $(this).removeClass('isSet'),
				$i = $me.children('i'),
				$input = $me.children('input');
			$i.html($i.attr('pla'));
			$input.val(DROPDATA[$me.data('v')][0][0]);
		}).filter('[isdropitem]').addClass('disabled').removeClass('isSet');
		
		// 拓展的input [work_year_min, salary_min, salary_max]
		$search.find('.form-box>input[type=hidden]').val('');
		
		// 职位性质
		$search.find('.work-mode span').eq(0).click();
		// 关键字类型
		/*$search.find('.search-val').val('')
		 .siblings('.search-type').find('.search-list li').eq(0).click();*/
	})
	.on('click', '.work-mode span', function () {
		var $self = $(this),
			$cbox = $self.children('input'),
			$sibs;

		$cbox.prop('checked', true);
		if ($cbox.val() == 0) {
			$sibs = $self.addClass('active').siblings('span');
		} else if (!$self.hasClass('active')) {
			$sibs = $self.addClass('active').siblings('span').eq(0);
			if ($self.siblings('span.active').length == $self.siblings('span').length - 1) {
				$self.siblings('span').eq(0).click();
				return;
			}
		} else if ($self.siblings('span.active').length == 0) {
			$self.siblings('span').eq(0).click();
			return;
		} else {
			$sibs = $self;
		}
		$sibs.removeClass('active').children('input').prop('checked', false);
	});


if (!$search.find('.work-mode span.active').length) {
	$search.find('.work-mode span').eq(0).click();
}


exports.callback = function (data) {
	//console.log(data);
};


/**
 * 这是最牛逼的下拉框关联处理函数
 * @param $me
 * @param item
 * @param unSetItem
 */
function disable($me, item, unSetItem) {
	var $item = $me.siblings('[data-v=' + $me.attr('drop-item') + ']').attr('isDropItem', '');

	if ($item.length) {
		var $i = $item.data('dropItem', unSetItem ? '' : item)[(unSetItem ? 'add' : 'remove') + 'Class']('disabled').removeClass('isSet').find('i');
		$i.html($i.attr('pla')).siblings('input[type=hidden]').val('');
		// 递归将所有选项卡重置
		disable($item, '', true);
	}
}


/**
 * 下拉框关联处初始化
 * @param $me
 */
function disableInit($me) {
	// 获取 $me 的下级下拉框
	var $item = $me.siblings('[data-v=' + $me.attr('drop-item') + ']').attr('isDropItem', ''),
		itemv = DROPDATA[$me.data('v')][$me.find('input[type=hidden]').val()];

	if ($item.length && itemv && itemv.length > 2) {
		$item.removeClass('disabled').data('dropItem', itemv[2]);
		// 递归将所有选项卡重置
		disableInit($item);
	}
}
disableInit($('[control=select][data-v=company_industry]'));


$search.on('click', '[control=select]', function (ev) {
	var $self = $(this),
		name = $self.find('input[name]').attr('name'),
		$tpl,
		hasItem = $.inArray(name, ['company_industry', 'company_type']) >= 0;

	if ($self.hasClass('disabled')) {
		return;
	}


	$tpl = drop({
		$dom: $self,
		data: DROPDATA,
		filter: DROPDATA_CHILDREN_MAP[$self.data('dropItem')],
		skin: 'w-search-drop'
	}, function (val, item) {
		var unSetItem = item == undefined;
		if (hasItem) {
			disable($self, item, unSetItem)
		}

		if ($.inArray(name, ['work_year', 'salary']) >= 0) {
			var filter = DROPDATA_FILTER[name][val],
				sal = (filter ? filter : '-').split('-');
			$self.siblings('input[name=' + name + '_min]').val(sal[0]).siblings('input[name=' + name + '_max]').val(sal[1]);
		}
	});

	if ($self.hasClass('active')) {
		$tpl.hide();
	} else {
		$tpl.resize(12).move(1);
	}
	ev.stopPropagation();
});



/**
 * 表单提交操作
 */
var search = new form('#job-search-form'),
	tipsConfig = { tips: [3, '#FF9900'], time: 2400 },
	$inkeys = $search.find('[name=funtype],[name=jobarea],[name=key_words]'),
	$keyInput = $inkeys.filter('.search-val');

$search.on('click', '.search-btn, .J_submit', function (ev) {
	var hasN;

	setTimeout(function () {
		$inkeys.each(function () {
			var $me = $(this),
				v = $me.val();
			if (v != '' && v != $me.attr('placeholder')) {
				hasN = true;
				if ($keyInput.val() == $keyInput.attr('placeholder')) {
					$keyInput.val('');
				}
				search.submit();
				return false;
			}
		});
		if (!hasN) {
			layer.tips('请输入关键字，或者选择职位类型/工作地点哦！', $search.find('.search-bar'), tipsConfig);
		}
	}, 100);
	ev.preventDefault();
});


/**
 * 修复ie下在input中按回车使用默认submit提交的bug
 */
$search.on('submit', function (ev) {
	$search.find('.search-btn, .J_submit').click();
	ev.preventDefault();
});