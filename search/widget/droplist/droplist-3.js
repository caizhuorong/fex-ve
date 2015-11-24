/**
 * Created by TC-62 on 2015/11/23.
 */

// 这个文件暂时是无用的、但不代表将来无用

var H = require('common:widget/helper/helper.js'),
    $body = $('body'), api,
    def = {
        skin: '',
        data: [],
        column: 1, // 列
        action: 0,
        width: '',
        height: 10,
        zindex: 95,
        call: $.noop,
        cache: true // 预留
    };

function Drop(opt) {
    var me = this, config = {};
    $.extend(config, def, opt);
    me.init(config);
}

api = Drop.prototype;

api.init = function (config) {
    var me = this,
        $box = $('<div class="cw-droplist-box"><table cellspacing="0" cellpadding="0" border="0"><tbody>');

    me.$box = $box;

    me.skin(config.skin)
        .data(config.data, config.column)
        .action(config.action)
        .css({zindex: config.zindex});
    return me;
};


/**
 * 生成列表
 * @param data
 * @returns {Drop}
 */
api.data = function (data, column) {
    var me = this,
        $list = me.$box.find('table>tbody').html(''),
        $tr, $td;

    column = column || 1;
    for (var i = 0, len = data.length; i < len; i++) {
        if (i % column == 0) {
            $tr = $('<tr>');
        }
        $td = $('<td value="' + data[i][0] + '"><i class="ellipsis">' + data[i][1] + '</i>');
        $list.append($tr.append($td));
    }
    return me;
};


/**
 * 选中指定的子项
 * @param value
 * @returns {Drop}
 */
api.action = function (value) {
    var $li = this.$box.find('tr td').removeClass('action'),
        $filter = $li.filter('[value = ' + value + ']');

    /**
     if ($filter.length) {
        $filter.eq(0).addClass('action');
    } else {
        $li.eq(0).addClass('action');
    }
     ↓↓↓↓ */
    ($filter.length ? $filter : $li).eq(0).addClass('action');
    return this;
};


/**
 * 皮肤设定
 * @param skin
 * @returns {Drop}
 */
api.skin = function (skin) {
    this.$box.addClass(skin);
    return this;
};


/**
 * 自定义css
 * @param css
 * @returns {Drop}
 */
api.css = function (css) {
    this.$box.css(css);
    return this;
};





/**
 * 移动到一个靠谱的位置
 * @param type
 * @returns {Drop}
 */
api.move = function (type) {
    $body.append(this.$box);
    return this;
};


api.end = function () {
    this.$box.remove();
};


window.demo = new Drop({
    skin: 'droplist-demo',
    data: [[0, '不限'], [1, '全职'], [2, '兼职'], [3, '实习'], [4, '临时']]
});


demo.action(3).move();

console.log(demo);

