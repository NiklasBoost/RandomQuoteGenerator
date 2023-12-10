import { QuoteObject } from "./types";

export interface QuoteOverviewsProps {
  allQuotesObjects: QuoteObject[];
  isAllQuotesVisible: boolean;
  isFavQuotesVisible: boolean;
  isSearchQuotesVisible: boolean;
  searchResult: QuoteObject[];
  removeQuote: (i:number) => void;
  changeDomFeedback: () => void;
  feedbackDom: string;
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: (quote: string, author: string) => void;
}

export interface QuoteOverviewProps {
  arr: QuoteObject[];
  removeQuote: (i:number) => void;
  changeDomFeedback: () => void;
  feedbackDom: string;
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: (quote: string, author: string) => void;
}