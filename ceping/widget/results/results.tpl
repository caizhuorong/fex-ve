<section class="main-box w-results">

	<h2>人力资源主管</h2>

	{%foreach from=[1,2,3] key="key" item="item"%}
	<div class="cp-dashed-box">
		<div class="echarts-table">
			<div class="echarts-box">
				<div class="w-results-attrs">
					<div class="w-results-attr-0">
						<i></i> 岗位要求
					</div>
					<div class="w-results-attr-1">
						<i></i> 自己
					</div>
				</div>
				<div id="echarts-cs"></div>
			</div>
			<div class="recommend-box">
				<div class="recommend-item">
					<h4 class="recommend-title">基础安全管理</h4>
					<div class="recommend-record"><i class="resolve">6</i>&ensp;项达标 &emsp;&ensp; <i class="reject">7</i>&ensp;项未达标</div>
					<div class="recommend-hack"></div>
					<p class="recommend-info">人力资源主管需要有责任感，以公司的角度，严格管理，解决问题。</p>
					<div class="recommend-learning-resource">
						推荐学习资源：
						<span>
							<a href="#x" class="important icon-1">劳动关系之劳动合同与试用期</a>
							<a href="#y" class="important icon-2">部门工作表现报告</a>
							<a href="#z" class="icon-3">执行部门计划目标</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	{%/foreach%}

	<div class="cp-dashed-box">
		 <label class="display-in-resume"><input type="checkbox">在简历中显示</label>
	</div>

	<div class="cp-like-box w-results-analysis">
		<h4>测评结果解析：</h4>

		<ol class="cp-ordered-lists">
			<li>状态为“达标”：表示您已具备并掌握该项胜任力，巩固学习资源中的知识点您将得到更好地提升。</li>
			<li>状态为“未达标”：表示您尚未掌握该项胜任力，特为您提供该项能力学习资源，助力完善自我。</li>
			<li>测评结果达到平均值以上的胜任力可显示在其简历中，提升含金量，为您提供更多的就业机会。</li>
		</ol>
	</div>	

</section>

<!-- @require ../../static/echarts/echarts-all -->
<!--  ../../static/echarts.min -->
{%script%}require('results');{%/script%}