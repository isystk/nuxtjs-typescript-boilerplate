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
                <div class="box-body">
                  <div class="row">
                    <div class="col-12">
                      <label class="control-label">
                        1ページ1枚（200x200）、カルーセルなし
                      </label>
                      <Carousel
                        :image-path="imagePath"
                        :is-carousel="false"
                        :box-size="{ width: '240px' }"
                        :image-size="{ width: '200px', height: '200px' }"
                      />
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <label class="control-label">
                          1ページ3枚（150x150）、カルーセルあり
                        </label>
                        <Carousel
                          :image-path="imagePath"
                          :is-carousel="true"
                          :box-size="{ width: '480px' }"
                          :image-size="{ width: '150px', height: '150px' }"
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sideMenuModule } from "@/store/sideMenu";
import ContentHeader from "@/components/ContentHeader.vue";
import Carousel from "@/components/ui/Carousel.vue";

@Component({
  components: {
    ContentHeader,
    Carousel
  }
})
export default class extends Vue {
  imagePath = [
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg"),
    require("@/assets/img/thumb/sample1.jpg"),
    require("@/assets/img/thumb/sample2.jpg")
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
