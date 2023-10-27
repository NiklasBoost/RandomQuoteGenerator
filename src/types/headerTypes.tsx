import { QuoteObject } from "./types";

export interface HeaderProps {
  isAllQuotesVisible: boolean;
  isFavQuotesVisible: boolean;
  isSearchQuotesVisible: boolean;
  allQuotesObjects: QuoteObject[];
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setIsAllQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResult:  React.Dispatch<React.SetStateAction<QuoteObject[]>>;
  setIsSearchQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFavQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>; 
};

export interface AllQuotesProps {
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setIsAllQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface FavQuotesProps {
  toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setIsFavQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface SearchbarProps {
    toggleQuotesContainer: (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => void;
    allQuotesObjects: QuoteObject[];
    setSearchResult: React.Dispatch<React.SetStateAction<QuoteObject[]>>;
    setIsSearchQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export interface EditButtonProps {
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: () => void;
  feedbackDom:  string;
  changeDomFeedback: () => void;
}