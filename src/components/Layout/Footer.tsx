import { useState, useRef } from "react";
import { FooterProps, InputStuffProps } from "../../types/footerTypes";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = ({ addQuote }: FooterProps) => {
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  return (
    <Row className="px-3 py-3 fixed-bottom">
      <Col>
        <InputNewQuotesForm
          newQuote={newQuote}
          newAuthor={newAuthor}
          setNewQuote={setNewQuote}
          setNewAuthor={setNewAuthor}
          addQuote={addQuote}
        />
      </Col>
    </Row>
  );
}

const InputNewQuotesForm = ({
  newQuote,
  newAuthor,
  setNewQuote,
  setNewAuthor,
  addQuote,
}: InputStuffProps) => {
  const [feedback, setFeedback] = useState("");
  const quoteInputRef = useRef(null);

  function tempFeedbackChange(value: string) {
    setFeedback(value);
    setTimeout(() => {
      setFeedback("");
    }, 2500);
  }

  function handleNewQuoteChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewQuote(event.target.value);
  }

  function handleNewAuthorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewAuthor(event.target.value);
  }

  function handleAddButtonClick() {
    if (newQuote.trim() === "" || newAuthor.trim() === "") {
      console.log("Both quote and author must be provided.");
      tempFeedbackChange("Beide Felder müssen ausgefüllt sein!");
    } else {
      addQuote(newQuote, newAuthor);
      console.log("New Quote was added: " + newQuote + " -" + newAuthor);
      tempFeedbackChange("Das neue Zitat wurde hinzugefügt!");
      setNewQuote(""); 
      setNewAuthor(""); 
      quoteInputRef.current.focus();
    }
  }

  return (
    <>
      <div>{feedback}</div>
      <InputGroup className="mt-2">
        <FormControl
          placeholder="Zitat"
          value={newQuote}
          ref={quoteInputRef}
          onChange={handleNewQuoteChange}
          onKeyDown={(event) => {
            console.log(event.key);
            if (event.key === "Enter") {
              handleAddButtonClick();
            }
          }}
        ></FormControl>
        <FormControl
          placeholder="Autor"
          value={newAuthor}
          onChange={handleNewAuthorChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddButtonClick();
            }
          }}
        ></FormControl>
        <button className="btn btn-success" onClick={handleAddButtonClick}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </InputGroup>
    </>
  );
}
