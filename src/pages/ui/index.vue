<template>
  <ContentHeader
    :current="{ title: $t('text.sideMenu.ui'), url: this.$C.URL.UI }"
    :breadcrumb-list="[]"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import ContentHeader from "@/components/pages/ContentHeader.vue";

@Component({
  components: {
    ContentHeader
  }
})
export default class extends Vue {
  public mounted(): void {
    this.$router.replace(this.$C.URL.UI_CAROUSEL);
  }
}
</script>
