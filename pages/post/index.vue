<template>
	<div>

		<main>

			<section class="sec sec01">
				
				<div class="inner max800">

					<dl>
						<dt>&nbsp;</dt>
						<dd>
							<input id="post_title" type="text" placeholder="タイトル" />
							<!-- <p class="error" v-if="artTitleError">{{artTitleError}}</p> -->
						</dd>

						<dt>&nbsp;</dt>
						<dd>
							<ul id="post_cat">
								<li>
									<em class="icon-minus"></em><b>カテゴリ4</b>
								</li>
								<li>
									<em class="icon-minus"></em><b>カテゴリ3</b>
								</li>
								<li>
									<em class="icon-minus"></em><b>カテゴリ2</b>
								</li>
								<li>
									<em class="icon-minus"></em><b>カテゴリ1</b>
								</li>
							</ul>
						</dd>

						<dt id="insertEditor">&nbsp;</dt>
						<dd id="code-wrap">
							<textarea id="post_content"></textarea>
							<!-- <p class="error" v-if="artContentError">{{artContentError}}</p> -->
						</dd>
					</dl>
					
					<canvas id="canvas" width="0" height="0"></canvas>
					<input id="ui_image" type="file">

				</div>
			</section>

		</main>


		<nav class="floating-menu pos_btm-right">
			<ul>
				<li id="btn-release" class="trig-lg btn-orange" @click="post_publish">
					<span>
						<b>公開</b>
					</span>
				</li>
				<li id="btn-submenu" class="trig-md" @click="post_draft">
					<span>
						<b>下書き<br />保存</b>
					</span>
				</li>
			</ul>
		</nav>

		<div class="floating-menu pos_top-left">
			<ul>
				<li class="trig-md btn-gray">
					<span>
						<b>記事<br />管理</b>
					</span>
				</li>
			</ul>
		</div>

	</div>
</template>


<script>

/*
if (process.browser) {
  require('~/assets/js/simplemde.js');
  require('~/assets/js/marked.js');
  require('~/assets/js/nailthumb.js');
  require('~/assets/js/post.js');

  require('~/assets/css/simplemde.css');
  require('~/assets/css/nailthumb.css');
}
*/

export default {

	head () {
		return {
			title: '投稿',
			titleTemplate: '%s - RAKUN',
		/*
			meta: [
				{ hid: 'og:title', name: 'og:title', content: this.title + ' - Rakun' },
				{ hid: 'og:type', name: 'og:type', content: 'article' },
				{ hid: 'og:url', name: 'og:url', content: this.url },
				{ hid: 'og:image', name: 'og:image', content: 'https://seqdio-prototype.azurewebsites.net' + this.image0 },
				{ hid: 'og:site_name', name: 'og:site_name', content: 'Rakun' },
				{ hid: 'og:description', name: 'og:description', content: this.content }
			],
		*/
			script: [
				
			],
			link: [
				
			]
		
		} 
	},

	mounted(){
		this.$store.dispatch("init_post")
	},

	methods: {

// 公開
		post_publish(e){
			this.$axios.$post('/article_management/post_publish',
			{
				params:{
					login_account_name: "yamada307",
					title: "あいうえお",
					tag: [
						{
							"tag": "お気に入りTag"
						}
					],
					body: "1234567890qazwsxedcrfvtgbyhnujmik,ol.p;/テスト１テスト２テスト３",
					language: 1
				}
			})
			.then((res) => {
				console.log(res.data);
			})
		},

// 下書き
		post_draft(e){
			this.$axios.$post('/article_management/post_draft',
			{
				params:{
					login_account_name: "yamada307",
					title: "あいうえお",
					tag: [
						{
							"tag": "お気に入りTag"
						}
					],
					body: "1234567890qazwsxedcrfvtgbyhnujmik,ol.p;/テスト１テスト２テスト３",
					language: 1
				}
			})
			.then((res) => {
				console.log(res.data);
			})
		}


	}

}

</script>


<!-- <style scoped> -->
<style>
.sec.sec01 {
  padding: 20px 0 0;
}

#post_cat li {
  cursor: pointer;
  padding: 5px 0;
}

#post_cat li b {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}

.editor-toolbar {
  margin: 0 0 10px;
  border-bottom: 1px solid #bbb;
  border-radius: 4px;
}

.CodeMirror {
  border-radius: 4px;
}

input#ui_image {
  display: none;
}

.cm-string.cm-url {
  display: none;
}

#canvas {
  display: none;
}

#dialog-resize {
  text-align: center;
}

#dialog-resize img {
  width: auto;
  max-width: 100%;
  height: auto;
}

#dialog-resize button {
  cursor: pointer;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 15px auto;
  padding: 10px;
  background-color: #fff;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

#dialog-resize button small {
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
}

#code-wrap {
  /* all: initial;*/
}

#code-wrap.mir {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.editor-preview-active, .editor-preview-active-side {
  position: static !important;
}

/*
.editor-preview-active * html, .editor-preview-active * body, .editor-preview-active * div, .editor-preview-active * span, .editor-preview-active * object, .editor-preview-active * iframe, .editor-preview-active * h1, .editor-preview-active * h2, .editor-preview-active * h3, .editor-preview-active * h4, .editor-preview-active * h5, .editor-preview-active * h6, .editor-preview-active * p, .editor-preview-active * blockquote, .editor-preview-active * pre, .editor-preview-active * abbr, .editor-preview-active * address, .editor-preview-active * cite, .editor-preview-active * code, .editor-preview-active * del, .editor-preview-active * dfn, .editor-preview-active * em, .editor-preview-active * img, .editor-preview-active * ins, .editor-preview-active * kbd, .editor-preview-active * q, .editor-preview-active * samp, .editor-preview-active * small, .editor-preview-active * strong, .editor-preview-active * sub, .editor-preview-active * sup, .editor-preview-active * var, .editor-preview-active * b, .editor-preview-active * i, .editor-preview-active * dl, .editor-preview-active * dt, .editor-preview-active * dd, .editor-preview-active * ol, .editor-preview-active * ul, .editor-preview-active * li, .editor-preview-active * fieldset, .editor-preview-active * form, .editor-preview-active * label, .editor-preview-active * legend, .editor-preview-active * input, .editor-preview-active * textarea, .editor-preview-active * button, .editor-preview-active * table, .editor-preview-active * caption, .editor-preview-active * tbody, .editor-preview-active * tfoot, .editor-preview-active * thead, .editor-preview-active * tr, .editor-preview-active * th, .editor-preview-active * td, .editor-preview-active * article, .editor-preview-active * aside, .editor-preview-active * canvas, .editor-preview-active * details, .editor-preview-active * figcaption, .editor-preview-active * figure, .editor-preview-active * footer, .editor-preview-active * header, .editor-preview-active * hgroup, .editor-preview-active * menu, .editor-preview-active * nav, .editor-preview-active * section, .editor-preview-active * summary, .editor-preview-active * time, .editor-preview-active * mark, .editor-preview-active * audio, .editor-preview-active * video, .editor-preview-active-side * html, .editor-preview-active-side * body, .editor-preview-active-side * div, .editor-preview-active-side * span, .editor-preview-active-side * object, .editor-preview-active-side * iframe, .editor-preview-active-side * h1, .editor-preview-active-side * h2, .editor-preview-active-side * h3, .editor-preview-active-side * h4, .editor-preview-active-side * h5, .editor-preview-active-side * h6, .editor-preview-active-side * p, .editor-preview-active-side * blockquote, .editor-preview-active-side * pre, .editor-preview-active-side * abbr, .editor-preview-active-side * address, .editor-preview-active-side * cite, .editor-preview-active-side * code, .editor-preview-active-side * del, .editor-preview-active-side * dfn, .editor-preview-active-side * em, .editor-preview-active-side * img, .editor-preview-active-side * ins, .editor-preview-active-side * kbd, .editor-preview-active-side * q, .editor-preview-active-side * samp, .editor-preview-active-side * small, .editor-preview-active-side * strong, .editor-preview-active-side * sub, .editor-preview-active-side * sup, .editor-preview-active-side * var, .editor-preview-active-side * b, .editor-preview-active-side * i, .editor-preview-active-side * dl, .editor-preview-active-side * dt, .editor-preview-active-side * dd, .editor-preview-active-side * ol, .editor-preview-active-side * ul, .editor-preview-active-side * li, .editor-preview-active-side * fieldset, .editor-preview-active-side * form, .editor-preview-active-side * label, .editor-preview-active-side * legend, .editor-preview-active-side * input, .editor-preview-active-side * textarea, .editor-preview-active-side * button, .editor-preview-active-side * table, .editor-preview-active-side * caption, .editor-preview-active-side * tbody, .editor-preview-active-side * tfoot, .editor-preview-active-side * thead, .editor-preview-active-side * tr, .editor-preview-active-side * th, .editor-preview-active-side * td, .editor-preview-active-side * article, .editor-preview-active-side * aside, .editor-preview-active-side * canvas, .editor-preview-active-side * details, .editor-preview-active-side * figcaption, .editor-preview-active-side * figure, .editor-preview-active-side * footer, .editor-preview-active-side * header, .editor-preview-active-side * hgroup, .editor-preview-active-side * menu, .editor-preview-active-side * nav, .editor-preview-active-side * section, .editor-preview-active-side * summary, .editor-preview-active-side * time, .editor-preview-active-side * mark, .editor-preview-active-side * audio, .editor-preview-active-side * video {
  margin: initial;
  padding: initial;
  border: initial;
  outline: initial;
  font-size: initial;
  font-weight: initial;
  font-style: initial;
  vertical-align: initial;
}

.editor-preview-active * body, .editor-preview-active-side * body {
  line-height: initial;
}

.editor-preview-active * article, .editor-preview-active * aside, .editor-preview-active * details, .editor-preview-active * figcaption, .editor-preview-active * figure, .editor-preview-active * footer, .editor-preview-active * header, .editor-preview-active * hgroup, .editor-preview-active * menu, .editor-preview-active * nav, .editor-preview-active * section, .editor-preview-active-side * article, .editor-preview-active-side * aside, .editor-preview-active-side * details, .editor-preview-active-side * figcaption, .editor-preview-active-side * figure, .editor-preview-active-side * footer, .editor-preview-active-side * header, .editor-preview-active-side * hgroup, .editor-preview-active-side * menu, .editor-preview-active-side * nav, .editor-preview-active-side * section {
  display: initial;
}

.editor-preview-active * ul, .editor-preview-active * ol, .editor-preview-active-side * ul, .editor-preview-active-side * ol {
  list-style: initial;
}

.editor-preview-active * blockquote, .editor-preview-active * q, .editor-preview-active-side * blockquote, .editor-preview-active-side * q {
  quotes: initial;
}

.editor-preview-active * blockquote:before, .editor-preview-active * blockquote:after, .editor-preview-active * q:before, .editor-preview-active * q:after, .editor-preview-active-side * blockquote:before, .editor-preview-active-side * blockquote:after, .editor-preview-active-side * q:before, .editor-preview-active-side * q:after {
  content: initial;
}

.editor-preview-active * a, .editor-preview-active-side * a {
  margin: initial;
  padding: initial;
  font-size: initial;
  vertical-align: initial;
  background: initial;
}

.editor-preview-active * ins, .editor-preview-active-side * ins {
  background-color: initial;
  color: initial;
  text-decoration: initial;
}

.editor-preview-active * mark, .editor-preview-active-side * mark {
  background-color: initial;
  color: initial;
  font-style: initial;
  font-weight: initial;
}

.editor-preview-active * del, .editor-preview-active-side * del {
  text-decoration: initial;
}

.editor-preview-active * abbr[title], .editor-preview-active * dfn[title], .editor-preview-active-side * abbr[title], .editor-preview-active-side * dfn[title] {
  border-bottom: initial;
  cursor: initial;
}

.editor-preview-active * table, .editor-preview-active-side * table {
  border-collapse: initial;
  border-spacing: initial;
}

.editor-preview-active * input, .editor-preview-active * select, .editor-preview-active-side * input, .editor-preview-active-side * select {
  vertical-align: initial;
}

.editor-preview-active * a, .editor-preview-active-side * a {
  color: initial;
  text-decoration: initial;
  outline: initial;
}

.editor-preview-active * img, .editor-preview-active-side * img {
  -ms-interpolation-mode: bicubic;
}
*/

.editor-preview-active * img, .editor-preview-active-side * img {
  width: auto;
  max-width: 100%;
  height: auto;
}

a.fa-arrows-alt {
  display: none;
}

</style>