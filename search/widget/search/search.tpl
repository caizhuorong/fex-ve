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
            {%widget name="widget/keyworks/keyworks.tpl"%}

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
