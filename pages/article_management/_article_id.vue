<template>
	<div>
  
		<main>

			<section class="sec sec-article" data-type="single">
			
				<div class="inner max1000">

					<div class="sec-head">

						<time :datetime="`${$store.state.article_individual.data_article_individual.published_at}`"><i class="far fa-clock"></i>{{$store.state.article_individual.data_article_individual.published_at}}</time>

						<h3 class="h-lg">{{$store.state.article_individual.data_article_individual.title}}</h3>

						<div class="art-tag">
							<span v-for="tag in $store.state.article_individual.data_article_individual.tags">#{{tag.tag}}</span>
						</div>

					</div>

					<div class="sec-body" v-html="ARTICLE_DETAIL_BODY">
						{{ARTICLE_DETAIL_BODY}}
					</div>

				</div>

			</section>
		
		</main>


<nav class="floating-menu btn-act pos_btm-right">
	<ul>

<!-- 公開中 -->
		<li id="btn-edit" class="icon-lg btn-orange on" v-if="$store.state.article_individual.data_article_individual.status_admin == 0 && $store.state.article_individual.data_article_individual.status == 0">
			<nuxt-link :to="`/article_management/edit/${$store.state.article_individual.data_article_individual.article_id}`">
				<b>編 集</b>
			</nuxt-link>
		</li>
		<li id="btn-submenu" class="icon-md btn-dark" v-if="$store.state.article_individual.data_article_individual.status_admin == 0 && $store.state.article_individual.data_article_individual.status == 0">
			<span @click="fn_move_drafe">
				<b>下書き<br />移動</b>
			</span>
		</li>

<!-- 下書き -->
		<li id="btn-edit" class="icon-lg btn-orange on" v-if="$store.state.article_individual.data_article_individual.status_admin == 0 && $store.state.article_individual.data_article_individual.status == 1">
			<nuxt-link :to="`/article_management/edit/${$store.state.article_individual.data_article_individual.article_id}`">
				<b>編 集</b>
			</nuxt-link>
		</li>
		<li id="btn-release" class="icon-lg btn-orange" v-if="$store.state.article_individual.data_article_individual.status_admin == 0 && $store.state.article_individual.data_article_individual.status == 1">
			<span @click="fn_move_publish">
				<b>公 開</b>
			</span>
		</li>
		<li id="btn-delete" class="icon-md btn-dark on" v-if="$store.state.article_individual.data_article_individual.status_admin == 0 && $store.state.article_individual.data_article_individual.status == 1">
			<span @click="fn_delete">
				<b>削 除</b>
			</span>
		</li>

<!-- 凍結時 -->
		<li id="btn-delete" class="icon-md btn-dark on" v-if="$store.state.article_individual.data_article_individual.status_admin == 1">
			<span @click="fn_delete">
				<b>削 除</b>
			</span>
		</li>

	</ul>
</nav>

<div class="floating-menu btn-act pos_top-left">
	<ul>
		<li class="icon-md btn-gray">
			<nuxt-link to="/article_management/">
				<b>記事<br />管理</b>
			</nuxt-link>
		</li>
	</ul>
</div>


	</div>
</template>


<script>

export default {

	head () {
		return {
			title: this.$store.state.article_individual.data_article_individual.title,
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	async fetch ({ app, store, params }) {

		let { data } = await app.$axios.$get('/article_management/' + params.article_id + '/' + store.state.login_account.account_name)

		console.log(data);

		store.commit('article_individual/SET_ARTICLE_INDIVIDUAL', data)
	
	},

	computed:{

	    ARTICLE_DETAIL_BODY() {
	    	if(process.browser){
		    	var body = marked(this.$store.state.article_individual.data_article_individual.body);
				return body
			}
	    }

	},

	methods: {

	// 公開中 移動
		fn_move_publish() {

			this.$axios.$patch('/article_management/publish/' + this.$route.params.article_id, 
          	{
				"login_account_name": this.$store.state.login_account.account_name
			})
			.then((res) => {
				console.log(res);
				this.$router.push("/article_management/")
			})

		},

	// 下書き 移動
		fn_move_drafe() {

			this.$axios.$patch('/article_management/draft/' + this.$route.params.article_id, 
          	{
				"login_account_name": this.$store.state.login_account.account_name
			})
			.then((res) => {
				console.log(res);
				this.$router.push("/article_management/#draft")
			})

		},

	// 記事 削除
		fn_delete() {
			this.$axios.$delete('/article_management/' + this.$route.params.article_id + '/' + this.$store.state.login_account.account_name)
			.then((res) => {
				console.log(res);
				this.$router.push("/article_management/")
			})
		}

	}

}

</script>

<style scoped>

@import "~/assets/css/article-individual.css"

</style>