<template>
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-secondary dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ value }}
    </button>
    <div
      class="dropdown-menu dropdown-menu-right "
      style="max-height: 300px; overflow: scroll;"
    >
      <a
        v-for="(e, index) in values"
        :key="index"
        class="dropdown-item"
        href="#"
        @click.prevent="select(index)"
      >
        {{ e.value }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from "vue-property-decorator";
import _ from "lodash";

@Component
export default class SelectBox extends Vue {
  @PropSync("selectedCode", { type: String, default: "" })
  code!: string;

  value = "-----";

  @Prop()
  values!: SelectBoxList[];

  select(index: number): void {
    this.code = this.values[index].code;
    this.value = this.values[index].value;
  }

  // 親のコンポーネントでcodeが変更された場合に同期したい場合
  @Watch("code", { immediate: true })
  onChangeCode(code: string): void {
    if (code === "") {
      return;
    }
    this.value = _.filter(this.values, { code })[0].value;
  }
}
</script>
