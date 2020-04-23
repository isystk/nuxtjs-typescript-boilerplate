<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          href="#"
          class="nav-link"
          data-widget="pushmenu"
          @click.prevent="pushmenu"
        >
          <i class="fas fa-bars"></i>
        </a>
      </li>
    </ul>
    <div v-if="isAuthenticated" class="ml-auto form-inline">
      <div>
        <nuxt-link :to="this.$C.URL.AUTH_LOGOUT">
          {{ $t("text.header.logout") }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  head(): any {
    return {
      bodyAttrs: {
        class: this.openSideMenu ? "sidebar-mini sidebar-collapse" : ""
      }
    };
  }

  openSideMenu = true;

  // ログイン状態
  get isAuthenticated(): boolean {
    return this.$store.getters["auth/isAuthenticated"];
  }

  mounted(): void {
    // サイドメニューの開閉状態をクッキーから復元
    const re = new RegExp("sidebarToggleState" + "=([^;]+)");
    const value = re.exec(document.cookie);
    const toggleState = value !== null ? unescape(value[1]) : null;
    if (toggleState === "closed") {
      this.openSideMenu = false;
    }
  }

  // サイドメニューの開閉
  pushmenu(): void {
    this.openSideMenu = !this.openSideMenu;
    const path = "/";
    if (this.openSideMenu) {
      document.cookie = "sidebarToggleState=opened; path=" + path + ";";
    } else {
      document.cookie = "sidebarToggleState=closed; path=" + path + ";";
    }
  }
}
</script>
