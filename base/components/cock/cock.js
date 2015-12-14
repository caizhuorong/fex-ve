/**
 * Created by TC-62 on 2015/12/7.
 */


var layer = require('components/layer/layer.js'),
    tpl = require('common:components/tpl/tpl.js'),
    itemTpl = __inline('view/item.tmpl'),
    $win = $(window),
    cache = {},
    Cock;


tpl.helper('ceil', Math.ceil);
tpl.helper('inArray', $.inArray);

tpl.helper('cols', function (len, ratio) {
    return Math.ceil(Math.sqrt(len / ratio));
});




Cock = {

    init: function () {
        this.events();
    },


    /**
     * 对象下的属性进行偏移，暂不考虑ob下有但oa下没有某属性的情况，因为这不是重点！
     * todo: oc = {left: oa.left +/- oa.left, top: oa.top +/- oa.top}
     * @param oa
     * @param ob
     * @param sign
     * @returns {{}}
     */
    offset: function (oa, ob, sign) {
        var i, oc = {};
        for (i in oa) {
            eval('oc[i]=' + oa[i] + (sign || '-') + (ob[i] || 0));
        }
        return oc;
    },


    check: function (val, check) {
        $('.ve-w-cock .ck-table input[value=' + val + ']').prop('checked', check);
    },


    getVelues: function ($s) {
        var list = [];
        $s.each(function () {
            list.push($(this).val());
        });
        return list;
    },


    events: function () {
        var $body = $('body'),
            me = this,
            timer;

        $body
            // todo: 打开二级选择框
            .on('click.cock', '.ve-w-cock .J_ck-all span', function () {
                var $this = $(this),
                    $main = $this.closest('.ve-w-cock'),
                    index = $this.data('index'),
                    data = me.cache($main.attr('name')),
                    $itemCache = $main.find('>.item-cache').show(),
                    $item = $itemCache.find('>#item-' + index),
                    vals = me.getVelues($('.ve-w-cock .ck-std-list input')),
                    ofs;

                console.log(data);
                //判断cache是否存在，如果不存在，则创建
                if (!$item.length) {
                    $item = me.render(itemTpl, $.extend({}, data.data, {
                        vals: vals,
                        index: index,
                        baba: data.baba
                    }));
                    $itemCache.append($item);
                }
                $item.show().siblings().hide();

                //接下来就是对二级位置做出调整咯
                // ofs = me.offset(me.offset($this.offset(), $main.parent().offset()), {top: $this.height() + 1}, '+');
                var zleft = $this.offset().left + $itemCache.outerWidth() + 10,
                    zwidth = $win.width(),
                    ztop = $this.offset().top + $itemCache.outerHeight() + 10,
                    zheight = $win.height(),
                    offsetLeft = zleft > zwidth ? zleft - zwidth : 0,
                    offsetTop = ztop > zheight ? ztop - zheight : 0;

                ofs = me.offset(me.offset($this.offset(), $main.parent().offset()), {left: offsetLeft, top: offsetTop});
                $itemCache.css(ofs);
            })

            // todo: 鼠标移出 240毫秒后 关闭二级菜单
            .on('mouseleave.cock', '.ve-w-cock .item-cache', function () {
                var $this = $(this);
                timer = setTimeout(function () {
                    $this.hide();
                }, 240);
            })
            .on('mouseenter.cock', '.ve-w-cock .item-cache', function () {
                clearTimeout(timer);
            })

            // todo: label改变
            .on('change.cock-i', '.ve-w-cock .ck-table input', function () {
                var $this = $(this),
                    val = $this.val(),
                    checked = $this.prop('checked'),
                    $clist = $('.ve-w-cock .ck-std-list'),
                    $main = $this.closest('.ve-w-cock'),
                    data = me.cache($main.attr('name'));

                if (checked) {
                    // 当前选项选中
                    if ($clist.find('label').length < data.multi) {
                        $clist.append($this.closest('label').clone(true));
                        //$this.  todo: 暂时没写完
                    } else {
                        $this.prop('checked', false);
                        layer.tips('您最多能选择' + data.multi + '项', $clist, {tips: [3, '#FF9900'], time: 2400});
                        return;
                    }
                } else {
                    $clist.find('input[value=' + val + ']').closest('label').remove();
                }

                me.check(val, checked);
            })

            // todo: 头部已选择的label点击后删除
            .on('click', '.ve-w-cock .ck-std-list label', function () {
                var $this = $(this),
                    val = $this.find('input').val();
                $this.remove();
                me.check(val, false);
            });

    },


    /**
     * 用于缓存完整弹窗
     * @param key
     * @param value
     * @returns {*}
     */
    cache: function (key, value) {
        if (typeof value != 'undefined') {
            cache[key] = value;
        }
        return cache[key];
    },


    render: function (tmpl, data) {
        return $(tpl.compile(tmpl)(data));
    },


    biu: function (opt) {
        var god = this.cache(opt.name);
        opt.data.ratio = opt.ratio || 999;
        return god ? god : this.cache(opt.name, $.extend({
            $main: this.render(opt.tpl, opt.data).attr('name', opt.name).append('<div class="item-cache"></div>')
        }, opt));
    },


    run: function (opt, callback) {
        var god = this.biu(opt),
            $me;

        layer.open({
            area: '840px',
            title: opt.tip + (opt.multi && ' （您最多能选择' + opt.multi + '项）'),
            shift: parseInt(Math.random() * 5 + 1),
            //btn: 0,
            closeBtn: 0,
            success: function ($layero, index) {
                $me = $layero;
                $layero.children('.layui-layer-content').append(god.$main);
                $win.resize();
            },
            yes: function (index) {
                console.log($me);
                god.$main.remove();
                layer.close(index);
            }
        })
    }

};


Cock.init();

module.exports = Cock;