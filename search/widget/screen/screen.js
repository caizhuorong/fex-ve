/**
 * Created by zsl99a on 2015/11/1.
 */

var drop = require('common:widget/droplist/droplist.js'),
    $doc = $(document);



$('.w-screen [control=select]').on('click', function (ev) {
    var $self = $(this),
        $tpl = drop($self, DROPDATA, 'w-screen-drop', function () {

        });

    if ($self.hasClass('active')) {
        $tpl.hide();
    } else {
        $tpl.move(12, 1);
    }
    ev.stopPropagation();
});