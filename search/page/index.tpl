{%extends file="base/page/normal.tpl"%}

{%block name='block_head_static'%}
    {%require name="widget/public/public.less"%}
    {%script%}require('base:components/layer/layer.js').skin(){%/script%}
{%/block%}

{%block name='content'%}
    
	{%script%}
        window._DATA = {%json_encode($data)%}; //arr_result
    {%/script%}
	
	
    {%widget name='widget/header/header.tpl'%}
    {%widget name='base:widget/nav/nav.tpl' call='nav' data=$nav%}
    {%script%}$('.ve-nav-default .list a[href="/"]').addClass('active'){%/script%}

    {%* 页面内容 *%}
    {%widget name='widget/search/search.tpl' method='get'%}

    <section class="index-main">
        <div class="m-left">
            {%foreach from=$recommend item="item"%}
                {%widget name="widget/recommend/recommend.tpl" data=$item%}
            {%/foreach%}
        </div>

        <div class="m-right">
            {%foreach from=$data.ad key="key" item="item"%}
                <a href="{%$item->ADLink%}" class="{%if not $data.ad[$key+1]%}last{%/if%}" target="_blank"><img src="{%$item->ADSrc%}" alt="{%$item->ADAlt%}"></a>
            {%/foreach%}
        </div>
        <i class="clear"></i>
    </section>
	
	{%widget name="widget/leftad/leftad.tpl"%}
	
    {%* 页面内容 *%}

    {%widget name="widget/float/float.tpl"%}

{%/block%}
