/**
 * Created by TC-62 on 2015/11/30.
 */


require.async(['base:components/layer/layer.js'], function (layer) {

    var $float = $('.w-float'),
        $doc = $(document);

    $(window).scroll(function () {
        $float.find('a')[$doc.scrollTop() < 200 ? 'hide' : 'show']();
    }).scroll();


});