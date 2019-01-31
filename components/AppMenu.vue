<template>
	<div>

		<!-- <div>{{$auth.state}}</div> -->
		<!-- <div>{{$auth.$storage.getUniversal('_token.azure')}}</div> -->

		<div id="g-menu-wrap">
	
			<div class="g-menu-head">

				<div v-if="$store.state.login_account">

					<div class="cover">

						<span v-if="$store.state.login_account.profile_back_image">
							<img :src="`${$store.state.login_account.profile_back_image}`" :alt="`${$store.state.login_account.account_name}`">
						</span>
						<span v-else>
							<img src="@/assets/img/back-noimage.jpg" :alt="`${$store.state.login_account.account_name}`">
						</span>

					</div>

					<div class="avatar-lg">
						<nuxt-link :to="`/profile/${$store.state.login_account.account_name}`" class="undo">

							<span v-if="$store.state.login_account.profile_icon">
								<img :src="`${$store.state.login_account.profile_icon}`" :alt="`${$store.state.login_account.nickname}`">
							</span>
							<span v-else>
								<img src="@/assets/img/user-noimage.png" :alt="`${$store.state.login_account.nickname}`">
							</span>

						</nuxt-link>
					</div>
					<p>{{$store.state.login_account.nickname}}</p>

					<div class="logout">
						<a @click="logoutOAuth" class="undo">
							<img src="@/assets/svg/icon_logout.svg" alt="ログアウト">
						</a>
					</div>
				</div>


				<div class="btn-signs" v-else>
					<ul>
						<li><a @click="loginOAuth">ログイン</a></li>
						<!-- <li><a class="fill" @click="registOAuth">新規登録</a></li> -->
					</ul>
				</div>


			</div>

			<div class="g-menu-body">
				<nav id="g-menu">
					<ul>
						<li>
							<a href="#" target="_blank" class="undo">
								<img src="@/assets/svg/icon_wallet.svg" alt="">
								<span>ウォレット</span>
							</a>
						</li>
						<li v-if="$store.state.login_account">
							<nuxt-link to="/article_management/" class="undo">記事管理</nuxt-link>
						</li>
						<li v-if="$store.state.login_account">
							<nuxt-link to="/info-entire" class="undo">全体お知らせ</nuxt-link>
						</li>
						<li v-if="$store.state.login_account">
							<nuxt-link to="/info-individual/" class="undo">個別お知らせ</nuxt-link>
						</li>
						<li class="hasChild">
							<em>言語設定</em>
							<ul>
								<li>
									<a href="" class="undo">日本語</a>
								</li>
								<li>
									<a href="" class="undo">English</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>

			<div class="g-menu-foot">
				<nuxt-link class="logo-rakun undo" to="/">
					<img src="@/assets/svg/logo_white.svg" alt="RAKUN">
				</nuxt-link>
				<aside>
					<ul>
						<li><nuxt-link to="/" class="undo">利用規約</nuxt-link></li>
						<li><nuxt-link to="/" class="undo">プライバシーポリシー</nuxt-link></li>
						<li><nuxt-link to="/company" class="undo">運営会社</nuxt-link></li>
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
			
			this.$router.push("/")
		}
	}
}
</script>