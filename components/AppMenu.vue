<template>
	<div>

		<!-- <div>{{$auth.state}}</div> -->
		<!-- <div>{{$auth.$storage.getUniversal('_token.azure')}}</div> -->

		<div id="g-menu-wrap">
	
			<div class="g-menu-head">

				<div v-if="$store.state.login_account">
					<div class="cover">
						<span>
							<img :src="`${$store.state.login_account.profile_back_image}`" :alt="`${$store.state.login_account.account_name}`">
						</span>
					</div>
					<div class="avatar-lg">
						<nuxt-link to="/profile">
							<span>
								<img :src="`${$store.state.login_account.profile_icon}`" :alt="`${$store.state.login_account.account_name}`">
							</span>
						</nuxt-link>
					</div>
					<p>flower9292</p>

					<div class="logout">
						<a @click="logoutOAuth">
							<img src="@/assets/svg/icon_logout.svg" alt="ログアウト">
						</a>
					</div>
				</div>


				<div class="btn-signs" v-else>
					<ul>
						<li><a @click="loginOAuth">ログイン</a></li>
						<li><a class="fill" @click="registOAuth">新規登録</a></li>
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
						<li v-if="$store.state.login_account">
							<nuxt-link to="/article_management/">記事管理</nuxt-link>
						</li>
						<li v-if="$store.state.login_account">
							<nuxt-link to="/">全体お知らせ</nuxt-link>
						</li>
						<li v-if="$store.state.login_account">
							<nuxt-link to="/">個別お知らせ</nuxt-link>
						</li>
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

		<div id="btn-post" v-if="$store.state.login_account">
			<nuxt-link to="/post">
				<img src="@/assets/svg/icon_pen.svg" alt="">
			</nuxt-link>
		</div>

		<div id="overlay"></div>

	</div>
</template>


<script>

export default {

	mounted(){
		var urlHash = location.hash;
		if(urlHash.match(/access_token=/)){
			this.$store.dispatch("set_access_token")
		}else{
			this.$store.dispatch("load");
		}
	},

	methods: {
		loginOAuth() {
			this.$auth.loginWith('azureSignIn')
		},

		registOAuth() {
			this.$auth.loginWith('azureSignUp')
		},

		logoutOAuth() {
			this.$auth.logout();

			this.$store.commit("SET_LOGIN_ACCOUNT", null);
			localStorage.removeItem('rakun-account');

			$('#wrap').removeClass('on');
			$('#g-head').removeClass('on');
			$('#g-menu-wrap').removeClass('on');
			$('#overlay').fadeOut();
			
			this.$router.push("/")
		}
	}
}
</script>