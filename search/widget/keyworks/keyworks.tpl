<div class="w-keyworks">
    <a class="kwbtn" data-name="post" data-placeholder="请选择职位" data-title="职位" title="职位">
        <span class="ellipsis">请选择职位</span>
        <input type="hidden" name="funtype" value="{%join($data.job_type_id, ',')%}">
        <b></b>
    </a>
    <a class="kwbtn" data-name="area" data-tip="请选择工作地点" data-placeholder="请选择地点" data-title="地点" title="地点">
        <span class="ellipsis">请选择地点</span>
        <input type="hidden" name="jobarea" value="{%join($data.job_city_id, ',')%}">{%* {%$smarty.request.jobarea%} *%}
        <b></b>
    </a>


    <div class="search-bar">
        <span class="search-type">
            <span>{%if $data.keyword_scope eq 'company_name'%}公司名{%elseif $data.keyword_scope eq all%}全 文{%else%}职位名{%/if%}</span>
            <b class="arrows"></b>
            <input type="hidden" name="keyword_scope" class="keyword_scope" value="{%$data.keyword_scope%}">
            <ul class="search-list">
                <li data-name="">职位名</li> {%* data-name="job_name" *%}
                <li data-name="company_name">公司名</li>
                <li data-name="all">全 文</li>
            </ul>
        </span>


        <div class="search-rapid J_search-ass">
            <ul class="sb-list">
                {%foreach from=$data.history item="item"%}
                    <li><a class="ellipsis " href="/job_search/job_list?s=history&p={%$item.value%}">{%$item.word%}</a></li>
                {%/foreach%}
            </ul>
        </div>


        <input type="text" class="search-val" placeholder="输入职位名或者关键字" name="key_words" value="{%$data.key_words%}" autocomplete="off">
        <a href="javascript:" class="search-btn single" target="_self">找工作</a>
    </div>

    <span class="search-more" class="action">更多搜索条件<b></b></span>
</div>


<div class="autocomplete-wrap auto-complete-hot hide"><ul class="autocomplete-list"></ul></div>


{%script%}
    require('keyworks');
{%/script%}

