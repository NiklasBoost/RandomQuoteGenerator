import { pushIndex, removeLastIndex, pastIndexCounter, pastIndex } from "./goBack.tsx";
import { allQuotesObjects, savedQuotesJSON, outputQuote, outputAuthor, savedQuotes } from "./startMe.tsx";

interface QuoteObject {
  quote: string;
  author: string;
}

export function displayQuote(): number {
  let allQuoteObjects: QuoteObject[] = allQuotesObjects;
  if (savedQuotesJSON !== null) {
    allQuoteObjects = savedQuotes as QuoteObject[];
  }
  let currentQIndex = 0;

  outputQuote.textContent = allQuoteObjects[currentQIndex].quote;
  outputAuthor.textContent = allQuoteObjects[currentQIndex].author;

  return currentQIndex;
}

let currentQIndex = displayQuote();
let lastQIndex: number;

export function addQuote(): void {
  console.log('click');
  const newQuote1 = document.querySelector<HTMLInputElement>('.input-field-quote');
  const newQuote = newQuote1?.value || '';
  const newAuthor1 = document.querySelector<HTMLInputElement>('.input-field-author');
  const newAuthor = newAuthor1?.value || '';

  allQuotesObjects.push({ quote: newQuote, author: newAuthor });

  const allQuotesObjectsJASON = JSON.stringify(allQuotesObjects);
  localStorage.setItem('quotes', allQuotesObjectsJASON);

  if (newQuote1) newQuote1.value = '';
  if (newAuthor1) newAuthor1.value = '';
}

function nextQuote(): void {
  console.log('nextQuote function');
  lastQIndex = currentQIndex;
  pushIndex(currentQIndex);
  currentQIndex = Math.floor(Math.random() * allQuotesObjects.length);

  if (lastQIndex === currentQIndex) {
    currentQIndex++;
  }

  outputQuote.textContent = allQuotesObjects[currentQIndex].quote;
  outputAuthor.textContent = allQuotesObjects[currentQIndex].author;

  console.log(currentQIndex);
}

function lastQuote(): void {
  if (pastIndexCounter > 0) {
    console.log(currentQIndex);
    console.log(pastIndex);
    outputQuote.textContent = allQuotesObjects[pastIndex].quote;
    outputAuthor.textContent = allQuotesObjects[pastIndex].author;
    removeLastIndex();
  } else {
    outputQuote.textContent = 'Da ist kein letztes Zitat';
    outputAuthor.textContent = '- System';
  }
}

function removeQuote(aIndex: number): void {
  const arrayLength = allQuotesObjects.length;

  if (arrayLength <= 3) {
    console.log('add first new quotes');
  } else {
    allQuotesObjects.splice(aIndex, 1);
    currentQIndex++;
    nextQuote();
  }
}

let editButton = false;

function editQuote(): void {
  if (outputQuote) outputQuote.contentEditable = true;
  if (outputAuthor) outputAuthor.contentEditable = true;

  if (outputQuote) outputQuote.focus();
  if (outputAuthor) outputAuthor.focus();
}

function saveChanges(): void {
  if (outputQuote) outputQuote.contentEditable = false;
  if (outputAuthor) outputAuthor.contentEditable = false;

  const editedQuote = outputQuote?.innerHTML || '';
  const editedAuthor = outputAuthor?.innerHTML || '';
  allQuotesObjects[currentQIndex].quote = editedQuote;
  allQuotesObjects[currentQIndex].author = editedAuthor;
}

function checkInputFieldValue(addB: string): void {
  const quoteField = document.querySelector<HTMLInputElement>('.input-field-quote');
  const authorField = document.querySelector<HTMLInputElement>('.input-field-author');

  if (event?.key === 'Enter' || addB === 'addButton') {
    if (!quoteField || quoteField.value.trim() === '') {
      console.log('Fülle das Quotefeld zuerst aus!');
      return;
    } else if (!authorField || authorField.value.trim() === '') {
      console.log('Fülle das Autorenfeld zuerst aus!');
      return;
    } else {
      addQuote();
    }
  }
}


// document.querySelector('.edit-button-js')
// .addEventListener('click', () => {
//   if (editButton === false) {
//     editQuote();
//     document.querySelector('.edit-button-js').innerHTML = 'save it';
//       editButton = true;
//     } else if (editButton === true) {
//       saveChanges();
//       document.querySelector('.edit-button-js').innerHTML = 'edit';
//       editButton = false;
//     }
//   });
  
// document.querySelector('.next-quote-js')
//   .addEventListener('click', () => {
//     console.log('buttonhit');
//     nextQuote();
//   });

// document.querySelector('.last-quote-js')
//   .addEventListener('click', () => {
//     lastQuote();
//   });

// document.querySelector('.add-button')
//   .addEventListener('click', () => {
//     checkInputFieldValue('addButton');
//   })

// document.querySelector('.remove-button')
//   .addEventListener('click', () => {
//     removeQuote(currentQIndex)
//   });

// document.querySelector('.help-button')
//   .addEventListener('click', () => {
//     console.log("Inhalt des Arrays: ");
//     allQuotesObjects.forEach((quoteObj) => {
//       console.log(quoteObj);
//     });
//   });

// document.querySelector('.input-field-quote')
//   .addEventListener('keyup', () => {
//     checkInputFieldValue();
//   });

// document.querySelector('.input-field-author')
//   .addEventListener('keyup', () => {
//     checkInputFieldValue();
//   });

// document.addEventListener('keydown', () => {
//   if(event.key === 'ArrowRight') {
//     nextQuote();
//   } else if(event.key === 'ArrowLeft') {
//     lastQuote();
//   }
// });