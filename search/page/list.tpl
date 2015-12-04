{%extends file="base/page/normal.tpl"%}

{%block name='block_head_static'%}
    {%require name="search:widget/public/public.less"%}
{%/block%}

{%block name='content'%}
    {%script%}
        window._DATA = {%json_encode($data)%}; //arr_result
        {%*window._FILTER_POST = {};*%}

        {%* 本地实际与服务器时间的偏移量（时间校正） *%}
        _SERVER_TIME_OFFSET = {%time() + 2%}000;
        window._SERVER_TIME_OFFSET = (new Date()).valueOf() - _SERVER_TIME_OFFSET;

        window._ARR_KEY_WORDS = {%$data.arr_key_words%}
        window._REQUEST = {%json_encode($_REQUEST)%};
    {%/script%}

    {%widget name='search:widget/header/header.tpl'%}
    {%widget name='base:widget/nav/nav.tpl' call='nav' data=$nav%}
    {%script%}$('.ve-nav-default .list a[href="/"]').addClass('active'){%/script%}

    {%* 页面内容 *%}
    {%widget name='search:widget/search/search.tpl'%}

    {%widget name='search:widget/screen/screen.tpl'%}

    {%widget name='search:widget/tabmenu/tabmenu.tpl'%}
    {%widget name='search:widget/joblist/joblist.tpl' data=$data.arr_result top=$data.top_job_num fav=$data.favoriteJob%}
    {%widget name='search:widget/jobbottom/jobbottom.tpl'%}


    {%* 页面内容 *%}
    {%widget name="widget/float/float.tpl"%}

{%/block%}