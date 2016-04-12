<section class="w-factor">

	<div id="factor">
	</div>
	
	<a class="cp-sub-click" id="startTest" href="answer?fis_config_namespace=ceping">开始评测</a>

</section>

{%script%}
window._factor={%json_encode($factor)%};
require('factor');
{%/script%}