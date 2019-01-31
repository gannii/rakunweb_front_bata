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

						<li v-if="$store.state.login_account">
							<button id="btn-notice" @click="show_tippy_notice">
								<span>
									<img src="@/assets/svg/icon_notice.svg" alt="お知らせ">
								</span>
								<strong><b><i>2</i></b></strong>
							</button>
						</li>
						<li v-if="$store.state.login_account">
							<button id="btn-alert" @click="show_tippy_alert">
								<span>
									<img src="@/assets/svg/icon_alert.svg" alt="通知">
								</span>
								<strong><b><i>28</i></b></strong>
							</button>
						</li>

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

					<div class="avatar-sm" v-if="$store.state.login_account">

						<span v-if="$store.state.login_account.profile_icon">
							<img :src="`${$store.state.login_account.profile_icon}`" :alt="`${$store.state.login_account.nickname}`">
						</span>
						<span v-else>
							<img src="@/assets/img/user-noimage.png" :alt="`${$store.state.login_account.nickname}`">
						</span>
						
					</div>

					<div class="dotline" v-else>
						<em><b></b><b></b><b></b></em>
					</div>

				</div>

			</div><!-- #h-group -->
			

		</header>


		<div id="dtl-notice" class="tooltips">
			<div class="in" v-if="$store.state.tippy_notice">
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
			<div class="in" v-if="$store.state.tippy_alert">
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

		
		<div id="init-setting" class="dialog">

			<div class="in" v-if="$store.state.init_setting">

				<div class="init-head">
					<h2 class="h-md">
						<img class="logo-rakun" src="@/assets/svg/logo_orange.svg" alt="RAKUN"><strong>Sign Up</strong>
					</h2>
				</div>

				<div class="init-body">

					<form @submit.prevent="initial_setting">

						<table class="defor">
							<tr>
								<th>言語（Language）</th>
								<td>
									<label>
										<input type="radio" v-model="language" value="1" /><span>日本語</span>
									</label>
									<label>
										<input type="radio" v-model="language" value="2" /><span>English</span>
									</label>
								</td>
							</tr>
							<tr>
								<th>アカウント名<b>※</b></th>
								<td>
									<input id="init-account" v-model="initAccount" type="text" />
									<p class="nb">設定後に変更はできません</p>
									<p class="error" v-if="error_initAccount">{{error_initAccount}}</p>
								</td>
							</tr>
							<tr>
								<th>アイコン画像</th>
								<td>
									<div id="profile_icon" class="avatar-lg">
										<span>
											<img id="preview_profile_icon">
										</span>
									</div>
									<input id="input_profile_icon" type="file" @change="change_profile_icon">
								</td>
							</tr>
							<tr>
								<th>背景画像</th>
								<td>
									<img id="preview_profile_back_image">
									<input id="input_profile_back_image" type="file" @change="change_profile_back_image">
								</td>
							</tr>
							<tr>
								<th>紹介文</th>
								<td>
									<textarea id="self_introduction" v-model="self_introduction" rows="5"></textarea>
								</td>
							</tr>
						</table>

						<div class="btns">
							<button type="submit" class="btn orange">設 定</button>
						</div>

					</form>

				</div>

			</div>
			<!-- <div class="dialog-close"><i class="far fa-times-circle"></i></div> -->
	
		</div>

	</div>
</template>


<script>

export default {

	data() {
		return{
			language: 1,
			initAccount: '',
			error_initAccount: null,

			self_introduction: ''
		}
	},

	methods: {

		initial_setting(){

			try {

				if(!this.initAccount){

					this.error_initAccount = 'アカウント名を入力して下さい'

				}else{

					this.error_initAccount = null

					this.$axios.$post('/initial_setting',
					{
						b2c_oid: this.$store.state.b2c_oid,
						b2c_login_form: 1,
						account_name: this.initAccount,
						language: this.language,
						profile_icon: $('#preview_profile_icon').attr('src'),
						profile_back_image: $('#preview_profile_back_image').attr('src'),
						self_introduction: this.self_introduction
					})
					.then((res) => {

						console.log(res.data.account_name);

						// localStorage.setItem('rakun-account', res.data)

						this.$axios.$get('/account/' + res.data.account_name + '/' + res.data.account_name)
						.then((res) => {

							this.$store.commit("SET_LOGIN_ACCOUNT", res.data);

							localStorage.setItem('rakun-account', res.data.account_name);

							this.$store.commit("SET_INIT_SETTING", false);
							$('#init-setting').fadeOut();
							$('#overlay').fadeOut().removeClass('disabled');

							this.$router.push("/")
							
						});

					})

				}

			} catch (e) {
				
			}
		},

		change_profile_icon(e){

		    var reader = new FileReader();
		    reader.onload = function (e) {
		        $("#preview_profile_icon").attr('src', e.target.result);
		        $('#profile_icon').show();
		    }
		    reader.readAsDataURL(e.target.files[0]);

		},

		change_profile_back_image(e){

			var reader = new FileReader();
		    reader.onload = function (e) {
		        $("#preview_profile_back_image").attr('src', e.target.result);
		        $("#preview_profile_back_image").show();
		    }
		    reader.readAsDataURL(e.target.files[0]);

		},

		show_tippy_notice() {
			this.$store.commit("SET_TIPPY_NOTICE", true)

			tippy('#btn-notice', {
				content: document.querySelector('#dtl-notice'),
				placement: 'bottom',
				trigger: 'click',
				animation: 'shift-toward',
				arrow: true,
				theme: 'light-border',
				performance: true
			})
		},

		show_tippy_alert() {
			this.$store.commit("SET_TIPPY_ALERT", true)

			tippy('#btn-alert', {
				content: document.querySelector('#dtl-alert'),
				placement: 'bottom',
				trigger: 'click',
				animation: 'shift-toward',
				arrow: true,
				theme: 'light-border',
				performance: true
			})
		}
	}

}

</script>