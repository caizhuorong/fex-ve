/** * Created by TC-62 on 2015/10/22. */var form = require('common:widget/form/form.js'),    drop = require('widget/droplist/droplist.js'),    $search = $('.w-search');// checkbox 子父级效果$search    .on('click', '.search-more', function () {        var $keywork = $('.w-keyworks'),            $bottom = $('.form-bottom');        if ($keywork.hasClass('action')) {            $search.find('.search-form-box').stop(true).slideUp();            $keywork.removeClass('action');            $bottom.removeClass('action');        } else {            $search.find('.search-form-box').stop(true).slideDown();            $keywork.addClass('action');            $bottom.addClass('action');        }    })    .on('click', '.clear-form', function () {        // 下拉菜单        $search.find('[control=select]').each(function () {            var $me = $(this).removeClass('isSet'),                $i = $me.children('i'),                $input = $me.children('input');            $i.html($i.attr('pla'));            $input.val(DROPDATA[$me.data('v')][0][0]);        }).filter('[isdropitem]').addClass('disabled');        // 职位性质        $search.find('.work-mode span').eq(0).click();        // 关键字类型        /*$search.find('.search-val').val('')         .siblings('.search-type').find('.search-list li').eq(0).click();*/    })    .on('click', '.work-mode span', function () {        var $self = $(this),            $cbox = $self.children('input'),            $sibs;        $cbox.prop('checked', true);        if ($cbox.val() == 0) {            $sibs = $self.addClass('active').siblings('span');        } else if (!$self.hasClass('active')) {            $sibs = $self.addClass('active').siblings('span').eq(0);            if ($self.siblings('span.active').length == $self.siblings('span').length - 1) {                $self.siblings('span').eq(0).click();                return;            }        } else if ($self.siblings('span.active').length == 0) {            $self.siblings('span').eq(0).click();            return;        } else {            $sibs = $self;        }        $sibs.removeClass('active').children('input').prop('checked', false);    }).find('.work-mode span').eq(0).click();exports.callback = function (data) {    //console.log(data);};/** * 这是最牛逼的子集菜单处理函数 * @param $me * @param item * @param unSetItem */function disable($me, item, unSetItem) {    var $item = $me.siblings('[data-v=' + $me.attr('drop-item') + ']').attr('isDropItem', '');    if ($item.length) {        var $i = $item.data('dropItem', unSetItem ? '' : item)[(unSetItem ? 'add' : 'remove') + 'Class']('disabled').find('i');        $i.html($i.attr('pla')).siblings('input[type=hidden]').val('');        // 递归将所有选项卡重置        disable($item, '', true);    }}disable($('[control=select][data-v=company_industry]'), '', true);$search.on('click', '[control=select]', function (ev) {    var $self = $(this),        name = $self.find('input[name]').attr('name'),        $tpl,    //isFilter = $.inArray(name, ['company_type', 'star_level']) >= 0,        hasItem = $.inArray(name, ['company_industry', 'company_type']) >= 0;    if ($self.hasClass('disabled')) {        return;    }    $tpl = drop({        $dom: $self,        data: DROPDATA,        filter: DROPDATA_CHILDREN_MAP[$self.data('dropItem')],        skin: 'w-search-drop'    }, function (val, item) {        var unSetItem = item == undefined;        if (hasItem) {            disable($self, item, unSetItem)        }        if ($.inArray(name, ['work_year', 'salary']) >= 0) {            var filter = DROPDATA_FILTER[name][val],                sal = (filter ? filter : '-').split('-');            $self.siblings('input[name=' + name + '_min]').val(sal[0]).siblings('input[name=' + name + '_max]').val(sal[1]);        }    });    if ($self.hasClass('active')) {        $tpl.hide();    } else {        $tpl.resize(12).move(1);    }    ev.stopPropagation();});var search = new form('#job-search-form');$search.on('click', '.search-btn, .J_submit', function (ev) {    search.submit();    ev.preventDefault();});