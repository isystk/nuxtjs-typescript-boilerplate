<template>
  <div class="wrapper">
    <Header />
    <SideMenu v-show="false" />
    <div class="col-sm-12 mx-auto pt-3">
      <div class="card">
        <article class="card-body">
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
        </article>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
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
export default class Error extends Vue {
  @Prop({ type: Object, required: true })
  public error: any;
}
</script>
