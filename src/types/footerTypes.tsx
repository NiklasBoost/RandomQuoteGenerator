import { QuoteObject } from "./types";

export interface FooterProps {
  addQuote: (quote: string, author: string) => void;
  allQuotesObjects: QuoteObject[];
}

export interface InputStuffProps {
  newQuote: string;
  newAuthor: string;
  setNewQuote: (value: string) => void;
  setNewAuthor: (value: string) => void;
  addQuote: (quote: string, author: string) => void;
}
