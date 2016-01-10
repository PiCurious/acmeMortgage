$(window).scroll(function(){
	var wScroll = $(this).scrollTop(); 
	
	$(townhouse).css({
	'transform' : 'translate('+ wScroll/-50+'%, 0px)'
	}); 
	$(car).css({
	'transform' : 'translate('+ wScroll/50+'%, 0px)'
	}); 
	$(single).css({
	'transform' : 'translate('+ wScroll/-50+'%, 0px)'
	}); 
	$(empty).css({
	'transform' : 'translate('+ wScroll/-50+'%, 0px)'
	}); 
	
	
	if(wScroll > $(logo).offset().top) {
		
		$(logo).addClass('isShowing');  
	} else
	{ $(logo).removeClass('isShowing'); 
	}
	
	if(wScroll > 2300) {
	
	$(mort).addClass('isShowing');  
	} else
	{ $(mort).removeClass('isShowing'); 
	}
	
}); 
