<!DOCTYPE html>
{%* 使用html插件替换普通html标签，同时注册JS组件化库 *%}
{%html framework="common:static/mod.js"%}
    {%* 使用head插件替换head标签，主要为控制加载同步静态资源使用 *%}
    {%head%}
        <meta charset="utf-8"/>
        <link rel="dns-prefetch" href="//fex.v.veimg.cn">
        <link rel="dns-prefetch" href="//sso.veryeast.cn">
        <title>{%$title%}</title>
        <meta name="keyworks" content="{%$keyworks%}">
        <meta name="description" content="{%$description%}">
        {%require name='common:components/normalize/normalize.css'%}
        {%require name='common:widget/csspro/csspro.less'%}
        <!--[if lt IE 9]><script src="{%uri name='common:static/html5.js'%}"></script><![endif]-->
        {%block name="block_head_static"%}{%/block%}
    {%/head%}

    {%* 使用body插件替换body标签，主要为可控制加载JS资源 *%}
    {%body%}
        <div class="layout">
            {%widget name='base:widget/top/top.tpl'%}
            {%block name="content"%}{%/block%}
            {%widget name='base:widget/footer/footer.tpl'%}
        </div>

        <!--[if lte IE 9]><script src="{%uri name='common:static/jquery/1.11.3.js'%}"></script><![endif]-->
        {%'<!--[if !IE]><!-->'%}<script src="{%uri name='common:static/jquery/2.1.4.js'%}"></script><!--<![endif]-->

        <!--[if lt IE 6]><script src="{%uri name='common:static/DD_belatedPNG.js'%}"></script><script>DD_belatedPNG.fix('.png_bg,label,background')</script><![endif]-->
    {%/body%}

{%/html%}

