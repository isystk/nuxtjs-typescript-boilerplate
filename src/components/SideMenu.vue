<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-purple elevation-4">
    <!-- Brand Logo -->
    <nuxt-link to="/" class="brand-link">
      <img
        src="~/assets/img/AdminLTELogo.png"
        alt="AdminSample Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">Nuxt-Typescript</span>
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
            <a href="#" :class="[group == 'coin' ? 'active' : '', 'nav-link']">
              <i class="nav-icon fas fa-table"></i>
              <p>
                仮想通貨
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link
                  to="/corrency"
                  :class="[item == 'history' ? 'active' : '', 'nav-link']"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>履歴</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="fa fa-cogs"></i>
              <p>
                システム設定
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-envelope"></i>
                  <p>メールテンプレート</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-file"></i>
                  <p>ファイル管理</p>
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
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SideMenu extends Vue {
  @Prop()
  group!: string;

  @Prop()
  item!: string;
}
</script>
