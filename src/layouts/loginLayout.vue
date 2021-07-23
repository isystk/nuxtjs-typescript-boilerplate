<template>
  <div class="wrapper">
    <Header v-show="false" />
    <SideMenu v-show="false" />
    <div>
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "@/components/pages/Header.vue";
import SideMenu from "@/components/pages/SideMenu.vue";
import Footer from "@/components/pages/Footer.vue";

@Component({
  components: {
    Header,
    SideMenu,
    Footer
  }
})
export default class LoginLayout extends Vue {}
</script>
