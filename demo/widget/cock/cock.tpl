<div class="demo-w-cock">

	<a class="kwbtn" data-name="post" data-multi="5" data-placeholder="请选择职位" data-title="请选择职位" title="请选择职位">
		<span class="ellipsis">请选择职位</span>
		<input type="text" name="funtype" value="1304,1102">
	</a>
	<br>
	<a class="kwbtn" data-name="area" data-multi="5" data-placeholder="请选择地点" data-title="请选择地点" title="请选择地点">
		<span class="ellipsis">请选择地点</span>
		<input type="text" name="jobarea" value="">
	</a>

	<hr>

	<a class="kwbtn" data-name="post-one" data-placeholder="请选择职位" data-title="请选择职位" title="请选择职位">
		<span class="ellipsis">请选择职位</span>
		<input type="text" name="funtype" value="1304">
	</a>
	<br>
	<a class="kwbtn" data-name="area-one" data-placeholder="请选择地点" data-title="请选择地点" title="请选择地点">
		<span class="ellipsis">请选择地点</span>
		<input type="text" name="jobarea" value="">
	</a>
	
	<hr>
	
	<a class="kwbtn" data-name="class" data-multi="5" data-placeholder="请选择职位" data-title="请选择职位" title="请选择职位">
		<span class="ellipsis">请选择职位</span>
		<input type="text" name="funtype" value="">
	</a>
	<br>
	<a class="kwbtn" data-name="class" data-multi="5" data-placeholder="请选择地点" data-title="请选择地点" title="请选择地点">
		<span class="ellipsis">请选择地点</span>
		<input type="text" name="jobarea" value="">
	</a>
	
	<hr>

	<a class="kwbtn" data-name="post-x" data-placeholder="请选择职位" data-title="请选择职位" title="请选择职位" data-allowed="1304,1102">
		<span class="ellipsis">请选择职位</span>
		<input type="text" name="funtype" value="">
	</a>
	<br>
	<a class="kwbtn" data-name="area-x" data-placeholder="请选择地点" data-title="请选择地点" title="请选择地点" data-allowed="210100,130800,131500">
		<span class="ellipsis">请选择地点</span>
		<input type="text" name="jobarea" value="">
	</a>
	

	

	
	{%widget name="cock-doc.md"%}

	{%script%}
		require.async('cock.js');
		$('html').addClass('theme theme-white');
	{%/script%}
</div>