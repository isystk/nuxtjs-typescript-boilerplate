<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.overlay'),
        url: this.$C.URL.UI_OVERLAY
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
                  オーバーレイ
                </h3>
              </div>
              <div class="card-body">
                <div class="box-body">
                  <div class="row">
                    <div class="col-12">
                      <a href="#" @click.prevent="showOverlay()">
                        オーバーレイを表示する
                      </a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5 m-auto">
                      <Overlay :is-visible-overlay.sync="isVisibleOverlay">
                        <template v-slot:body>
                          モーダル
                          <ImageCarousel
                            :image-path="imagePath"
                            :is-carousel="false"
                            :image-size="{ width: '250px', height: '250px' }"
                          />
                        </template>
                      </Overlay>
                    </div>
                  </div>
                </div>
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
import ContentHeader from "@/components/pages/ContentHeader.vue";
import ImageCarousel from "@/components/ui/ImageCarousel.vue";
import Overlay from "@/components/ui/Overlay.vue";
@Component({
  components: {
    ContentHeader,
    ImageCarousel,
    Overlay
  }
})
export default class extends Vue {
  imagePath = [
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample3.jpg")
  ];

  isVisibleOverlay = false;

  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "ui",
      item: "overlay"
    });
  }

  showOverlay(): void {
    this.isVisibleOverlay = true;
  }
}
</script>
