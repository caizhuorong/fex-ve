<div class="w-cpplay-m">
	<div class="w-cpplay-m-box">
		{%widget name="widget/m-top/m-top.tpl" href="javascript:;" title="岗位胜任力测评"%}
	
		<ul class="w-cpplay-m-list">
			<li>
				高级管理
			</li>
			<li>
				中级管理
			</li>
			<li>
				基层管理
			</li>
		</ul>
	</div>
</div>

{%script%}
var data = {%json_encode($data)%};
require('cpplay-m.js');
{%/script%}
