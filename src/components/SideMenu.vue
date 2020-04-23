<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-purple elevation-4">
    <!-- Brand Logo -->
    <Logo />
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item has-treeview">
            <a href="#" :class="[group == 'auth' ? 'active' : '', 'nav-link']">
              <i class="nav-icon fas fa-lock-open"></i>
              <p>
                {{ $t("text.sideMenu.auth") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link
                  to="/auth/sign-in/"
                  :class="[item == 'login' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("text.sideMenu.login") }}</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" :class="[group == 'form' ? 'active' : '', 'nav-link']">
              <i class="nav-icon fas fa-table"></i>
              <p>
                {{ $t("text.sideMenu.form") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link
                  to="/form/basic/"
                  :class="[item == 'basic' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("text.sideMenu.basic") }}</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" :class="[group == 'chart' ? 'active' : '', 'nav-link']">
              <i class="nav-icon fas fa-chart-line"></i>
              <p>
                {{ $t("text.sideMenu.chart") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link
                  to="/chart/line/"
                  :class="[item == 'line' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("text.sideMenu.line") }}</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/chart/bar/"
                  :class="[item == 'bar' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("text.sideMenu.bar") }}</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/chart/radar/"
                  :class="[item == 'radar' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("text.sideMenu.radar") }}</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/chart/circle/"
                  :class="[item == 'circle' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("text.sideMenu.circle") }}</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="fa fa-cogs"></i>
              <p>
                {{ $t("text.sideMenu.ria") }}
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-envelope"></i>
                  <p>{{ $t("text.sideMenu.carousel") }}</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-file"></i>
                  <p>{{ $t("text.sideMenu.overlay") }}</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { sideMenuModule } from "@/store/sideMenu";
import Logo from "@/components/Logo.vue";

@Component({
  components: {
    Logo
  }
})
export default class SideMenu extends Vue {
  group = "";
  item = "";

  get currentMenu(): any {
    return sideMenuModule.currentMenu;
  }

  @Watch("currentMenu", { immediate: true })
  onChangeCurrentMenu(val, old): void {
    // console.log("change currentMenu new:%s old:%s", val, old);
    if (val) {
      this.group = val.group;
      this.item = val.item;
    }
  }
}
</script>
