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
  // mutation
  @Mutation
  public SET_INCREMENT_COUNTER(num: number) {
    this.incrementCounter = num;
  }
  @Mutation
  public SET_DECREMENT_COUNTER(num: number) {
    this.decrementCounter = num;
  }
  // actions
  @Action({})
  // カウンターに100加算するアクション
  public increment100() {
    // actions内で簡単にthisからmutationを呼び出せる。
    this.SET_INCREMENT_COUNTER(this.incrementCounter + 100);
  }
  @Action({})
  // カウンターに100減算するアクション
  public decrement100() {
    this.SET_DECREMENT_COUNTER(this.decrementCounter - 100);
  }
  // actions + mutation
  // incrementCounter decrementCounter両方をリセットするアクションとミューテーション
  @MutationAction({mutate: ["incrementCounter", "decrementCounter"]})
  async resetCounter() {
    return {
      incrementCounter: 0,
      decrementCounter: 1000
    };
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