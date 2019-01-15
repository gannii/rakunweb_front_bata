<template>
	<div>
  
		<main>

			<section class="sec sec-list" data-type="post">
			
				<div class="inner">

					<div class="sec-head">
						
						<nav id="view-nav">
							<ul class="h-sm">
								<li class="active">公開中（{{$store.state.article_management.publish_list.length}}）</li>
								<li>下書き（{{$store.state.article_management.draft_list.length}}）</li>
							</ul>
						</nav>

					</div>

					<div class="sec-body">

						<div id="view-dtl">


							<div class="view show">
								
								<article v-if="$store.state.article_management.publish_list.length != 0" v-for="content in $store.state.article_management.publish_list" :key="content.article_id">
									<div class="art-in">
										<div class="art-img">
											<a href="#" :style="`background-image:url('${content.eyecatch_uri}');`">
											</a>
										</div>
										<div class="art-dtl">
											<h3 class="h-sm">
												<a href="#">{{content.title}}</a>
											</h3>
											<p>{{content.body}}</p>
											<div class="art-tag">
												<span v-for="tag in content.tags">#{{tag.tag}}</span>
											</div>
										</div>
										<div class="art-meta">
											<div class="art-user">
												<div class="avatar-sm">
													<nuxt-link :to="`/profile/${content.account_name}`">
														<span>
															<img :src="`${content.user.profile_icon}`" :alt="`${content.account_name}`">
														</span>
														<em>{{content.account_name}}</em>
													</nuxt-link>
												</div>
												 <time :datetime="`${content.pubished_at}`"><i class="far fa-clock"></i>{{content.pubished_at}}</time>
											</div>
											<div class="art-cnts">
												<ul>
													<li><img src="@/assets/svg/icon_comment.svg" alt=""><b>{{content.comments_count}}</b></li>
													<li><img src="@/assets/svg/icon_like.svg" alt=""><b>{{content.reviews_count}}</b></li>
													<li><img src="@/assets/svg/icon_share.svg" alt=""><b>{{content.shares_count}}</b></li>
													<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{content.appraised_value}}</b></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="art-menu">
										<span>
											<img src="@/assets/svg/icon_submenu.svg">
										</span>
									</div>
								</article>
								<article v-else>
									<p>現在、公開中の記事はありません</p>
								</article>

							</div>


							<div class="view">
								
								
								<article v-if="$store.state.article_management.draft_list.length != 0" v-for="content in $store.state.article_management.draft_list" :key="content.article_id">
									<div class="art-in">
										<div class="art-img">
											<a href="#" :style="`background-image:url('${content.eyecatch_uri}');`">
											</a>
										</div>
										<div class="art-dtl">
											<h3 class="h-sm">
												<a href="#">{{content.title}}</a>
											</h3>
											<p>{{content.body}}</p>
											<div class="art-tag">
												<span v-for="tag in content.tags">#{{tag.tag}}</span>
											</div>
										</div>
										<div class="art-meta">
											<div class="art-user">
												<div class="avatar-sm">
													<nuxt-link :to="`/profile/${content.account_name}`">
														<span>
															<img :src="`${content.user.profile_icon}`" :alt="`${content.account_name}`">
														</span>
														<em>{{content.account_name}}</em>
													</nuxt-link>
												</div>
												<time :datetime="`${content.pubished_at}`"><i class="far fa-clock"></i>{{content.pubished_at}}</time>
											</div>
											<div class="art-cnts">
												<ul>
													<li><img src="@/assets/svg/icon_comment.svg" alt=""><b>{{content.comments_count}}</b></li>
													<li><img src="@/assets/svg/icon_like.svg" alt=""><b>{{content.reviews_count}}</b></li>
													<li><img src="@/assets/svg/icon_share.svg" alt=""><b>{{content.shares_count}}</b></li>
													<li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{content.appraised_value}}</b></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="art-menu">
										<span>
											<img src="@/assets/svg/icon_submenu.svg">
										</span>
									</div>
								</article>
								<article v-else>
									<p>現在、下書きの記事はありません</p>
								</article>

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

	async fetch ({ app, store }) {

		let [publish_list, draft_list] = await Promise.all([

		// 公開中記事取得
	   		app.$axios.$post('/article_management/publish/list',
			{
				login_account_name: store.state.login_account.account_name,
				page_num: 1,
				page_size: 4
			}),

	   	// 下書き記事取得
	   		app.$axios.$post('/article_management/draft/list',
			{
				login_account_name: store.state.login_account.account_name,
				page_num: 1,
				page_size: 4
			})
	    ])

	    console.log(publish_list.data.article_info);
	    console.log(draft_list.data.article_info);
		
		store.commit('article_management/SET_PUBLISH_LIST', publish_list.data.article_info)
		store.commit('article_management/SET_DRAFT_LIST', draft_list.data.article_info)

	},

	mounted(){

		this.$store.dispatch("article_management/init_article_management")
		
	},

	methods: {

	}

}

</script>

<style scoped>

@import "~/assets/css/article-management.css"

</style>