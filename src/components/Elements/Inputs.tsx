import { SearchbarProps } from "../../types/headerTypes";
import { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export function Searchbar({
  allQuotesObjects,
  setSearchResult,
  setIsSearchQuotesVisible,
}: SearchbarProps) {
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
      setIsSearchQuotesVisible(true);
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
