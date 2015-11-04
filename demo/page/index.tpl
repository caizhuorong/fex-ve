{%extends file="base/page/layout.tpl"%}

{%block name='block_head_static'%}
    <!--[if lt IE 9]>
    <script src="/lib/js/html5.js"></script>
    <![endif]-->
{%/block%}

{%block name='content'%}
    <div class="layout">
        {%widget name="demo:widget/alert/alert.tpl"%}
    </div>
{%/block%}
