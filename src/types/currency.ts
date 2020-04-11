
export interface SupportedCurrencies {
  currency?: string;
  country?: string;
}

export interface Currentprice {
  updatedISO?: Date;
  code?: string;
  rate_float?: number;
  usd?: {
    code: string;
    rate_float: number;
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
  rate_float: number;
}

// state's interface
export interface CurrencyState {
  supportedCurrencies: SupportedCurrencies[];
  selecedCurrency: SupportedCurrencies;
}
