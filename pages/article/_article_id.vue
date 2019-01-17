<template>
	<div>
  
		<main>

			<section class="sec sec-article" data-type="single">
			
				<div class="inner max1000">

					<div class="sec-head">

						<time datetime="2019-01-01"><i class="far fa-clock"></i>{{$store.state.article_single.detail.published_at}}</time>

						<h3 class="h-lg">{{$store.state.article_single.detail.title}}</h3>

						<div class="art-tag">
							<span v-for="tag in $store.state.article_single.detail.tags" :key="tag.article_id">#{{tag.tag}}</span>
						</div>

						<div class="icon-wrap">
							<div class="btn-act">
								<ul>
									<li>
										<span>
											<img src="@/assets/svg/icon_like.svg" alt="">
										</span>
									</li>
									<li>
										<span>
											<img src="@/assets/svg/icon_share.svg" alt="">
										</span>
									</li>
									<li>
										<span>
											<img src="@/assets/svg/icon_clip.svg" alt="">
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
									<nuxt-link :to="`/profile/${$store.state.article_single.detail.account_name}`">
										<span>
											<img :src="`${$store.state.article_single.detail.user.profile_icon}`" :alt="`${$store.state.article_single.detail.account_name}`">
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
										<a href="#">{{$store.state.article_single.detail.account_name}}</a>
									</h3>
								</div>
								<div class="art-meta">
									<div class="art-cnts">
										<ul>
											<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><b>{{$store.state.article_single.detail.user.followed_count}}</b></li>
											<li><img src="@/assets/svg/icon_post.svg" alt=""><b>{{$store.state.article_single.detail.user.articles_count}}</b></li>
											<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{$store.state.article_single.detail.user.appraised_value}}</b></li>
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
									<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{$store.state.article_single.detail.appraised_value}}</b></li>
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
									<nuxt-link :to="`/profile/${$store.state.article_single.detail.user.account_name}`">
										<span>
											<img :src="`${$store.state.article_single.detail.user.profile_icon}`" :alt="`${$store.state.article_single.detail.account_name}`">
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
									<a href="#">{{$store.state.article_single.detail.user.account_name}}</a>
								</h3>
								<p>{{$store.state.article_single.detail.user.self_introduction}}</p>
							</div>
							<div class="art-meta">
								<div class="art-cnts">
									<ul>
										<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><b>{{$store.state.article_single.detail.user.followed_count}}</b></li>
										<li><img src="@/assets/svg/icon_post.svg" alt=""><b>{{$store.state.article_single.detail.user.articles_count}}</b></li>
										<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{$store.state.article_single.detail.user.appraised_value}}</b></li>
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
										<img src="@/assets/svg/icon_comment.svg" alt=""><img src="@/assets/svg/icon_comment-white.svg" alt=""><b>（4）</b>
									</div>
								</li>
								<li>
									<div class="li-in">
										<img src="@/assets/svg/icon_like.svg" alt=""><img src="@/assets/svg/icon_like-white.svg" alt=""><b>（2）</b>
									</div>
								</li>
								<li>
									<div class="li-in">
										<img src="@/assets/svg/icon_share.svg" alt=""><img src="@/assets/svg/icon_share-white.svg" alt=""><b>（3）</b>
									</div>
								</li>
							</ul>
						</nav>
					</div>

					<div class="sec-body">
						
						<div id="view-dtl">


							<div id="view-comment" class="view show">
								
								<div class="view-head">
									<textarea id="post-comment" rows="5" placeholder="コメント"></textarea>
									<div class="btns">
										<button><img src="@/assets/svg/icon_pen.svg" alt=""></button>
									</div>
								</div>

								<div class="view-body">
									
									<div id="comment-list">
										<ul>
											<li>
												<div id="1" class="li-in">
													<div class="art-user">
														<div class="avatar-sm">
															<a href="./profile/">
																<span>
																	<img src="@/assets/img/sample/avatar/10psn.jpg" alt="ゲーマータカピ">
																</span>
																<em>ゲーマータカピ</em>
															</a>
														</div>
													</div>
													<div class="art-comment">
														<div class="com-dtl">
															<div class="com-meta">
																<strong>#1</strong>
																<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
															</div>
															<p>投稿コメント内容コメント内容コメント内容コメント内容コメント内容コメント内容コメント内容がここに入ります。</p>
														</div>
														<div class="art-cnts">
															<ul>
																<li>
																	<img src="@/assets/svg/icon_like.svg" alt=""><b>000</b>
																</li>
																<li>
																	<img src="@/assets/svg/icon_rakun.svg" alt=""><b>9,999,999</b>
																</li>
																<li class="sub-tippy icon-sm" data-this-com="#1">
																	<span>
																		<img src="@/assets/svg/icon_submenu.svg" alt="">
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li class="delete">
												<div id="2" class="li-in">
													<div class="art-user">
														<div class="avatar-sm">
															<a>
																<span></span>
															</a>
														</div>
													</div>
													<div class="art-comment">
														<div class="com-dtl">
															<div class="com-meta">
																<strong>#2</strong>
															</div>
														</div>
													</div>
													<div class="com-delete"><span>該当コメントは削除されました。</span></div>
												</div>
											</li>
											<li>
												<div id="3" class="li-in">
													<div class="art-user">
														<div class="avatar-sm">
															<a href="./profile/">
																<span>
																	<img src="@/assets/img/sample/avatar/1psn.jpg" alt="nora aya">
																</span>
																<em>nora aya</em>
															</a>
														</div>
													</div>
													<div class="art-comment">
														<div class="com-dtl">
															<div class="com-meta">
																<strong>#3</strong>
																<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
															</div>
															<p>投稿コメント内容コメント内容コメント内容コメント内容コメント内容コメント内容コメント内容がここに入ります。</p>
														</div>
														<div class="art-cnts">
															<ul>
																<li>
																	<img src="@/assets/svg/icon_like.svg" alt=""><b>000</b>
																</li>
																<li>
																	<img src="@/assets/svg/icon_rakun.svg" alt=""><b>9,999,999</b>
																</li>
																<li class="sub-tippy icon-sm" data-this-com="#3">
																	<span>
																		<img src="@/assets/svg/icon_submenu.svg" alt="">
																	</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
											<li>
												<div id="4" class="li-in">
													<div class="art-user">
														<div class="avatar-sm">
															<a href="./profile/">
																<span>
																	<img src="@/assets/img/sample/avatar/5psn.jpg" alt="シンニチロー">
																</span>
																<em>イワモトシンイチロウ</em>
															</a>
														</div>
													</div>
													<div class="art-comment">
														<div class="com-dtl">
															<div class="com-meta">
																<strong>#4</strong>
																<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
															</div>
															<p><button class="comment-tippy" data-com="#1">#1</button><button class="comment-tippy" data-com="#3">#3</button>投稿コメント内容コメント内容コメント内容コメント内容コメント内容コメント内容コメント内容がここに入ります。</p>
														</div>
														<div class="art-cnts">
															<ul>
																<li>
																	<img src="@/assets/svg/icon_like.svg" alt=""><b>000</b>
																</li>
																<li>
																	<img src="@/assets/svg/icon_rakun.svg" alt=""><b>9,999,999</b>
																</li>
																<li class="sub-tippy icon-sm" data-this-com="#4">
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

									<article>
										<div class="art-in">
											<div class="art-avatar">
												<div class="avatar-md">
													<a href="./profile/">
														<span>
															<img src="@/assets/img/sample/avatar/11psn.jpg" alt="">
														</span>
														<i>
															<img src="@/assets/svg/icon_star.svg" alt="">
														</i>
													</a>
												</div>
											</div>
											<div class="art-info pad-right-sm">
												<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
												<h3 class="h-sm">
													<a href="#">cos fifty</a>
												</h3>
												<div class="art-delete"><em class="icon-minus"></em></div>
											</div>
										</div>
									</article>
									<article>
										<div class="art-in">
											<div class="art-avatar">
												<div class="avatar-md">
													<a href="./profile/">
														<span>
															<img src="@/assets/img/sample/avatar/8psn.jpg" alt="">
														</span>
													</a>
												</div>
											</div>
											<div class="art-info pad-right-sm">
												<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
												<h3 class="h-sm">
													<a href="#">CRYPT Holiday</a>
												</h3>
												<div class="art-delete"><em class="icon-minus"></em></div>
											</div>
										</div>
									</article>

								</div>

							</div><!-- #view-like -->


							<div id="view-share" class="view">
								<div class="view-body">

									<article>
										<div class="art-in">
											<div class="art-avatar">
												<div class="avatar-md">
													<a href="./profile/">
														<span>
															<img src="@/assets/img/sample/avatar/11psn.jpg" alt="">
														</span>
														<i>
															<img src="@/assets/svg/icon_star.svg" alt="">
														</i>
													</a>
												</div>
											</div>
											<div class="art-info pad-right-sm">
												<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
												<h3 class="h-sm">
													<a href="#">cos fifty</a>
												</h3>
												<div class="art-delete"><em class="icon-minus"></em></div>
											</div>
										</div>
									</article>
									<article>
										<div class="art-in">
											<div class="art-avatar">
												<div class="avatar-md">
													<a href="./profile/">
														<span>
															<img src="@/assets/img/sample/avatar/8psn.jpg" alt="">
														</span>
													</a>
												</div>
											</div>
											<div class="art-info pad-right-sm">
												<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
												<h3 class="h-sm">
													<a href="#">CRYPT Holiday</a>
												</h3>
												<div class="art-delete"><em class="icon-minus"></em></div>
											</div>
										</div>
									</article>
									<article>
										<div class="art-in">
											<div class="art-avatar">
												<div class="avatar-md">
													<a href="./profile/">
														<span>
															<img src="@/assets/img/sample/avatar/5psn.jpg" alt="シンニチロー">
														</span>
													</a>
												</div>
											</div>
											<div class="art-info pad-right-sm">
												<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
												<h3 class="h-sm">
													<a href="#">イワモトシンイチロウ</a>
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
		<textarea rows="5" placeholder="コメント"></textarea>
		<div class="btns">
			<button><img src="@/assets/svg/icon_pen.svg" alt=""></button>
		</div>
	</div>
</div>


	</div>
</template>


<script>

export default {

	head () {
		return {
			title: this.$store.state.article_single.detail.title,
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	async fetch ({ app, store, params }) {

		// let { data } = await app.$axios.$get('/article/' + params.article_id + '/' + store.state.login_account.account_name)

		let { data } = await app.$axios.$get('/article/' + params.article_id + '/yamada307')

		console.log(data);

		store.commit('article_single/SET_DETAIL', data)

	},

	computed:{

	    ARTICLE_DETAIL_BODY(){
	    	if(process.browser){
		    	var body = marked(this.$store.state.article_single.detail.body);
				return body
			}
	    }
    
	},

	mounted(){

		this.$store.dispatch("article_single/init_article_single")
		
	},

	methods: {

	}

}

</script>

<style scoped>

@import "~/assets/css/article-single.css"

</style>