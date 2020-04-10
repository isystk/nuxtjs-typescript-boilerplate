<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link js-pushmenu" data-widget="pushmenu" href="/"><i class="fas fa-bars"></i></a>
      </li>
    </ul>
    <input type="text" v-model="selectedCurrency" />
    {{selectedCurrency}}
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

  get incrementCounter() {
    return counterModule.incrementCounter; // インテリセンスが効く
  }
  get decrementCounter() {
    return counterModule.decrementCounter; // インテリセンスが
  }
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
  increment() {
    counterModule.SET_INCREMENT_COUNTER(counterModule.incrementCounter + 1); // 型チェックが効く
  }
  decrement() {
    counterModule.SET_DECREMENT_COUNTER(counterModule.decrementCounter - 1); // 型チェック
  }
  increment100() {
    counterModule.increment100(); // インテリセンスが効く
  }
  decrement100() {
    counterModule.decrement100(); // インテリセンスが
  }
  resetCounter() {
    counterModule.resetCounter(); // イ
  }
  created() {
    counterModule.loadSupportedCurrencies();
  }

}
</script>

