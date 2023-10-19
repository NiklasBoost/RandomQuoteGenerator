import { useState } from "react";
import { FooterProps, InputStuffProps } from "../types/footerTypes";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faArrowRight,
  faArrowLeft,
  faPlus,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

export function Footer({ addQuote, allQuotesObjects }: FooterProps) {
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  return (
    <Row className="px-3 py-3 fixed-bottom">
      <Col>
        <InputStuff
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

function InputStuff({
  newQuote,
  newAuthor,
  setNewQuote,
  setNewAuthor,
  addQuote,
}: InputStuffProps) {
  const [feedback, setFeedback] = useState("");
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
      // Handle empty input fields, you can show an error message here
      console.log("Both quote and author must be provided.");
      tempFeedbackChange("Beide Felder müssen ausgefüllt sein!");
    } else {
      addQuote(newQuote, newAuthor);
      console.log("New Quote was added: " + newQuote + " -" + newAuthor);
      tempFeedbackChange("Das neue Zitat wurde hinzugefügt!");
      setNewQuote(""); // Clear the input field after adding
      setNewAuthor(""); // Clear the input field after adding
    }
  }

  return (
    <>
      <div>{feedback}</div>
      <InputGroup className="mt-2">
        <FormControl
          placeholder="Zitat"
          value={newQuote}
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
        <Button variant="success" onClick={handleAddButtonClick}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </InputGroup>
    </>
  );
}
