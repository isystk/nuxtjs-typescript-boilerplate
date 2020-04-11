<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link js-pushmenu" data-widget="pushmenu" href="/"><i class="fas fa-bars"></i></a>
      </li>
    </ul>
    <div class="ml-auto form-inline">
      通貨：
      <SelectBox :values="currencySelectList" :selectedCode.sync="selectedCurrency"></SelectBox>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { counterModule } from "../store/modules/counter"; // モジュールクラスをインポート
import { SupportedCurrencies } from '../types';

import SelectBox from './parts/SelectBox.vue';
@Component({
  components: {
    SelectBox
  }
})
export default class Header extends Vue {

  selectedCurrency = '';

  get currencySelectList() {
    let supportedCurrencies = counterModule.supportedCurrencies;
    var selectList:any[] = [];
    supportedCurrencies.forEach(function(e) {
      selectList.push({
        code: e.currency,
        value: e.currency
      })
    })
    return selectList;
  }
  created() {
    counterModule.loadSupportedCurrencies();
  }

  @Watch('selectedCurrency', { immediate: true })
  onChangeCurrency(code: String) {
    if (code === '') {
      return;
    }
    counterModule.SET_SELECTED_CURRENCY(code);
  }

}
</script>

