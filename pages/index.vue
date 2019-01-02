<template>
  <div>
  
    <main>
    
      <nav id="genre">
        <div class="inner max1000">
          <ul id="slick-genre">
            <li>
              <a class="active" @click="get_latest_article">最新記事</a>
            </li>
            <li>
              <a  @click="get_popular_article">人気記事</a>
            </li>
            <li>
              <a  @click="get_popular_tag">人気タグ</a>
            </li>
            <li>
              <a  @click="get_popular_user">人気ユーザー</a>
            </li>
          </ul>
        </div>
      </nav>

      
      <section class="sec sec-list" :data-type="`${DATA_TYPE}`">
        <div class="inner">

          <div class="sec-head">
            <h2 class="h-md" v-if="$store.state.idx_tabs === 'latest_article'">
              <strong>最新記事</strong>
              <small>Newest Article</small>
            </h2>
            <h2 class="h-md" v-else-if="$store.state.idx_tabs === 'popular_article'">
              <strong>人気記事</strong>
              <small>Popular Article</small>
            </h2>
            <h2 class="h-md" v-else-if="$store.state.idx_tabs === 'popular_tag'">
              <strong>人気タグ</strong>
              <small>Popular Tag</small>
            </h2>
            <h2 class="h-md" v-else-if="$store.state.idx_tabs === 'popular_user'">
              <strong>人気ユーザー</strong>
              <small>Popular User</small>
            </h2>
          </div>

<!-- 最新記事 -->
          <div class="sec-body" v-if="$store.state.idx_tabs === 'latest_article'">
            
            <article v-for="content in $store.state.idx_content" :key="content.article_id">
              <div class="art-in">
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
                      <nuxt-link :to="`/profile/${content.account_name}`">
                        <span>
                          <img :src="`${content.profile_icon}`" :alt="`${content.nickname}`">
                        </span>
                        <em>{{content.nickname}}</em>
                      </nuxt-link>
                    </div>
                    <time :datetime="`${content.pubished_at}`"><i class="far fa-clock"></i>{{content.pubished_at}}</time>
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
          
<!-- 人気記事 -->
          <div class="sec-body" v-else-if="$store.state.idx_tabs === 'popular_article'">
            
            <article v-for="content in $store.state.idx_content" :key="content.article_id">
              <div class="art-in">
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
                      <nuxt-link :to="`/profile/${content.account_name}`">
                        <span>
                          <img :src="`${content.profile_icon}`" :alt="`${content.nickname}`">
                        </span>
                        <em>{{content.nickname}}</em>
                      </nuxt-link>
                    </div>
                    <time :datetime="`${content.pubished_at}`"><i class="far fa-clock"></i>{{content.pubished_at}}</time>
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

<!-- 人気タグ -->
          <div class="sec-body" v-else-if="$store.state.idx_tabs === 'popular_tag'">
              
          </div>

<!-- 人気ユーザ -->
          <div class="sec-body" v-else-if="$store.state.idx_tabs === 'popular_user'">
            <article v-for="content in $store.state.idx_content" :key="content.account_name">
              <div class="art-in">
                <div class="art-avatar">
                  <div class="avatar-md">
                    <nuxt-link :to="`/profile/${content.account_name}`">
                      <span>
                        <img :src="`${content.profile_icon}`" :alt="`${content.nickname}`">
                      </span>
                      <i>
                        <img src="@/assets/svg/icon_star.svg" alt="">
                      </i>
                    </nuxt-link>
                  </div>
                </div>
                <div class="art-info">
                  <h3 class="h-sm">
                    <nuxt-link :to="`/profile/${content.account_name}`">{{content.nickname}}</nuxt-link>
                  </h3>
                  <p>{{content.self_introduction}}</p>
                </div>
                <div class="art-meta">
                  <div class="art-cnts">
                    <ul>
                      <li><img src="@/assets/svg/icon_follower.svg" alt=""><b>{{content.followed_count}}</b></li>
                      <li><img src="@/assets/svg/icon_post.svg" alt=""><b>{{content.articles_count}}</b></li>
                      <li><img src="@/assets/svg/icon_rakun.svg" alt=""><b>{{content.appraised_value}}</b></li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

          </div>

        </div>
      </section>


    </main>

  </div>
</template>

<script>

/*
if (process.browser) {
  require('~/assets/js/idx.js');
}
*/

export default {
  
  head () {
    return {
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

  async fetch ({ app, store }) {
    let { data } = await app.$axios.$post('/home/latest_article')
    console.log(data);
    store.commit('SET_DATA_TYPE', 'post')
    store.commit('SET_IDX_CONTENT', data.article_info)
    store.commit('SET_IDX_TABS', 'latest_article')
  },

  async asyncData({ app }) {

  },

  created() {

  },

  computed:{

    DATA_TYPE(){
      return this.$store.state.data_type
    }
    
  },

  mounted(){

    this.$store.dispatch("init_idx")

  },

  methods: {
    
  // 最新記事取得
    get_latest_article(e){
      this.$axios.$post('/home/latest_article')
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_TYPE', 'post')
          this.$store.commit('SET_IDX_CONTENT', res.data.article_info)
          this.$store.commit('SET_IDX_TABS', 'latest_article')
      })
    },

  // 人気記事取得
    get_popular_article(e){
      this.$axios.$post('/home/popular_article')
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_TYPE', 'post')
          this.$store.commit('SET_IDX_CONTENT', res.data.article_info)
          this.$store.commit('SET_IDX_TABS', 'popular_article')
      })
    },

  // 人気タグ取得
    get_popular_tag(e){
      this.$axios.$post('/home/popular_tag')
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_TYPE', 'tag')
          this.$store.commit('SET_IDX_CONTENT', res.data.article_info)
          this.$store.commit('SET_IDX_TABS', 'popular_tag')
      })
    },

  // 人気ユーザー取得
    get_popular_user(e){
      this.$axios.$post('/home/popular_user')
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_TYPE', 'user')
          this.$store.commit('SET_IDX_CONTENT', res.data.user_info)
          this.$store.commit('SET_IDX_TABS', 'popular_user')
      })
    }


  }

}

</script>

<style scoped>
#genre {
  margin: 10px 0 0;
  padding: 0 20px;
}

ul#slick-genre {
  letter-spacing: -.4em;
}

ul#slick-genre li {
  letter-spacing: normal;
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  padding: 0 5px;
}

ul#slick-genre li a {
  letter-spacing: 0.1em;
  text-align: center;
  display: block;
  padding: 15px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  -webkit-transition: border .3s;
  transition: border .3s;
}

ul#slick-genre li a:hover {
  border: 1px solid #9d9d9d;
}

ul#slick-genre li a.active {
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
  ul#slick-genre li {
    width: 33.33%;
  }
}

@media screen and (min-width: 800px) {
  ul#slick-genre li {
    width: 25%;
  }
}
</style>
