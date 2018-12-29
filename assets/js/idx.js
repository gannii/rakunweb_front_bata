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

	function setSlickGenre(){
		var w = $(window).width();
	
		if(w < 600){
			var slideNum = 2;
		}else if(w >= 600){
			var slideNum = 3;
			if(w >= 800){
				var slideNum = 4;
			/*
				if(w >= 1000){
					var slideNum = 5;
				}
			*/
			}
		}
		$('#slick-genre').slick({
			infinite: false,
			arrows: true,
			speed: 400,
			easing: 'easeOutExpo',
			slidesToShow: slideNum,
			swipeToSlide: true
		});
	}

	var $slickGenre = $('#slick-genre'),
		$slickGenreList = $slickGenre.find('li a');

	$slickGenreList.on('click', function(){
		$slickGenreList.removeClass('active');
		$(this).addClass('active');
	});

	$(window).on(resizeEvent, function(){
		$('#slick-genre').slick('unslick');
		setSlickGenre();
	});

	setSlickGenre();

});