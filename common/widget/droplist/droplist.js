'use strict';

var H = require('common:widget/helper/helper.js'),
    $win = $(window),
    $doc = $(document),
    $body = $('body'),
    li = '.cw-droplist-i li',
    out = setTimeout,
    cache = {},
    SELECT = function (data, style) {
        this.create(data);
    },
    fn = SELECT.prototype;


function drop($dom, data, style) {
    var v = $dom.data('v'),
        $i = $dom.children('i'),
        callback = arguments[arguments.length-1];

    $i.width($i.width()).addClass('ellipsis');
    if (!cache[v]) {
        cache[v] = new SELECT(data[v] || data);
    }
    cache[v].$me = $dom;
    cache[v].tpl.attr('dropid', v).removeClass().addClass('cw-droplist-i ' + style);

    if (typeof callback == "function") {
        cache[v].callback = callback;
    }
    return cache[v];
}


/**
 * 渲染option列表
 * @param data
 * @param cls
 * @returns {*|jQuery}
 */
fn.create = function (data) {
    var $tpl = $('<div class="cw-droplist-i"><!--<span>hello world</span>--><ul>'),
        $ul = $tpl.children('ul'),
        $tmp;


    for (var i = 0, len = data.length; i < len; i++) {
        $tmp = $('<li class="ellipsis">');
        $tmp.text(data[i][1])
            .attr('value', data[i][0]);
        $ul.append($tmp);
    }
    this.tpl = $tpl;
    return this;
};


fn.hide = function () {
    this.$me.removeClass('active');
    this.tpl.removeClass('active').hide();
    return this;
};


fn.show = function () {
    var me = this;
    dropHide();
    me.$me.addClass('active');
    me.tpl.appendTo('body').show();
    out(function () {
        me.tpl.addClass('active').find('li').removeClass('hover');
    });
    return this;
};


fn.height = function (num) {
    var $dom = this.$me,
        height = $dom.height() * (num || 10),
        ulHeight = this.tpl.find('ul li').length * $dom.height();

    return height < ulHeight ? height : ulHeight;
};


fn.resize = function (num) {
    var $dom = this.$me;
    this.tpl.css({
        width: $dom.innerWidth(),
        height: this.height(num),
        fontSize: $dom.css('fontSize'),
        lineHeight: $dom.css('lineHeight')
    });
    return this;
};


fn.move = function (num, type) {
    var $dom = this.$me,
        me = this,
        $tpl = me.tpl,
        offset = $dom.offset(),
        height, top;

    me.resize(num);

    height = $tpl.height();
    top = offset.top - (height - $dom.innerHeight()) / 2;

    switch (type) {
        case 1  :
            me.resize($dom.innerHeight() / $dom.height());

            $tpl
                .css({
                    left: offset.left,
                    top: offset.top,
                    display: 'block',
                    overflow: 'hidden'
                }).animate({
                    top: top > 50 ? top : 50,
                    height: height
                }, 200, function () {
                    $tpl.css({
                        overflow: ''
                    });
                });
            break;
        default :
            me.tpl.css({
                left: offset.left,
                top: offset.top + $dom.innerHeight() + 3,
                display: 'block'
            });
    }
    me.show();
    return me;
};


/**
 * 绑定各种默认事件
 */

$body.on('mouseenter', li, function () {
    $(this).addClass('hover');
}).on('mouseleave', li, function () {
    $(this).removeClass('hover');
}).on('click', li, function () {
    var $self = $(this),
        v = $self.closest('.cw-droplist-i').attr('dropid'),
        $i = cache[v].$me.children('i');
        
    $i.text($self.attr('value') == 0 ? $i.attr('pla') : $self.text())
        .siblings().val($self.attr('value'));
});


var dropHide = function () {
    $('[control=select]').removeClass('active');
    $body.children('.cw-droplist-i').removeClass('active').hide();
};
$doc.on('click', dropHide);
$win.on('resize', dropHide);


module.exports = drop;

