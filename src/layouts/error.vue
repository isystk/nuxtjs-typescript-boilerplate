<template>
  <div class="wrapper">
    <Header />
    <SideMenu v-show="false" />
    <div v-if="error.statusCode === 404">
      <h1>
        ページが見つかりません
      </h1>
    </div>
    <div v-else>
      <h1>エラーが発生しました {{ error.message }}</h1>
    </div>
    <nuxt-link to="/">
      ホーム
    </nuxt-link>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Error extends Vue {
  @Prop({ type: Object, required: true })
  public error: any;
}
</script>
