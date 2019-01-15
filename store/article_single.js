
export const state = () => ({

	publish_list: null, // 公開中記事
	draft_list: null // 下書き記事

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

		$(document).on('click', '.btn-add-comment', function(){
			var idx = $(this).attr('data-num');
			$('#add-comment').find('textarea').val(idx + ' ');
			$('#add-comment').fadeIn();
			$('#overlay').fadeIn();
		});

	}

}