<template>
	<div>
	
		<header id="g-head">

			<div id="h-logo">
				<nuxt-link class="logo-rakun" to="/">
					<img src="@/assets/svg/logo_orange.svg" alt="RAKUN">
				</nuxt-link>
			</div>

			<div id="h-group">

				<div class="h-elem icons">
					<ul>
<!--
						<li>
							<button id="btn-notice" @click="show_tippy">
								<span>
									<img src="@/assets/svg/icon_notice.svg" alt="お知らせ">
								</span>
								<strong><b><i>2</i></b></strong>
							</button>
						</li>
						<li>
							<button id="btn-alert" @click="show_tippy">
								<span>
									<img src="@/assets/svg/icon_alert.svg" alt="通知">
								</span>
								<strong><b><i>28</i></b></strong>
							</button>
						</li>
-->
						<li>
							<nuxt-link to="/search">
								<span>
									<img src="@/assets/svg/icon_search.svg" alt="検索">
								</span>
							</nuxt-link>
						</li>
					</ul>
				</div>

				<div id="btn-menu" class="h-elem">

<!--
					<div class="avatar-sm">
						<span>
							<img src="@/assets/img/avatar.jpg" alt="">
						</span>
					</div>
-->

					<div class="dotline">
						<em><b></b><b></b><b></b></em>
					</div>

				</div>

			</div><!-- #h-group -->
			

		</header>



		<div id="dtl-notice" class="tooltips">
			<div class="in" v-if="$store.state.tippy">
				<dl>
					<dt><span>全体お知らせ</span></dt>
					<dd>
						<ul>
							<li>
								<a href="">
									<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
									<em>メンテナンスのお知らせ</em>
								</a>
							</li>
						</ul>
					</dd>
					<dt><span>個別お知らせ</span></dt>
					<dd>
						<ul>
							<li>
								<a href="">
									<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
									<em>登録Walletのご確認依頼</em>
								</a>
							</li>
							<li>
								<a href="">
									<time datetime="2019-01-01"><i class="far fa-clock"></i>2019/01/01</time>
									<em>登録Walletのご確認依頼</em>
								</a>
							</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>

		<div id="dtl-alert" class="tooltips">
			<div class="in" v-if="$store.state.tippy">
				<ul>
					<li>
						<a href="">
							<em>ニックネームが記事を投稿しました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームがコメントを投稿しました。ニックネームがコメントを投稿しました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームが記事をシェアしました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームが投げ銭しました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームがフォローしました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームが記事を投稿しました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームがコメントを投稿しました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームが記事をシェアしました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームが投げ銭しました。</em>
						</a>
					</li>
					<li>
						<a href="">
							<em>ニックネームがフォローしました。</em>
						</a>
					</li>
				</ul>
			</div>
		</div>


	</div>
</template>


<script>

export default {

	methods: {
		show_tippy() {
			this.$store.commit("SET_TIPPY", true)
		}
	}

}

</script>