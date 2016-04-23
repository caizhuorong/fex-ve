<section class="w-banner">
	
	<div class="w-banner-box">
		<img class="w-banner-text" src="text.png">
		<div class="w-banner-do">
			<a href="javascript:;" style="background-color:#c5363c" id="ceping-play">我要评测</a>
			<a href="/post/list?fis_config_namespace=ceping" style="background-color:#f2ad38">查看测评结果</a>
		</div>
	</div>
	
</section>

{%if $site_type eq 1 or $site_type eq 4%}
	{%widget name="../cpplay/cpplay.tpl" data=$data%}
{%else%}
	{%widget name="../cpplay-m/cpplay-m.tpl" data=$data%}
{%/if%}
