<template>
	<div>
  
		<main>

			<section id="post-edit" class="sec sec-post">
			
				<div class="inner max1000">

					<dl>
						<dt>&nbsp;</dt>
						<dd>
							<input id="post_title" class="h-md" type="text" placeholder="タイトル" :value="`${$store.state.article_edit.data_article_individual_edit.title}`" />
							<!-- <p class="error" v-if="artTitleError">{{artTitleError}}</p> -->
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
<!--
		<li id="btn-storage" class="icon-lg btn-orange on">
			<span>
				<b>保 存</b>
			</span>
		</li>
		<li id="btn-submenu" class="icon-md btn-dark">
			<span>
				<b>下書き<br />移動</b>
			</span>
		</li>
-->
<!-- 下書き -->
		<li id="btn-storage" class="icon-lg btn-orange on">
			<span>
				<b>保 存</b>
			</span>
		</li>
		<li id="btn-release" class="icon-lg btn-orange">
			<span>
				<b>公 開</b>
			</span>
		</li>
		<li id="btn-submenu" class="icon-md btn-dark">
			<span>
				<b>下書き<br />移動</b>
			</span>
		</li>

	</ul>
</nav>

<div class="floating-menu btn-act pos_top-left">
	<ul>
		<li class="icon-md btn-gray">
			<span>
				<b>記事<br />管理</b>
			</span>
		</li>
	</ul>
</div>


	</div>
</template>


<script>

export default {

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
		
	}

}

</script>

<style scoped>

@import "~/assets/css/post.css"

</style>