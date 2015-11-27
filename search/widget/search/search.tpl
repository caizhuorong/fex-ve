{%function name="searchFormItem" pla="" vid="" run=""%}
    <span control="select" class="select" data-v="{%$vid%}">
        <i pla="{%$pla%}">{%if $run!=0%}{%$DROPDATA_INDEX[$vid][$run]%}{%else%}{%$pla%}{%/if%}</i>
        <em></em>
        <input type="hidden" name="{%$vid%}" value="{%$run%}">
    </span>
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
                {%call name="searchFormItem" pla="行业类别" vid="company_industry" run=$data.company_industry%}
                {%call name="searchFormItem" pla="企业类型" vid="company_type" run=$data.company_type%}
                {%call name="searchFormItem" pla="星级" vid="star_level" run=$data.star_level%}
                <i class="clear"></i>

                {%call name="searchFormItem" pla="工作经验" vid="work_year" run=$data.work_year%}
                {%call name="searchFormItem" pla="月薪范围" vid="salary" run=$data.salary%}
                <input type="hidden" name="salary_min" value="{%if $data.salary_min!=0%}{%$data.where.salary_min%}{%/if%}">
                <input type="hidden" name="salary_max" value="{%if $data.salary_max!=1000000%}{%$data.where.salary_max%}{%/if%}">

                {%call name="searchFormItem" pla="筹建状态" vid="is_construct" run=$data.is_construct%}
                {%call name="searchFormItem" pla="性别要求" vid="gender_id" run=$data.gender_id%}
                {%call name="searchFormItem" pla="食宿情况" vid="rations_quarters" run=$data.rations_quarters%}
                {%call name="searchFormItem" pla="学历要求" vid="degree_id" run=$data.degree_id%}
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


{%script%}
    window.DROPDATA = {%json_encode($DROPDATA)%};

    function array_index ( dp ) {
        var data = {},
            i, len, list, item;

        for (key in dp) {
            data[key] = {};
            list = dp[key];

            for (i = 0, len = list.length; i < len; i++) {
                item = list[i];
                data[key][item[0]] = item[1];
            }
        }
        return data;
    }
    window.DROPDATA_INDEX = array_index(DROPDATA);

    window.DROPDATA_FILTER = {%json_encode($DROPDATA_FILTER)%};
    require('search.js')
{%/script%}
