<template>
	<div>
  
		<main>

			<div id="profile">
				<div class="cover" :style="`background-image:url('${PROFILE_BACK_IMAGE}');`"></div>
				<div class="inner max1000">
					<div class="prof-head">
						<div class="avatar-lg">
							<span>
								<img :src="`${PROFILE_ICON}`" alt="">
							</span>
						</div>
						<div class="prof-dtl">
							<h2>
								<strong class="h-md">{{$store.state.profile.nickname}}</strong>
								<small class="h-sm">@{{$store.state.profile.account_name}}</small>
							</h2>
							<div id="prof-edit" class="trig-dialog" data-type="prof-edit">プロフィール編集</div>
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
						<p>{{$store.state.profile.self_introduction}}</p>
						<div class="art-cnts">
							<ul>
								<li><img src="@/assets/svg/icon_prof-followee.svg" alt=""><span><b>{{$store.state.profile.followed_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_prof-like.svg" alt=""><span><b>{{$store.state.profile.review_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_post.svg" alt=""><span><b>{{$store.state.profile.articles_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_prof-follower.svg" alt=""><span><b>{{$store.state.profile.following_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_prof-liked.svg" alt=""><span><b>{{$store.state.profile.reviewed_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_comment.svg" alt=""><span><b>{{$store.state.profile.comments_count}}</b></span></li>
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

      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-if="$store.state.profile_tabs === 'feed'">
        <div class="inner">
          <div class="sec-body">

            <article v-for="content in $store.state.profile_content" :key="content.article_id">
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

          </div>
        </div>
      </section>
<!-- FEED -->

<!-- CLIPS -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile_tabs === 'clip'">
        <div class="inner">
          <p>CLIPSです。</p>
        </div>
      </section>
<!-- CLIPS -->

<!-- 投稿記事 -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile_tabs === 'article'">
        <div class="inner">
          <p>投稿記事です。</p>
        </div>
      </section>
<!-- 投稿記事 -->

<!-- 投稿コメント -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile_tabs === 'comment'">
        <div class="inner">
          <p>投稿コメントです。</p>
        </div>
      </section>
<!-- 投稿コメント -->

<!-- 投げ銭 -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile_tabs === 'tip_history'">
        <div class="inner">
          <p>投げ銭です。</p>
        </div>
      </section>
<!-- 投げ銭 -->

<!-- フォロワー -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile_tabs === 'following'">
        <div class="inner">
          <p>フォロワーです。</p>
        </div>
      </section>
<!-- フォロワー -->

<!-- フォロー -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile_tabs === 'followed'">
        <div class="inner">
          <p>フォローです。</p>
        </div>
      </section>
<!-- フォロー -->

<!-- ブロック -->
      <section class="sec sec-list" :data-type="`${PROFILE_DATA_TYPE}`" v-else-if="$store.state.profile_tabs === 'block'">
        <div class="inner">
          <p>ブロックです。</p>
        </div>
      </section>
<!-- ブロック -->


		
		</main>

    <nav id="floating-menu">
      <ul>
        <li id="btn-tipping" class="trig-dialog trig-lg" data-type="tipping">
          <span>
            <img src="@/assets/svg/icon_tip.svg" alt="">
          </span>
        </li>
        <li id="btn-follow" class="trig-md" data-type="follow">
          <span>
            <img src="@/assets/svg/icon_prof-edit.svg" alt="">
          </span>
        </li>
        <li id="btn-submenu" class="trig-md">
          <span>
            <img src="@/assets/svg/icon_submenu.svg" alt="">
          </span>
        </li>
      </ul>
    </nav>

<!-- dialog - プロフィール編集 -->
    <div id="dialog-prof-edit" class="dialog">
      <div class="in">
        
        <div class="dialog-body">
          <table class="defor">
            <tbody>
              <tr>
                <th>ニックネーム</th>
                <td>
                  <input type="text" value="イワモトシンイチロウ">
                </td>
              </tr>
              <tr>
                <th>アイコン</th>
                <td>
                  <input type="file" value=""/>
                </td>
              </tr>
              <tr>
                <th>背景画像</th>
                <td>
                  <input type="file" value=""/>
                </td>
              </tr>
              <tr>
                <th>紹介文</th>
                <td>
                  <textarea class="form-control" rows="3"></textarea>
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
            <button type="button" class="btn orange">設 定</button>
          </div>
        </div>

      </div>
      <div class="dialog-close"><i class="far fa-times-circle"></i></div>
    </div>
<!-- dialog - プロフィール編集 -->

<!-- dialog - 投げ銭 -->
    <div id="dialog-tipping" class="dialog">
      <div class="in">
        
        <div class="dialog-head">
          <div class="avatar-lg">
            <span>
              <img :src="`${PROFILE_ICON}`" alt="">
            </span>
          </div>
          <h6 class="h-sm">{{$store.state.profile.nickname}}</h6>
        </div>

        <div class="dialog-body">

          <div class="tip-operation">

            <div id="tip-total">0</div>

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
              <textarea id="tip-message" class="form-control" rows="3" maxlength="500"></textarea>
            </dd>
          </dl>

        </div>

        <div class="dialog-foot">
          <p>
            <label>
              <input id="tip-check" type="checkbox">ニックネームさんへ上記金額で投げ銭します。
            </label>
          </p>

          <div class="btns">
            <button type="button" class="btn orange" @click="post_tip">送 金</button>
          </div>
        </div>

      </div>
      <div class="dialog-close"><i class="far fa-times-circle"></i></div>
    </div>
<!-- dialog - 投げ銭 -->


	</div>
</template>


<script>

/*
if (process.browser) {
  require('~/assets/js/profile.js');
}
*/

export default {

	head () {
    return {
    	title: this.$store.state.profile.nickname,
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
    		{ src: '//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js' }
    	],
    	link: [
    		{ rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css' },
    		{ rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css' }
    	]
    } 
  },

  components: { 
    
	},

	data() {
		return{
      
		}
	},

	async fetch ({ app, store, params }) {

    let [data_profile, data_content] = await Promise.all([
      app.$axios.$get('/account/${params.account_name}'),
      app.$axios.$post('/profile/feed',
        {
          params:{
            profile_account_name: params.account_name,
            page_num: 1,
            page_size: 4
          }
        })
    ])

    store.commit('SET_PROFILE', data_profile.data)

    store.commit('SET_PROFILE_DATA_TYPE', 'post')
    store.commit('SET_PROFILE_CONTENT', data_content.data.article_info)
    store.commit('SET_PROFILE_TABS', 'feed')


	},

	computed:{
	    PROFILE_BACK_IMAGE(){
			return this.$store.state.profile.profile_back_image
	    },
	    PROFILE_ICON(){
			return this.$store.state.profile.profile_icon
	    },

      PROFILE_DATA_TYPE(){
        return this.$store.state.profile_data_type
      }

	},

	mounted(){
      this.$store.dispatch("init_profile")
	},

	methods: {
    
// フィード取得
	    get_feed(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'feed')
	    },

// クリップ取得
	    get_clip(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'clip')
	    },

// 投稿記事取得
	    get_article(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'article')
	    },

// 投稿コメント取得
	    get_comment(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'post')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'comment')
	    },

// 投げ銭履歴取得
	    get_tip_history(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'tip')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'tip_history')
	    },

// フォロワー取得
	    get_following(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'user')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'following')
	    },

// フォロー取得
	    get_followed(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'user')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'followed')
	    },

// ブロック取得
	    get_block(e){
        this.$store.commit('SET_PROFILE_DATA_TYPE', 'user')
        // this.$store.commit('SET_PROFILE_CONTENT', res.data.article_info)
        this.$store.commit('SET_PROFILE_TABS', 'block')
	    },

// 投げ銭 実行
      post_tip(){

        var tipTotal = $('#tip-total').text(),
            tipMessage = $('#tip-message').val();

        if($("#tip-check").prop('checked')){
          
          if(tipTotal == 0){
            console.log('投げ銭を設定してください');
          }

          this.$axios.$post('/tip',
          {
            params:{
              login_account_name: this.$route.params.account_name,
              profile_account_name: this.$route.params.account_name,
              tip_amount: tipTotal,
              message: tipMessage
            }
          })
          .then((res) => {
            console.log(res);
          })
          
        }else{
          console.log('checkされてません');
        }

      }


	}

}

</script>

<style scoped>
main {
  padding-top: 0;
}

#profile .cover {
  width: 100%;
  height: 0;
  padding-top: 45%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#profile .prof-head {
  text-align: center;
  margin-top: -60px;
}

#profile .prof-head .avatar-lg span {
  border: 5px solid #fff;
}

#profile .prof-head .prof-dtl {
  margin: 10px 0 0;
}

#profile .prof-head .prof-dtl h2 strong,
#profile .prof-head .prof-dtl h2 small {
  display: block;
  line-height: 1.6;
}

#profile .prof-head .prof-dtl h2 small {
  font-weight: normal;
}

#profile .prof-head .prof-dtl #prof-edit {
  cursor: pointer;
  display: inline-block;
  margin: 15px 0 0;
  padding: 10px 30px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  -webkit-transition: border .3s;
  transition: border .3s;
}

#profile .prof-head .prof-dtl #prof-edit:hover {
  border: 1px solid black;
}

#profile .prof-head .prof-dtl .sns {
  margin: 20px 0 0;
}

#profile .prof-head .prof-dtl .sns ul li {
  display: inline-block;
  vertical-align: middle;
}

#profile .prof-head .prof-dtl .sns ul li a {
  display: block;
  line-height: 0;
  margin: 0 10px;
}

#profile .prof-head .prof-dtl .sns ul li a img {
  width: 25px;
  height: auto;
}

#profile .prof-body {
  margin: 30px 0 0;
}

#profile .prof-body p {
  text-align: left;
}

#profile .prof-body .art-cnts {
  text-align: center;
  margin: 20px 0 0;
}

#profile .prof-body .art-cnts ul {
  text-align: left;
  display: inline-block;
  max-width: 500px;
  letter-spacing: -.4em;
}

#profile .prof-body .art-cnts ul li {
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  padding: 10px 20px;
}

#profile .prof-body .art-cnts ul li img,
#profile .prof-body .art-cnts ul li span {
  display: inline-block;
  vertical-align: middle;
}

#profile .prof-body .art-cnts ul li img {
  width: 30px;
  height: 30px;
}

#profile .prof-body .art-cnts ul li span {
  text-align: center;
  width: calc(100% - 30px);
  letter-spacing: 0.1em;
  font-size: 15px;
  padding-left: 10px;
}

#genre-profile {
  margin: 40px 0 0;
  padding: 0 20px;
}

ul#slick-genre-profile {
  letter-spacing: -.4em;
}

ul#slick-genre-profile li {
  letter-spacing: normal;
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  padding: 0 5px;
}

ul#slick-genre-profile li a {
  letter-spacing: 0.1em;
  text-align: center;
  display: block;
  padding: 15px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  -webkit-transition: border .3s;
  transition: border .3s;
}

ul#slick-genre-profile li a:hover {
  border: 1px solid #9d9d9d;
}

ul#slick-genre-profile li a.active {
  color: #fff;
  border: 1px solid #FF1E00;
  background-color: #FF1E00;
}

.slick-slider .slick-track, .slick-slider .slick-list {
  background: #fff;
}

.slick-initialized .slick-slide {
  opacity: 0.6;
  /* 両サイドの画像を透過 */
}

.slick-initialized .slick-slide.slick-active {
  opacity: 1;
  /* センター画像を非透過 */
}

.slick-prev,
.slick-next {
  width: 35px;
  height: 35px;
}

.slick-prev {
  left: -35px;
}

.slick-next {
  right: -35px;
}

.slick-prev:before {
  content: '';
  display: block;
  position: relative;
  left: 12.5px;
  width: 25px;
  height: 25px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.slick-next:before {
  content: '';
  display: block;
  position: relative;
  right: 2.5px;
  width: 25px;
  height: 25px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

/*
.slick-prev::before, .slick-next::before{
  color: #000;
}
*/
@media screen and (min-width: 600px) {
  #profile .cover {
    padding-top: 40%;
  }
  #genre {
    margin: 50px 0 0;
  }
  ul#slick-genre-profile li {
    width: 25%;
  }
}

@media screen and (min-width: 800px) {
  #profile .cover {
    position: relative;
    padding-top: 35%;
  }
  #profile .cover:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.8)), color-stop(60%, rgba(0, 0, 0, 0)));
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%);
  }
  #profile .prof-head {
    margin-top: -140px;
    text-align: left;
    color: #fff;
  }
  #profile .prof-head .avatar-lg {
    display: inline-block;
    vertical-align: middle;
  }
  #profile .prof-head .avatar-lg span {
    border: 0;
  }
  #profile .prof-head .prof-dtl {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 125px);
    padding: 0 0 0 20px;
    margin: 0;
  }
  #profile .prof-head .prof-dtl h2 strong,
  #profile .prof-head .prof-dtl h2 small {
    display: inline-block;
    vertical-align: middle;
  }
  #profile .prof-head .prof-dtl #prof-edit {
    margin: 0;
    position: absolute;
    top: 50%;
    right: 0;
    border: 1px solid rgba(255, 255, 255, 0.6);
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }
  #profile .prof-head .prof-dtl #prof-edit:hover {
    border: 1px solid white;
  }
  #profile .prof-head .prof-dtl .sns {
    margin: 10px 0 0;
  }
  #profile .prof-body {
    margin: 60px 0 0;
  }
  #profile .prof-body .art-cnts ul li {
    width: 33.33%;
    padding: 15px 30px;
  }
  #genre {
    margin: 60px 0 0;
  }
  ul#slick-genre-profile li {
    width: 16.66%;
  }
}

@media screen and (min-width: 1000px) {
  #profile .cover {
    padding-top: 30%;
  }
  ul#slick-genre-profile li {
    width: 12.5%;
  }
}

@media screen and (min-width: 1200px) {
  #profile .cover {
    padding-top: 25%;
  }
}
</style>