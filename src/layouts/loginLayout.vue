<template>
  <div class="wrapper">
    <Header />
    <div>
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class LoginLayout extends Vue {}
</script>
