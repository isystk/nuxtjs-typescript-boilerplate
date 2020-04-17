<template>
  <div class="wrapper">
    <Header />
    <div>
      <h1 v-if="error.statusCode === 404">
        ページが見つかりません
      </h1>
      <h1 v-else>
エラーが発生しました {{ error.message }}
</h1>
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
