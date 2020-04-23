<template>
  <ContentHeader
    :current="{ title: 'HOME', url: '/form/basic/' }"
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
    this.$router.replace("/form/basic/");
  }
}
</script>
