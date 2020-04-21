<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-purple elevation-4">
    <!-- Brand Logo -->
    <nuxt-link to="/" class="brand-link">
      <img
        src="~/assets/img/github-icon.svg"
        alt="github Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">{{
        $t("text.header.title")
      }}</span>
    </nuxt-link>

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
              <i class="nav-icon fas fa-table"></i>
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
                <nuxt-link
                  to="/chart/bar/"
                  :class="[item == 'line' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>{{ $t("text.sideMenu.bar") }}</p>
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

@Component
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
