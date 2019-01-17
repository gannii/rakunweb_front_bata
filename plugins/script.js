$(function(){

// init
/*
	var $smartDevice = false;
	if((navigator.userAgent.indexOf('iPhone') != -1 ||
		navigator.userAgent.indexOf('iPad') != -1 ||
		navigator.userAgent.indexOf('iPod') != -1 ||
		navigator.userAgent.indexOf('Android') != -1)
	){
		$smartDevice = true;
	}

	var resizeEvent = "resize";
	if($smartDevice){
		if(!(/twitter|fbav|line/.test(navigator.userAgent.toLowerCase()))){
			resizeEvent = "orientationchange";
		}
	}
*/

// val
	var $wrap = $('#wrap'),
		$gHead = $('#g-head'),
		$gMenuWrap = $('#g-menu-wrap'),
		$gMenu = $('#g-menu'),
		$btnMenu = $('#btn-menu'),
		$overlay = $('#overlay');

	$btnMenu.on('click', function(){
		$wrap.addClass('on');
		$gHead.addClass('on');
		$gMenuWrap.addClass('on');
		$overlay.fadeToggle();
	});

	$overlay.on('click', function(){
		if(!$('#overlay').hasClass('disabled')){
			resetMenu();
		}
	});

	$gMenu.find('.hasChild em').on('click', function(){
		$(this).next('ul').slideToggle('fast');
	});


// func

	function dialogClose(){
		$('.dialog').hide();
		$('#overlay').fadeOut();
	}

	function resetMenu(){
		$wrap.removeClass('on');
		$gHead.removeClass('on');
		$gMenuWrap.removeClass('on');
		$overlay.fadeOut();
	}

	$('#overlay, .dialog-close').on('click', function(){
		if(!$('#overlay').hasClass('disabled')){
			dialogClose();
		}
	});


// evnet
/*
	$(window).on('scroll', function(){

	});
	$(window).trigger('scroll');


	$(window).on(resizeEvent, function(){
		// resetMenu();
		// dialogClose();
	});
*/

});