import { useState} from "react";
import { Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowRight, faArrowLeft, faPlus, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { HeaderProps, SearchbarProps, EditProps, FavQuotesProps } from "../../types/headerTypes";
import { AllQuotesProps } from "../../types/headerTypes";

export function Header({ 
  saveChanges,
  isEditing,
  setIsEditing,
  editedQuote,
  editedAuthor,
  allQuotesObjects,
  feedbackDom,
  setFeedbackDom,
  changeDomFeedback,
  toggleQuotesContainer,
  isAllQuotesVisible,
  setIsAllQuotesVisible,
  isFavQuotesVisible,
  setIsFavQuotesVisible,
  setSearchResult,
  setIsSearchQuotesVisible}: HeaderProps) {
 
  return (
    <Row className="mt-4">
      <Col>
        <AllQuotes
          toggleQuotesContainer={toggleQuotesContainer}
          isAllQuotesVisible={isAllQuotesVisible}
          setIsAllQuotesVisible={setIsAllQuotesVisible}
        />
        <FavQuotes
          toggleQuotesContainer={toggleQuotesContainer}
          isFavQuotesVisible={isFavQuotesVisible}
          setIsFavQuotesVisible={setIsFavQuotesVisible}
        />
      </Col>
      <Col md={6}>
        <Searchbar 
          allQuotesObjects={allQuotesObjects}
          setSearchResult={setSearchResult}
          toggleQuotesContainer={toggleQuotesContainer}
          setIsSearchQuotesVisible={setIsSearchQuotesVisible}
        />
      </Col>
      <Col>
        <SettingsButton/>
      </Col>
    </Row>

   
  );
}

function AllQuotes({toggleQuotesContainer, isAllQuotesVisible, setIsAllQuotesVisible}: AllQuotesProps) {
  
  return ( 
    <Button 
      className="mx-1" variant="primary"
      onClick={() => {
        toggleQuotesContainer(setIsAllQuotesVisible)}
      }
    >
      Deine Zitate
    </Button>
  )
}

function FavQuotes({toggleQuotesContainer, isFavQuotesVisible, setIsFavQuotesVisible}: FavQuotesProps) {
  return (
    <Button
      onClick={() => {
        toggleQuotesContainer(setIsFavQuotesVisible)
      }}  
      variant="primary"
    >
      Deine Favoriten
    </Button>

  )
}

function Searchbar({ allQuotesObjects, setSearchResult, toggleQuotesContainer, setIsSearchQuotesVisible }: SearchbarProps ) {
  const [searchbarInput, setSearchbarInput] = useState('');
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchbarInput(event.target.value);
  };


  function searchInput() {
    setSearchResult([]);
    const lowercaseInput = searchbarInput.toLowerCase();
    
    const resultArray = allQuotesObjects.filter((quoteObject) => {
      const lowercaseQuote = quoteObject.quote.toLowerCase();
      const lowercaseAuthor = quoteObject.author.toLowerCase();
      return lowercaseQuote.includes(lowercaseInput) || lowercaseAuthor.includes(lowercaseInput);
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
          if (event.key === 'Enter') {
            searchInput();
            toggleQuotesContainer(setIsSearchQuotesVisible);
          }
        }} />
    </InputGroup>

  );
}

function SettingsButton() {
  return  (
    <Button 
      className='position-absolute top-0 end-0 p-4' 
      variant='none'
      data-bs-toogle='modal'
      data-bs-target='#exampleModal'
    >
      <FontAwesomeIcon icon={faCog} size='2x' />
    </Button>
  )
}

// Das muss noch in eine andere Komponente

