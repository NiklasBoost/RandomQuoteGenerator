import { useState } from "react";

type MiddlePartProps = {
  outputQuote: string;
  outputAuthor: string;
  nextQuote: () => void;
  lastQuote: () => void;
  removeQuote: () => void;
  isEditing: boolean; // Added the isEditing prop
  editedQuote: string; // Added the edited quote and author props
  editedAuthor: string;
  setEditedQuote: (value: string) => void; // Added setters for edited quote and author
  setEditedAuthor: (value: string) => void;
};

export function MiddlePart({ 
  outputQuote, 
  outputAuthor, 
  nextQuote, 
  lastQuote, 
  removeQuote,
  isEditing,
  editedQuote,
  editedAuthor,
  setEditedQuote,
  setEditedAuthor }: MiddlePartProps) {

  const editQuote = () => {
    setEditedQuote(outputQuote);
    setEditedAuthor(outputAuthor);
  }
  const [feedbackDom, setFeedbackDom] = useState('');
  function changeDomFeedback() {
    setFeedbackDom('Wurde entfernt!');
    setTimeout(() => {
      setFeedbackDom('');
    }, 2500);
  };

  return (
    <div className="middle-part">
      <div className="quote-container">
        <GoToLastQuote lastQuote={lastQuote} />
        {isEditing ? (
          <div className="edit-field">
            <input 
              type="text"
              placeholder={outputQuote}
              onChange={(e) => setEditedQuote(e.target.value)}
            />
            <input
              type="text"
              placeholder={outputAuthor}
              onChange={(e) => setEditedAuthor(e.target.value)} 
            />
          </div>
        ) : (
          <Outputs outputQuote={outputQuote} outputAuthor={outputAuthor} />
        )}
        <GoToNextQuote nextQuote={nextQuote} />
        <RemoveButton 
          removeQuote={removeQuote}
          changeDomFeedback={changeDomFeedback} />
        <div>{feedbackDom}</div>
      </div>
    </div>
  );
}

type GoToLastQuoteProps = {
  lastQuote: () => void;
}

function GoToLastQuote({ lastQuote }: GoToLastQuoteProps) {
  
  return (
    <div className="nested-layout">
      <button 
        className="last-quote last-quote-js"
        onClick={lastQuote}
      >
        <img className="backward-arrow-img" src="src/components/styles/pictures/backward_arrow.png"></img>
      </button>
    </div>
  )
}

type OutputsProps = {
  outputQuote: string;
  outputAuthor: string;
}

function Outputs({outputQuote, outputAuthor}: OutputsProps) {

 return (
  <div  className="nested-layout">
    <div id="output-quote">{outputQuote}</div>
    <div id="output-author">{outputAuthor}</div>
  </div>
 )
}

type GoToNextQuoteProps = {
  nextQuote: () => void;
}

function GoToNextQuote({ nextQuote }: GoToNextQuoteProps) {
 
  return (
    <div  className="nested-layout">
      <button 
        className="next-quote next-quote-js" 
        onClick={nextQuote}>
        <img className="forward-arrow-img" src="src\components\styles\pictures\forward_arrow.png"></img>
      </button>
    </div>
  )
}

type RemoveButtonProps = {
  removeQuote: () => void;
  changeDomFeedback: () => void;
}

function RemoveButton({ removeQuote, changeDomFeedback }:RemoveButtonProps) {
 
  return (
    <div  className="nested-layout">
      <button 
      className="remove-button"
      onClick={ () => {
        removeQuote();
        changeDomFeedback();
      }}>
        Remove
      </button>
    </div>
  )
}