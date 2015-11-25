{%extends file="base/page/normal.tpl"%}

{%block name='block_head_static'%}
    {%require name="search:widget/public/public.less"%}
{%/block%}

{%block name='content'%}
    {%script%}
        window._DATA = {%json_encode($data.arr_result)%};
        window._REQUEST = {%json_encode($_REQUEST)%};
    {%/script%}

    {%widget name='search:widget/header/header.tpl'%}
    {%widget name='base:widget/nav/nav.tpl' call='nav' data=$nav%}

    {%* 页面内容 *%}
    {%widget name='search:widget/search/search.tpl'%}

    {%widget name='search:widget/screen/screen.tpl'%}

    {%widget name='search:widget/tabmenu/tabmenu.tpl'%}
    {%widget name='search:widget/joblist/joblist.tpl' data=$data.arr_result top=$data.top_job_num%}
    {%* 页面内容 *%}


{%/block%}