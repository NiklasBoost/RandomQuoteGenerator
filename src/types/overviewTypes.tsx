import { QuoteObject } from "./types";

export interface QuoteOverviewsProps {
  allQuotesObjects: QuoteObject[];
  isAllQuotesVisible: boolean;
  isFavQuotesVisible: boolean;
  isSearchQuotesVisible: boolean;
  searchResult: QuoteObject[];
  removeQuote: (i:number) => void;
}

export interface QuoteOverviewProps {
  arr: QuoteObject[];
  removeQuote: (i:number) => void;
}