import { useState } from "react";

type QuoteObject = {
  quote: string;
  author: string;
}

interface FooterProps {
  addQuote: (quote: string, author: string) => void;
  allQuotesObjects: QuoteObject[];
}

export function Footer({ addQuote, allQuotesObjects }: FooterProps) {
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  return (
    <div className="footer">
      <div className="input-container">
        <InputStuff
          newQuote={newQuote}
          newAuthor={newAuthor}
          setNewQuote={setNewQuote}
          setNewAuthor={setNewAuthor}
          addQuote={addQuote}
        />
      </div>
      <div className="help-code-container">
        <HelpingButton allQuotesObjects={allQuotesObjects} />
      </div>
    </div>
  );
}

type InputStuffProps = {
  newQuote: string;
  newAuthor: string;
  setNewQuote: (value: string) => void;
  setNewAuthor: (value: string) => void;
  addQuote: (quote: string, author: string) => void;
}

function InputStuff({ newQuote, newAuthor, setNewQuote, setNewAuthor, addQuote }: InputStuffProps) {
  const handleNewQuoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuote(event.target.value);
  };

  const handleNewAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAuthor(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (newQuote.trim() === "" || newAuthor.trim() === "") {
      // Handle empty input fields, you can show an error message here
      console.log("Both quote and author must be provided.");
    } else {
      addQuote(newQuote, newAuthor);
      console.log('New Quote was added: ' + newQuote + ' -' + newAuthor);
      setNewQuote(""); // Clear the input field after adding
      setNewAuthor(""); // Clear the input field after adding
    }
  };

  return (
    <>
      <input 
        placeholder="the quote" 
        className="input-field-quote"
        value={newQuote}
        onChange={handleNewQuoteChange}>
      </input>
      <input
        placeholder="the author"
        className="input-field-author"
        value={newAuthor}
        onChange={handleNewAuthorChange}></input>
      <button className="add-button" onClick={handleAddButtonClick}>
        <img 
          className="add-button-img" src="src\components\styles\pictures\plus-symbol-button.png"
          alt="Add Quote"
        ></img>
      </button>
    </>
  )
}

function HelpingButton({ allQuotesObjects }: { allQuotesObjects: QuoteObject[] }) {
  const handleClick = () => {
    console.log(allQuotesObjects);
  }
  
  return (
    <button className="help-button" onClick={handleClick}>
      show all Quotes
    </button>
  )
}