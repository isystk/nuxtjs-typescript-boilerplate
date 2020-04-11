import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from "vuex-module-decorators";
import store from "../store"; // デコレータでstoreを指定するためimportする必要あり
import { ICounterState, SupportedCurrencies } from "../../types";
import axios from 'axios'
import supportedCurrenciesData from '../../static/data/supported-currencies.json'

@Module({ dynamic: true, store, name: "counter", namespaced: true })
class Counter extends VuexModule implements ICounterState {
  // state
  incrementCounter: number = 0;
  decrementCounter: number = 1000;
  supportedCurrencies: SupportedCurrencies[] = [];
  selecedCurrency: SupportedCurrencies = {};

  // mutation
  @Mutation
  public SET_SELECTED_CURRENCY(code: String) {
    var selecedCurrencies = this.supportedCurrencies.filter(data => data.currency === code);
    if (0 < selecedCurrencies.length) {
      this.selecedCurrency = selecedCurrencies[0];
    }
  }
  
  @MutationAction({mutate: ["supportedCurrencies"]})
  // サポートする通貨を返却します
  async loadSupportedCurrencies() {
    // const { data } = await axios.get("https://api.coindesk.com/v1/bpi/supported-currencies.json");
    // const { data } = await axios.get("/data/supported-currencies.json");
    var data = supportedCurrenciesData;
    // console.log(data);
    return ({ supportedCurrencies: data });
  }
}

export const counterModule = getModule(Counter);