/**
 * Created by TC-62 on 2015/12/7.
 */


var layer = require('components/layer/layer.js'),
    tpl = require('common:components/tpl/tpl.js'),
    itemTpl = __inline('view/item.tmpl'),
    $win = $(window),
    cache = {},
    Cock,
    action,
    $me;


// 在模板中挂咋需要使用到的方法
tpl.helper('parseInt', parseInt);
tpl.helper('ceil', Math.ceil);
tpl.helper('inArray', $.inArray);

tpl.helper('colsp', function (len, ratio) {
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
                    index = $this.data('index'), // 二级菜单的缓存ID
                    data = me.cache($main.attr('name')), // 大弹窗缓存（数据）
                    $itemCache = $main.find('>.item-cache').show(), // 二级菜单div（缓存就在里面）
                    $item = $itemCache.find('>#item-' + index),
                    hit = me.getVelues($('.ve-w-cock .ck-std-list input')), // 已选择选项  从已选栏目查找
                    ofs;


                //判断cache是否存在，如果不存在，则创建
                if (!$item.length) {
                    $item = me.render(itemTpl, $.extend({}, data.data, {hit: hit, index: index, baba: data.baba, cols: data.ratio}));
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
                    data = me.cache($main.attr('name')),
                    $label = $this.closest('label'),
                    i, ls = [];

                for (i in data.emp) {
                    ls.push(i);
                } // 地点页面主要城市标红加粗的城市

                console.log( data );

                if (checked) {
                    // 当前选项选中
                    if (data.multi) {
                        // 多选 hit
                        //console.log( data.hit.push[val], data.multi );
                        if ($this.hasClass('isTitle')) {

                        }

                        if ($clist.find('label').length < data.multi) {
                            $clist.append($label.clone(true).removeClass(ls.join(' ')));
                            $label.closest('table').find(($label.parent().get(0).tagName == 'TH' ? 'td' : 'th') + ' input').prop('checked', false).trigger('change.cock-i');
                        } else {
                            $this.prop('checked', false);
                            layer.tips('您最多能选择' + data.multi + '项', $clist, {tips: [3, '#FF9900'], time: 2400});
                            return;
                        }
                    } else {
                        // todo: 单选
                    }
                } else {
                    $clist.find('input[value=' + val + ']').closest('label').remove();
                }

                me.check(val, checked);
            })

            // 头部已选择的label点击后删除
            .on('click', '.ve-w-cock .ck-std-list label', function () {
                var $this = $(this),
                    val = $this.find('input').val();
                $this.remove();
                me.check(val, false);
            });


        var msgId,
            $msg,
            msgIdz = function () {
                msgId = 0;
            };
        $win
            .keydown(function (ev) {
                if (action && ev.keyCode == 27) {
                    if (msgId) {
                        layer.close(msgId);
                    } else {
                        action2 = true;
                        msgId = layer.open({
                            type: '0',
                            content: '<p style="font-size:16px;text-align:center;">您确定要修改求职条件吗？</p>',
                            btn: ['确定', '再想想'],
                            success: function ($o) {
                                $msg = $o
                            },
                            yes: function (i) {
                                layer.close(i);
                                $me.find('.layui-layer-btn0').click();
                            },
                            end: msgIdz
                        });
                    }
                }
            })
            .keydown(function (ev) {
                if (msgId && ev.keyCode == 13) {
                    $msg.find('.layui-layer-btn0').click();
                }
            })

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
        var god = this.cache(opt.name), i;
        opt.data.ratio = opt.ratio || 999;

        if (!god) {
            god = this.cache(opt.name, $.extend({
                $main: this.render(opt.tpl, $.extend({hit: opt.hit || []}, opt.data))
                        .attr('name', opt.name)[(window.screen.availHeight < 732 ? 'add' : 'remove') + 'Class']('mini-ms')
                        .append('<div class="item-cache"></div>')
            }, opt));
            for (i in god.emp) {
                god.$main.find('.J_ck-hot').find(god.emp[i].join(',').replace(/(\d+)/g, 'input[value=$1]')).parent().addClass(i);
            }
        }

        return god;
    },


    run: function (opt, callback) {
        var god = this.biu(opt);
        action = true;


        layer.open({
            area: '840px',
            title: opt.tip + (opt.multi > 1 ? ' （您最多能选择' + opt.multi + '项）' : ''),
            shift: parseInt(Math.random() * 5 + 1),
            btn: '[确定]',
            closeBtn: 0,
            skin: 've-w-cock-box',
            success: function ($layero, index) {
                $me = $layero;
                $layero.children('.layui-layer-content').append(god.$main);
                $win.resize();
            },
            yes: function (index) {
                var list = {v: [], t: []},
                    tow = [];

                $me.find('.ve-w-cock .ck-std-list label').each(function () {
                    var $this = $(this),
                        val = $this.find('input').val(),
                        text = $this.text();
                    list.v.push(val);
                    list.t.push(text);
                    tow.push({value: val, text: text});
                });

                god.$main.remove();
                layer.close(index);
                action = !1;
                $me = !1;

                callback && callback(list, tow);
            }
        })
    }

};


Cock.init();

module.exports = Cock;