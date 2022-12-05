export interface iCurrencyAsset {
  type: string;
  amount: number;
  totalInCurrency: string;
}

export interface iAsset {
  id: string;
  name: string;
  amount: string;
  symbol: string;
  value: string;
  currencySymbol: string;
  percent: string;
  percentSign: string;
}
