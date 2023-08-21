class quotes {
  constructor(quote, author) {
    this.quote = quote;
    this.author = author;
  }
}

let allQuotesObjects = [];
const savedQuotesJSON = localStorage.getItem('quotes');
const outputQuote = document.getElementById("output-quote");
const savedQuotes = JSON.parse(savedQuotesJSON);
let lastQIndex; //helpcode, for don't have the same Quote twice

setInterval(function() {
  if(outputQuote.innerHTML === '') {
    displayQuote();
  }
}, 2000);

function displayQuote() {
  if (savedQuotesJSON !== null) {
    allQuotesObjects = savedQuotes;
  }
  let currentQIndex = 0;
  outputQuote.textContent = allQuotesObjects[currentQIndex];
  
  return currentQIndex;
}

let currentQIndex = displayQuote();

function addQuote() {
  console.log('click')
  const newQuote1 = document.querySelector('.input-field-quote');
  const newQuote = document.querySelector('.input-field-quote').value;
  allQuotesObjects.push(newQuote);   
  const allQuotesObjectsJASON = JSON.stringify(allQuotesObjects);
  localStorage.setItem('quotes', allQuotesObjectsJASON);
  newQuote1.value = '';
}

function nextQuote(output) {
  lastQIndex = currentQIndex;
  currentQIndex = Math.floor(Math.random() * allQuotesObjects.length);
  if (lastQIndex === currentQIndex) {
    currentQIndex++;
  }
  output.textContent = allQuotesObjects[currentQIndex]; 
}

function removeQuote(aIndex) {
  let thisIndex = aIndex - 1
  allQuotesObjects.splice(thisIndex);
  outputQuote.textContent = allQuotesObjects[currentQIndex];
}

let editButton = false;

function editQuote() {
  outputQuote.contentEditable = true;
  outputQuote.focus();
}

function saveChanges() {
  outputQuote.contentEditable = false;
  const editedQuote = outputQuote.innerHTML;
  allQuotesObjects[currentQIndex] = editedQuote;
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
    nextQuote(outputQuote);
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
    console.log(allQuotesObjects);
  })