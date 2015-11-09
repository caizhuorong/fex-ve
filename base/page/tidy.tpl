<!DOCTYPE html>
{%* 使用html插件替换普通html标签，同时注册JS组件化库 *%}
{%html framework="common:static/mod.js"%}
    {%* 使用head插件替换head标签，主要为控制加载同步静态资源使用 *%}
    {%head%}
        <meta charset="utf-8"/>
        <link rel="dns-prefetch" href="//f3.v.veimg.cn">
        <link rel="dns-prefetch" href="//sso.veryeast.cn">
        <title>{%$title%}</title>
        <meta name="keyworks" content="{%$keyworks%}">
        <meta name="description" content="{%$description%}">
        {%require name='common:components/normalize/normalize.css'%}
        {%require name='common:widget/csspro/csspro.less'%}
        <!--[if lt IE 9]>
        <script src="{%uri name='common:static/html5.js'%}"></script>
        <![endif]-->
        {%block name="block_head_static"%}{%/block%}
    {%/head%}

    {%* 使用body插件替换body标签，主要为可控制加载JS资源 *%}
    {%body%}
        {%block name="content"%}{%/block%}

        <script src="{%uri name='common:static/jquery.js'%}"></script>
    {%/body%}

{%/html%}
