<template>
  <nav
    class="main-header navbar navbar-expand navbar-white navbar-light"
    :class="[isAuthenticated ? '' : 'ml-0']"
  >
    <ul v-if="isAuthenticated" class="navbar-nav">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link js-pushmenu" data-widget="pushmenu">
          <i class="fas fa-bars"></i>
        </nuxt-link>
      </li>
    </ul>
    <div class="ml-auto form-inline">
      <div v-if="isAuthenticated">
        <nuxt-link to="/auth/sign-off">
          ログアウト
        </nuxt-link>
      </div>
      通貨：
      <SelectBox
        :values="currencySelectList"
        :selected-code.sync="selectedCurrency"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { currencyModule, SupportedCurrencies } from "@/store/modules/currency"; // モジュールクラスをインポート

import SelectBox from "@/components/parts/SelectBox.vue";
@Component({
  components: {
    SelectBox
  }
})
export default class Header extends Vue {
  selectedCurrency = "";

  // ログイン状態
  get isAuthenticated(): boolean {
    return this.$store.getters["auth/isAuthenticated"];
  }

  // 通貨の種類選択用リストボックスデータをStoreから取得する
  get currencySelectList(): any[] {
    const supportedCurrencies = currencyModule.supportedCurrencies;
    const selectList: any[] = [];
    if (supportedCurrencies) {
      supportedCurrencies.forEach(function(e) {
        selectList.push({
          code: e.currency,
          value: e.currency
        });
      });
    }
    return selectList;
  }

  created(): void {
    // 通貨の種類データを生成してStoreに保存
    currencyModule.loadSupportedCurrencies();
  }

  @Watch("selectedCurrency", { immediate: true })
  onChangeCurrency(code: string): void {
    if (code === "") {
      return;
    }
    currencyModule.SET_SELECTED_CURRENCY(code);
  }
}
</script>
