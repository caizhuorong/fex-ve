<div class="w-answer-top">
	<div class="w-answer-topbox">
		<div>测评倒计时 <span id="countdown">90 : 00</span></div>
	</div>
</div>

<section class="w-answer">

	<div class="w-answer-info">
		<h3>《人力资源主管》岗位胜任力测评</h3>
		<p><span>测评时长：<i>90分钟</i></span> <span>题目总数：<i>XX题</i></span></p>
		<div class="w-answer-tremble">
			<em>测评说明：</em>
			<ul>
				<li>1. 测评开始后必须在规定的90分钟内一次性完成,答完一题后自动进入下一题；</li>
				<li>2. 测评成绩：提交后即可查询测评结果；</li>
				<li>3. 每人每个岗位有1次测评机会。</li>
			</ul>
		</div>
	</div>

	<div class="w-answer-box">
		<div class="w-answer-list"></div>
		<div class="w-answer-page">
			<span class="w-answer-pageLeft"></span>
			<span class="w-answer-pageRight"></span>
		</div>
	</div>
	
	<div class="w-answer-axis"></div>
	
	<a class="cp-sub-click" id="subTest" data-href="results?fis_config_namespace=ceping">提交</a>
	
</section>






{%script%}

window._factors = {%json_encode($data)%}

require('answer').init(_factors)

{%/script%}
