class quotes {
  constructor(quote, author) {
    this.quote = quote;
    this.author = author;
  }
}

let allQuotesObjects = [];
const savedQuotesJSON = localStorage.getItem('quotes');
const outputDiv = document.getElementById("output");
const savedQuotes = JSON.parse(savedQuotesJSON);
let lastQIndex; //helpcode, for don't have the same Quote twice

setInterval(function() {
  if(outputDiv.innerHTML === '') {
    displayQuote();
  }
}, 2000);

function displayQuote() {
  if (savedQuotesJSON !== null) {
    allQuotesObjects = savedQuotes;
  }
  let currentQIndex = 0;
  output.textContent = allQuotesObjects[currentQIndex];
  
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
  output.textContent = allQuotesObjects[currentQIndex];
}

let editButton = false;

function editQuote() {
  const container = document.getElementById('output');
  container.contentEditable = true;
  container.focus();
}

function saveChanges() {
  const container = document.getElementById('output');
  container.contentEditable = false;
  const editedQuote = container.innerHTML;
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
    nextQuote(outputDiv);
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