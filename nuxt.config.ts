import { Configuration as NuxtConfiguration } from "@nuxt/types";
import webpack, {
  Configuration as WebpackConfiguration,
  Options as WebpackOptions,
  Plugin as WebpackPlugin
} from "webpack";

const pkg = require("./package");

const PUBLIC_PATH = process.env.PUBLIC_PATH || "/";

const nuxtConfig: NuxtConfiguration = {
  mode: "universal",
  srcDir: "src/",

  /**
   * 環境変数
   * ビルド時に渡される env の値は、ここに記載することで文字列に置換される
   */
  env: {},

  router: {
    // リロードのタイミングでは SSR 側で実行される
    // ルーティングの度に CSR 側で実行される
    // ログインの必要のない画面でも middleware が実行されるので注意が必要
    // middleware: 'check-auth',

    base: PUBLIC_PATH,

    middleware: "i18n"
  },

  // https://ja.nuxtjs.org/faq/host-port/
  server: {
    port: 3000,
    // 他のパソコンから IP でつながるように host を変更
    host: "0.0.0.0" // デフォルト: localhost
  },
  head: {
    titleTemplate: "%s | " + pkg.name,
    meta: [
      { hid: "charset", charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      },
      { hid: "noydir", name: "robots", content: "noydir" },
      { hid: "noodp", name: "robots", content: "noodp" },
      { hid: "index,follow", name: "robots", content: "index,follow" },
      {
        hid: "format-detection",
        name: "format-detection",
        content: "telephone=no"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: PUBLIC_PATH + "favicon.ico" }
    ]
  },
  // loading: { color: "#fff" },
  // ローディングを使わない場合はここを false
  loading: false,
  /**
   * Global CSS
   * 他の scss ファイルに依存しない scss はこちらに
   */
  css: [
    "admin-lte/plugins/fontawesome-free/css/all.min.css",
    "admin-lte/dist/css/adminlte.min.css",
    "@/assets/sass/app.scss"
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/pwa",
    ["@nuxtjs/moment", ["ja"]]
  ],
  plugins: [
    "@/plugins/libraries/sanitize-html.ts",
    "@/plugins/libraries/lodash.ts",
    "@/plugins/libraries/moment.ts",
    "@/plugins/libraries/axios.ts",
    "@/plugins/constants-inject.ts",
    "@/plugins/env-inject.ts",
    "@/plugins/locale/i18n.ts",
    { src: "@/plugins/libraries/adminlte.ts", mode: "client" }
  ],
  /**
   * Build configuration
   * webpack のビルドに関する設定はここに書く
   */
  build: {
    // vue-devtools を許可するかどうかを設定します
    // https://ja.nuxtjs.org/api/configuration-build/#devtools
    devtools: true,

    plugins: [
      new webpack.ProvidePlugin({
        // グローバルなモジュール
        jQuery: "jquery",
        $: "jquery"
      })
    ],

    /**
     * You can extend webpack config here
     */
    extend(
      config: WebpackConfiguration,
      ctx: {
        isDev: boolean;
        isClient: boolean;
        isServer: boolean;
        loaders: any;
      }
    ): void {
      // ホットリロード時にESLintを実行させる
      if (ctx.isDev && process.client) {
        if (config.module) {
          config.module.rules.push({
            enforce: "pre",
            test: /\.(js|ts|vue)$/,
            loader: "eslint-loader",
            exclude: /(node_modules)/
          });
        }
      }
    },
    // extractCSS: isProduction,

    terser: {
      terserOptions: {
        compress: {
          // nuxt buildでproductionビルドするときにconsole.logを削除する
          // https://www.lancard.com/blog/2019/04/05/delete_console-log_at_nuxt_build/
          drop_console: process.env.envName === "production" // eslint-disable-line @typescript-eslint/camelcase
        }
      }
    }
  },
  buildcd: {},
  buildModules: ["@nuxt/typescript-build"],
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // 外部ドメインのAPIを利用するためのCORS対応
  // See https://blog.ikedaosushi.com/entry/2019/02/09/013404
  proxy: {
    "/coindesk/": {
      target: "http://api.coindesk.com",
      pathRewrite: { "^/coindesk/": "/" }
    }
  }
};

export default nuxtConfig;
