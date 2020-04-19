<template>
  <textarea v-model="value" class="form-control" :rows="rows"></textarea>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from "vue-property-decorator";
import _ from "lodash";

@Component
export default class Textarea extends Vue {
  @PropSync("inputvalue")
  value!: string;

  @Prop()
  rows!: number;

  @Prop()
  classObject: {};

  get dataClassObject(): any {
    const defaultClassObject = {
      btnColor: ""
    };
    return _.defaults(this.classObject, defaultClassObject);
  }
}
</script>
