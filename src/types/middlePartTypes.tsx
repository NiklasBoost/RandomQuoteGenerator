import { Dispatch, SetStateAction } from "react";
import { QuoteObject } from "./types";

export type MiddlePartProps = {
  setIsEditing: (value: boolean) => void;
  outputQuote: string;
  outputAuthor: string;
  allQuotesObjects: QuoteObject[];
  nextQuote: () => void;
  lastQuote: () => void;
  removeQuote: () => void;
  isEditing: boolean; // Added the isEditing prop
  editedQuote: string; // Added the edited quote and author props
  editedAuthor: string;
  setEditedQuote: (value: string) => void; // Added setters for edited quote and author
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