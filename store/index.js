import axios from "axios"


export const state = () => ({

// COMMON
	loggedIn: false,

	init_setting: false,
	b2c_oid: null,

	tippy: false,

// TOP
	idx_tabs: null,
	idx_content: [],
	data_type: null

})

export const config = {

// スタブ
	api_host: 'https://rakunwebstub.azurewebsites.net/api/v1'

// 京都さん
	// api_host: 'https://rakunweb-it1.azurewebsites.net/api/v1'

}

export const mutations = {

// COMMON
	SET_LOGGED_IN: function (state, item) {
		state.loggedIn = item
	},

	SET_INIT_SETTING: function (state, item) {
		state.init_setting = item
	},

	SET_B2C_OID: function (state, item) {
		state.b2c_oid = item
	},

	SET_TIPPY: function (state, item) {
		state.tippy = item
	},

// TOP
	SET_IDX_TABS: function (state, item) {
		state.idx_tabs = item
	},
	SET_IDX_CONTENT: function (state, item) {
		state.idx_content = item
	},
	SET_DATA_TYPE: function (state, item) {
		state.data_type = item
	}

}

export const actions = {

// COMMON
	async set_access_token({ commit }){

		var token = getParam('access_token');

		var id_token_header = JSON.parse(atob(token.split('.')[0]));
		var id_token_payload = JSON.parse(atob(token.split('.')[1]));

		function getParam(name, url) {
		    if (!url) url = window.location.href;
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}

		commit("SET_B2C_OID", id_token_payload.oid);


// 初回設定 フロー
		var rakunAccount = localStorage.getItem('rakun-account');

	// localStrageにアカウントが存在する場合
		if(rakunAccount){

	
	// localStrageにアカウントが存在しないの場合 -> 初回設定未済確認
		}else{

			axios.get(config.api_host + '/initial_setting/' + id_token_payload.oid)
			.then((res) => {

				console.log(res.data.data.account_name);

			// 返却値に値が存在する場合
				if(res.data){


			// 返却値がnullの場合
				}else{
					commit("SET_INIT_SETTING", true);
					$('#init-setting').fadeIn();
					$('#overlay').fadeIn();
				}

			})

		}
			
		

	},


// TOP
	async init_idx(){

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
    
	}

}