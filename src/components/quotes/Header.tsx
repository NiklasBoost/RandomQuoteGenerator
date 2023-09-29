import { useState} from "react";
import { QuoteObject, HeaderProps, AllQuotesProps, SearchbarProps, EditProps } from "../../types/types";

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
  setIsAllQuotesVisible }: HeaderProps) {
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="header">
      <AllQuotes
        toggleQuotesContainer={toggleQuotesContainer}
        isAllQuotesVisible={isAllQuotesVisible}
        setIsAllQuotesVisible={setIsAllQuotesVisible}
      />
      <Searchbar 
        allQuotesObjects={allQuotesObjects}/>
      <Edit 
        feedbackDom={feedbackDom}
        setFeedbackDom={setFeedbackDom}
        changeDomFeedback={changeDomFeedback}
        isEditing={isEditing}
        toggleEdit={toggleEdit} 
        saveChanges={() => {
          // save changes logic can be added here
          saveChanges(editedQuote, editedAuthor);
        }} />
    </div>
  );
}

function AllQuotes({toggleQuotesContainer, isAllQuotesVisible, setIsAllQuotesVisible}: AllQuotesProps) {
  
  return ( 
    <button 
      onClick={() => {
        toggleQuotesContainer(setIsAllQuotesVisible)}
      }
    >
      Alle Zitate
    </button>
  )
}

function Searchbar({ allQuotesObjects }: SearchbarProps ) {
  const [searchbarInput, setSearchbarInput] = useState('');
  const [searchResult, setSearchResult] = useState<QuoteObject[]>([]);

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
    <>
      <div className="placeholder-header"></div>
      <div className="searchbar-container">
        <input 
          className="searchbar"
          placeholder="search your quote - press enter for search!"
          value={searchbarInput}
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              searchInput();
              toggleQuotesContainer(setIsSearchQuotesVisible);
            }
          }} />
      </div>
    </>
  );
}


function Edit({isEditing, toggleEdit, saveChanges, feedbackDom, changeDomFeedback} : EditProps) {

  return (
    <div className="edit-container">
      <button 
        className="edit-button-js edit-button"
        onClick={() => {
          if (isEditing) {
            saveChanges(); // Call the saveChanges function when editing
            changeDomFeedback();
          }
          toggleEdit(); // Toggle the edit mode
        }}
      >  
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <div>{feedbackDom}</div>
    </div>
  );
}