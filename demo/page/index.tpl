{%extends file="base/page/tidy.tpl"%}

{%block name='block_head_static'%}
	{%widget name='widget/markdown/markdown.tpl'%}
{%/block%}

{%block name='content'%}
	<div id="wmd-preview" class="wmd-preview wmd-preview-full-reader">
		{%widget name="widget/cock/cock.tpl"%}
	</div>
{%/block%}