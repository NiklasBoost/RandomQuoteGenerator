import { useState} from "react";

type QuoteObject = {
  quote: string;
  author: string;
}

type HeaderProps = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  editedQuote: string;
  setEditedQuote: (value: string) => void;
  editedAuthor: string;
  setEditedAuthor: (value: string) => void;
  allQuotesObjects: QuoteObject[];
  saveChanges: (editedQuote: string, editedAuthor: string) => void;
};

export function Header({ 
  saveChanges,
  isEditing,
  setIsEditing,
  editedQuote,
  setEditedQuote,
  editedAuthor,
  setEditedAuthor,
  allQuotesObjects }: HeaderProps) {
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="header">
      <Searchbar 
        allQuotesObjects={allQuotesObjects}/>
      <Edit 
        isEditing={isEditing}
        toggleEdit={toggleEdit} 
        saveChanges={() => {
          // save changes logic can be added here
          saveChanges(editedQuote, editedAuthor);
        }} />
    </div>
  );
}


interface SearchbarProps {
  allQuotesObjects: QuoteObject[];
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
            }
          }} />
      </div>
      <div>
        {searchResult.map((quoteObject, index) => (
          <div key={index}>
            <p>Quote: {quoteObject.quote}</p>
            <p>Author: {quoteObject.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

type EditProps = {
  isEditing: boolean;
  toggleEdit: () => void;
  saveChanges: () => void;
}

function Edit({isEditing, toggleEdit, saveChanges}: EditProps) {
  const [feedbackDom, setFeedbackDom] = useState('');
  function changeDomFeedback() {
    if(isEditing) {
      setFeedbackDom('Gespeichert!');
      setTimeout(() => {
        setFeedbackDom('');
      }, 2500);
    }
  }
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