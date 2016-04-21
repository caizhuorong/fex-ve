<section class="w-banner">
	
	<div class="w-banner-box">
		<img class="w-banner-text" src="text.png">
		<div class="w-banner-do">
			<a href="javascript:;" style="background-color:#c5363c" id="ceping-play">我要评测</a>
			<a href="/post/list?fis_config_namespace=ceping" style="background-color:#f2ad38">查看测评结果</a>
		</div>
	</div>
	
</section>

{%script%}
var data = {%json_encode($data)%};

{%if $site_type eq 1 or $site_type eq 4%}
	require('../cpplay/cpplay').cpplay('#ceping-play', data);
{%else%}
	console.log('11111111111')
{%/if%}

{%/script%}