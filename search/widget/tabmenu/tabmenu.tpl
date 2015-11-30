<div class="w-tabmenu">

    <ul class="tabmenu">
        <li data-val="0" class="active">默认顺序</li>
        <li data-val="1">新增职位</li>
        <li data-val="2">雇主指数高</li>
        <li data-val="3">急聘</li>
        <li data-val="4">竞争少</li>
        <li data-val="5">电话直聘</li>
    </ul>






    <div class="w-tab-show">
        <div class="ve-page-inner">
            <a href="javascript:;">{%if $_REQUEST['page']%}{%$_REQUEST['page']%}{%else%}1{%/if%} / {%if $data.page_max%}{%$data.page_max%}{%else%}1{%/if%}</a>

            <input name="" type="text" class="page-text">
            <input name="" type="button" class="page-btn">
        </div>
    </div>
    <div class="tabright hide">
        {%widget name="widget/pages/pages.tpl" call="pages" page=$_REQUEST['page'] all=$data.page_max base='/job_search/job_list?'|cat:$_GET_TEXT%}
    </div>

    <i class="clear"></i>

</div>

{%script%}require('tabmenu'){%/script%}
