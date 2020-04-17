import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import store from "@/store/store"; // デコレータでstoreを指定するためimportする必要あり
import supportedCurrenciesData from "@/static/data/supported-currencies.json";
import historicalCloseData from "@/static/data/historical-close.json";

export interface SupportedCurrencies {
  currency?: string;
  country?: string;
}

export interface Currentprice {
  updatedISO?: Date;
  code?: string;
  rateFloat?: number;
  usd?: {
    code: string;
    rateFloat: number;
  };
}

export interface Historical {
  currency?: string;
  start?: Date;
  end?: Date;
  historicals?: Historicals[];
}

export interface Historicals {
  updated: Date;
  rateFloat: number;
}

// state's interface
export interface CurrencyState {
  supportedCurrencies: SupportedCurrencies[];
  selecedCurrency: SupportedCurrencies;
}

@Module({ dynamic: true, store, name: "counter", namespaced: true })
class Currency extends VuexModule implements CurrencyState {
  // state
  public supportedCurrencies: SupportedCurrencies[] = [];
  public selecedCurrency: SupportedCurrencies = {};

  // mutation
  // 通貨セレクトボックス変更にstore内データを更新します。
  @Mutation
  public SET_SELECTED_CURRENCY(code: string): void {
    const selecedCurrencies = this.supportedCurrencies.filter(
      data => data.currency === code
    );
    if (selecedCurrencies.length > 0) {
      this.selecedCurrency = selecedCurrencies[0];
    }
  }

  // サポートする通貨を返却します
  @MutationAction({ mutate: ["supportedCurrencies"] })
  public loadSupportedCurrencies(): any {
    // const data = axiosUtil('supported-currencies.json');
    const data = supportedCurrenciesData;
    return { supportedCurrencies: data };
  }

  // 指定した通貨の履歴データを返却します
  @Action({})
  public searchHistorical(params: any): any {
    // const data = axiosUtil('supported-currencies.json');
    const data = historicalCloseData;
    return data.bpi;
  }
}

export const currencyModule = getModule(Currency);
