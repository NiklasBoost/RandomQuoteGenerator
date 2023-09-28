import { MiddlePartProps, GoToLastQuoteProps, OutputsProps, GoToNextQuoteProps, RemoveButtonProps } from "../../types/types";

export function MiddlePart({ 
  editedQuote,
  editedAuthor,
  saveChanges,
  outputQuote, 
  outputAuthor, 
  nextQuote, 
  lastQuote, 
  removeQuote,
  isEditing,
  setEditedQuote,
  setEditedAuthor,
  allQuotesObjects,
  currentQIndex,
  feedbackDom,
  changeDomFeedback }: MiddlePartProps) {


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
              onKeyDown={(event) => {
                if(event.key === 'Enter') {
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
        <GoToNextQuote nextQuote={nextQuote} />
        <RemoveButton 
          removeQuote={removeQuote}
          changeDomFeedback={changeDomFeedback} />
        <div>{feedbackDom}</div>
      </div>
    </div>
  );
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


function Outputs({outputQuote, outputAuthor, allQuotesObjects, currentQIndex}: OutputsProps) {
  // const object = allQuotesObjects[currentQIndex];
  // const fav = object.fav; 
  // console.log(fav);

  // const [isChecked, setIsChecked] = useState<boolean>(fav);

  // useEffect(() => {
  //   setIsChecked(fav); 
  // }, [fav]);

  // const handleCheckboxChange = () => {
  //   const newValue = !isChecked; 
  //   setIsChecked(newValue);


  //   allQuotesObjects[currentQIndex].fav = newValue;
  // };


 return (
  <div  className="nested-layout">
    <div id="output-quote">{outputQuote}</div>
    <div id="output-author">{outputAuthor}</div>
    <div>
      <label>favorite?</label>
      <input 
        type="checkbox" 
        // checked={isChecked}
        // onChange={handleCheckboxChange}
      />
    </div>
  </div>
 )
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