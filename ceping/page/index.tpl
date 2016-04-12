{%extends file="base/page/tidy.tpl"%}

{%block name='block_head_static'%}
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	{%require name="common:widget/csspro/csspro.less"%}
	{%script%}require('../lib/base'){%/script%}
{%/block%}

{%block name='content'%}

	{%widget name="widget/about/about.tpl"%}
	
{%/block%}

{%block name='javascript'%}
{%/block%}
