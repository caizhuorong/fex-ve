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
        <div class="w-page-inner nojs">
            <a href="javascript:">{%if $smarty.request['page']%}{%$smarty.request['page']%}{%else%}1{%/if%} / {%if $data.page_max%}{%$data.page_max%}{%else%}1{%/if%}</a>

            <input name="" type="text" class="page-text">
            <input name="" type="button" class="page-btn">
        </div>
    </div>
    <div class="tabright hide">
        {%widget name="widget/pages/pages.tpl" call="pages" page=$smarty.request['page'] all=$data.page_max base='/job_search/job_list?'|cat:$_GET_TEXT%}
    </div>


    <div class="joblist-style">
        <span class="wtm-list"><i></i>列表</span>
        <span class="wtm-whole"><i></i>明细</span>
    </div>


    <i class="clear"></i>

</div>

{%script%}require('tabmenu'){%/script%}
