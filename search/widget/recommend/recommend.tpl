<!-- @require ./im/style.css -->


<section class="w-recommend">
    <div class="rec-title">
        <h3>{%$data.title.t|escape:none%}</h3>
        <p class="icomoon">{%$data.title.p%}</p>
    </div>
    <div class="rec-main">
        {%if $data.tpl eq 'list'%}
            <div class="list {%$data.skin%}">
                {%foreach from=$data.list item="item"%}<a href="{%$item.link%}" class="{%$item.skin%} ellipsis">{%$item.text%}</a>{%/foreach%}
                <i class="clear"></i>
            </div>
        {%elseif $data.tpl eq 'list-b'%}
            <div class="list-b {%$data.skin%}">
                {%foreach from=$data.list key="key" item="item"%}
                    <h4>{%$item.title%}</h4>
                    <div class="ch-list">
                        {%foreach from=$item.list item="childitem"%}<i><a href="{%$childitem.link%}" class="{%$childitem.skin%} ellipsis">{%$childitem.text%}</a></i>{%/foreach%}
                    </div>
                    <i class="line {%if not $data.list[$key+1]%}last{%/if%}"></i>
                {%/foreach%}
            </div>
        {%/if%}
    </div>
</section>