<template>
  <div>
    <ContentHeader
      :current="{
        title: $t('text.sideMenu.overlay'),
        url: this.$C.URL.WIDGETS_OVERLAY
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
                  オーバーレイ
                </h3>
              </div>
              <div class="card-body">
                <div class="box-body">
                  <div class="row">
                    <div class="col-12">
                      <AddPropertyButton
                          :year="2020"
                          :month="6"
                          endpoint-uri="xxx"
                          buttonLabel="追加"
                          cancelLabel="閉じる"
                          nextLabel="次へ"
                          backLabel="戻る"
                          submitLabel="登録する"
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
import AddPropertyButton from "@/components/pages/condition/AddPropertyButton.vue";

@Component({
  components: {
    ContentHeader,
    ImageCarousel,
    AddPropertyButton
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
