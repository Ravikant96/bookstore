window.onload = () => {
	
	$('.edit').click(function(){
		$(this).hide();
		$('.box').addClass('re-right');
		$('.text').attr('contenteditable', 'true');  
		$('.save').show();
	});

	$('.save').click(function(){
		$(this).hide();
		$('.box').removeClass('re-right');
		$('.text').removeAttr('contenteditable');
		$('.edit').show();
	});

};
