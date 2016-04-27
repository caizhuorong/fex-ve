<div class="w-cpplay-m">
	<div class="w-cpplay-m-box">
		{%widget name="widget/m-top/m-top.tpl" href="javascript:;" title="岗位胜任力测评"%}
	
		<ul class="w-cpplay-m-list">
			{%foreach from=$data.pojob key="key" item="item"%}
			{%if count($item.paname) gt 0%}
			<li>
				<span>{%$item.name%}<i></i></span>
				<ul>
					{%foreach from=$item.paname key="index" item="val"%}
					<li><a href="/post/index?id={%$val.id%}&fis_config_namespace=ceping">{%$val.name%}</a></li>
					{%/foreach%}
				</ul>
			</li>
			{{/if}}
			{%/foreach%}
		</ul>
	</div>
</div>

{%script%}
var data = {%json_encode($data)%};
require('cpplay-m.js');
{%/script%}
