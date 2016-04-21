<section class="main-box w-info">

	<h2>人力资源主管</h2>

	<div class="cp-dashed-box">
		<h3>岗位职责</h3>
		<ol>
			<li>负责员工日常招聘工作，建立用工渠道及人才储备库，</li>
			<li>负责办理普通员工的入职、离职手续，及人事变动的审核工作，</li>
			<li>负责办理普通员工的入职、离职手续，及人事变动的审核工作，</li>
			<li>负责各部门人员编制的审核工作，</li>
			<li>负责员工人事档案的管理，及对外公文之草拟和处理，</li>
			<li>协助建立酒店人事管理相关制度、员工保险及福利方面的政策，</li>
			<li>负责各种人事政策的具体实施及检查工作。</li>
		</ol>
	</div>

	<div class="cp-dashed-box">
		<h3>胜任力要素</h3> 
		
		{%if $site_type eq 1 or $site_type eq 4%}
			{%widget name="../factor/factor.tpl"%}
		{%else%}
			console.log('11111111111')
		{%/if%}
	</div>
	
	<a class="cp-sub-click" id="startTest" href="/question/index?id={%$GET['id']%}&fis_config_namespace=ceping">开始评测</a>

</section>