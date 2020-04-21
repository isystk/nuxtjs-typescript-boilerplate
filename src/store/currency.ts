import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { $axios } from "@/utilities/api";
import store from "@/store/store"; // デコレータでstoreを指定するためimportする必要あり

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

@Module({ dynamic: true, store, name: "currency", namespaced: true })
class Currency extends VuexModule implements CurrencyState {
  // state
  supportedCurrencies: SupportedCurrencies[] = [];
  selecedCurrency: SupportedCurrencies = {};

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

  // サポートしている通貨の一覧を設定します。
  @MutationAction({ mutate: ["supportedCurrencies"] })
  async fetchSupportedCurrencies(): Promise<any> {
    const { data } = await $axios.get<SupportedCurrencies[]>(
      "/api/v1/bpi/supported-currencies.json",
      {}
    );
    return { supportedCurrencies: data };
  }

  // 指定した通貨の履歴データを返却します
  @Action({})
  async searchHistorical(params: any): Promise<SupportedCurrencies[]> {
    console.log("call!searchHistorical");

    const { data } = await $axios.get<SupportedCurrencies[]>(
      "/api/v1/bpi/supported-currencies.json",
      {}
    );
    return data;
  }
}

export const currencyModule = getModule(Currency);
