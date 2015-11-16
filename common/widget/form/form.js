/**
 * ���ģ����Ҫ��Ա�����ajax��ʽ�ύ�����˴���
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
 * �������ݴ����ŮƱ
 * @returns {*}
 */
fn.data = function () {
    var me = this,
        $form = me.$form,
        $input = $form.find('input[type=text], input[type=hidden], textarea, label.active input[type=radio]'),

        // ������Է�һЩ��̬���ݣ�����Ϊ���ݴ�����̨
        data = H.object($form.attr('config') || '{}');

    $input.each(function () {
        var $self = $(this);
        // ��Ҫע��, ��ʱ��֧�ָ�ѡ
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
        // ��������

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
