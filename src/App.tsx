import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/Layout/Header.tsx";
import { MiddlePart } from "./components/Layout/MiddlePart.tsx";
import { Footer } from "./components/Layout/Footer.tsx";
import { QuoteObject } from "./types/types.tsx";
import { QuoteOverviews } from "./components/Layout/QuoteOverview/QuoteOverviews.tsx";
import { SettingsModal } from "./components/Modals/settings.tsx";

const App = () => {
  const [allQuotesObjects, setAllQuotesObjects] = useState<QuoteObject[]>([]);

  const [savedQuotes, setSavedQuotes] = useState<QuoteObject[]>([]);
  const [isEditing, setIsEditing] = useState(false); 
  
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [feedbackDom, setFeedbackDom] = useState("");

  const [isOutputVisible, setIsOutputVisisble] = useState(true);
  const [isAllQuotesVisible, setIsAllQuotesVisible] = useState(false);
  const [isFavQuotesVisible, setIsFavQuotesVisible] = useState(false);
  const [isSearchQuotesVisible, setIsSearchQuotesVisible] = useState(false);
  const [searchResult, setSearchResult] = useState<QuoteObject[]>([]);

  const [automaticStatus, setAutomaticStatus] = useState("Ausgeschaltet");

  function toggleQuotesContainer(
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    setIsAllQuotesVisible(false);
    setIsFavQuotesVisible(false);
    setIsSearchQuotesVisible(false);
    stateSetter(true);
  }

  useEffect(() => {
    if (isAllQuotesVisible || isFavQuotesVisible || isSearchQuotesVisible) {
      setIsOutputVisisble(false);
    } else if (
      !isAllQuotesVisible &&
      !isFavQuotesVisible &&
      !isSearchQuotesVisible
    ) {
      setIsOutputVisisble(true);
    }
  }, [isAllQuotesVisible, isFavQuotesVisible, isSearchQuotesVisible]);

  
  useEffect(() => {
    const savedQuotesJSON = localStorage.getItem("quotes");
    if (savedQuotesJSON !== null) {
      const parsedQuotes = JSON.parse(savedQuotesJSON);
      setSavedQuotes(parsedQuotes);
      setAllQuotesObjects(parsedQuotes);
      setCurrentQIndex(0);
    }
  }, []);

  
  function addQuote(newQuote: string, newAuthor: string) {
    const updatedQuotes = [
      ...savedQuotes,
      { quote: newQuote, author: newAuthor, fav: false },
    ];
    setSavedQuotes(updatedQuotes);
    setAllQuotesObjects(updatedQuotes);
    setCurrentQIndex(0);

    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  }

  function removeQuote(i:number) {
    if (savedQuotes.length <= 3) {
      console.log("Add more quotes first");
    } else {
      const updatedQuotes = [...savedQuotes];
      updatedQuotes.splice(i, 1);
      setSavedQuotes(updatedQuotes);
      setAllQuotesObjects(updatedQuotes);

      if (i >= updatedQuotes.length) {
        setCurrentQIndex(0);
      }

      localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
      console.log(allQuotesObjects);
    }
  }

  function saveChanges(quote: string, author: string) {
    const updatedQuotes = [...savedQuotes];
    updatedQuotes[currentQIndex].quote = quote;
    updatedQuotes[currentQIndex].author = author;
    setSavedQuotes(updatedQuotes);
    setAllQuotesObjects(updatedQuotes);
    setIsEditing(false);

    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  }

  function changeDomFeedback() {
    if (isEditing) {
      setFeedbackDom("Gespeichert!");
      setTimeout(() => {
        setFeedbackDom("");
      }, 2500);
    }
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <Container fluid style={{ minHeight: "100vh" }}>
      <Header
        allQuotesObjects={allQuotesObjects}
        toggleQuotesContainer={toggleQuotesContainer}
        isAllQuotesVisible={isAllQuotesVisible}
        isFavQuotesVisible={isFavQuotesVisible}
        isSearchQuotesVisible={isSearchQuotesVisible}
        setIsAllQuotesVisible={setIsAllQuotesVisible}
        setIsFavQuotesVisible={setIsFavQuotesVisible}
        setSearchResult={setSearchResult}
        setIsSearchQuotesVisible={setIsSearchQuotesVisible}
      />
      <QuoteOverviews
        allQuotesObjects={allQuotesObjects}
        isAllQuotesVisible={isAllQuotesVisible}
        isFavQuotesVisible={isFavQuotesVisible}
        isSearchQuotesVisible={isSearchQuotesVisible}
        searchResult={searchResult}
        removeQuote={removeQuote}
      />
      <SettingsModal
        automaticStatus={automaticStatus}
        setAutomaticStatus={setAutomaticStatus}
      />
      <MiddlePart
        automaticStatus={automaticStatus}
        feedbackDom={feedbackDom}
        changeDomFeedback={changeDomFeedback}
        saveChanges={saveChanges}
        savedQuotes={savedQuotes}
        allQuotesObjects={allQuotesObjects}
        currentQIndex={currentQIndex}
        setCurrentQIndex={setCurrentQIndex}
        removeQuote={removeQuote}
        toggleEdit={toggleEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        isOutputVisible={isOutputVisible}
      />
      <Footer addQuote={addQuote} allQuotesObjects={allQuotesObjects} />
    </Container>
  );
};

export default App;
