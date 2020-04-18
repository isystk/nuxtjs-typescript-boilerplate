<template>
  <ContentHeader
    :current="{ title: '基本', url: '/form/basic/' }"
    :breadcrumb-list="[{ title: 'hoge', url: '/hoge' }]"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sideMenuModule } from "@/store/sideMenu";
import ContentHeader from "@/components/ContentHeader.vue";

@Component({
  components: {
    ContentHeader
  },
  middleware: ["authenticated"]
})
export default class extends Vue {
  created(): void {
    // 選択中のサイドメニューをアクティブに変更
    sideMenuModule.setCurrentMenu({
      group: "form",
      item: "basic"
    });
  }
}
</script>
