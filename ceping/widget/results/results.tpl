<section class="main-box w-results">

	<h2>人力资源主管</h2> 
	{%script%}
		window.__data__ = {%json_encode($data)%} 
	{%/script%}
	
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
					<div class="recommend-record"><i class="resolve">6</i>&ensp;项达标<em></em><i class="reject">7</i>&ensp;项未达标</div>
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

	<div class="cp-dashed-box js-display-in-resume">
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


<div class="cp-like-box w-results-analysis-mobile">
	<h4>攻略：</h4>

	<ol class="cp-ordered-lists">
		<li>
			<strong>如何判断是否达标？</strong> 
			上面的雷达图，达到灰色区域以外的则是超过此项胜任力平均值，没有达到则是低于此项胜任力平均值
		</li>
		<li>
			<strong>行为要素不达标怎么办？</strong>
			通过学习相应的知识提升不达标的行为要素，使自己变得更优秀
		</li>
		<li>
			<strong>是否需要在简历中显示？</strong>
			通过测试后勾选在简历中显示则可在自己简历中查看超出平均值的胜任力，让更多的HR看到您的胜任力，拿到更多的offer
		</li>
	</ol>
</div>



<!-- @require ../../static/echarts/echarts-all -->
<!--  ../../static/echarts.min -->
{%script%}require('results');{%/script%}