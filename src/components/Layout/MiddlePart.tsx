import { useState, useEffect } from "react";
import {
  pastIndexCounter,
  pastIndex,
  pushIndex,
  removeLastIndex,
} from "../../utils/TempFunctionFile";
import { Row, Col, Button } from "react-bootstrap";
import {
  MiddlePartProps,
  GoToLastQuoteProps,
  OutputsProps,
  GoToNextQuoteProps,
} from "../../types/middlePartTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { EditButton, RemoveButton } from "../Elements/Buttons";

export function MiddlePart({
  editedQuote,
  editedAuthor,
  saveChanges,
  automaticStatus,
  savedQuotes,
  removeQuote,
  setCurrentQIndex,
  isEditing,
  setEditedQuote,
  setEditedAuthor,
  allQuotesObjects,
  currentQIndex,
  feedbackDom,
  changeDomFeedback,
  isOutputVisible,
  toggleEdit,
}: MiddlePartProps) {
  const [outputQuote, setOutputQuote] = useState("");
  const [outputAuthor, setOutputAuthor] = useState("");

  // Function to display the current quote
  function displayQuote() {
    if (savedQuotes.length > 0) {
      const quote = savedQuotes[currentQIndex];
      setOutputQuote(quote.quote);
      setOutputAuthor(quote.author);
    }
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
    if (pastIndexCounter - 1 >= 1) {
      console.log(pastIndexCounter);
      removeLastIndex();
      setCurrentQIndex(pastIndex);
      displayQuote();
    } else {
      nextQuote();
    }
  }

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

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      nextQuote();
    } else if (event.key === "ArrowLeft") {
      lastQuote();
    }
  }

  useEffect(() => {
    // Füge den Event-Listener hinzu, nachdem die Zitate geladen wurden
    document.addEventListener("keydown", handleKeyDown);

    // Event-Listener entfernen, wenn die Komponente unmontiert wird
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [savedQuotes]);

  useEffect(() => {
    let quoteInterval;
    if (automaticStatus === "1 min") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 60000);
    } else if (automaticStatus === "2 min") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 120000);
    } else if (automaticStatus === "5 min") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 300000);
    } else if (automaticStatus === "10 min") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 600000);
    } else if (automaticStatus === "20 min") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 1200000);
    } else if (automaticStatus === "40 min") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 2400000);
    } else if (automaticStatus === "1 h") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 3600000);
    } else if (automaticStatus === "2 h") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 7200000);
    } else if (automaticStatus === "4 h") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 14400000);
    } else if (automaticStatus === "8 h") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 28800000);
    } else if (automaticStatus === "1 d") {
      clearInterval(quoteInterval);
      quoteInterval = setInterval(nextQuote, 86400000);
    } else if (automaticStatus === "Ausgeschaltet") {
      clearInterval(quoteInterval);
    }
  }, [automaticStatus]);

  return (
    <>
      {isOutputVisible && (
        <Row className="mx-1 mt-5 py-5" style={{ background: "#f5f5f5" }}>
          <Col md={1}>
            <GoToLastQuote lastQuote={lastQuote} />
          </Col>
          <Col md={6}>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  placeholder={outputQuote}
                  onChange={(e) => setEditedQuote(e.target.value)}
                />
                <input
                  type="text"
                  placeholder={outputAuthor}
                  onChange={(e) => setEditedAuthor(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      saveChanges(editedQuote, editedAuthor);
                      changeDomFeedback();
                    }
                  }}
                />
              </div>
            ) : (
              <Outputs
                outputQuote={outputQuote}
                outputAuthor={outputAuthor}
                allQuotesObjects={allQuotesObjects}
                currentQIndex={currentQIndex}
              />
            )}
          </Col>
          <Col md={1}>
            <GoToNextQuote nextQuote={nextQuote} />
          </Col>
          <Col className="mx-2" md={1}>
            <EditButton
              feedbackDom={feedbackDom}
              changeDomFeedback={changeDomFeedback}
              isEditing={isEditing}
              toggleEdit={toggleEdit}
              saveChanges={() => {
                saveChanges(editedQuote, editedAuthor);
              }}
            />
          </Col>
          <Col md={1}>
            <RemoveButton
              removeQuote={removeQuote}
              changeDomFeedback={changeDomFeedback}
            />
          </Col>
        </Row>
      )}
    </>
  );
}

function GoToLastQuote({ lastQuote }: GoToLastQuoteProps) {
  return (
    <Button variant="light" onClick={lastQuote}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
  );
}

function Outputs({
  outputQuote,
  outputAuthor,
  allQuotesObjects,
  currentQIndex,
}: OutputsProps) {
  const object = allQuotesObjects[currentQIndex];
  const [isFavorited, setIsFavorited] = useState(object ? object.fav : false);

  function sendCheckboxState() {
    if (object) {
      const newValue = !isFavorited;
      setIsFavorited(newValue);
      allQuotesObjects[currentQIndex].fav = newValue;
      console.log(allQuotesObjects);
      return;
    }
    return sendCheckboxState;
  }

  if (!object) {
    return null;
  }

  return (
    <>
      <div>{outputQuote}</div>
      <div>{"- " + outputAuthor}</div>
      <span 
        
        onClick={sendCheckboxState}
        className="mt-3 text-danger"
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon
          icon={isFavorited ? faHeart : faHeartBroken}
          size="2x"
        />
      </span>
    </>
  );
}

function GoToNextQuote({ nextQuote }: GoToNextQuoteProps) {
  return (
    <Button variant="light" onClick={nextQuote}>
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  );
}
