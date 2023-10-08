import { QuoteObject } from "./types";

export interface QuoteOverviewProps {
  allQuotesObjects: QuoteObject[];
  isAllQuotesVisible: boolean;
  isFavQuotesVisible: boolean;
  isSearchQuotesVisible: boolean;
  searchResult: QuoteObject[];
  removeQuote: () => void;
  changeDomFeedback: () => void;
  feedbackDom: string;
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: (editedQuote: string, editedAuthor: string) => void;
  editedQuote: string;
  editedAuthor: string;
}

export interface QuoteOverviewElementProps {
  arr: QuoteObject[];
  removeQuote: () => void;
  changeDomFeedback: () => void;
  feedbackDom: string;
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: (editedQuote: string, editedAuthor: string) => void;
  editedQuote: string;
  editedAuthor: string;
}