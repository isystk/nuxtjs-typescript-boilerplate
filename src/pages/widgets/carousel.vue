<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.carousel'),
        url: this.$C.URL.WIDGETS_CAROUSEL
      }"
      :breadcrumb-list="[
        { title: $t('text.sideMenu.widgets'), url: this.$C.URL.WIDGETS }
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
                <div class="box-body">
                  <div class="row">
                    <div class="col-sm-5 m-auto">
                      <label class="control-label">
                        1ページ1枚（250x250）、カルーセルなし
                      </label>
                      <ImageCarousel
                        :image-path="imagePath"
                        :is-carousel="false"
                        :image-size="{ width: '250px', height: '250px' }"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5 m-auto">
                      <label class="control-label">
                        1ページ1枚（250x250）、カルーセルあり
                      </label>
                      <ImageCarousel
                        :image-path="imagePath"
                        :is-carousel="true"
                        :image-size="{ width: '250px', height: '250px' }"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5 m-auto">
                      <label class="control-label">
                        1ページ3枚（150x150）、カルーセルなし
                      </label>
                      <ImageCarousel
                        :image-path="imagePath"
                        :is-carousel="false"
                        :image-size="{
                          width: '100px',
                          height: '100px'
                        }"
                        :shift="3"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5 m-auto">
                      <label class="control-label">
                        1ページ3枚（150x150）、オートページャ
                      </label>
                      <ImageCarousel
                        :image-path="imagePath"
                        :is-carousel="true"
                        :image-size="{
                          width: '100px',
                          height: '100px'
                        }"
                        :shift="3"
                        :is-auto-pager="true"
                      />
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
import ImageCarousel from "@/components/pages/carousel/ImageCarousel.vue";

@Component({
  components: {
    ContentHeader,
    ImageCarousel
  }
})
export default class extends Vue {
  imagePath = [
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample3.jpg"),
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample3.jpg"),
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample3.jpg")
  ];

  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "ui",
      item: "carousel"
    });
  }
}
</script>
