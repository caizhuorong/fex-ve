<!-- @require ./im/style.css -->


<section class="w-recommend">
    <div class="rec-title">
        <h3>{%$data.title.t|escape:none%}</h3>
        <p class="icomoon">{%$data.title.p%}</p>
		<em></em>
    </div>
	
	{%if $data.tpl eq 'list-a'%}
	
		<div class="rec-main">
			<div class="list-a {%$data.skin%}">
				{%foreach from=$data.list item="item"%}<a href="{%$item.link%}" class="{%$item.skin%} ellipsis">{%$item.text%}</a>{%/foreach%}
				<i class="clear"></i>
			</div>
		</div>
		
	{%elseif $data.tpl eq 'list-b'%}
	
		<div class="rec-main">
			<div class="list-b {%$data.skin%}">
				{%foreach from=$data.list key="key" item="item"%}
					<h4>{%$item.title%}</h4>
					<div class="ch-list">
						{%foreach from=$item.list item="childitem"%}<i><a href="{%$childitem.link%}" class="{%$childitem.skin%} ellipsis">{%$childitem.text%}</a></i>{%/foreach%}
					</div>
					<i class="line {%if not $data.list[$key+1]%}last{%/if%}"></i>
				{%/foreach%}
			</div>
		</div>
		
	{%elseif $data.tpl eq 'list-c'%}
	
		<div class="rec-main-hot">
			<ul class="list-c">
				{%foreach from=$data.list key="key" item="item"%}
					<li class="bbwb_li">
						<a class="bbwb_li_a" href="{%$item.link%}" title="{%$item.company_name%}" target="_blank">
							<img src="{%$item.company_logo%}" alt="{%$item.company_name%}" class="imghead">
						</a>
						<ul class="body_bwb_txtbox">
							{%foreach from=$item.list item="childitem"%}
							<li><a href="{%$item.link%}/{%$childitem.job_id%}" title="{%$childitem.job_name%}" target="_blank">·&nbsp;{%$childitem.job_name%}</a></li>
							{%/foreach%}
						</ul>
						<div class="body_bwb_bottom">
							<a class="color_main" href="{%$item.link%}" target="_blank">查看更多职位&gt;&gt;</a>
						</div>
					</li>
				{%/foreach%}
			</ul>
		</div>
		
	{%/if%}
    
</section>