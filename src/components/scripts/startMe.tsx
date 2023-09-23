import { Header } from "../quotes/Header.tsx";
import { MiddlePart } from "../quotes/MiddlePart.tsx";
import { Footer } from "../quotes/Footer.tsx";
import { displayQuote } from "./Quotesscript.tsx";
import { useState, useEffect } from "react";

console.log('hello');

class QuoteObject {
  quote: string;
  author: string;

  constructor(quote: string, author: string) {
    this.quote = quote;
    this.author = author;
  }
}

function App() {
  const [allQuotesObjects, setAllQuotesObjects] = useState<QuoteObject[]>([]);
  const [savedQuotesJSON, setSavedQuotesJSON] = useState<string | null>(
    localStorage.getItem('quotes')
  );
  
  const [outputQuote, setOutputQuote] = useState<string>('');
  const [outputAuthor, setOutputAuthor] = useState<string>('');

  const [savedQuotes, setSavedQuotes] = useState<QuoteObject[]>([]);

  useEffect(() => {
    if (savedQuotesJSON !== null) {
      const parsedQuotes = JSON.parse(savedQuotesJSON) as QuoteObject[];
      setSavedQuotes(parsedQuotes);
    }
  }, [savedQuotesJSON]);

  useEffect(() => {
    if (outputQuote === '' || outputAuthor === '') {
      displayQuote();
    }
  }, [outputQuote, outputAuthor]);
  
  return (
    <div className='wrapper'>
      <Header />
      <MiddlePart />
      <Footer />
    </div>
  )
}

export default App;



