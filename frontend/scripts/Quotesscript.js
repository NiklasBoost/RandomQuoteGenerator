class quoteObject {
  constructor(quote, author) {
    this.quote = quote;
    this.author = author;
  }
}

let allQuotesObjects = [];
const savedQuotesJSON = localStorage.getItem('quotes');
const outputQuote = document.getElementById('output-quote');
const outputAuthor = document.getElementById('output-author');
const savedQuotes = JSON.parse(savedQuotesJSON);

setInterval(function() {
  if(outputQuote.innerHTML === '' || outputAuthor.innerHTML === '') {
    displayQuote();
  }
}, 2000);

function displayQuote() {
  if (savedQuotesJSON !== null) {
    allQuotesObjects = savedQuotes;
  }
  let currentQIndex = 0;
  
  outputQuote.textContent = allQuotesObjects[currentQIndex].quote;
  outputAuthor.textContent = allQuotesObjects[currentQIndex].author;
  
  return currentQIndex;
}

let currentQIndex = displayQuote();

function addQuote() {
  console.log('click')
  const newQuote1 = document.querySelector('.input-field-quote');
  const newQuote = document.querySelector('.input-field-quote').value;
  const newAuthor1 = document.querySelector('.input-field-author');
  const newAuthor = document.querySelector('.input-field-author').value;

  allQuotesObjects.push(new quoteObject(newQuote, newAuthor));   

  const allQuotesObjectsJASON = JSON.stringify(allQuotesObjects);
  localStorage.setItem('quotes', allQuotesObjectsJASON);

  newQuote1.value = '';
  newAuthor1.value = '';
}

function nextQuote() {
  const lastQIndex = currentQIndex;
  currentQIndex = Math.floor(Math.random() * allQuotesObjects.length);

  // console.log('before if-statement: ' + lastQIndex, currentQIndex);
  if (lastQIndex === currentQIndex) {
    currentQIndex++;
  }
  // console.log('after if-statement: ' + lastQIndex, currentQIndex);
  outputQuote.textContent = allQuotesObjects[currentQIndex].quote; 
  outputAuthor.textContent = allQuotesObjects[currentQIndex].author;
}

function removeQuote(aIndex) {
  let thisIndex = aIndex - 1
  allQuotesObjects.splice(thisIndex);
  nextQuote();
}

let editButton = false;

function editQuote() {
  outputQuote.contentEditable = true;
  outputAuthor.contentEditable = true;
  outputQuote.focus();
  outputAuthor.focus();
}

function saveChanges() {
  outputQuote.contentEditable = false;
  outputAuthor.contentEditable = false;
  const editedQuote = outputQuote.innerHTML;
  const editedAuthor = outputAuthor.innerHTML;
  allQuotesObjects[currentQIndex].quote = editedQuote;
  allQuotesObjects[currentQIndex].author = editedAuthor;
}

function checkInputFieldValue() {
  const quoteField = document.querySelector('.input-field-quote');
  const authorField = document.querySelector('.input-field-author');

  if(event.key === 'Enter') {
    if (quoteField.value.trim() === '') {
      console.log('Fülle das Quotefeld zuerst aus!');
      return;
    } else if (authorField.value.trim() === '') {
      console.log('Fülle das Autorenfeld zuerst aus!');
      return;
    } else {
      addQuote();
    }
  }
}

document.querySelector('.edit-button-js')
.addEventListener('click', () => {
  if (editButton === false) {
    editQuote();
    document.querySelector('.edit-button-js').innerHTML = 'save it';
      editButton = true;
    } else if (editButton === true) {
      saveChanges();
      document.querySelector('.edit-button-js').innerHTML = 'edit';
      editButton = false;
    }
  });
  
document.querySelector('.next-quote-js')
  .addEventListener('click', () => {
    console.log('buttonhit');
    nextQuote();
  });

document.querySelector('.add-button')
  .addEventListener('click', () => {
    addQuote();
  })

document.querySelector('.remove-button')
  .addEventListener('click', () => {
    removeQuote(currentQIndex)
  });

document.querySelector('.help-button')
  .addEventListener('click', () => {
    console.log("Inhalt des Arrays: ");
    allQuotesObjects.forEach((quoteObj) => {
      console.log(quoteObj);
    });
  })