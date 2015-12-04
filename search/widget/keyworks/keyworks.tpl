<div class="w-keyworks">
    <a class="kwbtn post-btn" layer-name="post" layer-tip="请选择职能类别" layer-placeholder="请选择职位" title="职位" layer-multi="1">
        <span>请选择职位</span>
        <input type="hidden" name="funtype" value="">
        <b></b>
    </a>
    <a class="kwbtn address-btn" layer-name="initialarea" layer-tip="请选择工作地点" layer-placeholder="请选择职位" title="地点" layer-multi="1">
        <span>请选择地点</span>
        <input type="hidden" name="jobarea" value="" id="jobarea">
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


{%*
{%if isset($_GET['fis_debug'])%}
    <div class="w-keyworks">
        <a class="kwbtn post-btn" layer-name="post" layer-tip="请选择职能类别" layer-placeholder="请选择职位" title="职位" layer-multi="1">
            <span>请选择职位</span>
            <input type="hidden" name="funtype" value="">
            <b></b>
        </a>
        <a class="kwbtn address-btn" layer-name="initialarea" layer-tip="请选择工作地点" layer-placeholder="请选择职位" title="地点" layer-multi="1">
            <span>请选择地点</span>
            <input type="hidden" name="jobarea" value="" id="jobarea">
            <b></b>
        </a>

        <input type="hidden" name="keyword_scope" value="job_name" class="keyword_scope">

        <div class="search-bar">
            <span class="search-type">
                <span>职位名</span>
                <b class="arrows"></b>
                <ul class="search-list dis_n" style="display: none;">
                    <li data-name="job_name">职位名</li>
                    <li data-name="company_name">公司名</li>
                    <li data-name="all">全 文</li>
                </ul>
            </span>
            <input type="text" class="main_sel_01 search-val placeholder" placeholder="输入职位名或者关键字" name="key_words" value="" autocomplete="off">
            <a href="javascript:;" class="search-btn" target="_self">找工作</a>
        </div>
    </div>
{%else%}
    <input type="text" name="key_words" value="服务员">
{%/if%}
*%}