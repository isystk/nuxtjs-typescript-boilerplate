<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link js-pushmenu" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
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
import { currencyModule } from "../store/modules/currency"; // モジュールクラスをインポート
import { SupportedCurrencies } from '../types/currency';

import SelectBox from './parts/SelectBox.vue';
@Component({
  components: {
    SelectBox
  }
})
export default class Header extends Vue {

  selectedCurrency = '';

  // 通貨の種類選択用リストボックスデータをStoreから取得する
  get currencySelectList() {
    let supportedCurrencies = currencyModule.supportedCurrencies;
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
    // 通貨の種類データを生成してStoreに保存
    currencyModule.loadSupportedCurrencies();
  }

  @Watch('selectedCurrency', { immediate: true })
  onChangeCurrency(code: String) {
    if (code === '') {
      return;
    }
    currencyModule.SET_SELECTED_CURRENCY(code);
  }

}
</script>

