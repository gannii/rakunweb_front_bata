import axios from "axios"


export const state = () => ({

// COMMON
	login_account: null,

	init_setting: false,
	b2c_oid: null,

	tippy_notice: false,
	tippy_alert: false,

// TOP
	idx_tabs: null,
	// idx_content: null,
	data_type: null,

	data_latest_article: null,
	data_popular_article: null,
	data_popular_tag: null,
	data_popular_user: null

})

export const config = {

// スタブ
	// api_host: 'https://rakunwebstub.azurewebsites.net/api/v1'

// 京都さん
	api_host: 'https://rakunweb-it1.azurewebsites.net/api/v1'

}

export const mutations = {

// COMMON
	SET_LOGIN_ACCOUNT: function (state, item) {
		state.login_account = item
	},

	SET_INIT_SETTING: function (state, item) {
		state.init_setting = item
	},

	SET_B2C_OID: function (state, item) {
		state.b2c_oid = item
	},

	SET_TIPPY_NOTICE: function (state, item) {
		state.tippy_notice = item
	},
	SET_TIPPY_ALERT: function (state, item) {
		state.tippy_alert = item
	},

// TOP
	SET_IDX_TABS: function (state, item) {
		state.idx_tabs = item
	},
/*
	SET_IDX_CONTENT: function (state, item) {
		state.idx_content = item
	},
*/
	SET_DATA_TYPE: function (state, item) {
		state.data_type = item
	},


	SET_DATA_LATEST_ARTICLE: function (state, item) {
		state.data_latest_article = item
	},
	SET_DATA_POPULAR_ARTICLE: function (state, item) {
		state.data_popular_article = item
	},
	SET_DATA_POPULAR_TAG: function (state, item) {
		state.data_popular_tag = item
	},
	SET_DATA_POPULAR_USER: function (state, item) {
		state.data_popular_user = item
	}

}

export const actions = {


	load(ctx){
		
		var rakunAccount = localStorage.getItem('rakun-account');
		if(rakunAccount){
			this.$axios.$get('/account/' + rakunAccount + '/' + rakunAccount)
			.then((res) => {
				ctx.commit("SET_LOGIN_ACCOUNT", res.data);
			});
		}

	},

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

			this.$axios.$get('/account/' + rakunAccount + '/' + rakunAccount)
			.then((res) => {

				commit("SET_LOGIN_ACCOUNT", res.data);

			});

	// localStrageにアカウントが存在しないの場合 -> 初回設定未済確認
		}else{

			axios.get(config.api_host + '/initial_setting/' + id_token_payload.oid)
			.then((res) => {

				console.log(res.data);

			// account_nameがnullの場合
				if(res.data.data.account_name == "null"){

					commit("SET_INIT_SETTING", true);
					$('#init-setting').fadeIn();
					$('#overlay').fadeIn().addClass('disabled');

			// account_nameが存在する場合
				}else{
					
					this.$axios.$get('/account/' + res.data.data.account_name + '/' + res.data.data.account_name)
					.then((res) => {

						console.log(res.data);

						commit("SET_LOGIN_ACCOUNT", res.data);

						localStorage.setItem('rakun-account', res.data.account_name)
					
					});
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