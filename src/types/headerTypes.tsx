import { QuoteObject } from "./types";

export type HeaderProps = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  editedQuote: string;
  editedAuthor: string;
  allQuotesObjects: QuoteObject[];
  saveChanges: (editedQuote: string, editedAuthor: string) => void;
  feedbackDom:  string;
  setFeedbackDom:(value: string) => void;
  changeDomFeedback: () => void;
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  isAllQuotesVisible: boolean;
  setIsAllQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AllQuotesProps = {
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  isAllQuotesVisible: boolean;
  setIsAllQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface SearchbarProps {
    allQuotesObjects: QuoteObject[];
  }
  
export type EditProps = {
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: () => void;
  feedbackDom:  string;
  setFeedbackDom:(value: string) => void;
  changeDomFeedback: () => void;
}