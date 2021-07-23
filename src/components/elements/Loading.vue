<template>
  <div
    class="d-flex justify-content-center align-items-center overlay no-click"
  >
    <spinner :label="label" :variant="variant" :small="small" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import spinner from "@/components/elements/Spinner.vue";

@Component({
  components: {
    spinner
  }
})
export default class extends Vue {
  @Prop({
    default: "Loading..."
  })
  label: any;

  @Prop({
    default: "border"
  })
  variant: any;

  @Prop({
    default: false
  })
  small: any;
}
</script>
