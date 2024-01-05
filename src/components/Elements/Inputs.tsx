import { QuoteObject } from "../../types/types";
import { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

interface SearchbarProps {
  toggleQuotesContainer: (
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  allQuotesObjects: QuoteObject[];
  setSearchResult: React.Dispatch<React.SetStateAction<QuoteObject[]>>;
  setIsSearchQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export const Searchbar = ({
  toggleQuotesContainer,
  allQuotesObjects,
  setSearchResult,
  setIsSearchQuotesVisible,
}: SearchbarProps) => {
  const [searchbarInput, setSearchbarInput] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchbarInput(event.target.value);
  }
  
  useEffect(() => {
    const lowercaseInput = searchbarInput.toLowerCase();
    const resultArray = allQuotesObjects.filter((quoteObject) => {
      const lowercaseQuote = quoteObject.quote.toLowerCase();
      const lowercaseAuthor = quoteObject.author.toLowerCase();
      return (
        lowercaseQuote.includes(lowercaseInput) ||
        lowercaseAuthor.includes(lowercaseInput)
        );
    });
    setSearchResult(resultArray);

    if(searchbarInput === '') {
      setIsSearchQuotesVisible(false);
    } else {
      toggleQuotesContainer(setIsSearchQuotesVisible);
    }
  }, [searchbarInput])

  return (
    <InputGroup>
      <FormControl
        className="searchbar"
        placeholder="Suche nach Zitaten"
        value={searchbarInput}
        onChange={handleInputChange}
      />
    </InputGroup>
  );
}
