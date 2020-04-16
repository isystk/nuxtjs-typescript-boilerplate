import {Configuration} from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'universal',
  srcDir: "src/",

  /**
   * 環境変数
   * ビルド時に渡される env の値は、ここに記載することで文字列に置換される
   */
  env: {
  },
  
  router: {
    base: "/"
  },

  // https://ja.nuxtjs.org/faq/host-port/
  server: {
    port: 3000,
    // 他のパソコンから IP でつながるように host を変更
    host: "0.0.0.0" // デフォルト: localhost
  },
  head: {
    title: "nuxt-typescript-vuechart",
    meta: [
      { hid: "charset", charset: "utf-8" },
      { hid: "viewport", name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "nuxt-typescript-vuechart" },
      { hid: "noydir", name: "robots", content: "noydir" },
      { hid: "noodp", name: "robots", content: "noodp" },
      { hid: "index,follow", name: "robots", content: "index,follow" },
      { hid: "format-detection", name: "format-detection", content: "telephone=no"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "/plugins/fontawesome-free/css/all.min.css" },
      { rel: 'stylesheet', href: "/css/adminlte.min.css" },
    ],
    script: [
      { src: "/plugins/jquery/jquery.min.js", body: true},
      { src: "/plugins/bootstrap/js/bootstrap.bundle.min.js", body: true},
      { src: "/js/adminlte.min.js", body: true},
      { src: "/js/common.js", body: true},
    ],
  },
  // loading: { color: "#fff" },
  // ローディングを使わない場合はここを false
  loading: false,
  /**
   * Global CSS
   * 他の scss ファイルに依存しない scss はこちらに
   */
  css: [
    "@/assets/sass/app.scss",
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    ['@nuxtjs/moment', ['ja']]
  ],
  plugins: [
    '@/plugins/constants-inject.ts',
    '@/plugins/env-inject.ts',
    "@plugins/filter.js"
  ],
  /**
   * Build configuration
   * webpack のビルドに関する設定はここに書く
   */
  buildcd: {
  },
  buildModules: ["@nuxt/typescript-build"],
  manifest: {
    name: "nuxt-typescript-vuechart",
    title: "nuxt-typescript-vuechart",
    "og:title": "nuxt-typescript-vuechart",
    description: "nuxt-typescript-vuechart",
    lang: "ja",
    theme_color: "#fff",
    background_color: "#fff",
    display: "standalone",
    scope: "/",
    start_url: "/"
  },
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}

export default nuxtConfig
