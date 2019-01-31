<template>
	<div>

		<main>

			<section class="sec sec-post">
				
				<div class="inner max1000">

					<dl>
						<dt>&nbsp;</dt>
						<dd>
							<input id="post_title" v-model="postTitle" class="h-md" type="text" placeholder="タイトル" />
							<p class="error" v-if="error_postTitle">{{error_postTitle}}</p>
						</dd>

						<dt>&nbsp;</dt>
						<dd>
							<ul id="post_cat">
								<li>
									<em class="icon-plus"></em><input class="input-cat" type="text" placeholder="カテゴリ―を入力">
								</li>
							</ul>
						</dd>

						<dt id="insertEditor">&nbsp;</dt>
						<dd id="code-wrap">
							<textarea id="post_content"></textarea>
							<!-- <p class="error" v-if="error_postContent">{{error_postContent}}</p> -->
						</dd>
					</dl>
					
					<canvas id="canvas" width="0" height="0"></canvas>
					<input id="ui_image" type="file">

				</div>
			</section>

		</main>


		<nav class="floating-menu btn-act pos_btm-right">
			<ul>
				<li id="btn-release" class="icon-lg btn-orange" @click="post_publish">
					<span>
						<b>公開</b>
					</span>
				</li>
				<li id="btn-submenu" class="icon-md" @click="post_draft">
					<span>
						<b>下書き<br />保存</b>
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
			postTitle: '',
			error_postTitle: null
		}
	},

	head () {
		return {
			title: '投稿',
			titleTemplate: '%s - RAKUN',
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	middleware: [

		// 'auth'
		
	],

	mounted(){

		this.$store.dispatch("post/init_post")
		
	},

	methods: {

// 公開
		async post_publish(e){

			if(!this.postTitle){

				this.error_postTitle = "タイトルを入力してください"

			}else{

				$('#btn-release').css({"pointer-events": "none"});

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
				await this.$axios.$post('/article_management/post_publish',
				{
					login_account_name: this.$store.state.login_account.account_name,
					title: $postTitle,
					tag: $postCat,
					body: $postContent,
					language: 1
				})
			/*
				.then((res) => {
					console.log(res.data);
				})
			*/

				this.$router.push("/article_management/")

			}

		},

// 下書き
		async post_draft(e){

			if(!this.postTitle){

				this.error_postTitle = "タイトルを入力してください"

			}else{

				$('#btn-submenu').css({"pointer-events": "none"});

			// タイトル
				var $postTitle = $('#post_title').val();

			// タグ
				var $postCat = [];
				var $postCatLi = $('#post_cat').find('li b');
				$postCatLi.each(function(i){
					$postCat['tag' + i] = $(this).text();
				});

			// 本文
				var $postContent = $('#post_content').val();

			// API Call	
				await this.$axios.$post('/article_management/post_draft',
				{
					login_account_name: this.$store.state.login_account.account_name,
					title: $postTitle,
					tag: $postCat,
					body: $postContent,
					language: 1
				})
			/*
				.then((res) => {
					console.log(res.data);
				})
			*/
				this.$router.push("/article_management/#draft")

			}

		}


	}

}

</script>


<!-- <style scoped> -->
<style>

@import "~/assets/css/post.css"

</style>