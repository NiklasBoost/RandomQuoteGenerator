import { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  pastIndexCounter,
  pastIndex,
  pushIndex,
  removeLastIndex,
} from "../../utils/TempFunctionFile";
import { Row, Col, Button } from "react-bootstrap";
import { QuoteObject } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { EditQuoteButton, RemoveQuoteButton } from "../Elements/Buttons";


interface MiddlePartProps {
  allQuotesObjects: QuoteObject[];
  savedQuotes: QuoteObject[];
  isEditing: boolean;
  isOutputVisible: boolean;
  automaticStatus: string;
  feedbackDom:  string;
  currentQIndex: number;
  changeDomFeedback: () => void;
  toggleEdit: () => void;
  removeQuote: (i:number) => void;
  setIsEditing: Dispatch<SetStateAction<boolean>>
  setCurrentQIndex: Dispatch<SetStateAction<number>>;
  saveChanges: (quote: string, author: string) => void;
};

export const MiddlePart = ({
  allQuotesObjects,
  savedQuotes,
  isEditing,
  isOutputVisible,
  automaticStatus,
  feedbackDom,
  currentQIndex,
  changeDomFeedback,
  toggleEdit,
  removeQuote,
  setIsEditing,
  setCurrentQIndex,
  saveChanges,
}: MiddlePartProps) => {
  const [outputQuote, setOutputQuote] = useState("");
  const [outputAuthor, setOutputAuthor] = useState("");

  function displayQuote() {
    if (savedQuotes.length > 0) {
      const quote = savedQuotes[currentQIndex];
      setOutputQuote(quote.quote);
      setOutputAuthor(quote.author);
    }
  }

  function nextQuote() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * savedQuotes.length);
    } while (pastIndex === newIndex);

    setCurrentQIndex(newIndex);
    pushIndex(newIndex);
    displayQuote();
  }

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

  useEffect(() => {
    if (outputQuote === "" || outputAuthor === "") {
      displayQuote();
    }
  }, [outputQuote, outputAuthor]);

  useEffect(() => {
    if (savedQuotes.length > 0) {
      displayQuote();
    }
  }, [savedQuotes]);

  useEffect(() => {
    displayQuote();
  }, [currentQIndex]);

  function handleArrowKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      nextQuote();
    } else if (event.key === "ArrowLeft") {
      lastQuote();
    }
  }

  useEffect(() => {
    if (!isEditing) {
      document.addEventListener("keydown", handleArrowKeyDown);

      return () => {
        document.removeEventListener("keydown", handleArrowKeyDown);
      };
    }
  }, [savedQuotes, isEditing]);

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
            <LastQuoteArrow lastQuote={lastQuote} />
          </Col>
          <Col md={6}>
            {isEditing ? (
              <div>
                <textarea
                  style={{
                    width: "600px",
                    height: "50px",
                    display: "block",
                    marginBottom: "5px",
                  }}
                  value={outputQuote}
                  onChange={(e) => setOutputQuote(e.target.value)}
                />
                <input
                  style={{
                    width: "250px",
                    display: "block",
                  }}
                  type="text"
                  value={outputAuthor}
                  onChange={(e) => setOutputAuthor(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      saveChanges(outputQuote, outputAuthor);
                      changeDomFeedback();
                    }
                  }}
                />
                <button
                  className="btn btn-outline-secondary mt-1"
                  onClick={() => setIsEditing(false)}
                >
                  Abbruch
                </button>
              </div>
            ) : (
              <QuoteOutput
                outputQuote={outputQuote}
                outputAuthor={outputAuthor}
                allQuotesObjects={allQuotesObjects}
                currentQIndex={currentQIndex}
              />
            )}
          </Col>
          <Col md={1}>
            <NextQuoteArrow nextQuote={nextQuote} />
          </Col>
          <Col className="mx-2" md={1}>
            <EditQuoteButton
              feedbackDom={feedbackDom}
              changeDomFeedback={changeDomFeedback}
              isEditing={isEditing}
              toggleEdit={toggleEdit}
              saveChanges={() => {
                saveChanges(outputQuote, outputAuthor);
              }}
            />
          </Col>
          <Col md={1}>
            <RemoveQuoteButton
              removeQuote={removeQuote}
              index={currentQIndex}
              allQuotesObjects={allQuotesObjects}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

interface LastQuoteArrowProps {
  lastQuote: () => void;
}

const LastQuoteArrow = ({ lastQuote }: LastQuoteArrowProps) => {
  return (
    <Button variant="light" onClick={lastQuote}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>
  );
};

interface QuoteOutputProps {
  outputQuote: string;
  outputAuthor: string;
  allQuotesObjects: QuoteObject[];
  currentQIndex: number;
}

const QuoteOutput = ({
  outputQuote,
  outputAuthor,
  allQuotesObjects,
  currentQIndex,
}: QuoteOutputProps) => {
  const object = allQuotesObjects[currentQIndex];
  const [isFavorited, setIsFavorited] = useState(object ? object.fav : false);

  useEffect(() => {
    if (object) {
      setIsFavorited(object.fav);
    }
  }, [currentQIndex]);

  function sendFavState() {
    if (object) {
      const newValue = !isFavorited;
      setIsFavorited(newValue);
      allQuotesObjects[currentQIndex].fav = newValue;
      console.log(allQuotesObjects);
      return;
    }
    return sendFavState;
  }

  if (!object) {
    return null;
  }

  return (
    <>
      <div>{outputQuote}</div>
      <div>{"- " + outputAuthor}</div>
      <span
        onClick={sendFavState}
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
};

interface NextQuoteArrowProps {
  nextQuote: () => void;
}


const NextQuoteArrow = ({ nextQuote }: NextQuoteArrowProps) => {
  return (
    <Button variant="light" onClick={nextQuote}>
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  );
};
