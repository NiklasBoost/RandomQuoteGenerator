export type QuoteObject = {
  quote: string;
  author: string;
  fav: boolean;
};

export type HeaderProps = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  editedQuote: string;
  setEditedQuote: (value: string) => void;
  editedAuthor: string;
  setEditedAuthor: (value: string) => void;
  allQuotesObjects: QuoteObject[];
  saveChanges: (editedQuote: string, editedAuthor: string) => void;
};

export interface SearchbarProps {
    allQuotesObjects: QuoteObject[];
  }
  
export type EditProps = {
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: () => void;
}

export type MiddlePartProps = {
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
  currentQIndex: number
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

export interface FooterProps {
  addQuote: (quote: string, author: string) => void;
  allQuotesObjects: QuoteObject[];
}

export type InputStuffProps = {
  newQuote: string;
  newAuthor: string;
  setNewQuote: (value: string) => void;
  setNewAuthor: (value: string) => void;
  addQuote: (quote: string, author: string) => void;
}