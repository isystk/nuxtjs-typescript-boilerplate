import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import moment from "moment";
import { AxiosRequestConfig } from "axios";
import { $axios } from "@/utilities/api";
import store from "@/store/store";

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

// 検索条件
export interface SearchHistoricalCondition {
  currency: string;
  start: Date;
  end: Date;
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
      "/coindesk/v1/bpi/supported-currencies.json",
      {}
    );
    return { supportedCurrencies: data };
  }

  // 指定した通貨の履歴データを返却します
  @Action
  async searchHistorical(
    params: SearchHistoricalCondition
  ): Promise<Historical> {
    const url = "/coindesk/v1/bpi/historical/" + params.currency + ".json";
    const { data } = await $axios.get(url, {
      start: moment(params.start).format("YYYY-MM-DD"),
      end: moment(params.end).format("YYYY-MM-DD")
    } as AxiosRequestConfig);
    const historical: Historical = {
      currency: this.selecedCurrency.currency,
      start: params.start,
      end: params.end,
      historicals: data.bpi.map((value, key) => ({
        updated: new Date(key),
        rateFloat: parseFloat(value)
      }))
    };
    return historical;
  }
}

export const currencyModule = getModule(Currency);
