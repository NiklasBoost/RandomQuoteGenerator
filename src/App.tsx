import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import { Header } from "./components/quotes/Header.tsx";
import { MiddlePart } from "./components/quotes/MiddlePart.tsx";
import { Footer } from "./components/quotes/Footer.tsx";
import { QuoteObject } from "./types/types.tsx";
import { QuoteOverview } from "./components/quotes/QuoteOverview.tsx";
import { SettingsModal } from "./components/quotes/settings.tsx";

const pastIndexList: number[] = [];
let pastIndexCounter: number;
let pastIndex: number;

function App() {
  const [allQuotesObjects, setAllQuotesObjects] = useState<QuoteObject[]>([]);

  const [outputQuote, setOutputQuote] = useState("");
  const [outputAuthor, setOutputAuthor] = useState("");
  
  const [savedQuotes, setSavedQuotes] = useState<QuoteObject[]>([]);
  const [isEditing, setIsEditing] = useState(false); // Add an edit mode state
  const [editedQuote, setEditedQuote] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [feedbackDom, setFeedbackDom] = useState('');

  const [isOutputVisible, setIsOutputVisisble] = useState(true);
  const [isAllQuotesVisible, setIsAllQuotesVisible] = useState(false);
  const [isFavQuotesVisible, setIsFavQuotesVisible] = useState(false);
  const [isSearchQuotesVisible, setIsSearchQuotesVisible] = useState(false);
  const [searchResult, setSearchResult] = useState<QuoteObject[]>([]);

  const [automaticStatus, setAutomaticStatus] = useState('Ausgeschaltet');

  function toggleQuotesContainer(stateSetter: React.Dispatch<React.SetStateAction<boolean>>) {
    stateSetter(prev => !prev);
  }

  useEffect(() => {
    let quoteInterval;
    if(automaticStatus === '1 min') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 60000);
    } else if (automaticStatus === '2 min') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 120000);
    } else if (automaticStatus === '5 min') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 300000);
    } else if (automaticStatus === '10 min') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 600000);
    } else if (automaticStatus === '20 min') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 1200000);
    } else if (automaticStatus === '40 min') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 2400000);
    } else if (automaticStatus === '1 h') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 3600000);
    } else if (automaticStatus === '2 h') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 7200000);
    } else if (automaticStatus === '4 h') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 14400000);
    } else if (automaticStatus === '8 h') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 28800000);
    } else if (automaticStatus === '1 d') {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 86400000);
    } else if (automaticStatus === 'Ausgeschaltet') {
      clearInterval(quoteInterval);
    }
  }, [automaticStatus])

  useEffect(() => {
    if(isAllQuotesVisible || isFavQuotesVisible || isSearchQuotesVisible) {
      toggleQuotesContainer(setIsOutputVisisble);
    } else if(!isAllQuotesVisible && !isFavQuotesVisible && !isSearchQuotesVisible) {
      setIsOutputVisisble(true);
    }
  }, [isAllQuotesVisible, isFavQuotesVisible, isSearchQuotesVisible])

  function handleKeyDown (event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      nextQuote();
    } else if (event.key === "ArrowLeft") {
      lastQuote();
    }
  };

  // Load saved quotes from local storage on component mount
  useEffect(() => {
    const savedQuotesJSON = localStorage.getItem("quotes");
    if (savedQuotesJSON !== null) {
      const parsedQuotes = JSON.parse(savedQuotesJSON);
      setSavedQuotes(parsedQuotes);
      setAllQuotesObjects(parsedQuotes);
      setCurrentQIndex(0);
    }
  }, []);

  useEffect(() => {
    // Füge den Event-Listener hinzu, nachdem die Zitate geladen wurden
    document.addEventListener("keydown", handleKeyDown);
  
    // Event-Listener entfernen, wenn die Komponente unmontiert wird
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [savedQuotes]);


  // Display the current quote
  useEffect(() => {
    if (outputQuote === "" || outputAuthor === "") {
      displayQuote();
    }
  }, [outputQuote, outputAuthor]);

  // Display a quote when saved quotes change or on component mount
  useEffect(() => {
    if (savedQuotes.length > 0) {
      displayQuote();
    }
  }, [savedQuotes]);

  useEffect(() => {
    displayQuote();
  }, [currentQIndex]);

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
    const updatedQuotes = [
      ...savedQuotes,
      { quote: newQuote, author: newAuthor, fav: false },
    ];
    setSavedQuotes(updatedQuotes);
    setAllQuotesObjects(updatedQuotes);
    setCurrentQIndex(updatedQuotes.length - 1);

    // Save to local storage
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  }

  // Function to navigate to the next quote
  function nextQuote() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * savedQuotes.length);
    } while (pastIndex === newIndex);

    setCurrentQIndex(newIndex);
    pushIndex(newIndex);
    displayQuote();
  }

  // Function to navigate to the last quote
  function lastQuote() {
    if (( pastIndexCounter-1 ) >= 1) {
      console.log(pastIndexCounter)
      removeLastIndex();
      setCurrentQIndex(pastIndex);
      displayQuote();
    } else {
      nextQuote();
    }
  }

  // Function to remove a quote
  function removeQuote() {
    if (savedQuotes.length <= 3) {
      console.log("Add more quotes first");
    } else {
      const updatedQuotes = [...savedQuotes];
      updatedQuotes.splice(currentQIndex, 1);
      setSavedQuotes(updatedQuotes);
      setAllQuotesObjects(updatedQuotes);

      if (currentQIndex >= updatedQuotes.length) {
        setCurrentQIndex(updatedQuotes.length - 1);
      }

      // Save to local storage
      localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
      console.log(allQuotesObjects);
    }
  }


  // Function to save edited quote
  function saveChanges(editedQuote: string, editedAuthor: string) {
    const updatedQuotes = [...savedQuotes];
    updatedQuotes[currentQIndex].quote = editedQuote;
    updatedQuotes[currentQIndex].author = editedAuthor;
    setSavedQuotes(updatedQuotes);
    setAllQuotesObjects(updatedQuotes);
    setIsEditing(false);

    // Save to local storage
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  }

  function pushIndex(i: number) {
    pastIndexList.push(i);
    pastIndexCounter = pastIndexList.length
    pastIndex = pastIndexList[pastIndexCounter - 1];
  
    // console.log('past Index: ' + pastIndex);
    console.log('Past Index Array: ' + pastIndexList);
    // console.log('Counter: ' + pastIndexCounter);
  }
  
  function removeLastIndex() {
    pastIndexList.pop();
    pastIndexCounter = pastIndexList.length
    pastIndex = pastIndexList[pastIndexCounter - 1];
    console.log(pastIndexList)
  }

  function changeDomFeedback() {
    if(isEditing) {
      setFeedbackDom('Gespeichert!');
      setTimeout(() => {
        setFeedbackDom('');
      }, 2500);
    }
  }

  return (
    <Container fluid style={{ minHeight: '100vh' }}>
      <Header
        feedbackDom={feedbackDom}
        setFeedbackDom={setFeedbackDom}
        changeDomFeedback={changeDomFeedback}
        saveChanges={saveChanges}
        isEditing={isEditing}
        editedQuote={editedQuote}
        editedAuthor={editedAuthor}
        allQuotesObjects={allQuotesObjects}
        toggleQuotesContainer={toggleQuotesContainer}
        isAllQuotesVisible={isAllQuotesVisible}
        setIsAllQuotesVisible={setIsAllQuotesVisible}
        isFavQuotesVisible={isFavQuotesVisible}
        setIsFavQuotesVisible={setIsFavQuotesVisible}
        setSearchResult={setSearchResult}
        setIsSearchQuotesVisible={setIsSearchQuotesVisible}
      />
      <QuoteOverview
        allQuotesObjects={allQuotesObjects}
        isAllQuotesVisible={isAllQuotesVisible}
        isFavQuotesVisible={isFavQuotesVisible}
        isSearchQuotesVisible={isSearchQuotesVisible}
        searchResult={searchResult}
        removeQuote={removeQuote}
        changeDomFeedback={changeDomFeedback}
      />
      <SettingsModal
        automaticStatus={automaticStatus}
        setAutomaticStatus={setAutomaticStatus}
      />
      <MiddlePart
        feedbackDom={feedbackDom}
        changeDomFeedback={changeDomFeedback}
        saveChanges={saveChanges}
        outputQuote={outputQuote}
        outputAuthor={outputAuthor}
        allQuotesObjects={allQuotesObjects}
        currentQIndex={currentQIndex}
        nextQuote={nextQuote}
        lastQuote={lastQuote}
        removeQuote={removeQuote}
        isEditing={isEditing} // Pass the edit mode state to MiddlePart
        editedQuote={editedQuote} // Pass the edited quote and author
        editedAuthor={editedAuthor}
        setEditedQuote={setEditedQuote} // Pass the setters for edited quote and author
        setEditedAuthor={setEditedAuthor}
        isOutputVisible={isOutputVisible}
        setIsEditing={setIsEditing}
      />
      <Footer 
        addQuote={addQuote} 
        allQuotesObjects={allQuotesObjects} 
      />
    </Container>
    
  );
}

export default App;
