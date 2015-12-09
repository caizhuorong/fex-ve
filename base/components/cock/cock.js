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


Cock = {

    init: function () {
        this.events();
    },

    events: function () {
        var $body = $('body'),
            me = this;

        $body.on('click.cock', '.ve-w-cock .J_ck-all span', function () {
            var $this = $(this),
                $main = $this.closest('.ve-w-cock'),
                index = $this.data('index'),
                data = me.cache($main.attr('name')),
                $itemCache = $main.find('>.item-cache');

            //if ($itemCache.find('[index=' + index + ']')) {}
            console.log(data);
            //console.log( $.extend({index: index}, list) );

            // todo: 明天继续

            $itemCache.append(me.render(itemTpl, $.extend({index: index}, {all: data.data.all, raw: data.data.raw, cols: data.ratio || 1})));


            //console.log( $this )

        });

    },

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
        return god ? god : this.cache(opt.name, $.extend({$main: this.render(opt.tpl, opt.data).attr('name', opt.name).append('<div class="item-cache"></div>')}, opt));// all: opt.data.all, raw: opt.data.raw, ratio: opt.ratio
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
                $win.resize()
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