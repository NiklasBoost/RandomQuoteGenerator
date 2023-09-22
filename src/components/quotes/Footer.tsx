import { addQuote } from '../scripts/Quotesscript.js';

export function Footer() {
  return (
    <div className="footer">
      <div className="input-container">
        <InputStuff />
      </div>
      <div className="help-code-container">
        <HelpingButton />
      </div>
    </div>
  )
}

function InputStuff() {
  

  return (
    <>
      <input placeholder="the quote" className="input-field-quote"></input>
      <input placeholder="the author" className="input-field-author"></input>
      <button className="add-button">
        <img className="add-button-img" src="src\components\styles\pictures\plus-symbol-button.png"></img>
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