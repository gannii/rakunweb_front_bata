const pkg = require('./package')

process.env.DEBUG = 'nuxt:*'

module.exports = {
  mode: 'universal',

  debug: true,

  /*
  ** Headers of the page
  */
  head: {
    title: 'RAKUN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.4.2/css/all.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
      { src: 'https://unpkg.com/tippy.js@3/dist/tippy.all.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  // loading: '@/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/css/styles.css' },
    { src: '@/assets/css/light-border.css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/script", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',

    ['nuxt-i18n', {
      locales: [
        { code: 'ja', iso: 'ja_JP' },
        { code: 'en', iso: 'en-US' }
      ],
      defaultLocale: 'ja',
      vueI18n: {
        fallbackLocale: 'ja',
      },
      vueI18nLoader: true
    }]

  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://rakunwebstub.azurewebsites.net/api/v1'

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
