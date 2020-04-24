import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../src/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_227780c7 from 'nuxt_plugin_workbox_227780c7' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_moment_666ee48d from 'nuxt_plugin_moment_666ee48d' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_axios_c0880b2a from 'nuxt_plugin_axios_c0880b2a' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_sanitizehtml_2c7303e8 from 'nuxt_plugin_sanitizehtml_2c7303e8' // Source: ../src/plugins/libraries/sanitize-html.ts (mode: 'all')
import nuxt_plugin_lodash_53c55d0e from 'nuxt_plugin_lodash_53c55d0e' // Source: ../src/plugins/libraries/lodash.ts (mode: 'all')
import nuxt_plugin_moment_6a977a7a from 'nuxt_plugin_moment_6a977a7a' // Source: ../src/plugins/libraries/moment.ts (mode: 'all')
import nuxt_plugin_axios_1ed6fea1 from 'nuxt_plugin_axios_1ed6fea1' // Source: ../src/plugins/libraries/axios.ts (mode: 'all')
import nuxt_plugin_constantsinject_5b5d368a from 'nuxt_plugin_constantsinject_5b5d368a' // Source: ../src/plugins/constants-inject.ts (mode: 'all')
import nuxt_plugin_envinject_0cf04cb0 from 'nuxt_plugin_envinject_0cf04cb0' // Source: ../src/plugins/env-inject.ts (mode: 'all')
import nuxt_plugin_i18n_2ff0308e from 'nuxt_plugin_i18n_2ff0308e' // Source: ../src/plugins/locale/i18n.ts (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s | nuxtjs-typescript-boilerplate","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxtjs、Typescriptを利用したボイラープレートです"},{"hid":"noydir","name":"robots","content":"noydir"},{"hid":"noodp","name":"robots","content":"noodp"},{"hid":"index,follow","name":"robots","content":"index,follow"},{"hid":"format-detection","name":"format-detection","content":"telephone=no"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"nuxtjs-typescript-boilerplate"},{"hid":"author","name":"author","content":"isystk"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"nuxtjs-typescript-boilerplate"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"nuxtjs-typescript-boilerplate"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Nuxtjs、Typescriptを利用したボイラープレートです"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fnuxtjs-typescript-boilerplate\u002Ffavicon.ico"},{"rel":"stylesheet","href":"\u002Fnuxtjs-typescript-boilerplate\u002Fplugins\u002Ffontawesome-free\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"\u002Fnuxtjs-typescript-boilerplate\u002Fcss\u002Fadminlte.min.css"},{"rel":"manifest","href":"\u002Fnuxtjs-typescript-boilerplate\u002F_nuxt\u002Fmanifest.1c23d3a3.json"}],"script":[{"src":"\u002Fnuxtjs-typescript-boilerplate\u002Fplugins\u002Fjquery\u002Fjquery.min.js","body":true},{"src":"\u002Fnuxtjs-typescript-boilerplate\u002Fplugins\u002Fbootstrap\u002Fjs\u002Fbootstrap.bundle.min.js","body":true},{"src":"\u002Fnuxtjs-typescript-boilerplate\u002Fjs\u002Fadminlte.min.js","body":true},{"src":"\u002Fnuxtjs-typescript-boilerplate\u002Fjs\u002Fcommon.js","body":true}],"style":[],"title":"nuxtjs-typescript-boilerplate","htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_227780c7 === 'function') {
    await nuxt_plugin_workbox_227780c7(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_666ee48d === 'function') {
    await nuxt_plugin_moment_666ee48d(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_c0880b2a === 'function') {
    await nuxt_plugin_axios_c0880b2a(app.context, inject)
  }

  if (typeof nuxt_plugin_sanitizehtml_2c7303e8 === 'function') {
    await nuxt_plugin_sanitizehtml_2c7303e8(app.context, inject)
  }

  if (typeof nuxt_plugin_lodash_53c55d0e === 'function') {
    await nuxt_plugin_lodash_53c55d0e(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_6a977a7a === 'function') {
    await nuxt_plugin_moment_6a977a7a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_1ed6fea1 === 'function') {
    await nuxt_plugin_axios_1ed6fea1(app.context, inject)
  }

  if (typeof nuxt_plugin_constantsinject_5b5d368a === 'function') {
    await nuxt_plugin_constantsinject_5b5d368a(app.context, inject)
  }

  if (typeof nuxt_plugin_envinject_0cf04cb0 === 'function') {
    await nuxt_plugin_envinject_0cf04cb0(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_2ff0308e === 'function') {
    await nuxt_plugin_i18n_2ff0308e(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
