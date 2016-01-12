/**
 * Created by TC-62 on 2016/1/11.
 */

var H = require('common:widget/helper/helper.js'),
    KW = {
        post: require('base:widget/cock/post.js'),
        area: require('base:widget/cock/area.js')
    },
    data = {
        area: require('base:widget/cock/data/area_zh-cn.js'),
        post: require('base:widget/cock/data/post_zh-cn.js')
    };


$('.demo-w-cock')
    .on('click', '.kwbtn[data-name]', function () {
        var $this = $(this),
            data = $this.data();

        data.hit = $this.find('input').val().split(',');

        console.log( data );

        KW[$this.data('name')](data, function (list) {
            var value = list.v.join(','),
                text = list.t.join('+');

            $this.find('input').val(value ? value : '');
            $this.attr('title', text ? text : $this.data('title'));
            $this.find('span').html(text ? text : $this.data('placeholder'));

        });
    })
    .find('.kwbtn').each(function () {
        var $me = $(this),
            name = $me.data('name'),
            $input = $me.find('input[type=hidden],input[type=text]'),
            val = $input.val().split(','),
            i = 0, len = val.length, list = [], tmp;
        for (; i < len; i++) {
            tmp = data[name].raw[val[i]] || data[name].type[val[i]];
            tmp && list.push(tmp);
        }
        list.length && $me.find('span').html(list.join('+'));
    });