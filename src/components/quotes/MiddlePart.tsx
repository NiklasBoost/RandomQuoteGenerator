export function MiddlePart() {
  return (
    <div className="middle-part">
      <div className="quote-container">
        <GoToLastQuote />
        <Outputs />
        <GoToNextQuote />
        <RemoveButton />
      </div>
    </div>
  )
}

function GoToLastQuote() {
  return (
    <div  className="nested-layout">
      <button className="last-quote last-quote-js">
        <img className="backward-arrow-img" src="src/components/frontend/styles/pictures/backward_arrow.png"></img>
      </button>
    </div>
  )
}

function Outputs() {
 return (
  <div  className="nested-layout">
    <div id="output-quote"></div>
    <div id="output-author"></div>
  </div>
 )
}

function GoToNextQuote() {
  return (
    <div  className="nested-layout">
      <button className="next-quote next-quote-js">
        <img className="forward-arrow-img" src="src\components\frontend\styles\pictures\forward_arrow.png"></img>
      </button>
    </div>
  )
}

function RemoveButton() {
  return (
    <div  className="nested-layout">
      <button className="remove-button">
        Remove
      </button>
    </div>
  )
}