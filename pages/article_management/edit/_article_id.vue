<template>
	<div>
  
		<main>

			<section id="post-edit" class="sec sec-post">
			
				<div class="inner max1000">

					<dl>
						<dt>&nbsp;</dt>
						<dd>
							<input id="post_title" v-model="postTitle" class="h-md" type="text" placeholder="タイトル"/>
							<p class="error" v-if="error_postTitle">{{error_postTitle}}</p>
						</dd>

						<dt>&nbsp;</dt>
						<dd>
							<ul id="post_cat">

								<li v-for="tag in $store.state.article_edit.data_article_individual_edit.tags">
									<em class="icon-minus"></em><b>{{tag.tag}}</b>
								</li>
								<li>
									<em class="icon-plus"></em><input class="input-cat" type="text" placeholder="カテゴリ―を入力">
								</li>
							</ul>
						</dd>

						<dt id="insertEditor">&nbsp;</dt>
						<dd id="code-wrap">
							<textarea id="post_content">{{$store.state.article_edit.data_article_individual_edit.body}}</textarea>
							<!-- <p class="error" v-if="artContentError">{{artContentError}}</p> -->
						</dd>
					</dl>
					
					<canvas id="canvas" width="0" height="0"></canvas>
					<input id="ui_image" type="file">

				</div>
			</section>
		
		</main>


<nav class="floating-menu btn-act pos_btm-right">
	<ul>

<!-- 公開中 -->
		<li id="btn-storage" class="icon-lg btn-orange on" v-if="$store.state.article_edit.data_article_individual_edit.status == 0">
			<span @click="fn_save_publish">
				<b>保 存</b>
			</span>
		</li>
		<li id="btn-submenu" class="icon-md btn-dark" v-if="$store.state.article_edit.data_article_individual_edit.status == 0">
			<span @click="fn_move_save_draft">
				<b>下書き<br />移動</b>
			</span>
		</li>

<!-- 下書き -->
		<li id="btn-storage" class="icon-lg btn-orange on" v-if="$store.state.article_edit.data_article_individual_edit.status == 1">
			<span @click="fn_save_draft">
				<b>保 存</b>
			</span>
		</li>
		<li id="btn-release" class="icon-lg btn-orange" v-if="$store.state.article_edit.data_article_individual_edit.status == 1">
			<span @click="fn_move_save_publish">
				<b>公 開</b>
			</span>
		</li>
		<li id="btn-delete" class="icon-md btn-dark on" v-if="$store.state.article_individual.data_article_individual.status == 1">
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

	data() {
		return{
			postTitle: this.$store.state.article_edit.data_article_individual_edit.title,
			error_postTitle: null
		}
	},

	head () {
		return {
			title: this.$store.state.article_edit.data_article_individual_edit.title,
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

		store.commit('article_edit/SET_ARTICLE_INDIVIDUAL_EDIT', data)
	
	},

	computed:{

	},

	mounted(){

		this.$store.dispatch("post/init_post")
		
	},

	methods: {

	// 記事（公開） 保存
		fn_save_publish() {

			if(!this.postTitle){

				this.error_postTitle = "タイトルを入力してください"

			}else{

				// $('#btn-release').css({"pointer-events": "none"});

				this.error_postTitle = null

			// タイトル
				var $postTitle = this.postTitle;

			// タグ
				var $postCat = [];
				var $postCatLi = $('#post_cat').find('li b');
				$postCatLi.each(function(i){
					// $postCat['tag' + i] = $(this).text();
					$postCat.push({'tag': $(this).text()});
				});

			// 本文
				var $postContent = $('#post_content').val();

			/* API Call */
				this.$axios.$patch('/article_management/save/' + this.$route.params.article_id, 
	          	{
					"login_account_name": this.$store.state.login_account.account_name,
					title: $postTitle,
					tag: $postCat,
					body: $postContent,
					language: 1
				})
				.then((res) => {
					console.log(res);
					this.$router.push("/article_management/")
				})

			}

		},

	// 記事（下書き） 保存
		fn_save_draft() {

			if(!this.postTitle){

				this.error_postTitle = "タイトルを入力してください"

			}else{

				// $('#btn-release').css({"pointer-events": "none"});

				this.error_postTitle = null

			// タイトル
				var $postTitle = this.postTitle;

			// タグ
				var $postCat = [];
				var $postCatLi = $('#post_cat').find('li b');
				$postCatLi.each(function(i){
					// $postCat['tag' + i] = $(this).text();
					$postCat.push({'tag': $(this).text()});
				});

			// 本文
				var $postContent = $('#post_content').val();

			/* API Call */

				this.$axios.$patch('/article_management/save/' + this.$route.params.article_id, 
	          	{
					"login_account_name": this.$store.state.login_account.account_name,
					title: $postTitle,
					tag: $postCat,
					body: $postContent,
					language: 1
				})
				.then((res) => {
					console.log(res);
					this.$router.push("/article_management/#draft")
				})
			}

		},

	// 記事保存 & 下書き移動
		fn_move_save_draft() {

			if(!this.postTitle){

				this.error_postTitle = "タイトルを入力してください"

			}else{

				// $('#btn-release').css({"pointer-events": "none"});

				this.error_postTitle = null

			// タイトル
				var $postTitle = this.postTitle;

			// タグ
				var $postCat = [];
				var $postCatLi = $('#post_cat').find('li b');
				$postCatLi.each(function(i){
					// $postCat['tag' + i] = $(this).text();
					$postCat.push({'tag': $(this).text()});
				});

			// 本文
				var $postContent = $('#post_content').val();

			/* API Call */

				this.$axios.$patch('/article_management/save_draft/' + this.$route.params.article_id, 
	          	{
					"login_account_name": this.$store.state.login_account.account_name,
					title: $postTitle,
					tag: $postCat,
					body: $postContent,
					language: 1
				})
				.then((res) => {
					console.log(res);
					this.$router.push("/article_management/#draft")
				})
			}

		},

	// 記事保存 & 公開中移動
		fn_move_save_publish() {

			if(!this.postTitle){

				this.error_postTitle = "タイトルを入力してください"

			}else{

				// $('#btn-release').css({"pointer-events": "none"});

				this.error_postTitle = null

			// タイトル
				var $postTitle = this.postTitle;

			// タグ
				var $postCat = [];
				var $postCatLi = $('#post_cat').find('li b');
				$postCatLi.each(function(i){
					// $postCat['tag' + i] = $(this).text();
					$postCat.push({'tag': $(this).text()});
				});

			// 本文
				var $postContent = $('#post_content').val();

			/* API Call */
				this.$axios.$patch('/article_management/save_publish/' + this.$route.params.article_id, 
	          	{
					"login_account_name": this.$store.state.login_account.account_name,
					title: $postTitle,
					tag: $postCat,
					body: $postContent,
					language: 1
				})
				.then((res) => {
					console.log(res);
					this.$router.push("/article_management/")
				})

			}
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

@import "~/assets/css/post.css"

</style>