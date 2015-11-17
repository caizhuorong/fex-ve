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
        $form = me.$form,
        data = {};

    $.each($form.serializeArray(), function (key, item) {
        // ��ֵΪ�ղ���ʾ
        if (item.value != '') {
            if (item.name.match(/(?:\[\])$/)) {
                var i = item.name.match(/(.*)(?:\[\])$/)[1];
                if (!data[i]) {
                    data[i] = []
                }
                data[i].push(item.value);
            } else {
                data[item.name] = item.value;
            }
        }
    });
    data = $.extend(H.object($form.attr('formdata')), data);

    if (callback) {
        $.ajax({
            url: $form.attr('action'),
            methed: $form.attr('methed'),
            dataType: $form.attr('dataType') || 'json',
            data:  data,
            success: callback
        });
    } else if ($form.attr('method') == 'get') {
        location.href = $form.attr('action') + '?' + $.param(data);
    } else {
        // û��֧��formdata���ԣ��Ժ����õ���ʱ����д��
        // ��������˵���ǲ����ܵ�
        $form.submit();
    }
};


module.exports = Form;
