<template>
  <ContentHeader
    :current="{ title: 'フォーム', url: '/form/' }"
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
  },
  middleware: ["authenticated"]
})
export default class extends Vue {
  public mounted(): void {
    this.$router.replace("/form/basic/");
  }
}
</script>
