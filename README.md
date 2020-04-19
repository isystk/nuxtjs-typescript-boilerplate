# nuxtjs-typescript-boilerplate

![GitHub issues](https://img.shields.io/github/issues/isystk/nuxtjs-typescript-boilerplate)
![GitHub forks](https://img.shields.io/github/forks/isystk/nuxtjs-typescript-boilerplate)
![GitHub stars](https://img.shields.io/github/stars/isystk/nuxtjs-typescript-boilerplate)
![GitHub license](https://img.shields.io/github/license/isystk/nuxtjs-typescript-boilerplate)

====

Nuxtjs・Typescript を利用したボイラープレートです。
1. 管理画面(AdminLTE、ログイン/ログアウト、一覧/詳細/登録/更新/削除、CSV/Excel/PDFダウンロード)
2. フロント画面（Vuejs、Solr検索API、会員登録、メール送信、ログイン/ログアウト）
3. バッチ（Solrインデックス生成、CSV読み込み/DB登録）

## Description

### ディレクトリ構造
```
.
├── src (Nuxt関連のソースファイル)
│    ├── @types
│    ├── assets
│    ├── common
│    ├── components
│    ├── interfaces
│    ├── middleware
│    ├── pages
│    ├── plugins
│    ├── static
│    ├── store
│    ├── test
│    └── utilities
├── .babelrc (Babel設定ファイル)
├── .vscode (VSCode設定ファイル)
├── jest.config.js
├── nuxt.config.ts
├── package.json
├── tools (サーバー起動用モジュール)
└── tsconfig.json
```

## VS. 

### 利用している技術
- Nuxtjs 2.12.2
- Typescript
- ESLint
- Jest
- VueChart
- AdminLTE3

## Demo

![DEMO](./demo.jpg "DEMO")

## Requirement

推奨するNodeのバージョン v13.13.0

## Usage

```bash
$ cd /path/to/nuxtjs-typescript-boilerplate
# run server
$ node ./tools/server.js
# run client
$ yarn run dev
```

#### 接続先情報
##### テストユーザー test@sample.com / password

| 接続先| URL|
| :-----| :---------------------------------------|
| DEMO画面| http://localhost:3000/|

## Install

```bash
$ cd /path/to/nuxtjs-typescript-boilerplate
# node inistall
$ nodebrew install v13.13.0
# yarn inistall
$ node install -g yarn
# module inistall
$ yarn
```

## Contribution

1. Fork it ( http://github.com/isystk/nuxtjs-typescript-boilerplate/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## 参考

| プロジェクト| 概要|
| :---------------------------------------| :-------------------------------|
| [公式ドキュメント - Nuxt.js](https://ja.nuxtjs.org/guide/)| 公式ドキュメント - Nuxt.js|
| [仕事ですぐに使えるTypeScript](https://future-architect.github.io/typescript-guide/)| 仕事ですぐに使えるTypeScript|

## Licence

[MIT](https://github.com/isystk/nuxtjs-typescript-boilerplate/blob/master/LICENSE)

## Author

[isystk](https://github.com/isystk)
