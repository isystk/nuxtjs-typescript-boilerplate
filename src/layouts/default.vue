<template>
  <div class="wrapper">
    <Header />
    <SideMenu />
    <div class="content-wrapper">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Header from "@/components/Header.vue";
import SideMenu from "@/components/SideMenu.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    SideMenu,
    Footer
  }
})
export default class DefaultLayout extends Vue {}
</script>
