import { useState, useEffect } from 'react';
import { Header } from '../quotes/Header.tsx';
import { MiddlePart } from '../quotes/MiddlePart.tsx';
import { Footer } from '../quotes/Footer.tsx';

type QuoteObject = {
  quote: string;
  author: string;
}

function App() {
  const [allQuotesObjects, setAllQuotesObjects] = useState<QuoteObject[]>([]);
  const [outputQuote, setOutputQuote] = useState('');
  const [outputAuthor, setOutputAuthor] = useState('');
  const [savedQuotes, setSavedQuotes] = useState<QuoteObject[]>([]);
  const [editButton, setEditButton] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [lastQIndex, setLastQIndex] = useState<number | null>(null);

  // Load saved quotes from local storage on component mount
  useEffect(() => {
    const savedQuotesJSON = localStorage.getItem('quotes');
    if (savedQuotesJSON !== null) {
      const parsedQuotes = JSON.parse(savedQuotesJSON);
      setSavedQuotes(parsedQuotes);
      setAllQuotesObjects(parsedQuotes);
      setCurrentQIndex(0);
    }
  }, []);

  // Display the current quote
  useEffect(() => {
    if (outputQuote === '' || outputAuthor === '') {
      displayQuote();
    }
  }, [outputQuote, outputAuthor]);

  // Display a quote when saved quotes change or on component mount
  useEffect(() => {
    if (savedQuotes.length > 0) {
      displayQuote();
    }
  }, [savedQuotes]);

  // Function to display the current quote
  function displayQuote() {
    if (savedQuotes.length > 0) {
      const quote = savedQuotes[currentQIndex];
      setOutputQuote(quote.quote);
      setOutputAuthor(quote.author);
    }
  }

  // Function to add a new quote
  function addQuote(newQuote: string, newAuthor: string) {
    const updatedQuotes = [...savedQuotes, { quote: newQuote, author: newAuthor }];
    setSavedQuotes(updatedQuotes);
    setAllQuotesObjects(updatedQuotes);
    setCurrentQIndex(updatedQuotes.length - 1);

    // Save to local storage
    localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
  }

  // Function to navigate to the next quote
  function nextQuote() {
    setLastQIndex(currentQIndex);
    let newIndex = Math.floor(Math.random() * savedQuotes.length);
    if (lastQIndex === newIndex) {
      newIndex = (newIndex + 1) % savedQuotes.length;
    }
    setCurrentQIndex(newIndex);
    displayQuote();
  }

  // Function to navigate to the last quote
  function lastQuote() {
    if (lastQIndex !== null) {
      setCurrentQIndex(lastQIndex);
      setLastQIndex(null);
      displayQuote();
    }
  }

  // Function to remove a quote
  function removeQuote() {
    if (savedQuotes.length <= 3) {
      console.log('Add more quotes first');
    } else {
      const updatedQuotes = [...savedQuotes];
      updatedQuotes.splice(currentQIndex, 1);
      setSavedQuotes(updatedQuotes);
      setAllQuotesObjects(updatedQuotes);

      if (currentQIndex >= updatedQuotes.length) {
        setCurrentQIndex(updatedQuotes.length - 1);
      }

      // Save to local storage
      localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    }
  }

  // Function to toggle edit mode
  function toggleEdit() {
    setEditButton(!editButton);
  }

  // Function to save edited quote
  function saveChanges(editedQuote: string, editedAuthor: string) {
    const updatedQuotes = [...savedQuotes];
    updatedQuotes[currentQIndex].quote = editedQuote;
    updatedQuotes[currentQIndex].author = editedAuthor;
    setSavedQuotes(updatedQuotes);
    setAllQuotesObjects(updatedQuotes);
    setEditButton(false);

    // Save to local storage
    localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
  }

  return (
    <div className='wrapper'>
      <Header editButton={editButton} toggleEdit={toggleEdit} saveChanges={saveChanges} allQuotesObjects={allQuotesObjects} />
      <MiddlePart
        outputQuote={outputQuote}
        outputAuthor={outputAuthor}
        nextQuote={nextQuote}
        lastQuote={lastQuote}
        removeQuote={removeQuote}
      />
      <Footer addQuote={addQuote} allQuotesObjects={allQuotesObjects} />
    </div>
  );
}

export default App;




