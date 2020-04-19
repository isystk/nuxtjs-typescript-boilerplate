import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69789992 = () => interopDefault(import('../src/pages/chart/index.vue' /* webpackChunkName: "pages/chart/index" */))
const _1131ed61 = () => interopDefault(import('../src/pages/form/index.vue' /* webpackChunkName: "pages/form/index" */))
const _a2759130 = () => interopDefault(import('../src/pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */))
const _5c94c3bc = () => interopDefault(import('../src/pages/auth/sign-off.vue' /* webpackChunkName: "pages/auth/sign-off" */))
const _59f42bc2 = () => interopDefault(import('../src/pages/chart/line.vue' /* webpackChunkName: "pages/chart/line" */))
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
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chart",
    component: _69789992,
    name: "chart"
  }, {
    path: "/form",
    component: _1131ed61,
    name: "form"
  }, {
    path: "/auth/sign-in",
    component: _a2759130,
    name: "auth-sign-in"
  }, {
    path: "/auth/sign-off",
    component: _5c94c3bc,
    name: "auth-sign-off"
  }, {
    path: "/chart/line",
    component: _59f42bc2,
    name: "chart-line"
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
