/**
 * 这个模块主要针对表单进行ajax形式提交做出了处理
 * Created by TC-62 on 2015/10/23.
 */

'use strict';

var H = require('common:widget/helper/helper.js'),
    Form = function (form) {
        var me = this;
        me.$form = $(form);

        me.event();
    },
    fn = Form.prototype;


/**
 * 将表单数据打包成女票
 * @returns {*}
 */
fn.data = function () {
    var me = this,
        $form = me.$form,
        $input = $form.find('input[type=text], input[type=hidden], textarea, label.active input[type=radio]'),

        // 这里可以放一些静态数据，会作为数据传到后台
        data = H.object($form.attr('config') || '{}');

    $input.each(function () {
        var $self = $(this);
        // 需要注意, 暂时不支持复选
        data[$self.attr('name')] = $self.val();
    });
    return data;
};


fn.event = function () {
    var me = this,
        $form = me.$form;

};


fn.submit = function (callback) {
    var me = this,
        $form = me.$form;

    if (callback) {
        // 常规数据

        $.ajax({
            url: $form.attr('action') + '?' + $form.serialize(),
            methed: $form.attr('methed'),
            dataType: $form.attr('dataType') || 'json',
            data: H.object($form.attr('config')),
            success: callback
        });
    } else {
        $form.submit();
    }
};


module.exports = Form;
