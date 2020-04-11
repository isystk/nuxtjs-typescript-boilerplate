import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from "vuex-module-decorators";
import { CurrencyState, SupportedCurrencies } from "../../types/currency";
import store from "../store"; // デコレータでstoreを指定するためimportする必要あり
import axiosUtil from "../util/axiosUtil"; // デコレータでstoreを指定するためimportする必要あり
import supportedCurrenciesData from '../../static/data/supported-currencies.json';
import historicalCloseData from '../../static/data/historical-close.json';

@Module({ dynamic: true, store, name: "counter", namespaced: true })
class Currency extends VuexModule implements CurrencyState{
  // state
  supportedCurrencies:SupportedCurrencies[] = [];
  selecedCurrency:SupportedCurrencies = {};

  // mutation
  // 通貨セレクトボックス変更にstore内データを更新します。
  @Mutation
  public SET_SELECTED_CURRENCY(code: String) {
    var selecedCurrencies = this.supportedCurrencies.filter(data => data.currency === code);
    if (0 < selecedCurrencies.length) {
      this.selecedCurrency = selecedCurrencies[0];
    }
  }
  
  // サポートする通貨を返却します
  @MutationAction({mutate: ["supportedCurrencies"]})
  async loadSupportedCurrencies() {
    // const data = axiosUtil('supported-currencies.json');
    const data = supportedCurrenciesData;
    return ({ supportedCurrencies: data });
  }
  
  // 指定した通貨の履歴データを返却します
  @Action({})
  async searchHistorical(params: any) {
    console.log(params);
    // const data = axiosUtil('supported-currencies.json');
    const data = historicalCloseData;
    return data.bpi;
  }
}

export const currencyModule = getModule(Currency);