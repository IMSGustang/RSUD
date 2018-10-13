const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'RSUD Labuang Baji Makassar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,
  // loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'element-ui/lib/theme-chalk/index.css' },
    { src: 'element-ui/lib/theme-chalk/display.css'},
    { src: 'swiper/dist/css/swiper.min.css' },
    { src: '@/assets/sass/labuangbaji.scss'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/vue-scroll-reveal', ssr: false },
    { src: '@/plugins/vue-preview', ssr: false },
    { src: '@/plugins/vue-swiper', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
