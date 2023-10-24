import { Dispatch, SetStateAction } from "react";
import { QuoteObject } from "./types";

export type MiddlePartProps = {
  allQuotesObjects: QuoteObject[];
  removeQuote: () => void;
  isEditing: boolean;
  editedQuote: string; 
  editedAuthor: string;
  setEditedQuote: (value: string) => void; 
  setEditedAuthor: (value: string) => void;
  saveChanges: (editedQuote: string, editedAuthor: string) => void;
  currentQIndex: number;
  feedbackDom:  string;
  changeDomFeedback: () => void;
  isOutputVisible: boolean;
  automaticStatus: string;
  savedQuotes: QuoteObject[];
  setCurrentQIndex: Dispatch<SetStateAction<number>>;
  toggleEdit: () => void;
};


export type GoToLastQuoteProps = {
  lastQuote: () => void;
}

export type OutputsProps = {
  outputQuote: string;
  outputAuthor: string;
  allQuotesObjects: QuoteObject[];
  currentQIndex: number;
}

export type GoToNextQuoteProps = {
  nextQuote: () => void;
}


export type RemoveButtonProps = {
  removeQuote: () => void;
  changeDomFeedback: () => void;
}