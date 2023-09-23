
type MiddlePartProps = {
  outputQuote: string;
  outputAuthor: string;
  nextQuote: () => void;
  lastQuote: () => void;
  removeQuote: () => void;
};

export function MiddlePart({ outputQuote, outputAuthor, nextQuote, lastQuote, removeQuote }: MiddlePartProps) {
  return (
    <div className="middle-part">
      <div className="quote-container">
        <GoToLastQuote lastQuote={lastQuote} />
        <Outputs outputQuote={outputQuote} outputAuthor={outputAuthor} />
        <GoToNextQuote nextQuote={nextQuote} />
        <RemoveButton removeQuote={removeQuote} />
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
        onClick={lastQuote}>
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
}

function RemoveButton({ removeQuote }:RemoveButtonProps) {
 
  return (
    <div  className="nested-layout">
      <button 
      className="remove-button"
      onClick={removeQuote}>
        Remove
      </button>
    </div>
  )
}