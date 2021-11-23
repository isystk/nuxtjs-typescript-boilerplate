import Vue from 'vue'
import Vuex from 'vuex'
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

import nuxt_plugin_plugin_f34cd6d2 from 'nuxt_plugin_plugin_f34cd6d2' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_moment_0fc42d0b from 'nuxt_plugin_moment_0fc42d0b' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_workbox_b8696fee from 'nuxt_plugin_workbox_b8696fee' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_407713c8 from 'nuxt_plugin_metaplugin_407713c8' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_axios_6306aba6 from 'nuxt_plugin_axios_6306aba6' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_sanitizehtml_2c7303e8 from 'nuxt_plugin_sanitizehtml_2c7303e8' // Source: ../src/plugins/libraries/sanitize-html.ts (mode: 'all')
import nuxt_plugin_lodash_53c55d0e from 'nuxt_plugin_lodash_53c55d0e' // Source: ../src/plugins/libraries/lodash.ts (mode: 'all')
import nuxt_plugin_moment_6a977a7a from 'nuxt_plugin_moment_6a977a7a' // Source: ../src/plugins/libraries/moment.ts (mode: 'all')
import nuxt_plugin_axios_1ed6fea1 from 'nuxt_plugin_axios_1ed6fea1' // Source: ../src/plugins/libraries/axios.ts (mode: 'all')
import nuxt_plugin_constantsinject_5b5d368a from 'nuxt_plugin_constantsinject_5b5d368a' // Source: ../src/plugins/constants-inject.ts (mode: 'all')
import nuxt_plugin_envinject_0cf04cb0 from 'nuxt_plugin_envinject_0cf04cb0' // Source: ../src/plugins/env-inject.ts (mode: 'all')
import nuxt_plugin_i18n_2ff0308e from 'nuxt_plugin_i18n_2ff0308e' // Source: ../src/plugins/locale/i18n.ts (mode: 'all')
import nuxt_plugin_adminlte_0a7ef655 from 'nuxt_plugin_adminlte_0a7ef655' // Source: ../src/plugins/libraries/adminlte.ts (mode: 'client')

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

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s | nuxtjs-typescript-boilerplate","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxtjs、Typescriptを利用したボイラープレートです"},{"hid":"noydir","name":"robots","content":"noydir"},{"hid":"noodp","name":"robots","content":"noodp"},{"hid":"index,follow","name":"robots","content":"index,follow"},{"hid":"format-detection","name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

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

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

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
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_f34cd6d2 === 'function') {
    await nuxt_plugin_plugin_f34cd6d2(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_0fc42d0b === 'function') {
    await nuxt_plugin_moment_0fc42d0b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_b8696fee === 'function') {
    await nuxt_plugin_workbox_b8696fee(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_407713c8 === 'function') {
    await nuxt_plugin_metaplugin_407713c8(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_6306aba6 === 'function') {
    await nuxt_plugin_axios_6306aba6(app.context, inject)
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

  if (process.client && typeof nuxt_plugin_adminlte_0a7ef655 === 'function') {
    await nuxt_plugin_adminlte_0a7ef655(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
