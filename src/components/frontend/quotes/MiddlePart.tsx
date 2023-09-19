export function MiddlePart() {
  return (
    <>
      <GoToLastQuote />
      <Outputs />
      <GoToNextQuote />
      <RemoveButton />
    </>
  )
}

function GoToLastQuote() {
  return (
    <>
      <button className="last-quote last-quote-js">
        <img className="backward-arrow-img" src="src/components/frontend/styles/pictures/backward_arrow.png"></img>
      </button>
    </>
  )
}

function Outputs() {
 return (
  <>
    <div id="output-quote"></div>
    <div id="output-author"></div>
  </>
 )
}

function GoToNextQuote() {
  return (
    <>
      <button className="next-quote next-quote-js">
        <img className="forward-arrow-img" src="src\components\frontend\styles\pictures\forward_arrow.png"></img>
      </button>
    </>
  )
}

function RemoveButton() {
  return (
    <button className="remove-button">
      Remove
    </button>
  )
}