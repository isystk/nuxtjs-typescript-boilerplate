<template>
  <ContentHeader
    :current="{ title: $t('text.sideMenu.home'), url: this.$C.URL.HOME }"
    :breadcrumb-list="[]"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import ContentHeader from "@/components/ContentHeader.vue";

@Component({
  components: {
    ContentHeader
  }
})
export default class extends Vue {
  public mounted(): void {
    this.$router.replace(this.$C.URL.FORM_BASIC);
  }
}
</script>
