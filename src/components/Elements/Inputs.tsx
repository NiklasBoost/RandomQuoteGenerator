import { SearchbarProps } from "../../types/headerTypes";
import { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export function Searchbar({
  allQuotesObjects,
  setSearchResult,
  toggleQuotesContainer,
  setIsSearchQuotesVisible,
}: SearchbarProps) {
  const [searchbarInput, setSearchbarInput] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchbarInput(event.target.value);
  }

  function searchInput() {
    setSearchResult([]);
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
  }
  return (
    <InputGroup>
      <FormControl
        className="searchbar"
        placeholder="Suche nach Zitaten - einfach Enter drücken"
        value={searchbarInput}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchInput();
            toggleQuotesContainer(setIsSearchQuotesVisible);
          }
        }}
      />
    </InputGroup>
  );
}
