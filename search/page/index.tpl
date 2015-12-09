{%extends file="base/page/normal.tpl"%}

{%block name='block_head_static'%}
    {%require name="search:widget/public/public.less"%}
    {%script%}require('base:components/layer/layer.js'){%/script%}
{%/block%}

{%block name='content'%}

    {%widget name='search:widget/header/header.tpl'%}
    {%widget name='base:widget/nav/nav.tpl' call='nav' data=$nav%}
    {%script%}$('.ve-nav-default .list a[href="/"]').addClass('active'){%/script%}

    {%* 页面内容 *%}
    {%widget name='search:widget/search/search.tpl' method='get'%}

    <section class="index-main">
        <div class="m-left">
            {%foreach from=$recommend item="item"%}
                {%widget name="search:widget/recommend/recommend.tpl" data=$item%}
            {%/foreach%}
        </div>

        <div class="m-right">
            {%foreach from=$spot key="key" item="item"%}
                <a href="{%$item.link%}" class="{%if not $spot[$key+1]%}last{%/if%}" target="_blank"><img src="{%$item.img%}" alt="{%$item.alt%}"></a>
            {%/foreach%}
        </div>
        <i class="clear"></i>
    </section>
    {%* 页面内容 *%}

    {%widget name="widget/float/float.tpl"%}

{%/block%}
