<template>
	<div>

		<!-- <div>{{$auth.state}}</div> -->
		<!-- <div>{{$auth.$storage.getUniversal('_token.azure')}}</div> -->

		<div id="g-menu-wrap">
	
			<div class="g-menu-head">

<!--
				<div class="cover">
					<span>
						<img src="@/assets/img/cover.jpg" alt="">
					</span>
				</div>
				<div class="avatar-lg">
					<nuxt-link to="/profile">
						<span>
							<img src="@/assets/img/avatar.jpg" alt="">
						</span>
					</nuxt-link>
				</div>
				<p>flower9292</p>

				<div class="logout">
					<a @click="logoutOAuth">
						<img src="@/assets/svg/icon_logout.svg" alt="ログアウト">
					</a>
				</div>
-->

				<div class="btn-signs">
					<ul>
						<li><a @click="loginOAuth">ログイン</a></li>
						<li><a class="fill" href="" target="_blank">新規登録</a></li>
						<li><a @click="logoutOAuth">ログアウト</a></li>
					</ul>
				</div>


			</div>

			<div class="g-menu-body">
				<nav id="g-menu">
					<ul>
						<li>
							<a href="#" target="_blank">
								<img src="@/assets/svg/icon_wallet.svg" alt="">
								<span>ウォレット</span>
							</a>
						</li>
<!--
						<li>
							<nuxt-link to="/">記事管理</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/">全体お知らせ</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/">個別お知らせ</nuxt-link>
						</li>
-->
						<li class="hasChild">
							<em>言語設定</em>
							<ul>
								<li>
									<a href="">日本語</a>
								</li>
								<li>
									<a href="">English</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>

			<div class="g-menu-foot">
				<nuxt-link class="logo-rakun" to="/">
					<img src="@/assets/svg/logo_white.svg" alt="RAKUN">
				</nuxt-link>
				<aside>
					<ul>
						<li><nuxt-link to="/">利用規約</nuxt-link></li>
						<li><nuxt-link to="/">プライバシーポリシー</nuxt-link></li>
						<li><nuxt-link to="/company">運営会社</nuxt-link></li>
					</ul>
				</aside>
			</div>

		</div><!-- #g-menu-wrap -->

		<div id="btn-post">
			<nuxt-link to="/post">
				<img src="@/assets/svg/icon_pen.svg" alt="">
			</nuxt-link>
		</div>

		<div id="overlay"></div>

	</div>
</template>


<script>

export default {

/*
	middleware: [
		'auth',
	],
*/

	mounted(){
	
	/*
		var id_token_param = $(location).attr('hash');

		var id_token_string = id_token_param.substr(10);
		var id_token_header = JSON.parse(atob(id_token_string.split('.')[0]));
		var id_token_payload = JSON.parse(atob(id_token_string.split('.')[1]));
	*/
		var urlHash = location.hash;
		if(urlHash.match(/access_token=/)){
			this.$store.dispatch("set_access_token")
		}

		
	},

	methods: {
		loginOAuth() {
			this.$auth.loginWith('azure')
		},

		logoutOAuth() {
			this.$auth.logout();

			$('#wrap').removeClass('on');
			$('#g-head').removeClass('on');
			$('#g-menu-wrap').removeClass('on');
			$('#overlay').fadeOut();
			
			this.$router.push("/")
		}
	}
}
</script>