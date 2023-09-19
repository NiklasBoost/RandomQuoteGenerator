export function Footer() {
  return (
    <>
      <InputStuff />
      <HelpingButton />
    </>
  )
}

function InputStuff() {
  return (
    <>
      <input placeholder="the quote" className="input-field-quote"></input>
      <input placeholder="the author" className="input-field-author"></input>
      <button className="add-button">
        <img className="add-button-img" src="src\components\frontend\styles\pictures\plus-symbol-button.png"></img>
      </button>
    </>
  )
}

function HelpingButton() {
  return (
    <button className="help-button">
    show all Quotes
    </button>
  )
}