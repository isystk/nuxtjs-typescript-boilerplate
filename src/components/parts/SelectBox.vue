<template>
  <div class="dropdown">
    <button type="button" class="btn btn-secondary dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
      {{ value }}
    </button>
    <div class="dropdown-menu dropdown-menu-right " aria-labelledby="dropdown1" style="max-height: 300px; overflow: scroll;">
        <a v-for="(e, index) in values" :key="index" class="dropdown-item" href="#" @click="select(index)">{{e.value}}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch } from 'vue-property-decorator';
import _ from 'lodash'

export interface SelectList {
  value: String;
  code: String;
}

@Component
export default class SelectBox extends Vue {

  @PropSync('selectedCode', { type: String, default: '' })
  code!: String;
  
  value: String  = '-----';

  @Prop() 
  values!: SelectList[];

  select(index: number) {
    this.code = this.values[index].code;
    this.value = this.values[index].value;
  }
  
  @Watch('code', { immediate: true })
  onChangeCode(code) {
    if (code === '') {
      return;
    }
    console.log('Change Code!!:%s', code);
    this.value =  _.filter(this.values, {'code': code })[0].value;
  }

}
</script>

