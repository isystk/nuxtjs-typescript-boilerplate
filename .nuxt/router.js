import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ec9c071e = () => interopDefault(import('../src/pages/api/index.vue' /* webpackChunkName: "pages/api/index" */))
const _292ef635 = () => interopDefault(import('../src/pages/chart/index.vue' /* webpackChunkName: "pages/chart/index" */))
const _09195aba = () => interopDefault(import('../src/pages/form/index.vue' /* webpackChunkName: "pages/form/index" */))
const _95518674 = () => interopDefault(import('../src/pages/widgets/index.vue' /* webpackChunkName: "pages/widgets/index" */))
const _5c1e5edb = () => interopDefault(import('../src/pages/api/coindesk.vue' /* webpackChunkName: "pages/api/coindesk" */))
const _0e42542a = () => interopDefault(import('../src/pages/auth/sign-in.vue' /* webpackChunkName: "pages/auth/sign-in" */))
const _2689818c = () => interopDefault(import('../src/pages/auth/sign-off.vue' /* webpackChunkName: "pages/auth/sign-off" */))
const _625f9094 = () => interopDefault(import('../src/pages/chart/bar.vue' /* webpackChunkName: "pages/chart/bar" */))
const _dedda606 = () => interopDefault(import('../src/pages/chart/circle.vue' /* webpackChunkName: "pages/chart/circle" */))
const _8571613e = () => interopDefault(import('../src/pages/chart/line.vue' /* webpackChunkName: "pages/chart/line" */))
const _11ffa669 = () => interopDefault(import('../src/pages/chart/radar.vue' /* webpackChunkName: "pages/chart/radar" */))
const _73642002 = () => interopDefault(import('../src/pages/form/basic.vue' /* webpackChunkName: "pages/form/basic" */))
const _28a4dc1c = () => interopDefault(import('../src/pages/widgets/carousel.vue' /* webpackChunkName: "pages/widgets/carousel" */))
const _d9c57b78 = () => interopDefault(import('../src/pages/widgets/overlay.vue' /* webpackChunkName: "pages/widgets/overlay" */))
const _1eb25426 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/api",
    component: _ec9c071e,
    name: "api"
  }, {
    path: "/chart",
    component: _292ef635,
    name: "chart"
  }, {
    path: "/form",
    component: _09195aba,
    name: "form"
  }, {
    path: "/widgets",
    component: _95518674,
    name: "widgets"
  }, {
    path: "/api/coindesk",
    component: _5c1e5edb,
    name: "api-coindesk"
  }, {
    path: "/auth/sign-in",
    component: _0e42542a,
    name: "auth-sign-in"
  }, {
    path: "/auth/sign-off",
    component: _2689818c,
    name: "auth-sign-off"
  }, {
    path: "/chart/bar",
    component: _625f9094,
    name: "chart-bar"
  }, {
    path: "/chart/circle",
    component: _dedda606,
    name: "chart-circle"
  }, {
    path: "/chart/line",
    component: _8571613e,
    name: "chart-line"
  }, {
    path: "/chart/radar",
    component: _11ffa669,
    name: "chart-radar"
  }, {
    path: "/form/basic",
    component: _73642002,
    name: "form-basic"
  }, {
    path: "/widgets/carousel",
    component: _28a4dc1c,
    name: "widgets-carousel"
  }, {
    path: "/widgets/overlay",
    component: _d9c57b78,
    name: "widgets-overlay"
  }, {
    path: "/",
    component: _1eb25426,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
