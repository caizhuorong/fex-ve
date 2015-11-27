<div class="w-tabmenu">

    <ul class="tabmenu">
        <li data-val="0" class="active">默认顺序</li>
        <li data-val="1">新增职位</li>
        <li data-val="2">雇主指数高</li>
        <li data-val="3">急聘</li>
        <li data-val="4">竞争少</li>
        <li data-val="5">电话直聘</li>
    </ul>

    <div class="tabright">
        {%widget name="base:widget/pages/pages.tpl" call="pages"%}
    </div>

    <i class="clear"></i>

</div>

{%script%}require('tabmenu'){%/script%}
