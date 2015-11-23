/**
 * Created by TC-62 on 2015/11/23.
 */

    // 这个文件暂时是无用的、但不代表将来无用

var H = require('common:widget/helper/helper.js'),
    api,
    def = {
        skin: '',
        zindex: 95,
        data: []
    };

function Drop(opt) {
    var me = this, config = {};
    me.config = $.extend(config, def, opt);
    me.init().skin(config.skin).zindex(config.zindex);
}

api = Drop.prototype;

api.init = function () {
    var me = this,
        $box = $('<div class="cw-droplist-i"><ul>');
    me.$box = $box;
    return me;
};


/**
 * 生成列表
 * @param data
 * @returns {Drop}
 */
api.render = function (data) {
    var me = this,
        $ul = me.$box.children('ul'),
        $tmp;

    for (var i = 0, len = data.length; i < len; i++) {
        $tmp = $('<li class="ellipsis">');
        $tmp.attr('value', data[i][0])
            .text(data[i][1]);
        $ul.append($tmp);
    }
    me.$box.children('ul').append($ul);
    return me;
};


api.action = function (value) {
    var me = this;


    return me;
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
 * 匹配列表的宽度和高度
 * @param size
 * @returns {Drop}
 */
api.resize = function (size) {
    var me = this;

    this.tpl.css({
        width: $dom.innerWidth(),
        height: this.height(num),
        fontSize: $dom.css('fontSize'),
        lineHeight: $dom.css('lineHeight')
    });
    return this;

    return me;
};


/**
 * 控制z-index
 * @param zIndex
 * @returns {Drop}
 */
api.zindex = function (zIndex) {
    this.$box.css('zindex', zIndex);
    return this;
};


/**
 * 移动到一个靠谱的位置
 * @param type
 * @returns {Drop}
 */
api.move = function (type) {
    var me = this;


    return me;
};


api.end = function () {
    var me = this;


    return me;
};

