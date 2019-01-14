
export const state = () => ({

	publish_list: [], // 公開中記事
	draft_list: [] // 下書き記事

})

export const mutations = {

	SET_PUBLISH_LIST: function (state, item) {
		state.publish_list = item
	},

	SET_DRAFT_LIST: function (state, item) {
		state.draft_list = item
	}

}

export const actions = {

	async init_article_management(){

		var $viewNav = $('#view-nav'),
			$viewNavLi = $viewNav.find('li'),
			$viewDtl = $('#view-dtl'),
			$view = $viewDtl.find('.view');

		$viewNavLi.on('click', function(){
			if(!$(this).hasClass('active')){
				var idx = $(this).index();
				$viewNavLi.removeClass('active');
				$(this).addClass('active');
				$view.removeClass('show');
				$view.eq(idx).addClass('show');
			}
		});


	}

}