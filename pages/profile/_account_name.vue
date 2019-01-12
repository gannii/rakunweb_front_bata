<template>
	<div>
  
		<main>

			<div id="profile">
				<div class="cover" :style="`background-image:url('${PROFILE_BACK_IMAGE}');`"></div>
				<div class="inner max1000">
					<div class="prof-head">
						<div class="avatar-xl">
							<span>
								<img :src="`${PROFILE_ICON}`" alt="">
							</span>
						</div>
						<div class="prof-dtl">
							<h2>
								<strong class="h-md">{{$store.state.profile.profile_info.nickname}}</strong>
								<small class="h-sm">@{{$store.state.profile.profile_info.account_name}}</small>
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
						<p>{{$store.state.profile.profile_info.self_introduction}}</p>
						<div class="art-cnts">
							<ul>
								<li><img src="@/assets/svg/icon_prof-followee.svg" alt=""><span><b>{{$store.state.profile.profile_info.followed_count}}</b></span></li>
								<li><img src="@/assets/svg/icon_prof-like.svg" alt=""><span><b>{{$store.state.profile.profile_info.review_count}}</b></span></li>
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

    <nav class="floating-menu btn-act">
      <ul>
        <li id="btn-tipping" class="trig-dialog icon-lg" data-type="tipping">
          <span>
            <img class="lg" src="@/assets/svg/icon_tip.svg" alt="">
          </span>
        </li>
        <li id="btn-follow" class="icon-md" data-type="follow">
          <span>
            <img class="lg" src="@/assets/svg/icon_prof-edit.svg" alt="">
          </span>
        </li>
        <li id="btn-submenu" class="icon-md">
          <span>
            <img class="lg" src="@/assets/svg/icon_submenu.svg" alt="">
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
          <h6 class="h-sm">{{$store.state.profile.profile_info.nickname}}</h6>
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

    store.commit('profile/SET_PROFILE_INFO', data_profile.data)

    store.commit('profile/SET_PROFILE_DATA_TYPE', 'post')
    store.commit('profile/SET_PROFILE_CONTENT', data_content.data.article_info)
    store.commit('profile/SET_PROFILE_TABS', 'feed')


	},

	computed:{
	    PROFILE_BACK_IMAGE(){
			return this.$store.state.profile.profile_back_image
	    },
	    PROFILE_ICON(){
			return this.$store.state.profile.profile_icon
	    },

      PROFILE_DATA_TYPE(){
        return this.$store.state.profile.profile_data_type
      }

	},

	mounted(){
      this.$store.dispatch("profile/init_profile")
	},

	methods: {
    
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

@import "~/assets/css/profile.css"

</style>