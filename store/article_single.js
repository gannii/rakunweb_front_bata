
export const state = () => ({

	data_article_detail: null,
	data_article_comment: null,
	data_article_review: null,
	data_article_share: null,

	tippy_submenu: false

})

export const mutations = {

	SET_ARTICLE_DETAIL: function (state, item) {
		state.data_article_detail = item
	},
	SET_ARTICLE_COMMENT: function (state, item) {
		state.data_article_comment = item
	},
	SET_ARTICLE_REVIEW: function (state, item) {
		state.data_article_review = item
	},
	SET_ARTICLE_SHARE: function (state, item) {
		state.data_article_share = item
	},

	UPDATE_ARTICLE_DETAIL_IS_REVIEWED: function (state, item) {
		state.data_article_detail.is_reviewed = item
	},
	UPDATE_ARTICLE_DETAIL_IS_SHARED: function (state, item) {
		state.data_article_detail.is_shared = item
	},
	UPDATE_ARTICLE_DETAIL_IS_CLIPED: function (state, item) {
		state.data_article_detail.is_clipped = item
	},

	SET_TIPPY_SUBMENU: function (state, item) {
		state.tippy_submenu = item
	}

}

export const actions = {

	async init_article_single(){

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


	// comment-tippy
		var $commentTippy = $('.comment-tippy');
		$commentTippy.each(function(){

			var dataCom = $(this).attr('data-com'),
				inn = $(dataCom).clone();
			tippy(this, {
				content: inn[0].innerHTML,
				placement: 'top',
				trigger: 'click',
				animation: 'shift-toward',
				arrow: true
				// theme: 'light-border'
				// maxWidth: '800px'
			})

		});


	// sub-tippy
	/*
		var $subTippy = $('.sub-tippy');
		$subTippy.each(function(){

			var dataThisCom = $(this).attr('data-this-com');

			tippy(this, {
				content: '<div class="sub-tip-menu"><ul><li class="btn-add-comment" data-num="' + dataThisCom + '">コメント投稿</li><li>いいね！取り消し</li><li>通報</li><li>ユーザブロック</li><li>コメント削除</li></ul></div>',
				placement: 'right',
				trigger: 'click',
				animation: 'shift-toward',
				arrow: true,
				theme: 'light-border'
				// hideOnClick: 'persistent'
			})
		});
	*/
	
		$(document).on('click', '.btn-add-comment', function(){
			var idx = $(this).attr('data-num');
			$('#add-comment').attr('data-idx', idx).find('textarea').val(idx + ' ');
			$('#add-comment').fadeIn();
			$('#overlay').fadeIn();
		});

	}

}