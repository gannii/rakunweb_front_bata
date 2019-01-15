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
              <a @click="get_popular_article">人気記事</a>
            </li>
            <li>
              <a @click="get_popular_tag">人気タグ</a>
            </li>
            <li>
              <a @click="get_popular_user">人気ユーザー</a>
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
                  <div class="art-tag" v-for="tag in content.tags">
                    <span>#{{tag.tag}}</span>
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
                  <div class="art-tag" v-for="tag in content.tags">
                    <span>#{{tag.tag}}</span>
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
    let { data } = await app.$axios.$post('/home/latest_article',
      {
        language: 1,
        page_num: 1,
        page_size: 4,
        login_account_name: "yamada307"
    })
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
      this.$axios.$post('/home/latest_article',
        {
          language: 1,
          page_num: 1,
          page_size: 4,
          login_account_name: "yamada307"
      })
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_TYPE', 'post')
          this.$store.commit('SET_IDX_CONTENT', res.data.article_info)
          this.$store.commit('SET_IDX_TABS', 'latest_article')
      })
    },

  // 人気記事取得
    get_popular_article(e){
      this.$axios.$post('/home/popular_article',
      {
        language: 1,
        page_num: 1,
        page_size: 4,
        last_days: 100,
        login_account_name: "yamada307"
      })
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_TYPE', 'post')
          this.$store.commit('SET_IDX_CONTENT', res.data.article_info)
          this.$store.commit('SET_IDX_TABS', 'popular_article')
      })
    },

  // 人気タグ取得
    get_popular_tag(e){
      this.$axios.$post('/home/popular_tag',
      {
        language: 1,
        page_num: 1,
        page_size: 4,
        last_days: 100,
        tags_cnt: 4,
        login_account_name: "yamada307"
      })
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_TYPE', 'tag')
          this.$store.commit('SET_IDX_CONTENT', res.data.article_info)
          this.$store.commit('SET_IDX_TABS', 'popular_tag')
      })
    },

  // 人気ユーザー取得
    get_popular_user(e){
      this.$axios.$post('/home/popular_user',
      {
        language: 1,
        page_num: 1,
        page_size: 4,
        last_days: 100,
        login_account_name: "yamada307"
      })
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

@import "~/assets/css/idx.css";

</style>
