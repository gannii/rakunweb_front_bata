<template>
	<div>
  
		<main>

			<div id="profile">

				<div v-if="$store.state.profile.profile_info.profile_back_image" class="cover" :style="`background-image:url('${PROFILE_BACK_IMAGE}');`"></div>
        <div v-else class="cover nobkimage"></div>

				<div class="inner max1000">
					<div class="prof-head">
						<div class="avatar-xl">

              <span v-if="$store.state.profile.profile_info.profile_icon">
                <img :src="`${$store.state.profile.profile_info.profile_icon}`" :alt="`${$store.state.profile.profile_info.nickname}`">
              </span>
							<span v-else>
								<img src="@/assets/img/user-noimage.png" :alt="`${$store.state.profile.profile_info.nickname}`">
							</span>

						</div>
						<div class="prof-dtl">
							<h2>
								<strong class="h-md">{{$store.state.profile.profile_info.nickname}}</strong>
								<small class="h-sm">@{{$store.state.profile.profile_info.account_name}}</small>
							</h2>

							<div id="prof-edit" class="trig-dialog" data-type="prof-edit" v-if="$store.state.profile.myself">プロフィール編集</div>
							
              <div class="sns">
								<ul>
									<li>
										<a href="" target="_blank">
											<img class="smt" src="@/assets/svg/icon_facebook-black.svg" alt="Facebook">
											<img class="pc" src="@/assets/svg/icon_facebook-white.svg" alt="Facebook">
										</a>
									</li>
									<li>
										<a href="" target="_blank">
											<img class="smt" src="@/assets/svg/icon_twitter-black.svg" alt="Twitter">
											<img class="pc" src="@/assets/svg/icon_twitter-white.svg" alt="Twitter">
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="prof-body">
						<p>{{$store.state.profile.profile_info.self_introduction}}</p>
						<div class="art-cnts">
							<ul>
								<li><img src="@/assets/svg/icon_prof-followee.svg" alt=""><span><b>{{$store.state.profile.profile_info.followed_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_prof-like.svg" alt=""><span><b>{{$store.state.profile.profile_info.reviewing_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_post.svg" alt=""><span><b>{{$store.state.profile.profile_info.articles_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><span><b>{{$store.state.profile.profile_info.following_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_prof-liked.svg" alt=""><span><b>{{$store.state.profile.profile_info.reviewed_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_comment.svg" alt=""><span><b>{{$store.state.profile.profile_info.comments_count}}</b></span></li>
							</ul>
						</div>
					</div>
				</div>
			</div><!-- #profile -->

			<nav id="genre-profile">
				<div class="inner">
					<ul id="slick-genre-profile">
						<li>
							<a class="active" @click="get_feed">FEED</a>
						</li>
						<li>
							<a @click="get_clip">CLIPS</a>
						</li>
						<li>
							<a @click="get_article">投稿記事</a>
						</li>
						<li>
							<a @click="get_comment">投稿コメント</a>
						</li>
						<li>
							<a @click="get_tip_history">投げ銭履歴</a>
						</li>
						<li>
							<a @click="get_following">フォロワー</a>
						</li>
						<li>
							<a @click="get_followed">フォロー</a>
						</li>
						<li>
							<a @click="get_block">ブロック</a>
						</li>
					</ul>
				</div>
			</nav>


<!-- FEED -->

      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-if="$store.state.profile.profile_tabs === 'feed'">
        <div class="inner">
          <div class="sec-body">
<!--
            <article v-for="content in $store.state.profile.profile_content" :key="content.article_id">
              <div class="art-in">
                <div class="art-exp">
                  <p>{{content.feed_info.nickname_from}}さんが{{content.feed_info.action_at}}に記事を投稿しました。</p>
                </div>
                <div class="art-img">
                  <a href="" :style="`background-image:url('${content.eyecatch_uri}');`">
                  </a>
                </div>
                <div class="art-dtl">
                  <h3 class="h-sm">
                    <a href="#">{{content.title}}</a>
                  </h3>
                  <p>{{content.body}}</p>
                  <div class="art-tag">
                    <span>#くりぷ豚</span><span>#ゲーム</span><span>#Dappsゲーム</span><span>#育成</span><span>#イーサリアム</span>
                  </div>
                </div>
                <div class="art-meta">
                  <div class="art-user">
                    <div class="avatar-sm">
                      <nuxt-link :to="`/profile/${content.feed_info.account_name}`">
                        <span>
                          <img :src="`${content.profile_icon}`" :alt="`${content.nickname}`">
                        </span>
                        <em>{{content.nickname}}</em>
                      </nuxt-link>
                    </div>
                    <time :datetime="`${content.published_at}`"><i class="far fa-clock"></i>{{content.published_at}}</time>
                  </div>
                  <div class="art-cnts">
                    <ul>
                      <li><img src="@/assets/svg/icon_comment.svg" alt=""><b>{{content.comments_count}}</b></li>
                      <li><img src="@/assets/svg/icon_like.svg" alt=""><b>{{content.reviews_count}}</b></li>
                      <li><img src="@/assets/svg/icon_share.svg" alt=""><b>{{content.shares_count}}</b></li>
                      <li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{content.appraised_value}}</b></li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
-->
          </div>
        </div>
      </section>
<!-- FEED -->

<!-- CLIPS -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile.profile_tabs === 'clip'">
        <div class="inner">
          <p>CLIPSです。</p>
        </div>
      </section>
<!-- CLIPS -->

<!-- 投稿記事 -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile.profile_tabs === 'article'">
        <div class="inner">
          <p>投稿記事です。</p>
        </div>
      </section>
<!-- 投稿記事 -->

<!-- 投稿コメント -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile.profile_tabs === 'comment'">
        <div class="inner">
          <p>投稿コメントです。</p>
        </div>
      </section>
<!-- 投稿コメント -->

<!-- 投げ銭 -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile.profile_tabs === 'tip_history'">
        <div class="inner">
          <p>投げ銭です。</p>
        </div>
      </section>
<!-- 投げ銭 -->

<!-- フォロワー -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile.profile_tabs === 'following'">
        <div class="inner">
          <p>フォロワーです。</p>
        </div>
      </section>
<!-- フォロワー -->

<!-- フォロー -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile.profile_tabs === 'followed'">
        <div class="inner">
          <p>フォローです。</p>
        </div>
      </section>
<!-- フォロー -->

<!-- ブロック -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile.profile_tabs === 'block'">
        <div class="inner">
          <p>ブロックです。</p>
        </div>
      </section>
<!-- ブロック -->


		
		</main>

    <nav class="floating-menu btn-act" v-if="!$store.state.profile.myself">
      <ul>
        <li id="btn-tipping" class="trig-dialog icon-lg" data-type="tipping">
          <span>
            <img class="lg" src="@/assets/svg/icon_tip.svg" alt="">
          </span>
        </li>
        
        <li id="btn-follow" class="icon-md on" data-type="follow" v-if="$store.state.profile.profile_info.is_followed">
          <span>
            <img class="lg" src="@/assets/svg/icon_prof-edit-white.svg" alt="">
          </span>
        </li>
        <li v-else id="btn-follow" class="icon-md" data-type="follow">
          <span @click="fn_follow">
            <img class="lg" src="@/assets/svg/icon_prof-edit.svg" alt="">
          </span>
        </li>

        <li class="icon-md">
          <span id="btn-submenu"　@click="show_tippy_profsubmenu">
            <img class="lg" src="@/assets/svg/icon_submenu.svg" alt="">
          </span>
        </li>

      </ul>
    </nav>


<!-- dialog - プロフィール編集 -->
    <div id="dialog-prof-edit" class="dialog">
      <div class="in">
        
        <form @submit.prevent="fn_profile_edit">

          <div class="dialog-body">
            <table class="defor">
              <tbody>
                <tr>
                  <th>ニックネーム</th>

                  <td v-if="$store.state.login_account.nickname">
                    <input type="text" id="edit_nickname" v-model="edit_nickname">
                  </td>
                  <td v-else>
                    <input type="text" v-model="edit_nickname">
                  </td>

                </tr>
                <tr>
                  <th>アイコン</th>

                  <td v-if="$store.state.login_account.profile_icon">
                    <div id="profile_icon" class="avatar-lg">
                      <span>
                        <img id="preview_profile_icon" :src="`${$store.state.login_account.profile_icon}`">
                      </span>
                    </div>
                    <label for="input_profile_icon" class="label_btn">
                      <em>変更する</em>
                      <input id="input_profile_icon" type="file" value="変更" @change="change_profile_icon" style="display:none;">
                    </label>
                  </td>
                  <td v-else>
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

                  <td v-if="$store.state.login_account.profile_back_image">
                    <img id="preview_profile_back_image" :src="`${$store.state.login_account.profile_back_image}`">
                    <label for="input_profile_back_image" class="label_btn">
                      <em>変更する</em>
                      <input id="input_profile_back_image" type="file" @change="change_profile_back_image" style="display:none;">
                    </label>
                  </td>
                  <td v-else>
                    <img id="preview_profile_back_image">
                    <input id="input_profile_back_image" type="file" @change="change_profile_back_image">
                  </td>

                </tr>
                <tr>
                  <th>紹介文</th>
                  <td>
                    <textarea class="form-control" rows="3" v-model="edit_selfIntroduction"></textarea>
                  </td>
                </tr>
                <tr>
                  <th>Facebook URL</th>
                  <td>
                    <input type="text" value="https://facebook.com/***">
                  </td>
                </tr>
                <tr>
                  <th>Twitter URL</th>
                  <td>
                    <input type="text" value="https://twitter.com/***">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="dialog-foot">
            <div class="btns">
              <button type="submit" class="btn orange">設 定</button>
            </div>
          </div>

        </form>

      </div>
      <div class="dialog-close"><i class="far fa-times-circle"></i></div>
    </div>
<!-- dialog - プロフィール編集 -->

<!-- dialog - 投げ銭 -->
    <div id="dialog-tipping" class="dialog">
      <div class="in">
        
        <div class="dialog-head">
          <div class="avatar-lg">

            <span v-if="$store.state.profile.profile_info.profile_icon">
              <img :src="`${$store.state.profile.profile_info.profile_icon}`" :alt="`${$store.state.profile.profile_info.nickname}`">
            </span>
            <span v-else>
              <img src="@/assets/img/user-noimage.png" :alt="`${$store.state.profile.profile_info.nickname}`">
            </span>

          </div>
          <h6 class="h-sm">{{$store.state.profile.profile_info.nickname}}</h6>
        </div>

        <div class="dialog-body">

          <div class="tip-operation">

            <div id="tip-total">0</div>
            <p class="error" v-if="error_tipTotal">{{error_tipTotal}}</p>

            <div class="tip-dtl">
              <ul>
                <li>
                  <div class="li-in">
                    <div class="li-img">
                      <img src="@/assets/svg/tip_lg.svg" alt="">
                    </div>
                    <div class="li-dtl">
                      <div class="tip-num">0</div>
                      <div id="tip-lg" class="tip-controller">
                        <span class="plus"><i class="fas fa-plus"></i></span><span class="minus"><i class="fas fa-minus"></i></span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="li-in">
                    <div class="li-img">
                      <img src="@/assets/svg/tip_md.svg" alt="">
                    </div>
                    <div class="li-dtl">
                      <div class="tip-num">0</div>
                      <div id="tip-md" class="tip-controller">
                        <span class="plus"><i class="fas fa-plus"></i></span><span class="minus"><i class="fas fa-minus"></i></span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="li-in">
                    <div class="li-img">
                      <img src="@/assets/svg/tip_sm.svg" alt="">
                    </div>
                    <div class="li-dtl">
                      <div class="tip-num">0</div>
                      <div id="tip-sm" class="tip-controller">
                        <span class="plus"><i class="fas fa-plus"></i></span><span class="minus"><i class="fas fa-minus"></i></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <dl>
            <dt>メッセージ</dt>
            <dd>
              <textarea id="tip-message" class="form-control" rows="3" maxlength="500" v-model="tipMessage"></textarea>
            </dd>
          </dl>

        </div>

        <div class="dialog-foot">
          <p>
            <label>
              <input id="tip-check" type="checkbox">ニックネームさんへ上記金額で投げ銭します。
            </label>
          </p>
          <p class="error" v-if="error_tipChecked">{{error_tipChecked}}</p>

          <div class="btns">
            <button type="button" class="btn orange" @click="fn_post_tip">送 金</button>
          </div>
        </div>

      </div>
      <div class="dialog-close"><i class="far fa-times-circle"></i></div>
    </div>
<!-- dialog - 投げ銭 -->


<!-- プロフィール - サブメニュー -->
<div id="dtl-submenu" class="tooltips">
  <div v-if="$store.state.profile.tippy_profsubmenu">
    <ul>
      <li v-if="$store.state.profile.profile_info.is_followed" @click="remove_this_follow">フォロー解除</li>
      <li v-if="$store.state.profile.profile_info.is_blocked" @click="remove_this_unblock">ブロック解除</li>
      <li v-else @click="remove_this_block">ブロック</li>
    </ul>
  </div>
</div>


	</div>
</template>


<script>

/*
if (process.browser) {
  require('~/assets/js/profile.js');
}
*/

export default {

  data() {
    return{

    // 投げ銭
      tipMessage: '',
      error_tipTotal: '',
      error_tipChecked: '',

    // プロフィール編集
      edit_nickname: this.$store.state.profile.profile_info.nickname,
      edit_selfIntroduction: this.$store.state.profile.profile_info.self_introduction
    }
  },

	head () {
    return {
    	title: this.$store.state.profile.profile_info.nickname,
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

  components: { 
    
	},

	async fetch ({ app, store, params }) {

    var account = '';
    if(store.state.login_account){
      account = '/' + store.state.login_account.account_name;
    }

    let [data_profile, data_content] = await Promise.all([
      app.$axios.$get('/account/' + params.account_name + account),
      app.$axios.$post('/profile/feed',
        {
          profile_account_name: params.account_name,
          page_num: 1,
          page_size: 4
        })
    ])

    // console.log(data_profile.data);
    // console.log(data_content.data.article_info);

    store.commit('profile/SET_PROFILE_INFO', data_profile.data)

    store.commit('profile/SET_PROFILE_DATA_TYPE', 'post')
    store.commit('profile/SET_PROFILE_CONTENT', data_content.data.article_info)
    store.commit('profile/SET_PROFILE_TABS', 'feed')

    store.commit('profile/SET_MYSELF', '')
    if(store.state.login_account){
      if(params.account_name == store.state.login_account.account_name){
        store.commit('profile/SET_MYSELF', true)
      }
    }

	},

	computed:{

      PROFILE_ICON(){
      return this.$store.state.profile.profile_info.profile_icon
      },
	    PROFILE_BACK_IMAGE(){
			return this.$store.state.profile.profile_info.profile_back_image
	    },
	    
      PROFILE_DATA_TYPE(){
        return this.$store.state.profile.profile_info.profile_data_type
      }

	},

	mounted(){
      this.$store.dispatch("profile/init_profile")

	},

	methods: {

    // 投げ銭 実行
      fn_post_tip(){

        if($('#tip-total').text() == 0){

          this.error_tipTotal = '投げ銭を設定してください'

        }else{

          this.error_tipTotal = ''

          if(!$("#tip-check").prop('checked')){

            this.error_tipChecked = 'チェックをいれてください'

          }else{

            this.error_tipChecked = ''

            this.$axios.$post('/tip',
            {
              login_account_name: this.$store.state.login_account.account_name,
              profile_account_name: this.$route.params.account_name,
              tip_amount: $('#tip-total').text(),
              message: this.tipMessage
            })
            .then((res) => {
              console.log(res);

              $('.dialog').hide();
              $('#overlay').fadeOut();

            })
            .catch(function(error) {
              console.log(error);
              $('.dialog').hide();
              $('#overlay').fadeOut();
              if(error){
                alert('残高不足のため送金出来ませんでした')
              }
            });

          }

        }

      },


    // プロフィール 変更（submit）
      fn_profile_edit() {

        var params = {
            nickname: this.edit_nickname,
            self_introduction: this.edit_selfIntroduction,
            facebook_account_name: "facebookacccount",
            twitter_account_name: "twitteracccount"
        };

        var obj_profile_icon = document.getElementById("preview_profile_icon");
        var src_profile_icon = obj_profile_icon.src;
        var obj_profile_back_image = document.getElementById("preview_profile_back_image");
        var src_profile_back_image = obj_profile_back_image.src;

        if(src_profile_icon.indexOf('https') == -1) {
          params["profile_icon"] = $('#preview_profile_icon').attr('src');
        }

        if(src_profile_back_image.indexOf('https') == -1) {
          params["profile_back_image"] = $('#preview_profile_back_image').attr('src');
        }

        $('.dialog').hide();
        $('#overlay').fadeOut();

        this.$axios.$patch('/account/' + this.$store.state.login_account.account_name, params)
        .then((res) => {
          console.log(res);

          this.$axios.$get('/account/' + this.$route.params.account_name + '/' + this.$store.state.login_account.account_name)
          .then((res) => {
            this.$store.commit('profile/SET_PROFILE_INFO', res.data)
            this.$store.commit('SET_LOGIN_ACCOUNT', res.data)
          })

        })

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
    
// フィード取得
	    get_feed(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'feed')
	    },

// クリップ取得
	    get_clip(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'clip')
	    },

// 投稿記事取得
	    get_article(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'article')
	    },

// 投稿コメント取得
	    get_comment(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'comment')
	    },

// 投げ銭履歴取得
	    get_tip_history(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'tip')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'tip_history')
	    },

// フォロワー取得
	    get_following(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'user')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'following')
	    },

// フォロー取得
	    get_followed(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'user')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'followed')
	    },

// ブロック取得
	    get_block(e){
        this.$store.commit('profile/SET_PROFILE_DATA_TYPE', 'user')
        // this.$store.commit('profile/SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('profile/SET_PROFILE_TABS', 'block')
	    },


// フォローする
      fn_follow() {

        this.$store.commit('profile/UPDATE_FOLLOW', true)

        this.$axios.$put('/follow/' + this.$route.params.account_name + '/' + this.$store.state.login_account.account_name)
        .then((res) => {
          console.log(res);
        })

      },

// サブメニューを表示する
      show_tippy_profsubmenu() {

        this.$store.commit("profile/SET_TIPPY_PROFSUBMENU", true)

        tippy('#btn-submenu', {
          content: document.querySelector('#dtl-submenu'),
          placement: 'left',
          trigger: 'click',
          animation: 'shift-toward',
          arrow: true,
          theme: 'light-border'
          // hideOnClick: 'persistent'
        })

      },

// フォロー解除
      remove_this_follow() {

        this.$store.commit('profile/UPDATE_FOLLOW', false)

        this.$axios.$delete('/follow/' + this.$route.params.account_name + '/' + this.$store.state.login_account.account_name)
        .then((res) => {
          console.log(res);
          
        })
      
      },

// ブロック
      remove_this_block() {
        this.$store.commit('profile/UPDATE_BLOCK', true)

        this.$axios.$put('/block/' + this.$route.params.account_name + '/' + this.$store.state.login_account.account_name)
        .then((res) => {
          console.log(res);
        })

      },

// ブロック解除
      remove_this_unblock() {
        this.$store.commit('profile/UPDATE_BLOCK', false)

        this.$axios.$delete('/block/' + this.$route.params.account_name + '/' + this.$store.state.login_account.account_name)
        .then((res) => {
          console.log(res);
          
        })

      }


	}

}

</script>

<style scoped>

@import "~/assets/css/profile.css"

</style>