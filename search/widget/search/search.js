/** * Created by TC-62 on 2015/10/22. */var form = require('common:widget/form/form.js'),    drop = require('widget/droplist/droplist.js'),    $search = $('.w-search');// checkbox 子父级效果$search    .on('click', '.search-more', function () {        var $keywork = $('.w-keyworks');        if ($keywork.hasClass('action')) {            $search.find('.search-form-box').stop(true).slideUp();            $keywork.removeClass('action');        } else {            $search.find('.search-form-box').stop(true).slideDown();            $keywork.addClass('action');        }    })    .on('click', '.clear-form', function () {        // 下拉菜单        $search.find('[control=select]').each(function () {            var $me = $(this),                $i = $me.children('i'),                $input = $me.children('input');            $i.html($i.attr('pla'));            $input.val(DROPDATA[$me.data('v')][0][0]);        });        // 职位性质        $search.find('.work-mode span').eq(0).click();        // 关键字类型        $search.find('.search-val').val('')            .siblings('.search-type').find('.search-list li').eq(0).click();    })    .on('click', '.work-mode span', function () {        var $self = $(this),            $cbox = $self.children('input'),            $sibs;        $cbox.prop('checked', true);        if ($cbox.val() == 0) {            $sibs = $self.addClass('active').siblings('span');        } else if (!$self.hasClass('active')) {            $sibs = $self.addClass('active').siblings('span').eq(0);            if ($self.siblings('span.active').length == $self.siblings('span').length - 1) {                $self.siblings('span').eq(0).click();                return;            }        } else if ($self.siblings('span.active').length == 0) {            $self.siblings('span').eq(0).click();            return;        } else {            $sibs = $self;        }        $sibs.removeClass('active').children('input').prop('checked', false);    }).find('.work-mode span').eq(0).click();exports.callback = function (data) {    //console.log(data);};$('.w-search [control=select]').on('click', function (ev) {    var $self = $(this),        name = $self.find('input[name]').attr('name'),        $tpl = drop({            $dom: $self,            data: DROPDATA,            skin: 'w-search-drop'        }, function (val) {            //console.log(name, val);            if ('salary' == name) {                var filter = DROPDATA_FILTER[name][val];                var sal = (filter ? filter : '-').split('-');                $self.siblings('input[name=salary_min]').val(sal[0]).siblings('input[name=salary_max]').val(sal[1]);                //$self.find('input[name]').val('');            }        });    if ($self.hasClass('active')) {        $tpl.hide();    } else {        $tpl.resize(12).move(1);    }    ev.stopPropagation();});var search = new form('#job-search-form');$search.on('click', '.search-btn, .J_submit', function (ev) {    search.submit();    ev.preventDefault();});