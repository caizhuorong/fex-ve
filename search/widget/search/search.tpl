{%function name="formItem" pla="" vid=""%}
    <span control="select" class="select" data-v="{%$vid%}"><i pla="{%$pla%}">{%$pla%}</i><em></em><input type="hidden" name="{%$vid%}"></span>
{%/function%}



{%*
// 这是应该可以使用的`checkbox组`函数，但只使用一次是没有必要被创建的
{%function name="checkbox" pla="" vid="" list=[]%}
    {%$pla%}：
    {%foreach from=$list key="key" item="item"%}
        <span><input type="checkbox" class="hide" name="{%$vid%}[]" value="{%$item[0]%}"> {%$item[1]%}</span>
    {%/foreach%}
{%/function%}
*%}


<section class="w-search">
    <div class="search">
        <form id="job-search-form" action="/job_search/job_list" method="{%$method|default:'get'%}" dataType="json" formdata="{form_src:'local'}" config="{}">
            {%*<input type="hidden" name="funtype" value="0000">
            <input type="hidden" name="jobarea" value="0000">*%}
            {%*<input type="hidden" name="form_src" value="local">
            <input type="hidden" name="keyword_scope" value="job_name">
            <input type="hidden" name="key_words" value="服务员">*%}


            <div class="key-works-search">
                <a class="post-btn" layer-name="post" layer-tip="请选择职能类别" layer-multi="1" layer-placeholder="职位" title="职位">
                    <span>职位</span>
                    <input type="hidden" name="funtype" value="">
                    <input type="hidden" name="funtype_text" value="0000">
                    <input type="hidden" class="btnFuntype" name="btnFuntype" value="职位">
                    <b></b>
                </a>
                <a class="address-btn" layer-name="initialarea" layer-placeholder="地点" layer-tip="请选择工作地点" layer-multi="1" title="地点">
                    <span>地点</span>
                    <input type="hidden" name="jobarea" value="" id="jobarea">
                    <input type="hidden" name="jobarea_text" value="0000" id="jobarea_text">
                    <input type="hidden" class="btnJobarea" name="btnJobarea" value="地点">
                    <b></b>
                </a>
                <input type="hidden" name="form_src" value="local">
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

            <i class="line"></i>

            <div class="form-box">
                {%call name="formItem" pla="行业类别" vid="company_industry"%}
                {%call name="formItem" pla="企业类型" vid="company_type"%}
                {%call name="formItem" pla="星级" vid="star_level"%}
                <i class="clear"></i>

                {%call name="formItem" pla="工作经验" vid="work_year"%}
                {%call name="formItem" pla="月薪范围" vid="salary"%}
                {%call name="formItem" pla="筹建状态" vid="is_construct"%}
                {%call name="formItem" pla="性别要求" vid="gender"%}
                {%call name="formItem" pla="食宿情况" vid="rations_quarters"%}
                {%call name="formItem" pla="学历要求" vid="degree"%}
                <i class="clear"></i>

                <div class="work-mode">
                    职位性质：
                    {%foreach from=$DROPDATA.work_mode key="key" item="item"%}
                        <span><input type="checkbox" class="hide" name="work_mode[]" value="{%$item[0]%}"> {%$item[1]%}</span>
                    {%/foreach%}
                </div>
            </div>

            <div class="form-bottom">
                <input type="submit" class="submit J_submit" value="找工作">
                <a href="javascript:;" class="clear-form">清空搜索条件</a>
            </div>
        </form>
    </div>
</section>


{%script%}window.DROPDATA = {%json_encode($DROPDATA)%};{%/script%}
{%script%}require('search.js').callback = null{%/script%}
