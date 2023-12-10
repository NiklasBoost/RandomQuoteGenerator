import { Dispatch, SetStateAction } from "react";
import { QuoteObject } from "./types";

export interface MiddlePartProps {
  allQuotesObjects: QuoteObject[];
  removeQuote: (i:number) => void;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>
  saveChanges: (quote: string, author: string) => void;
  currentQIndex: number;
  feedbackDom:  string;
  changeDomFeedback: () => void;
  isOutputVisible: boolean;
  automaticStatus: string;
  savedQuotes: QuoteObject[];
  setCurrentQIndex: Dispatch<SetStateAction<number>>;
  toggleEdit: () => void;
};


export interface LastQuoteArrowProps {
  lastQuote: () => void;
}

export interface QuoteOutputProps {
  outputQuote: string;
  outputAuthor: string;
  allQuotesObjects: QuoteObject[];
  currentQIndex: number;
}

export interface NextQuoteArrowProps {
  nextQuote: () => void;
}


export interface RemoveQuoteButtonProps {
  removeQuote: (i:number) => void;
  index: number;
}