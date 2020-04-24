<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.carousel'),
        url: this.$C.URL.UI_CAROUSEL
      }"
      :breadcrumb-list="[
        { title: $t('text.sideMenu.ui'), url: this.$C.URL.UI }
      ]"
    />
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">
                  カルーセル
                </h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="box-body">
                    <div class="form-group">
                      <Carousel />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sideMenuModule } from "@/store/sideMenu";
import Carousel from "@/components/ui/Carousel.vue";

@Component({
  components: {
    Carousel
  }
})
export default class extends Vue {}
</script>
