<template>
  <div class="wrapper">
    <Header />
    <SideMenu :group="'coin'" :item="'history'" />
    <div class="content-wrapper">
      <Corrency />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SideMenu from "@/components/SideMenu.vue";
import Corrency from "@/components/Corrency.vue";

@Component({
  components: {
    Header,
    Footer,
    SideMenu,
    Corrency
  }
})
export default class extends Vue {}
</script>
