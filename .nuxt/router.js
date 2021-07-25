import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0af73de8 = () => interopDefault(import('../src/pages/api/index.vue' /* webpackChunkName: "pages/api/index" */))
const _6e29b5ec = () => interopDefault(import('../src/pages/chart/index.vue' /* webpackChunkName: "pages/chart/index" */))
const _ba537fe8 = () => interopDefault(import('../src/pages/form/index.vue' /* webpackChunkName: "pages/form/index" */))
const _b2be2a86 = () => interopDefault(import('../src/pages/widgets/index.vue' /* webpackChunkName: "pages/widgets/index" */))
const _9308d3f8 = () => interopDefault(import('../src/pages/api/coindesk.vue' /* webpackChunkName: "pages/api/coindesk" */))
const _689f8b53 = () => interopDefault(import('../src/pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */))
const _43f6259e = () => interopDefault(import('../src/pages/auth/sign-off.vue' /* webpackChunkName: "pages/auth/sign-off" */))
const _5015792d = () => interopDefault(import('../src/pages/chart/bar.vue' /* webpackChunkName: "pages/chart/bar" */))
const _2a2337b4 = () => interopDefault(import('../src/pages/chart/circle.vue' /* webpackChunkName: "pages/chart/circle" */))
const _64aa3cca = () => interopDefault(import('../src/pages/chart/line.vue' /* webpackChunkName: "pages/chart/line" */))
const _56fa6620 = () => interopDefault(import('../src/pages/chart/radar.vue' /* webpackChunkName: "pages/chart/radar" */))
const _6db0dd68 = () => interopDefault(import('../src/pages/form/basic.vue' /* webpackChunkName: "pages/form/basic" */))
const _15d056c5 = () => interopDefault(import('../src/pages/widgets/carousel.vue' /* webpackChunkName: "pages/widgets/carousel" */))
const _58b34e7b = () => interopDefault(import('../src/pages/widgets/overlay.vue' /* webpackChunkName: "pages/widgets/overlay" */))
const _306e2dc6 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/api",
    component: _0af73de8,
    name: "api"
  }, {
    path: "/chart",
    component: _6e29b5ec,
    name: "chart"
  }, {
    path: "/form",
    component: _ba537fe8,
    name: "form"
  }, {
    path: "/widgets",
    component: _b2be2a86,
    name: "widgets"
  }, {
    path: "/api/coindesk",
    component: _9308d3f8,
    name: "api-coindesk"
  }, {
    path: "/auth/sign-in",
    component: _689f8b53,
    name: "auth-sign-in"
  }, {
    path: "/auth/sign-off",
    component: _43f6259e,
    name: "auth-sign-off"
  }, {
    path: "/chart/bar",
    component: _5015792d,
    name: "chart-bar"
  }, {
    path: "/chart/circle",
    component: _2a2337b4,
    name: "chart-circle"
  }, {
    path: "/chart/line",
    component: _64aa3cca,
    name: "chart-line"
  }, {
    path: "/chart/radar",
    component: _56fa6620,
    name: "chart-radar"
  }, {
    path: "/form/basic",
    component: _6db0dd68,
    name: "form-basic"
  }, {
    path: "/widgets/carousel",
    component: _15d056c5,
    name: "widgets-carousel"
  }, {
    path: "/widgets/overlay",
    component: _58b34e7b,
    name: "widgets-overlay"
  }, {
    path: "/",
    component: _306e2dc6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
