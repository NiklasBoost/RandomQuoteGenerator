
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

function GoToLastQuote({ lastQuote }) {
  
  return (
    <div className="nested-layout">
      <button className="last-quote last-quote-js">
        <img className="backward-arrow-img" src="src/components/styles/pictures/backward_arrow.png"></img>
      </button>
    </div>
  )
}

function Outputs({outputQuote, outputAuthor}) {

 return (
  <div  className="nested-layout">
    <div id="output-quote"></div>
    <div id="output-author"></div>
  </div>
 )
}

function GoToNextQuote({ nextQuote }) {
 
  return (
    <div  className="nested-layout">
      <button className="next-quote next-quote-js">
        <img className="forward-arrow-img" src="src\components\styles\pictures\forward_arrow.png"></img>
      </button>
    </div>
  )
}

function RemoveButton({ removeQuote }) {
 
  return (
    <div  className="nested-layout">
      <button className="remove-button">
        Remove
      </button>
    </div>
  )
}