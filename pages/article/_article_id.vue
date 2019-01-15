<template>
	<div>
  
		<main>

			<section class="sec sec-article" data-type="single">
			
				<div class="inner max1000">

					<div class="sec-head">

						<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>

						<h3 class="h-lg">タイトルが入ります。タイトルが入ります。タイトルが入ります。</h3>

						<div class="art-tag">
							<span>#くりぷ豚</span><span>#ゲーム</span><span>#Dappsゲーム</span><span>#育成</span><span>#イーサリアム</span>
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
							<div class="art-avatar-dtl">
								<div class="art-info">
									<h3 class="h-sm">
										<a href="#">cos fifty</a>
									</h3>
								</div>
								<div class="art-meta">
									<div class="art-cnts">
										<ul>
											<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><b>000</b></li>
											<li><img src="@/assets/svg/icon_post.svg" alt=""><b>000</b></li>
											<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>1M</b></li>
										</ul>
									</div>
								</div>
							</div>
						</div><!-- avatar -->
					</div>

					<div class="sec-body">

						
						<p>本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。本文が入ります。</p>


					</div>

					<div class="sec-foot">
							
						<div class="icon-wrap">
							<div class="art-cnts">
								<ul>
									<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>1M</b></li>
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
							<div class="art-info">
								<h3 class="h-sm">
									<a href="#">cos fifty</a>
								</h3>
								<p>紹介文が入ります紹介文が入ります紹介文が入ります紹介文が入ります紹介文が入ります紹介文が入ります紹介文が入ります紹介文が入ります紹介文が入ります紹介文が入ります</p>
							</div>
							<div class="art-meta">
								<div class="art-cnts">
									<ul>
										<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><b>000</b></li>
										<li><img src="@/assets/svg/icon_post.svg" alt=""><b>000</b></li>
										<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>9,999,999</b></li>
									</ul>
								</div>
							</div>
						</div>

					</div>
					
				</div>

			</section>
		
		</main>

	</div>
</template>


<script>

export default {

	head () {
		return {
			title: '記事管理',
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	async fetch ({ app, store, params }) {

		// let { data } = await app.$axios.$get('/article/${params.article_id}/${store.state.login_account.account_name}')

		// console.log(data);

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