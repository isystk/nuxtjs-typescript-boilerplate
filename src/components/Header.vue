<template>
  <nav
    class="main-header navbar navbar-expand navbar-white navbar-light"
    :class="[isAuthenticated ? '' : 'ml-0']"
  >
    <ul v-if="isAuthenticated" class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link js-pushmenu" data-widget="pushmenu">
          <i class="fas fa-bars"></i>
        </a>
      </li>
    </ul>
    <div v-if="isAuthenticated" class="ml-auto form-inline">
      <div>
        <nuxt-link to="/auth/sign-off">
          ログアウト
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { currencyModule, SupportedCurrencies } from "@/store/modules/currency"; // モジュールクラスをインポート

@Component
export default class Header extends Vue {
  // ログイン状態
  get isAuthenticated(): boolean {
    return this.$store.getters["auth/isAuthenticated"];
  }
}
</script>
