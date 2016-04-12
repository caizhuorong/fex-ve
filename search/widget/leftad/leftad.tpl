<section class="w-leftad">
	
	{%foreach from=$data.leftAd key='key' item='item'%}
	<div class="leftad-child">
		<i></i>
		{%$item.adContent|escape:none%}
	</div>
	{%/foreach%}
	
</section>



{%script%}

	$('.w-leftad').on('click', 'i', function () {
		$(this).parent().remove();
	});
	
	
	$(document).on('scroll', function(){
		var $leftad = $('.w-leftad'),
			offsetTop = $leftad.offset().top,
			scrollTop = $(document).scrollTop();
			
			
		if (scrollTop > 280) {
			$leftad.css({marginTop: -280 + 'px'})
		} else {
			$leftad.css({marginTop: -scrollTop + 'px'})
		}
	});

{%/script%}