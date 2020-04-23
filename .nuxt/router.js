import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6713dc1a = () => interopDefault(import('../src/pages/api/index.vue' /* webpackChunkName: "pages/api/index" */))
const _69789992 = () => interopDefault(import('../src/pages/chart/index.vue' /* webpackChunkName: "pages/chart/index" */))
const _1131ed61 = () => interopDefault(import('../src/pages/form/index.vue' /* webpackChunkName: "pages/form/index" */))
const _06bd7bce = () => interopDefault(import('../src/pages/api/coindesk.vue' /* webpackChunkName: "pages/api/coindesk" */))
const _a2759130 = () => interopDefault(import('../src/pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */))
const _5c94c3bc = () => interopDefault(import('../src/pages/auth/sign-off.vue' /* webpackChunkName: "pages/auth/sign-off" */))
const _11944d38 = () => interopDefault(import('../src/pages/chart/bar.vue' /* webpackChunkName: "pages/chart/bar" */))
const _3114103b = () => interopDefault(import('../src/pages/chart/circle.vue' /* webpackChunkName: "pages/chart/circle" */))
const _59f42bc2 = () => interopDefault(import('../src/pages/chart/line.vue' /* webpackChunkName: "pages/chart/line" */))
const _97d7392a = () => interopDefault(import('../src/pages/chart/radar.vue' /* webpackChunkName: "pages/chart/radar" */))
const _47e6ea86 = () => interopDefault(import('../src/pages/form/basic.vue' /* webpackChunkName: "pages/form/basic" */))
const _2a517aa8 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/nuxtjs-typescript-boilerplate/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/api",
    component: _6713dc1a,
    name: "api"
  }, {
    path: "/chart",
    component: _69789992,
    name: "chart"
  }, {
    path: "/form",
    component: _1131ed61,
    name: "form"
  }, {
    path: "/api/coindesk",
    component: _06bd7bce,
    name: "api-coindesk"
  }, {
    path: "/auth/sign-in",
    component: _a2759130,
    name: "auth-sign-in"
  }, {
    path: "/auth/sign-off",
    component: _5c94c3bc,
    name: "auth-sign-off"
  }, {
    path: "/chart/bar",
    component: _11944d38,
    name: "chart-bar"
  }, {
    path: "/chart/circle",
    component: _3114103b,
    name: "chart-circle"
  }, {
    path: "/chart/line",
    component: _59f42bc2,
    name: "chart-line"
  }, {
    path: "/chart/radar",
    component: _97d7392a,
    name: "chart-radar"
  }, {
    path: "/form/basic",
    component: _47e6ea86,
    name: "form-basic"
  }, {
    path: "/",
    component: _2a517aa8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
