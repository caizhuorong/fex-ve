<section class="w-search">
    <div class="search">
        <form action="">
            <div class="form-box">
                <span control="select" class="select" id="company_industry" data-v="company_industry">
                    <i pla="行业类别">行业类别</i>
                    <em></em>
                    <input type="hidden" name="company_industry">
                </span>
                <span control="select" class="select" id="company_type" data-v="company_type_hotel">
                    <i pla="企业类型">企业类型</i>
                    <em></em>
                    <input type="hidden" name="company_type">
                </span>
                <span control="select" class="select" id="star_level" data-v="star_level_hotel">
                    <i pla="星级">星级</i>
                    <em></em>
                    <input type="hidden" name="star_level">
                </span>
                <i class="clear"></i>

                <span control="select" class="select" id="work_year" data-v="work_year">
                    <i pla="工作经验">工作经验</i>
                    <em></em>
                    <input type="hidden" name="work_year">
                </span>
                <span control="select" class="select" id="salary" data-v="salary">
                    <i pla="月薪范围">月薪范围</i>
                    <em></em>
                    <input type="hidden" name="salary">
                </span>
                <span control="select" class="select" id="is_construct" data-v="is_construct">
                    <i pla="筹建状态">筹建状态</i>
                    <em></em>
                    <input type="hidden" name="company_industry">
                </span>

                <span control="select" class="select" id="gender" data-v="gender">
                    <i pla="性别要求">性别要求</i>
                    <em></em>
                    <input type="hidden" name="gender">
                </span>
                <span control="select" class="select" id="rations_quarters" data-v="rations_quarters">
                    <i pla="食宿情况">食宿情况</i>
                    <em></em>
                    <input type="hidden" name="rations_quarters">
                </span>
                <span control="select" class="select" id="degree" data-v="degree">
                    <i pla="学历要求">学历要求</i>
                    <em></em>
                    <input type="hidden" name="degree">
                </span>
                <i class="clear"></i>

                <div class="work-mode">
                    职位性质：
                    <label><input type="radio" class="hide" name="work_mode" value="0"> 不限</label>
                    <label><input type="radio" class="hide" name="work_mode" value="1"> 全职</label>
                    <label><input type="radio" class="hide" name="work_mode" value="2"> 兼职</label>
                    <label><input type="radio" class="hide" name="work_mode" value="3"> 实习</label>
                    <label><input type="radio" class="hide" name="work_mode" value="4"> 临时</label>
                </div>
            </div>

            <div class="form-bottom">
                <input type="submit" class="submit J_submit" value="找工作">
                <a href="javascript:;" class="clear-form">清空搜索条件</a>
            </div>
        </form>
    </div>
</section>




{%script%}require('search.js'){%/script%}
