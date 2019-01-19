<template>
	<div>
  
		<main>

			<section class="sec sec-article" data-type="single">
			
				<div class="inner max1000">

					<div class="sec-head">

						<time datetime="2019-01-01"><i class="far fa-clock"></i>{{$store.state.article_single.data_article_detail.published_at}}</time>

						<h3 class="h-lg">{{$store.state.article_single.data_article_detail.title}}</h3>

						<div class="art-tag">
							<span v-for="tag in $store.state.article_single.data_article_detail.tags">#{{tag.tag}}</span>
						</div>

						<div class="icon-wrap">
							<div class="btn-act">
								<ul>
									<li v-if="$store.state.article_single.data_article_detail.is_reviewed == 0">
										<span @click="fn_review">
											<img src="@/assets/svg/icon_like.svg" alt="">
										</span>
									</li>
									<li class="on" v-else>
										<span>
											<img src="@/assets/svg/icon_like-white.svg" alt="">
										</span>
									</li>

									<li v-if="$store.state.article_single.data_article_detail.is_shared == 0">
										<span @click="fn_share">
											<img src="@/assets/svg/icon_share.svg" alt="">
										</span>
									</li>
									<li class="on" v-else>
										<span>
											<img src="@/assets/svg/icon_share-white.svg" alt="">
										</span>
									</li>

									<li v-if="$store.state.article_single.data_article_detail.is_clipped == 0">
										<span @click="fn_clip">
											<img src="@/assets/svg/icon_clip.svg" alt="">
										</span>
									</li>
									<li class="on" v-else>
										<span>
											<img src="@/assets/svg/icon_clip-white.svg" alt="">
										</span>
									</li>

									<li>
										<span>
											<img src="@/assets/svg/icon_link.svg" alt="">
										</span>
									</li>
									<li class="icon-sm">
										<span>
											<img src="@/assets/svg/icon_submenu.svg" alt="">
										</span>
									</li>
								</ul>
							</div>

							<div class="sns">
								<ul>
									<li>
										<a href="" target="_blank">
											<img src="@/assets/svg/icon_facebook-black.svg" alt="Facebook">
										</a>
									</li>
									<li>
										<a href="" target="_blank">
											<img src="@/assets/svg/icon_twitter-black.svg" alt="Twitter">
										</a>
									</li>
								</ul>
							</div>
						</div><!-- icon-wrap -->

						<div class="avatar">
							<div class="art-avatar">
								<div class="avatar-md">
									<nuxt-link :to="`/profile/${$store.state.article_single.data_article_detail.account_name}`">
										<span>
											<img :src="`${$store.state.article_single.data_article_detail.user.profile_icon}`" :alt="`${$store.state.article_single.data_article_detail.account_name}`">
										</span>
									<!--
										<i>
											<img src="@/assets/svg/icon_star.svg" alt="">
										</i>
									-->
									</nuxt-link>
								</div>
							</div>
							<div class="art-avatar-dtl">
								<div class="art-info">
									<h3 class="h-sm">
										<a href="#">{{$store.state.article_single.data_article_detail.account_name}}</a>
									</h3>
								</div>
								<div class="art-meta">
									<div class="art-cnts">
										<ul>
											<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><b>{{$store.state.article_single.data_article_detail.user.followed_count}}</b></li>
											<li><img src="@/assets/svg/icon_post.svg" alt=""><b>{{$store.state.article_single.data_article_detail.user.articles_count}}</b></li>
											<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{$store.state.article_single.data_article_detail.user.appraised_value}}</b></li>
										</ul>
									</div>
								</div>
							</div>
						</div><!-- avatar -->
					</div>

					<div class="sec-body" v-html="ARTICLE_DETAIL_BODY">
						{{ARTICLE_DETAIL_BODY}}
					</div>

					<div class="sec-foot">
							
						<div class="icon-wrap">
							<div class="art-cnts">
								<ul>
									<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{$store.state.article_single.data_article_detail.appraised_value}}</b></li>
								</ul>
							</div>
							<div class="sns">
								<ul>
									<li>
										<a href="" target="_blank">
											<img src="@/assets/svg/icon_facebook-black.svg" alt="Facebook">
										</a>
									</li>
									<li>
										<a href="" target="_blank">
											<img src="@/assets/svg/icon_twitter-black.svg" alt="Twitter">
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div class="thisuser">
							<div class="art-avatar">
								<div class="avatar-md">
									<nuxt-link :to="`/profile/${$store.state.article_single.data_article_detail.user.account_name}`">
										<span>
											<img :src="`${$store.state.article_single.data_article_detail.user.profile_icon}`" :alt="`${$store.state.article_single.data_article_detail.account_name}`">
										</span>
									<!--
										<i>
											<img src="@/assets/svg/icon_star.svg" alt="">
										</i>
									-->
									</nuxt-link>
								</div>
							</div>
							<div class="art-info">
								<h3 class="h-sm">
									<a href="#">{{$store.state.article_single.data_article_detail.user.account_name}}</a>
								</h3>
								<p>{{$store.state.article_single.data_article_detail.user.self_introduction}}</p>
							</div>
							<div class="art-meta">
								<div class="art-cnts">
									<ul>
										<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><b>{{$store.state.article_single.data_article_detail.user.followed_count}}</b></li>
										<li><img src="@/assets/svg/icon_post.svg" alt=""><b>{{$store.state.article_single.data_article_detail.user.articles_count}}</b></li>
										<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{$store.state.article_single.data_article_detail.user.appraised_value}}</b></li>
									</ul>
								</div>
							</div>
						</div>

					</div>
					
				</div>

			</section>



			<section class="sec sec-comment">
				<div class="inner max800">
					
					<div class="sec-head">
						<nav id="view-nav">
							<ul>
								<li class="active">
									<div class="li-in">
										<img src="@/assets/svg/icon_comment.svg" alt=""><img src="@/assets/svg/icon_comment-white.svg" alt=""><b>（{{$store.state.article_single.data_article_comment.length}}）</b>
									</div>
								</li>
								<li>
									<div class="li-in">
										<img src="@/assets/svg/icon_like.svg" alt=""><img src="@/assets/svg/icon_like-white.svg" alt=""><b>（{{Object.keys(this.$store.state.article_single.data_article_review).length}}）</b>
									</div>
								</li>
								<li>
									<div class="li-in">
										<img src="@/assets/svg/icon_share.svg" alt=""><img src="@/assets/svg/icon_share-white.svg" alt=""><b>（{{Object.keys($store.state.article_single.data_article_share).length}}）</b>
									</div>
								</li>
							</ul>
						</nav>
					</div>

					<div class="sec-body">
						
						<div id="view-dtl">


							<div id="view-comment" class="view show">
								
								<div class="view-head">
									<p class="error" v-if="error_postComment">{{error_postComment}}</p>
									<textarea id="post-comment" v-model="postComment" rows="5" placeholder="コメント"></textarea>
									<div class="btns">
										<button @click="fn_postComment"><img src="@/assets/svg/icon_pen.svg" alt=""></button>
									</div>
								</div>

								<div class="view-body">
									
									<div id="comment-list">
										<p v-if="$store.state.article_single.data_article_comment.length == 0">現在、コメントはありません</p>
										<ul v-else>

											<li v-for="content in $store.state.article_single.data_article_comment" :key="content.comment_id">
												<div :id="`${content.comment_id}`" class="li-in">
													<div class="art-user">
														<div class="avatar-sm">
															<nuxt-link :to="`/profile/${content.account_name}`">
																<span>
																	<img :src="`${content.user.profile_icon}`" :alt="`${content.account_name}`">
																</span>
																<em>{{content.account_name}}</em>
															</nuxt-link>
														</div>
													</div>
													<div class="art-comment">
														<div class="com-dtl">
															<div class="com-meta">
																<strong>#{{content.comment_id}}</strong>
																<time :datetime="`${content.created_at}`"><i class="far fa-clock"></i>{{content.created_at}}</time>
															</div>
															<p v-html="content.comment">{{content.comment}}</p>
														</div>
														<div class="art-cnts">
															<ul>
																<li>
																	<img src="@/assets/svg/icon_like.svg" alt=""><b>{{content.reviews_count}}</b>
																</li>
																<li>
																	<img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{content.appraised_value}}</b>
																</li>
																<li class="sub-tippy icon-sm" @click="showSubTippy" :data-this-com="`#${content.comment_id}`">
																	<span>
																		<img src="@/assets/svg/icon_submenu.svg" alt="">
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>

										</ul>
									</div>

								</div>

							</div><!-- #view-comment -->


							<div id="view-like" class="view">
								
								<div class="view-body">
									
									<p v-if="Object.keys(this.$store.state.article_single.data_article_review).length == 0">現在、いいねはありません</p>

									<article v-else v-for="content in $store.state.article_single.data_article_review" :key="content.article_id">
										<div class="art-in">
											<div class="art-avatar">
												<div class="avatar-md">
													<nuxt-link :to="`/profile/${content.review_account_name}`">
														<span>
															<img :src="`${content.reviewing_user.profile_icon}`" :alt="`${content.review_account_name}`">
														</span>
														<em>{{content.review_account_name}}</em>
													</nuxt-link>
												</div>
											</div>
											<div class="art-info pad-right-sm">
												<time :datetime="`${content.created_at}`"><i class="far fa-clock"></i>{{content.created_at}}</time>
												<h3 class="h-sm">
													<a href="#">{{content.review_account_name}}</a>
												</h3>
												<div class="art-delete"><em class="icon-minus"></em></div>
											</div>
										</div>
									</article>

								</div>

							</div><!-- #view-like -->


							<div id="view-share" class="view">
								<div class="view-body">
									
									<p v-if="Object.keys($store.state.article_single.data_article_share).length == 0">現在、シェアはされていません</p>

									<article v-else v-for="content in $store.state.article_single.data_article_share">
										<div class="art-in">
											<div class="art-avatar">
												<div class="avatar-md">
													<nuxt-link :to="`/profile/${content.share_account_name}`">
														<span>
															<img :src="`${content.user.profile_icon}`" :alt="`${content.share_account_name}`">
														</span>
														<em>{{content.share_account_name}}</em>
													</nuxt-link>
												</div>
											</div>
											<div class="art-info pad-right-sm">
												<time :datetime="`${content.created_at}`"><i class="far fa-clock"></i>{{content.created_at}}</time>
												<h3 class="h-sm">
													<a href="#">{{content.share_account_name}}</a>
												</h3>
												<div class="art-delete"><em class="icon-minus"></em></div>
											</div>
										</div>
									</article>

								</div>
							</div><!-- #view-share -->


						</div>

					</div>

				</div>
			</section>

		</main>


<div id="add-comment" class="dialog">
	<div class="in">
		<p class="error" v-if="error_addComment">{{error_addComment}}</p>
		<textarea rows="5" v-model="addComment" placeholder="コメント"></textarea>
		<div class="btns">
			<button @click="fn_addComment"><img src="@/assets/svg/icon_pen.svg" alt=""></button>
		</div>
	</div>
</div>


	</div>
</template>


<script>

export default {

	data() {
		return{
      		postComment: '',
			error_postComment: null,

			addComment: '',
			error_addComment: null
		}
	},

	head () {
		return {
			title: this.$store.state.article_single.data_article_detail.title,
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	async fetch ({ app, store, params }) {

		// let { data } = await app.$axios.$get('/article/' + params.article_id + '/' + store.state.login_account.account_name)
		var account = '';
		if(!process.server){
			account = store.state.login_account.account_name;
		}

		let [data_article_detail, data_article_comment, data_article_review, data_article_share] = await Promise.all([

			app.$axios.$get('/article/' + params.article_id + '/' + account),
			app.$axios.$post('/article/comment/' + params.article_id, 
          	{
				"page_num": 1,
				"page_size": 10
			}),
			app.$axios.$post('/review/' + params.article_id, 
          	{
				"page_num": 1,
				"page_size": 10
			}),
			app.$axios.$post('/share/' + params.article_id, 
          	{
				"page_num": 1,
				"page_size": 10
			})
		])

		console.log(data_article_detail.data);
		// console.log(data_article_comment.data.comment_info);
		// console.log(data_article_review.data.review);
		// console.log(data_article_share.data.share);

		store.commit('article_single/SET_ARTICLE_DETAIL', data_article_detail.data)
		store.commit('article_single/SET_ARTICLE_COMMENT', data_article_comment.data.comment_info)
		store.commit('article_single/SET_ARTICLE_REVIEW', data_article_review.data.review)
		store.commit('article_single/SET_ARTICLE_SHARE', data_article_share.data.share)

	},

	computed:{

	    ARTICLE_DETAIL_BODY() {
	    	if(process.browser){
		    	var body = marked(this.$store.state.article_single.data_article_detail.body);
				return body
			}
	    }

	},

	mounted(){

		this.$store.dispatch("article_single/init_article_single")

		var rakunAccount = localStorage.getItem('rakun-account');
		if(rakunAccount){
			this.$axios.$get('/article/' + this.$route.params.article_id + '/' + rakunAccount)
			.then((res) => {
		        console.log(res.data);
		        this.$store.commit('article_single/SET_ARTICLE_DETAIL', res.data)
			})
		}
		
	},

	methods: {

	// コメント投稿
		fn_postComment(){
			if(!this.postComment){
				this.error_postComment = 'コメントを入力して下さい'
			}else{
				this.error_postComment = null
				this.$axios.$post('/article/comment', 
	          	{
					"account_name": this.$store.state.login_account.account_name,
					"article_id": this.$route.params.article_id,
					"comment": this.postComment
				})
				.then((res) => {
					this.$axios.$post('/article/comment/' + this.$route.params.article_id, 
		          	{
						"page_num": 1,
						"page_size": 4
					})
					.then((res) => {
						console.log(res);
						this.postComment = ''
						this.$store.commit('article_single/SET_ARTICLE_COMMENT', res.data.comment_info)
					})				
				})
			}
		},

	// コメント サブメニュー
		showSubTippy(e) {

			var trg = e.currentTarget.parentNode.querySelector(":scope > li.sub-tippy");

    		var dataThisCom = trg.getAttribute("data-this-com");

			tippy(trg, {
				content: '<div class="sub-tip-menu"><ul><li class="btn-add-comment" data-num="' + dataThisCom + '">コメント投稿</li><li>いいね！取り消し</li><li>通報</li><li>ユーザブロック</li><li>コメント削除</li></ul></div>',
				placement: 'right',
				trigger: 'click',
				animation: 'shift-toward',
				arrow: true,
				theme: 'light-border'
				// hideOnClick: 'persistent'
			})
    	},

	// コメントに対するコメント投稿
		fn_addComment(){

			if(!this.addComment){

				this.error_addComment = 'コメントを入力して下さい'

			}else{

				this.error_addComment = null

				var addCommentBody = this.addComment,
					dataIdx = $('#add-comment').attr('data-idx');
					addCommentBody = addCommentBody.replace(/#\d+/g, '<button class="comment-tippy" data-com="' + dataIdx + '">' + dataIdx + '</button>');

				console.log(addCommentBody);

				this.$axios.$post('/article/comment', 
	          	{
					"account_name": this.$store.state.login_account.account_name,
					"article_id": this.$route.params.article_id,
					"comment": addCommentBody
				})
				.then((res) => {
					this.$axios.$post('/article/comment/' + this.$route.params.article_id, 
		          	{
						"page_num": 1,
						"page_size": 10
					})
					.then((res) => {
						console.log(res);
						this.addComment = ''
						this.$store.commit('article_single/SET_ARTICLE_COMMENT', res.data.comment_info)

						$('.dialog').hide();
						$('#overlay').fadeOut();
					})				
				})
			}
		},

	// 記事にいいねする
		fn_review() {

			this.$store.commit('article_single/UPDATE_ARTICLE_DETAIL_IS_REVIEWED', 1)

			this.$axios.$put('/review/' + this.$route.params.article_id + '/' + this.$store.state.login_account.account_name)
			.then((res) => {
				console.log(res);
				this.$axios.$post('/review/' + this.$route.params.article_id, 
	          	{
					"page_num": 1,
					"page_size": 10
				})
				.then((res) => {
					this.$store.commit('article_single/SET_ARTICLE_REVIEW', res.data.review)
				})
			})
		},

	// 記事をシェアする
		fn_share() {

			this.$store.commit('article_single/UPDATE_ARTICLE_DETAIL_IS_SHARED', 1)

			this.$axios.$put('/share/' + this.$route.params.article_id + '/' + this.$store.state.login_account.account_name)
			.then((res) => {
				console.log(res);
				this.$axios.$post('/share/' + this.$route.params.article_id, 
	          	{
					"page_num": 1,
					"page_size": 10
				})
				.then((res) => {
					console.log(res.data);
					this.$store.commit('article_single/SET_ARTICLE_SHARE', res.data.share)
				})
			})
		},

	// 記事をクリップする
		fn_clip() {

			this.$store.commit('article_single/UPDATE_ARTICLE_DETAIL_IS_CLIPED', 1)

			this.$axios.$put('/clip/' + this.$route.params.article_id + '/' + this.$store.state.login_account.account_name)
			.then((res) => {
				console.log(res);
			})
		}





	}

}

</script>

<style scoped>

@import "~/assets/css/article-single.css"

</style>