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
            
            <article v-for="content in $store.state.data_latest_article" :key="content.article_id">
              <div class="art-in">
                
                <div class="art-img" v-if="content.eyecatch_uri">
                  <nuxt-link :to="`/article/${content.article_id}`" :style="`background-image:url('${content.eyecatch_uri}');`">
                  </nuxt-link>
                </div>
                <div class="art-img" v-else>
                  <nuxt-link :to="`/article/${content.article_id}`" class="noimage">
                  </nuxt-link>
                </div>

                <div class="art-dtl">
                  <h3 class="h-sm">
                    <nuxt-link :to="`/article/${content.article_id}`">{{content.title}}</nuxt-link>
                  </h3>
                  <p>{{content.body}}</p>
                  <div class="art-tag">
                    <span v-for="tag in content.tags">#{{tag.tag}}</span>
                  </div>
                </div>
                <div class="art-meta">
                  <div class="art-user">
                    <div class="avatar-sm">
                      <nuxt-link :to="`/profile/${content.account_name}`">
                        
                        <span v-if="content.user.profile_icon">
                          <img :src="`${content.user.profile_icon}`" :alt="`${content.user.nickname}`">
                        </span>
                        <span v-else>
                          <img src="@/assets/img/user-noimage.png" :alt="`${content.user.nickname}`">
                        </span>

                        <i v-if="content.user.official == 1">
                          <img src="@/assets/svg/icon_star.svg" alt="">
                        </i>

                        <em>{{content.user.nickname}}</em>
                      </nuxt-link>
                    </div>
                    <time><i class="far fa-clock"></i>{{content.published_at | formatDate}}</time>
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
            
            <article v-for="content in $store.state.data_popular_article" :key="content.article_id">
              <div class="art-in">
                
                <div class="art-img" v-if="content.eyecatch_uri">
                  <nuxt-link :to="`/article/${content.article_id}`" :style="`background-image:url('${content.eyecatch_uri}');`">
                  </nuxt-link>
                </div>
                <div class="art-img" v-else>
                  <nuxt-link :to="`/article/${content.article_id}`" class="noimage">
                  </nuxt-link>
                </div>

                <div class="art-dtl">
                  <h3 class="h-sm">
                    <nuxt-link :to="`/article/${content.article_id}`">{{content.title}}</nuxt-link>
                  </h3>
                  <p>{{content.body}}</p>
                  <div class="art-tag">
                    <span v-for="tag in content.tags">#{{tag.tag}}</span>
                  </div>
                </div>
                <div class="art-meta">
                  <div class="art-user">
                    <div class="avatar-sm">
                      <nuxt-link :to="`/profile/${content.account_name}`">

                        <span v-if="content.user.profile_icon">
                          <img :src="`${content.user.profile_icon}`" :alt="`${content.user.nickname}`">
                        </span>
                        <span v-else>
                          <img src="@/assets/img/user-noimage.png" :alt="`${content.user.nickname}`">
                        </span>

                        <i v-if="content.user.official == 1">
                          <img src="@/assets/svg/icon_star.svg" alt="">
                        </i>

                        <em>{{content.user.nickname}}</em>
                      </nuxt-link>
                    </div>
                    <time><i class="far fa-clock"></i>{{content.published_at | formatDate}}</time>
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
            <article v-for="content in $store.state.data_popular_user" :key="content.account_name">
              <div class="art-in">
                <div class="art-avatar">
                  <div class="avatar-md">
                    <nuxt-link :to="`/profile/${content.account_name}`">

                      <span v-if="content.profile_icon">
                          <img :src="`${content.profile_icon}`" :alt="`${content.nickname}`">
                      </span>
                      <span v-else>
                        <img src="@/assets/img/user-noimage.png" :alt="`${content.nickname}`">
                      </span>

                      <i v-if="content.official == 1">
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


    // if(!store.state.data_latest_article){

      var account = '';
      if(store.state.login_account){
        account = store.state.login_account.account_name;
      }


      let [data_latest_article, data_popular_article, data_popular_tag, data_popular_user] = await Promise.all([

          app.$axios.$post('/home/latest_article',
          {
            language: 1,
            page_num: 1,
            page_size: 10,
            login_account_name: account
          }),

          app.$axios.$post('/home/popular_article',
          {
            language: 1,
            page_num: 1,
            page_size: 10,
            last_days: 100,
            login_account_name: account
          }),

          app.$axios.$post('/home/popular_tag',
          {
            language: 1,
            page_num: 1,
            page_size: 10,
            last_days: 100,
            tags_cnt: 4,
            login_account_name: account
          }),

          app.$axios.$post('/home/popular_user',
          {
            language: 1,
            page_num: 1,
            page_size: 10,
            last_days: 100,
            login_account_name: account
          })
      ])

      store.commit('SET_DATA_LATEST_ARTICLE', data_latest_article.data.article_info)

      store.commit('SET_DATA_POPULAR_ARTICLE', data_popular_article.data.article_info)

      store.commit('SET_DATA_POPULAR_TAG', data_popular_tag.data.article_info)

      store.commit('SET_DATA_POPULAR_USER', data_popular_user.data.user_info)

    // }

    // console.log(data_latest_article.data.article_info);
    
    store.commit('SET_DATA_TYPE', 'post')
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
      this.$store.commit('SET_DATA_TYPE', 'post')
      this.$store.commit('SET_IDX_TABS', 'latest_article')

      var account = '';
      if(this.$store.state.login_account){
        account = this.$store.state.login_account.account_name;
      }

      this.$axios.$post('/home/latest_article',
        {
          language: 1,
          page_num: 1,
          page_size: 10,
          login_account_name: account
      })
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_LATEST_ARTICLE', res.data.article_info)
      })
    },

  // 人気記事取得
    get_popular_article(e){
      this.$store.commit('SET_DATA_TYPE', 'post')
      this.$store.commit('SET_IDX_TABS', 'popular_article')

      var account = '';
      if(this.$store.state.login_account){
        account = this.$store.state.login_account.account_name;
      }

      this.$axios.$post('/home/popular_article',
      {
        language: 1,
        page_num: 1,
        page_size: 10,
        last_days: 100,
        login_account_name: account
      })
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_POPULAR_ARTICLE', res.data.article_info)
      })
    },

  // 人気タグ取得
    get_popular_tag(e){
      this.$store.commit('SET_DATA_TYPE', 'tag')
      this.$store.commit('SET_IDX_TABS', 'popular_tag')

      var account = '';
      if(this.$store.state.login_account){
        account = this.$store.state.login_account.account_name;
      }

      this.$axios.$post('/home/popular_tag',
      {
        language: 1,
        page_num: 1,
        page_size: 10,
        last_days: 100,
        tags_cnt: 4,
        login_account_name: account
      })
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_POPULAR_TAG', res.data.article_info)
      })
    },

  // 人気ユーザー取得
    get_popular_user(e){
      this.$store.commit('SET_DATA_TYPE', 'user')
      this.$store.commit('SET_IDX_TABS', 'popular_user')

      var account = '';
      if(this.$store.state.login_account){
        account = this.$store.state.login_account.account_name;
      }
      
      this.$axios.$post('/home/popular_user',
      {
        language: 1,
        page_num: 1,
        page_size: 10,
        last_days: 100,
        login_account_name: account
      })
      .then((res) => {
          console.log(res.data);
          this.$store.commit('SET_DATA_POPULAR_USER', res.data.user_info)
      })
    }


  }

}

</script>

<style scoped>

@import "~/assets/css/idx.css";

</style>
