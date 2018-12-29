$(function(){

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

	function setSlickGenreProfile(){
		var w = $(window).width();
	
		if(w < 600){
			var slideNum = 2;
		}else if(w >= 600){
			var slideNum = 4;
			if(w >= 800){
				var slideNum = 6;
				if(w >= 1000){
					var slideNum = 8;
				}
			}
		}

		$('#slick-genre-profile').slick({
			infinite: false,
			arrows: true,
			speed: 400,
			easing: 'easeOutExpo',
			slidesToShow: slideNum,
			swipeToSlide: true
		});
	}

// 投げ銭
	var $tipTotal = $('#tip-total'),
		$tipLg = $('#tip-lg'),
		$tipMd = $('#tip-md'),
		$tipSm = $('#tip-sm');

	$tipLg.find('span').on('click', function(){
		var num = $tipLg.prev('.tip-num').text();
		if($(this).hasClass('plus')){
			num = parseInt(num) + 10;
			$tipLg.prev('.tip-num').text(num);
		}else if($(this).hasClass('minus')){
			if(num == 0){
				return;
			}
			num = parseInt(num) - 10;
			$tipLg.prev('.tip-num').text(num);
		};
		calcTotal();
	});
	$tipMd.find('span').on('click', function(){
		var num = $tipMd.prev('.tip-num').text();
		if($(this).hasClass('plus')){
			if(num == 9){
				return;
			}
			num = parseInt(num) + 1;
			$tipMd.prev('.tip-num').text(num);
		}else if($(this).hasClass('minus')){
			if(num == 0){
				return;
			}
			num = parseInt(num) - 1;
			$tipMd.prev('.tip-num').text(num);
		};
		calcTotal();
	});
	$tipSm.find('span').on('click', function(){
		var num = $tipSm.prev('.tip-num').text();
		if($(this).hasClass('plus')){
			if(num == 0.9){
				return;
			}
			num = (parseFloat(num * 10) + (0.1 * 10)) / 10;
			$tipSm.prev('.tip-num').text(num);
		}else if($(this).hasClass('minus')){
			if(num == 0){
				return;
			}
			num = (parseFloat(num * 10) - (0.1 * 10)) / 10;
			$tipSm.prev('.tip-num').text(num);
		};
		calcTotal();
	});

	function calcTotal(){
		// var total = $tipTotal.text();
		var lgNum = $tipLg.prev('.tip-num').text();
		var mdNum = $tipMd.prev('.tip-num').text();
		var smNum = $tipSm.prev('.tip-num').text();
		var total = parseInt(lgNum) + parseInt(mdNum) + parseFloat(smNum);
		$tipTotal.text(total);
	}

	var $slickGenre = $('#slick-genre-profile'),
		$slickGenreList = $slickGenre.find('li a');

	$slickGenreList.on('click', function(){
		$slickGenreList.removeClass('active');
		$(this).addClass('active');
	});


	$(window).on(resizeEvent, function(){
		$('#slick-genre-profile').slick('unslick');
		setSlickGenreProfile();
	});

	setSlickGenreProfile();

});