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
		resetMenu();
	});

	$gMenu.find('.hasChild em').on('click', function(){
		$(this).next('ul').slideToggle('fast');
	});


// func
	function resetMenu(){
		$wrap.removeClass('on');
		$gHead.removeClass('on');
		$gMenuWrap.removeClass('on');
		$overlay.fadeOut();
	}

	tippy('#btn-notice', {
		content: document.querySelector('#dtl-notice'),
		placement: 'bottom',
		trigger: 'click',
		animation: 'shift-toward',
		arrow: true,
		theme: 'light-border',
		performance: true
	})

	tippy('#btn-alert', {
		content: document.querySelector('#dtl-alert'),
		placement: 'bottom',
		trigger: 'click',
		animation: 'shift-toward',
		arrow: true,
		theme: 'light-border',
		performance: true
	})


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