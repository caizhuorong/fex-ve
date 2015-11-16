{%extends file="base/page/normal.tpl"%}

{%block name='block_head_static'%}
    {%require name="search:widget/public/public.less"%}
{%/block%}

{%block name='content'%}
    {%script%}
        // 听歌写代码数据都变得如此飘逸
        window._DATA = {%json_encode($data.arr_result)%}
        window._POST = {%json_encode($_POST)%} // post数据，将在页面加载完成后赋值到 `location.hash`
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