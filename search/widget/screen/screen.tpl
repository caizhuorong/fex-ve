<div class="w-screen">

    <div class="screen">
        共<i class="num">8638</i>个职位，在结果中筛选：
        <input type="text" placeholder="请输入关键字">
        <a class="btn-n1" href="javascript:;">排除</a>
    </div>
    <div class="child">
        <span>餐饮<i></i></span>
        <span>服务员<i></i></span>
    </div>
    <i class="clear"></i>

    <div class="drops">
        <span control="select" class="select" id="job_add_time" data-v="job_add_time">
            <i pla="发布日期">发布日期</i>
            <input type="hidden" name="job_add_time">
        </span>

        <span control="select" class="select" id="work_year" data-v="work_year">
            <i pla="工作经验">工作经验</i>
            <input type="hidden" name="work_year">
        </span>

        <span control="select" class="select" id="salary" data-v="salary">
            <i pla="月薪范围">月薪范围</i>
            <input type="hidden" name="salary">
        </span>

        <span control="select" class="select" id="degree" data-v="degree">
            <i pla="学历要求">学历要求</i>
            <input type="hidden" name="degree">
        </span>

        <span control="select" class="select" id="work_mode" data-v="work_mode">
            <i pla="职位性质">职位性质</i>
            <input type="hidden" name="work_mode">
        </span>

        <span control="select" class="select" id="rations_quarters" data-v="rations_quarters">
            <i pla="食宿情况">食宿情况</i>
            <input type="hidden" name="rations_quarters">
        </span>
        <span control="select" class="select" id="gender" data-v="gender">
            <i pla="性别">性别</i>
            <input type="hidden" name="gender">
        </span>

        <span control="select" class="select" id="contact_display_status" data-v="contact_display_status">
            <i pla="联系方式公开程度">联系方式公开程度</i>
            <input type="hidden" name="contact_display_status">
        </span>
    </div>

</div>


{%script%}require('screen'){%/script%}