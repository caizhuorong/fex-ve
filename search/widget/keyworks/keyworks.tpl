<div class="w-keyworks">
    <a class="kwbtn" data-name="post" data-placeholder="请选择职位" data-title="职位" title="职位">
        <span class="ellipsis">请选择职位</span>
        <input type="hidden" name="funtype" value="{%$_REQUEST.funtype%}">
        <b></b>
    </a>
    <a class="kwbtn" data-name="area" data-tip="请选择工作地点" data-placeholder="请选择地点" data-title="地点" title="地点">
        <span class="ellipsis">请选择地点</span>
        <input type="hidden" name="jobarea" value="{%$_REQUEST.jobarea%}">
        <b></b>
    </a>



    <div class="search-bar">
        <span class="search-type">
            <span>{%if $_REQUEST.keyword_scope eq 'company_name'%}公司名{%elseif $_REQUEST.keyword_scope eq all%}全 文{%else%}职位名{%/if%}</span>
            <b class="arrows"></b>
            <input type="hidden" name="keyword_scope" class="keyword_scope" value="{%$_REQUEST.keyword_scope%}">
            <ul class="search-list">
                <li data-name="">职位名</li> {%* data-name="job_name" *%}
                <li data-name="company_name">公司名</li>
                <li data-name="all">全 文</li>
            </ul>
        </span>
        <input type="text" class="search-val" placeholder="输入职位名或者关键字" name="key_words" value="{%$_REQUEST['key_words']%}" autocomplete="off">
        <a href="javascript:" class="search-btn" target="_self">找工作</a>
    </div>

    <span class="search-more" class="action">更多搜索条件<b></b></span>
</div>



{%script%}
require('keyworks');
{%/script%}

