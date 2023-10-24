import { QuoteObject } from "./types";

export type HeaderProps = {
  allQuotesObjects: QuoteObject[];
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setIsAllQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResult:  React.Dispatch<React.SetStateAction<QuoteObject[]>>;
  setIsSearchQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFavQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>; 
};

export type AllQuotesProps = {
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setIsAllQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

export type FavQuotesProps = {
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setIsFavQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface SearchbarProps {
    allQuotesObjects: QuoteObject[];
    setSearchResult: React.Dispatch<React.SetStateAction<QuoteObject[]>>;
    setIsSearchQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export type EditButtonProps = {
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: () => void;
  feedbackDom:  string;
  changeDomFeedback: () => void;
}